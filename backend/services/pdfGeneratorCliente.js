'use strict';

const path = require('path');
const fs = require('fs');
const PDFDocument = require('pdfkit');

// ─── Paleta ────────────────────────────────────────────────────────────────
const NAVY       = '#0A1628';
const COBRE      = '#B87333';
const WHITE      = '#FFFFFF';
const LIGHT_BLUE = '#7EC8E3';
const GREEN      = '#16A34A';
const GREEN_BG   = '#F0FDF4';
const GRAY_LIGHT = '#F4F6F9';
const GRAY_MID   = '#D1D5DB';
const NAVY_DARK  = '#060E1A';
const TEXT_DARK  = '#1A2A3A';
const TEXT_MID   = '#4A5568';

// ─── Diretório de saída ─────────────────────────────────────────────────────
const arquivosDir = process.env.VERCEL ? path.join('/tmp', 'arquivos') : path.join(__dirname, '..', 'arquivos');
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

function fmtMoeda(v, isExterno) {
  return isExterno ? fmtUSD(v) : fmtBRL(v);
}

function formatDate(d) {
  const dt = d ? new Date(d) : new Date();
  return dt.toLocaleDateString('pt-BR');
}

function formatDateLong() {
  return new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

// ─── Layout constants ────────────────────────────────────────────────────────
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 48;
const CONTENT_W = PAGE_W - MARGIN * 2;

// ─── Low-level drawing ───────────────────────────────────────────────────────
function drawRect(doc, x, y, w, h, fillColor) {
  doc.save();
  doc.rect(x, y, w, h).fill(fillColor);
  doc.restore();
}

function drawRoundRect(doc, x, y, w, h, r, fillColor) {
  doc.save();
  doc.roundedRect(x, y, w, h, r).fill(fillColor);
  doc.restore();
}

// ─── Header (full-width, 100px tall) ─────────────────────────────────────────
function drawHeader(doc) {
  const H = 100;
  drawRect(doc, 0, 0, PAGE_W, H, NAVY);

  // Decorative cobre accent bar on left
  drawRect(doc, 0, 0, 6, H, COBRE);

  // SENTINEL
  doc.fillColor(LIGHT_BLUE).font('Helvetica-Bold').fontSize(36)
    .text('SENTINEL', MARGIN + 10, 18, { lineBreak: false });

  // tagline
  doc.fillColor(WHITE).font('Helvetica').fontSize(9)
    .text('FAIRFIELD PROTEÇÃO E INTELIGÊNCIA FINANCEIRA', MARGIN + 10, 62, { lineBreak: false });

  // Right: decorative text
  doc.fillColor(COBRE).font('Helvetica-Bold').fontSize(10)
    .text('SEGURO DE CRÉDITO', PAGE_W - MARGIN - 160, 28, { width: 160, align: 'right', lineBreak: false });
  doc.fillColor(GRAY_MID).font('Helvetica').fontSize(8)
    .text('Inteligência & Proteção Financeira', PAGE_W - MARGIN - 160, 46, { width: 160, align: 'right', lineBreak: false });
  doc.fillColor(WHITE).font('Helvetica').fontSize(7.5)
    .text(formatDateLong(), PAGE_W - MARGIN - 160, 62, { width: 160, align: 'right', lineBreak: false });

  return H;
}

// ─── Success banner ───────────────────────────────────────────────────────────
function drawSuccessBanner(doc, y) {
  const bannerH = 80;
  drawRect(doc, MARGIN, y, CONTENT_W, bannerH, GREEN_BG);

  // Cobre left accent
  drawRect(doc, MARGIN, y, 4, bannerH, GREEN);

  // Circle with checkmark
  const cx = MARGIN + 4 + 30;
  const cy = y + bannerH / 2;
  doc.save();
  doc.circle(cx, cy, 24).fill(GREEN);
  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(22)
    .text('✓', cx - 8, cy - 12, { width: 16, align: 'center', lineBreak: false });
  doc.restore();

  // Text
  doc.fillColor(GREEN).font('Helvetica-Bold').fontSize(16)
    .text('Solicitação Recebida com Sucesso!', MARGIN + 4 + 68, y + 14, { lineBreak: false });
  doc.fillColor(TEXT_MID).font('Helvetica').fontSize(9)
    .text('Suas informações foram enviadas para análise simultânea por 7 seguradoras parceiras.', MARGIN + 4 + 68, y + 38, {
      width: CONTENT_W - 68 - 8,
      lineBreak: false
    });

  return y + bannerH + 16;
}

// ─── Parabéns heading ─────────────────────────────────────────────────────────
function drawParabens(doc, lead, y) {
  const nomeContato = safe(lead.contato?.nome, safe(lead.razao_social));

  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(22)
    .text(`Parabéns, ${nomeContato}!`, MARGIN, y, { lineBreak: false });
  y += 32;

  doc.fillColor(TEXT_MID).font('Helvetica').fontSize(10)
    .text(
      'A Fairfield está trabalhando para garantir as melhores condições de seguro de crédito para sua empresa. ' +
      'A seguir, você encontra um resumo da sua solicitação e os próximos passos do processo.',
      MARGIN, y, { width: CONTENT_W, lineGap: 3 }
    );
  y += 52;
  return y;
}

// ─── Summary box (dark navy) ──────────────────────────────────────────────────
function drawSummaryBox(doc, lead, y) {
  const isExt = lead.tipo === 'externo';
  const tipoLabel = isExt ? 'Seguro de Crédito à Exportação' : 'Seguro de Crédito Interno';
  const boxH = 100;

  drawRoundRect(doc, MARGIN, y, CONTENT_W, boxH, 8, NAVY_DARK);

  // Title
  doc.fillColor(COBRE).font('Helvetica-Bold').fontSize(9)
    .text('RESUMO DA SOLICITAÇÃO', MARGIN + 16, y + 12, { lineBreak: false });

  const col1X = MARGIN + 16;
  const col2X = MARGIN + CONTENT_W / 2 + 10;
  const lineH = 20;
  const startY = y + 30;

  const leftItems = [
    { label: 'Empresa', value: safe(lead.razao_social) },
    { label: 'Tipo', value: tipoLabel },
  ];
  const rightItems = [
    { label: 'Data', value: formatDate() },
    { label: 'Seguradoras consultadas', value: '7 seguradoras' },
  ];

  leftItems.forEach((item, i) => {
    doc.fillColor(GRAY_MID).font('Helvetica').fontSize(7.5)
      .text(item.label.toUpperCase(), col1X, startY + i * lineH, { lineBreak: false });
    doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(9)
      .text(item.value, col1X, startY + i * lineH + 9, { width: CONTENT_W / 2 - 30, lineBreak: false });
  });

  rightItems.forEach((item, i) => {
    doc.fillColor(GRAY_MID).font('Helvetica').fontSize(7.5)
      .text(item.label.toUpperCase(), col2X, startY + i * lineH, { lineBreak: false });
    doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(9)
      .text(item.value, col2X, startY + i * lineH + 9, { width: CONTENT_W / 2 - 20, lineBreak: false });
  });

  return y + boxH + 24;
}

// ─── Steps section ────────────────────────────────────────────────────────────
function drawSteps(doc, y) {
  // Section title
  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(14)
    .text('O que acontece agora?', MARGIN, y, { lineBreak: false });
  y += 26;

  const steps = [
    {
      num: '1',
      titulo: 'Análise Simultânea',
      desc: '7 seguradoras recebem seus dados e iniciam a análise do perfil de risco da sua empresa de forma paralela.',
    },
    {
      num: '2',
      titulo: 'Negociação Técnica',
      desc: 'Nossa equipe especializada negocia coberturas, franquias e prêmios para obter as melhores condições do mercado.',
    },
    {
      num: '3',
      titulo: 'Comparativo Exclusivo',
      desc: 'Você recebe um relatório completo comparando todas as propostas, com nossa recomendação técnica, em até 5 dias úteis.',
    },
  ];

  const stepW = (CONTENT_W - 16) / 3;

  steps.forEach((step, i) => {
    const x = MARGIN + i * (stepW + 8);
    const stepH = 110;

    // Card background
    drawRoundRect(doc, x, y, stepW, stepH, 6, GRAY_LIGHT);
    // Top cobre strip
    drawRoundRect(doc, x, y, stepW, 6, 6, COBRE);
    drawRect(doc, x, y + 3, stepW, 3, COBRE);

    // Number circle
    doc.save();
    doc.circle(x + 22, y + 28, 14).fill(COBRE);
    doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(13)
      .text(step.num, x + 17, y + 21, { width: 12, align: 'center', lineBreak: false });
    doc.restore();

    // Title
    doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9.5)
      .text(step.titulo, x + 42, y + 20, { width: stepW - 50, lineBreak: false });

    // Description
    doc.fillColor(TEXT_MID).font('Helvetica').fontSize(8)
      .text(step.desc, x + 10, y + 46, { width: stepW - 20, lineGap: 2 });
  });

  return y + 110 + 24;
}

