const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../database');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

// ═══════════════════════════════════════════════════════════════════════════
// Multer config for document uploads
// ═══════════════════════════════════════════════════════════════════════════
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '..', 'arquivos', 'documentos');
    const fs = require('fs');
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `doc-${req.params.id}-${uniqueSuffix}${ext}`);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
  fileFilter: (req, file, cb) => {
    const allowed = /pdf|xlsx|xls|doc|docx|png|jpg|jpeg|csv/;
    const ext = path.extname(file.originalname).toLowerCase().replace('.', '');
    cb(null, allowed.test(ext));
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// Comerciais (legacy — no auth required for backward compat)
// ═══════════════════════════════════════════════════════════════════════════

db.exec(`
  CREATE TABLE IF NOT EXISTS comerciais_contatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    ativo INTEGER NOT NULL DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.get('/comerciais', (req, res, next) => {
  try {
    const contatos = db
      .prepare('SELECT * FROM comerciais_contatos WHERE ativo = 1 ORDER BY nome ASC')
      .all();
    res.json({ sucesso: true, data: contatos });
  } catch (err) { next(err); }
});

router.post('/comerciais', (req, res, next) => {
  try {
    const { nome, email } = req.body;
    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({ sucesso: false, mensagem: 'O campo "email" é obrigatório.' });
    }
    const emailNormalizado = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(emailNormalizado)) {
      return res.status(400).json({ sucesso: false, mensagem: 'Formato de e-mail inválido.' });
    }
    if (!nome || typeof nome !== 'string' || !nome.trim()) {
      return res.status(400).json({ sucesso: false, mensagem: 'O campo "nome" é obrigatório.' });
    }

    const result = db.prepare('INSERT INTO comerciais_contatos (nome, email) VALUES (?, ?)').run(nome.trim(), emailNormalizado);
    const novoContato = db.prepare('SELECT * FROM comerciais_contatos WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json({ sucesso: true, data: novoContato });
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE' || (err.message && err.message.includes('UNIQUE'))) {
      return res.status(409).json({ sucesso: false, mensagem: 'Já existe um contato cadastrado com este e-mail.' });
    }
    next(err);
  }
});

router.put('/comerciais/:id', (req, res, next) => {
  try {
    const contato = db.prepare('SELECT * FROM comerciais_contatos WHERE id = ?').get(req.params.id);
    if (!contato) return res.status(404).json({ sucesso: false, mensagem: 'Contato não encontrado.' });

    const novoStatus = contato.ativo === 1 ? 0 : 1;
    db.prepare('UPDATE comerciais_contatos SET ativo = ? WHERE id = ?').run(novoStatus, req.params.id);
    const contatoAtualizado = db.prepare('SELECT * FROM comerciais_contatos WHERE id = ?').get(req.params.id);
    res.json({ sucesso: true, data: contatoAtualizado });
  } catch (err) { next(err); }
});

router.delete('/comerciais/:id', (req, res, next) => {
  try {
    const contato = db.prepare('SELECT * FROM comerciais_contatos WHERE id = ?').get(req.params.id);
    if (!contato) return res.status(404).json({ sucesso: false, mensagem: 'Contato não encontrado.' });

    db.prepare('DELETE FROM comerciais_contatos WHERE id = ?').run(req.params.id);
    res.json({ sucesso: true, data: { id: parseInt(req.params.id), mensagem: 'Contato removido com sucesso.' } });
  } catch (err) { next(err); }
});

// ═══════════════════════════════════════════════════════════════════════════
// Admin quotation management (requires auth + admin)
// ═══════════════════════════════════════════════════════════════════════════

// ─── GET /api/admin/quotations ──────────────────────────────────────────────
router.get('/quotations', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { status, tipo, page = 1, limit = 50 } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);

    let where = [];
    let params = [];

    if (status) { where.push('l.pipeline_status = ?'); params.push(status); }
    if (tipo) { where.push('l.tipo = ?'); params.push(tipo); }

    const whereClause = where.length > 0 ? 'WHERE ' + where.join(' AND ') : '';

    const total = db.prepare(`SELECT COUNT(*) as count FROM leads l ${whereClause}`).get(...params).count;

    const quotations = db.prepare(`
      SELECT l.*,
        u.name as user_name, u.email as user_email, u.company as user_company,
        (SELECT COUNT(*) FROM cotacoes c WHERE c.lead_id = l.id) as total_cotacoes,
        (SELECT GROUP_CONCAT(DISTINCT c.seguradora) FROM cotacoes c WHERE c.lead_id = l.id) as seguradoras,
        (SELECT COUNT(*) FROM quotation_messages qm WHERE qm.lead_id = l.id AND qm.read_at IS NULL AND qm.sender_type = 'client') as unread_client_messages
      FROM leads l
      LEFT JOIN users u ON l.user_id = u.id
      ${whereClause}
      ORDER BY l.created_at DESC
      LIMIT ? OFFSET ?
    `).all(...params, parseInt(limit), offset);

    res.json({ sucesso: true, data: quotations, total, page: parseInt(page), limit: parseInt(limit) });
  } catch (err) {
    next(err);
  }
});

// ─── PUT /api/admin/quotations/:id/status ───────────────────────────────────
router.put('/quotations/:id/status', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { status, note } = req.body;
    const leadId = req.params.id;

    if (!status) {
      return res.status(400).json({ sucesso: false, mensagem: 'Status é obrigatório' });
    }

    const lead = db.prepare('SELECT id, pipeline_status FROM leads WHERE id = ?').get(leadId);
    if (!lead) {
      return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });
    }

    const oldStatus = lead.pipeline_status;

    db.prepare('UPDATE leads SET pipeline_status = ? WHERE id = ?').run(status, leadId);

    // Auto-create quotation event
    db.prepare(
      'INSERT INTO quotation_events (lead_id, status, note, created_by) VALUES (?, ?, ?, ?)'
    ).run(leadId, status, note || `Status alterado de "${oldStatus}" para "${status}"`, req.user.name || req.user.email);

    console.log(`[ADMIN] Cotação #${leadId}: status ${oldStatus} → ${status} (por ${req.user.email})`);

    res.json({ sucesso: true, mensagem: 'Status atualizado', data: { id: leadId, pipeline_status: status } });
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/admin/quotations/:id/events ──────────────────────────────────
router.post('/quotations/:id/events', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { status, note } = req.body;
    const leadId = req.params.id;

    if (!status) {
      return res.status(400).json({ sucesso: false, mensagem: 'Status do evento é obrigatório' });
    }

    const lead = db.prepare('SELECT id FROM leads WHERE id = ?').get(leadId);
    if (!lead) {
      return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });
    }

    const result = db.prepare(
      'INSERT INTO quotation_events (lead_id, status, note, created_by) VALUES (?, ?, ?, ?)'
    ).run(leadId, status, note || null, req.user.name || req.user.email);

    const event = db.prepare('SELECT * FROM quotation_events WHERE id = ?').get(result.lastInsertRowid);

    res.status(201).json({ sucesso: true, data: event });
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/admin/quotations/:id/documents ──────────────────────────────
router.post('/quotations/:id/documents', authMiddleware, adminMiddleware, upload.single('file'), (req, res, next) => {
  try {
    const leadId = req.params.id;
    const { type, visible_to_client } = req.body;

    const lead = db.prepare('SELECT id FROM leads WHERE id = ?').get(leadId);
    if (!lead) {
      return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });
    }

    if (!req.file) {
      return res.status(400).json({ sucesso: false, mensagem: 'Arquivo é obrigatório' });
    }

    const result = db.prepare(
      'INSERT INTO documents (lead_id, type, filename, filepath, visible_to_client) VALUES (?, ?, ?, ?, ?)'
    ).run(
      leadId,
      type || 'documento',
      req.file.originalname,
      req.file.path,
      visible_to_client === 'true' || visible_to_client === '1' ? 1 : 0
    );

    const doc = db.prepare('SELECT * FROM documents WHERE id = ?').get(result.lastInsertRowid);

    console.log(`[ADMIN] Documento enviado para cotação #${leadId}: ${req.file.originalname}`);

    res.status(201).json({ sucesso: true, data: doc });
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/admin/quotations/:id/messages ────────────────────────────────
router.post('/quotations/:id/messages', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const leadId = req.params.id;
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ sucesso: false, mensagem: 'Mensagem é obrigatória' });
    }

    const lead = db.prepare('SELECT id FROM leads WHERE id = ?').get(leadId);
    if (!lead) {
      return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });
    }

    const result = db.prepare(
      'INSERT INTO quotation_messages (lead_id, sender_type, sender_name, message) VALUES (?, ?, ?, ?)'
    ).run(leadId, 'admin', req.user.name || 'Fairfield', message.trim());

    const msg = db.prepare('SELECT * FROM quotation_messages WHERE id = ?').get(result.lastInsertRowid);

    res.status(201).json({ sucesso: true, data: msg });
  } catch (err) {
    next(err);
  }
});

