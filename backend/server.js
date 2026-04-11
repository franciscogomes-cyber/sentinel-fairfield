require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });

const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const leadsRouter = require('./routes/leads');
const cotacoesRouter = require('./routes/cotacoes');
const slaRouter = require('./routes/sla');
const adminRouter = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use('/arquivos', express.static(path.join(__dirname, 'arquivos')));

app.use('/api/leads', leadsRouter);
app.use('/api/cotacoes', cotacoesRouter);
app.use('/api/sla', slaRouter);
app.use('/api/admin', adminRouter);

// Consulta de CNPJ via BrasilAPI
app.get('/api/cnpj/:cnpj', async (req, res, next) => {
  try {
    const cnpjLimpo = req.params.cnpj.replace(/\D/g, '');
    if (cnpjLimpo.length !== 14) {
      return res.status(400).json({ sucesso: false, mensagem: 'CNPJ deve ter 14 dígitos' });
    }

    console.log(`[CNPJ] Consultando: ${cnpjLimpo}`);
    const response = await fetch(`https://publica.cnpj.ws/cnpj/${cnpjLimpo}`);

    if (!response.ok) {
      const status = response.status;
      if (status === 404 || status === 400) {
        return res.status(404).json({ sucesso: false, mensagem: 'CNPJ não encontrado na base da Receita Federal' });
      }
      if (status === 429) {
        return res.status(429).json({ sucesso: false, mensagem: 'Muitas consultas. Aguarde alguns segundos e tente novamente.' });
      }
      return res.status(502).json({ sucesso: false, mensagem: 'Erro ao consultar CNPJ. Tente novamente.' });
    }

    const dados = await response.json();
    const estabelecimento = dados.estabelecimento || {};
    const razao = dados.razao_social || '';
    const uf = estabelecimento.estado ? estabelecimento.estado.sigla : '';

    console.log(`[CNPJ] Encontrado: ${razao}`);

    res.json({
      sucesso: true,
      data: {
        razao_social: razao,
        nome_fantasia: estabelecimento.nome_fantasia || '',
        uf: uf,
        atividade_principal: estabelecimento.atividade_principal ? estabelecimento.atividade_principal.descricao : '',
        situacao_cadastral: estabelecimento.situacao_cadastral || '',
        municipio: estabelecimento.cidade ? estabelecimento.cidade.nome : '',
        telefone: estabelecimento.ddd1 && estabelecimento.telefone1 ? `(${estabelecimento.ddd1}) ${estabelecimento.telefone1}` : ''
      }
    });
  } catch (err) {
    console.error(`[CNPJ] Erro: ${err.message}`);
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(`[ERRO] ${new Date().toISOString()} - ${err.message}`);
  console.error(err.stack);
  res.status(err.status || 500).json({
    sucesso: false,
    mensagem: err.message || 'Erro interno do servidor',
    erro: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

app.listen(PORT, () => {
  console.log(`[Fairfield Cotação] Servidor rodando na porta ${PORT}`);
  console.log(`[Fairfield Cotação] ${new Date().toISOString()}`);
});
