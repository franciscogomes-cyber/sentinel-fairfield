/**
 * ══════════════════════════════════════════════════════════════════
 *  iCover — Motor de Subscrição Inteligente de Seguro de Crédito
 *  SENTINEL / Fairfield Corretora de Seguros
 *  SUSEP 20.2036457.1
 * ══════════════════════════════════════════════════════════════════
 *
 *  Este motor analisa os dados coletados no intake e gera:
 *  1. Score de risco (0-100)
 *  2. Classe de risco (Preferred, Standard, Substandard, High Risk, Decline)
 *  3. Taxa base e ajustada
 *  4. Prêmio estimado (mínimo, esperado, máximo)
 *  5. Estrutura de cobertura recomendada (tipo apólice, PMI, franquia, limites)
 *  6. Análise detalhada por dimensão
 *  7. Bonus/Malus aplicável
 */

// ─── CLASSIFICAÇÃO DE SETORES POR RISCO ─────────────────────────
const SECTOR_RISK = {
  // LOW RISK (multiplier 0.7 - 1.0)
  'alimentos': { risk: 'low', multiplier: 0.85, baseRate: 0.0012, lossRatio: 0.06, label: 'Alimentos e Bebidas' },
  'bebidas': { risk: 'low', multiplier: 0.85, baseRate: 0.0012, lossRatio: 0.06, label: 'Bebidas' },
  'farmaceutico': { risk: 'low', multiplier: 0.80, baseRate: 0.0011, lossRatio: 0.045, label: 'Farmacêutico' },
  'energia': { risk: 'low', multiplier: 0.75, baseRate: 0.0010, lossRatio: 0.04, label: 'Energia e Utilities' },
  'tecnologia': { risk: 'low', multiplier: 0.85, baseRate: 0.0015, lossRatio: 0.06, label: 'Tecnologia da Informação' },
  'saude': { risk: 'low', multiplier: 0.80, baseRate: 0.0012, lossRatio: 0.05, label: 'Saúde' },

  // MEDIUM RISK (multiplier 1.0 - 1.5)
  'industria': { risk: 'medium', multiplier: 1.10, baseRate: 0.0020, lossRatio: 0.09, label: 'Indústria de Transformação' },
  'manufatura': { risk: 'medium', multiplier: 1.10, baseRate: 0.0020, lossRatio: 0.09, label: 'Manufatura' },
  'quimica': { risk: 'medium', multiplier: 1.15, baseRate: 0.0018, lossRatio: 0.07, label: 'Química e Petroquímica' },
  'agronegocio': { risk: 'medium', multiplier: 1.05, baseRate: 0.0015, lossRatio: 0.075, label: 'Agronegócio' },
  'logistica': { risk: 'medium', multiplier: 1.10, baseRate: 0.0022, lossRatio: 0.09, label: 'Logística e Transporte' },
  'transporte': { risk: 'medium', multiplier: 1.10, baseRate: 0.0022, lossRatio: 0.09, label: 'Transporte' },
  'varejo': { risk: 'medium', multiplier: 1.20, baseRate: 0.0025, lossRatio: 0.115, label: 'Varejo' },
  'servicos': { risk: 'medium', multiplier: 1.05, baseRate: 0.0018, lossRatio: 0.08, label: 'Serviços' },
  'papel': { risk: 'medium', multiplier: 1.10, baseRate: 0.0020, lossRatio: 0.08, label: 'Papel e Celulose' },
  'plastico': { risk: 'medium', multiplier: 1.10, baseRate: 0.0020, lossRatio: 0.08, label: 'Plásticos e Borracha' },
  'eletronico': { risk: 'medium', multiplier: 1.15, baseRate: 0.0022, lossRatio: 0.09, label: 'Eletroeletrônicos' },
  'cosmetico': { risk: 'medium', multiplier: 1.00, baseRate: 0.0016, lossRatio: 0.07, label: 'Cosméticos e Higiene' },

  // HIGH RISK (multiplier 1.5 - 2.5)
  'construcao': { risk: 'high', multiplier: 1.80, baseRate: 0.0045, lossRatio: 0.17, label: 'Construção Civil' },
  'siderurgia': { risk: 'high', multiplier: 1.60, baseRate: 0.0030, lossRatio: 0.115, label: 'Siderurgia e Metalurgia' },
  'metalurgia': { risk: 'high', multiplier: 1.60, baseRate: 0.0030, lossRatio: 0.115, label: 'Metalurgia' },
  'textil': { risk: 'high', multiplier: 1.70, baseRate: 0.0035, lossRatio: 0.14, label: 'Têxtil e Confecções' },
  'moda': { risk: 'high', multiplier: 1.75, baseRate: 0.0038, lossRatio: 0.15, label: 'Moda e Vestuário' },
  'automotivo': { risk: 'high', multiplier: 1.55, baseRate: 0.0030, lossRatio: 0.10, label: 'Automotivo' },
  'mineracao': { risk: 'high', multiplier: 1.60, baseRate: 0.0032, lossRatio: 0.12, label: 'Mineração' },

  // VERY HIGH RISK (multiplier 2.5+)
  'imobiliario': { risk: 'very_high', multiplier: 2.50, baseRate: 0.0060, lossRatio: 0.22, label: 'Incorporação Imobiliária' },
  'commodities': { risk: 'very_high', multiplier: 2.20, baseRate: 0.0050, lossRatio: 0.20, label: 'Trading de Commodities' },
}

