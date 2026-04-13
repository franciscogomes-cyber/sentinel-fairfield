import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const B = import.meta.env.BASE_URL

/* ─── Animated counter ─── */
function AnimCounter({ end, suffix = '', prefix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0; const dur = 2000; const t0 = Date.now()
        const tick = () => {
          const p = Math.min((Date.now() - t0) / dur, 1)
          setVal(Math.floor(p * end))
          if (p < 1) requestAnimationFrame(tick)
        }; tick()
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end])
  return <span ref={ref}>{prefix}{val.toLocaleString('pt-BR')}{suffix}</span>
}

/* ─── Processing text cycle ─── */
function useProcessingText() {
  const texts = [
    "Analisando perfil da empresa...",
    "Consultando Coface...",
    "Consultando Atradius...",
    "Consultando AVLA...",
    "Consultando Allianz Trade...",
    "Comparando coberturas...",
    "Melhor oferta identificada!",
  ]
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setIdx(p => (p + 1) % texts.length), 2000)
    return () => clearInterval(iv)
  }, [])
  return texts[idx]
}

export default function Home() {
  const [started, setStarted] = useState(false)
  const processingText = useProcessingText()

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

  const seguradoras = [
    { src: `${B}logos/coface.png`, alt: 'Coface', invert: true },
    { src: `${B}logos/atradius.svg`, alt: 'Atradius' },
    { src: `${B}logos/avla.svg`, alt: 'AVLA' },
    { src: `${B}logos/allianz-trade.png`, alt: 'Allianz Trade', invert: true },
    { src: `${B}logos/aig.png`, alt: 'AIG' },
    { src: `${B}logos/cesce.svg`, alt: 'CESCE' },
    { src: `${B}logos/chubb.svg`, alt: 'CHUBB' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-10">

      {/* ==================== LANDING ==================== */}
      {!started && (
        <div className="animate-fadeIn">

          {/* Hero Section */}
          <section className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-navy via-navy-light to-navy p-8 sm:p-12 pb-10 mb-8">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sentinel/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cobre/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-[100px]" />
            <div className="absolute inset-0 bg-grid opacity-30" />

            <div className="relative z-10">
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-[1.05] tracking-tight text-white">
                <span className="bg-gradient-to-r from-sentinel to-sentinel-light bg-clip-text text-transparent">SENTINEL</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-white/80 mb-3 leading-snug">
                Cotacoes Inteligentes de Seguro de Credito
              </p>
              <p className="text-white/40 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                Nossa plataforma com <strong className="text-white/70">inteligencia artificial</strong> analisa o perfil da sua empresa e consulta simultaneamente as maiores seguradoras do mercado — garantindo a <strong className="text-cobre">melhor solucao de protecao de credito</strong> para o seu negocio.
              </p>

              {/* CTA */}
              <button
                onClick={() => { setStarted(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark px-8 sm:px-10 py-4 rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-sentinel/15 hover:shadow-2xl hover:shadow-sentinel/25 hover:scale-[1.02] transition-all duration-300"
              >
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Iniciar Cotacao
                <span className="absolute -top-2 -right-2 bg-accent-emerald text-navy-dark text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                  Gratis
                </span>
              </button>
              <p className="text-white/20 text-xs mt-4">Sem compromisso · Resultado em ate 5 dias uteis</p>
            </div>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              {
                val: 7, suffix: '', label: 'Seguradoras conectadas',
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              },
              {
                val: 500, suffix: '+', label: 'Empresas atendidas',
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              },
              {
                val: 98, suffix: '%', label: 'Satisfacao dos clientes',
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              },
              {
                val: 5, suffix: ' dias', label: 'Prazo de entrega',
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              },
            ].map((s) => (
              <div key={s.label} className="card text-center group hover:border-sentinel/20 transition-all">
                <div className="w-9 h-9 rounded-xl bg-sentinel/10 border border-sentinel/15 flex items-center justify-center text-sentinel mx-auto mb-3">
                  {s.icon}
                </div>
                <p className="text-2xl sm:text-3xl font-black text-white">
                  <AnimCounter end={s.val} suffix={s.suffix} />
                </p>
                <p className="text-[11px] text-white/30 mt-1">{s.label}</p>
              </div>
            ))}
          </section>

          {/* Value Pillars */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <PillarCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="100% Gratuito"
              text="O estudo de mercado SENTINEL e totalmente gratuito. Atuamos como suporte adicional a sua area de credito."
              color="emerald"
            />
            <PillarCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
              title="Decisao Estrategica"
              text="Seus dados geram um estudo de mercado completo — determinante para a estrategia de credito da sua empresa."
              color="sentinel"
            />
            <PillarCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="IA + Inteligencia de Mercado"
              text="O SENTINEL processa seu perfil com IA e cruza dados de 7 seguradoras para recomendar a melhor solucao."
              color="cobre"
            />
          </section>

          {/* How it works - Engine Flow */}
          <section className="card-glass mb-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentinel/10 border border-sentinel/20 text-sentinel text-[10px] font-bold uppercase tracking-widest mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-sentinel animate-pulse" />
                Smart Credit Engine
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Como funciona o SENTINEL</h2>
              <p className="text-white/30 text-sm mt-2">Nosso algoritmo avancado conecta-se diretamente as seguradoras de credito.</p>
            </div>

            {/* Flow diagram */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.4fr_auto_1fr] gap-4 md:gap-0 items-center">
              {/* Input */}
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-7 w-7 rounded-lg bg-sentinel/15 border border-sentinel/20 flex items-center justify-center">
                    <svg className="h-3.5 w-3.5 text-sentinel" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-white">Dados da Empresa</p>
                    <p className="text-[9px] text-white/25">Input de informacoes</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {["CNPJ / Razao Social", "Faturamento e Carteira", "Historico de Perdas", "Amostra de Compradores"].map((f) => (
                    <div key={f} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      <svg className="h-2.5 w-2.5 text-accent-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span className="text-[10px] text-white/40">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center px-2">
                <div className="w-10 h-[2px] bg-gradient-to-r from-sentinel/30 to-sentinel/50" />
                <svg className="h-3 w-3 text-sentinel/50 -ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              </div>

              {/* Engine Center */}
              <div className="rounded-xl border border-sentinel/20 bg-sentinel/[0.04] p-4 relative overflow-hidden">
                {/* Scanning line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sentinel/40 to-transparent animate-scan" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-sentinel/15 border border-sentinel/25 flex items-center justify-center relative">
                    <svg className="h-4 w-4 text-sentinel" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                    <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-accent-emerald animate-ping" style={{ animationDuration: '1.5s' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">SENTINEL AI</p>
                    <p className="text-[9px] text-white/25">Motor de Dados com IA</p>
                  </div>
                  <div className="ml-auto px-2 py-0.5 rounded-full bg-accent-emerald/15 border border-accent-emerald/25">
                    <span className="text-[8px] text-accent-emerald font-bold flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-accent-emerald animate-pulse" /> Ativo
                    </span>
                  </div>
                </div>

                {/* Console */}
                <div className="rounded-lg bg-navy-dark/60 border border-white/[0.06] p-2.5 mb-3">
                  <div className="flex items-center gap-1 mb-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400/60" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400/60" />
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald/60" />
                    <span className="text-[8px] text-white/15 ml-1.5 font-mono">sentinel-engine v1.0</span>
                  </div>
                  <p className="text-[10px] text-sentinel font-mono min-h-[14px]">{processingText}</p>
                  <div className="mt-1.5 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-sentinel to-accent-emerald animate-progress-loop" />
                  </div>
                </div>

                {/* Connected insurers */}
                <div className="grid grid-cols-4 gap-1.5">
                  {seguradoras.slice(0, 4).map((s) => (
                    <div key={s.alt} className="flex flex-col items-center gap-1 p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <img src={s.src} alt={s.alt} className={`h-5 w-5 rounded-full bg-white object-contain p-0.5 ${s.invert ? '' : ''}`} />
                      <span className="text-[7px] text-white/30">{s.alt.split(' ')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center px-2">
                <div className="w-10 h-[2px] bg-gradient-to-r from-accent-emerald/30 to-accent-emerald/50" />
                <svg className="h-3 w-3 text-accent-emerald/50 -ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              </div>

              {/* Output */}
              <div className="rounded-xl border border-accent-emerald/15 bg-accent-emerald/[0.03] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-7 w-7 rounded-lg bg-accent-emerald/15 border border-accent-emerald/20 flex items-center justify-center">
                    <svg className="h-3.5 w-3.5 text-accent-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-white">Melhor Oferta</p>
                    <p className="text-[9px] text-white/25">Resultado otimizado</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <span className="text-[9px] text-white/25 block">Comparativo</span>
                    <span className="text-xs font-bold text-accent-emerald">7 seguradoras analisadas</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="flex-1 p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      <span className="text-[8px] text-white/25 block">Prazo</span>
                      <span className="text-[11px] font-bold text-white">5 dias</span>
                    </div>
                    <div className="flex-1 p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      <span className="text-[8px] text-white/25 block">Economia</span>
                      <span className="text-[11px] font-bold text-accent-emerald">-30%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compromisso */}
          <section className="card-glass mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl bg-cobre/15 border border-cobre/25 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="text-cobre text-[10px] font-bold uppercase tracking-widest">Fairfield — Consultora Independente</p>
                <h2 className="text-xl sm:text-2xl font-black text-white">Nosso compromisso</h2>
              </div>
            </div>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-6">
              A Fairfield atua como <strong className="text-white/70">consultora 100% independente</strong> — nao representamos nenhuma seguradora. O <strong className="text-sentinel">SENTINEL</strong> e nossa plataforma proprietaria que combina <strong className="text-white/70">inteligencia artificial</strong> com decadas de experiencia no mercado segurador.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <CommitCard
                title="Imparcialidade Total"
                text="Analisamos todas as propostas sem conflito de interesse."
                color="sentinel"
              />
              <CommitCard
                title="Analise Tecnica Profunda"
                text="Comparamos cobertura, premio, franquias e servicos agregados."
                color="cobre"
              />
              <CommitCard
                title="Melhor Custo-Beneficio"
                text="Garantimos acesso as melhores condicoes do mercado."
                color="emerald"
              />
            </div>
          </section>

          {/* Seguradoras parceiras */}
          <section className="mb-8">
            <p className="text-center text-[9px] text-white/25 uppercase tracking-widest font-bold mb-4">Seguradoras parceiras conectadas</p>
            <div className="card-glass">
              <div className="grid grid-cols-4 sm:flex sm:items-center sm:justify-center gap-4 sm:gap-6">
                {seguradoras.map((logo) => (
                  <div key={logo.alt} className="flex flex-col items-center gap-2 group">
                    <div className="h-12 w-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:border-sentinel/25 group-hover:bg-sentinel/[0.06] transition-all">
                      <img src={logo.src} alt={logo.alt} className={`h-7 w-7 object-contain ${logo.invert ? 'brightness-0 invert' : ''}`} />
                    </div>
                    <span className="text-[9px] text-white/25 group-hover:text-white/50 transition-colors">{logo.alt}</span>
                  </div>
                ))}
              </div>
              <div className="section-divider mt-5" />
              <p className="text-center text-xs text-white/35 mt-4">
                O <span className="text-sentinel font-bold">SENTINEL</span> consulta todas simultaneamente e identifica a <span className="text-cobre font-bold">melhor solucao</span>.
              </p>
            </div>
          </section>

          {/* CTA Final */}
          <section className="text-center mb-6">
            <button
              onClick={() => { setStarted(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-sentinel/15 hover:shadow-2xl hover:shadow-sentinel/25 hover:scale-[1.02] transition-all duration-300"
            >
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Iniciar Cotacao Gratuita
            </button>
            <p className="text-white/15 text-xs mt-3">Sem compromisso · Leva menos de 10 minutos</p>
          </section>
        </div>
      )}

      {/* ==================== ETAPA 2: ESCOLHA DA OPERAÇÃO ==================== */}
      {started && (
        <div className="animate-fadeIn">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={`${B}logos/sentinel.png`} alt="SENTINEL" className="h-10 w-10 sm:h-12 sm:w-12 object-contain relative z-10" />
                <div className="absolute inset-0 bg-sentinel/20 rounded-full blur-md" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white">Escolha o tipo de operacao</h2>
                <p className="text-white/30 text-xs">Selecione o formulario adequado ao seu perfil</p>
              </div>
            </div>
            <button onClick={() => setStarted(false)}
              className="text-xs text-white/30 hover:text-sentinel transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Card Interno */}
            <Link to="/cotacao/interno" className="group card-glass hover:border-sentinel/30 transition-all duration-300 flex flex-col">
              <div className="rounded-xl bg-gradient-to-br from-sentinel/10 to-transparent p-4 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-sentinel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v4M3 21h18M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-1 group-hover:text-sentinel transition-colors">Credito Interno</h3>
              <p className="text-sm text-cobre font-semibold mb-3">Operacoes Nacionais (Brasil)</p>
              <p className="text-white/35 text-sm flex-1">
                Protecao para vendas a prazo no mercado brasileiro. Cobertura contra inadimplencia de compradores nacionais.
              </p>
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <ul className="text-[11px] text-white/25 space-y-1">
                  <li>• Valores em Reais (R$)</li>
                  <li>• Ate 20 compradores na amostra</li>
                  <li>• Detalhamento de perdas por faixa</li>
                </ul>
              </div>
              <div className="mt-4 btn-primary text-center text-sm">
                Iniciar Estudo de Mercado
              </div>
            </Link>

            {/* Card Externo */}
            <Link to="/cotacao/externo" className="group card-glass hover:border-cobre/30 transition-all duration-300 flex flex-col">
              <div className="rounded-xl bg-gradient-to-br from-cobre/10 to-transparent p-4 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-1 group-hover:text-cobre transition-colors">Credito Externo</h3>
              <p className="text-sm text-cobre font-semibold mb-3">Operacoes de Exportacao</p>
              <p className="text-white/35 text-sm flex-1">
                Protecao para vendas internacionais. Cobertura contra inadimplencia de importadores estrangeiros.
              </p>
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <ul className="text-[11px] text-white/25 space-y-1">
                  <li>• Valores em Dolares (US$)</li>
                  <li>• Distribuicao por continente/pais</li>
                  <li>• Ate 10 compradores na amostra</li>
                </ul>
              </div>
              <div className="mt-4 btn-accent text-center text-sm">
                Iniciar Estudo de Mercado
              </div>
            </Link>
          </div>

          {/* Reforço */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-emerald/10 border border-accent-emerald/20">
              <svg className="w-3.5 h-3.5 text-accent-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-[11px] text-accent-emerald font-medium">100% gratuito e sem compromisso — seus dados sao protegidos pela LGPD</span>
            </div>
          </div>

          {/* NDA info */}
          <div className="mt-6 card-glass">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <p className="text-cobre text-[10px] font-bold uppercase tracking-widest">Sigilo Garantido</p>
                <h4 className="text-lg font-bold text-white">Compromisso de Confidencialidade</h4>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-4">
              Todas as informacoes sao estritamente confidenciais e protegidas por contrato de sigilo. Seus dados nunca serao compartilhados alem do necessario para a cotacao.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                "Dados utilizados exclusivamente para estudo de mercado",
                "Sigilo absoluto sobre dados financeiros e comerciais",
                "Nenhuma informacao compartilhada sem autorizacao",
                "Dados pessoais protegidos nos termos da LGPD"
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <svg className="w-3.5 h-3.5 text-accent-emerald flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <p className="text-[11px] text-white/40 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-white/15 text-[10px] mt-4 pt-3 border-t border-white/[0.04]">
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Vigencia da proposta: 90 dias · SUSEP 20.2036457.1
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Sub-components ─── */
function PillarCard({ icon, title, text, color }) {
  const colors = {
    emerald: 'bg-accent-emerald/10 border-accent-emerald/20 text-accent-emerald',
    sentinel: 'bg-sentinel/10 border-sentinel/20 text-sentinel',
    cobre: 'bg-cobre/10 border-cobre/20 text-cobre',
  }
  return (
    <div className="card group hover:border-white/10 transition-all">
      <div className={`h-10 w-10 rounded-xl border flex items-center justify-center mb-3 ${colors[color]}`}>
        {icon}
      </div>
      <h4 className="text-sm font-bold text-white mb-1.5">{title}</h4>
      <p className="text-xs text-white/35 leading-relaxed">{text}</p>
    </div>
  )
}

function CommitCard({ title, text, color }) {
  const colors = {
    sentinel: 'border-sentinel/15 hover:border-sentinel/30',
    cobre: 'border-cobre/15 hover:border-cobre/30',
    emerald: 'border-accent-emerald/15 hover:border-accent-emerald/30',
  }
  return (
    <div className={`rounded-xl border bg-white/[0.02] p-4 transition-all ${colors[color]}`}>
      <h4 className="text-sm font-bold text-white mb-1.5">{title}</h4>
      <p className="text-xs text-white/30 leading-relaxed">{text}</p>
    </div>
  )
}
