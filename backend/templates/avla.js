const { gerarInternoComum, gerarExternoComum } = require('./helpers');

async function gerar(workbook, lead) {
  const ws = workbook.addWorksheet('Questionário AVLA');
  if (lead.tipo === 'externo') {
    gerarExternoComum(ws, lead, 'AVLA Brasil Seguros');
  } else {
    gerarInternoComum(ws, lead, 'AVLA Brasil Seguros');
  }
}

module.exports = { gerar };