// Setor padrão para setores não mapeados
const DEFAULT_SECTOR = { risk: 'medium', multiplier: 1.15, baseRate: 0.0022, lossRatio: 0.10, label: 'Outros' }

// ─── TABELAS DE SCORING ──────────────────────────────────────────

// Anos de existência (baseado no CNPJ - pode ser inferido ou informado)
function scoreYearsInBusiness(years) {
  if (years > 20) return 10
  if (years > 10) return 8
  if (years > 5) return 6
  if (years > 2) return 4
  return 2
}

// Porte da empresa (faturamento anual em R$ ou US$)
function scoreRevenue(revenue, tipo) {
  const r = tipo === 'externo' ? revenue * 5.0 : revenue // Converter US$ para BRL aprox
  if (r > 200_000_000) return 15
  if (r > 50_000_000) return 12
  if (r > 20_000_000) return 9
  if (r > 5_000_000) return 6
  return 3
}

// Sinistralidade (loss ratio médio dos últimos anos)
function scoreLossRatio(avgLossRatio) {
  if (avgLossRatio === 0) return 25
  if (avgLossRatio <= 0.02) return 22
  if (avgLossRatio <= 0.05) return 20
  if (avgLossRatio <= 0.10) return 16
  if (avgLossRatio <= 0.15) return 12
  if (avgLossRatio <= 0.30) return 8
  if (avgLossRatio <= 0.50) return 3
  return 0
}

// Concentração de compradores (% do maior comprador no faturamento)
function scoreConcentration(topBuyerPct) {
  if (topBuyerPct < 0.05) return 20
  if (topBuyerPct < 0.10) return 16
  if (topBuyerPct < 0.20) return 12
  if (topBuyerPct < 0.30) return 8
  if (topBuyerPct < 0.50) return 4
  return 0
}

// Prazo médio de crédito
function scorePaymentTerms(avgDays) {
  if (avgDays <= 30) return 15
  if (avgDays <= 45) return 13
  if (avgDays <= 60) return 12
  if (avgDays <= 90) return 9
  if (avgDays <= 120) return 6
  if (avgDays <= 180) return 3
  return 0
}

// Setor de atividade
function scoreSector(sectorInfo) {
  switch (sectorInfo.risk) {
    case 'low': return 10
    case 'medium': return 7
    case 'high': return 4
    case 'very_high': return 1
    default: return 5
  }
}

// Diversificação geográfica
function scoreGeography(tipo, destinos) {
  if (tipo === 'interno') return 3 // doméstico = nota fixa média
  if (!destinos) return 2
  const regions = [
    destinos.asia_pct, destinos.europa_pct, destinos.america_sul_pct,
    destinos.america_norte_pct, destinos.america_central_pct, destinos.africa_oceania_pct
  ].filter(p => p > 0).length
  if (regions >= 4) return 5
  if (regions >= 3) return 4
  if (regions >= 2) return 3
  return 2
}

// ─── FATORES DE AJUSTE DE TAXA ───────────────────────────────────

function factorLossHistory(avgLossRatio) {
  if (avgLossRatio === 0) return 0.80
  if (avgLossRatio <= 0.02) return 0.85
  if (avgLossRatio <= 0.05) return 0.92
  if (avgLossRatio <= 0.10) return 1.00
  if (avgLossRatio <= 0.15) return 1.10
  if (avgLossRatio <= 0.30) return 1.30
  if (avgLossRatio <= 0.50) return 1.70
  return 2.50
}

