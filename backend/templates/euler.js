const { gerarInternoComum, gerarExternoComum } = require('./helpers');

async function gerar(workbook, lead) {
  const ws = workbook.addWorksheet('Questionário Allianz Trade');
  if (lead.tipo === 'externo') {
    gerarExternoComum(ws, lead, 'Euler Hermes (Allianz Trade)');
  } else {
    gerarInternoComum(ws, lead, 'Euler Hermes (Allianz Trade)');
  }
}

module.exports = { gerar };
