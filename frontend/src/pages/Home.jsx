import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const B = import.meta.env.BASE_URL

export default function Home() {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    function handleIniciar() {
      setStarted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('sentinel-iniciar', handleIniciar)
    return () => window.removeEventListener('sentinel-iniciar', handleIniciar)
  }, [])

  useEffect(() => {
    window.dispatchEvent(new CustomEvent(started ? 'sentinel-started' : 'sentinel-reset'))
  }, [started])

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-6 sm:py-12">

      {/* ==================== ETAPA 1: ABERTURA ==================== */}
      {!started && (
        <div className="animate-fadeIn">
          {/* Hero de Boas-Vindas */}
          <div className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 mb-6 sm:mb-10 text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cobre/10 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cobre/5 rounded-full translate-y-1/2 -translate-x-1/4" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <img src={`${B}logos/sentinel.png`} alt="SENTINEL" className="h-12 w-12 sm:h-[68px] sm:w-[68px] object-contain" />
                <span className="text-[#7DD3FC] text-[10px] sm:text-xs font-bold uppercase tracking-widest">SENTINEL <span className="text-white/60">by Fairfield</span></span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
                Bem-vindo ao <span className="text-[#7DD3FC]">SENTINEL</span> — Cotações Inteligentes de Seguro de Crédito
              </h1>

              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-4 sm:mb-6">
                Nossa plataforma com inteligência artificial analisa o perfil da sua empresa e consulta simultaneamente as maiores seguradoras do mercado para encontrar a solução ideal de proteção de crédito.
              </p>

              {/* Pilares de valor */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-8">
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
                  title="IA + Inteligência de Mercado"
                  text="O SENTINEL analisa seus dados com inteligência artificial e consulta todas as seguradoras para garantir a melhor relação custo-benefício."
                />
              </div>

              {/* Por que preencher */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10">
                <h3 className="text-sm font-bold text-cobre mb-3 uppercase tracking-wide">Por que as informações do formulário são essenciais?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <InfoItem text="Cada dado preenchido permite que as seguradoras façam uma análise de risco precisa, resultando em condições mais competitivas" />
                  <InfoItem text="Com seu perfil completo, nossa equipe identifica qual seguradora tem o apetite ideal para o seu setor e porte" />
                  <InfoItem text="Formulários completos recebem propostas até 30% mais competitivas comparados a perfis incompletos" />
                  <InfoItem text="O SENTINEL gera um comparativo exclusivo entre 6 seguradoras líderes, com recomendação técnica da Fairfield" />
                </div>
              </div>
            </div>
          </div>

          {/* Nosso compromisso */}
          <div className="bg-gradient-to-r from-cobre/5 to-transparent border-l-4 border-cobre rounded-r-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cobre/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-1">Nosso compromisso com a sua empresa</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A Fairfield atua como <strong className="text-navy">consultora independente</strong> — não representamos nenhuma seguradora específica.
                  O <strong className="text-[#38BDF8]">SENTINEL</strong> é nossa plataforma proprietária que combina <strong className="text-navy">inteligência artificial</strong> com
                  décadas de experiência no mercado segurador para analisar todas as propostas com <strong className="text-navy">imparcialidade</strong> e recomendar
                  exclusivamente a solução que melhor atende às necessidades do seu negócio. Nossa tecnologia garante que sua empresa terá acesso
                  às melhores condições disponíveis, com uma análise técnica detalhada de cobertura, prêmio, franquias e serviços agregados de cada seguradora.
                </p>
              </div>
            </div>
          </div>

          {/* Seguradoras parceiras — logo abaixo do compromisso */}
          <div className="mb-8 sm:mb-10">
            <p className="text-center text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3 sm:mb-5">Seguradoras parceiras</p>
            <div className="bg-navy rounded-xl sm:rounded-2xl px-4 sm:px-6 py-5 sm:py-8">
              <div className="grid grid-cols-3 sm:flex sm:items-center sm:justify-center gap-4 sm:gap-6 md:gap-10">
                {[
                  { src: `${B}logos/aig.png`, alt: 'AIG', cls: 'h-8 sm:h-12' },
                  { src: `${B}logos/atradius.svg`, alt: 'Atradius', cls: 'h-7 sm:h-10' },
                  { src: `${B}logos/coface.png`, alt: 'Coface', cls: 'h-7 sm:h-10 brightness-0 invert' },
                  { src: `${B}logos/allianz-trade.png`, alt: 'Allianz Trade', cls: 'h-7 sm:h-11 brightness-0 invert' },
                  { src: `${B}logos/avla.svg`, alt: 'AVLA', cls: 'h-6 sm:h-9' },
                  { src: `${B}logos/cesce.svg`, alt: 'CESCE', cls: 'h-5 sm:h-8' },
                ].map((logo) => (
                  <div key={logo.alt} className="flex items-center justify-center">
                    <img src={logo.src} alt={logo.alt} className={`w-auto object-contain ${logo.cls}`} />
                  </div>
                ))}
              </div>
              <p className="text-center text-[10px] sm:text-xs text-white/50 mt-4 sm:mt-6">
                O <span className="text-[#7DD3FC] font-semibold">SENTINEL</span> consulta todas as seguradoras simultaneamente e seleciona a melhor solução para você.
              </p>
            </div>
          </div>

          {/* Botão Iniciar Agora */}
          <div className="text-center">
            <button
              onClick={() => { setStarted(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cobre to-[#D4944A] text-white px-7 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Iniciar Agora
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                Grátis
              </span>
            </button>
            <p className="text-gray-400 text-xs mt-3">Sem compromisso. Leva menos de 10 minutos.</p>
          </div>
        </div>
      )}

      {/* ==================== ETAPA 2: ESCOLHA DA OPERAÇÃO ==================== */}
      {started && (
        <div className="animate-fadeIn">
          {/* Mini header */}
          <div className="flex items-center justify-between mb-5 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={`${B}logos/sentinel.png`} alt="SENTINEL" className="h-10 w-10 sm:h-14 sm:w-14 object-contain" />
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-navy">Escolha o tipo de operação</h2>
                <p className="text-gray-400 text-xs sm:text-sm">Selecione o formulário adequado ao seu perfil</p>
              </div>
            </div>
            <button
              onClick={() => setStarted(false)}
              className="text-xs text-gray-400 hover:text-cobre transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Card Interno */}
            <Link to="/cotacao/interno" className="group card hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cobre flex flex-col p-4 sm:p-6">
              <div className="bg-navy rounded-lg p-3 sm:p-4 mb-3 sm:mb-5 flex items-center justify-center">
                <svg className="w-10 h-10 sm:w-16 sm:h-16 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v4M3 21h18M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11h.01" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-1 sm:mb-2 group-hover:text-cobre transition-colors">Crédito Interno</h3>
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
            <Link to="/cotacao/externo" className="group card hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cobre flex flex-col p-4 sm:p-6">
              <div className="bg-navy rounded-lg p-3 sm:p-4 mb-3 sm:mb-5 flex items-center justify-center">
                <svg className="w-10 h-10 sm:w-16 sm:h-16 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-1 sm:mb-2 group-hover:text-cobre transition-colors">Crédito Externo</h3>
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

          {/* Reforço de confiança na etapa 2 */}
          <div className="mt-5 sm:mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 sm:px-4 py-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs text-green-700 font-medium">100% gratuito e sem compromisso — seus dados são analisados exclusivamente para a cotação</span>
            </div>
          </div>

          {/* Aviso de Confidencialidade (NDA) */}
          <div className="mt-5 sm:mt-8 bg-gradient-to-r from-navy/5 to-navy/10 border border-navy/15 rounded-xl p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm sm:text-base font-bold text-navy mb-1">Compromisso de Confidencialidade</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                  Todas as informações fornecidas neste formulário são <strong className="text-navy">confidenciais</strong> e protegidas por cláusulas de confidencialidade.
                </p>
                <div className="space-y-2">
                  <NdaItem text="Seus dados serão utilizados exclusivamente para fins de estudo de mercado e subscrição de Seguro de Crédito" />
                  <NdaItem text="A Fairfield mantém sigilo absoluto sobre todas as informações recebidas, incluindo dados financeiros, comerciais, operacionais e lista de clientes" />
                  <NdaItem text="Nenhuma informação será compartilhada com terceiros sem sua autorização expressa, exceto com as seguradoras parceiras para fins exclusivos de cotação" />
                  <NdaItem text="Seus dados pessoais são protegidos nos termos da LGPD, com medidas técnicas e organizacionais de segurança adotadas pela Fairfield" />
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Vigência da proposta: 90 dias
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ValuePillar({ icon, title, text }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
      <div className="flex items-center gap-2 mb-1 sm:mb-2">
        <div className="text-cobre">{icon}</div>
        <h4 className="text-xs sm:text-sm font-bold text-white">{title}</h4>
      </div>
      <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed">{text}</p>
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

function NdaItem({ text }) {
  return (
    <div className="flex items-start gap-2">
      <svg className="w-3.5 h-3.5 text-navy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">{text}</p>
    </div>
  )
}
