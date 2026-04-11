'use strict';

const path = require('path');
const fs = require('fs');
const PDFDocument = require('pdfkit');

// ─── Paleta ────────────────────────────────────────────────────────────────
const NAVY  = '#0A1628';
const COBRE = '#B87333';
const WHITE = '#FFFFFF';
const LIGHT_BLUE = '#7EC8E3';
const GRAY_LIGHT = '#F4F6F9';
const GRAY_MID   = '#D1D5DB';
const TEXT_DARK  = '#1A2A3A';
const TEXT_MID   = '#4A5568';

// ─── Diretório de saída ─────────────────────────────────────────────────────
const arquivosDir = path.join(__dirname, '..', 'arquivos');
if (!fs.existsSync(arquivosDir)) {
  fs.mkdirSync(arquivosDir, { recursive: true });
}

// ─── Helpers ────────────────────────────────────────────────────────────────
function sanitizeName(name) {
  return (name || 'empresa').replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);
}

function safe(v, fallback = '—') {
  if (v === null || v === undefined || v === '') return fallback;
  return String(v);
}

function fmtBRL(v) {
  const n = Number(v);
  if (isNaN(n)) return '—';
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n);
}

function fmtUSD(v) {
  const n = Number(v);
  if (isNaN(n)) return '—';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
}

function fmtPct(v) {
  if (v === null || v === undefined || v === '') return '—';
  return `${v}%`;
}

function fmtMoeda(v, isExterno) {
  return isExterno ? fmtUSD(v) : fmtBRL(v);
}

function formatDate(d) {
  const dt = d ? new Date(d) : new Date();
  return dt.toLocaleDateString('pt-BR');
}

// ─── Layout constants ────────────────────────────────────────────────────────
const PAGE_W = 595.28; // A4 width pt
const PAGE_H = 841.89; // A4 height pt
const MARGIN = 40;
const CONTENT_W = PAGE_W - MARGIN * 2;

// ─── Low-level drawing helpers ───────────────────────────────────────────────

function drawRect(doc, x, y, w, h, fillColor, strokeColor) {
  doc.save();
  if (strokeColor) {
    doc.rect(x, y, w, h).fillAndStroke(fillColor, strokeColor);
  } else {
    doc.rect(x, y, w, h).fill(fillColor);
  }
  doc.restore();
}

/**
 * Draw a full-width section header bar.
 * Returns the Y position after the header.
 */
function sectionHeader(doc, y, title) {
  const H = 22;
  drawRect(doc, MARGIN, y, CONTENT_W, H, NAVY);
  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(9)
    .text(title.toUpperCase(), MARGIN + 8, y + 6, { width: CONTENT_W - 16, lineBreak: false });
  return y + H + 6;
}

/**
 * Draws a table.
 * columns: [{ label, key, width, align, format }]
 * rows: array of objects
 * Returns Y after the table.
 */
function drawTable(doc, startY, columns, rows, isExterno) {
  const ROW_H = 18;
  const HEADER_H = 20;
  const totalW = columns.reduce((s, c) => s + c.width, 0);
  let y = startY;

  // Check if we need a new page for at least the header + 1 row
  if (y + HEADER_H + ROW_H > PAGE_H - 60) {
    doc.addPage();
    y = MARGIN;
  }

  // Header
  drawRect(doc, MARGIN, y, totalW, HEADER_H, COBRE);
  let cx = MARGIN;
  columns.forEach(col => {
    doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.5)
      .text(col.label, cx + 4, y + 5, { width: col.width - 8, align: col.align || 'left', lineBreak: false });
    cx += col.width;
  });
  y += HEADER_H;

  if (!rows || rows.length === 0) {
    drawRect(doc, MARGIN, y, totalW, ROW_H, GRAY_LIGHT);
    doc.fillColor(TEXT_MID).font('Helvetica').fontSize(8)
      .text('Nenhum dado informado.', MARGIN + 4, y + 4, { width: totalW - 8, lineBreak: false });
    return y + ROW_H + 4;
  }

  rows.forEach((row, i) => {
    // Page break
    if (y + ROW_H > PAGE_H - 60) {
      doc.addPage();
      y = MARGIN;
      // Redraw header on new page
      drawRect(doc, MARGIN, y, totalW, HEADER_H, COBRE);
      let cx2 = MARGIN;
      columns.forEach(col => {
        doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.5)
          .text(col.label, cx2 + 4, y + 5, { width: col.width - 8, align: col.align || 'left', lineBreak: false });
        cx2 += col.width;
      });
      y += HEADER_H;
    }

    const bg = i % 2 === 0 ? WHITE : GRAY_LIGHT;
    drawRect(doc, MARGIN, y, totalW, ROW_H, bg);

    cx = MARGIN;
    columns.forEach(col => {
      let val;
      if (typeof col.key === 'function') {
        val = col.key(row, isExterno);
      } else {
        val = row[col.key];
      }
      if (col.format) val = col.format(val, row, isExterno);
      val = safe(val);

      doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(7.5)
        .text(val, cx + 4, y + 4, { width: col.width - 8, align: col.align || 'left', lineBreak: false });
      cx += col.width;
    });
    y += ROW_H;
  });

  return y + 6;
}