// ─── GET /api/admin/users ───────────────────────────────────────────────────
router.get('/users', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const users = db.prepare(
      'SELECT id, name, email, company, cnpj, phone, role, email_verified, avatar_url, created_at, updated_at FROM users ORDER BY created_at DESC'
    ).all();

    // Add quotation count per user
    const usersWithStats = users.map(u => {
      const quotationCount = db.prepare('SELECT COUNT(*) as count FROM leads WHERE user_id = ?').get(u.id).count;
      return { ...u, quotation_count: quotationCount };
    });

    res.json({ sucesso: true, data: usersWithStats });
  } catch (err) {
    next(err);
  }
});

// ─── PUT /api/admin/users/:id/role ──────────────────────────────────────────
router.put('/users/:id/role', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { role } = req.body;
    const userId = req.params.id;

    if (!role || !['client', 'admin', 'broker'].includes(role)) {
      return res.status(400).json({ sucesso: false, mensagem: 'Role inválida. Opções: client, admin, broker' });
    }

    // Prevent self-demotion
    if (parseInt(userId) === req.user.id && role !== 'admin') {
      return res.status(400).json({ sucesso: false, mensagem: 'Você não pode alterar sua própria role de admin' });
    }

    const user = db.prepare('SELECT id FROM users WHERE id = ?').get(userId);
    if (!user) {
      return res.status(404).json({ sucesso: false, mensagem: 'Usuário não encontrado' });
    }

    db.prepare("UPDATE users SET role = ?, updated_at = datetime('now') WHERE id = ?").run(role, userId);

    const updatedUser = db.prepare(
      'SELECT id, name, email, company, role, created_at FROM users WHERE id = ?'
    ).get(userId);

    console.log(`[ADMIN] Role de ${updatedUser.email} alterada para ${role} (por ${req.user.email})`);

    res.json({ sucesso: true, mensagem: 'Role atualizada', data: updatedUser });
  } catch (err) {
    next(err);
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// Seguradoras CRUD (requires auth + admin)
// ═══════════════════════════════════════════════════════════════════════════

router.get('/seguradoras', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const seguradoras = db.prepare('SELECT * FROM seguradoras_contatos ORDER BY nome ASC').all();
    // Include multiple contacts for each seguradora
    const segWithContacts = seguradoras.map(seg => {
      const contatos = db.prepare('SELECT * FROM seguradora_emails WHERE seguradora_id = ? ORDER BY created_at ASC').all(seg.id);
      return { ...seg, contatos };
    });
    res.json({ sucesso: true, data: segWithContacts });
  } catch (err) { next(err); }
});

router.put('/seguradoras/:id', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { nome, email, telefone, contato_nome, ativo } = req.body;
    const seg = db.prepare('SELECT * FROM seguradoras_contatos WHERE id = ?').get(req.params.id);
    if (!seg) return res.status(404).json({ sucesso: false, mensagem: 'Seguradora não encontrada' });

    db.prepare(`UPDATE seguradoras_contatos SET
      nome = COALESCE(?, nome),
      email = COALESCE(?, email),
      telefone = COALESCE(?, telefone),
      contato_nome = COALESCE(?, contato_nome),
      ativo = COALESCE(?, ativo),
      updated_at = datetime('now')
      WHERE id = ?`
    ).run(nome || null, email || null, telefone || null, contato_nome || null, ativo != null ? ativo : null, req.params.id);

    const updated = db.prepare('SELECT * FROM seguradoras_contatos WHERE id = ?').get(req.params.id);
    const contatos = db.prepare('SELECT * FROM seguradora_emails WHERE seguradora_id = ? ORDER BY created_at ASC').all(updated.id);
    res.json({ sucesso: true, data: { ...updated, contatos } });
  } catch (err) { next(err); }
});

// ─── Seguradora contacts (multiple emails per insurer) ────────────────────────
router.post('/seguradoras/:id/contatos', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { email, nome_contato, cargo } = req.body;
    if (!email || !email.trim()) return res.status(400).json({ sucesso: false, mensagem: 'Email é obrigatório' });

    const seg = db.prepare('SELECT id FROM seguradoras_contatos WHERE id = ?').get(req.params.id);
    if (!seg) return res.status(404).json({ sucesso: false, mensagem: 'Seguradora não encontrada' });

    const result = db.prepare(
      'INSERT INTO seguradora_emails (seguradora_id, email, nome_contato, cargo) VALUES (?, ?, ?, ?)'
    ).run(req.params.id, email.trim().toLowerCase(), nome_contato || null, cargo || null);

    // Also update the main email field on seguradoras_contatos (first contact = primary)
    const firstContact = db.prepare('SELECT email FROM seguradora_emails WHERE seguradora_id = ? AND ativo = 1 ORDER BY created_at ASC LIMIT 1').get(req.params.id);
    if (firstContact) {
      db.prepare('UPDATE seguradoras_contatos SET email = ? WHERE id = ?').run(firstContact.email, req.params.id);
    }

    const contato = db.prepare('SELECT * FROM seguradora_emails WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json({ sucesso: true, data: contato });
  } catch (err) { next(err); }
});

