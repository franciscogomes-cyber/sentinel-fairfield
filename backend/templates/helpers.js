const NAVY = 'FF0A1628';
const COBRE = 'FFB87333';
const CINZA = 'FFF0F0F0';
const BRANCO = 'FFFFFFFF';

function setupColunas(ws, widths) {
  ws.columns = widths.map((w, i) => ({ width: w }));
}

function addSecao(ws, titulo, colspan) {
  const row = ws.addRow([titulo]);
  row.font = { bold: true, size: 11, color: { argb: BRANCO } };
  row.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  row.height = 24;
  if (colspan > 1) ws.mergeCells(row.number, 1, row.number, colspan);
  return row;
}

function addCampo(ws, campo, valor, colspan) {
  const r = ws.addRow([campo, valor || '']);
  r.getCell(1).font = { bold: true, size: 10 };
  r.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: CINZA } };
  if (colspan > 2) ws.mergeCells(r.number, 2, r.number, colspan);
  return r;
}

function addTabelaCabecalho(ws, headers) {
  const r = ws.addRow(headers);
  r.font = { bold: true, size: 9, color: { argb: BRANCO } };
  r.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COBRE } };
  r.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  r.height = 22;
  return r;
}

function addTabelaLinha(ws, values) {
  const r = ws.addRow(values);
  r.font = { size: 9 };
  r.alignment = { horizontal: 'center' };
  return r;
}

function addBordas(ws) {
  ws.eachRow(row => {
    row.eachCell(cell => {
      cell.border = {
        top: { style: 'thin', color: { argb: 'FFDDDDDD' } },
        bottom: { style: 'thin', color: { argb: 'FFDDDDDD' } },
        left: { style: 'thin', color: { argb: 'FFDDDDDD' } },
        right: { style: 'thin', color: { argb: 'FFDDDDDD' } }
      };
    });
  });
}

function addTitulo(ws, seguradora, tipo, colspan) {
  const tipoLabel = tipo === 'externo' ? 'CRÉDITO EXPORTAÇÃO' : 'CRÉDITO INTERNO';
  const t = ws.addRow([`${seguradora} — Questionário de Seguro de ${tipoLabel}`]);
  t.font = { bold: true, size: 14, color: { argb: NAVY } };
  if (colspan > 1) ws.mergeCells(1, 1, 1, colspan);
  const sub = ws.addRow([`Preparado por Fairfield Corretora | ${new Date().toLocaleDateString('pt-BR')}`]);
  sub.font = { italic: true, size: 9, color: { argb: 'FF888888' } };
  if (colspan > 1) ws.mergeCells(2, 1, 2, colspan);
  ws.addRow([]);
}

function addRodape(ws, colspan) {
  ws.addRow([]);
  const r1 = ws.addRow(['FAIRFIELD PROTEÇÃO E INTELIGÊNCIA FINANCEIRA']);
  r1.font = { bold: true, size: 10, color: { argb: NAVY } };
  if (colspan > 1) ws.mergeCells(r1.number, 1, r1.number, colspan);
  const r2 = ws.addRow(['SUSEP 20.2036457.1 | 0800 591 4310 | www.fairfield.com.br']);
  r2.font = { size: 9, color: { argb: COBRE } };
  if (colspan > 1) ws.mergeCells(r2.number, 1, r2.number, colspan);
}

