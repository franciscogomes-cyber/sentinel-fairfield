const path = require('path');
const fs = require('fs');
const ExcelJS = require('exceljs');

const NAVY  = 'FF0A1628';
const COBRE = 'FFB87333';
const GREEN = 'FF16A34A';
const BRANCO = 'FFFFFFFF';
const CINZA  = 'FFF5F5F5';
const CINZA_CLARO = 'FFFAFAFA';

const arquivosDir = path.join(__dirname, '..', 'arquivos');
if (!fs.existsSync(arquivosDir)) {
  fs.mkdirSync(arquivosDir, { recursive: true });
}

function sanitizeName(name) {
  return (name || 'cliente').replace(/[^a-zA-Z0-9]/g, '_').substring(0, 40);
}

function col(ws, widths) {
  ws.columns = widths.map(w => ({ width: w }));
}

function mergeRow(ws, rowNum, fromCol, toCol) {
  ws.mergeCells(rowNum, fromCol, rowNum, toCol);
}

function addHeader(ws, titulo, C) {
  const r = ws.addRow([titulo]);
  r.font = { bold: true, size: 16, color: { argb: BRANCO } };
  r.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  r.alignment = { horizontal: 'center', vertical: 'middle' };
  r.height = 36;
  mergeRow(ws, r.number, 1, C);
  return r;
}

function addSubtitle(ws, texto, C) {
  const r = ws.addRow([texto]);
  r.font = { italic: true, size: 10, color: { argb: 'FF888888' } };
  r.alignment = { horizontal: 'center' };
  mergeRow(ws, r.number, 1, C);
  return r;
}

function addSecao(ws, titulo, cor, C) {
  const r = ws.addRow([titulo]);
  r.font = { bold: true, size: 11, color: { argb: BRANCO } };
  r.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: cor } };
  r.height = 22;
  mergeRow(ws, r.number, 1, C);
  return r;
}

function addCampo(ws, campo, valor, C) {
  const r = ws.addRow([campo, valor != null ? valor : '']);
  r.getCell(1).font = { bold: true, size: 10, color: { argb: NAVY } };
  r.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: CINZA } };
  r.getCell(2).font = { size: 10 };
  r.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: CINZA_CLARO } };
  if (C > 2) mergeRow(ws, r.number, 2, C);
  return r;
}

function addTabelaHeader(ws, headers, cor) {
  const r = ws.addRow(headers);
  r.font = { bold: true, size: 10, color: { argb: BRANCO } };
  r.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: cor || COBRE } };
  r.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  r.height = 22;
  return r;
}

function addTabelaLinha(ws, values, shade) {
  const r = ws.addRow(values);
  r.font = { size: 10 };
  r.alignment = { horizontal: 'center', vertical: 'middle' };
  if (shade) {
    r.eachCell(c => { c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: CINZA } }; });
  }
  return r;
}

function addBordas(ws) {
  ws.eachRow(row => {
    row.eachCell({ includeEmpty: false }, cell => {
      cell.border = {
        top:    { style: 'thin', color: { argb: 'FFDDDDDD' } },
        bottom: { style: 'thin', color: { argb: 'FFDDDDDD' } },
        left:   { style: 'thin', color: { argb: 'FFDDDDDD' } },
        right:  { style: 'thin', color: { argb: 'FFDDDDDD' } }
      };
    });
  });
}

function addRodape(ws, C) {
  ws.addRow([]);
  const r1 = ws.addRow(['FAIRFIELD PROTEÇÃO E INTELIGÊNCIA FINANCEIRA | SUSEP 20.2036457.1']);
  r1.font = { bold: true, size: 10, color: { argb: NAVY } };
  r1.alignment = { horizontal: 'center' };
  mergeRow(ws, r1.number, 1, C);
  const r2 = ws.addRow(['0800 591 4310 | www.fairfield.com.br | contato@fairfield.com.br']);
  r2.font = { size: 9, color: { argb: COBRE }, italic: true };
  r2.alignment = { horizontal: 'center' };
  mergeRow(ws, r2.number, 1, C);
}