router.put('/seguradoras/:segId/contatos/:contatoId', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { email, nome_contato, cargo, ativo } = req.body;
    const contato = db.prepare('SELECT * FROM seguradora_emails WHERE id = ? AND seguradora_id = ?').get(req.params.contatoId, req.params.segId);
    if (!contato) return res.status(404).json({ sucesso: false, mensagem: 'Contato não encontrado' });

    db.prepare(`UPDATE seguradora_emails SET
      email = COALESCE(?, email),
      nome_contato = COALESCE(?, nome_contato),
      cargo = COALESCE(?, cargo),
      ativo = COALESCE(?, ativo)
      WHERE id = ?`
    ).run(email || null, nome_contato || null, cargo || null, ativo != null ? ativo : null, req.params.contatoId);

    const updated = db.prepare('SELECT * FROM seguradora_emails WHERE id = ?').get(req.params.contatoId);
    res.json({ sucesso: true, data: updated });
  } catch (err) { next(err); }
});

router.delete('/seguradoras/:segId/contatos/:contatoId', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const contato = db.prepare('SELECT * FROM seguradora_emails WHERE id = ? AND seguradora_id = ?').get(req.params.contatoId, req.params.segId);
    if (!contato) return res.status(404).json({ sucesso: false, mensagem: 'Contato não encontrado' });

    db.prepare('DELETE FROM seguradora_emails WHERE id = ?').run(req.params.contatoId);
    res.json({ sucesso: true, mensagem: 'Contato removido' });
  } catch (err) { next(err); }
});

// ─── Email Templates ──────────────────────────────────────────────────────────
router.get('/email-templates', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const templates = db.prepare('SELECT * FROM email_templates WHERE ativo = 1 ORDER BY nome ASC').all();
    res.json({ sucesso: true, data: templates });
  } catch (err) { next(err); }
});

router.post('/email-templates', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { nome, assunto, corpo, tipo } = req.body;
    if (!nome || !assunto || !corpo) return res.status(400).json({ sucesso: false, mensagem: 'Nome, assunto e corpo são obrigatórios' });

    const result = db.prepare('INSERT INTO email_templates (nome, assunto, corpo, tipo) VALUES (?, ?, ?, ?)').run(nome, assunto, corpo, tipo || 'cotacao');
    const template = db.prepare('SELECT * FROM email_templates WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json({ sucesso: true, data: template });
  } catch (err) { next(err); }
});

router.put('/email-templates/:id', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { nome, assunto, corpo } = req.body;
    db.prepare(`UPDATE email_templates SET
      nome = COALESCE(?, nome), assunto = COALESCE(?, assunto), corpo = COALESCE(?, corpo),
      updated_at = datetime('now') WHERE id = ?`
    ).run(nome || null, assunto || null, corpo || null, req.params.id);
    const updated = db.prepare('SELECT * FROM email_templates WHERE id = ?').get(req.params.id);
    res.json({ sucesso: true, data: updated });
  } catch (err) { next(err); }
});

// ═══════════════════════════════════════════════════════════════════════════
// Dashboard Stats (requires auth + admin)
// ═══════════════════════════════════════════════════════════════════════════

router.get('/dashboard-stats', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    // Pipeline counts by status
    const pipelineCounts = db.prepare(`
      SELECT pipeline_status, COUNT(*) as count FROM leads GROUP BY pipeline_status
    `).all();

    const pipeline = {};
    for (const row of pipelineCounts) {
      pipeline[row.pipeline_status || 'formulario_enviado'] = row.count;
    }

    // Total leads
    const totalLeads = db.prepare('SELECT COUNT(*) as count FROM leads').get().count;

    // Recent leads (last 7 days)
    const recentLeads = db.prepare(`
      SELECT COUNT(*) as count FROM leads WHERE created_at >= datetime('now', '-7 days')
    `).get().count;

    // Unread client messages
    const unreadMessages = db.prepare(`
      SELECT COUNT(*) as count FROM quotation_messages WHERE sender_type = 'client' AND read_at IS NULL
    `).get().count;

    // Overdue reminders
    const overdueReminders = db.prepare(`
      SELECT COUNT(*) as count FROM lembretes WHERE status = 'pendente' AND data_lembrete <= datetime('now')
    `).get().count;

    // Today's reminders
    const todayReminders = db.prepare(`
      SELECT COUNT(*) as count FROM lembretes
      WHERE status = 'pendente' AND date(data_lembrete) = date('now')
    `).get().count;

    // Pending proposals (sent to insurers but no response)
    const pendingEmails = db.prepare(`
      SELECT COUNT(*) as count FROM email_log WHERE tipo = 'envio' AND respondido_em IS NULL
    `).get().count;

    // Proposals received
    const totalProposals = db.prepare('SELECT COUNT(*) as count FROM propostas_recebidas').get().count;

    // Conversion rate
    const apolicesEmitidas = pipeline['apolice_emitida'] || 0;
    const taxaConversao = totalLeads > 0 ? Math.round((apolicesEmitidas / totalLeads) * 100) : 0;

    // Recent activity (last 10 events)
    const recentActivity = db.prepare(`
      SELECT qe.*, l.razao_social
      FROM quotation_events qe
      JOIN leads l ON l.id = qe.lead_id
      ORDER BY qe.created_at DESC LIMIT 10
    `).all();

    // Recent quotations for table (with Excel file info)
    const fs = require('fs');
    const arquivosDir = process.env.VERCEL ? path.join('/tmp', 'arquivos') : path.join(__dirname, '..', 'arquivos');

    const recentQuotations = db.prepare(`
      SELECT l.*, u.name as user_name, u.email as user_email,
        (SELECT COUNT(*) FROM email_log el WHERE el.cotacao_id = l.id AND el.tipo = 'envio') as emails_enviados,
        (SELECT COUNT(*) FROM propostas_recebidas pr WHERE pr.cotacao_id = l.id) as propostas_count
      FROM leads l
      LEFT JOIN users u ON l.user_id = u.id
      ORDER BY l.created_at DESC LIMIT 50
    `).all();

    // Enrich with Excel file info
    for (const q of recentQuotations) {
      q.excel_files = [];
      try {
        const allFiles = fs.readdirSync(arquivosDir);
        // Match files by lead name or ID pattern
        const empresa = (q.razao_social || '').replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
        for (const f of allFiles) {
          if (f.endsWith('.xlsx') && (f.includes(`_${empresa}`) || f.includes(`-${q.id}.xlsx`))) {
            q.excel_files.push({ filename: f, path: `/arquivos/${f}` });
          }
        }
      } catch (e) { /* dir may not exist */ }
    }

    // Action items
    const actionItems = [];

    // Overdue reminders
    if (overdueReminders > 0) {
      actionItems.push({ tipo: 'lembrete_vencido', count: overdueReminders, urgencia: 'alta', label: `${overdueReminders} lembrete(s) vencido(s)` });
    }

    // Unread messages
    if (unreadMessages > 0) {
      actionItems.push({ tipo: 'mensagem_nao_lida', count: unreadMessages, urgencia: 'media', label: `${unreadMessages} mensagem(ns) não lida(s)` });
    }

    // Quotations without any email sent (older than 1 day)
    const noEmailSent = db.prepare(`
      SELECT COUNT(*) as count FROM leads l
      WHERE l.created_at <= datetime('now', '-1 day')
      AND NOT EXISTS (SELECT 1 FROM email_log el WHERE el.cotacao_id = l.id AND el.tipo = 'envio')
      AND l.pipeline_status IN ('formulario_enviado', 'analise_previa')
    `).get().count;

    if (noEmailSent > 0) {
      actionItems.push({ tipo: 'sem_envio', count: noEmailSent, urgencia: 'alta', label: `${noEmailSent} cotação(ões) sem envio às seguradoras` });
    }

    res.json({
      sucesso: true,
      data: {
        totalLeads,
        recentLeads,
        pipeline,
        unreadMessages,
        overdueReminders,
        todayReminders,
        pendingEmails,
        totalProposals,
        taxaConversao,
        recentActivity,
        recentQuotations,
        actionItems
      }
    });
  } catch (err) { next(err); }
});

