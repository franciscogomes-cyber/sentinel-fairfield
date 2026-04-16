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

// ─── Template base SENTINEL ───────────────────────────────────────────────────
function buildSentinelEmail({ title, titleText, subtitle, content }) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title || 'SENTINEL — Fairfield'}</title>
</head>
<body style="margin:0;padding:0;background:#EEF0F3;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
    style="background:#EEF0F3;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0"
        style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;
               box-shadow:0 8px 40px rgba(10,22,40,0.12);">

        <!-- HEADER -->
        <tr>
          <td style="background:linear-gradient(145deg,#0A1628 0%,#0F2040 60%,#0A1628 100%);
                     padding:36px 40px 28px;text-align:center;">
            <!-- Badge SENTINEL -->
            <div style="display:inline-block;background:rgba(184,115,51,0.18);
                        border:1px solid rgba(184,115,51,0.5);border-radius:4px;
                        padding:3px 10px;margin-bottom:14px;">
              <span style="color:#D4944A;font-size:10px;font-weight:800;letter-spacing:3px;
                           text-transform:uppercase;">SENTINEL</span>
            </div>
            <br>
            <!-- Título e subtítulo -->
            <span style="color:#ffffff;font-size:20px;font-weight:700;
                         letter-spacing:-0.3px;">${titleText || ''}</span>
            <br>
            <span style="color:rgba(255,255,255,0.55);font-size:13px;
                         margin-top:6px;display:block;">${subtitle || ''}</span>
          </td>
        </tr>

        <!-- CONTENT -->
        <tr>
          <td style="padding:36px 40px;">
            ${content}
          </td>
        </tr>

        <!-- DIVIDER -->
        <tr>
          <td style="padding:0 40px;">
            <hr style="border:none;border-top:1px solid #E5E7EB;margin:0;">
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#F9FAFB;padding:24px 40px;text-align:center;">
            <p style="margin:0 0 4px;font-size:12px;font-weight:700;color:#0A1628;">
              Fairfield Corretora de Seguros
            </p>
            <p style="margin:0 0 12px;font-size:11px;color:#9CA3AF;">
              SUSEP 20.2036457.1 &nbsp;·&nbsp; contato@fairfield.com.br
              &nbsp;·&nbsp; <a href="https://fairfield.com.br" style="color:#B87333;text-decoration:none;">fairfield.com.br</a>
            </p>
            <p style="margin:0;font-size:10px;color:#D1D5DB;line-height:1.6;">
              Este e-mail foi gerado automaticamente pelo sistema SENTINEL.<br>
              Por favor, não responda diretamente a este e-mail.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Email OTP: Código de Verificação ────────────────────────────────────────

