const path = require('path');
const fs = require('fs');
const ExcelJS = require('exceljs');

const templates = {
  'AIG': require('../templates/aig'),
  'Atradius': require('../templates/atradius'),
  'Coface': require('../templates/coface'),
  'Euler Hermes': require('../templates/euler'),
  'AVLA': require('../templates/avla'),
  'CESCE': require('../templates/cesce')
};

const arquivosDir = path.join(__dirname, '..', 'arquivos');
if (!fs.existsSync(arquivosDir)) {
  fs.mkdirSync(arquivosDir, { recursive: true });
}

function sanitizeName(name) {
  return name.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);
}

async function gerarCotacoes(lead, seguradoras) {
  const resultados = [];
  const data = new Date().toISOString().split('T')[0];

  for (const seg of seguradoras) {
    const template = templates[seg];
    if (!template) {
      console.warn(`[EXCEL] Template não encontrado para: ${seg}`);
      continue;
    }

    const nomeArquivo = `Fairfield_${seg.replace(/\s/g, '')}_${sanitizeName(lead.razao_social)}_${data}.xlsx`;
    const caminhoArquivo = path.join(arquivosDir, nomeArquivo);

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Fairfield Corretora';
    workbook.created = new Date();

    await template.gerar(workbook, lead);

    await workbook.xlsx.writeFile(caminhoArquivo);
    console.log(`[EXCEL] Gerado: ${nomeArquivo}`);

    resultados.push({
      seguradora: seg,
      arquivo: caminhoArquivo,
      nomeArquivo
    });
  }

  return resultados;
}

module.exports = { gerarCotacoes };