// ─── Metrics table ────────────────────────────────────────────────────────────
function drawMetricsTable(doc, lead, y) {
  const isExt = lead.tipo === 'externo';
  const tipoLabel = isExt ? 'Exportação' : 'Mercado Interno';
  const numCompradores = Array.isArray(lead.amostraCompradores) ? lead.amostraCompradores.length : 0;
  const fatDesejado = fmtMoeda((lead.condicoesVenda || {}).faturamento_desejado_seguro, isExt);

  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(14)
    .text('Resumo dos seus dados', MARGIN, y, { lineBreak: false });
  y += 22;

  // Cobre underline
  drawRect(doc, MARGIN, y, 180, 2, COBRE);
  y += 10;

  const rows = [
    { label: 'Empresa', value: safe(lead.razao_social) },
    { label: 'Tipo de Mercado', value: tipoLabel },
    { label: 'Faturamento Desejado', value: fatDesejado },
    { label: 'Compradores informados', value: String(numCompradores) },
    { label: 'Seguradoras consultadas', value: '7 seguradoras' },
  ];

  const ROW_H = 26;
  const labelW = 200;
  const valueW = CONTENT_W - labelW;

  // Header row
  drawRoundRect(doc, MARGIN, y, CONTENT_W, ROW_H, 4, NAVY);
  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(8.5)
    .text('ITEM', MARGIN + 12, y + 8, { lineBreak: false });
  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(8.5)
    .text('INFORMAÇÃO', MARGIN + labelW + 12, y + 8, { lineBreak: false });
  y += ROW_H;

  rows.forEach((row, i) => {
    const bg = i % 2 === 0 ? WHITE : GRAY_LIGHT;
    drawRect(doc, MARGIN, y, CONTENT_W, ROW_H, bg);

    // Divider line
    doc.save();
    doc.moveTo(MARGIN + labelW, y).lineTo(MARGIN + labelW, y + ROW_H).strokeColor(GRAY_MID).lineWidth(0.5).stroke();
    doc.restore();

    doc.fillColor(TEXT_MID).font('Helvetica-Bold').fontSize(8.5)
      .text(row.label, MARGIN + 12, y + 8, { width: labelW - 20, lineBreak: false });
    doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(8.5)
      .text(row.value, MARGIN + labelW + 12, y + 8, { width: valueW - 20, lineBreak: false });
    y += ROW_H;
  });

  // Bottom border
  drawRect(doc, MARGIN, y, CONTENT_W, 2, COBRE);

  return y + 2 + 24;
}

