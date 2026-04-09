const nodemailer = require('nodemailer');
const path = require('path');

function criarTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.warn('[EMAIL] SMTP não configurado. E-mails não serão enviados.');
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

async function enviarNotificacaoBroker(lead, arquivos) {
  const transporter = criarTransporter();
  if (!transporter) {
    console.log('[EMAIL] Simulando envio para broker:', process.env.BROKER_EMAIL || 'broker@fairfield.com.br');
    return;
  }

  const attachments = arquivos.map(arq => ({
    filename: path.basename(arq.arquivo),
    path: arq.arquivo
  }));

  await transporter.sendMail({
    from: `"Fairfield Cotação" <${process.env.SMTP_FROM}>`,
    to: process.env.BROKER_EMAIL,
    subject: `Nova Solicitação de Cotação - ${lead.razao_social}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <div style="background: #0A1628; padding: 20px; text-align: center;">
          <h1 style="color: #B87333; margin: 0;">Fairfield</h1>
          <p style="color: #fff; margin: 5px 0 0;">Nova Solicitação de Cotação</p>
        </div>
        <div style="padding: 20px; background: #f8f9fa;">
          <h2 style="color: #0A1628;">Dados do Lead</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Empresa:</td><td style="padding: 8px;">${lead.razao_social}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">CNPJ:</td><td style="padding: 8px;">${lead.cnpj}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Setor:</td><td style="padding: 8px;">${lead.setor}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Faturamento:</td><td style="padding: 8px;">${lead.faturamento_faixa}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Contato:</td><td style="padding: 8px;">${lead.contato_nome} (${lead.contato_email})</td></tr>
          </table>
          <p style="margin-top: 15px;">Foram geradas <strong>${arquivos.length}</strong> cotações em anexo.</p>
        </div>
        <div style="background: #0A1628; padding: 10px; text-align: center;">
          <p style="color: #B87333; margin: 0; font-size: 12px;">Fairfield - Proteção e Inteligência Financeira</p>
        </div>
      </div>
    `,
    attachments
  });
}

async function enviarConfirmacaoProspect(lead) {
  const transporter = criarTransporter();
  if (!transporter) {
    console.log('[EMAIL] Simulando envio de confirmação para:', lead.contato_email);
    return;
  }

  await transporter.sendMail({
    from: `"Fairfield Corretora" <${process.env.SMTP_FROM}>`,
    to: lead.contato_email,
    subject: 'Recebemos sua solicitação de cotação - Fairfield',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <div style="background: #0A1628; padding: 20px; text-align: center;">
          <h1 style="color: #B87333; margin: 0;">Fairfield</h1>
          <p style="color: #fff; margin: 5px 0 0;">Proteção e Inteligência Financeira</p>
        </div>
        <div style="padding: 20px; background: #f8f9fa;">
          <p>Prezado(a) <strong>${lead.contato_nome}</strong>,</p>
          <p>Recebemos com sucesso a sua solicitação de cotação de seguro de crédito para a empresa <strong>${lead.razao_social}</strong>.</p>
          <p>Nossa equipe já está trabalhando na sua cotação junto às seguradoras parceiras. Você receberá um retorno em breve com as melhores condições do mercado.</p>
          <p>Em caso de dúvidas, não hesite em entrar em contato conosco.</p>
          <br>
          <p>Atenciosamente,<br><strong>Equipe Fairfield</strong></p>
        </div>
        <div style="background: #0A1628; padding: 10px; text-align: center;">
          <p style="color: #B87333; margin: 0; font-size: 12px;">Fairfield - Proteção e Inteligência Financeira</p>
        </div>
      </div>
    `
  });
}

module.exports = { enviarNotificacaoBroker, enviarConfirmacaoProspect };
