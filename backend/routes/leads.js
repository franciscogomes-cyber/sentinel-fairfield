const express = require('express');
const router = express.Router();
const db = require('../database');
const { gerarFichaTecnica } = require('../services/excelGenerator');
const { gerarPDFBroker } = require('../services/pdfGenerator');
const { gerarPDFCliente } = require('../services/pdfGeneratorCliente');
const { gerarExcelCliente } = require('../services/excelGeneratorCliente');
const { enviarNotificacaoBroker, enviarEmailCliente, enviarEmailTesteCliente } = require('../services/emailService');
const { optionalAuth } = require('../middleware/auth');

router.post('/', optionalAuth, async (req, res, next) => {
  try {
    const {
      tipo, proponente, coSeguradas, contato,
      historicoFaturamento, condicoesVenda, carteiraRecebiveis,
      perdasPorFaixa, maioresPerdas, atrasos, atrasosDetalhados,
      amostraCompradores, destinosExportacao, seguradoras,
      icover_score, icover_analysis
    } = req.body;

    console.log(`[LEAD] Nova solicitação ${tipo}: ${proponente.razao_social}`);

    // Determine user_id from JWT if authenticated
    const userId = req.user ? req.user.id : null;

    const insertLead = db.prepare(`
      INSERT INTO leads (tipo, razao_social, cnpj, setor, faturamento_pct, uf, contato_nome, contato_email, contato_telefone, user_id, pipeline_status, icover_score, icover_analysis_json)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'formulario_enviado', ?, ?)
    `);
    const result = insertLead.run(
      tipo, proponente.razao_social, proponente.cnpj, proponente.setor,
      proponente.faturamento_pct || '', proponente.uf || '',
      contato.nome, contato.email, contato.telefone,
      userId,
      icover_score || null,
      icover_analysis ? JSON.stringify(icover_analysis) : null
    );
    const leadId = result.lastInsertRowid;

    // Create initial quotation event
    try {
      db.prepare(
        'INSERT INTO quotation_events (lead_id, status, note, created_by) VALUES (?, ?, ?, ?)'
      ).run(leadId, 'formulario_enviado', 'Formulário de cotação enviado pelo cliente', userId ? `user:${userId}` : 'system');
    } catch (evtErr) {
      console.warn(`[LEAD] Erro ao criar evento inicial: ${evtErr.message}`);
    }

    if (coSeguradas && coSeguradas.length > 0) {
      const stmtCo = db.prepare('INSERT INTO co_seguradas (lead_id, empresa, cnpj, setor, faturamento_pct) VALUES (?, ?, ?, ?, ?)');
      for (const co of coSeguradas) {
        if (co.empresa) stmtCo.run(leadId, co.empresa, co.cnpj || '', co.setor || '', co.faturamento_pct || '');
      }
    }

    if (historicoFaturamento && historicoFaturamento.length > 0) {
      const stmtHist = db.prepare('INSERT INTO historico_faturamento (lead_id, ano, faturamento, perdas) VALUES (?, ?, ?, ?)');
      for (const h of historicoFaturamento) {
        stmtHist.run(leadId, h.ano, h.faturamento || '', h.perdas || '');
      }
    }

    if (condicoesVenda) {
      db.prepare(`INSERT INTO condicoes_venda (lead_id, pct_vista, pct_prazo, prazo_medio_dias, prazo_maximo_dias, faturamento_desejado_seguro)
        VALUES (?, ?, ?, ?, ?, ?)`).run(
        leadId, condicoesVenda.pct_vista || '', condicoesVenda.pct_prazo || '',
        condicoesVenda.prazo_medio_dias || '', condicoesVenda.prazo_maximo_dias || '',
        condicoesVenda.faturamento_desejado_seguro || ''
      );
    }

    if (carteiraRecebiveis && carteiraRecebiveis.length > 0) {
      const stmtCart = db.prepare('INSERT INTO carteira_recebiveis (lead_id, faixa, faturamento_total, pct_faturamento, num_clientes, pct_clientes) VALUES (?, ?, ?, ?, ?, ?)');
      for (const c of carteiraRecebiveis) {
        stmtCart.run(leadId, c.faixa, c.faturamento_total || '', c.pct_faturamento || '', c.num_clientes || '', c.pct_clientes || '');
      }
    }

    if (perdasPorFaixa && perdasPorFaixa.length > 0) {
      const stmtPF = db.prepare(`INSERT INTO perdas_detalhadas (lead_id, tipo_perda, faixa, ano, valor_total, num_clientes) VALUES (?, 'por_faixa', ?, ?, ?, ?)`);
      for (const p of perdasPorFaixa) {
        stmtPF.run(leadId, p.faixa || '', p.ano || '', p.valor_total || '', p.num_clientes || '');
      }
    }

    if (maioresPerdas && maioresPerdas.length > 0) {
      const stmtMP = db.prepare(`INSERT INTO perdas_detalhadas (lead_id, tipo_perda, razao_social, cnpj_importador, pais, exercicio, valor_total, motivo)
        VALUES (?, 'maior_perda', ?, ?, ?, ?, ?, ?)`);
      for (const p of maioresPerdas) {
        if (p.razao_social || p.importador) {
          stmtMP.run(leadId, p.razao_social || p.importador || '', p.cnpj || '', p.pais || '', p.exercicio || '', p.valor || '', p.motivo || '');
        }
      }
    }

    if (atrasos && atrasos.length > 0) {
      const stmtAt = db.prepare('INSERT INTO atrasos (lead_id, faixa_dias, valor_atraso, pct_valor, qtd_clientes, pct_clientes) VALUES (?, ?, ?, ?, ?, ?)');
      for (const a of atrasos) {
        stmtAt.run(leadId, a.faixa_dias, a.valor_atraso || '', a.pct_valor || '', a.qtd_clientes || '', a.pct_clientes || '');
      }
    }

    if (atrasosDetalhados && atrasosDetalhados.length > 0) {
      const stmtAD = db.prepare('INSERT INTO atrasos_detalhados (lead_id, razao_social, cnpj, data_emissao, data_vencimento, valor) VALUES (?, ?, ?, ?, ?, ?)');
      for (const a of atrasosDetalhados) {
        if (a.razao_social) stmtAD.run(leadId, a.razao_social, a.cnpj || '', a.data_emissao || '', a.data_vencimento || '', a.valor || '');
      }
    }

    if (amostraCompradores && amostraCompradores.length > 0) {
      const stmtAC = db.prepare('INSERT INTO amostra_compradores (lead_id, pais, razao_social, cnpj_codigo_fiscal, faturamento_anual, limite_credito, endereco) VALUES (?, ?, ?, ?, ?, ?, ?)');
      for (const c of amostraCompradores) {
        if (c.razao_social || c.cnpj_codigo_fiscal) {
          stmtAC.run(leadId, c.pais || '', c.razao_social || '', c.cnpj_codigo_fiscal || '', c.faturamento_anual || '', c.limite_credito || '', c.endereco || '');
        }
      }
    }

    if (destinosExportacao && tipo === 'externo') {
      const d = destinosExportacao;
      db.prepare(`INSERT INTO destinos_exportacao (lead_id, asia_pct, europa_pct, america_sul_pct, america_norte_pct, america_central_pct, africa_oceania_pct, menor_limite, maior_limite, num_importadores, anos_exportando, principais_paises)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(
        leadId, d.asia_pct || '', d.europa_pct || '', d.america_sul_pct || '', d.america_norte_pct || '',
        d.america_central_pct || '', d.africa_oceania_pct || '', d.menor_limite || '', d.maior_limite || '',
        d.num_importadores || '', d.anos_exportando || '', d.principais_paises || ''
      );
    }

    const todasSeguradoras = ['AIG', 'Atradius', 'Coface', 'Euler Hermes', 'AVLA', 'CESCE'];
    const segList = (!seguradoras || seguradoras.length === 0 || seguradoras.includes('Sem preferência'))
      ? todasSeguradoras : seguradoras;

    const leadCompleto = {
      id: leadId, tipo, ...proponente, contato,
      coSeguradas, historicoFaturamento, condicoesVenda,
      carteiraRecebiveis, perdasPorFaixa, maioresPerdas,
      atrasos, atrasosDetalhados, amostraCompradores, destinosExportacao
    };

    const fichaTecnica = await gerarFichaTecnica(leadCompleto);
    const arquivosGerados = [fichaTecnica]; // array para manter compatibilidade

    // Registra uma cotação por seguradora selecionada
    const insertCotacao = db.prepare('INSERT INTO cotacoes (lead_id, seguradora, status, arquivo_gerado) VALUES (?, ?, \'aguardando_resposta\', ?)');
    for (const seguradora of segList) {
      insertCotacao.run(leadId, seguradora, fichaTecnica.arquivo);
    }

    console.log(`[LEAD] Lead #${leadId} (${tipo}) salvo. ${segList.length} cotações registradas (1 ficha técnica).`);

    // Generate PDFs and client Excel
    let pdfBroker = null, pdfCliente = null, excelCliente = null;
    try {
      [pdfBroker, pdfCliente, excelCliente] = await Promise.all([
        gerarPDFBroker(leadCompleto),
        gerarPDFCliente(leadCompleto),
        gerarExcelCliente(leadCompleto)
      ]);
      console.log(`[PDF] Gerados: ${pdfBroker.nomeArquivo} | ${pdfCliente.nomeArquivo}`);
    } catch (pdfErr) {
      console.warn(`[PDF] Falha na geração: ${pdfErr.message}`);
    }

    // Register generated documents in the documents table
    try {
      if (fichaTecnica && fichaTecnica.arquivo) {
        db.prepare('INSERT INTO documents (lead_id, type, filename, filepath, visible_to_client) VALUES (?, ?, ?, ?, ?)')
          .run(leadId, 'ficha_tecnica', fichaTecnica.nomeArquivo || 'ficha_tecnica.xlsx', fichaTecnica.arquivo, 0);
      }
      if (pdfBroker && pdfBroker.arquivo) {
        db.prepare('INSERT INTO documents (lead_id, type, filename, filepath, visible_to_client) VALUES (?, ?, ?, ?, ?)')
          .run(leadId, 'pdf_broker', pdfBroker.nomeArquivo || 'relatorio_broker.pdf', pdfBroker.arquivo, 0);
      }
      if (pdfCliente && pdfCliente.arquivo) {
        db.prepare('INSERT INTO documents (lead_id, type, filename, filepath, visible_to_client) VALUES (?, ?, ?, ?, ?)')
          .run(leadId, 'pdf_cliente', pdfCliente.nomeArquivo || 'relatorio_cliente.pdf', pdfCliente.arquivo, 1);
      }
      if (excelCliente && excelCliente.arquivo) {
        db.prepare('INSERT INTO documents (lead_id, type, filename, filepath, visible_to_client) VALUES (?, ?, ?, ?, ?)')
          .run(leadId, 'excel_cliente', excelCliente.nomeArquivo || 'dados_cliente.xlsx', excelCliente.arquivo, 1);
      }
    } catch (docErr) {
      console.warn(`[LEAD] Erro ao registrar documentos: ${docErr.message}`);
    }

    // Get commercial reps for CC
    const comerciais = db.prepare('SELECT email FROM comercial_contatos WHERE ativo = 1').all();
    const ccEmails = comerciais.map(c => c.email);

    try {
      await Promise.all([
        enviarNotificacaoBroker(leadCompleto, [fichaTecnica], pdfBroker, ccEmails),
        enviarEmailCliente(leadCompleto, pdfCliente, excelCliente),
        enviarEmailTesteCliente(leadCompleto, 'broering.gomes@gmail.com', pdfCliente)
      ]);
    } catch (emailErr) {
      console.warn(`[EMAIL] Falha: ${emailErr.message}`);
    }

    res.status(201).json({
      sucesso: true,
      mensagem: 'Solicitação de cotação enviada com sucesso!',
      data: { leadId, cotacoesGeradas: segList.length, seguradoras: segList, fichaTecnica: fichaTecnica.nomeArquivo }
    });
  } catch (err) {
    next(err);
  }
});

router.get('/', (req, res, next) => {
  try {
    const tipoFilter = req.query.tipo;
    let sql = `
      SELECT l.*,
        (SELECT COUNT(*) FROM cotacoes c WHERE c.lead_id = l.id) as total_cotacoes,
        (SELECT GROUP_CONCAT(DISTINCT c.seguradora) FROM cotacoes c WHERE c.lead_id = l.id) as seguradoras_enviadas
      FROM leads l
    `;
    const params = [];
    if (tipoFilter) { sql += ' WHERE l.tipo = ?'; params.push(tipoFilter); }
    sql += ' ORDER BY l.created_at DESC';
    const leads = db.prepare(sql).all(...params);
    res.json({ sucesso: true, data: leads });
  } catch (err) { next(err); }
});

router.get('/:id', (req, res, next) => {
  try {
    const lead = db.prepare('SELECT * FROM leads WHERE id = ?').get(req.params.id);
    if (!lead) return res.status(404).json({ sucesso: false, mensagem: 'Lead não encontrado' });

    const coSeguradas = db.prepare('SELECT * FROM co_seguradas WHERE lead_id = ?').all(req.params.id);
    const historicoFaturamento = db.prepare('SELECT * FROM historico_faturamento WHERE lead_id = ?').all(req.params.id);
    const condicoesVenda = db.prepare('SELECT * FROM condicoes_venda WHERE lead_id = ?').get(req.params.id);
    const carteiraRecebiveis = db.prepare('SELECT * FROM carteira_recebiveis WHERE lead_id = ?').all(req.params.id);
    const perdasPorFaixa = db.prepare("SELECT * FROM perdas_detalhadas WHERE lead_id = ? AND tipo_perda = 'por_faixa'").all(req.params.id);
    const maioresPerdas = db.prepare("SELECT * FROM perdas_detalhadas WHERE lead_id = ? AND tipo_perda = 'maior_perda'").all(req.params.id);
    const atrasos = db.prepare('SELECT * FROM atrasos WHERE lead_id = ?').all(req.params.id);
    const atrasosDetalhados = db.prepare('SELECT * FROM atrasos_detalhados WHERE lead_id = ?').all(req.params.id);
    const amostraCompradores = db.prepare('SELECT * FROM amostra_compradores WHERE lead_id = ?').all(req.params.id);
    const destinosExportacao = db.prepare('SELECT * FROM destinos_exportacao WHERE lead_id = ?').get(req.params.id);
    const cotacoes = db.prepare('SELECT * FROM cotacoes WHERE lead_id = ? ORDER BY data_envio DESC').all(req.params.id);

    res.json({
      sucesso: true,
      data: { ...lead, coSeguradas, historicoFaturamento, condicoesVenda, carteiraRecebiveis, perdasPorFaixa, maioresPerdas, atrasos, atrasosDetalhados, amostraCompradores, destinosExportacao, cotacoes }
    });
  } catch (err) { next(err); }
});

module.exports = router;