// ═══════════════════════════════════════════════════════════════════════════
// Lembretes (requires auth + admin)
// ═══════════════════════════════════════════════════════════════════════════

router.get('/lembretes', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { status, cotacao_id } = req.query;
    let where = [];
    let params = [];

    if (status) { where.push('l.status = ?'); params.push(status); }
    if (cotacao_id) { where.push('l.cotacao_id = ?'); params.push(cotacao_id); }

    const whereClause = where.length > 0 ? 'WHERE ' + where.join(' AND ') : '';

    const lembretes = db.prepare(`
      SELECT l.*, ld.razao_social as empresa_nome
      FROM lembretes l
      LEFT JOIN leads ld ON ld.id = l.cotacao_id
      ${whereClause}
      ORDER BY l.data_lembrete ASC
    `).all(...params);

    res.json({ sucesso: true, data: lembretes });
  } catch (err) { next(err); }
});

router.post('/lembretes', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { cotacao_id, tipo, titulo, descricao, data_lembrete } = req.body;

    if (!titulo || !data_lembrete) {
      return res.status(400).json({ sucesso: false, mensagem: 'Título e data são obrigatórios' });
    }

    const result = db.prepare(
      'INSERT INTO lembretes (cotacao_id, tipo, titulo, descricao, data_lembrete, created_by) VALUES (?, ?, ?, ?, ?, ?)'
    ).run(cotacao_id || null, tipo || 'manual', titulo, descricao || null, data_lembrete, req.user.name || req.user.email);

    const lembrete = db.prepare('SELECT * FROM lembretes WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json({ sucesso: true, data: lembrete });
  } catch (err) { next(err); }
});

router.put('/lembretes/:id', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { status, titulo, descricao, data_lembrete } = req.body;
    const lembrete = db.prepare('SELECT * FROM lembretes WHERE id = ?').get(req.params.id);
    if (!lembrete) return res.status(404).json({ sucesso: false, mensagem: 'Lembrete não encontrado' });

    db.prepare(`UPDATE lembretes SET
      status = COALESCE(?, status),
      titulo = COALESCE(?, titulo),
      descricao = COALESCE(?, descricao),
      data_lembrete = COALESCE(?, data_lembrete),
      updated_at = datetime('now')
      WHERE id = ?`
    ).run(status || null, titulo || null, descricao || null, data_lembrete || null, req.params.id);

    const updated = db.prepare('SELECT * FROM lembretes WHERE id = ?').get(req.params.id);
    res.json({ sucesso: true, data: updated });
  } catch (err) { next(err); }
});

router.delete('/lembretes/:id', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const lembrete = db.prepare('SELECT * FROM lembretes WHERE id = ?').get(req.params.id);
    if (!lembrete) return res.status(404).json({ sucesso: false, mensagem: 'Lembrete não encontrado' });

    db.prepare('DELETE FROM lembretes WHERE id = ?').run(req.params.id);
    res.json({ sucesso: true, mensagem: 'Lembrete removido' });
  } catch (err) { next(err); }
});

// ═══════════════════════════════════════════════════════════════════════════
// Send to insurers (requires auth + admin)
// ═══════════════════════════════════════════════════════════════════════════

router.post('/cotacoes/:id/enviar-seguradoras', authMiddleware, adminMiddleware, async (req, res, next) => {
  try {
    const leadId = req.params.id;
    const { seguradora_slugs, corpo_email, assunto_email } = req.body;

    if (!seguradora_slugs || !Array.isArray(seguradora_slugs) || seguradora_slugs.length === 0) {
      return res.status(400).json({ sucesso: false, mensagem: 'Selecione ao menos uma seguradora' });
    }

    const lead = db.prepare('SELECT * FROM leads WHERE id = ?').get(leadId);
    if (!lead) return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });

    // Get documents for this lead (excel files)
    const docs = db.prepare("SELECT * FROM documents WHERE lead_id = ? AND type IN ('excel', 'ficha_tecnica', 'documento')").all(leadId);
    const arquivos = docs.map(d => d.filepath).filter(Boolean);

    // Also check for generated files in arquivos folder
    const fs = require('fs');
    const arquivosDir = process.env.VERCEL ? path.join('/tmp', 'arquivos') : path.join(__dirname, '..', 'arquivos');

    // Look for any Excel file matching this lead
    try {
      const allFiles = fs.readdirSync(arquivosDir);
      const leadFiles = allFiles.filter(f =>
        (f.includes(`-${leadId}.xlsx`) || f.includes(`_${leadId}.xlsx`) || f.includes(`lead_${leadId}`)) ||
        f.includes('FichaTecnica') && f.endsWith('.xlsx')
      );
      for (const f of leadFiles) {
        const fullPath = path.join(arquivosDir, f);
        if (!arquivos.includes(fullPath)) arquivos.push(fullPath);
      }
    } catch (e) { /* dir may not exist */ }

    // Fallback to legacy patterns
    const possibleFiles = [`interno-${leadId}.xlsx`, `externo-${leadId}.xlsx`, `interno-cliente-${leadId}.xlsx`, `externo-cliente-${leadId}.xlsx`];
    for (const f of possibleFiles) {
      const fullPath = path.join(arquivosDir, f);
      if (fs.existsSync(fullPath) && !arquivos.includes(fullPath)) {
        arquivos.push(fullPath);
      }
    }

    const { enviarEmailSeguradora } = require('../services/emailService');
    const results = [];

    for (const slug of seguradora_slugs) {
      const seguradora = db.prepare('SELECT * FROM seguradoras_contatos WHERE slug = ? AND ativo = 1').get(slug);
      if (!seguradora) {
        results.push({ slug, status: 'erro', erro: 'Seguradora inativa ou não encontrada' });
        continue;
      }

      // Get ALL active contacts for this insurer
      const contatos = db.prepare('SELECT * FROM seguradora_emails WHERE seguradora_id = ? AND ativo = 1').all(seguradora.id);
      // Fallback to main email if no contacts in child table
      const emailList = contatos.length > 0
        ? contatos.map(c => c.email).filter(Boolean)
        : (seguradora.email ? [seguradora.email] : []);

      if (emailList.length === 0) {
        results.push({ slug, nome: seguradora.nome, status: 'erro', erro: 'Nenhum email cadastrado' });
        continue;
      }

      const destinatarios = emailList.join(', ');

      try {
        const info = await enviarEmailSeguradora(lead, seguradora.nome, destinatarios, arquivos, corpo_email, assunto_email);

        // Log the email
        db.prepare(
          'INSERT INTO email_log (cotacao_id, seguradora_slug, tipo, assunto, destinatario, status, message_id, corpo_customizado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
        ).run(leadId, slug, 'envio', assunto_email || `Cotação Seguro de Crédito — ${lead.razao_social}`, destinatarios, 'enviado', info.messageId || null, corpo_email || null);

        // Auto-create reminder for follow-up in 3 business days
        const followUpDate = new Date();
        followUpDate.setDate(followUpDate.getDate() + 5);
        db.prepare(
          'INSERT INTO lembretes (cotacao_id, tipo, titulo, descricao, data_lembrete, created_by) VALUES (?, ?, ?, ?, ?, ?)'
        ).run(leadId, 'followup', `Follow-up ${seguradora.nome}`, `Verificar resposta de ${seguradora.nome} para ${lead.razao_social}`, followUpDate.toISOString(), 'sistema');

        results.push({ slug, nome: seguradora.nome, status: 'enviado', destinatarios: emailList, preview: info._previewUrl || null });
      } catch (emailErr) {
        db.prepare(
          'INSERT INTO email_log (cotacao_id, seguradora_slug, tipo, assunto, destinatario, status, erro) VALUES (?, ?, ?, ?, ?, ?, ?)'
        ).run(leadId, slug, 'envio', `Cotação — ${lead.razao_social}`, destinatarios, 'erro', emailErr.message);

        results.push({ slug, nome: seguradora.nome, status: 'erro', erro: emailErr.message });
      }
    }

    // Update pipeline status if still at early stage
    const currentStatus = lead.pipeline_status || 'formulario_enviado';
    if (['formulario_enviado', 'analise_previa'].includes(currentStatus)) {
      db.prepare('UPDATE leads SET pipeline_status = ? WHERE id = ?').run('enviado_seguradoras', leadId);
      db.prepare(
        'INSERT INTO quotation_events (lead_id, status, note, created_by) VALUES (?, ?, ?, ?)'
      ).run(leadId, 'enviado_seguradoras', `Enviado para ${results.filter(r => r.status === 'enviado').length} seguradora(s)`, req.user.name || req.user.email);
    }

    console.log(`[ADMIN] Cotação #${leadId}: enviada para ${results.filter(r => r.status === 'enviado').length}/${seguradora_slugs.length} seguradoras`);

    res.json({ sucesso: true, data: results });
  } catch (err) { next(err); }
});