// ─── Motivational quote ───────────────────────────────────────────────────────
function drawQuote(doc, y) {
  const boxH = 60;
  drawRoundRect(doc, MARGIN, y, CONTENT_W, boxH, 8, COBRE);

  doc.fillColor(WHITE).font('Helvetica-BoldOblique').fontSize(15)
    .text('"Proteger suas vendas é proteger seu crescimento."', MARGIN + 16, y + 14, {
      width: CONTENT_W - 32,
      align: 'center',
      lineBreak: false,
    });
  doc.fillColor(WHITE).font('Helvetica').fontSize(8)
    .text('— Fairfield Proteção e Inteligência Financeira', MARGIN + 16, y + 38, {
      width: CONTENT_W - 32,
      align: 'center',
      lineBreak: false,
    });

  return y + boxH + 20;
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function drawFooter(doc) {
  const y = PAGE_H - 50;
  drawRect(doc, 0, y, PAGE_W, 50, NAVY);
  // Cobre top line
  drawRect(doc, 0, y, PAGE_W, 3, COBRE);

  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(8)
    .text('FAIRFIELD PROTEÇÃO E INTELIGÊNCIA FINANCEIRA', MARGIN, y + 10, { width: CONTENT_W, align: 'center', lineBreak: false });
  doc.fillColor(LIGHT_BLUE).font('Helvetica').fontSize(7.5)
    .text('contato@fairfieldcorretora.com.br  |  www.fairfieldcorretora.com.br  |  SUSEP 20.2036457.1',
      MARGIN, y + 24, { width: CONTENT_W, align: 'center', lineBreak: false });
  doc.fillColor(GRAY_MID).font('Helvetica').fontSize(6.5)
    .text('Este documento é um comprovante de solicitação e não constitui proposta ou contrato de seguro.',
      MARGIN, y + 37, { width: CONTENT_W, align: 'center', lineBreak: false });
}

// ─── iCover Analysis Section ─────────────────────────────────────────────────
function drawICoverSection(doc, lead, y) {
  let icover = lead.icover_analysis;
  if (!icover) return y;
  if (typeof icover === 'string') {
    try { icover = JSON.parse(icover); } catch { return y; }
  }

  // ── Section header ──
  drawRoundRect(doc, MARGIN, y, CONTENT_W, 36, 6, NAVY);
  drawRect(doc, MARGIN, y, 6, 36, COBRE);
  doc.fillColor(COBRE).font('Helvetica-Bold').fontSize(12)
    .text('ESTUDO iCOVER \u2014 AN\u00c1LISE PRELIMINAR', MARGIN + 18, y + 10, { lineBreak: false });
  y += 48;

  // ── Score + Risk class card ──
  const scoreBoxH = 70;
  drawRoundRect(doc, MARGIN, y, CONTENT_W, scoreBoxH, 8, GRAY_LIGHT);

  // Score circle
  const scoreStr = safe(icover.score, '\u2014');
  const cx = MARGIN + 48;
  const cy = y + scoreBoxH / 2;
  doc.save();
  doc.circle(cx, cy, 28).fill(NAVY);
  doc.fillColor(COBRE).font('Helvetica-Bold').fontSize(20)
    .text(scoreStr, cx - 22, cy - 14, { width: 44, align: 'center', lineBreak: false });
  doc.fillColor(GRAY_MID).font('Helvetica').fontSize(7)
    .text('/100', cx - 12, cy + 8, { width: 24, align: 'center', lineBreak: false });
  doc.restore();

  // Risk class label
  const riskLabel = safe(icover.riskLabel, safe(icover.riskClass));
  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(14)
    .text('Classifica\u00e7\u00e3o de Risco: ' + riskLabel, MARGIN + 90, y + 14, { width: CONTENT_W - 100, lineBreak: false });

  const empresaInfo = [
    icover.empresa ? 'Empresa: ' + icover.empresa : null,
    icover.cnpj ? 'CNPJ: ' + icover.cnpj : null,
    icover.setor ? 'Setor: ' + icover.setor : null,
  ].filter(Boolean).join('   |   ');
  if (empresaInfo) {
    doc.fillColor(TEXT_MID).font('Helvetica').fontSize(8)
      .text(empresaInfo, MARGIN + 90, y + 34, { width: CONTENT_W - 100, lineBreak: false });
  }

  // Bonus/Malus badge
  if (icover.bonusMalus && icover.bonusMalus.label) {
    doc.fillColor(TEXT_MID).font('Helvetica').fontSize(7.5)
      .text('B\u00f4nus/Malus: ' + icover.bonusMalus.label, MARGIN + 90, y + 50, { lineBreak: false });
  }

  y += scoreBoxH + 16;

  // ── Coverage Structure ──
  if (icover.coverage) {
    const cov = icover.coverage;
    doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(11)
      .text('Estrutura de Cobertura Recomendada', MARGIN, y, { lineBreak: false });
    y += 18;
    drawRect(doc, MARGIN, y, 120, 2, COBRE);
    y += 8;

    const covRows = [
      { label: 'Tipo de Cobertura', value: safe(cov.typeLabel, safe(cov.type)) },
      { label: 'PMI (Percentual M\u00e1ximo Indeniz\u00e1vel)', value: cov.pmi ? cov.pmi + '%' : '\u2014' },
      { label: 'POS (Participa\u00e7\u00e3o Obrigat\u00f3ria do Segurado)', value: cov.pos ? cov.pos + '%' : '\u2014' },
      { label: 'Prazo M\u00e1ximo de Cr\u00e9dito', value: safe(cov.maxCreditPeriod) },
      { label: 'Per\u00edodo de Espera', value: safe(cov.waitingPeriod) },
    ];

    const covRowH = 22;
    covRows.forEach((row, i) => {
      const bg = i % 2 === 0 ? GRAY_LIGHT : WHITE;
      drawRect(doc, MARGIN, y, CONTENT_W, covRowH, bg);
      doc.fillColor(TEXT_MID).font('Helvetica-Bold').fontSize(8)
        .text(row.label, MARGIN + 12, y + 6, { lineBreak: false });
      doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(8.5)
        .text(row.value, MARGIN + 280, y + 6, { width: CONTENT_W - 290, align: 'right', lineBreak: false });
      y += covRowH;
    });
    y += 14;
  }

  // ── Premium Estimate Range ──
  if (icover.premium) {
    const prem = icover.premium;
    const minStr = safe(prem.minimumFormatted, fmtBRL(prem.minimum));
    const maxStr = safe(prem.maximumFormatted, fmtBRL(prem.maximum));

    const premBoxH = 54;
    drawRoundRect(doc, MARGIN, y, CONTENT_W, premBoxH, 8, NAVY_DARK);
    doc.fillColor(COBRE).font('Helvetica-Bold').fontSize(9)
      .text('ESTIMATIVA DE PR\u00caMIO ANUAL', MARGIN + 16, y + 10, { lineBreak: false });
    doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(16)
      .text(minStr + '  a  ' + maxStr, MARGIN + 16, y + 26, { width: CONTENT_W - 32, lineBreak: false });

    if (prem.monthlyFormatted || prem.monthly) {
      const monthStr = safe(prem.monthlyFormatted, fmtBRL(prem.monthly));
      doc.fillColor(GRAY_MID).font('Helvetica').fontSize(8)
        .text('(Estimativa mensal: ' + monthStr + ')', MARGIN + CONTENT_W - 200, y + 10, { width: 184, align: 'right', lineBreak: false });
    }

    y += premBoxH + 14;
  }

  // ── Top 3 Recommended Insurers ──
  if (Array.isArray(icover.insurers) && icover.insurers.length > 0) {
    doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(11)
      .text('Seguradoras Recomendadas', MARGIN, y, { lineBreak: false });
    y += 18;
    drawRect(doc, MARGIN, y, 120, 2, COBRE);
    y += 8;

    const topInsurers = icover.insurers.slice(0, 3);
    const cardW = (CONTENT_W - 16) / 3;
    const cardH = 80;

    topInsurers.forEach((ins, i) => {
      const x = MARGIN + i * (cardW + 8);
      drawRoundRect(doc, x, y, cardW, cardH, 6, GRAY_LIGHT);
      drawRoundRect(doc, x, y, cardW, 5, 6, COBRE);
      drawRect(doc, x, y + 3, cardW, 2, COBRE);

      // Name
      doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9)
        .text(safe(ins.name), x + 10, y + 14, { width: cardW - 20, lineBreak: false });

      // Score badge
      if (ins.score != null) {
        doc.fillColor(COBRE).font('Helvetica-Bold').fontSize(8)
          .text('Score: ' + ins.score, x + 10, y + 28, { lineBreak: false });
      }

      // Strengths
      if (Array.isArray(ins.strengths)) {
        const strengthsText = ins.strengths.slice(0, 3).map(function(s) { return '\u2022 ' + s; }).join('\n');
        doc.fillColor(TEXT_MID).font('Helvetica').fontSize(7)
          .text(strengthsText, x + 10, y + 42, { width: cardW - 20, lineGap: 2 });
      }
    });
    y += cardH + 14;
  }

  // ── Insights ──
  if (Array.isArray(icover.insights) && icover.insights.length > 0) {
    doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(11)
      .text('Destaques da An\u00e1lise', MARGIN, y, { lineBreak: false });
    y += 18;
    drawRect(doc, MARGIN, y, 120, 2, COBRE);
    y += 8;

    const insightsList = icover.insights.slice(0, 5);
    insightsList.forEach(function(insight) {
      const insightH = doc.heightOfString(insight, { width: CONTENT_W - 30 });
      const rowH = Math.max(insightH + 10, 20);

      // Check page break
      if (y + rowH + 60 > PAGE_H) {
        drawFooter(doc);
        doc.addPage();
        y = MARGIN;
      }

      drawRect(doc, MARGIN, y, 4, rowH, COBRE);
      drawRect(doc, MARGIN + 4, y, CONTENT_W - 4, rowH, GRAY_LIGHT);
      doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(8)
        .text(insight, MARGIN + 14, y + 5, { width: CONTENT_W - 30, lineGap: 2 });
      y += rowH + 4;
    });
    y += 10;
  }

  // ── Disclaimer ──
  const disclaimerH = 40;
  if (y + disclaimerH + 60 > PAGE_H) {
    drawFooter(doc);
    doc.addPage();
    y = MARGIN;
  }
  drawRoundRect(doc, MARGIN, y, CONTENT_W, disclaimerH, 6, GRAY_LIGHT);
  doc.fillColor(TEXT_MID).font('Helvetica').fontSize(6.5)
    .text(
      'Nota: Os valores e recomenda\u00e7\u00f5es acima s\u00e3o estimativas preliminares geradas pelo sistema iCover com base nos dados informados. ' +
      'N\u00e3o constituem proposta de seguro. As condi\u00e7\u00f5es definitivas ser\u00e3o apresentadas ap\u00f3s an\u00e1lise completa pelas seguradoras parceiras. ' +
      'Pr\u00eamios, coberturas e limites podem variar conforme a avalia\u00e7\u00e3o de risco individual de cada seguradora.',
      MARGIN + 12, y + 8, { width: CONTENT_W - 24, lineGap: 2 }
    );
  y += disclaimerH + 16;

  return y;
}

