const path = require('path');
const fs = require('fs');
const ExcelJS = require('exceljs');

const arquivosDir = process.env.VERCEL ? path.join('/tmp', 'arquivos') : path.join(__dirname, '..', 'arquivos');
if (!fs.existsSync(arquivosDir)) {
  fs.mkdirSync(arquivosDir, { recursive: true });
}

function sanitizeName(name) {
  return (name || 'empresa').replace(/[^a-zA-Z0-9]/g, '_').substring(0, 40);
}

// Estilos reutilizáveis
const NAVY = '0A1628';
const COBRE = 'B87333';
const CINZA_CLARO = 'F9FAFB';
const CINZA_LINHA = 'F3F4F6';
const BRANCO = 'FFFFFF';

function styleHeader(cell) {
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + NAVY } };
  cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
  cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  cell.border = {
    bottom: { style: 'thin', color: { argb: 'FF' + COBRE } }
  };
}

function styleSubheader(cell) {
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A5F' } };
  cell.font = { bold: true, color: { argb: 'FFD4944A' }, size: 10 };
  cell.alignment = { vertical: 'middle', horizontal: 'left' };
}

function styleSectionTitle(cell) {
  cell.font = { bold: true, color: { argb: 'FF' + NAVY }, size: 11 };
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEEF0F3' } };
  cell.border = { left: { style: 'medium', color: { argb: 'FF' + COBRE } } };
  cell.alignment = { vertical: 'middle', horizontal: 'left' };
}

function styleLabel(cell) {
  cell.font = { bold: true, color: { argb: 'FF6B7280' }, size: 10 };
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF9FAFB' } };
  cell.alignment = { vertical: 'middle', horizontal: 'left' };
}

function styleValue(cell) {
  cell.font = { color: { argb: 'FF111827' }, size: 10 };
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFFFF' } };
  cell.alignment = { vertical: 'middle', horizontal: 'left' };
}

function styleTableHeader(cell) {
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + NAVY } };
  cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 10 };
  cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  cell.border = { bottom: { style: 'thin', color: { argb: 'FF' + COBRE } } };
}

function styleTableRow(row, even) {
  row.eachCell({ includeEmpty: true }, cell => {
    cell.fill = {
      type: 'pattern', pattern: 'solid',
      fgColor: { argb: even ? 'FFF3F4F6' : 'FFFFFFFF' }
    };
    cell.font = { color: { argb: 'FF374151' }, size: 10 };
    cell.alignment = { vertical: 'middle', wrapText: true };
    cell.border = {
      bottom: { style: 'hair', color: { argb: 'FFE5E7EB' } }
    };
  });
}

function addBlankRow(sheet) {
  sheet.addRow([]);
}

function addSectionTitle(sheet, title, colSpan) {
  addBlankRow(sheet);
  const row = sheet.addRow([title]);
  styleSectionTitle(row.getCell(1));
  if (colSpan > 1) sheet.mergeCells(row.number, 1, row.number, colSpan);
  row.height = 22;
  return row;
}