// ─── Email log for a quotation ──────────────────────────────────────────────
router.get('/cotacoes/:id/email-log', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const logs = db.prepare(`
      SELECT el.*, sc.nome as seguradora_nome
      FROM email_log el
      LEFT JOIN seguradoras_contatos sc ON sc.slug = el.seguradora_slug
      WHERE el.cotacao_id = ?
      ORDER BY el.enviado_em DESC
    `).all(req.params.id);

    res.json({ sucesso: true, data: logs });
  } catch (err) { next(err); }
});

// ─── Mark email as responded ────────────────────────────────────────────────
router.put('/email-log/:id/respondido', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const log = db.prepare('SELECT * FROM email_log WHERE id = ?').get(req.params.id);
    if (!log) return res.status(404).json({ sucesso: false, mensagem: 'Log não encontrado' });

    db.prepare("UPDATE email_log SET status = 'respondido', respondido_em = datetime('now') WHERE id = ?").run(req.params.id);

    const updated = db.prepare('SELECT * FROM email_log WHERE id = ?').get(req.params.id);
    res.json({ sucesso: true, data: updated });
  } catch (err) { next(err); }
});

// ═══════════════════════════════════════════════════════════════════════════
// Propostas recebidas (requires auth + admin)
// ═══════════════════════════════════════════════════════════════════════════

router.get('/cotacoes/:id/propostas', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const propostas = db.prepare(`
      SELECT pr.*, sc.nome as seguradora_nome, sc.cor as seguradora_cor
      FROM propostas_recebidas pr
      LEFT JOIN seguradoras_contatos sc ON sc.slug = pr.seguradora_slug
      WHERE pr.cotacao_id = ?
      ORDER BY pr.recebida_em DESC
    `).all(req.params.id);

    res.json({ sucesso: true, data: propostas });
  } catch (err) { next(err); }
});

router.post('/cotacoes/:id/propostas', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { seguradora_slug, valor_premio, taxa, cobertura_max, condicoes } = req.body;

    if (!seguradora_slug) {
      return res.status(400).json({ sucesso: false, mensagem: 'Seguradora é obrigatória' });
    }

    const lead = db.prepare('SELECT id FROM leads WHERE id = ?').get(req.params.id);
    if (!lead) return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });

    const result = db.prepare(
      'INSERT INTO propostas_recebidas (cotacao_id, seguradora_slug, valor_premio, taxa, cobertura_max, condicoes) VALUES (?, ?, ?, ?, ?, ?)'
    ).run(req.params.id, seguradora_slug, valor_premio || null, taxa || null, cobertura_max || null, condicoes || null);

    // Mark corresponding email as responded
    db.prepare(`
      UPDATE email_log SET status = 'respondido', respondido_em = datetime('now')
      WHERE cotacao_id = ? AND seguradora_slug = ? AND tipo = 'envio' AND respondido_em IS NULL
    `).run(req.params.id, seguradora_slug);

    // Update pipeline if needed
    const currentStatus = db.prepare('SELECT pipeline_status FROM leads WHERE id = ?').get(req.params.id);
    if (['enviado_seguradoras', 'aguardando_propostas'].includes(currentStatus?.pipeline_status)) {
      db.prepare('UPDATE leads SET pipeline_status = ? WHERE id = ?').run('propostas_recebidas', req.params.id);
      db.prepare(
        'INSERT INTO quotation_events (lead_id, status, note, created_by) VALUES (?, ?, ?, ?)'
      ).run(req.params.id, 'propostas_recebidas', `Proposta recebida de ${seguradora_slug}`, req.user.name || req.user.email);
    }

    const proposta = db.prepare('SELECT * FROM propostas_recebidas WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json({ sucesso: true, data: proposta });
  } catch (err) { next(err); }
});

// ═══════════════════════════════════════════════════════════════════════════
// Analytics (requires auth + admin)
// ═══════════════════════════════════════════════════════════════════════════

