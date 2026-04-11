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

          {/* Bloco Hero */}
          <div className="rounded-2xl overflow-hidden mb-6 sm:mb-8 border border-cobre/20 shadow-2xl">

          {/* Hero de Boas-Vindas */}
          <div className="relative overflow-hidden bg-gradient-to-br from-navy via-[#0d1f3c] to-[#0A1628] p-6 sm:p-10 pb-8 sm:pb-10 text-white">
            {/* Decorações de fundo */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-cobre/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#7DD3FC]/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-xl" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,115,51,0.08),transparent_60%)]" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#7DD3FC] animate-pulse" />
                <span className="text-[#7DD3FC] text-xs font-bold uppercase tracking-widest">Fairfield — Consultoria em Seguros de Crédito</span>
              </div>

              {/* Título principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-[1.1] tracking-tight">
                Bem-vindo ao<br />
                <span className="text-[#7DD3FC]">SENTINEL</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 mb-3 sm:mb-4 leading-snug">
                Cotações Inteligentes de Seguro de Crédito
              </p>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl mb-6 sm:mb-8">
                Nossa plataforma com <strong className="text-white/90">inteligência artificial</strong> analisa o perfil da sua empresa e consulta simultaneamente as maiores seguradoras do mercado — garantindo a <strong className="text-cobre">melhor solução de proteção de crédito</strong> para o seu negócio.
              </p>

              {/* Pilares de valor */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <ValuePillar
                  icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  title="100% Gratuito"
                  text="O estudo de mercado SENTINEL é totalmente gratuito. Atuamos como suporte adicional à sua área de crédito — mitigando riscos e destravando oportunidades para vender mais com segurança."
                />
                <ValuePillar
                  icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                  title="Decisão Estratégica"
                  text="Seus dados geram um estudo de mercado completo — determinante para a estratégia de crédito e crescimento da sua empresa."
                />
                <ValuePillar
                  icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                  title="IA + Inteligência de Mercado"
                  text="O SENTINEL processa seu perfil com IA e cruza dados de 7 seguradoras para recomendar a solução com o melhor custo-benefício."
                />
              </div>

              {/* Por que preencher */}
              <div className="bg-white/8 backdrop-blur border border-white/12 rounded-xl p-5 sm:p-7">
                <div className="flex items-center gap-2 mb-5">
                  <svg className="w-5 h-5 text-cobre flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h3 className="text-base sm:text-lg font-bold text-cobre uppercase tracking-wide">Por que as informações do formulário são essenciais?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <InfoItem text="Cada dado preenchido permite que as seguradoras façam uma análise de risco precisa, resultando em condições mais competitivas" />
                  <InfoItem text="Com seu perfil completo, nossa equipe identifica qual seguradora tem o apetite ideal para o seu setor e porte" />
                  <InfoItem text="Formulários completos recebem propostas até 30% mais competitivas comparados a perfis incompletos" />
                  <InfoItem text="O SENTINEL gera um comparativo exclusivo entre 7 seguradoras líderes, com recomendação técnica da Fairfield" />
                </div>
              </div>
            </div>
          </div>
          </div>{/* fim bloco hero */}

          {/* Botão Iniciar Agora */}
          <div className="text-center my-6 sm:my-8">
            <button
              onClick={() => { setStarted(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cobre to-[#D4944A] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
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

          {/* Nosso compromisso */}
          <div className="rounded-2xl overflow-hidden mb-6 sm:mb-8 border border-cobre/20 shadow-2xl">
          <div className="relative overflow-hidden bg-gradient-to-br from-navy via-[#0d1f3c] to-[#0A1628] p-6 sm:p-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cobre/8 rounded-full -translate-y-1/2 translate-x-1/3 blur-xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#7DD3FC]/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-cobre/20 border border-cobre/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-cobre text-xs font-bold uppercase tracking-widest mb-0.5">Fairfield — Consultora Independente</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Nosso compromisso com a sua empresa</h3>
                </div>
              </div>
              <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-6">
                A Fairfield atua como <strong className="text-white">consultora 100% independente</strong> — não representamos nenhuma seguradora. O <strong className="text-[#7DD3FC]">SENTINEL</strong> é nossa plataforma proprietária que combina <strong className="text-white">inteligência artificial</strong> com décadas de experiência no mercado segurador.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <CommitmentCard
                  icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>}
                  title="Imparcialidade Total"
                  text="Analisamos todas as propostas sem conflito de interesse, recomendando exclusivamente o que é melhor para você."
                />
                <CommitmentCard
                  icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
                  title="Análise Técnica Profunda"
                  text="Comparamos cobertura, prêmio, franquias e serviços agregados de cada seguradora com critério técnico."
                />
                <CommitmentCard
                  icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                  title="Melhor Custo-Benefício"
                  text="Garantimos que sua empresa terá acesso às melhores condições disponíveis no mercado de Seguro de Crédito."
                />
              </div>
            </div>
          </div>
          </div>{/* fim bloco compromisso */}

          {/* Seguradoras parceiras */}
          <div className="mb-8 sm:mb-10">
            <p className="text-center text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3 sm:mb-5">Seguradoras parceiras</p>
            <div className="bg-navy rounded-xl sm:rounded-2xl px-4 sm:px-6 py-5 sm:py-8">
              <div className="grid grid-cols-4 sm:flex sm:items-center sm:justify-center gap-3 sm:gap-4 md:gap-7">
                {[
                  { src: `${B}logos/coface.png`, alt: 'Coface', cls: 'h-7 sm:h-10 brightness-0 invert' },
                  { src: `${B}logos/atradius.svg`, alt: 'Atradius', cls: 'h-7 sm:h-10' },
                  { src: `${B}logos/avla.svg`, alt: 'AVLA', cls: 'h-6 sm:h-9' },
                  { src: `${B}logos/allianz-trade.png`, alt: 'Allianz Trade', cls: 'h-7 sm:h-11 brightness-0 invert' },
                  { src: `${B}logos/aig.png`, alt: 'AIG', cls: 'h-8 sm:h-12' },
                  { src: `${B}logos/cesce.svg`, alt: 'CESCE', cls: 'h-5 sm:h-8' },
                  { src: `${B}logos/chubb.svg`, alt: 'CHUBB', cls: 'h-7 sm:h-10' },
                ].map((logo) => (
                  <div key={logo.alt} className="flex items-center justify-center">
                    <img src={logo.src} alt={logo.alt} className={`w-auto object-contain ${logo.cls}`} />
                  </div>
                ))}
              </div>
              <div className="mt-4 sm:mt-5 border-t border-white/10 pt-4 text-center">
                <p className="text-sm sm:text-base font-semibold text-white">
                  O <span className="text-[#7DD3FC]">SENTINEL</span> consulta todas as seguradoras simultaneamente
                </p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  e identifica a <span className="text-cobre">melhor solução para a sua empresa</span>.
                </p>
              </div>
            </div>
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
          <div className="mt-5 sm:mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="bg-gray-50 p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-navy/10 border border-navy/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cobre text-xs font-bold uppercase tracking-widest mb-0.5">Fairfield — Sigilo Garantido</p>
                    <h4 className="text-xl sm:text-2xl font-bold text-navy">Compromisso de Confidencialidade</h4>
                  </div>
                </div>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                  Todas as informações fornecidas são <strong className="text-navy">estritamente confidenciais</strong> e protegidas por contrato de sigilo. Seus dados comerciais e financeiros nunca serão compartilhados além do estritamente necessário para a cotação.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  <NdaCard
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                    text="Seus dados serão utilizados exclusivamente para estudo de mercado e subscrição de Seguro de Crédito"
                  />
                  <NdaCard
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>}
                    text="A Fairfield mantém sigilo absoluto sobre dados financeiros, comerciais, operacionais e lista de clientes"
                  />
                  <NdaCard
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>}
                    text="Nenhuma informação é compartilhada com terceiros sem autorização expressa, exceto seguradoras para fins de cotação"
                  />
                  <NdaCard
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                    text="Dados pessoais protegidos nos termos da LGPD, com medidas técnicas e organizacionais de segurança"
                  />
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm border-t border-gray-200 pt-4">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Vigência da proposta: 90 dias · SUSEP 20.2036457.1
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
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/15 hover:border-cobre/40 transition-colors">
      <div className="flex items-center gap-3 mb-2 sm:mb-3">
        <div className="text-cobre bg-cobre/15 rounded-lg p-2">{icon}</div>
        <h4 className="text-sm sm:text-base font-bold text-white">{title}</h4>
      </div>
      <p className="text-sm sm:text-base text-white/70 leading-relaxed">{text}</p>
    </div>
  )
}

function InfoItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <svg className="w-5 h-5 text-cobre flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-sm sm:text-base text-white/75 leading-relaxed">{text}</p>
    </div>
  )
}

function CommitmentCard({ icon, title, text }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/15 hover:border-cobre/40 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-cobre bg-cobre/15 rounded-lg p-2 flex-shrink-0">{icon}</div>
        <h4 className="text-base sm:text-lg font-bold text-white">{title}</h4>
      </div>
      <p className="text-sm sm:text-base text-white/70 leading-relaxed">{text}</p>
    </div>
  )
}

function NdaCard({ icon, text }) {
  return (
    <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
      <div className="text-cobre bg-cobre/10 rounded-lg p-1.5 flex-shrink-0">{icon}</div>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{text}</p>
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
