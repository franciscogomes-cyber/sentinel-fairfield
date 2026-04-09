# Fairfield Cotação

Plataforma web para cotação de seguro de crédito — Fairfield Corretora.

## Pré-requisitos

- **Node.js 18+** (recomendado: 20 LTS)
- npm 9+

## Instalação

```bash
npm install
```

## Configuração

Copie o arquivo de variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o `.env` com suas configurações SMTP (opcional — o sistema funciona sem e-mail configurado, apenas logando no console).

### Variáveis Disponíveis

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `SMTP_HOST` | Servidor SMTP | smtp.gmail.com |
| `SMTP_PORT` | Porta SMTP | 587 |
| `SMTP_USER` | Usuário SMTP | — |
| `SMTP_PASS` | Senha SMTP | — |
| `SMTP_FROM` | E-mail remetente | — |
| `BROKER_EMAIL` | E-mail do broker | — |
| `PORT` | Porta do backend | 3001 |

## Executando

```bash
npm run dev
```

Isso inicia simultaneamente:
- **Backend**: http://localhost:3001
- **Frontend**: http://localhost:3000

## Módulos

### 1. Portal de Intake (`/`)
Formulário wizard em 4 etapas para o prospect solicitar cotação de seguro de crédito.

### 2. Dashboard (`/dashboard`)
Pipeline de cotações com gestão de status por seguradora.

### 3. Painel de SLA (`/sla`)
Acompanhamento de SLA por seguradora com alertas visuais (semáforo).

## Stack Técnica

- **Backend**: Node.js + Express.js
- **Frontend**: React (Vite) + Tailwind CSS
- **Banco de dados**: SQLite (better-sqlite3)
- **Excel**: ExcelJS
- **E-mail**: Nodemailer