// ─────────────────────────────────────────────
// Sheet 1: Resumo da Solicitação
// ─────────────────────────────────────────────
function gerarSheet1(workbook, lead) {
  const ws = workbook.addWorksheet('Resumo da Solicitação');
  const C = 6;
  col(ws, [28, 22, 16, 16, 16, 16]);

  const dataHoje = new Date().toLocaleDateString('pt-BR');
  const tipoMercado = lead.tipo === 'externo'
    ? 'Crédito Exportação (US$)'
    : 'Crédito Interno (R$)';
  const moeda = lead.tipo === 'externo' ? 'US$' : 'R$';
  const cv = lead.condicoesVenda || {};
  const amostraCompradores = lead.amostraCompradores || [];

  // ── Título
  addHeader(ws, 'SENTINEL — RESUMO DA SOLICITAÇÃO', C);
  addSubtitle(ws, `Preparado por Fairfield Corretora | ${dataHoje}`, C);
  ws.addRow([]);

  // ── Dados da Empresa
  addSecao(ws, 'DADOS DA EMPRESA', NAVY, C);
  addCampo(ws, 'Empresa', lead.razao_social, C);
  addCampo(ws, 'CNPJ', lead.cnpj, C);
  addCampo(ws, 'Setor', lead.setor, C);
  addCampo(ws, 'Tipo de Mercado', tipoMercado, C);
  addCampo(ws, 'UF', lead.uf, C);
  const contatoStr = [
    lead.contato?.nome,
    lead.contato?.email,
    lead.contato?.telefone
  ].filter(Boolean).join(' | ');
  addCampo(ws, 'Contato', contatoStr, C);

  ws.addRow([]);

  // ── Dados da Solicitação
  addSecao(ws, 'DADOS DA SOLICITAÇÃO', COBRE, C);
  const fatDesejado = cv.faturamento_desejado_seguro
    ? `${moeda} ${cv.faturamento_desejado_seguro}`
    : '';
  addCampo(ws, 'Faturamento Desejado para o Seguro', fatDesejado, C);
  addCampo(ws, 'Vendas À Vista', cv.pct_vista ? `${cv.pct_vista}%` : '', C);
  addCampo(ws, 'Vendas À Prazo', cv.pct_prazo ? `${cv.pct_prazo}%` : '', C);
  addCampo(ws, 'Prazo Médio', cv.prazo_medio_dias ? `${cv.prazo_medio_dias} dias` : '', C);
  addCampo(ws, 'Prazo Máximo', cv.prazo_maximo_dias ? `${cv.prazo_maximo_dias} dias` : '', C);

  ws.addRow([]);

  // ── Histórico de Faturamento
  addSecao(ws, 'HISTÓRICO DE FATURAMENTO', NAVY, C);
  if (lead.historicoFaturamento && lead.historicoFaturamento.length > 0) {
    addTabelaHeader(ws, ['Ano', 'Faturamento', 'Perdas', '', '', ''], NAVY);
    lead.historicoFaturamento.forEach((h, i) => {
      addTabelaLinha(ws, [h.ano, h.faturamento, h.perdas, '', '', ''], i % 2 === 1);
    });
  } else {
    const r = ws.addRow(['Nenhum histórico informado']);
    r.font = { size: 10, italic: true, color: { argb: 'FF888888' } };
    mergeRow(ws, r.number, 1, C);
  }

  ws.addRow([]);

  // ── Seguradoras Consultadas
  addSecao(ws, 'SEGURADORAS CONSULTADAS', GREEN, C);
  addTabelaHeader(ws, ['Seguradora', 'Status', '', '', '', ''], GREEN);
  const seguradoras = ['AIG', 'Atradius', 'Coface', 'Euler Hermes', 'AVLA', 'CESCE'];
  seguradoras.forEach((seg, i) => {
    const r = addTabelaLinha(ws, [seg, 'Em Análise ✓', '', '', '', ''], i % 2 === 1);
    r.getCell(2).font = { size: 10, color: { argb: GREEN }, bold: true };
    r.getCell(2).alignment = { horizontal: 'center' };
  });

  ws.addRow([]);

  // ── Compradores Informados
  const totalCompradores = amostraCompradores.length;
  addSecao(ws, 'COMPRADORES INFORMADOS', NAVY, C);
  const countRow = ws.addRow([`Total de compradores informados: ${totalCompradores}`]);
  countRow.font = { size: 10, bold: true, color: { argb: NAVY } };
  mergeRow(ws, countRow.number, 1, C);

  if (totalCompradores > 0) {
    ws.addRow([]);
    addTabelaHeader(ws, ['País', 'Razão Social', 'CNPJ / Cód. Fiscal', 'Limite de Crédito', '', ''], COBRE);
    amostraCompradores.forEach((c, i) => {
      addTabelaLinha(ws, [
        c.pais,
        c.razao_social,
        c.cnpj_codigo_fiscal,
        c.limite_credito ? `${moeda} ${c.limite_credito}` : '',
        '',
        ''
      ], i % 2 === 1);
    });
  }

  addRodape(ws, C);
  addBordas(ws);
}

