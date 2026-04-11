const express = require('express');
const router = express.Router();
const db = require('../database');

// Ensure the comerciais_contatos table exists
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

// ─── GET /api/admin/comerciais ───────────────────────────────────────────────
// List all active commercial contacts
router.get('/comerciais', (req, res, next) => {
  try {
    const contatos = db
      .prepare('SELECT * FROM comerciais_contatos WHERE ativo = 1 ORDER BY nome ASC')
      .all();

    res.json({ sucesso: true, data: contatos });
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/admin/comerciais ──────────────────────────────────────────────
// Add a new commercial contact
router.post('/comerciais', (req, res, next) => {
  try {
    const { nome, email } = req.body;

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'O campo "email" é obrigatório.'
      });
    }

    const emailNormalizado = email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(emailNormalizado)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Formato de e-mail inválido.'
      });
    }

    if (!nome || typeof nome !== 'string' || !nome.trim()) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'O campo "nome" é obrigatório.'
      });
    }

    const result = db
      .prepare('INSERT INTO comerciais_contatos (nome, email) VALUES (?, ?)')
      .run(nome.trim(), emailNormalizado);

    const novoContato = db
      .prepare('SELECT * FROM comerciais_contatos WHERE id = ?')
      .get(result.lastInsertRowid);

    res.status(201).json({ sucesso: true, data: novoContato });
  } catch (err) {
    // SQLite unique constraint violation
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE' || (err.message && err.message.includes('UNIQUE'))) {
      return res.status(409).json({
        sucesso: false,
        mensagem: 'Já existe um contato cadastrado com este e-mail.'
      });
    }
    next(err);
  }
});

// ─── PUT /api/admin/comerciais/:id ───────────────────────────────────────────
// Toggle active status
router.put('/comerciais/:id', (req, res, next) => {
  try {
    const { id } = req.params;

    const contato = db
      .prepare('SELECT * FROM comerciais_contatos WHERE id = ?')
      .get(id);

    if (!contato) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Contato não encontrado.'
      });
    }

    const novoStatus = contato.ativo === 1 ? 0 : 1;

    db.prepare('UPDATE comerciais_contatos SET ativo = ? WHERE id = ?').run(novoStatus, id);

    const contatoAtualizado = db
      .prepare('SELECT * FROM comerciais_contatos WHERE id = ?')
      .get(id);

    res.json({ sucesso: true, data: contatoAtualizado });
  } catch (err) {
    next(err);
  }
});

// ─── DELETE /api/admin/comerciais/:id ────────────────────────────────────────
// Delete a contact permanently
router.delete('/comerciais/:id', (req, res, next) => {
  try {
    const { id } = req.params;

    const contato = db
      .prepare('SELECT * FROM comerciais_contatos WHERE id = ?')
      .get(id);

    if (!contato) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Contato não encontrado.'
      });
    }

    db.prepare('DELETE FROM comerciais_contatos WHERE id = ?').run(id);

    res.json({
      sucesso: true,
      data: { id: parseInt(id), mensagem: 'Contato removido com sucesso.' }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
