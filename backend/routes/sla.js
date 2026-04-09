const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/dashboard', (req, res, next) => {
  try {
    const tipoFilter = req.query.tipo;
    const whereClause = tipoFilter ? 'WHERE l.tipo = ?' : '';
    const params = tipoFilter ? [tipoFilter] : [];

    const pipeline = db.prepare(`
      SELECT l.id, l.tipo, l.razao_social, l.setor, l.created_at, l.cnpj,
        cv.faturamento_desejado_seguro,
        GROUP_CONCAT(DISTINCT c.seguradora) as seguradoras,
        CASE
          WHEN COUNT(CASE WHEN c.status = 'ganha' THEN 1 END) > 0 THEN 'ganha'
          WHEN COUNT(CASE WHEN c.status = 'proposta_emitida' THEN 1 END) > 0 THEN 'proposta_emitida'
          WHEN COUNT(CASE WHEN c.status = 'em_negociacao' THEN 1 END) > 0 THEN 'em_negociacao'
          WHEN COUNT(CASE WHEN c.status = 'respondida' THEN 1 END) > 0 THEN 'respondida'
          WHEN COUNT(CASE WHEN c.status = 'perdida' THEN 1 END) = COUNT(c.id) THEN 'perdida'
          ELSE 'aguardando_resposta'
        END as status_geral,
        CAST(julianday('now') - julianday(l.created_at) AS INTEGER) as dias_em_aberto
      FROM leads l
      LEFT JOIN cotacoes c ON c.lead_id = l.id
      LEFT JOIN condicoes_venda cv ON cv.lead_id = l.id
      ${whereClause}
      GROUP BY l.id
      ORDER BY l.created_at DESC
    `).all(...params);

    const seguradoras = ['AIG', 'Atradius', 'Coface', 'Euler Hermes', 'AVLA', 'CESCE'];
    const slaPorSeguradora = seguradoras.map(seg => {
      const stats = db.prepare(`
        SELECT
          COUNT(*) as total_enviadas,
          COUNT(CASE WHEN status = 'aguardando_resposta' THEN 1 END) as aguardando,
          AVG(CASE WHEN data_resposta IS NOT NULL THEN CAST(julianday(data_resposta) - julianday(data_envio) AS INTEGER) END) as prazo_medio,
          MAX(CASE WHEN status = 'aguardando_resposta' THEN CAST(julianday('now') - julianday(data_envio) AS INTEGER) END) as max_dias_aberto
        FROM cotacoes WHERE seguradora = ?
      `).get(seg);
      return {
        seguradora: seg,
        total_enviadas: stats.total_enviadas || 0,
        aguardando: stats.aguardando || 0,
        prazo_medio: stats.prazo_medio ? Math.round(stats.prazo_medio) : 0,
        max_dias_aberto: stats.max_dias_aberto || 0
      };
    });

    const resumo = db.prepare(`
      SELECT
        COUNT(DISTINCT lead_id) as total_leads,
        COUNT(*) as total_cotacoes,
        COUNT(CASE WHEN status = 'aguardando_resposta' THEN 1 END) as aguardando,
        COUNT(CASE WHEN status = 'ganha' THEN 1 END) as ganhas,
        COUNT(CASE WHEN status = 'perdida' THEN 1 END) as perdidas
      FROM cotacoes
    `).get();

    res.json({ sucesso: true, data: { pipeline, slaPorSeguradora, resumo } });
  } catch (err) { next(err); }
});

module.exports = router;
