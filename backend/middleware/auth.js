const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'sentinel-fairfield-jwt-secret-2024';
const JWT_EXPIRES = '2h';
const REFRESH_EXPIRES_DAYS = 30;

function generateTokens(user, db) {
  const access_token = jwt.sign(
    { id: user.id, email: user.email, role: user.role, name: user.name },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES }
  );

  const crypto = require('crypto');
  const refresh_token = crypto.randomBytes(64).toString('hex');
  const expires_at = new Date(Date.now() + REFRESH_EXPIRES_DAYS * 24 * 60 * 60 * 1000).toISOString();

  db.prepare('INSERT INTO sessions (user_id, refresh_token, expires_at) VALUES (?, ?, ?)').run(user.id, refresh_token, expires_at);

  return { access_token, refresh_token };
}

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }
  try {
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido ou expirado' });
  }
}

function optionalAuth(req, res, next) {
  const header = req.headers.authorization;
  if (header && header.startsWith('Bearer ')) {
    try {
      const token = header.split(' ')[1];
      req.user = jwt.verify(token, JWT_SECRET);
    } catch {}
  }
  next();
}

function adminMiddleware(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acesso restrito a administradores' });
  }
  next();
}

module.exports = { authMiddleware, optionalAuth, adminMiddleware, generateTokens, JWT_SECRET };