/**
 * Draw a two-column key-value list.
 * items: [{ label, value }]
 * Returns Y after the block.
 */
function drawKV(doc, startY, items) {
  const ROW_H = 18;
  const halfW = CONTENT_W / 2;
  let y = startY;

  items.forEach((item, i) => {
    if (y + ROW_H > PAGE_H - 60) {
      doc.addPage();
      y = MARGIN;
    }
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = MARGIN + col * halfW;
    const rowY = y + row * ROW_H;

    const bg = Math.floor(i / 2) % 2 === 0 ? WHITE : GRAY_LIGHT;
    if (col === 0) {
      drawRect(doc, MARGIN, rowY, CONTENT_W, ROW_H, bg);
    }
    doc.fillColor(TEXT_MID).font('Helvetica-Bold').fontSize(8)
      .text(item.label + ':', x + 4, rowY + 4, { width: halfW / 2 - 8, lineBreak: false });
    doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(8)
      .text(safe(item.value), x + halfW / 2, rowY + 4, { width: halfW / 2 - 8, lineBreak: false });
  });

  const rows = Math.ceil(items.length / 2);
  return y + rows * ROW_H + 6;
}

// ─── Header ──────────────────────────────────────────────────────────────────
function drawPageHeader(doc, lead) {
  const H = 64;
  drawRect(doc, 0, 0, PAGE_W, H, NAVY);

  // SENTINEL
  doc.fillColor(LIGHT_BLUE).font('Helvetica-Bold').fontSize(28)
    .text('SENTINEL', MARGIN, 12, { lineBreak: false });

  // FAIRFIELD
  doc.fillColor(WHITE).font('Helvetica').fontSize(10)
    .text('FAIRFIELD PROTEÇÃO E INTELIGÊNCIA FINANCEIRA', MARGIN, 43, { lineBreak: false });

  // Right side: report label
  doc.fillColor(COBRE).font('Helvetica-Bold').fontSize(9)
    .text('RELATÓRIO TÉCNICO', PAGE_W - MARGIN - 140, 16, { width: 140, align: 'right', lineBreak: false });
  doc.fillColor(WHITE).font('Helvetica').fontSize(7.5)
    .text('Seguro de Crédito — Uso Interno', PAGE_W - MARGIN - 140, 30, { width: 140, align: 'right', lineBreak: false });
  doc.fillColor(GRAY_MID).font('Helvetica').fontSize(7)
    .text(`Data: ${formatDate()} | Lead ID: ${safe(lead.id)}`, PAGE_W - MARGIN - 140, 44, { width: 140, align: 'right', lineBreak: false });

  return H;
}