// ─────────────────────────────────────────────
// Sheet 2: Próximos Passos
// ─────────────────────────────────────────────
function gerarSheet2(workbook) {
  const ws = workbook.addWorksheet('Próximos Passos');
  const C = 4;
  col(ws, [8, 30, 55, 20]);

  // ── Título
  const headerRow = ws.addRow(['O QUE ACONTECE AGORA?']);
  headerRow.font = { bold: true, size: 16, color: { argb: BRANCO } };
  headerRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  headerRow.alignment = { horizontal: 'center', vertical: 'middle' };
  headerRow.height = 36;
  mergeRow(ws, headerRow.number, 1, C);

  const subRow = ws.addRow(['Seu pedido de cotação foi recebido. Veja o que acontece a seguir:']);
  subRow.font = { italic: true, size: 10, color: { argb: 'FF888888' } };
  subRow.alignment = { horizontal: 'center' };
  mergeRow(ws, subRow.number, 1, C);

  ws.addRow([]);

  // ── Tabela de etapas
  const hdr = ws.addRow(['Etapa', 'Nome', 'Descrição', 'Prazo']);
  hdr.font = { bold: true, size: 11, color: { argb: BRANCO } };
  hdr.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  hdr.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  hdr.height = 28;

  const steps = [
    ['1', 'Análise Simultânea',    '7 seguradoras analisando seu perfil de risco ao mesmo tempo, garantindo a cobertura mais ampla do mercado.',                                        'Imediato'],
    ['2', 'Negociação Técnica',    'A equipe Fairfield negocia as melhores condições técnicas e comerciais com cada seguradora, utilizando nosso relacionamento de mercado.',           '1–3 dias úteis'],
    ['3', 'Comparativo Exclusivo', 'Você recebe um relatório completo com todas as propostas lado a lado, com análise e recomendação personalizada da Fairfield.',                      'Até 5 dias úteis'],
  ];

  steps.forEach(([etapa, nome, desc, prazo], i) => {
    const r = ws.addRow([etapa, nome, desc, prazo]);
    r.font = { size: 10 };
    r.alignment = { vertical: 'middle', wrapText: true };
    r.height = 50;
    r.getCell(1).alignment = { horizontal: 'center', vertical: 'middle' };
    r.getCell(1).font = { bold: true, size: 14, color: { argb: BRANCO } };
    r.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
    r.getCell(2).font = { bold: true, size: 11, color: { argb: NAVY } };
    r.getCell(4).alignment = { horizontal: 'center', vertical: 'middle' };
    r.getCell(4).font = { bold: true, size: 10, color: { argb: GREEN } };
    if (i % 2 === 1) {
      r.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: CINZA } };
      r.getCell(3).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: CINZA } };
      r.getCell(4).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: CINZA } };
    }
  });

  ws.addRow([]);

  // ── Caixa de prazo
  const prazoRow = ws.addRow(['Prazo de Resposta: até 5 dias úteis']);
  prazoRow.font = { bold: true, size: 13, color: { argb: BRANCO } };
  prazoRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COBRE } };
  prazoRow.alignment = { horizontal: 'center', vertical: 'middle' };
  prazoRow.height = 30;
  mergeRow(ws, prazoRow.number, 1, C);

  ws.addRow([]);

  // ── Aviso gratuidade
  const gratisRow = ws.addRow(['Estudo GRATUITO — sem qualquer custo ou compromisso']);
  gratisRow.font = { bold: true, size: 12, color: { argb: GREEN } };
  gratisRow.alignment = { horizontal: 'center' };
  mergeRow(ws, gratisRow.number, 1, C);

  const detRow = ws.addRow(['Não há qualquer taxa, contrato ou obrigação de contratação para receber o comparativo de cotações.']);
  detRow.font = { size: 10, italic: true, color: { argb: 'FF555555' } };
  detRow.alignment = { horizontal: 'center' };
  mergeRow(ws, detRow.number, 1, C);

  ws.addRow([]);

  // ── Contato
  addSecao(ws, 'FALE COM A FAIRFIELD', NAVY, C);

  const contacts = [
    ['Telefone / WhatsApp', '0800 591 4310'],
    ['E-mail',              'contato@fairfield.com.br'],
    ['Site',                'www.fairfield.com.br'],
  ];
  contacts.forEach(([label, value]) => {
    const r = ws.addRow([label, value, '', '']);
    r.getCell(1).font = { bold: true, size: 10, color: { argb: NAVY } };
    r.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: CINZA } };
    r.getCell(2).font = { size: 10 };
    mergeRow(ws, r.number, 2, C);
  });

  ws.addRow([]);

  // ── Rodapé
  const r1 = ws.addRow(['FAIRFIELD PROTEÇÃO E INTELIGÊNCIA FINANCEIRA | SUSEP 20.2036457.1']);
  r1.font = { bold: true, size: 10, color: { argb: NAVY } };
  r1.alignment = { horizontal: 'center' };
  mergeRow(ws, r1.number, 1, C);

  addBordas(ws);
}

// ─────────────────────────────────────────────
// Função principal exportada
// ─────────────────────────────────────────────
async function gerarExcelCliente(lead) {
  const data = new Date().toISOString().split('T')[0];
  const nome = sanitizeName(lead.razao_social || lead.contato?.nome || 'cliente');
  const nomeArquivo = `Fairfield_Resumo_${nome}_${data}.xlsx`;
  const arquivo = path.join(arquivosDir, nomeArquivo);

  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Fairfield Corretora';
  workbook.created = new Date();
  workbook.properties.date1904 = false;

  gerarSheet1(workbook, lead);
  gerarSheet2(workbook);

  await workbook.xlsx.writeFile(arquivo);
  console.log(`[EXCEL CLIENTE] Gerado: ${nomeArquivo}`);

  return { arquivo, nomeArquivo };
}

module.exports = { gerarExcelCliente };
