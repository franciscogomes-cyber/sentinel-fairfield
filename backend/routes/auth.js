const express = require('express');
const router = express.Router();
const db = require('../database');
const { enviarCodigoVerificacao } = require('../services/emailService');

// POST /api/auth/send-code
// Gera e envia código OTP por email
router.post('/send-code', async (req, res, next) => {
  try {
    const { email, nome, empresa, telefone } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ sucesso: false, mensagem: 'E-mail inválido' });
    }

    // Gera código de 6 dígitos
    const code = String(Math.floor(100000 + Math.random() * 900000));
    // Salva no formato SQLite-compatível (sem 'T' e sem 'Z')
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000)
      .toISOString().replace('T', ' ').replace('Z', '').split('.')[0];

    // Invalida códigos anteriores do mesmo email
    db.prepare('UPDATE verification_codes SET used = 1 WHERE email = ? AND used = 0').run(email);

    // Insere novo código
    db.prepare(
      'INSERT INTO verification_codes (email, code, nome, empresa, telefone, expires_at) VALUES (?, ?, ?, ?, ?, ?)'
    ).run(email, code, nome || '', empresa || '', telefone || '', expiresAt);

    console.log(`[AUTH] Código OTP gerado para ${email}: ${code} (expira: ${expiresAt} UTC)`);

    // Envia email com o código
    const emailInfo = await enviarCodigoVerificacao(email, nome || email.split('@')[0], code);

    // Modo dev: se usando Ethereal (SMTP não configurado), retorna dados para facilitar teste
    const isTestMode = !process.env.SMTP_PASS || process.env.SMTP_PASS === 'sua_app_password_aqui';
    const resposta = { sucesso: true, mensagem: 'Código enviado para o e-mail informado' };
    if (isTestMode) {
      resposta.dev_mode = true;
      resposta.dev_code = code;
      resposta.dev_preview = emailInfo?._previewUrl || null;
      resposta.mensagem = 'Modo desenvolvimento — SMTP não configurado (código visível abaixo)';
    }

    res.json(resposta);
  } catch (err) {
    next(err);
  }
});

// POST /api/auth/verify-code
// Valida código OTP
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

    // Marca como usado
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
