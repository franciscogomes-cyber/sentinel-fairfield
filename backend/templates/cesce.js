const { gerarInternoComum, gerarExternoComum } = require('./helpers');

async function gerar(workbook, lead) {
  const ws = workbook.addWorksheet('Questionário CESCE');
  if (lead.tipo === 'externo') {
    gerarExternoComum(ws, lead, 'CESCE Brasil');
  } else {
    gerarInternoComum(ws, lead, 'CESCE Brasil');
  }
}

module.exports = { gerar };