// ─── Subtitle bar ────────────────────────────────────────────────────────────
function drawSubtitle(doc, lead) {
  const y = 64;
  const tipo = lead.tipo === 'externo' ? 'Seguro de Crédito à Exportação' : 'Seguro de Crédito Interno';

  // Cobre rule
  drawRect(doc, 0, y, PAGE_W, 3, COBRE);

  doc.fillColor(TEXT_MID).font('Helvetica').fontSize(8)
    .text(`${tipo}  ·  ${safe(lead.razao_social)}  ·  CNPJ: ${safe(lead.cnpj)}  ·  UF: ${safe(lead.uf)}`,
      MARGIN, y + 7, { width: CONTENT_W, lineBreak: false });

  return y + 3 + 18;
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function addFooter(doc) {
  const y = PAGE_H - 28;
  drawRect(doc, 0, y, PAGE_W, 28, NAVY);
  doc.fillColor(WHITE).font('Helvetica').fontSize(7)
    .text('FAIRFIELD PROTEÇÃO E INTELIGÊNCIA FINANCEIRA  |  SUSEP 20.2036457.1  |  Documento confidencial — uso interno do corretor',
      MARGIN, y + 9, { width: CONTENT_W, align: 'center', lineBreak: false });
}

// ─── Section renderers ────────────────────────────────────────────────────────

function renderProponente(doc, lead, y) {
  y = sectionHeader(doc, y, '1. Proponente');
  const items = [
    { label: 'Razão Social', value: lead.razao_social },
    { label: 'CNPJ', value: lead.cnpj },
    { label: 'Setor', value: lead.setor },
    { label: 'UF', value: lead.uf },
    { label: 'Faturamento Médio', value: fmtPct(lead.faturamento_pct) },
    { label: 'Tipo', value: lead.tipo === 'externo' ? 'Exportação' : 'Mercado Interno' },
    { label: 'Contato', value: safe(lead.contato?.nome) },
    { label: 'E-mail', value: safe(lead.contato?.email) },
    { label: 'Telefone', value: safe(lead.contato?.telefone) },
    { label: 'Lead ID', value: lead.id },
  ];
  return drawKV(doc, y, items);
}

function renderCoSeguradas(doc, lead, y) {
  const arr = lead.coSeguradas || [];
  y = sectionHeader(doc, y, '2. Co-seguradas');
  return drawTable(doc, y, [
    { label: 'Empresa', key: 'empresa', width: 180 },
    { label: 'CNPJ', key: 'cnpj', width: 130 },
    { label: 'Setor', key: 'setor', width: 130 },
    { label: 'Fat. (%)', key: 'faturamento_pct', width: 75, align: 'right', format: v => fmtPct(v) },
  ], arr, lead.tipo === 'externo');
}

function renderHistorico(doc, lead, y) {
  const arr = lead.historicoFaturamento || [];
  const isExt = lead.tipo === 'externo';
  y = sectionHeader(doc, y, '3. Histórico de Faturamento');
  return drawTable(doc, y, [
    { label: 'Ano', key: 'ano', width: 80 },
    { label: isExt ? 'Faturamento (US$)' : 'Faturamento (R$)', key: 'faturamento', width: 195, align: 'right', format: v => fmtMoeda(v, isExt) },
    { label: isExt ? 'Perdas (US$)' : 'Perdas (R$)', key: 'perdas', width: 195, align: 'right', format: v => fmtMoeda(v, isExt) },
                                       { label: 'Pct Perda', key: (row) => {
      const fat = Number(row.faturamento);
      const perd = Number(row.perdas);
      if (!fat || isNaN(fat) || isNaN(perd)) return '—';
      return fmtPct(((perd / fat) * 100).toFixed(2));
    }, width: 45, align: 'right' },
  ], arr, isExt);
}

function renderCondicoes(doc, lead, y) {
  const c = lead.condicoesVenda || {};
  const isExt = lead.tipo === 'externo';
  y = sectionHeader(doc, y, '4. Condições de Venda');
  const items = [
    { label: '% Vendas à Vista', value: fmtPct(c.pct_vista) },
    { label: '% Vendas a Prazo', value: fmtPct(c.pct_prazo) },
    { label: 'Prazo Médio (dias)', value: safe(c.prazo_medio_dias) },
    { label: 'Prazo Máximo (dias)', value: safe(c.prazo_maximo_dias) },
    { label: 'Faturamento Desejado p/ Seguro', value: fmtMoeda(c.faturamento_desejado_seguro, isExt) },
    { label: '', value: '' },
  ];
  return drawKV(doc, y, items);
}

function renderCarteira(doc, lead, y) {
  const arr = lead.carteiraRecebiveis || [];
  const isExt = lead.tipo === 'externo';
  y = sectionHeader(doc, y, '5. Carteira de Recebíveis por Faixa');
  return drawTable(doc, y, [
    { label: 'Faixa (dias)', key: 'faixa', width: 90 },
    { label: isExt ? 'Fat. Total (US$)' : 'Fat. Total (R$)', key: 'faturamento_total', width: 140, align: 'right', format: v => fmtMoeda(v, isExt) },
    { label: '% Fat.', key: 'pct_faturamento', width: 60, align: 'right', format: v => fmtPct(v) },
    { label: 'Nº Clientes', key: 'num_clientes', width: 80, align: 'right' },
    { label: '% Clientes', key: 'pct_clientes', width: 70, align: 'right', format: v => fmtPct(v) },
                                       { label: '', key: () => '', width: 75 },
  ], arr, isExt);
}

function renderPerdasPorFaixa(doc, lead, y) {
  const arr = lead.perdasPorFaixa || [];
  const isExt = lead.tipo === 'externo';
  y = sectionHeader(doc, y, '6. Perdas por Faixa de Prazo');
  return drawTable(doc, y, [
    { label: 'Faixa (dias)', key: 'faixa', width: 100 },
    { label: 'Ano', key: 'ano', width: 70 },
    { label: isExt ? 'Valor Total (US$)' : 'Valor Total (R$)', key: 'valor_total', width: 185, align: 'right', format: v => fmtMoeda(v, isExt) },
    { label: 'Nº Clientes', key: 'num_clientes', width: 80, align: 'right' },
                                       { label: '', key: () => '', width: 80 },
  ], arr, isExt);
}

function renderMaioresPerdas(doc, lead, y) {
  const arr = lead.maioresPerdas || [];
  const isExt = lead.tipo === 'externo';
  y = sectionHeader(doc, y, '7. Maiores Perdas Históricas');
  return drawTable(doc, y, [
    { label: 'Razão Social', key: 'razao_social', width: 140 },
    { label: 'CNPJ / Cod. Fiscal', key: 'cnpj', width: 100 },
    { label: 'Exercício', key: 'exercicio', width: 65 },
    { label: isExt ? 'Valor (US$)' : 'Valor (R$)', key: 'valor', width: 110, align: 'right', format: v => fmtMoeda(v, isExt) },
    { label: 'Motivo', key: 'motivo', width: 90 },
    { label: 'País', key: 'pais', width: 50 },
  ], arr, isExt);
}

function renderAtrasos(doc, lead, y) {
  const arr = lead.atrasos || [];
  const isExt = lead.tipo === 'externo';
  y = sectionHeader(doc, y, '8. Posição de Atrasos');
  return drawTable(doc, y, [
    { label: 'Faixa (dias)', key: 'faixa_dias', width: 90 },
    { label: isExt ? 'Valor Atraso (US$)' : 'Valor Atraso (R$)', key: 'valor_atraso', width: 145, align: 'right', format: v => fmtMoeda(v, isExt) },
    { label: '% Valor', key: 'pct_valor', width: 60, align: 'right', format: v => fmtPct(v) },
    { label: 'Qtd. Clientes', key: 'qtd_clientes', width: 80, align: 'right' },
    { label: '% Clientes', key: 'pct_clientes', width: 70, align: 'right', format: v => fmtPct(v) },
                                       { label: '', key: () => '', width: 70 },
  ], arr, isExt);
}

function renderAtrasosDetalhados(doc, lead, y) {
  const arr = lead.atrasosDetalhados || [];
  const isExt = lead.tipo === 'externo';
  y = sectionHeader(doc, y, '9. Atrasos Detalhados');
  return drawTable(doc, y, [
    { label: 'Razão Social', key: 'razao_social', width: 160 },
    { label: 'CNPJ / Cod. Fiscal', key: 'cnpj', width: 110 },
    { label: 'Emissão', key: 'data_emissao', width: 80 },
    { label: 'Vencimento', key: 'data_vencimento', width: 80 },
    { label: isExt ? 'Valor (US$)' : 'Valor (R$)', key: 'valor', width: 115, align: 'right', format: v => fmtMoeda(v, isExt) },
                                       { label: '', key: () => '', width: 70 },
  ], arr, isExt);
}

function renderCompradores(doc, lead, y) {
  const arr = lead.amostraCompradores || [];
  const isExt = lead.tipo === 'externo';
  const titulo = isExt ? '10. Amostra de Importadores' : '10. Amostra de Compradores';
  y = sectionHeader(doc, y, titulo);
  return drawTable(doc, y, [
    { label: 'Razão Social', key: 'razao_social', width: 150 },
    { label: 'CNPJ / Cód. Fiscal', key: 'cnpj_codigo_fiscal', width: 110 },
    { label: isExt ? 'Fat. Anual (US$)' : 'Fat. Anual (R$)', key: 'faturamento_anual', width: 110, align: 'right', format: v => fmtMoeda(v, isExt) },
    { label: isExt ? 'Lim. Crédito (US$)' : 'Lim. Crédito (R$)', key: 'limite_credito', width: 110, align: 'right', format: v => fmtMoeda(v, isExt) },
    { label: 'País', key: 'pais', width: 55 },
                                       { label: '', key: () => '', width: 80 },
  ], arr, isExt);
}

function renderDestinosExportacao(doc, lead, y) {
  const d = lead.destinosExportacao || {};
  y = sectionHeader(doc, y, '11. Destinos de Exportação');

  const items = [
    { label: 'Ásia (%)', value: fmtPct(d.asia_pct) },
    { label: 'Europa (%)', value: fmtPct(d.europa_pct) },
    { label: 'América do Sul (%)', value: fmtPct(d.america_sul_pct) },
    { label: 'América do Norte (%)', value: fmtPct(d.america_norte_pct) },
    { label: 'América Central (%)', value: fmtPct(d.america_central_pct) },
    { label: 'África / Oceania (%)', value: fmtPct(d.africa_oceania_pct) },
    { label: 'Menor Limite (US$)', value: fmtUSD(d.menor_limite) },
    { label: 'Maior Limite (US$)', value: fmtUSD(d.maior_limite) },
    { label: 'Nº Importadores', value: safe(d.num_importadores) },
    { label: 'Anos Exportando', value: safe(d.anos_exportando) },
    { label: 'Principais Países', value: safe(d.principais_paises) },
    { label: '', value: '' },
  ];
  return drawKV(doc, y, items);
}

// ─── Main export ──────────────────────────────────────────────────────────────

function gerarPDFBroker(lead) {
  return new Promise((resolve, reject) => {
    try {
      const data = new Date().toISOString().split('T')[0];
      const nomeArquivo = `Fairfield_RelTecnico_${sanitizeName(lead.razao_social)}_${data}.pdf`;
      const arquivo = path.join(arquivosDir, nomeArquivo);

      const doc = new PDFDocument({
        size: 'A4',
        margin: 0,
        info: {
          Title: `Relatório Técnico SENTINEL — ${lead.razao_social}`,
          Author: 'Fairfield Proteção e Inteligência Financeira',
          Subject: 'Seguro de Crédito',
          Creator: 'SENTINEL System',
        },
        autoFirstPage: true,
        bufferPages: true,
      });

      const writeStream = fs.createWriteStream(arquivo);
      doc.pipe(writeStream);

      // Page 1 header
      drawPageHeader(doc, lead);
      let y = drawSubtitle(doc, lead) + 10;

      // All sections
      y = renderProponente(doc, lead, y);
      y = renderCoSeguradas(doc, lead, y);
      y = renderHistorico(doc, lead, y);
      y = renderCondicoes(doc, lead, y);
      y = renderCarteira(doc, lead, y);
      y = renderPerdasPorFaixa(doc, lead, y);
      y = renderMaioresPerdas(doc, lead, y);
      y = renderAtrasos(doc, lead, y);
      y = renderAtrasosDetalhados(doc, lead, y);
      y = renderCompradores(doc, lead, y);
      if (lead.tipo === 'externo') {
        y = renderDestinosExportacao(doc, lead, y);
      }

      // Footer on every page
      const pageCount = doc.bufferedPageRange().count;
      for (let i = 0; i < pageCount; i++) {
        doc.switchToPage(i);
        addFooter(doc);
        // Page number
        doc.fillColor(WHITE).font('Helvetica').fontSize(7)
          .text(`${i + 1} / ${pageCount}`, PAGE_W - MARGIN - 30, PAGE_H - 17, { width: 30, align: 'right', lineBreak: false });
      }

      doc.end();

      writeStream.on('finish', () => {
        console.log(`[PDF-BROKER] Gerado: ${nomeArquivo}`);
        resolve({ arquivo, nomeArquivo });
      });
      writeStream.on('error', reject);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = { gerarPDFBroker };
