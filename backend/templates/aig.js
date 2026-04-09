const { gerarInternoComum, gerarExternoComum } = require('./helpers');

async function gerar(workbook, lead) {
  const ws = workbook.addWorksheet('Questionário AIG');
  if (lead.tipo === 'externo') {
    gerarExternoComum(ws, lead, 'AIG Seguros');
  } else {
    gerarInternoComum(ws, lead, 'AIG Seguros');
  }
}

module.exports = { gerar };