async function gerarFichaTecnica(lead) {
  const data = new Date().toISOString().split('T')[0];
  const empresa = sanitizeName(lead.razao_social || 'empresa');
  const nomeArquivo = `Fairfield_FichaTecnica_${empresa}_${data}.xlsx`;
  const caminhoArquivo = path.join(arquivosDir, nomeArquivo);

  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Fairfield Corretora — SENTINEL';
  workbook.created = new Date();

  // ─── Aba 1: Dados Gerais ──────────────────────────────────────────────────
  {
    const sheet = workbook.addWorksheet('Dados Gerais', {
      properties: { tabColor: { argb: 'FF0A1628' } }
    });
    sheet.columns = [
      { width: 28 }, { width: 40 }, { width: 20 }, { width: 20 }
    ];

    // Título principal
    const titleRow = sheet.addRow(['SENTINEL — FICHA TÉCNICA DE COTAÇÃO']);
    titleRow.height = 36;
    sheet.mergeCells(1, 1, 1, 4);
    const titleCell = titleRow.getCell(1);
    titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + NAVY } };
    titleCell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 16 };
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };

    const subRow = sheet.addRow([`Gerado em: ${new Date().toLocaleString('pt-BR')}  ·  Fairfield Corretora de Seguros  ·  SUSEP 20.2036457.1`]);
    subRow.height = 18;
    sheet.mergeCells(2, 1, 2, 4);
    const subCell = subRow.getCell(1);
    subCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A5F' } };
    subCell.font = { color: { argb: 'FFD4944A' }, size: 10, italic: true };
    subCell.alignment = { vertical: 'middle', horizontal: 'center' };

    // PROPONENTE
    addSectionTitle(sheet, '  PROPONENTE', 4);

    const proponente = [
      ['Razão Social', lead.razao_social || ''],
      ['CNPJ', lead.cnpj || ''],
      ['Setor', lead.setor || ''],
      ['UF', lead.uf || ''],
      ['Tipo de Mercado', lead.tipo === 'externo' ? 'Externo (Exportação)' : lead.tipo === 'interno_externo' ? 'Interno + Externo' : 'Interno (Doméstico)'],
      ['Faturamento Desejado c/ Seguro', (lead.condicoesVenda && lead.condicoesVenda.faturamento_desejado_seguro) || lead.faturamento_pct || '']
    ];
    proponente.forEach(([label, value], i) => {
      const row = sheet.addRow([label, value]);
      styleLabel(row.getCell(1));
      styleValue(row.getCell(2));
      row.height = 18;
    });

    // CONTATO
    addSectionTitle(sheet, '  CONTATO', 4);
    const contato = lead.contato || {};
    [
      ['Nome', contato.nome || lead.contato_nome || ''],
      ['E-mail', contato.email || lead.contato_email || ''],
      ['Telefone', contato.telefone || lead.contato_telefone || '']
    ].forEach(([label, value]) => {
      const row = sheet.addRow([label, value]);
      styleLabel(row.getCell(1));
      styleValue(row.getCell(2));
      row.height = 18;
    });

    // CO-SEGURADAS
    const coSeg = (lead.coSeguradas || []).filter(c => c && c.empresa);
    if (coSeg.length > 0) {
      addSectionTitle(sheet, '  CO-SEGURADAS', 4);
      const hdr = sheet.addRow(['Empresa', 'CNPJ', 'Setor', '% Faturamento']);
      hdr.height = 20;
      hdr.eachCell(c => styleTableHeader(c));

      coSeg.forEach((c, i) => {
        const row = sheet.addRow([c.empresa, c.cnpj || '', c.setor || '', c.faturamento_pct || '']);
        styleTableRow(row, i % 2 === 0);
        row.height = 18;
      });
    }
  }

  // ─── Aba 2: Financeiro ────────────────────────────────────────────────────
  {
    const sheet = workbook.addWorksheet('Financeiro', {
      properties: { tabColor: { argb: 'FFB87333' } }
    });
    sheet.columns = [
      { width: 30 }, { width: 25 }, { width: 20 }, { width: 20 }, { width: 20 }
    ];

    const titleRow = sheet.addRow(['SENTINEL — FINANCEIRO E CONDIÇÕES DE VENDA']);
    titleRow.height = 30;
    sheet.mergeCells(1, 1, 1, 5);
    const tc = titleRow.getCell(1);
    tc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + NAVY } };
    tc.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 14 };
    tc.alignment = { vertical: 'middle', horizontal: 'center' };

    // Condições de Venda
    addSectionTitle(sheet, '  CONDIÇÕES DE VENDA', 5);
    const cv = lead.condicoesVenda || {};
    [
      ['% À Vista', cv.pct_vista || ''],
      ['% A Prazo', cv.pct_prazo || ''],
      ['Prazo Médio (dias)', cv.prazo_medio_dias || ''],
      ['Prazo Máximo (dias)', cv.prazo_maximo_dias || ''],
      ['Faturamento Desejado com Seguro', cv.faturamento_desejado_seguro || '']
    ].forEach(([label, value]) => {
      const row = sheet.addRow([label, value]);
      styleLabel(row.getCell(1));
      styleValue(row.getCell(2));
      row.height = 18;
    });

    // Histórico de Faturamento
    const hist = lead.historicoFaturamento || [];
    if (hist.length > 0) {
      addSectionTitle(sheet, '  HISTÓRICO DE FATURAMENTO', 5);
      const hdr = sheet.addRow(['Ano', 'Faturamento Bruto', 'Perdas Sofridas', '', '']);
      hdr.height = 20;
      [1, 2, 3].forEach(i => styleTableHeader(hdr.getCell(i)));

      hist.forEach((h, i) => {
        const row = sheet.addRow([h.ano, h.faturamento || '', h.perdas || '']);
        styleTableRow(row, i % 2 === 0);
        row.height = 18;
      });
    }

    // Carteira de Recebíveis
    const cart = lead.carteiraRecebiveis || [];
    if (cart.length > 0) {
      addSectionTitle(sheet, '  CARTEIRA DE RECEBÍVEIS', 5);
      const hdr = sheet.addRow(['Faixa', 'Faturamento Total', '% Faturamento', 'Nº Clientes', '% Clientes']);
      hdr.height = 20;
      hdr.eachCell(c => styleTableHeader(c));

      cart.forEach((c, i) => {
        const row = sheet.addRow([c.faixa, c.faturamento_total || '', c.pct_faturamento || '', c.num_clientes || '', c.pct_clientes || '']);
        styleTableRow(row, i % 2 === 0);
        row.height = 18;
      });
    }
  }

  // ─── Aba 3: Riscos ────────────────────────────────────────────────────────
  {
    const sheet = workbook.addWorksheet('Riscos', {
      properties: { tabColor: { argb: 'FFDC2626' } }
    });
    sheet.columns = [
      { width: 22 }, { width: 20 }, { width: 16 }, { width: 16 }, { width: 16 }, { width: 16 }
    ];

    const titleRow = sheet.addRow(['SENTINEL — ANÁLISE DE RISCOS']);
    titleRow.height = 30;
    sheet.mergeCells(1, 1, 1, 6);
    const tc = titleRow.getCell(1);
    tc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + NAVY } };
    tc.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 14 };
    tc.alignment = { vertical: 'middle', horizontal: 'center' };

    // Atrasos por faixa
    const atrasos = lead.atrasos || [];
    if (atrasos.length > 0) {
      addSectionTitle(sheet, '  ATRASOS POR FAIXA', 6);
      const hdr = sheet.addRow(['Faixa (dias)', 'Valor em Atraso', '% Valor', 'Qtd Clientes', '% Clientes', '']);
      hdr.height = 20;
      [1, 2, 3, 4, 5].forEach(i => styleTableHeader(hdr.getCell(i)));

      atrasos.forEach((a, i) => {
        const row = sheet.addRow([a.faixa_dias, a.valor_atraso || '', a.pct_valor || '', a.qtd_clientes || '', a.pct_clientes || '']);
        styleTableRow(row, i % 2 === 0);
        row.height = 18;
      });
    }

    // Atrasos detalhados
    const atDet = lead.atrasosDetalhados || [];
    if (atDet.length > 0) {
      addSectionTitle(sheet, '  ATRASOS DETALHADOS', 6);
      const hdr = sheet.addRow(['Razão Social', 'CNPJ', 'Data Emissão', 'Data Vencimento', 'Valor', '']);
      hdr.height = 20;
      [1, 2, 3, 4, 5].forEach(i => styleTableHeader(hdr.getCell(i)));

      atDet.forEach((a, i) => {
        if (a.razao_social) {
          const row = sheet.addRow([a.razao_social, a.cnpj || '', a.data_emissao || '', a.data_vencimento || '', a.valor || '']);
          styleTableRow(row, i % 2 === 0);
          row.height = 18;
        }
      });
    }

    // Maiores perdas
    const maioresPerdas = lead.maioresPerdas || [];
    if (maioresPerdas.length > 0) {
      addSectionTitle(sheet, '  MAIORES PERDAS', 6);
      const hdr = sheet.addRow(['Razão Social / Importador', 'CNPJ / Código', 'País', 'Exercício', 'Valor', 'Motivo']);
      hdr.height = 20;
      hdr.eachCell(c => styleTableHeader(c));

      maioresPerdas.forEach((p, i) => {
        if (p.razao_social || p.importador) {
          const row = sheet.addRow([
            p.razao_social || p.importador || '',
            p.cnpj || '',
            p.pais || '',
            p.exercicio || '',
            p.valor || '',
            p.motivo || ''
          ]);
          styleTableRow(row, i % 2 === 0);
          row.height = 18;
        }
      });
    }

    // Perdas por faixa
    const perdasFaixa = lead.perdasPorFaixa || [];
    if (perdasFaixa.length > 0) {
      addSectionTitle(sheet, '  PERDAS POR FAIXA', 6);
      const hdr = sheet.addRow(['Faixa', 'Ano', 'Valor Total', 'Nº Clientes', '', '']);
      hdr.height = 20;
      [1, 2, 3, 4].forEach(i => styleTableHeader(hdr.getCell(i)));

      perdasFaixa.forEach((p, i) => {
        const row = sheet.addRow([p.faixa || '', p.ano || '', p.valor_total || '', p.num_clientes || '']);
        styleTableRow(row, i % 2 === 0);
        row.height = 18;
      });
    }
  }

  // ─── Aba 4: Compradores ───────────────────────────────────────────────────
  {
    const sheet = workbook.addWorksheet('Compradores', {
      properties: { tabColor: { argb: 'FF1D4ED8' } }
    });
    sheet.columns = [
      { width: 14 }, { width: 30 }, { width: 20 }, { width: 22 }, { width: 24 }, { width: 30 }
    ];

    const titleRow = sheet.addRow(['SENTINEL — AMOSTRA DE COMPRADORES']);
    titleRow.height = 30;
    sheet.mergeCells(1, 1, 1, 6);
    const tc = titleRow.getCell(1);
    tc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + NAVY } };
    tc.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 14 };
    tc.alignment = { vertical: 'middle', horizontal: 'center' };

    addBlankRow(sheet);
    const hdr = sheet.addRow(['País', 'Razão Social', 'CNPJ / Código Fiscal', 'Faturamento Anual', 'Limite de Crédito Desejado', 'Endereço']);
    hdr.height = 22;
    hdr.eachCell(c => styleTableHeader(c));

    const compradores = lead.amostraCompradores || [];
    if (compradores.length === 0) {
      const row = sheet.addRow(['—', 'Nenhum comprador informado', '', '', '', '']);
      styleTableRow(row, true);
      row.height = 18;
    } else {
      compradores.forEach((c, i) => {
        const row = sheet.addRow([
          c.pais || 'BR',
          c.razao_social || '',
          c.cnpj_codigo_fiscal || '',
          c.faturamento_anual || '',
          c.limite_credito || '',
          c.endereco || ''
        ]);
        styleTableRow(row, i % 2 === 0);
        row.height = 18;
      });
    }
  }

  // ─── Aba 5: Destinos (apenas externo) ────────────────────────────────────
  if (lead.tipo === 'externo' || lead.tipo === 'interno_externo') {
    const sheet = workbook.addWorksheet('Destinos', {
      properties: { tabColor: { argb: 'FF7C3AED' } }
    });
    sheet.columns = [
      { width: 30 }, { width: 25 }, { width: 20 }, { width: 20 }
    ];

    const titleRow = sheet.addRow(['SENTINEL — DESTINOS DE EXPORTAÇÃO']);
    titleRow.height = 30;
    sheet.mergeCells(1, 1, 1, 4);
    const tc = titleRow.getCell(1);
    tc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + NAVY } };
    tc.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 14 };
    tc.alignment = { vertical: 'middle', horizontal: 'center' };

    const d = lead.destinosExportacao || {};

    // Distribuição geográfica
    addSectionTitle(sheet, '  DISTRIBUIÇÃO GEOGRÁFICA', 4);
    [
      ['Ásia', d.asia_pct || ''],
      ['Europa', d.europa_pct || ''],
      ['América do Sul', d.america_sul_pct || ''],
      ['América do Norte', d.america_norte_pct || ''],
      ['América Central', d.america_central_pct || ''],
      ['África / Oceania', d.africa_oceania_pct || '']
    ].forEach(([label, value]) => {
      const row = sheet.addRow([label, value ? value + '%' : '']);
      styleLabel(row.getCell(1));
      styleValue(row.getCell(2));
      row.height = 18;
    });

    // Dados gerais
    addSectionTitle(sheet, '  DADOS GERAIS', 4);
    [
      ['Menor Limite', d.menor_limite || ''],
      ['Maior Limite', d.maior_limite || ''],
      ['Nº de Importadores', d.num_importadores || ''],
      ['Anos Exportando', d.anos_exportando || '']
    ].forEach(([label, value]) => {
      const row = sheet.addRow([label, value]);
      styleLabel(row.getCell(1));
      styleValue(row.getCell(2));
      row.height = 18;
    });

    // Principais países
    if (d.principais_paises) {
      addSectionTitle(sheet, '  PRINCIPAIS PAÍSES', 4);
      const row = sheet.addRow([d.principais_paises]);
      styleValue(row.getCell(1));
      sheet.mergeCells(row.number, 1, row.number, 4);
      row.height = 24;
    }
  }

  // ─── Aba 6: Seguradoras ───────────────────────────────────────────────────
  {
    const sheet = workbook.addWorksheet('Seguradoras', {
      properties: { tabColor: { argb: 'FF15803D' } }
    });
    sheet.columns = [
      { width: 22 }, { width: 28 }, { width: 22 }, { width: 40 }
    ];

    const titleRow = sheet.addRow(['SENTINEL — SEGURADORAS CONSULTADAS']);
    titleRow.height = 30;
    sheet.mergeCells(1, 1, 1, 4);
    const tc = titleRow.getCell(1);
    tc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + NAVY } };
    tc.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 14 };
    tc.alignment = { vertical: 'middle', horizontal: 'center' };

    addBlankRow(sheet);
    const hdr = sheet.addRow(['Seguradora', 'Produto', 'Status', 'Observação']);
    hdr.height = 22;
    hdr.eachCell(c => styleTableHeader(c));

    const seguradoras = [
      ['AIG', 'Seguro de Crédito Doméstico / Exportação'],
      ['Atradius', 'Seguro de Crédito — Modula / Atrium'],
      ['Coface', 'TradeLiner / EasyLiner'],
      ['Allianz Trade', 'Seguro de Crédito (ex-Euler Hermes)'],
      ['AVLA', 'Seguro de Crédito para PME'],
      ['CESCE', 'Seguro de Crédito Doméstico / Exportação']
    ];

    seguradoras.forEach(([seg, produto], i) => {
      const row = sheet.addRow([seg, produto, 'A Consultar', '']);
      styleTableRow(row, i % 2 === 0);
      // Status em verde
      const statusCell = row.getCell(3);
      statusCell.font = { color: { argb: 'FF15803D' }, bold: true, size: 10 };
      row.height = 20;
    });

    addBlankRow(sheet);
    addBlankRow(sheet);
    const footerRow = sheet.addRow(['USO INTERNO — FAIRFIELD CORRETORA DE SEGUROS · SUSEP 20.2036457.1 · Documento gerado pelo sistema SENTINEL']);
    sheet.mergeCells(footerRow.number, 1, footerRow.number, 4);
    const fc = footerRow.getCell(1);
    fc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A5F' } };
    fc.font = { color: { argb: 'FFD4944A' }, size: 9, italic: true };
    fc.alignment = { vertical: 'middle', horizontal: 'center' };
    footerRow.height = 18;
  }

  // ─── Aba: Análise iCover (condicional) ──────────────────────────────────
  if (lead.icover_analysis) {
    let ic = lead.icover_analysis;
    if (typeof ic === 'string') ic = JSON.parse(ic);

    const sheet = workbook.addWorksheet('Análise iCover', {
      properties: { tabColor: { argb: 'FF16A34A' } }
    });
    sheet.columns = [
      { width: 28 }, { width: 22 }, { width: 22 }, { width: 22 }, { width: 22 }
    ];

    // Título
    const titleRow = sheet.addRow(['SENTINEL — ANÁLISE iCOVER DE SUBSCRIÇÃO']);
    titleRow.height = 36;
    sheet.mergeCells(1, 1, 1, 5);
    const titleCell = titleRow.getCell(1);
    titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + NAVY } };
    titleCell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 16 };
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };

    const subRow = sheet.addRow([`Empresa: ${ic.empresa || ''} · CNPJ: ${ic.cnpj || ''} · Setor: ${ic.setor || ''} (${ic.setorRisco || ''})`]);
    subRow.height = 18;
    sheet.mergeCells(2, 1, 2, 5);
    const subCell = subRow.getCell(1);
    subCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A5F' } };
    subCell.font = { color: { argb: 'FFD4944A' }, size: 10, italic: true };
    subCell.alignment = { vertical: 'middle', horizontal: 'center' };

    // ── Score Section ──
    addSectionTitle(sheet, '  SCORE DE RISCO', 5);
    [
      ['Score', `${ic.score || 0} / ${ic.scoreMax || 100}`],
      ['Classe de Risco', ic.riskClass || ''],
      ['Classificação', ic.riskLabel || '']
    ].forEach(([label, value]) => {
      const row = sheet.addRow([label, value]);
      styleLabel(row.getCell(1));
      styleValue(row.getCell(2));
      row.height = 18;
    });

    // ── Scores Breakdown ──
    const scores = ic.scores || {};
    const scoreKeys = Object.keys(scores);
    if (scoreKeys.length > 0) {
      addSectionTitle(sheet, '  BREAKDOWN DE SCORES', 5);
      const hdr = sheet.addRow(['Componente', 'Score', 'Máximo', 'Classificação', '']);
      hdr.height = 20;
      [1, 2, 3, 4].forEach(i => styleTableHeader(hdr.getCell(i)));

      scoreKeys.forEach((key, i) => {
        const s = scores[key];
        const row = sheet.addRow([key, s.value, s.max, s.label || '']);
        styleTableRow(row, i % 2 === 0);
        row.height = 18;
      });
    }

    // ── Pricing Section ──
    const pricing = ic.pricing || {};
    addSectionTitle(sheet, '  PRECIFICAÇÃO', 5);
    [
      ['Taxa Base', pricing.baseRatePct || pricing.baseRate || ''],
      ['Taxa Ajustada', pricing.adjustedRatePct || pricing.adjustedRate || '']
    ].forEach(([label, value]) => {
      const row = sheet.addRow([label, value]);
      styleLabel(row.getCell(1));
      styleValue(row.getCell(2));
      row.height = 18;
    });

    const factors = (pricing.factors) || {};
    const factorKeys = Object.keys(factors);
    if (factorKeys.length > 0) {
      addBlankRow(sheet);
      const fHdr = sheet.addRow(['Fator', 'Valor', 'Descrição', '', '']);
      fHdr.height = 20;
      [1, 2, 3].forEach(i => styleTableHeader(fHdr.getCell(i)));

      factorKeys.forEach((key, i) => {
        const f = factors[key];
        const row = sheet.addRow([key, f.value, f.label || '']);
        styleTableRow(row, i % 2 === 0);
        row.height = 18;
      });
    }

    // ── Premium Estimates ──
    const premium = ic.premium || {};
    addSectionTitle(sheet, '  ESTIMATIVA DE PRÊMIO', 5);
    [
      ['Prêmio Estimado', premium.estimatedFormatted || premium.estimated || ''],
      ['Prêmio Mínimo', premium.minimumFormatted || premium.minimum || ''],
      ['Prêmio Máximo', premium.maximumFormatted || premium.maximum || ''],
      ['Prêmio Mensal (est.)', premium.monthlyFormatted || premium.monthly || '']
    ].forEach(([label, value]) => {
      const row = sheet.addRow([label, value]);
      styleLabel(row.getCell(1));
      styleValue(row.getCell(2));
      row.height = 18;
    });

    // ── Bonus/Malus ──
    const bm = ic.bonusMalus || {};
    if (bm.factor != null) {
      addSectionTitle(sheet, '  BONUS / MALUS', 5);
      [
        ['Fator', bm.factor],
        ['Tipo', bm.type || ''],
        ['Classificação', bm.label || ''],
        ['Percentual', bm.pct || '']
      ].forEach(([label, value]) => {
        const row = sheet.addRow([label, value]);
        styleLabel(row.getCell(1));
        styleValue(row.getCell(2));
        row.height = 18;
      });
    }

    // ── Coverage Structure ──
    const cov = ic.coverage || {};
    addSectionTitle(sheet, '  ESTRUTURA DE COBERTURA', 5);
    [
      ['Tipo de Cobertura', cov.typeLabel || cov.type || ''],
      ['PMI (% Máx. Indeniz.)', cov.pmi || ''],
      ['POS (% Sinistro)', cov.pos || ''],
      ['AAD (Dedutível)', cov.aadLabel || cov.aad || ''],
      ['Limite Discricionário', cov.discretionaryLimit || ''],
      ['Prazo Máximo de Crédito', cov.maxCreditPeriod || ''],
      ['Limite Agregado', cov.aggregateLimit || ''],
      ['Período de Espera', cov.waitingPeriod || '']
    ].forEach(([label, value]) => {
      const row = sheet.addRow([label, value]);
      styleLabel(row.getCell(1));
      styleValue(row.getCell(2));
      row.height = 18;
    });

    // ── Insurer Ranking ──
    const insurers = ic.insurers || [];
    if (insurers.length > 0) {
      addSectionTitle(sheet, '  RANKING DE SEGURADORAS', 5);
      const iHdr = sheet.addRow(['Seguradora', 'Score', 'Pontos Fortes', '', '']);
      iHdr.height = 20;
      [1, 2, 3].forEach(i => styleTableHeader(iHdr.getCell(i)));

      insurers.forEach((ins, i) => {
        const strengths = Array.isArray(ins.strengths) ? ins.strengths.join('; ') : '';
        const row = sheet.addRow([ins.name || '', ins.score || '', strengths]);
        styleTableRow(row, i % 2 === 0);
        sheet.mergeCells(row.number, 3, row.number, 5);
        row.height = 18;
      });
    }

    // ── Insights ──
    const insights = ic.insights || [];
    if (insights.length > 0) {
      addSectionTitle(sheet, '  INSIGHTS DA ANÁLISE', 5);
      insights.forEach((insight, i) => {
        const row = sheet.addRow([`${i + 1}. ${insight}`]);
        styleValue(row.getCell(1));
        sheet.mergeCells(row.number, 1, row.number, 5);
        row.height = 20;
      });
    }

    // ── Disclaimer ──
    addBlankRow(sheet);
    addBlankRow(sheet);
    const discRow = sheet.addRow(['DISCLAIMER: Análise gerada automaticamente pelo motor iCover do SENTINEL. Os valores são estimativas baseadas em dados públicos e informações do proponente. Não constitui oferta de seguro. Sujeito a subscrição pela seguradora.']);
    sheet.mergeCells(discRow.number, 1, discRow.number, 5);
    const dc = discRow.getCell(1);
    dc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A5F' } };
    dc.font = { color: { argb: 'FFD4944A' }, size: 9, italic: true };
    dc.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    discRow.height = 28;

    // Analyzed at
    if (ic.analyzedAt) {
      const atRow = sheet.addRow([`Análise realizada em: ${new Date(ic.analyzedAt).toLocaleString('pt-BR')}`]);
      sheet.mergeCells(atRow.number, 1, atRow.number, 5);
      const atc = atRow.getCell(1);
      atc.font = { color: { argb: 'FF9CA3AF' }, size: 8, italic: true };
      atc.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }

  await workbook.xlsx.writeFile(caminhoArquivo);
  console.log(`[EXCEL] Ficha Técnica gerada: ${nomeArquivo}`);

  return {
    arquivo: caminhoArquivo,
    nomeArquivo,
    seguradora: 'SENTINEL'
  };
}

module.exports = { gerarFichaTecnica };
