const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'fairfield.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo TEXT NOT NULL,
    razao_social TEXT NOT NULL,
    cnpj TEXT NOT NULL,
    setor TEXT NOT NULL,
    faturamento_pct TEXT,
    uf TEXT,
    contato_nome TEXT,
    contato_email TEXT,
    contato_telefone TEXT,
    status TEXT DEFAULT 'novo',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS co_seguradas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    empresa TEXT,
    cnpj TEXT,
    setor TEXT,
    faturamento_pct TEXT,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS historico_faturamento (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    ano TEXT NOT NULL,
    faturamento TEXT,
    perdas TEXT,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS condicoes_venda (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    pct_vista TEXT,
    pct_prazo TEXT,
    prazo_medio_dias TEXT,
    prazo_maximo_dias TEXT,
    faturamento_desejado_seguro TEXT,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS carteira_recebiveis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    faixa TEXT NOT NULL,
    faturamento_total TEXT,
    pct_faturamento TEXT,
    num_clientes TEXT,
    pct_clientes TEXT,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS perdas_detalhadas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    tipo_perda TEXT,
    faixa TEXT,
    ano TEXT,
    valor_total TEXT,
    num_clientes TEXT,
    razao_social TEXT,
    cnpj_importador TEXT,
    pais TEXT,
    exercicio TEXT,
    motivo TEXT,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS atrasos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    faixa_dias TEXT NOT NULL,
    valor_atraso TEXT,
    pct_valor TEXT,
    qtd_clientes TEXT,
    pct_clientes TEXT,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS atrasos_detalhados (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    razao_social TEXT,
    cnpj TEXT,
    data_emissao TEXT,
    data_vencimento TEXT,
    valor TEXT,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS amostra_compradores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    pais TEXT,
    razao_social TEXT,
    cnpj_codigo_fiscal TEXT,
    faturamento_anual TEXT,
    limite_credito TEXT,
    endereco TEXT,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS destinos_exportacao (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    asia_pct TEXT,
    europa_pct TEXT,
    america_sul_pct TEXT,
    america_norte_pct TEXT,
    america_central_pct TEXT,
    africa_oceania_pct TEXT,
    menor_limite TEXT,
    maior_limite TEXT,
    num_importadores TEXT,
    anos_exportando TEXT,
    principais_paises TEXT,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS cotacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    seguradora TEXT NOT NULL,
    status TEXT DEFAULT 'aguardando_resposta',
    data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_resposta DATETIME,
    dias_em_aberto INTEGER DEFAULT 0,
    observacao_broker TEXT,
    arquivo_gerado TEXT,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS comercial_contatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    ativo INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS verification_codes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    code TEXT NOT NULL,
    nome TEXT,
    empresa TEXT,
    telefone TEXT,
    expires_at DATETIME NOT NULL,
    used INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    company TEXT,
    cnpj TEXT,
    phone TEXT,
    password_hash TEXT NOT NULL,
    role TEXT DEFAULT 'client',
    email_verified INTEGER DEFAULT 0,
    avatar_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    refresh_token TEXT NOT NULL UNIQUE,
    expires_at DATETIME NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS password_resets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    token TEXT NOT NULL UNIQUE,
    expires_at DATETIME NOT NULL,
    used INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS quotation_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    status TEXT NOT NULL,
    note TEXT,
    created_by TEXT DEFAULT 'system',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS documents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    type TEXT NOT NULL,
    filename TEXT NOT NULL,
    filepath TEXT NOT NULL,
    visible_to_client INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS quotation_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    sender_type TEXT NOT NULL,
    sender_name TEXT,
    message TEXT NOT NULL,
    read_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
  );
`);

// Add new columns to leads table (safe — ignores if already exist)
const alterColumns = [
  'ALTER TABLE leads ADD COLUMN user_id INTEGER',
  'ALTER TABLE leads ADD COLUMN pipeline_status TEXT DEFAULT \'formulario_enviado\'',
  'ALTER TABLE leads ADD COLUMN icover_score INTEGER',
  'ALTER TABLE leads ADD COLUMN icover_analysis_json TEXT'
];
for (const sql of alterColumns) {
  try { db.exec(sql); } catch (e) { /* column already exists */ }
}

// Limpa códigos expirados na inicialização
db.prepare("DELETE FROM verification_codes WHERE expires_at < datetime('now')").run();

// Limpa sessões expiradas
try { db.prepare("DELETE FROM sessions WHERE expires_at < datetime('now')").run(); } catch (e) {}

// Cria usuário admin padrão se não existir
const bcrypt = require('bcryptjs');
const adminEmail = 'admin@fairfield.com.br';
const existingAdmin = db.prepare('SELECT id FROM users WHERE email = ?').get(adminEmail);
if (!existingAdmin) {
  const hash = bcrypt.hashSync('sentinel2024', 10);
  db.prepare('INSERT INTO users (name, email, password_hash, role, email_verified) VALUES (?, ?, ?, ?, ?)').run(
    'Administrador Fairfield', adminEmail, hash, 'admin', 1
  );
  console.log('[DB] Usuário admin padrão criado: admin@fairfield.com.br');
}

module.exports = db;