async function enviarCodigoVerificacao(email, nome, codigo) {
  const transporter = await criarTransporter();
  const smtpFrom = process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@fairfield.com.br';

  const content = `
<!-- Saudação -->
<p style="margin:0 0 20px;font-size:15px;color:#374151;line-height:1.6;">
  Olá, <strong style="color:#0A1628;">${nome}</strong>!
</p>
<p style="margin:0 0 28px;font-size:14px;color:#6B7280;line-height:1.6;">
  Recebemos uma solicitação de acesso ao <strong>SENTINEL</strong> —
  sistema de cotação de Seguro de Crédito da Fairfield.<br>
  Use o código abaixo para confirmar sua identidade:
</p>

<!-- Código de verificação -->
<div style="text-align:center;margin:32px 0;">
  <div style="display:inline-block;background:#0A1628;border-radius:12px;
              padding:20px 40px;">
    <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:2px;
              text-transform:uppercase;color:rgba(255,255,255,0.5);">
      Código de Acesso
    </p>
    <p style="margin:0;font-size:36px;font-weight:800;letter-spacing:0.4em;
              color:#D4944A;font-family:monospace;">
      ${codigo}
    </p>
  </div>
</div>

<!-- Avisos -->
<table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
  <tr>
    <td style="background:#FEF3C7;border-left:3px solid #F59E0B;border-radius:0 6px 6px 0;
               padding:12px 16px;">
      <p style="margin:0;font-size:12px;color:#92400E;">
        ⏱ <strong>Este código expira em 15 minutos.</strong>
        Se não conseguir a tempo, solicite um novo código.
      </p>
    </td>
  </tr>
</table>

<table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td style="background:#F1F5F9;border-radius:8px;padding:12px 16px;">
      <p style="margin:0;font-size:12px;color:#64748B;">
        🔒 Se você <strong>não solicitou</strong> este código, ignore este e-mail.
        Seus dados estão protegidos conforme a LGPD.
      </p>
    </td>
  </tr>
</table>
`;

  const html = buildSentinelEmail({
    title: `Seu código de acesso SENTINEL: ${codigo}`,
    titleText: 'Verificação de Identidade',
    subtitle: 'Código de acesso único — válido por 15 minutos',
    content
  });

  const info = await transporter.sendMail({
    from: `"SENTINEL — Fairfield" <${smtpFrom}>`,
    to: email,
    subject: `Seu código de acesso SENTINEL: ${codigo}`,
    html
  });

  if (transporter._ethereal) {
    const previewUrl = nodemailer.getTestMessageUrl(info);
    console.log('[EMAIL] Preview (OTP):', previewUrl);
    info._previewUrl = previewUrl;
  } else {
    console.log(`[EMAIL] Código OTP enviado para ${email}`);
  }

  return info;
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
      filename: typeof pdfBroker === 'string' ? path.basename(pdfBroker) : (pdfBroker.nomeArquivo || pdfBroker.filename || 'cotacao-broker.pdf'),
      path: typeof pdfBroker === 'string' ? pdfBroker : (pdfBroker.arquivo || pdfBroker.path),
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

  const content = `
<!-- Alerta de ação -->
<div style="background:#FFF7ED;border-left:4px solid #D4944A;border-radius:0 8px 8px 0;
            padding:14px 18px;margin-bottom:28px;">
  <p style="margin:0;font-size:13px;color:#92400E;font-weight:600;">
    🔔 Ação necessária: analise e envie as cotações às seguradoras
  </p>
</div>

<!-- Dados do Proponente -->
<p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:2px;
          color:#B87333;text-transform:uppercase;">Dados do Proponente</p>
<table width="100%" cellpadding="0" cellspacing="0"
  style="border-collapse:collapse;margin-bottom:28px;border:1px solid #E5E7EB;border-radius:8px;overflow:hidden;">
  <tr style="background:#F9FAFB;">
    <td style="padding:10px 14px;font-size:12px;font-weight:600;color:#6B7280;width:40%;
               border-bottom:1px solid #E5E7EB;">Empresa</td>
    <td style="padding:10px 14px;font-size:13px;color:#111827;font-weight:700;
               border-bottom:1px solid #E5E7EB;">${lead.razao_social || 'N/A'}</td>
  </tr>
  <tr>
    <td style="padding:10px 14px;font-size:12px;font-weight:600;color:#6B7280;
               border-bottom:1px solid #E5E7EB;">CNPJ</td>
    <td style="padding:10px 14px;font-size:13px;color:#111827;
               border-bottom:1px solid #E5E7EB;">${lead.cnpj || 'N/A'}</td>
  </tr>
  <tr style="background:#F9FAFB;">
    <td style="padding:10px 14px;font-size:12px;font-weight:600;color:#6B7280;
               border-bottom:1px solid #E5E7EB;">Tipo</td>
    <td style="padding:10px 14px;border-bottom:1px solid #E5E7EB;">
      <span style="background:#1E3A5F;color:#7DD3FC;font-size:11px;font-weight:700;
                   padding:2px 10px;border-radius:20px;">${tipo}</span>
    </td>
  </tr>
  <tr>
    <td style="padding:10px 14px;font-size:12px;font-weight:600;color:#6B7280;
               border-bottom:1px solid #E5E7EB;">Setor</td>
    <td style="padding:10px 14px;font-size:13px;color:#111827;
               border-bottom:1px solid #E5E7EB;">${lead.setor || 'N/A'}</td>
  </tr>
  <tr style="background:#F9FAFB;">
    <td style="padding:10px 14px;font-size:12px;font-weight:600;color:#6B7280;
               border-bottom:1px solid #E5E7EB;">Faturamento Desejado</td>
    <td style="padding:10px 14px;font-size:13px;color:#111827;font-weight:700;
               border-bottom:1px solid #E5E7EB;">${formatarFaturamento(faturamento)}</td>
  </tr>
  <tr>
    <td style="padding:10px 14px;font-size:12px;font-weight:600;color:#6B7280;">Contato</td>
    <td style="padding:10px 14px;font-size:13px;color:#111827;">
      ${contatoNome}${contatoEmail !== 'N/A' ? ` &lt;<a href="mailto:${contatoEmail}" style="color:#B87333;">${contatoEmail}</a>&gt;` : ''}${contatoTel ? ` · ${contatoTel}` : ''}
    </td>
  </tr>
</table>

<!-- Stats -->
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
  <tr>
    <td style="text-align:center;padding:16px 8px;background:#F0F9FF;border-radius:8px;">
      <div style="font-size:32px;font-weight:800;color:#0A1628;">${numCompradores}</div>
      <div style="font-size:11px;color:#6B7280;margin-top:4px;">compradores</div>
    </td>
    <td width="8px"></td>
    <td style="text-align:center;padding:16px 8px;background:#F0F9FF;border-radius:8px;">
      <div style="font-size:32px;font-weight:800;color:#0A1628;">${numCoSeguradas}</div>
      <div style="font-size:11px;color:#6B7280;margin-top:4px;">co-seguradas</div>
    </td>
    <td width="8px"></td>
    <td style="text-align:center;padding:16px 8px;background:#FFF7ED;border-radius:8px;">
      <div style="font-size:32px;font-weight:800;color:#B87333;">${numSeguradoras}</div>
      <div style="font-size:11px;color:#6B7280;margin-top:4px;">seguradoras</div>
    </td>
  </tr>
</table>

<!-- Próximos Passos -->
<p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:2px;
          color:#B87333;text-transform:uppercase;">Próximos Passos</p>

<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
  <tr>
    <td style="padding:12px 0;border-bottom:1px solid #F3F4F6;">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td style="width:36px;height:36px;background:#1E3A5F;border-radius:50%;
                     text-align:center;vertical-align:middle;font-size:14px;
                     font-weight:800;color:#7DD3FC;">1</td>
          <td style="padding-left:14px;">
            <div style="font-size:13px;font-weight:700;color:#111827;">Revisar a Ficha Técnica em anexo</div>
            <div style="font-size:12px;color:#6B7280;margin-top:2px;">Verifique todos os dados gerados pelo SENTINEL</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:12px 0;border-bottom:1px solid #F3F4F6;">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td style="width:36px;height:36px;background:#1E3A5F;border-radius:50%;
                     text-align:center;vertical-align:middle;font-size:14px;
                     font-weight:800;color:#7DD3FC;">2</td>
          <td style="padding-left:14px;">
            <div style="font-size:13px;font-weight:700;color:#111827;">Enviar às seguradoras</div>
            <div style="font-size:12px;color:#6B7280;margin-top:2px;">Encaminhe a ficha técnica para os contatos correspondentes</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:12px 0;">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td style="width:36px;height:36px;background:#14532D;border-radius:50%;
                     text-align:center;vertical-align:middle;font-size:14px;
                     font-weight:800;color:#86EFAC;">3</td>
          <td style="padding-left:14px;">
            <div style="font-size:13px;font-weight:700;color:#111827;">Consolidar e apresentar ao cliente</div>
            <div style="font-size:12px;color:#6B7280;margin-top:2px;">Prazo alvo: 5 dias úteis para entrega do comparativo</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<div style="background:#F1F5F9;border-radius:8px;padding:12px 16px;margin-top:20px;">
  <p style="margin:0;font-size:11px;color:#64748B;">
    📎 A Ficha Técnica SENTINEL e o PDF de resumo estão anexados a este e-mail.
  </p>
</div>
`;

  const html = buildSentinelEmail({
    title: `Nova Cotação SENTINEL — ${lead.razao_social}`,
    titleText: `Nova Solicitação de Cotação — ${tipo}`,
    subtitle: `${lead.razao_social} · ${new Date().toLocaleDateString('pt-BR')}`,
    content
  });

  const info = await transporter.sendMail({
    from: `"SENTINEL — Fairfield Cotação" <${smtpFrom}>`,
    to: brokerEmail,
    cc: ccEmails.length > 0 ? ccEmails : undefined,
    subject: `🔔 Nova Cotação SENTINEL — ${lead.razao_social} (${tipo})`,
    html,
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

function buildContentCliente(lead, prefixoTeste = false) {
  const tipo = formatarTipo(lead.tipo);
  const contatoNome = (lead.contato && lead.contato.nome) || lead.contato_nome || 'Cliente';
  const primeiroNome = contatoNome.split(' ')[0];
  const faturamento = (lead.condicoesVenda && lead.condicoesVenda.faturamento_desejado_seguro)
    || lead.faturamento_pct
    || 'Não informado';

  return `
${prefixoTeste ? '<div style="background:#FEF3C7;border:1px solid #F59E0B;border-radius:6px;padding:10px 16px;margin-bottom:20px;text-align:center;"><p style="margin:0;font-size:12px;color:#92400E;font-weight:700;">[EMAIL DE TESTE] Este é um envio de teste do sistema SENTINEL</p></div>' : ''}

<!-- Saudação -->
<p style="margin:0 0 16px;font-size:16px;color:#111827;">
  Prezado(a) <strong style="color:#0A1628;">${primeiroNome}</strong>,
</p>
<p style="margin:0 0 28px;font-size:14px;color:#6B7280;line-height:1.7;">
  Recebemos sua solicitação e já estamos trabalhando para você. Nossa equipe especializada
  irá analisar o seu perfil junto às principais seguradoras do mercado e preparar um
  comparativo completo e personalizado para a <strong style="color:#0A1628;">${lead.razao_social}</strong>.
</p>

<!-- Timeline -->
<p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:2px;
          color:#B87333;text-transform:uppercase;">O que acontece agora</p>

<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
  <tr>
    <td style="width:48px;vertical-align:top;padding-top:2px;">
      <div style="width:40px;height:40px;background:#0A1628;border-radius:50%;
                  text-align:center;line-height:40px;font-size:18px;">📋</div>
    </td>
    <td style="padding-left:14px;padding-bottom:16px;border-bottom:1px solid #F3F4F6;">
      <div style="font-size:13px;font-weight:700;color:#111827;margin-bottom:4px;">Análise dos dados</div>
      <div style="font-size:12px;color:#6B7280;line-height:1.6;">
        Nossa equipe revisa todas as informações e monta o dossiê completo para cada seguradora.
      </div>
      <div style="font-size:11px;color:#B87333;margin-top:6px;font-weight:700;">Hoje · Imediato</div>
    </td>
  </tr>
</table>

<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
  <tr>
    <td style="width:48px;vertical-align:top;padding-top:2px;">
      <div style="width:40px;height:40px;background:#1E3A5F;border-radius:50%;
                  text-align:center;line-height:40px;font-size:18px;">📨</div>
    </td>
    <td style="padding-left:14px;padding-bottom:16px;border-bottom:1px solid #F3F4F6;">
      <div style="font-size:13px;font-weight:700;color:#111827;margin-bottom:4px;">Consulta às seguradoras</div>
      <div style="font-size:12px;color:#6B7280;line-height:1.6;">
        Enviamos as solicitações para AIG, Atradius, Coface, Allianz Trade, AVLA, CESCE e demais parceiros.
      </div>
      <div style="font-size:11px;color:#B87333;margin-top:6px;font-weight:700;">1 a 2 dias úteis</div>
    </td>
  </tr>
</table>

<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
  <tr>
    <td style="width:48px;vertical-align:top;padding-top:2px;">
      <div style="width:40px;height:40px;background:#14532D;border-radius:50%;
                  text-align:center;line-height:40px;font-size:18px;">📊</div>
    </td>
    <td style="padding-left:14px;">
      <div style="font-size:13px;font-weight:700;color:#111827;margin-bottom:4px;">Comparativo completo</div>
      <div style="font-size:12px;color:#6B7280;line-height:1.6;">
        Você recebe um relatório detalhado com todas as propostas, coberturas e condições.
      </div>
      <div style="font-size:11px;color:#16A34A;margin-top:6px;font-weight:700;">Em até 5 dias úteis</div>
    </td>
  </tr>
</table>

<!-- Resumo -->
<div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:10px;
            padding:20px 24px;margin-bottom:20px;">
  <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:2px;
            color:#9CA3AF;text-transform:uppercase;">Resumo da Solicitação</p>
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="padding:6px 0;font-size:12px;color:#6B7280;width:50%;">Empresa</td>
      <td style="padding:6px 0;font-size:13px;color:#111827;font-weight:700;">${lead.razao_social || 'N/A'}</td>
    </tr>
    <tr>
      <td style="padding:6px 0;font-size:12px;color:#6B7280;">Modalidade</td>
      <td style="padding:6px 0;font-size:13px;color:#111827;">${tipo}</td>
    </tr>
    <tr>
      <td style="padding:6px 0;font-size:12px;color:#6B7280;">Faturamento a segurar</td>
      <td style="padding:6px 0;font-size:13px;color:#111827;">${formatarFaturamento(faturamento)}</td>
    </tr>
  </table>
</div>

<!-- Banner gratuito -->
<div style="background:#DCFCE7;border-radius:8px;padding:16px 20px;text-align:center;margin-bottom:20px;">
  <div style="font-size:14px;color:#15803D;font-weight:700;margin-bottom:4px;">
    Estudo 100% Gratuito — Sem Compromisso
  </div>
  <div style="font-size:12px;color:#16A34A;">
    Nenhum custo, nenhuma obrigação. Só inteligência financeira a seu favor.
  </div>
</div>

<!-- Contatos -->
<div style="background:#F1F5F9;border-radius:8px;padding:16px 20px;">
  <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#374151;">Dúvidas? Fale conosco:</p>
  <p style="margin:0;font-size:12px;color:#6B7280;line-height:1.8;">
    📧 <a href="mailto:contato@fairfield.com.br" style="color:#B87333;text-decoration:none;">contato@fairfield.com.br</a><br>
    🌐 <a href="https://www.fairfield.com.br" style="color:#B87333;text-decoration:none;">www.fairfield.com.br</a>
  </p>
</div>
`;
}

async function enviarEmailCliente(lead, pdfCliente, excelCliente) {
  const transporter = await criarTransporter();
  const smtpFrom = process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@fairfield.com.br';
  const destinatario = (lead.contato && lead.contato.email) || lead.contato_email;

  if (!destinatario) {
    console.warn('[EMAIL] enviarEmailCliente: e-mail do cliente não encontrado no lead.');
    return;
  }

  const contatoNome = (lead.contato && lead.contato.nome) || lead.contato_nome || 'Cliente';
  const primeiroNome = contatoNome.split(' ')[0];

  const attachments = [];
  if (pdfCliente) {
    attachments.push(typeof pdfCliente === 'string'
      ? { filename: path.basename(pdfCliente), path: pdfCliente }
      : { filename: pdfCliente.nomeArquivo || pdfCliente.filename || 'resumo-cliente.pdf', path: pdfCliente.arquivo || pdfCliente.path }
    );
  }
  if (excelCliente) {
    attachments.push(typeof excelCliente === 'string'
      ? { filename: path.basename(excelCliente), path: excelCliente }
      : { filename: excelCliente.nomeArquivo || excelCliente.filename || 'dados-cliente.xlsx', path: excelCliente.arquivo || excelCliente.path }
    );
  }

  const html = buildSentinelEmail({
    title: 'Sua análise de Seguro de Crédito — Fairfield',
    titleText: `Parabéns, ${primeiroNome}!`,
    subtitle: 'Sua solicitação foi recebida com sucesso',
    content: buildContentCliente(lead, false)
  });

  const info = await transporter.sendMail({
    from: `"Fairfield Corretora de Seguros" <${smtpFrom}>`,
    to: destinatario,
    subject: `Sua análise de Seguro de Crédito está em andamento — Fairfield`,
    html,
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

  const contatoNome = (lead.contato && lead.contato.nome) || lead.contato_nome || 'Cliente';
  const primeiroNome = contatoNome.split(' ')[0];

  const attachments = [];
  if (pdfCliente) {
    attachments.push(typeof pdfCliente === 'string'
      ? { filename: path.basename(pdfCliente), path: pdfCliente }
      : { filename: pdfCliente.nomeArquivo || pdfCliente.filename || 'resumo-cliente.pdf', path: pdfCliente.arquivo || pdfCliente.path }
    );
  }

  const html = buildSentinelEmail({
    title: '[TESTE] Sua análise de Seguro de Crédito — Fairfield',
    titleText: `[TESTE] Parabéns, ${primeiroNome}!`,
    subtitle: 'Sua solicitação foi recebida com sucesso',
    content: buildContentCliente(lead, true)
  });

  const info = await transporter.sendMail({
    from: `"Fairfield Corretora de Seguros" <${smtpFrom}>`,
    to: destinatario,
    subject: `[TESTE] Sua análise de Seguro de Crédito está em andamento — Fairfield`,
    html,
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
  enviarCodigoVerificacao,
  enviarNotificacaoBroker,
  enviarEmailCliente,
  enviarEmailTesteCliente
};