function factorConcentration(topBuyersPct) {
  if (topBuyersPct < 0.15) return 0.90
  if (topBuyersPct < 0.30) return 0.95
  if (topBuyersPct < 0.50) return 1.00
  if (topBuyersPct < 0.70) return 1.15
  if (topBuyersPct < 0.85) return 1.30
  return 1.50
}

function factorPaymentTerms(avgDays) {
  if (avgDays <= 30) return 0.85
  if (avgDays <= 45) return 0.92
  if (avgDays <= 60) return 1.00
  if (avgDays <= 90) return 1.15
  if (avgDays <= 120) return 1.30
  if (avgDays <= 150) return 1.50
  return 1.75
}

function factorNumBuyers(numBuyers) {
  if (numBuyers > 200) return 0.85
  if (numBuyers > 100) return 0.90
  if (numBuyers > 50) return 0.95
  if (numBuyers > 20) return 1.00
  if (numBuyers > 10) return 1.10
  if (numBuyers > 5) return 1.25
  return 1.50
}

function factorGeography(tipo, destinos) {
  if (tipo === 'interno') return 1.00
  if (!destinos) return 1.05
  // Ponderar pelo risco dos destinos
  const oecd = (destinos.europa_pct || 0) + (destinos.america_norte_pct || 0)
  const latam = (destinos.america_sul_pct || 0) + (destinos.america_central_pct || 0)
  const emerging = (destinos.asia_pct || 0) + (destinos.africa_oceania_pct || 0)
  if (oecd > 60) return 0.95
  if (latam > 60) return 1.05
  if (emerging > 40) return 1.15
  return 1.00
}

function factorPMI(pmi) {
  if (pmi <= 0.60) return 0.75
  if (pmi <= 0.70) return 0.85
  if (pmi <= 0.75) return 0.90
  if (pmi <= 0.80) return 0.95
  if (pmi <= 0.85) return 1.00
  if (pmi <= 0.90) return 1.10
  return 1.25
}

function factorFranchise(hasAAD, aadMultiple) {
  if (!hasAAD) return 1.00
  if (aadMultiple <= 1.0) return 0.85
  if (aadMultiple <= 1.5) return 0.75
  if (aadMultiple <= 2.0) return 0.65
  return 0.55
}

// ─── BONUS / MALUS ───────────────────────────────────────────────

function calculateBonusMalus(lossRatios) {
  // lossRatios = array dos últimos anos [2023, 2024, 2025...]
  const validYears = lossRatios.filter(lr => lr !== null && lr !== undefined)
  if (validYears.length === 0) return { factor: 1.00, type: 'neutro', label: 'Sem histórico', cleanYears: 0 }

  const cleanYears = validYears.filter(lr => lr === 0).length
  const avgLR = validYears.reduce((a, b) => a + b, 0) / validYears.length

  // Bonus por anos limpos consecutivos
  if (avgLR === 0 && cleanYears >= 3) return { factor: 0.75, type: 'bonus', label: `Bônus máximo (${cleanYears} anos sem sinistro)`, cleanYears, pct: -25 }
  if (avgLR === 0 && cleanYears >= 2) return { factor: 0.82, type: 'bonus', label: `Bônus (${cleanYears} anos sem sinistro)`, cleanYears, pct: -18 }
  if (avgLR === 0 && cleanYears >= 1) return { factor: 0.90, type: 'bonus', label: 'Bônus (1 ano sem sinistro)', cleanYears, pct: -10 }
  if (avgLR <= 0.02) return { factor: 0.92, type: 'bonus', label: 'Bônus (sinistralidade < 2%)', cleanYears, pct: -8 }
  if (avgLR <= 0.05) return { factor: 0.95, type: 'bonus', label: 'Bônus moderado (sinistralidade < 5%)', cleanYears, pct: -5 }

  // Neutro
  if (avgLR <= 0.15) return { factor: 1.00, type: 'neutro', label: 'Experiência neutra', cleanYears, pct: 0 }

  // Malus
  if (avgLR <= 0.30) return { factor: 1.20, type: 'malus', label: 'Malus leve (sinistralidade 15-30%)', cleanYears, pct: +20 }
  if (avgLR <= 0.50) return { factor: 1.50, type: 'malus', label: 'Malus moderado (sinistralidade 30-50%)', cleanYears, pct: +50 }
  if (avgLR <= 0.75) return { factor: 1.80, type: 'malus', label: 'Malus severo (sinistralidade 50-75%)', cleanYears, pct: +80 }
  return { factor: 2.50, type: 'malus', label: 'Malus crítico (sinistralidade > 75%)', cleanYears, pct: +150 }
}

