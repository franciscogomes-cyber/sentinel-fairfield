import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">

      {/* Hero de Boas-Vindas */}
      <div className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light rounded-2xl p-8 md:p-12 mb-12 text-white">
        {/* Detalhe decorativo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cobre/10 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-cobre/5 rounded-full translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-cobre/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-cobre text-xs font-bold uppercase tracking-widest">Fairfield Consultoria em Seguros</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Bem-vindo ao seu <span className="text-cobre">Estudo de Mercado</span> em Seguro de Crédito
          </h1>

          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
            Você está a poucos minutos de receber uma análise completa e personalizada das melhores soluções de seguro de crédito disponíveis no mercado para a sua empresa.
          </p>

          {/* Pilares de valor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <ValuePillar
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="100% Gratuito"
              text="Sem custo e sem compromisso. A Fairfield é remunerada pela seguradora — você não paga nada."
            />
            <ValuePillar
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
              title="Decisão Estratégica"
              text="Os dados do formulário geram um estudo de mercado que pode ser determinante para a estratégia de crédito da sua empresa."
            />
            <ValuePillar
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Inteligência de Mercado"
              text="Consultamos todas as seguradoras simultaneamente para garantir a melhor relação custo-benefício do mercado."
            />
          </div>

          {/* Por que preencher */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <h3 className="text-sm font-bold text-cobre mb-3 uppercase tracking-wide">Por que as informações do formulário são essenciais?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <InfoItem text="Cada dado preenchido permite que as seguradoras façam uma análise de risco precisa, resultando em condições mais competitivas" />
              <InfoItem text="Com seu perfil completo, nossa equipe identifica qual seguradora tem o apetite ideal para o seu setor e porte" />
              <InfoItem text="Formulários completos recebem propostas até 30% mais competitivas comparados a perfis incompletos" />
              <InfoItem text="Você recebe um comparativo exclusivo entre 6 seguradoras líderes, com recomendação técnica da Fairfield" />
            </div>
          </div>
        </div>
      </div>

      {/* Seção: Nosso compromisso */}
      <div className="bg-gradient-to-r from-cobre/5 to-transparent border-l-4 border-cobre rounded-r-xl p-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-cobre/10 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy mb-1">Nosso compromisso com a sua empresa</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A Fairfield atua como <strong className="text-navy">consultora independente</strong> — não representamos nenhuma seguradora específica.
              Isso nos permite analisar todas as propostas com <strong className="text-navy">imparcialidade</strong> e recomendar exclusivamente a solução que melhor atende
              às necessidades do seu negócio. Nossa expertise em <strong className="text-navy">inteligência de mercado</strong> garante que sua empresa terá acesso
              às melhores condições disponíveis, com uma análise técnica detalhada de cobertura, prêmio, franquias e serviços agregados de cada seguradora.
            </p>
          </div>
        </div>
      </div>

      {/* Título da seleção */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-navy">Escolha o tipo de operação</h2>
        <p className="text-gray-400 mt-1 text-sm">Selecione o formulário adequado ao seu perfil de vendas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card Interno */}
        <Link to="/cotacao/interno" className="group card hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cobre flex flex-col">
          <div className="bg-navy rounded-lg p-4 mb-5 flex items-center justify-center">
            <svg className="w-16 h-16 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v4M3 21h18M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11h.01" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-cobre transition-colors">Crédito Interno</h3>
          <p className="text-sm text-cobre font-semibold mb-3">Operações Nacionais (Brasil)</p>
          <p className="text-gray-500 text-sm flex-1">
            Proteção para vendas a prazo no mercado brasileiro. Cobertura contra inadimplência de compradores nacionais,
            com análise de crédito e monitoramento contínuo da carteira.
          </p>
          <div className="mt-5 pt-4 border-t border-gray-100">
            <ul className="text-xs text-gray-400 space-y-1">
              <li>Valores em Reais (R$)</li>
              <li>Até 20 compradores na amostra</li>
              <li>Detalhamento de perdas por faixa e ano</li>
              <li>Abertura de vencidos acima de 180 dias</li>
            </ul>
          </div>
          <div className="mt-4 btn-primary text-center group-hover:bg-cobre">
            Iniciar Estudo de Mercado
          </div>
        </Link>

        {/* Card Externo */}
        <Link to="/cotacao/externo" className="group card hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cobre flex flex-col">
          <div className="bg-navy rounded-lg p-4 mb-5 flex items-center justify-center">
            <svg className="w-16 h-16 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-cobre transition-colors">Crédito Externo</h3>
          <p className="text-sm text-cobre font-semibold mb-3">Operações de Exportação</p>
          <p className="text-gray-500 text-sm flex-1">
            Proteção para vendas internacionais. Cobertura contra inadimplência de importadores estrangeiros,
            com inteligência de mercado e garantias para financiamentos EXIM/PROEX.
          </p>
          <div className="mt-5 pt-4 border-t border-gray-100">
            <ul className="text-xs text-gray-400 space-y-1">
              <li>Valores em Dólares (US$)</li>
              <li>Distribuição por continente/país</li>
              <li>Até 10 compradores na amostra</li>
              <li>Código fiscal e endereço dos importadores</li>
            </ul>
          </div>
          <div className="mt-4 btn-primary text-center group-hover:bg-cobre">
            Iniciar Estudo de Mercado
          </div>
        </Link>
      </div>

      {/* Rodapé com seguradoras */}
      <div className="mt-12 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">Seguradoras parceiras</p>
        <p className="text-sm text-gray-500 font-medium">
          AIG &nbsp;&bull;&nbsp; Atradius &nbsp;&bull;&nbsp; Coface &nbsp;&bull;&nbsp; Euler Hermes (Allianz Trade) &nbsp;&bull;&nbsp; AVLA &nbsp;&bull;&nbsp; CESCE
        </p>
        <p className="text-xs text-gray-400 mt-3">Todas as cotações são enviadas simultaneamente — a Fairfield seleciona a melhor para você.</p>
      </div>
    </div>
  )
}

function ValuePillar({ icon, title, text }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
      <div className="flex items-center gap-2 mb-2">
        <div className="text-cobre">{icon}</div>
        <h4 className="text-sm font-bold text-white">{title}</h4>
      </div>
      <p className="text-xs text-white/70 leading-relaxed">{text}</p>
    </div>
  )
}

function InfoItem({ text }) {
  return (
    <div className="flex items-start gap-2">
      <svg className="w-4 h-4 text-cobre flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-xs text-white/70 leading-relaxed">{text}</p>
    </div>
  )
}
