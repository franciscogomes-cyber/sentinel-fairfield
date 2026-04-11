const nodemailer = require('nodemailer');
const path = require('path');

async function criarTransporter() {
  const smtpPass = process.env.SMTP_PASS || '';
  const isConfigured = process.env.SMTP_HOST && process.env.SMTP_USER &&
    smtpPass && smtpPass !== 'sua_app_password_aqui';

  if (isConfigured) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: parseInt(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  // Fallback: Ethereal test account (preview via URL)
  console.warn('[EMAIL] SMTP não configurado. Usando Ethereal para preview...');
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: { user: testAccount.user, pass: testAccount.pass }
  });
  transporter._ethereal = true;
  return transporter;
}

function formatarTipo(tipo) {
  if (!tipo) return 'N/A';
  const tipos = { interno: 'Interno (Doméstico)', externo: 'Exportação', interno_externo: 'Interno + Exportação' };
  return tipos[tipo] || tipo.charAt(0).toUpperCase() + tipo.slice(1);
}

function formatarFaturamento(valor) {
  if (!valor) return 'Não informado';
  return valor;
}

// ─── Email 1: Notificação ao Broker ──────────────────────────────────────────

async function enviarNotificacaoBroker(lead, arquivos, pdfBroker, ccEmails = []) {
  const transporter = await criarTransporter();
  const smtpFrom = process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@fairfield.com.br';
  const brokerEmail = process.env.BROKER_EMAIL || 'broering.gomes@gmail.com';
  const tipo = formatarTipo(lead.tipo);

  const attachments = [];
  if (arquivos && Array.isArray(arquivos)) {
    for (const arq of arquivos) {
      const filePath = arq.arquivo || arq.path || arq;
      if (filePath) {
        attachments.push({
          filename: path.basename(filePath),
          path: filePath
        });
      }
    }
  }
  if (pdfBroker) {
    attachments.push({
      filename: typeof pdfBroker === 'string' ? path.basename(pdfBroker) : (pdfBroker.filename || 'cotacao-broker.pdf'),
      path: typeof pdfBroker === 'string' ? pdfBroker : pdfBroker.path,
      ...(pdfBroker.content ? { content: pdfBroker.content } : {})
    });
  }

  const numCompradores = (lead.amostraCompradores || []).length;
  const numCoSeguradas = (lead.coSeguradas || []).filter(c => c && c.empresa).length;
  const numSeguradoras = arquivos ? arquivos.length : 0;

  const contatoNome = (lead.contato && lead.contato.nome) || lead.contato_nome || 'N/A';
  const contatoEmail = (lead.contato && lead.contato.email) || lead.contato_email || 'N/A';
  const contatoTel = (lead.contato && lead.contato.telefone) || lead.contato_telefone || '';
  const faturamento = (lead.condicoesVenda && lead.condicoesVenda.faturamento_desejado_seguro)
    || lead.faturamento_pct
    || 'Não informado';

  const htmlBroker = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nova Cotação SENTINEL</title>
</head>
<body style="margin:0;padding:0;background:#F0F4F8;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F0F4F8;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:#0A1628;border-radius:12px 12px 0 0;padding:32px 40px;text-align:center;">
              <div style="font-size:11px;font-weight:700;letter-spacing:4px;color:#7DD3FC;text-transform:uppercase;margin-bottom:8px;">
                SENTINEL
              </div>
              <div style="font-size:26px;font-weight:700;color:#FFFFFF;margin-bottom:6px;">
                Nova Cotação Recebida
              </div>
              <div style="font-size:14px;color:#94A3B8;">
                Nova solicitação de cotação recebida via plataforma SENTINEL
              </div>
            </td>
          </tr>

          <!-- ALERT BANNER -->
          <tr>
            <td style="background:#1E3A5F;padding:14px 40px;text-align:center;">
              <span style="font-size:13px;color:#7DD3FC;font-weight:600;">
                🔔 &nbsp;Ação necessária: analise e envie as cotações às seguradoras
              </span>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#FFFFFF;padding:36px 40px;">

              <!-- Lead Summary Table -->
              <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#7DD3FC;text-transform:uppercase;margin-bottom:16px;">
                Dados do Proponente
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:28px;">
                <tr style="background:#F8FAFC;">
                  <td style="padding:10px 14px;font-size:13px;font-weight:600;color:#64748B;width:40%;border-bottom:1px solid #E2E8F0;">Empresa</td>
                  <td style="padding:10px 14px;font-size:14px;color:#0F172A;font-weight:600;border-bottom:1px solid #E2E8F0;">${lead.razao_social || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding:10px 14px;font-size:13px;font-weight:600;color:#64748B;border-bottom:1px solid #E2E8F0;">CNPJ</td>
                  <td style="padding:10px 14px;font-size:14px;color:#0F172A;border-bottom:1px solid #E2E8F0;">${lead.cnpj || 'N/A'}</td>
                </tr>
                <tr style="background:#F8FAFC;">
                  <td style="padding:10px 14px;font-size:13px;font-weight:600;color:#64748B;border-bottom:1px solid #E2E8F0;">Tipo</td>
                  <td style="padding:10px 14px;border-bottom:1px solid #E2E8F0;">
                    <span style="background:#DBEAFE;color:#1D4ED8;font-size:12px;font-weight:600;padding:3px 10px;border-radius:20px;">${tipo}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 14px;font-size:13px;font-weight:600;color:#64748B;border-bottom:1px solid #E2E8F0;">Setor</td>
                  <td style="padding:10px 14px;font-size:14px;color:#0F172A;border-bottom:1px solid #E2E8F0;">${lead.setor || 'N/A'}</td>
                </tr>
                <tr style="background:#F8FAFC;">
                  <td style="padding:10px 14px;font-size:13px;font-weight:600;color:#64748B;border-bottom:1px solid #E2E8F0;">Faturamento Desejado</td>
                  <td style="padding:10px 14px;font-size:14px;color:#0F172A;font-weight:600;border-bottom:1px solid #E2E8F0;">${formatarFaturamento(faturamento)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 14px;font-size:13px;font-weight:600;color:#64748B;">Contato</td>
                  <td style="padding:10px 14px;font-size:14px;color:#0F172A;">
                    ${contatoNome}${contatoEmail !== 'N/A' ? ` &lt;<a href="mailto:${contatoEmail}" style="color:#1D4ED8;">${contatoEmail}</a>&gt;` : ''}${contatoTel ? ` · ${contatoTel}` : ''}
                  </td>
                </tr>
              </table>

              <!-- Stats Row -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td width="33%" style="text-align:center;padding:16px 8px;background:#F0F9FF;border-radius:8px;margin:0 4px;">
                    <div style="font-size:28px;font-weight:700;color:#0A1628;">${numCompradores}</div>
                    <div style="font-size:12px;color:#64748B;margin-top:4px;">compradores</div>
                  </td>
                  <td width="4px"></td>
                  <td width="33%" style="text-align:center;padding:16px 8px;background:#F0F9FF;border-radius:8px;">
                    <div style="font-size:28px;font-weight:700;color:#0A1628;">${numCoSeguradas}</div>
                    <div style="font-size:12px;color:#64748B;margin-top:4px;">co-seguradas</div>
                  </td>
                  <td width="4px"></td>
                  <td width="33%" style="text-align:center;padding:16px 8px;background:#EFF6FF;border-radius:8px;">
                    <div style="font-size:28px;font-weight:700;color:#1D4ED8;">${numSeguradoras}</div>
                    <div style="font-size:12px;color:#64748B;margin-top:4px;">seguradoras consultadas</div>
                  </td>
                </tr>
              </table>

              <!-- Próximos Passos -->
              <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#7DD3FC;text-transform:uppercase;margin-bottom:16px;">
                Próximos Passos
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #F1F5F9;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:36px;height:36px;background:#DBEAFE;border-radius:50%;text-align:center;vertical-align:middle;font-size:16px;font-weight:700;color:#1D4ED8;">1</td>
                        <td style="padding-left:14px;">
                          <div style="font-size:14px;font-weight:600;color:#0F172A;">Revisar planilhas em anexo</div>
                          <div style="font-size:13px;color:#64748B;margin-top:2px;">Verifique os dados de cada seguradora gerados pelo SENTINEL</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #F1F5F9;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:36px;height:36px;background:#DBEAFE;border-radius:50%;text-align:center;vertical-align:middle;font-size:16px;font-weight:700;color:#1D4ED8;">2</td>
                        <td style="padding-left:14px;">
                          <div style="font-size:14px;font-weight:600;color:#0F172A;">Enviar às seguradoras</div>
                          <div style="font-size:13px;color:#64748B;margin-top:2px;">Encaminhe cada planilha para o contato correspondente</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:36px;height:36px;background:#DCFCE7;border-radius:50%;text-align:center;vertical-align:middle;font-size:16px;font-weight:700;color:#15803D;">3</td>
                        <td style="padding-left:14px;">
                          <div style="font-size:14px;font-weight:600;color:#0F172A;">Consolidar e apresentar ao cliente</div>
                          <div style="font-size:13px;color:#64748B;margin-top:2px;">Prazo alvo: 5 dias úteis para entrega do comparativo</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#0A1628;border-radius:0 0 12px 12px;padding:20px 40px;text-align:center;">
              <div style="font-size:12px;color:#94A3B8;">
                <strong style="color:#7DD3FC;">Fairfield Corretora de Seguros</strong><br>
                Proteção e Inteligência Financeira · CNPJ 00.000.000/0001-00<br>
                <span style="color:#475569;font-size:11px;">Esta mensagem foi gerada automaticamente pela plataforma SENTINEL</span>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const info = await transporter.sendMail({
    from: `"SENTINEL — Fairfield Cotação" <${smtpFrom}>`,
    to: brokerEmail,
    cc: ccEmails.length > 0 ? ccEmails : undefined,
    subject: `🔔 Nova Cotação SENTINEL — ${lead.razao_social} (${tipo})`,
    html: htmlBroker,
    attachments
  });

  if (transporter._ethereal) {
    console.log('[EMAIL] Preview (broker):', nodemailer.getTestMessageUrl(info));
  } else {
    console.log(`[EMAIL] Notificação broker enviada para ${brokerEmail}${ccEmails.length ? ` + CC: ${ccEmails.join(', ')}` : ''}`);
  }

  return info;
}

// ─── Email 2: Email ao Cliente/Prospect ──────────────────────────────────────

function buildHtmlCliente(lead, prefixoTeste = false) {
  const tipo = formatarTipo(lead.tipo);
  const contatoNome = (lead.contato && lead.contato.nome) || lead.contato_nome || 'Cliente';
  const primeiroNome = contatoNome.split(' ')[0];
  const faturamento = (lead.condicoesVenda && lead.condicoesVenda.faturamento_desejado_seguro)
    || lead.faturamento_pct
    || 'Não informado';

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sua análise de Seguro de Crédito — Fairfield</title>
</head>
<body style="margin:0;padding:0;background:#F0F4F8;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F0F4F8;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:#0A1628;border-radius:12px 12px 0 0;padding:32px 40px;text-align:center;">
              <div style="font-size:11px;font-weight:700;letter-spacing:4px;color:#7DD3FC;text-transform:uppercase;margin-bottom:8px;">
                ${prefixoTeste ? '[TESTE] ' : ''}SENTINEL · Fairfield
              </div>
              <div style="font-size:26px;font-weight:700;color:#FFFFFF;margin-bottom:8px;">
                Parabéns pela sua decisão!
              </div>
              <div style="font-size:15px;color:#CBD5E1;line-height:1.5;">
                Sua solicitação de análise de Seguro de Crédito foi recebida com sucesso
              </div>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#FFFFFF;padding:36px 40px;">

              <p style="font-size:16px;color:#0F172A;margin:0 0 8px 0;">
                Prezado(a) <strong>${primeiroNome}</strong>,
              </p>
              <p style="font-size:14px;color:#475569;line-height:1.7;margin:0 0 28px 0;">
                Recebemos sua solicitação e já estamos trabalhando para você. Nossa equipe especializada
                irá analisar o seu perfil junto às principais seguradoras do mercado e preparar um
                comparativo completo e personalizado para a <strong>${lead.razao_social}</strong>.
              </p>

              <!-- Timeline -->
              <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#7DD3FC;text-transform:uppercase;margin-bottom:20px;">
                O que acontece agora
              </div>

              <!-- Step 1 -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="width:48px;vertical-align:top;padding-top:2px;">
                    <div style="width:40px;height:40px;background:#0A1628;border-radius:50%;text-align:center;line-height:40px;font-size:18px;">📋</div>
                  </td>
                  <td style="padding-left:14px;padding-bottom:16px;border-bottom:1px solid #F1F5F9;">
                    <div style="font-size:14px;font-weight:700;color:#0F172A;margin-bottom:4px;">Análise dos dados</div>
                    <div style="font-size:13px;color:#64748B;line-height:1.6;">
                      Nossa equipe revisa todas as informações fornecidas e monta o dossiê completo da empresa para cada seguradora.
                    </div>
                    <div style="font-size:12px;color:#7DD3FC;margin-top:6px;font-weight:600;">Hoje · Imediato</div>
                  </td>
                </tr>
              </table>

              <!-- Step 2 -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="width:48px;vertical-align:top;padding-top:2px;">
                    <div style="width:40px;height:40px;background:#1E3A5F;border-radius:50%;text-align:center;line-height:40px;font-size:18px;">📨</div>
                  </td>
                  <td style="padding-left:14px;padding-bottom:16px;border-bottom:1px solid #F1F5F9;">
                    <div style="font-size:14px;font-weight:700;color:#0F172A;margin-bottom:4px;">Consulta às seguradoras</div>
                    <div style="font-size:13px;color:#64748B;line-height:1.6;">
                      Enviamos as solicitações de cotação para AIG, Atradius, Coface, Euler Hermes, AVLA, CESCE e demais parceiros.
                    </div>
                    <div style="font-size:12px;color:#7DD3FC;margin-top:6px;font-weight:600;">1 a 2 dias úteis</div>
                  </td>
                </tr>
              </table>

              <!-- Step 3 -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="width:48px;vertical-align:top;padding-top:2px;">
                    <div style="width:40px;height:40px;background:#15803D;border-radius:50%;text-align:center;line-height:40px;font-size:18px;">📊</div>
                  </td>
                  <td style="padding-left:14px;">
                    <div style="font-size:14px;font-weight:700;color:#0F172A;margin-bottom:4px;">Comparativo completo</div>
                    <div style="font-size:13px;color:#64748B;line-height:1.6;">
                      Você recebe um relatório detalhado com todas as propostas, coberturas e condições para tomar a melhor decisão.
                    </div>
                    <div style="font-size:12px;color:#15803D;margin-top:6px;font-weight:600;">Em até 5 dias úteis</div>
                  </td>
                </tr>
              </table>

              <!-- Key Data Box -->
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:20px 24px;margin-bottom:24px;">
                <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#94A3B8;text-transform:uppercase;margin-bottom:14px;">
                  Resumo da sua solicitação
                </div>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:6px 0;font-size:13px;color:#64748B;width:50%;">Empresa</td>
                    <td style="padding:6px 0;font-size:13px;color:#0F172A;font-weight:600;">${lead.razao_social || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:13px;color:#64748B;">Modalidade</td>
                    <td style="padding:6px 0;font-size:13px;color:#0F172A;">${tipo}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:13px;color:#64748B;">Faturamento a segurar</td>
                    <td style="padding:6px 0;font-size:13px;color:#0F172A;">${formatarFaturamento(faturamento)}</td>
                  </tr>
                </table>
              </div>

              <!-- Prazo Banner -->
              <div style="background:#EFF6FF;border-left:4px solid #3B82F6;border-radius:0 8px 8px 0;padding:14px 20px;margin-bottom:24px;">
                <div style="font-size:14px;color:#1D4ED8;font-weight:600;">
                  Em até 5 dias úteis você receberá o comparativo completo
                </div>
                <div style="font-size:13px;color:#3B82F6;margin-top:4px;">
                  com as melhores condições disponíveis no mercado
                </div>
              </div>

              <!-- Green Banner: gratuito -->
              <div style="background:#DCFCE7;border-radius:8px;padding:14px 20px;text-align:center;margin-bottom:8px;">
                <div style="font-size:14px;color:#15803D;font-weight:700;">
                  ✅ &nbsp;Estudo totalmente gratuito — sem compromisso
                </div>
                <div style="font-size:12px;color:#16A34A;margin-top:4px;">
                  Nenhum custo, nenhuma obrigação. Só inteligência financeira a seu favor.
                </div>
              </div>

            </td>
          </tr>

          <!-- CONTACT FOOTER -->
          <tr>
            <td style="background:#F8FAFC;border:1px solid #E2E8F0;border-top:0;padding:20px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="font-size:13px;color:#64748B;line-height:1.8;">
                      <strong style="color:#0F172A;">Dúvidas? Fale conosco:</strong><br>
                      📧 <a href="mailto:contato@fairfield.com.br" style="color:#1D4ED8;">contato@fairfield.com.br</a><br>
                      📞 (11) 0000-0000<br>
                      🌐 <a href="https://www.fairfield.com.br" style="color:#1D4ED8;">www.fairfield.com.br</a>
                    </div>
                  </td>
                  <td style="text-align:right;vertical-align:middle;">
                    <div style="font-size:12px;color:#94A3B8;">
                      Atenciosamente,<br>
                      <strong style="color:#0F172A;">Equipe Fairfield</strong>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#0A1628;border-radius:0 0 12px 12px;padding:16px 40px;text-align:center;">
              <div style="font-size:12px;color:#94A3B8;">
                <strong style="color:#7DD3FC;">Fairfield Corretora de Seguros</strong><br>
                Proteção e Inteligência Financeira<br>
                <span style="color:#475569;font-size:11px;">
                  Você recebeu este e-mail porque solicitou uma análise de seguro de crédito. Para não receber mais, <a href="#" style="color:#475569;">clique aqui</a>.
                </span>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function enviarEmailCliente(lead, pdfCliente, excelCliente) {
  const transporter = await criarTransporter();
  const smtpFrom = process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@fairfield.com.br';
  const destinatario = (lead.contato && lead.contato.email) || lead.contato_email;

  if (!destinatario) {
    console.warn('[EMAIL] enviarEmailCliente: e-mail do cliente não encontrado no lead.');
    return;
  }

  const attachments = [];
  if (pdfCliente) {
    attachments.push(typeof pdfCliente === 'string'
      ? { filename: path.basename(pdfCliente), path: pdfCliente }
      : pdfCliente
    );
  }
  if (excelCliente) {
    attachments.push(typeof excelCliente === 'string'
      ? { filename: path.basename(excelCliente), path: excelCliente }
      : excelCliente
    );
  }

  const info = await transporter.sendMail({
    from: `"Fairfield Corretora de Seguros" <${smtpFrom}>`,
    to: destinatario,
    subject: `Sua análise de Seguro de Crédito está em andamento — Fairfield`,
    html: buildHtmlCliente(lead, false),
    attachments
  });

  if (transporter._ethereal) {
    console.log('[EMAIL] Preview (cliente):', nodemailer.getTestMessageUrl(info));
  } else {
    console.log(`[EMAIL] E-mail cliente enviado para ${destinatario}`);
  }

  return info;
}

async function enviarEmailTesteCliente(lead, destinatario, pdfCliente) {
  const transporter = await criarTransporter();
  const smtpFrom = process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@fairfield.com.br';

  if (!destinatario) {
    throw new Error('Destinatário é obrigatório para envio de e-mail de teste.');
  }

  const attachments = [];
  if (pdfCliente) {
    attachments.push(typeof pdfCliente === 'string'
      ? { filename: path.basename(pdfCliente), path: pdfCliente }
      : pdfCliente
    );
  }

  const info = await transporter.sendMail({
    from: `"Fairfield Corretora de Seguros" <${smtpFrom}>`,
    to: destinatario,
    subject: `[TESTE] Sua análise de Seguro de Crédito está em andamento — Fairfield`,
    html: buildHtmlCliente(lead, true),
    attachments
  });

  if (transporter._ethereal) {
    console.log('[EMAIL] Preview (teste cliente):', nodemailer.getTestMessageUrl(info));
  } else {
    console.log(`[EMAIL] E-mail TESTE enviado para ${destinatario}`);
  }

  return info;
}

module.exports = {
  criarTransporter,
  enviarNotificacaoBroker,
  enviarEmailCliente,
  enviarEmailTesteCliente
};