function gerarInternoComum(ws, lead, segLabel) {
  const C = 5;
  setupColunas(ws, [30, 20, 15, 15, 15]);
  addTitulo(ws, segLabel, 'interno', C);

  // 1. DADOS DO PROPONENTE
  addSecao(ws, '1. DADOS DO PROPONENTE', C);
  addCampo(ws, 'Empresa', lead.razao_social, C);
  addCampo(ws, 'CNPJ', lead.cnpj, C);
  addCampo(ws, 'Setor de Atividade', lead.setor, C);
  addCampo(ws, 'Faturamento Empresa (%)', lead.faturamento_pct, C);
  addCampo(ws, 'UF', lead.uf, C);
  addCampo(ws, 'Contato', `${lead.contato?.nome || ''} | ${lead.contato?.email || ''} | ${lead.contato?.telefone || ''}`, C);

  if (lead.coSeguradas && lead.coSeguradas.length > 0) {
    ws.addRow([]);
    addTabelaCabecalho(ws, ['Co-Segurada', 'CNPJ', 'Setor', 'Faturamento %', '']);
    for (const co of lead.coSeguradas) {
      if (co.empresa) addTabelaLinha(ws, [co.empresa, co.cnpj, co.setor, co.faturamento_pct, '']);
    }
  }

  // 2. HISTÓRICO
  ws.addRow([]);
  addSecao(ws, '2. HISTÓRICO DE FATURAMENTO E PDD (em Milhares de Reais)', C);
  addTabelaCabecalho(ws, ['Período', 'Faturamento', 'Perdas', '', '']);
  if (lead.historicoFaturamento) {
    for (const h of lead.historicoFaturamento) {
      addTabelaLinha(ws, [h.ano, h.faturamento, h.perdas, '', '']);
    }
  }

  ws.addRow([]);
  addSecao(ws, '2.1 DISTRIBUIÇÃO DAS CONDIÇÕES DE VENDA', C);
  const cv = lead.condicoesVenda || {};
  addCampo(ws, 'À Vista (%)', cv.pct_vista, C);
  addCampo(ws, 'À Prazo (%)', cv.pct_prazo, C);
  addCampo(ws, 'Prazo Médio (dias)', cv.prazo_medio_dias, C);
  addCampo(ws, 'Prazo Máximo (dias)', cv.prazo_maximo_dias, C);
  ws.addRow([]);
  addSecao(ws, '2.2 FATURAMENTO ANUAL DESEJADO PARA O SEGURO', C);
  addCampo(ws, 'Valor (R$)', cv.faturamento_desejado_seguro, C);

  // 3. CARTEIRA
  ws.addRow([]);
  addSecao(ws, '3. DISTRIBUIÇÃO DA CARTEIRA DE RECEBÍVEIS', C);
  addTabelaCabecalho(ws, ['Faixa de Valor (R$)', 'Faturamento Total', '% Faturamento', 'Nº Clientes', '% Clientes']);
  if (lead.carteiraRecebiveis) {
    for (const c of lead.carteiraRecebiveis) {
      addTabelaLinha(ws, [c.faixa, c.faturamento_total, c.pct_faturamento, c.num_clientes, c.pct_clientes]);
    }
  }

  // 4. PERDAS
  ws.addRow([]);
  addSecao(ws, '4. DETALHAMENTO DAS PERDAS EFETIVAS', C);
  if (lead.perdasPorFaixa && lead.perdasPorFaixa.length > 0) {
    addTabelaCabecalho(ws, ['Faixa (R$)', 'Ano', 'Valor Total', 'Nº Clientes', '']);
    for (const p of lead.perdasPorFaixa) {
      addTabelaLinha(ws, [p.faixa, p.ano, p.valor_total, p.num_clientes, '']);
    }
  }

  ws.addRow([]);
  addSecao(ws, '4.1 MAIORES PERDAS (5 maiores nos últimos 3 anos)', C);
  addTabelaCabecalho(ws, ['Razão Social', 'CNPJ', 'Exercício', 'Valor (R$)', 'Motivo']);
  if (lead.maioresPerdas) {
    for (const p of lead.maioresPerdas) {
      addTabelaLinha(ws, [p.razao_social || p.importador, p.cnpj || p.cnpj_importador, p.exercicio, p.valor || p.valor_total, p.motivo]);
    }
  }

  // 5. ATRASOS
  ws.addRow([]);
  addSecao(ws, '5. DISTRIBUIÇÃO DE ATRASOS', C);
  addTabelaCabecalho(ws, ['Dias de Atraso', 'Valor em Atraso (R$)', '% Valor', 'Qtd Clientes', '% Clientes']);
  if (lead.atrasos) {
    for (const a of lead.atrasos) {
      addTabelaLinha(ws, [a.faixa_dias, a.valor_atraso, a.pct_valor, a.qtd_clientes, a.pct_clientes]);
    }
  }

  // 6. COMPRADORES
  ws.addRow([]);
  addSecao(ws, '6. AMOSTRA DE COMPRADORES', C);
  addTabelaCabecalho(ws, ['CNPJ', 'Razão Social', '', 'Faturamento Anual', 'Limite Crédito']);
  if (lead.amostraCompradores) {
    for (const c of lead.amostraCompradores) {
      addTabelaLinha(ws, [c.cnpj_codigo_fiscal, c.razao_social, '', c.faturamento_anual, c.limite_credito]);
    }
  }

  // 7. CONFIDENCIALIDADE
  ws.addRow([]);
  addSecao(ws, '7. CONFIDENCIALIDADE', C);
  const confRow = ws.addRow(['As informações contidas neste Questionário serão tratadas com total confidencialidade.']);
  confRow.font = { size: 9, italic: true };
  ws.mergeCells(confRow.number, 1, confRow.number, C);

  addRodape(ws, C);
  addBordas(ws);

  // Aba Abertura Vencidos
  if (lead.atrasosDetalhados && lead.atrasosDetalhados.length > 0) {
    const ws2 = ws.workbook.addWorksheet('Abertura Vencidos');
    setupColunas(ws2, [30, 20, 18, 18, 18]);
    addSecao(ws2, '5.1 DISTRIBUIÇÃO DE ATRASOS ACIMA DE 180 DIAS', 5);
    ws2.addRow([]);
    addTabelaCabecalho(ws2, ['Razão Social', 'CNPJ', 'Data Emissão', 'Data Vencimento', 'Valor (R$)']);
    for (const a of lead.atrasosDetalhados) {
      addTabelaLinha(ws2, [a.razao_social, a.cnpj, a.data_emissao, a.data_vencimento, a.valor]);
    }
    addBordas(ws2);
  }
}

