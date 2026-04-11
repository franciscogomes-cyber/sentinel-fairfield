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
`);

module.exports = db;
