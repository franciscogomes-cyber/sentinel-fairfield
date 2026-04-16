// ═══════════════════════════════════════════════════════════════════════════
// Centralized insurer list — single source of truth
// ═══════════════════════════════════════════════════════════════════════════

const SEGURADORAS = [
  {
    slug: 'aig',
    nome: 'AIG',
    cor: '#003DA5',
    email_padrao: '',
    contato_padrao: ''
  },
  {
    slug: 'atradius',
    nome: 'Atradius',
    cor: '#E4002B',
    email_padrao: '',
    contato_padrao: ''
  },
  {
    slug: 'coface',
    nome: 'Coface',
    cor: '#D4213D',
    email_padrao: '',
    contato_padrao: ''
  },
  {
    slug: 'allianz-trade',
    nome: 'Allianz Trade',
    cor: '#003781',
    email_padrao: '',
    contato_padrao: ''
  },
  {
    slug: 'avla',
    nome: 'AVLA',
    cor: '#FF6B00',
    email_padrao: '',
    contato_padrao: ''
  },
  {
    slug: 'cesce',
    nome: 'CESCE',
    cor: '#00843D',
    email_padrao: '',
    contato_padrao: ''
  }
];

const SEGURADORAS_NOMES = SEGURADORAS.map(s => s.nome);
const SEGURADORAS_MAP = Object.fromEntries(SEGURADORAS.map(s => [s.slug, s]));

module.exports = { SEGURADORAS, SEGURADORAS_NOMES, SEGURADORAS_MAP };