// ─── IDENTIFICAR SETOR ───────────────────────────────────────────

function identifySector(sectorText) {
  if (!sectorText) return DEFAULT_SECTOR
  const norm = sectorText.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')

  // Tentar match direto
  for (const [key, val] of Object.entries(SECTOR_RISK)) {
    if (norm.includes(key)) return { ...val, matched: key }
  }

  // Match por palavras-chave expandidas
  const keywords = {
    'alimento': 'alimentos', 'comida': 'alimentos', 'food': 'alimentos', 'frigorifico': 'alimentos',
    'bebida': 'bebidas', 'cerveja': 'bebidas', 'drink': 'bebidas',
    'farmac': 'farmaceutico', 'remedio': 'farmaceutico', 'medicamento': 'farmaceutico', 'pharma': 'farmaceutico',
    'eletric': 'energia', 'gas': 'energia', 'utility': 'energia',
    'tech': 'tecnologia', 'software': 'tecnologia', 'ti': 'tecnologia', 'digital': 'tecnologia', 'saas': 'tecnologia',
    'hospital': 'saude', 'medic': 'saude', 'clinic': 'saude',
    'fabrica': 'industria', 'industrial': 'industria', 'producao': 'industria', 'manufacturing': 'industria',
    'quimic': 'quimica', 'petroquim': 'quimica', 'chemical': 'quimica',
    'agro': 'agronegocio', 'agricul': 'agronegocio', 'pecuar': 'agronegocio', 'graos': 'agronegocio', 'soja': 'agronegocio',
    'frete': 'logistica', 'transporta': 'logistica', 'caminhao': 'transporte', 'rodoviario': 'transporte',
    'loja': 'varejo', 'comercio': 'varejo', 'retail': 'varejo', 'atacado': 'varejo', 'distribuidor': 'varejo', 'distribuicao': 'varejo',
    'servico': 'servicos', 'consultoria': 'servicos', 'terceiriz': 'servicos',
    'papel': 'papel', 'celulose': 'papel', 'embalagem': 'papel',
    'plastic': 'plastico', 'borracha': 'plastico', 'rubber': 'plastico',
    'eletron': 'eletronico', 'informatica': 'eletronico', 'hardware': 'eletronico',
    'cosmetic': 'cosmetico', 'higiene': 'cosmetico', 'beleza': 'cosmetico',
    'construc': 'construcao', 'obra': 'construcao', 'engenharia': 'construcao', 'cimento': 'construcao',
    'siderurg': 'siderurgia', 'aco': 'siderurgia', 'steel': 'siderurgia', 'ferro': 'metalurgia', 'metal': 'metalurgia',
    'textil': 'textil', 'tecido': 'textil', 'confeccao': 'textil', 'roupa': 'moda', 'vestuario': 'moda', 'calcado': 'moda',
    'automovel': 'automotivo', 'carro': 'automotivo', 'veiculo': 'automotivo', 'auto peca': 'automotivo', 'autopeca': 'automotivo',
    'miner': 'mineracao', 'extracao': 'mineracao', 'mining': 'mineracao',
    'imobi': 'imobiliario', 'incorpora': 'imobiliario', 'real estate': 'imobiliario',
    'commodity': 'commodities', 'trading': 'commodities',
  }

  for (const [kw, sector] of Object.entries(keywords)) {
    if (norm.includes(kw)) return { ...SECTOR_RISK[sector], matched: sector }
  }

  return DEFAULT_SECTOR
}

// ─── EXTRAIR MÉTRICAS DOS DADOS DO INTAKE ────────────────────────