function gerarExternoComum(ws, lead, segLabel) {
  const C = 5;
  setupColunas(ws, [30, 20, 15, 15, 15]);
  addTitulo(ws, segLabel, 'externo', C);

  // 1. DADOS DO PROPONENTE
  addSecao(ws, '1. DADOS DO PROPONENTE', C);
  addCampo(ws, 'Empresa', lead.razao_social, C);
  addCampo(ws, 'CNPJ', lead.cnpj, C);
  addCampo(ws, 'Atividade da Empresa', lead.setor, C);
  addCampo(ws, 'Faturamento Empresa (%)', lead.faturamento_pct, C);
  addCampo(ws, 'Há Quantos Anos Exporta', lead.destinosExportacao?.anos_exportando || '', C);
  addCampo(ws, 'Contato', `${lead.contato?.nome || ''} | ${lead.contato?.email || ''} | ${lead.contato?.telefone || ''}`, C);

  if (lead.coSeguradas && lead.coSeguradas.length > 0) {
    ws.addRow([]);
    addTabelaCabecalho(ws, ['Co-Segurada', 'CNPJ', 'Setor', 'Faturamento %', '']);
    for (const co of lead.coSeguradas) {
      if (co.empresa) addTabelaLinha(ws, [co.empresa, co.cnpj, co.setor, co.faturamento_pct, '']);
    }
  }

  // 2. HISTÓRICO
  ws.addRow([]);
  addSecao(ws, '2. HISTÓRICO DE FATURAMENTO E PERDAS (em US$)', C);
  addTabelaCabecalho(ws, ['Período', 'Faturamento (US$)', 'Perdas (US$)', '', '']);
  if (lead.historicoFaturamento) {
    for (const h of lead.historicoFaturamento) {
      addTabelaLinha(ws, [h.ano, h.faturamento, h.perdas, '', '']);
    }
  }
  ws.addRow([]);
  const cv = lead.condicoesVenda || {};
  addSecao(ws, '2.1 FATURAMENTO ANUAL DESEJADO PARA O SEGURO', C);
  addCampo(ws, 'Valor (US$)', cv.faturamento_desejado_seguro, C);

  // 3. PRAZOS
  ws.addRow([]);
  addSecao(ws, '3. DISTRIBUIÇÃO DOS PRAZOS DE VENDA', C);
  addCampo(ws, 'À Vista (%)', cv.pct_vista, C);
  addCampo(ws, 'À Prazo (%)', cv.pct_prazo, C);
  addCampo(ws, 'Prazo Médio Crédito (dias)', cv.prazo_medio_dias, C);
  addCampo(ws, 'Prazo Máximo Crédito (dias)', cv.prazo_maximo_dias, C);

  // 4. DESTINOS
  ws.addRow([]);
  addSecao(ws, '4. PRINCIPAIS DESTINOS (% de Faturamento)', C);
  const de = lead.destinosExportacao || {};
  addTabelaCabecalho(ws, ['Região', '% Faturamento', '', '', '']);
  addTabelaLinha(ws, ['Ásia', de.asia_pct, '', '', '']);
  addTabelaLinha(ws, ['Europa', de.europa_pct, '', '', '']);
  addTabelaLinha(ws, ['América do Sul', de.america_sul_pct, '', '', '']);
  addTabelaLinha(ws, ['América do Norte', de.america_norte_pct, '', '', '']);
  addTabelaLinha(ws, ['América Central', de.america_central_pct, '', '', '']);
  addTabelaLinha(ws, ['África / Oceania', de.africa_oceania_pct, '', '', '']);

  ws.addRow([]);
  addCampo(ws, 'Principais Países Importadores', de.principais_paises, C);
  addCampo(ws, 'Menor Limite de Crédito Individual (US$)', de.menor_limite, C);
  addCampo(ws, 'Maior Limite de Crédito Individual (US$)', de.maior_limite, C);
  addCampo(ws, 'Número Total de Importadores', de.num_importadores, C);

  // 4.2 CARTEIRA
  if (lead.carteiraRecebiveis && lead.carteiraRecebiveis.length > 0) {
    ws.addRow([]);
    addSecao(ws, '4.2 DISTRIBUIÇÃO DA CARTEIRA DE RECEBÍVEIS', C);
    addTabelaCabecalho(ws, ['Faixa de Valor (US$)', 'Faturamento Total', '% Faturamento', 'Nº Clientes', '% Clientes']);
    for (const c of lead.carteiraRecebiveis) {
      addTabelaLinha(ws, [c.faixa, c.faturamento_total, c.pct_faturamento, c.num_clientes, c.pct_clientes]);
    }
  }

  // 5. PERDAS
  ws.addRow([]);
  addSecao(ws, '5. MAIORES PERDAS (5 maiores nos últimos 3 anos)', C);
  addTabelaCabecalho(ws, ['Importador', 'País', 'Exercício', 'Montante (US$)', 'Motivo']);
  if (lead.maioresPerdas) {
    for (const p of lead.maioresPerdas) {
      addTabelaLinha(ws, [p.razao_social || p.importador, p.pais, p.exercicio, p.valor || p.valor_total, p.motivo]);
    }
  }

  // 6. DÍVIDAS VENCIDAS
  ws.addRow([]);
  addSecao(ws, '6. DÍVIDAS VENCIDAS ACIMA DE 180 DIAS', C);
  if (lead.atrasos && lead.atrasos.length > 0) {
    addTabelaCabecalho(ws, ['Dias de Atraso', 'Valor em Atraso (US$)', '', 'Qtd Clientes', '']);
    for (const a of lead.atrasos) {
      addTabelaLinha(ws, [a.faixa_dias, a.valor_atraso, '', a.qtd_clientes, '']);
    }
  }

  // 7. COMPRADORES
  ws.addRow([]);
  addSecao(ws, '7. AMOSTRA DE COMPRADORES', C);
  addTabelaCabecalho(ws, ['País', 'Razão Social', 'Código Fiscal', 'Limite Crédito (US$)', 'Endereço']);
  if (lead.amostraCompradores) {
    for (const c of lead.amostraCompradores) {
      addTabelaLinha(ws, [c.pais, c.razao_social, c.cnpj_codigo_fiscal, c.limite_credito, c.endereco]);
    }
  }

  // 8. CONFIDENCIALIDADE
  ws.addRow([]);
  addSecao(ws, '8. CONFIDENCIALIDADE', C);
  const confRow = ws.addRow(['As informações contidas neste Questionário serão tratadas com total confidencialidade.']);
  confRow.font = { size: 9, italic: true };
  ws.mergeCells(confRow.number, 1, confRow.number, C);

  addRodape(ws, C);
  addBordas(ws);
}

module.exports = { addSecao, addCampo, addBordas, setupColunas, addTitulo, addTabelaCabecalho, addTabelaLinha, addRodape, gerarInternoComum, gerarExternoComum };
