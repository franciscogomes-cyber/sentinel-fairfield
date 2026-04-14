const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../database');
const { authMiddleware, generateTokens } = require('../middleware/auth');

let enviarCodigoVerificacao;
try {
  ({ enviarCodigoVerificacao } = require('../services/emailService'));
} catch (e) {
  enviarCodigoVerificacao = async () => { console.warn('[EMAIL] emailService não disponível'); };
}

// ─── POST /api/auth/register ────────────────────────────────────────────────
router.post('/register', (req, res, next) => {
  try {
    const { name, email, company, cnpj, phone, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ sucesso: false, mensagem: 'Nome, e-mail e senha são obrigatórios' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ sucesso: false, mensagem: 'Formato de e-mail inválido' });
    }
    if (password.length < 6) {
      return res.status(400).json({ sucesso: false, mensagem: 'Senha deve ter pelo menos 6 caracteres' });
    }

    const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email.toLowerCase().trim());
    if (existing) {
      return res.status(409).json({ sucesso: false, mensagem: 'Já existe uma conta com este e-mail' });
    }

    const password_hash = bcrypt.hashSync(password, 10);
    const result = db.prepare(
      'INSERT INTO users (name, email, company, cnpj, phone, password_hash) VALUES (?, ?, ?, ?, ?, ?)'
    ).run(name.trim(), email.toLowerCase().trim(), company || null, cnpj || null, phone || null, password_hash);

    const user = db.prepare('SELECT id, name, email, company, cnpj, phone, role, email_verified, avatar_url, created_at FROM users WHERE id = ?').get(result.lastInsertRowid);
    const tokens = generateTokens(user, db);

    console.log(`[AUTH] Novo usuário registrado: ${user.email} (id: ${user.id})`);

    res.status(201).json({
      sucesso: true,
      mensagem: 'Conta criada com sucesso',
      data: { user, ...tokens }
    });
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/auth/login ───────────────────────────────────────────────────
router.post('/login', (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ sucesso: false, mensagem: 'E-mail e senha são obrigatórios' });
    }

    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email.toLowerCase().trim());
    if (!user) {
      return res.status(401).json({ sucesso: false, mensagem: 'E-mail ou senha incorretos' });
    }

    const valid = bcrypt.compareSync(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ sucesso: false, mensagem: 'E-mail ou senha incorretos' });
    }

    const tokens = generateTokens(user, db);

    // Remove password_hash from response
    const { password_hash, ...safeUser } = user;

    console.log(`[AUTH] Login: ${user.email} (role: ${user.role})`);

    res.json({
      sucesso: true,
      mensagem: 'Login realizado com sucesso',
      data: { user: safeUser, ...tokens }
    });
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/auth/refresh ─────────────────────────────────────────────────
router.post('/refresh', (req, res, next) => {
  try {
    const { refresh_token } = req.body;

    if (!refresh_token) {
      return res.status(400).json({ sucesso: false, mensagem: 'Refresh token é obrigatório' });
    }

    const session = db.prepare(
      "SELECT * FROM sessions WHERE refresh_token = ? AND expires_at > datetime('now')"
    ).get(refresh_token);

    if (!session) {
      return res.status(401).json({ sucesso: false, mensagem: 'Sessão inválida ou expirada' });
    }

    const user = db.prepare('SELECT id, name, email, role FROM users WHERE id = ?').get(session.user_id);
    if (!user) {
      return res.status(401).json({ sucesso: false, mensagem: 'Usuário não encontrado' });
    }

    // Delete old session
    db.prepare('DELETE FROM sessions WHERE id = ?').run(session.id);

    // Generate new tokens
    const tokens = generateTokens(user, db);

    res.json({
      sucesso: true,
      data: { ...tokens }
    });
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/auth/logout ──────────────────────────────────────────────────
router.post('/logout', (req, res, next) => {
  try {
    const { refresh_token } = req.body;

    if (refresh_token) {
      db.prepare('DELETE FROM sessions WHERE refresh_token = ?').run(refresh_token);
    }

    res.json({ sucesso: true, mensagem: 'Logout realizado com sucesso' });
  } catch (err) {
    next(err);
  }
});

// ─── GET /api/auth/me ───────────────────────────────────────────────────────
router.get('/me', authMiddleware, (req, res, next) => {
  try {
    const user = db.prepare(
      'SELECT id, name, email, company, cnpj, phone, role, email_verified, avatar_url, created_at, updated_at FROM users WHERE id = ?'
    ).get(req.user.id);

    if (!user) {
      return res.status(404).json({ sucesso: false, mensagem: 'Usuário não encontrado' });
    }

    res.json({ sucesso: true, data: user });
  } catch (err) {
    next(err);
  }
});

// ─── PUT /api/auth/profile ──────────────────────────────────────────────────
router.put('/profile', authMiddleware, (req, res, next) => {
  try {
    const { name, phone, company } = req.body;

    const updates = [];
    const params = [];

    if (name !== undefined) { updates.push('name = ?'); params.push(name.trim()); }
    if (phone !== undefined) { updates.push('phone = ?'); params.push(phone); }
    if (company !== undefined) { updates.push('company = ?'); params.push(company); }

    if (updates.length === 0) {
      return res.status(400).json({ sucesso: false, mensagem: 'Nenhum campo para atualizar' });
    }

    updates.push("updated_at = datetime('now')");
    params.push(req.user.id);

    db.prepare(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`).run(...params);

    const user = db.prepare(
      'SELECT id, name, email, company, cnpj, phone, role, email_verified, avatar_url, created_at, updated_at FROM users WHERE id = ?'
    ).get(req.user.id);

    res.json({ sucesso: true, mensagem: 'Perfil atualizado', data: user });
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/auth/change-password ─────────────────────────────────────────
router.post('/change-password', authMiddleware, (req, res, next) => {
  try {
    const { current_password, new_password } = req.body;

    if (!current_password || !new_password) {
      return res.status(400).json({ sucesso: false, mensagem: 'Senha atual e nova senha são obrigatórias' });
    }
    if (new_password.length < 6) {
      return res.status(400).json({ sucesso: false, mensagem: 'Nova senha deve ter pelo menos 6 caracteres' });
    }

    const user = db.prepare('SELECT password_hash FROM users WHERE id = ?').get(req.user.id);
    if (!user) {
      return res.status(404).json({ sucesso: false, mensagem: 'Usuário não encontrado' });
    }

    const valid = bcrypt.compareSync(current_password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ sucesso: false, mensagem: 'Senha atual incorreta' });
    }

    const new_hash = bcrypt.hashSync(new_password, 10);
    db.prepare("UPDATE users SET password_hash = ?, updated_at = datetime('now') WHERE id = ?").run(new_hash, req.user.id);

    // Invalidate all other sessions for this user
    db.prepare('DELETE FROM sessions WHERE user_id = ?').run(req.user.id);

    res.json({ sucesso: true, mensagem: 'Senha alterada com sucesso. Faça login novamente.' });
  } catch (err) {
    next(err);
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// OTP endpoints (backward compatibility)
// ═══════════════════════════════════════════════════════════════════════════

// POST /api/auth/send-code
router.post('/send-code', async (req, res, next) => {
  try {
    const { email, nome, empresa, telefone } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ sucesso: false, mensagem: 'E-mail inválido' });
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000)
      .toISOString().replace('T', ' ').replace('Z', '').split('.')[0];

    db.prepare('UPDATE verification_codes SET used = 1 WHERE email = ? AND used = 0').run(email);

    db.prepare(
      'INSERT INTO verification_codes (email, code, nome, empresa, telefone, expires_at) VALUES (?, ?, ?, ?, ?, ?)'
    ).run(email, code, nome || '', empresa || '', telefone || '', expiresAt);

    console.log(`[AUTH] Código OTP gerado para ${email}: ${code} (expira: ${expiresAt} UTC)`);

    const isTestMode = !process.env.SMTP_PASS || process.env.SMTP_PASS === 'sua_app_password_aqui';
    if (isTestMode) {
      enviarCodigoVerificacao(email, nome || email.split('@')[0], code)
        .then(info => {
          if (info?._previewUrl) console.log(`[EMAIL] Preview OTP: ${info._previewUrl}`);
        })
        .catch(err => console.error('[EMAIL] Erro ao enviar OTP:', err.message));

      return res.json({
        sucesso: true,
        dev_mode: true,
        dev_code: code,
        dev_preview: null,
        mensagem: 'Modo desenvolvimento — SMTP não configurado (código visível abaixo)'
      });
    }

    await enviarCodigoVerificacao(email, nome || email.split('@')[0], code);
    res.json({ sucesso: true, mensagem: 'Código enviado para o e-mail informado' });
  } catch (err) {
    next(err);
  }
});

// POST /api/auth/verify-code
router.post('/verify-code', (req, res, next) => {
  try {
    const { email, code } = req.body;
    if (!email || !code) {
      return res.status(400).json({ sucesso: false, mensagem: 'E-mail e código são obrigatórios' });
    }

    const record = db.prepare(
      `SELECT * FROM verification_codes
       WHERE email = ? AND code = ? AND used = 0
       AND expires_at > datetime('now')
       ORDER BY created_at DESC LIMIT 1`
    ).get(email, code);

    if (!record) {
      return res.status(401).json({ sucesso: false, mensagem: 'Código inválido ou expirado' });
    }

    db.prepare('UPDATE verification_codes SET used = 1 WHERE id = ?').run(record.id);

    res.json({
      sucesso: true,
      mensagem: 'Código verificado com sucesso',
      data: {
        email: record.email,
        nome: record.nome,
        empresa: record.empresa,
        telefone: record.telefone
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