function extractMetrics(data) {
  const tipo = data.tipo || 'interno'
  const sectorInfo = identifySector(data.proponente?.setor)

  // Faturamento (usar o mais recente ou projeção)
  const historico = data.historicoFaturamento || []
  const faturamentos = historico
    .map(h => parseFloat(String(h.faturamento || '0').replace(/[^\d.,]/g, '').replace(',', '.')) || 0)
    .filter(f => f > 0)
  const perdas = historico
    .map(h => parseFloat(String(h.perdas || '0').replace(/[^\d.,]/g, '').replace(',', '.')) || 0)

  const latestRevenue = faturamentos.length > 0 ? faturamentos[faturamentos.length - 1] : 0
  const avgRevenue = faturamentos.length > 0 ? faturamentos.reduce((a, b) => a + b, 0) / faturamentos.length : 0

  // Para interno, faturamento está em "mil" — multiplicar por 1000
  const revenueMultiplier = tipo === 'interno' ? 1000 : 1
  const adjustedRevenue = latestRevenue * revenueMultiplier
  const adjustedAvgRevenue = avgRevenue * revenueMultiplier

  // Loss ratios por ano
  const lossRatios = historico.map((h, i) => {
    const fat = faturamentos[i] || 0
    const per = perdas[i] || 0
    if (fat <= 0) return null
    return per / fat
  }).filter(lr => lr !== null)

  const avgLossRatio = lossRatios.length > 0
    ? lossRatios.reduce((a, b) => a + b, 0) / lossRatios.length
    : 0

  // Condições de venda
  const cv = data.condicoesVenda || {}
  const pctPrazo = parseFloat(cv.pct_prazo || '100') / 100
  const prazoMedio = parseInt(cv.prazo_medio_dias || '60') || 60
  const prazoMaximo = parseInt(cv.prazo_maximo_dias || '90') || 90
  const fatDesejado = parseFloat(String(cv.faturamento_desejado_seguro || '0').replace(/[^\d.,]/g, '').replace(',', '.')) || 0
  const fatDesejadoAjustado = fatDesejado * revenueMultiplier

  // Faturamento segurável = faturamento a prazo desejado para seguro
  const faturamentoSeguravel = fatDesejadoAjustado > 0
    ? fatDesejadoAjustado
    : adjustedRevenue * pctPrazo

  // Concentração de compradores
  const compradores = data.amostraCompradores || []
  const limites = compradores.map(c =>
    parseFloat(String(c.limite_credito || c.faturamento_anual || '0').replace(/[^\d.,]/g, '').replace(',', '.')) || 0
  ).filter(l => l > 0).sort((a, b) => b - a)
  const totalLimites = limites.reduce((a, b) => a + b, 0)
  const topBuyerPct = totalLimites > 0 && limites.length > 0 ? limites[0] / totalLimites : 0.20
  const top5Pct = totalLimites > 0
    ? limites.slice(0, 5).reduce((a, b) => a + b, 0) / totalLimites
    : 0.50
  const numBuyers = compradores.length || 10

  // Atrasos - indicador de qualidade da carteira
  const atrasosData = data.atrasos || []
  const totalAtrasos = atrasosData.reduce((sum, a) =>
    sum + (parseFloat(String(a.valor_atraso || '0').replace(/[^\d.,]/g, '').replace(',', '.')) || 0), 0
  )
  const atrasosRatio = adjustedRevenue > 0 ? (totalAtrasos * revenueMultiplier) / adjustedRevenue : 0

  // Destinos (exportação)
  const destinos = data.destinosExportacao || null

  return {
    tipo,
    sectorInfo,
    adjustedRevenue,
    adjustedAvgRevenue,
    faturamentoSeguravel,
    lossRatios,
    avgLossRatio,
    pctPrazo,
    prazoMedio,
    prazoMaximo,
    topBuyerPct,
    top5Pct,
    numBuyers,
    totalLimites: totalLimites * revenueMultiplier,
    atrasosRatio,
    totalAtrasos: totalAtrasos * revenueMultiplier,
    destinos,
    numMaioresPerdas: (data.maioresPerdas || []).filter(p => p.valor && parseFloat(String(p.valor).replace(/[^\d.,]/g, '')) > 0).length,
  }
}

// ─── MOTOR PRINCIPAL DE SUBSCRIÇÃO ───────────────────────────────