router.get('/analytics', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const { SEGURADORAS_NOMES } = require('../constants/seguradoras');

    // Per-insurer stats from email_log and propostas
    const seguradoraStats = db.prepare(`
      SELECT sc.nome, sc.slug, sc.cor,
        (SELECT COUNT(*) FROM email_log el WHERE el.seguradora_slug = sc.slug AND el.tipo = 'envio') as total_enviadas,
        (SELECT COUNT(*) FROM email_log el WHERE el.seguradora_slug = sc.slug AND el.tipo = 'envio' AND el.status = 'respondido') as total_respondidas,
        (SELECT COUNT(*) FROM email_log el WHERE el.seguradora_slug = sc.slug AND el.tipo = 'envio' AND el.respondido_em IS NULL) as aguardando,
        (SELECT AVG(CAST(julianday(el.respondido_em) - julianday(el.enviado_em) AS REAL))
          FROM email_log el WHERE el.seguradora_slug = sc.slug AND el.respondido_em IS NOT NULL) as prazo_medio_dias,
        (SELECT COUNT(*) FROM propostas_recebidas pr WHERE pr.seguradora_slug = sc.slug) as total_propostas,
        (SELECT AVG(pr.taxa) FROM propostas_recebidas pr WHERE pr.seguradora_slug = sc.slug AND pr.taxa IS NOT NULL) as taxa_media
      FROM seguradoras_contatos sc
      WHERE sc.ativo = 1
      ORDER BY sc.nome
    `).all();

    // Also include legacy cotacoes table stats
    const legacySla = SEGURADORAS_NOMES.map(seg => {
      const stats = db.prepare(`
        SELECT
          COUNT(*) as total_enviadas,
          COUNT(CASE WHEN status = 'aguardando_resposta' THEN 1 END) as aguardando,
          AVG(CASE WHEN data_resposta IS NOT NULL THEN CAST(julianday(data_resposta) - julianday(data_envio) AS INTEGER) END) as prazo_medio,
          MAX(CASE WHEN status = 'aguardando_resposta' THEN CAST(julianday('now') - julianday(data_envio) AS INTEGER) END) as max_dias_aberto
        FROM cotacoes WHERE seguradora = ?
      `).get(seg);
      return {
        seguradora: seg,
        total_enviadas: stats.total_enviadas || 0,
        aguardando: stats.aguardando || 0,
        prazo_medio: stats.prazo_medio ? Math.round(stats.prazo_medio) : 0,
        max_dias_aberto: stats.max_dias_aberto || 0
      };
    });

    // Pipeline funnel
    const funnel = db.prepare(`
      SELECT
        COUNT(*) as total,
        COUNT(CASE WHEN pipeline_status = 'formulario_enviado' THEN 1 END) as formulario_enviado,
        COUNT(CASE WHEN pipeline_status = 'analise_previa' THEN 1 END) as analise_previa,
        COUNT(CASE WHEN pipeline_status = 'enviado_seguradoras' THEN 1 END) as enviado_seguradoras,
        COUNT(CASE WHEN pipeline_status = 'aguardando_propostas' THEN 1 END) as aguardando_propostas,
        COUNT(CASE WHEN pipeline_status = 'propostas_recebidas' THEN 1 END) as propostas_recebidas,
        COUNT(CASE WHEN pipeline_status = 'em_negociacao' THEN 1 END) as em_negociacao,
        COUNT(CASE WHEN pipeline_status = 'apolice_emitida' THEN 1 END) as apolice_emitida
      FROM leads
    `).get();

    // Monthly trends (last 6 months)
    const monthlyTrends = db.prepare(`
      SELECT
        strftime('%Y-%m', created_at) as mes,
        COUNT(*) as total,
        COUNT(CASE WHEN tipo = 'interno' THEN 1 END) as interno,
        COUNT(CASE WHEN tipo = 'externo' THEN 1 END) as externo
      FROM leads
      WHERE created_at >= datetime('now', '-6 months')
      GROUP BY strftime('%Y-%m', created_at)
      ORDER BY mes ASC
    `).all();

    res.json({
      sucesso: true,
      data: {
        seguradoraStats,
        legacySla,
        funnel,
        monthlyTrends
      }
    });
  } catch (err) { next(err); }
});

// ═══════════════════════════════════════════════════════════════════════════
// Central de Envios — Envio em lote + Comparativo iCover
// ═══════════════════════════════════════════════════════════════════════════

// List quotations ready for bulk send (with email/proposal status per insurer)
router.get('/central-envios', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const leads = db.prepare(`
      SELECT l.id, l.razao_social, l.cnpj, l.tipo, l.setor, l.pipeline_status,
        l.icover_score, l.created_at,
        u.name as user_name, u.email as user_email
      FROM leads l
      LEFT JOIN users u ON l.user_id = u.id
      ORDER BY l.created_at DESC
      LIMIT 100
    `).all();

    // Enrich each lead with email + proposal status
    const enriched = leads.map(lead => {
      const emailLogs = db.prepare(`
        SELECT el.seguradora_slug, el.status, el.enviado_em, el.respondido_em,
          sc.nome as seguradora_nome
        FROM email_log el
        LEFT JOIN seguradoras_contatos sc ON sc.slug = el.seguradora_slug
        WHERE el.cotacao_id = ? AND el.tipo = 'envio'
        ORDER BY el.enviado_em DESC
      `).all(lead.id);

      const propostas = db.prepare(`
        SELECT pr.seguradora_slug, pr.valor_premio, pr.taxa, pr.cobertura_max, pr.condicoes,
          pr.recebida_em, sc.nome as seguradora_nome
        FROM propostas_recebidas pr
        LEFT JOIN seguradoras_contatos sc ON sc.slug = pr.seguradora_slug
        WHERE pr.cotacao_id = ?
      `).all(lead.id);

      // Excel files
      const docs = db.prepare("SELECT filename, filepath FROM documents WHERE lead_id = ? AND type IN ('excel', 'ficha_tecnica')").all(lead.id);

      return {
        ...lead,
        emailLogs,
        propostas,
        excel_files: docs,
        totalEnviados: emailLogs.filter(e => e.status === 'enviado' || e.status === 'respondido').length,
        totalRespondidos: emailLogs.filter(e => e.status === 'respondido').length,
        totalPropostas: propostas.length,
      };
    });

    res.json({ sucesso: true, data: enriched });
  } catch (err) { next(err); }
});

