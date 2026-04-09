const { gerarInternoComum, gerarExternoComum } = require('./helpers');

async function gerar(workbook, lead) {
  const ws = workbook.addWorksheet('Questionário Atradius');
  if (lead.tipo === 'externo') {
    gerarExternoComum(ws, lead, 'Atradius Crédito y Caución');
  } else {
    gerarInternoComum(ws, lead, 'Atradius Crédito y Caución');
  }
}

module.exports = { gerar };