function analyze(data) {
  const m = extractMetrics(data)

  // ═══ 1. SCORING (0-100) ═══
  const scores = {
    revenue: { value: scoreRevenue(m.adjustedRevenue, m.tipo), max: 15, label: 'Porte da Empresa', weight: '15%' },
    lossRatio: { value: scoreLossRatio(m.avgLossRatio), max: 25, label: 'Histórico de Perdas', weight: '25%' },
    concentration: { value: scoreConcentration(m.topBuyerPct), max: 20, label: 'Concentração de Compradores', weight: '20%' },
    paymentTerms: { value: scorePaymentTerms(m.prazoMedio), max: 15, label: 'Prazo Médio de Crédito', weight: '15%' },
    sector: { value: scoreSector(m.sectorInfo), max: 10, label: 'Risco do Setor', weight: '10%' },
    geography: { value: scoreGeography(m.tipo, m.destinos), max: 5, label: 'Diversificação Geográfica', weight: '5%' },
    // Ajuste por qualidade da carteira (atrasos)
    portfolio: { value: m.atrasosRatio < 0.03 ? 10 : m.atrasosRatio < 0.08 ? 7 : m.atrasosRatio < 0.15 ? 4 : 1, max: 10, label: 'Qualidade da Carteira', weight: '10%' },
  }

  const totalScore = Object.values(scores).reduce((sum, s) => sum + s.value, 0)

  // Classe de risco
  let riskClass, riskLabel, riskColor
  if (totalScore >= 80) { riskClass = 'preferred'; riskLabel = 'Risco Preferencial'; riskColor = '#34D399' }
  else if (totalScore >= 65) { riskClass = 'standard'; riskLabel = 'Risco Padrão'; riskColor = '#7DD3FC' }
  else if (totalScore >= 50) { riskClass = 'substandard'; riskLabel = 'Risco Subpadrão'; riskColor = '#FCD34D' }
  else if (totalScore >= 35) { riskClass = 'high_risk'; riskLabel = 'Risco Elevado'; riskColor = '#FB923C' }
  else { riskClass = 'decline'; riskLabel = 'Fora do Apetite'; riskColor = '#F87171' }

  // ═══ 2. BONUS / MALUS ═══
  const bonusMalus = calculateBonusMalus(m.lossRatios)

  // ═══ 3. CÁLCULO DA TAXA ═══
  const baseRate = m.sectorInfo.baseRate

  // Fatores de ajuste
  const factors = {
    setor: { value: m.sectorInfo.multiplier, label: `Setor: ${m.sectorInfo.label}` },
    sinistralidade: { value: factorLossHistory(m.avgLossRatio), label: `Sinistralidade: ${(m.avgLossRatio * 100).toFixed(1)}%` },
    concentracao: { value: factorConcentration(m.top5Pct), label: `Top 5 compradores: ${(m.top5Pct * 100).toFixed(0)}%` },
    prazo: { value: factorPaymentTerms(m.prazoMedio), label: `Prazo médio: ${m.prazoMedio} dias` },
    numCompradores: { value: factorNumBuyers(m.numBuyers), label: `${m.numBuyers} compradores na amostra` },
    geografia: { value: factorGeography(m.tipo, m.destinos), label: m.tipo === 'externo' ? 'Exportação' : 'Mercado doméstico' },
    bonusMalus: { value: bonusMalus.factor, label: bonusMalus.label },
  }

  const combinedFactor = Object.values(factors).reduce((prod, f) => prod * f.value, 1)
  const adjustedRate = baseRate * combinedFactor

  // Limitar taxa ao range razoável
  const finalRate = Math.max(0.0005, Math.min(adjustedRate, 0.015)) // 0.05% a 1.50%

  // ═══ 4. CÁLCULO DO PRÊMIO ═══
  const estimatedPremium = m.faturamentoSeguravel * finalRate

  // Prêmio mínimo absoluto
  const minPremiumFloor = m.tipo === 'interno' ? 15000 : 20000
  const minPremium = Math.max(estimatedPremium * 0.70, minPremiumFloor)
  const maxPremium = estimatedPremium * 1.30

  // ═══ 5. RECOMENDAÇÃO DE COBERTURA ═══
  let recommendedStructure, structureReason
  if (m.numBuyers >= 20 && m.topBuyerPct < 0.30) {
    recommendedStructure = 'whole_turnover'
    structureReason = 'Carteira diversificada com múltiplos compradores — apólice global oferece a melhor relação custo-benefício.'
  } else if (m.numBuyers <= 10 || m.topBuyerPct >= 0.30) {
    recommendedStructure = 'key_buyer'
    structureReason = 'Carteira concentrada em poucos compradores — apólice de compradores nomeados permite proteção cirúrgica nos maiores riscos.'
  } else {
    recommendedStructure = 'whole_turnover'
    structureReason = 'Perfil adequado para apólice global com cobertura abrangente.'
  }

  // Se empresa grande com baixa sinistralidade, sugerir XoL
  if (m.adjustedRevenue > 200_000_000 && m.avgLossRatio < 0.03) {
    recommendedStructure = 'excess_of_loss'
    structureReason = 'Empresa de grande porte com excelente histórico — Excess of Loss oferece proteção catastrófica com prêmio otimizado.'
  }

  // PMI recomendado
  let recommendedPMI
  if (riskClass === 'preferred') recommendedPMI = 0.85
  else if (riskClass === 'standard') recommendedPMI = 0.80
  else if (riskClass === 'substandard') recommendedPMI = 0.75
  else recommendedPMI = 0.70

  if (m.tipo === 'externo') recommendedPMI = Math.min(recommendedPMI + 0.05, 0.90)

  // Franquia recomendada
  let recommendedAAD, aadLabel
  if (m.adjustedRevenue < 20_000_000) {
    recommendedAAD = 0
    aadLabel = 'Sem franquia agregada'
  } else if (m.adjustedRevenue < 100_000_000) {
    recommendedAAD = estimatedPremium * 1.0
    aadLabel = `Franquia agregada anual: ${formatBRL(recommendedAAD, m.tipo)}`
  } else {
    recommendedAAD = estimatedPremium * 1.5
    aadLabel = `Franquia agregada anual: ${formatBRL(recommendedAAD, m.tipo)}`
  }

  // Limite discricionário
  let recommendedDL
  if (m.adjustedRevenue < 10_000_000) recommendedDL = 20000
  else if (m.adjustedRevenue < 50_000_000) recommendedDL = 50000
  else if (m.adjustedRevenue < 200_000_000) recommendedDL = 120000
  else recommendedDL = 300000

  // Prazo máximo de crédito recomendado
  const recommendedPMC = Math.min(m.prazoMaximo || 90, m.tipo === 'externo' ? 180 : 120)

  // Limite agregado
  const aggregateLimit = estimatedPremium * (riskClass === 'preferred' ? 18 : riskClass === 'standard' ? 14 : 10)

  // ═══ 6. MONTAR RESULTADO ═══
  const currency = m.tipo === 'externo' ? 'USD' : 'BRL'
  const symbol = m.tipo === 'externo' ? 'US$' : 'R$'

  return {
    // Identificação
    tipo: m.tipo,
    empresa: data.proponente?.razao_social || 'Empresa',
    cnpj: data.proponente?.cnpj || '',
    setor: m.sectorInfo.label,
    setorRisco: m.sectorInfo.risk,

    // Score
    score: totalScore,
    scoreMax: 100,
    riskClass,
    riskLabel,
    riskColor,
    scores,

    // Métricas extraídas
    metrics: {
      faturamentoAnual: m.adjustedRevenue,
      faturamentoSeguravel: m.faturamentoSeguravel,
      pctPrazo: m.pctPrazo,
      prazoMedio: m.prazoMedio,
      prazoMaximo: m.prazoMaximo,
      avgLossRatio: m.avgLossRatio,
      topBuyerPct: m.topBuyerPct,
      top5Pct: m.top5Pct,
      numBuyers: m.numBuyers,
      atrasosRatio: m.atrasosRatio,
      currency,
      symbol,
    },

    // Taxa
    pricing: {
      baseRate,
      adjustedRate: finalRate,
      baseRatePct: (baseRate * 100).toFixed(3) + '%',
      adjustedRatePct: (finalRate * 100).toFixed(3) + '%',
      factors,
    },

    // Prêmio
    premium: {
      estimated: Math.round(estimatedPremium),
      minimum: Math.round(minPremium),
      maximum: Math.round(maxPremium),
      monthly: Math.round(estimatedPremium / 12),
      estimatedFormatted: formatBRL(estimatedPremium, m.tipo),
      minimumFormatted: formatBRL(minPremium, m.tipo),
      maximumFormatted: formatBRL(maxPremium, m.tipo),
      monthlyFormatted: formatBRL(estimatedPremium / 12, m.tipo),
    },

    // Bonus/Malus
    bonusMalus,

    // Cobertura recomendada
    coverage: {
      structure: recommendedStructure,
      structureLabel: {
        'whole_turnover': 'Apólice Global (Whole Turnover)',
        'key_buyer': 'Compradores Nomeados (Key Buyer)',
        'excess_of_loss': 'Excesso de Danos (Excess of Loss)',
      }[recommendedStructure],
      structureReason,
      pmi: recommendedPMI,
      pmiPct: (recommendedPMI * 100).toFixed(0) + '%',
      pos: 1 - recommendedPMI,
      posPct: ((1 - recommendedPMI) * 100).toFixed(0) + '%',
      aad: recommendedAAD,
      aadLabel,
      discretionaryLimit: recommendedDL,
      discretionaryLimitFormatted: formatBRL(recommendedDL, m.tipo),
      maxCreditPeriod: recommendedPMC,
      aggregateLimit: Math.round(aggregateLimit),
      aggregateLimitFormatted: formatBRL(aggregateLimit, m.tipo),
      waitingPeriod: m.tipo === 'externo' ? 180 : 150,
    },

    // Seguradoras recomendadas (ordem baseada no perfil)
    insurers: rankInsurers(m, riskClass),

    // Timestamp
    analyzedAt: new Date().toISOString(),
  }
}