// Envio em lote — enviar múltiplas cotações para seguradoras de uma vez
router.post('/central-envios/enviar-lote', authMiddleware, adminMiddleware, async (req, res, next) => {
  try {
    const { cotacao_ids, seguradora_slugs, corpo_email, assunto_email } = req.body;

    if (!cotacao_ids || !Array.isArray(cotacao_ids) || cotacao_ids.length === 0) {
      return res.status(400).json({ sucesso: false, mensagem: 'Selecione ao menos uma cotação' });
    }
    if (!seguradora_slugs || !Array.isArray(seguradora_slugs) || seguradora_slugs.length === 0) {
      return res.status(400).json({ sucesso: false, mensagem: 'Selecione ao menos uma seguradora' });
    }

    const { enviarEmailSeguradora } = require('../services/emailService');
    const fs = require('fs');
    const allResults = [];

    for (const leadId of cotacao_ids) {
      const lead = db.prepare('SELECT * FROM leads WHERE id = ?').get(leadId);
      if (!lead) {
        allResults.push({ cotacao_id: leadId, status: 'erro', erro: 'Cotação não encontrada' });
        continue;
      }

      // Collect files
      const docs = db.prepare("SELECT filepath FROM documents WHERE lead_id = ? AND type IN ('excel', 'ficha_tecnica', 'documento')").all(leadId);
      const arquivos = docs.map(d => d.filepath).filter(Boolean);
      const arquivosDir = process.env.VERCEL ? path.join('/tmp', 'arquivos') : path.join(__dirname, '..', 'arquivos');
      const possibleFiles = [`interno-${leadId}.xlsx`, `externo-${leadId}.xlsx`, `interno-cliente-${leadId}.xlsx`, `externo-cliente-${leadId}.xlsx`];
      for (const f of possibleFiles) {
        const fullPath = path.join(arquivosDir, f);
        if (fs.existsSync(fullPath) && !arquivos.includes(fullPath)) arquivos.push(fullPath);
      }

      for (const slug of seguradora_slugs) {
        // Check if already sent
        const alreadySent = db.prepare("SELECT id FROM email_log WHERE cotacao_id = ? AND seguradora_slug = ? AND tipo = 'envio' AND status != 'erro'").get(leadId, slug);
        if (alreadySent) {
          allResults.push({ cotacao_id: leadId, slug, status: 'ja_enviado', mensagem: 'Já enviado anteriormente' });
          continue;
        }

        const seguradora = db.prepare('SELECT * FROM seguradoras_contatos WHERE slug = ? AND ativo = 1').get(slug);
        if (!seguradora) {
          allResults.push({ cotacao_id: leadId, slug, status: 'erro', erro: 'Seguradora inativa' });
          continue;
        }

        const contatos = db.prepare('SELECT * FROM seguradora_emails WHERE seguradora_id = ? AND ativo = 1').all(seguradora.id);
        const emailList = contatos.length > 0 ? contatos.map(c => c.email).filter(Boolean) : (seguradora.email ? [seguradora.email] : []);

        if (emailList.length === 0) {
          allResults.push({ cotacao_id: leadId, slug, nome: seguradora.nome, status: 'erro', erro: 'Sem email' });
          continue;
        }

        const destinatarios = emailList.join(', ');

        try {
          const info = await enviarEmailSeguradora(lead, seguradora.nome, destinatarios, arquivos, corpo_email, assunto_email);
          db.prepare(
            'INSERT INTO email_log (cotacao_id, seguradora_slug, tipo, assunto, destinatario, status, message_id, corpo_customizado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
          ).run(leadId, slug, 'envio', assunto_email || `Cotação Seguro de Crédito — ${lead.razao_social}`, destinatarios, 'enviado', info.messageId || null, corpo_email || null);

          // Follow-up reminder
          const followUp = new Date();
          followUp.setDate(followUp.getDate() + 5);
          db.prepare('INSERT INTO lembretes (cotacao_id, tipo, titulo, descricao, data_lembrete, created_by) VALUES (?, ?, ?, ?, ?, ?)')
            .run(leadId, 'followup', `Follow-up ${seguradora.nome}`, `Verificar resposta de ${seguradora.nome} para ${lead.razao_social}`, followUp.toISOString(), 'sistema');

          allResults.push({ cotacao_id: leadId, slug, nome: seguradora.nome, status: 'enviado', preview: info._previewUrl || null });
        } catch (emailErr) {
          db.prepare('INSERT INTO email_log (cotacao_id, seguradora_slug, tipo, assunto, destinatario, status, erro) VALUES (?, ?, ?, ?, ?, ?, ?)')
            .run(leadId, slug, 'envio', `Cotação — ${lead.razao_social}`, destinatarios, 'erro', emailErr.message);
          allResults.push({ cotacao_id: leadId, slug, nome: seguradora.nome, status: 'erro', erro: emailErr.message });
        }
      }

      // Update pipeline
      const currentStatus = lead.pipeline_status || 'formulario_enviado';
      if (['formulario_enviado', 'analise_previa'].includes(currentStatus)) {
        db.prepare('UPDATE leads SET pipeline_status = ? WHERE id = ?').run('enviado_seguradoras', leadId);
        db.prepare('INSERT INTO quotation_events (lead_id, status, note, created_by) VALUES (?, ?, ?, ?)')
          .run(leadId, 'enviado_seguradoras', `Envio em lote para ${seguradora_slugs.length} seguradora(s)`, req.user.name || req.user.email);
      }
    }

    const enviados = allResults.filter(r => r.status === 'enviado').length;
    const erros = allResults.filter(r => r.status === 'erro').length;
    const jaEnviados = allResults.filter(r => r.status === 'ja_enviado').length;

    console.log(`[CENTRAL-ENVIOS] Lote: ${enviados} enviados, ${jaEnviados} já enviados, ${erros} erros`);

    res.json({ sucesso: true, data: allResults, resumo: { enviados, erros, jaEnviados } });
  } catch (err) { next(err); }
});

