const express = require('express');
const router = express.Router();
const db = require('../database');
const { authMiddleware } = require('../middleware/auth');

// All client routes require authentication
router.use(authMiddleware);

// ─── GET /api/client/quotations ─────────────────────────────────────────────
// List all quotations for the logged-in user
router.get('/quotations', (req, res, next) => {
  try {
    const quotations = db.prepare(`
      SELECT l.id, l.tipo, l.razao_social, l.cnpj, l.setor, l.contato_nome, l.contato_email,
             l.status, l.pipeline_status, l.icover_score, l.created_at,
             (SELECT COUNT(*) FROM cotacoes c WHERE c.lead_id = l.id) as total_cotacoes,
             (SELECT GROUP_CONCAT(DISTINCT c.seguradora) FROM cotacoes c WHERE c.lead_id = l.id) as seguradoras,
             (SELECT COUNT(*) FROM quotation_messages qm WHERE qm.lead_id = l.id AND qm.read_at IS NULL AND qm.sender_type = 'admin') as unread_messages
      FROM leads l
      WHERE l.user_id = ?
      ORDER BY l.created_at DESC
    `).all(req.user.id);

    res.json({ sucesso: true, data: quotations });
  } catch (err) {
    next(err);
  }
});

// ─── GET /api/client/quotations/:id ─────────────────────────────────────────
// Full detail of a specific quotation (verify ownership)
router.get('/quotations/:id', (req, res, next) => {
  try {
    const lead = db.prepare('SELECT * FROM leads WHERE id = ? AND user_id = ?').get(req.params.id, req.user.id);
    if (!lead) {
      return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });
    }

    const coSeguradas = db.prepare('SELECT * FROM co_seguradas WHERE lead_id = ?').all(lead.id);
    const historicoFaturamento = db.prepare('SELECT * FROM historico_faturamento WHERE lead_id = ?').all(lead.id);
    const condicoesVenda = db.prepare('SELECT * FROM condicoes_venda WHERE lead_id = ?').get(lead.id);
    const carteiraRecebiveis = db.prepare('SELECT * FROM carteira_recebiveis WHERE lead_id = ?').all(lead.id);
    const cotacoes = db.prepare('SELECT * FROM cotacoes WHERE lead_id = ? ORDER BY data_envio DESC').all(lead.id);

    let icoverAnalysis = null;
    if (lead.icover_analysis_json) {
      try { icoverAnalysis = JSON.parse(lead.icover_analysis_json); } catch (e) {}
    }

    // Remove internal fields
    const { icover_analysis_json, ...leadData } = lead;

    res.json({
      sucesso: true,
      data: {
        ...leadData,
        icover_analysis: icoverAnalysis,
        coSeguradas,
        historicoFaturamento,
        condicoesVenda,
        carteiraRecebiveis,
        cotacoes
      }
    });
  } catch (err) {
    next(err);
  }
});

// ─── GET /api/client/quotations/:id/events ──────────────────────────────────
router.get('/quotations/:id/events', (req, res, next) => {
  try {
    const lead = db.prepare('SELECT id FROM leads WHERE id = ? AND user_id = ?').get(req.params.id, req.user.id);
    if (!lead) {
      return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });
    }

    const events = db.prepare(
      'SELECT * FROM quotation_events WHERE lead_id = ? ORDER BY created_at ASC'
    ).all(req.params.id);

    res.json({ sucesso: true, data: events });
  } catch (err) {
    next(err);
  }
});

// ─── GET /api/client/quotations/:id/documents ───────────────────────────────
router.get('/quotations/:id/documents', (req, res, next) => {
  try {
    const lead = db.prepare('SELECT id FROM leads WHERE id = ? AND user_id = ?').get(req.params.id, req.user.id);
    if (!lead) {
      return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });
    }

    const documents = db.prepare(
      'SELECT id, lead_id, type, filename, created_at FROM documents WHERE lead_id = ? AND visible_to_client = 1 ORDER BY created_at DESC'
    ).all(req.params.id);

    res.json({ sucesso: true, data: documents });
  } catch (err) {
    next(err);
  }
});

// ─── GET /api/client/quotations/:id/messages ────────────────────────────────
router.get('/quotations/:id/messages', (req, res, next) => {
  try {
    const lead = db.prepare('SELECT id FROM leads WHERE id = ? AND user_id = ?').get(req.params.id, req.user.id);
    if (!lead) {
      return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });
    }

    const messages = db.prepare(
      'SELECT * FROM quotation_messages WHERE lead_id = ? ORDER BY created_at ASC'
    ).all(req.params.id);

    // Mark admin messages as read
    db.prepare(
      "UPDATE quotation_messages SET read_at = datetime('now') WHERE lead_id = ? AND sender_type = 'admin' AND read_at IS NULL"
    ).run(req.params.id);

    res.json({ sucesso: true, data: messages });
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/client/quotations/:id/messages ───────────────────────────────
router.post('/quotations/:id/messages', (req, res, next) => {
  try {
    const lead = db.prepare('SELECT id FROM leads WHERE id = ? AND user_id = ?').get(req.params.id, req.user.id);
    if (!lead) {
      return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });
    }

    const { message } = req.body;
    if (!message || !message.trim()) {
      return res.status(400).json({ sucesso: false, mensagem: 'Mensagem é obrigatória' });
    }

    const result = db.prepare(
      'INSERT INTO quotation_messages (lead_id, sender_type, sender_name, message) VALUES (?, ?, ?, ?)'
    ).run(req.params.id, 'client', req.user.name, message.trim());

    const msg = db.prepare('SELECT * FROM quotation_messages WHERE id = ?').get(result.lastInsertRowid);

    res.status(201).json({ sucesso: true, data: msg });
  } catch (err) {
    next(err);
  }
});

// ─── GET /api/client/stats ──────────────────────────────────────────────────
router.get('/stats', (req, res, next) => {
  try {
    const userId = req.user.id;

    const total = db.prepare('SELECT COUNT(*) as count FROM leads WHERE user_id = ?').get(userId).count;

    const byStatus = db.prepare(`
      SELECT pipeline_status, COUNT(*) as count
      FROM leads WHERE user_id = ?
      GROUP BY pipeline_status
    `).all(userId);

    const latest = db.prepare(`
      SELECT l.id, l.razao_social, l.tipo, l.pipeline_status, l.created_at
      FROM leads l WHERE l.user_id = ?
      ORDER BY l.created_at DESC LIMIT 5
    `).all(userId);

    const unreadMessages = db.prepare(`
      SELECT COUNT(*) as count FROM quotation_messages qm
      JOIN leads l ON qm.lead_id = l.id
      WHERE l.user_id = ? AND qm.sender_type = 'admin' AND qm.read_at IS NULL
    `).get(userId).count;

    res.json({
      sucesso: true,
      data: {
        total_quotations: total,
        by_status: byStatus,
        latest_activity: latest,
        unread_messages: unreadMessages
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
