const { gerarInternoComum, gerarExternoComum } = require('./helpers');

async function gerar(workbook, lead) {
  const ws = workbook.addWorksheet('Questionário Coface');
  if (lead.tipo === 'externo') {
    gerarExternoComum(ws, lead, 'Coface do Brasil');
  } else {
    gerarInternoComum(ws, lead, 'Coface do Brasil');
  }
}

module.exports = { gerar };
