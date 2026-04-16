const Database = require('better-sqlite3');
const path = require('path');

const dbPath = process.env.VERCEL
  ? path.join('/tmp', 'fairfield.db')
  : path.join(__dirname, 'fairfield.db');
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

  CREATE TABLE IF NOT EXISTS seguradoras_contatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    email TEXT,
    telefone TEXT,
    contato_nome TEXT,
    cor TEXT,
    ativo INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS lembretes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cotacao_id INTEGER,
    tipo TEXT NOT NULL DEFAULT 'manual',
    titulo TEXT NOT NULL,
    descricao TEXT,
    data_lembrete DATETIME NOT NULL,
    status TEXT DEFAULT 'pendente',
    created_by TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cotacao_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS propostas_recebidas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cotacao_id INTEGER NOT NULL,
    seguradora_slug TEXT NOT NULL,
    valor_premio REAL,
    taxa REAL,
    cobertura_max REAL,
    condicoes TEXT,
    arquivo_path TEXT,
    recebida_em DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cotacao_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS email_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cotacao_id INTEGER NOT NULL,
    seguradora_slug TEXT NOT NULL,
    tipo TEXT NOT NULL DEFAULT 'envio',
    assunto TEXT,
    destinatario TEXT,
    status TEXT DEFAULT 'enviado',
    erro TEXT,
    enviado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
    respondido_em DATETIME,
    message_id TEXT,
    corpo_customizado TEXT,
    FOREIGN KEY (cotacao_id) REFERENCES leads(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS seguradora_emails (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    seguradora_id INTEGER NOT NULL,
    email TEXT NOT NULL,
    nome_contato TEXT,
    cargo TEXT,
    ativo INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (seguradora_id) REFERENCES seguradoras_contatos(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS email_templates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    assunto TEXT NOT NULL,
    corpo TEXT NOT NULL,
    tipo TEXT DEFAULT 'cotacao',
    ativo INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
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

// Add corpo_customizado to email_log if not exists
try { db.exec('ALTER TABLE email_log ADD COLUMN corpo_customizado TEXT'); } catch (e) { /* already exists */ }

// Migrate existing seguradoras emails to seguradora_emails table
const existingSegEmails = db.prepare('SELECT COUNT(*) as count FROM seguradora_emails').get().count;
if (existingSegEmails === 0) {
  const segsWithEmail = db.prepare("SELECT id, email, contato_nome FROM seguradoras_contatos WHERE email IS NOT NULL AND email != ''").all();
  const insertSegEmail = db.prepare('INSERT INTO seguradora_emails (seguradora_id, email, nome_contato) VALUES (?, ?, ?)');
  for (const s of segsWithEmail) {
    if (s.email.trim()) insertSegEmail.run(s.id, s.email.trim(), s.contato_nome || null);
  }
}

// Seed default email template
const existingTemplates = db.prepare('SELECT COUNT(*) as count FROM email_templates').get().count;
if (existingTemplates === 0) {
  db.prepare(`INSERT INTO email_templates (nome, assunto, corpo, tipo) VALUES (?, ?, ?, ?)`).run(
    'Solicitação de Cotação Padrão',
    'Cotação Seguro de Crédito — {{empresa}} ({{modalidade}})',
    `Prezados,

Encaminhamos em anexo a ficha técnica para cotação de Seguro de Crédito da empresa {{empresa}}.

Empresa: {{empresa}}
CNPJ: {{cnpj}}
Modalidade: {{modalidade}}
Setor: {{setor}}

Solicitamos a gentileza de analisar e retornar com a proposta no menor prazo possível.

Atenciosamente,
Fairfield Corretora de Seguros`,
    'cotacao'
  );
  console.log('[DB] Template de email padrão criado');
}

// Limpa códigos expirados na inicialização
db.prepare("DELETE FROM verification_codes WHERE expires_at < datetime('now')").run();

// Limpa sessões expiradas
try { db.prepare("DELETE FROM sessions WHERE expires_at < datetime('now')").run(); } catch (e) {}

// Seed seguradoras_contatos from centralized list
const { SEGURADORAS } = require('./constants/seguradoras');
const existingSeguradoras = db.prepare('SELECT COUNT(*) as count FROM seguradoras_contatos').get().count;
if (existingSeguradoras === 0) {
  const insertSeg = db.prepare('INSERT INTO seguradoras_contatos (nome, slug, email, telefone, contato_nome, cor) VALUES (?, ?, ?, ?, ?, ?)');
  for (const s of SEGURADORAS) {
    insertSeg.run(s.nome, s.slug, s.email_padrao || '', '', s.contato_padrao || '', s.cor || '');
  }
  console.log(`[DB] ${SEGURADORAS.length} seguradoras seed criadas`);
}

// Remove EZZE (não é Cia de seguro de crédito)
db.prepare("DELETE FROM seguradora_emails WHERE seguradora_id IN (SELECT id FROM seguradoras_contatos WHERE slug = 'ezze')").run();
db.prepare("DELETE FROM seguradoras_contatos WHERE slug = 'ezze'").run();

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
