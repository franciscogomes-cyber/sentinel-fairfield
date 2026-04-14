const express = require('express')
const router = express.Router()
const { analyze } = require('../services/underwritingEngine')

/**
 * POST /api/underwriting/analyze
 * Recebe os dados do intake e retorna a análise de subscrição iCover
 */
router.post('/analyze', (req, res) => {
  try {
    const data = req.body
    if (!data || !data.proponente) {
      return res.status(400).json({ error: 'Dados do proponente são obrigatórios' })
    }

    const result = analyze(data)
    res.json(result)
  } catch (err) {
    console.error('Erro na análise de subscrição:', err)
    res.status(500).json({ error: 'Erro interno na análise de subscrição', details: err.message })
  }
})

module.exports = router
