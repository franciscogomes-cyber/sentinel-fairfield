const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res, next) => {
  try {
    const cotacoes = db.prepare(`
      SELECT c.*, l.razao_social, l.cnpj, l.setor, l.tipo, l.contato_email,
        cv.faturamento_desejado_seguro,
        CAST(julianday('now') - julianday(c.data_envio) AS INTEGER) as dias_calculados
      FROM cotacoes c
      JOIN leads l ON l.id = c.lead_id
      LEFT JOIN condicoes_venda cv ON cv.lead_id = l.id
      ORDER BY c.data_envio DESC
    `).all();

    const atualizarDias = db.prepare('UPDATE cotacoes SET dias_em_aberto = ? WHERE id = ?');
    for (const c of cotacoes) {
      if (c.status === 'aguardando_resposta') {
        atualizarDias.run(c.dias_calculados, c.id);
        c.dias_em_aberto = c.dias_calculados;
      }
    }

    res.json({ sucesso: true, data: cotacoes });
  } catch (err) { next(err); }
});

router.put('/:id/status', (req, res, next) => {
  try {
    const { status, observacao_broker } = req.body;
    const statusValidos = ['aguardando_resposta', 'respondida', 'em_negociacao', 'proposta_emitida', 'perdida', 'ganha'];
    if (!statusValidos.includes(status)) return res.status(400).json({ sucesso: false, mensagem: 'Status inválido' });

    const cotacao = db.prepare('SELECT * FROM cotacoes WHERE id = ?').get(req.params.id);
    if (!cotacao) return res.status(404).json({ sucesso: false, mensagem: 'Cotação não encontrada' });

    const dataResposta = ['respondida', 'em_negociacao', 'proposta_emitida', 'perdida', 'ganha'].includes(status)
      ? new Date().toISOString() : cotacao.data_resposta;

    db.prepare('UPDATE cotacoes SET status = ?, observacao_broker = ?, data_resposta = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
      .run(status, observacao_broker || cotacao.observacao_broker, dataResposta, req.params.id);

    console.log(`[COTAÇÃO] #${req.params.id} atualizada para: ${status}`);
    res.json({ sucesso: true, mensagem: 'Status atualizado com sucesso' });
  } catch (err) { next(err); }
});

module.exports = router;
