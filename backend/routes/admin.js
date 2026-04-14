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

module.exports = router;