// ─── RANKING DE SEGURADORAS ──────────────────────────────────────

function rankInsurers(metrics, riskClass) {
  const insurers = [
    {
      name: 'Allianz Trade',
      logo: 'allianz-trade',
      strengths: ['Líder global em seguro de crédito', 'Maior base de dados de compradores', 'Plataforma EOLIS'],
      bestFor: ['Empresas de grande porte', 'Carteiras diversificadas', 'Exportação'],
      score: 0,
    },
    {
      name: 'Coface',
      logo: 'coface',
      strengths: ['Rating DRA proprietário', 'Forte em análise de risco-país', 'Plataforma CofaNet'],
      bestFor: ['Exportadores', 'Mid-market', 'Análise setorial'],
      score: 0,
    },
    {
      name: 'Atradius',
      logo: 'atradius',
      strengths: ['Cobrança integrada (Collections)', 'Flexibilidade de produto (Modula)', 'Forte em dados de pagamento'],
      bestFor: ['Empresas com gestão de crédito ativa', 'Whole turnover flexível'],
      score: 0,
    },
    {
      name: 'CESCE',
      logo: 'cesce',
      strengths: ['Expertise ibero-americana', 'Apoio governamental espanhol', 'Foco em PMEs'],
      bestFor: ['Comércio com Europa/Ibéria', 'Pequenas e médias empresas'],
      score: 0,
    },
    {
      name: 'AIG',
      logo: 'aig',
      strengths: ['Capacidade para grandes riscos', 'Risco político especializado', 'Soluções estruturadas'],
      bestFor: ['Operações de grande porte', 'Risco político', 'Single Risk'],
      score: 0,
    },
    {
      name: 'AVLA',
      logo: 'avla',
      strengths: ['Agilidade e velocidade', 'Foco em LATAM', 'Digital-first', 'Flexível para PMEs'],
      bestFor: ['Startups e scale-ups', 'Empresas médias', 'Primeira apólice'],
      score: 0,
    },
    {
      name: 'Chubb',
      logo: 'chubb',
      strengths: ['Rating AA', 'Soluções bespoke', 'Combinação crédito + político'],
      bestFor: ['Multinacionais', 'Operações estruturadas', 'Single buyer de grande porte'],
      score: 0,
    },
  ]

  // Scoring baseado no perfil
  const revenue = metrics.adjustedRevenue
  const isExport = metrics.tipo === 'externo'
  const isSmall = revenue < 20_000_000
  const isMid = revenue >= 20_000_000 && revenue < 200_000_000
  const isLarge = revenue >= 200_000_000

  insurers.forEach(ins => {
    // Base score por aderência ao perfil
    if (ins.name === 'Allianz Trade') {
      ins.score = isLarge ? 95 : isMid ? 85 : 70
      if (isExport) ins.score += 5
    }
    if (ins.name === 'Coface') {
      ins.score = isExport ? 90 : isMid ? 85 : isLarge ? 82 : 75
    }
    if (ins.name === 'Atradius') {
      ins.score = isMid ? 85 : isLarge ? 80 : 72
      if (metrics.numBuyers > 50) ins.score += 5
    }
    if (ins.name === 'CESCE') {
      ins.score = isSmall ? 82 : isMid ? 78 : 65
      if (isExport) ins.score += 5
    }
    if (ins.name === 'AIG') {
      ins.score = isLarge ? 85 : isMid ? 70 : 55
      if (isExport) ins.score += 8
    }
    if (ins.name === 'AVLA') {
      ins.score = isSmall ? 88 : isMid ? 80 : 60
    }
    if (ins.name === 'Chubb') {
      ins.score = isLarge ? 82 : isMid ? 68 : 50
    }
  })

  return insurers.sort((a, b) => b.score - a.score)
}

// ─── HELPERS ─────────────────────────────────────────────────────

function formatBRL(value, tipo) {
  const symbol = tipo === 'externo' ? 'US$' : 'R$'
  return `${symbol} ${Math.round(value).toLocaleString('pt-BR')}`
}

// ─── EXPORT ──────────────────────────────────────────────────────

module.exports = { analyze, extractMetrics, identifySector, calculateBonusMalus, SECTOR_RISK }