// Comparativo inteligente de propostas com iCover AI
router.get('/cotacoes/:id/comparativo', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const leadId = req.params.id;
    const lead = db.prepare('SELECT * FROM leads WHERE id = ?').get(leadId);
    if (!lead) return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });

    const propostas = db.prepare(`
      SELECT pr.*, sc.nome as seguradora_nome, sc.cor as seguradora_cor
      FROM propostas_recebidas pr
      LEFT JOIN seguradoras_contatos sc ON sc.slug = pr.seguradora_slug
      WHERE pr.cotacao_id = ?
      ORDER BY pr.taxa ASC
    `).all(leadId);

    if (propostas.length === 0) {
      return res.json({ sucesso: true, data: { propostas: [], analise: null } });
    }

    // iCover analysis if available
    let icoverAnalysis = null;
    if (lead.icover_analysis_json) {
      try { icoverAnalysis = JSON.parse(lead.icover_analysis_json); } catch {}
    }

    // Build comparative analysis
    const taxas = propostas.filter(p => p.taxa != null).map(p => p.taxa);
    const premios = propostas.filter(p => p.valor_premio != null).map(p => p.valor_premio);
    const coberturas = propostas.filter(p => p.cobertura_max != null).map(p => p.cobertura_max);

    // Score each proposal (0-100)
    const scored = propostas.map(p => {
      let score = 0;
      let fatores = [];

      // Taxa (40% weight) — lower is better
      if (p.taxa != null && taxas.length > 1) {
        const minTaxa = Math.min(...taxas);
        const maxTaxa = Math.max(...taxas);
        const range = maxTaxa - minTaxa || 1;
        const taxaScore = Math.round(((maxTaxa - p.taxa) / range) * 40);
        score += taxaScore;
        fatores.push({ fator: 'Taxa', peso: '40%', pontos: taxaScore, detalhe: `${p.taxa.toFixed(3)}% (${p.taxa === minTaxa ? 'melhor' : p.taxa === maxTaxa ? 'mais alta' : 'intermediária'})` });
      } else if (p.taxa != null) {
        score += 20;
        fatores.push({ fator: 'Taxa', peso: '40%', pontos: 20, detalhe: `${p.taxa.toFixed(3)}% (única proposta)` });
      }

      // Prêmio (30% weight) — lower is better
      if (p.valor_premio != null && premios.length > 1) {
        const minPremio = Math.min(...premios);
        const maxPremio = Math.max(...premios);
        const range = maxPremio - minPremio || 1;
        const premioScore = Math.round(((maxPremio - p.valor_premio) / range) * 30);
        score += premioScore;
        fatores.push({ fator: 'Prêmio', peso: '30%', pontos: premioScore, detalhe: `R$ ${p.valor_premio.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` });
      } else if (p.valor_premio != null) {
        score += 15;
        fatores.push({ fator: 'Prêmio', peso: '30%', pontos: 15, detalhe: `R$ ${p.valor_premio.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` });
      }

      // Cobertura (20% weight) — higher is better
      if (p.cobertura_max != null && coberturas.length > 1) {
        const minCob = Math.min(...coberturas);
        const maxCob = Math.max(...coberturas);
        const range = maxCob - minCob || 1;
        const cobScore = Math.round(((p.cobertura_max - minCob) / range) * 20);
        score += cobScore;
        fatores.push({ fator: 'Cobertura', peso: '20%', pontos: cobScore, detalhe: `R$ ${p.cobertura_max.toLocaleString('pt-BR')}` });
      } else if (p.cobertura_max != null) {
        score += 10;
        fatores.push({ fator: 'Cobertura', peso: '20%', pontos: 10, detalhe: `R$ ${p.cobertura_max.toLocaleString('pt-BR')}` });
      }

      // Condições especiais (10% weight)
      if (p.condicoes && p.condicoes.trim().length > 0) {
        score += 5;
        fatores.push({ fator: 'Condições Especiais', peso: '10%', pontos: 5, detalhe: 'Condições informadas' });
      }

      // iCover insurer fit bonus
      let icoverFit = null;
      if (icoverAnalysis && icoverAnalysis.insurers) {
        const fit = icoverAnalysis.insurers.find(i => i.logo === p.seguradora_slug || i.name.toLowerCase().includes((p.seguradora_nome || '').toLowerCase().split(' ')[0]));
        if (fit) {
          const fitBonus = Math.round((fit.score / 100) * 10);
          score += fitBonus;
          icoverFit = { score: fit.score, strengths: fit.strengths, bestFor: fit.bestFor };
          fatores.push({ fator: 'iCover Fit', peso: 'bônus', pontos: fitBonus, detalhe: `Aderência ${fit.score}%` });
        }
      }

      return {
        ...p,
        score: Math.min(score, 100),
        fatores,
        icoverFit,
        ranking: 0
      };
    });

    // Sort by score desc and assign ranking
    scored.sort((a, b) => b.score - a.score);
    scored.forEach((p, i) => { p.ranking = i + 1; });

    // Generate recommendation text
    const best = scored[0];
    const iCoverRate = icoverAnalysis?.pricing?.adjustedRatePct;
    const iCoverPremium = icoverAnalysis?.premium?.estimatedFormatted;

    let recomendacao = `A melhor proposta custo-benefício é da ${best.seguradora_nome || best.seguradora_slug} com score ${best.score}/100.`;
    if (best.taxa != null) recomendacao += ` Taxa: ${best.taxa.toFixed(3)}%.`;
    if (best.valor_premio != null) recomendacao += ` Prêmio: R$ ${best.valor_premio.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}.`;
    if (iCoverRate) recomendacao += ` O iCover estimava taxa de ${iCoverRate} — ${best.taxa != null && parseFloat(iCoverRate) > best.taxa ? 'proposta abaixo da estimativa (favorável)' : 'proposta alinhada com a estimativa'}.`;

    res.json({
      sucesso: true,
      data: {
        propostas: scored,
        recomendacao,
        icoverRef: icoverAnalysis ? {
          score: lead.icover_score,
          riskClass: icoverAnalysis.riskClass,
          riskLabel: icoverAnalysis.riskLabel,
          taxaEstimada: iCoverRate,
          premioEstimado: iCoverPremium,
          estrutura: icoverAnalysis.coverage?.structureLabel,
        } : null,
        estatisticas: {
          menorTaxa: taxas.length > 0 ? Math.min(...taxas) : null,
          maiorTaxa: taxas.length > 0 ? Math.max(...taxas) : null,
          mediaTaxa: taxas.length > 0 ? (taxas.reduce((a, b) => a + b, 0) / taxas.length) : null,
          menorPremio: premios.length > 0 ? Math.min(...premios) : null,
          maiorPremio: premios.length > 0 ? Math.max(...premios) : null,
          totalPropostas: propostas.length,
        }
      }
    });
  } catch (err) { next(err); }
});

// ═══════════════════════════════════════════════════════════════════════════
// Quotation detail for admin (enhanced)
// ═══════════════════════════════════════════════════════════════════════════

router.get('/cotacoes/:id', authMiddleware, adminMiddleware, (req, res, next) => {
  try {
    const leadId = req.params.id;
    const lead = db.prepare(`
      SELECT l.*, u.name as user_name, u.email as user_email, u.company as user_company, u.phone as user_phone
      FROM leads l
      LEFT JOIN users u ON l.user_id = u.id
      WHERE l.id = ?
    `).get(leadId);

    if (!lead) return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });

    // Get all related data
    const coSeguradas = db.prepare('SELECT * FROM co_seguradas WHERE lead_id = ?').all(leadId);
    const historicoFaturamento = db.prepare('SELECT * FROM historico_faturamento WHERE lead_id = ?').all(leadId);
    const condicoesVenda = db.prepare('SELECT * FROM condicoes_venda WHERE lead_id = ?').get(leadId);
    const carteiraRecebiveis = db.prepare('SELECT * FROM carteira_recebiveis WHERE lead_id = ?').all(leadId);
    const perdas = db.prepare('SELECT * FROM perdas_detalhadas WHERE lead_id = ?').all(leadId);
    const atrasos = db.prepare('SELECT * FROM atrasos WHERE lead_id = ?').all(leadId);
    const atrasosDetalhados = db.prepare('SELECT * FROM atrasos_detalhados WHERE lead_id = ?').all(leadId);
    const amostraCompradores = db.prepare('SELECT * FROM amostra_compradores WHERE lead_id = ?').all(leadId);
    const destinos = db.prepare('SELECT * FROM destinos_exportacao WHERE lead_id = ?').get(leadId);

    const events = db.prepare('SELECT * FROM quotation_events WHERE lead_id = ? ORDER BY created_at DESC').all(leadId);
    const documents = db.prepare('SELECT * FROM documents WHERE lead_id = ? ORDER BY created_at DESC').all(leadId);
    const messages = db.prepare('SELECT * FROM quotation_messages WHERE lead_id = ? ORDER BY created_at ASC').all(leadId);
    const emailLogs = db.prepare(`
      SELECT el.*, sc.nome as seguradora_nome
      FROM email_log el
      LEFT JOIN seguradoras_contatos sc ON sc.slug = el.seguradora_slug
      WHERE el.cotacao_id = ?
      ORDER BY el.enviado_em DESC
    `).all(leadId);
    const propostas = db.prepare(`
      SELECT pr.*, sc.nome as seguradora_nome, sc.cor as seguradora_cor
      FROM propostas_recebidas pr
      LEFT JOIN seguradoras_contatos sc ON sc.slug = pr.seguradora_slug
      WHERE pr.cotacao_id = ?
      ORDER BY pr.recebida_em DESC
    `).all(leadId);
    const lembretes = db.prepare('SELECT * FROM lembretes WHERE cotacao_id = ? ORDER BY data_lembrete ASC').all(leadId);

    // iCover analysis
    let icoverAnalysis = null;
    if (lead.icover_analysis_json) {
      try { icoverAnalysis = JSON.parse(lead.icover_analysis_json); } catch {}
    }

    res.json({
      sucesso: true,
      data: {
        ...lead,
        coSeguradas,
        historicoFaturamento,
        condicoesVenda,
        carteiraRecebiveis,
        perdas,
        atrasos,
        atrasosDetalhados,
        amostraCompradores,
        destinos,
        events,
        documents,
        messages,
        emailLogs,
        propostas,
        lembretes,
        icoverAnalysis
      }
    });
  } catch (err) { next(err); }
});

module.exports = router;