// ─── Main export ──────────────────────────────────────────────────────────────
function gerarPDFCliente(lead) {
  return new Promise((resolve, reject) => {
    try {
      const data = new Date().toISOString().split('T')[0];
      const nomeArquivo = `Fairfield_Resumo_Cliente_${sanitizeName(lead.razao_social)}_${data}.pdf`;
      const arquivo = path.join(arquivosDir, nomeArquivo);

      const doc = new PDFDocument({
        size: 'A4',
        margin: 0,
        info: {
          Title: `Confirmação de Solicitação — ${lead.razao_social}`,
          Author: 'Fairfield Proteção e Inteligência Financeira',
          Subject: 'Seguro de Crédito — Confirmação',
          Creator: 'SENTINEL System',
        },
        autoFirstPage: true,
      });

      const writeStream = fs.createWriteStream(arquivo);
      doc.pipe(writeStream);

      let y = drawHeader(doc);
      y += 20;

      y = drawSuccessBanner(doc, y);
      y = drawParabens(doc, lead, y);
      y = drawSummaryBox(doc, lead, y);
      y = drawSteps(doc, y);
      y = drawMetricsTable(doc, lead, y);

      // iCover analysis section (only if data exists)
      if (lead.icover_analysis) {
        // Check if we need a new page before iCover section
        if (y + 200 > PAGE_H) {
          drawFooter(doc);
          doc.addPage();
          y = MARGIN;
        }
        y = drawICoverSection(doc, lead, y);
      }

      // Check if quote fits, otherwise add new page
      if (y + 80 + 50 > PAGE_H) {
        drawFooter(doc);
        doc.addPage();
        y = MARGIN;
      }

      drawQuote(doc, y);
      drawFooter(doc);

      doc.end();

      writeStream.on('finish', () => {
        console.log(`[PDF-CLIENTE] Gerado: ${nomeArquivo}`);
        resolve({ arquivo, nomeArquivo });
      });
      writeStream.on('error', reject);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = { gerarPDFCliente };
