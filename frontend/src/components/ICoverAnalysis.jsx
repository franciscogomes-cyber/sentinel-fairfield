import { useState, useEffect, useRef } from 'react'
import { MiniShield } from '../pages/Home'

/**
 * ══════════════════════════════════════════════════════════════
 *  iCover Analysis — Tela de Análise de Subscrição Inteligente
 *  Exibida após o preenchimento do intake, antes do sucesso
 * ══════════════════════════════════════════════════════════════
 */

// ─── Animação de Análise (Loading) ───────────────────────────
function AnalysisAnimation({ onComplete }) {
  const [phase, setPhase] = useState(0)
  const [progress, setProgress] = useState(0)
  const phases = [
    { label: 'Analisando perfil da empresa...', icon: '🏢' },
    { label: 'Avaliando histórico de crédito...', icon: '📊' },
    { label: 'Calculando taxa base do setor...', icon: '🔢' },
    { label: 'Processando fatores de ajuste...', icon: '⚙️' },
    { label: 'Aplicando bonus/malus...', icon: '📈' },
    { label: 'Definindo estrutura de cobertura...', icon: '🛡️' },
    { label: 'Ranking de seguradoras...', icon: '🏆' },
    { label: 'Gerando relatório iCover...', icon: '✨' },
  ]

  useEffect(() => {
    const totalDuration = 12000
    const phaseInterval = totalDuration / phases.length
    const progressInterval = 80

    // Progresso não-linear: começa rápido, desacelera no meio, acelera no fim
    let elapsed = 0
    const progTimer = setInterval(() => {
      elapsed += progressInterval
      const linear = elapsed / totalDuration
      // Easing: ease-in-out cubic
      const eased = linear < 0.5
        ? 4 * linear * linear * linear
        : 1 - Math.pow(-2 * linear + 2, 3) / 2
      const pct = Math.min(eased * 100, 100)
      setProgress(pct)
      if (pct >= 100) { clearInterval(progTimer); setTimeout(onComplete, 600) }
    }, progressInterval)

    const phaseTimer = setInterval(() => {
      setPhase(p => p < phases.length - 1 ? p + 1 : p)
    }, phaseInterval)

    return () => { clearInterval(progTimer); clearInterval(phaseTimer) }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 animate-fadeIn">
      {/* Shield animado — versão com contraste para fundo claro */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-navy/10 to-sentinel/10 flex items-center justify-center">
          <svg width={56} height={56} viewBox="0 0 80 80" fill="none">
            <path d="M40 12 L62 24 L62 42 C62 56 52 66 40 70 C28 66 18 56 18 42 L18 24 Z"
              fill="rgba(17,24,51,0.06)" stroke="#0c4a6e" strokeWidth="1.8">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
            </path>
            <path d="M40 20 L56 28 L56 42 C56 52 49 60 40 63 C31 60 24 52 24 42 L24 28 Z"
              fill="rgba(12,74,110,0.06)" stroke="#0c4a6e" strokeWidth="0.8" opacity="0.5" />
            <text x="40" y="48" textAnchor="middle" fill="#0c4a6e" fontSize="22" fontWeight="bold" fontFamily="Inter, sans-serif">
              $
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
            </text>
            <line x1="22" y1="40" x2="58" y2="40" stroke="#0c4a6e" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="y1" values="25;55;25" dur="3s" repeatCount="indefinite" />
              <animate attributeName="y2" values="25;55;25" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.35;0" dur="3s" repeatCount="indefinite" />
            </line>
          </svg>
        </div>
        <div className="absolute -inset-4 rounded-full border-2 border-dashed border-navy/10 animate-spin" style={{ animationDuration: '10s' }} />
      </div>

      {/* Título */}
      <h2 className="text-2xl font-black text-navy mb-2">iCover Analisando</h2>
      <p className="text-navy/40 text-sm mb-8">Motor de subscrição inteligente SENTINEL</p>

      {/* Barra de progresso */}
      <div className="w-full max-w-md mb-6">
        <div className="h-2 bg-navy/[0.06] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sentinel to-cobre rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[10px] text-navy/30 font-mono">{Math.round(progress)}%</span>
          <span className="text-[10px] text-navy/30 font-mono">iCover Engine v1.0</span>
        </div>
      </div>

      {/* Fases */}
      <div className="space-y-2 w-full max-w-md">
        {phases.map((p, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
              i < phase ? 'opacity-40' : i === phase ? 'bg-sentinel/[0.06] border border-sentinel/20' : 'opacity-20'
            }`}
          >
            <span className="text-base">{p.icon}</span>
            <span className={`text-sm ${i === phase ? 'text-navy font-semibold' : 'text-navy/50'}`}>{p.label}</span>
            {i < phase && <span className="ml-auto text-emerald-500 text-xs">✓</span>}
            {i === phase && <span className="ml-auto w-3 h-3 rounded-full bg-sentinel animate-pulse" />}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Gauge / Medidor Circular ────────────────────────────────
function ScoreGauge({ score, maxScore = 100, riskLabel, riskColor }) {
  const [animatedScore, setAnimatedScore] = useState(0)
  const pct = animatedScore / maxScore
  const circumference = 2 * Math.PI * 45
  const offset = circumference * (1 - pct)

  useEffect(() => {
    let frame
    const duration = 1500
    const start = Date.now()
    function animate() {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setAnimatedScore(Math.round(score * eased))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [score])

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-36 h-36">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="6" opacity="0.3" />
          <circle
            cx="50" cy="50" r="45" fill="none"
            stroke={riskColor} strokeWidth="6" strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-navy">{animatedScore}</span>
          <span className="text-[10px] text-navy/40 font-medium">/ {maxScore}</span>
        </div>
      </div>
      <div className="mt-2 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: riskColor + '20', color: riskColor }}>
        {riskLabel}
      </div>
    </div>
  )
}

// ─── Score Bar Individual ────────────────────────────────────
function ScoreBar({ label, value, max, delay = 0 }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setWidth((value / max) * 100), 200 + delay)
    return () => clearTimeout(timer)
  }, [value, max, delay])

  const color = width >= 70 ? '#34D399' : width >= 40 ? '#FCD34D' : '#FB923C'

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-navy/50 w-40 text-right flex-shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-navy/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-xs font-bold text-navy/70 w-10">{value}/{max}</span>
    </div>
  )
}

// ─── Card de Seguradora ──────────────────────────────────────
function InsurerCard({ insurer, rank }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
      rank === 0 ? 'bg-sentinel/[0.04] border-sentinel/20' : 'bg-white border-gray-100'
    }`}>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black ${
        rank === 0 ? 'bg-sentinel/15 text-sentinel' : rank === 1 ? 'bg-cobre/10 text-cobre' : 'bg-gray-100 text-navy/40'
      }`}>
        {rank + 1}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-navy truncate">{insurer.name}</p>
        <p className="text-[10px] text-navy/40 truncate">{insurer.strengths[0]}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <span className="text-xs font-bold text-navy/60">{insurer.score}%</span>
        <p className="text-[10px] text-navy/30">aderência</p>
      </div>
    </div>
  )
}

// ─── Componente Principal: Resultados ────────────────────────
function AnalysisResults({ analysis, onAccept, onDecline, tipo }) {
  const [showDetails, setShowDetails] = useState(false)
  const symbol = analysis.metrics.symbol

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentinel/[0.08] border border-sentinel/20 mb-3">
          <MiniShield size={16} />
          <span className="text-[10px] font-bold text-sentinel uppercase tracking-wider">iCover — Análise de Subscrição</span>
        </div>
        <h2 className="text-2xl font-black text-navy">{analysis.empresa}</h2>
        <p className="text-sm text-navy/40">{analysis.setor} · CNPJ {analysis.cnpj}</p>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Score */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col items-center">
          <h3 className="text-xs font-bold text-navy/40 uppercase tracking-wider mb-4">Score de Risco</h3>
          <ScoreGauge
            score={analysis.score}
            maxScore={analysis.scoreMax}
            riskLabel={analysis.riskLabel}
            riskColor={analysis.riskColor}
          />
        </div>

        {/* Prêmio Estimado */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xs font-bold text-navy/40 uppercase tracking-wider mb-4">Prêmio Estimado Anual</h3>
          <div className="text-center mb-4">
            <p className="text-3xl font-black text-navy">{analysis.premium.estimatedFormatted}</p>
            <p className="text-xs text-navy/40 mt-1">≈ {analysis.premium.monthlyFormatted}/mês</p>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-navy/50">
              <span>Prêmio mínimo</span>
              <span className="font-semibold text-navy/70">{analysis.premium.minimumFormatted}</span>
            </div>
            <div className="flex justify-between text-navy/50">
              <span>Prêmio máximo</span>
              <span className="font-semibold text-navy/70">{analysis.premium.maximumFormatted}</span>
            </div>
            <div className="flex justify-between text-navy/50">
              <span>Taxa aplicada</span>
              <span className="font-semibold text-navy/70">{analysis.pricing.adjustedRatePct}</span>
            </div>
            {analysis.bonusMalus.type !== 'neutro' && (
              <div className={`flex justify-between ${analysis.bonusMalus.type === 'bonus' ? 'text-emerald-600' : 'text-orange-500'}`}>
                <span>{analysis.bonusMalus.type === 'bonus' ? 'Bônus' : 'Malus'}</span>
                <span className="font-bold">{analysis.bonusMalus.pct > 0 ? '+' : ''}{analysis.bonusMalus.pct}%</span>
              </div>
            )}
          </div>
        </div>

        {/* Cobertura Recomendada */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xs font-bold text-navy/40 uppercase tracking-wider mb-4">Cobertura Recomendada</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-bold text-sentinel">{analysis.coverage.structureLabel}</p>
              <p className="text-[10px] text-navy/40 mt-0.5 leading-relaxed">{analysis.coverage.structureReason}</p>
            </div>
            <div className="h-px bg-gray-100" />
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-navy/40">PMI</p>
                <p className="font-bold text-navy">{analysis.coverage.pmiPct}</p>
              </div>
              <div>
                <p className="text-navy/40">POS</p>
                <p className="font-bold text-navy">{analysis.coverage.posPct}</p>
              </div>
              <div>
                <p className="text-navy/40">Prazo máx. crédito</p>
                <p className="font-bold text-navy">{analysis.coverage.maxCreditPeriod} dias</p>
              </div>
              <div>
                <p className="text-navy/40">Mora prolongada</p>
                <p className="font-bold text-navy">{analysis.coverage.waitingPeriod} dias</p>
              </div>
              <div>
                <p className="text-navy/40">Limite discricionário</p>
                <p className="font-bold text-navy">{analysis.coverage.discretionaryLimitFormatted}</p>
              </div>
              <div>
                <p className="text-navy/40">Limite agregado</p>
                <p className="font-bold text-navy">{analysis.coverage.aggregateLimitFormatted}</p>
              </div>
            </div>
            {analysis.coverage.aad > 0 && (
              <>
                <div className="h-px bg-gray-100" />
                <p className="text-[10px] text-navy/40">{analysis.coverage.aadLabel}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Detalhamento do Score */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-xs font-bold text-navy/40 uppercase tracking-wider">Análise Detalhada por Dimensão</h3>
          <svg className={`w-4 h-4 text-navy/30 transition-transform ${showDetails ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showDetails && (
          <div className="mt-4 space-y-3">
            {Object.entries(analysis.scores).map(([key, s], i) => (
              <ScoreBar key={key} label={s.label} value={s.value} max={s.max} delay={i * 100} />
            ))}
            <div className="h-px bg-gray-100 my-3" />
            <h4 className="text-xs font-bold text-navy/40 uppercase tracking-wider">Fatores de Ajuste da Taxa</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {Object.entries(analysis.pricing.factors).map(([key, f]) => (
                <div key={key} className="flex items-center justify-between text-xs p-2 rounded-lg bg-gray-50">
                  <span className="text-navy/50">{f.label}</span>
                  <span className={`font-bold ${f.value < 1 ? 'text-emerald-600' : f.value > 1 ? 'text-orange-500' : 'text-navy/60'}`}>
                    {f.value < 1 ? '↓' : f.value > 1 ? '↑' : '='} {f.value.toFixed(2)}x
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Ranking de Seguradoras */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8">
        <h3 className="text-xs font-bold text-navy/40 uppercase tracking-wider mb-4">Ranking de Seguradoras por Aderência ao Perfil</h3>
        <div className="space-y-2">
          {analysis.insurers.slice(0, 5).map((ins, i) => (
            <InsurerCard key={ins.name} insurer={ins} rank={i} />
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-navy/[0.03] rounded-xl p-4 mb-6 border border-navy/[0.06]">
        <p className="text-[10px] text-navy/40 leading-relaxed">
          <strong className="text-navy/60">Importante:</strong> Esta análise é uma estimativa gerada pelo motor de subscrição iCover com base nos dados informados.
          Os valores e condições apresentados são indicativos e podem variar na cotação real junto às seguradoras.
          A Fairfield atua como consultoria 100% independente — não representamos nenhuma seguradora.
          Os prêmios e condições definitivos serão definidos pelas seguradoras após análise formal da proposta.
        </p>
      </div>

      {/* Ações */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onAccept}
          className="px-8 py-4 bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark rounded-2xl font-bold text-base shadow-lg shadow-sentinel/15 hover:shadow-xl hover:shadow-sentinel/25 hover:scale-[1.02] transition-all"
        >
          ✓ Aceitar e Prosseguir com Cotação
        </button>
        <button
          onClick={onDecline}
          className="px-8 py-4 border border-navy/10 text-navy/50 rounded-2xl font-semibold text-sm hover:bg-navy/[0.03] transition-all"
        >
          Analisar meu Score de Crédito →
        </button>
      </div>

      {/* Footer */}
      <p className="text-center text-[10px] text-navy/25 mt-4">
        Powered by <span className="font-bold text-sentinel/50">SENTINEL</span> iCover Engine v1.0 · Fairfield Corretora de Seguros · SUSEP 20.2036457.1
      </p>
    </div>
  )
}

// ─── Componente Wrapper ──────────────────────────────────────
export default function ICoverAnalysis({ formData, tipo, onComplete, onDecline }) {
  const [phase, setPhase] = useState('analyzing') // analyzing | results
  const [analysis, setAnalysis] = useState(null)
  const analysisRef = useRef(null)
  const animationDoneRef = useRef(false)

  useEffect(() => {
    async function runAnalysis() {
      try {
        const body = { tipo, ...formData, seguradoras: [] }

        try {
          const { apiFetch } = await import('../config')
          const result = await apiFetch('/api/underwriting/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })
          analysisRef.current = result
          setAnalysis(result)
        } catch {
          console.warn('API indisponível, usando análise client-side')
          const basicAnalysis = createBasicAnalysis(body)
          analysisRef.current = basicAnalysis
          setAnalysis(basicAnalysis)
        }
      } catch (err) {
        console.error('Erro na análise iCover:', err)
      }

      // Se a animação já terminou quando a análise ficou pronta, avançar
      if (animationDoneRef.current) {
        setPhase('results')
      }
    }
    runAnalysis()
  }, [])

  function handleAnalysisComplete() {
    animationDoneRef.current = true
    if (analysisRef.current) {
      setPhase('results')
    }
    // Se a análise ainda não chegou, o useEffect acima cuidará da transição
  }

  function handleAccept() {
    onComplete(analysis)
  }

  function handleDecline() {
    if (onDecline) onDecline()
    else window.open('https://www.4score.com.br', '_blank')
  }

  if (phase === 'analyzing') {
    return <AnalysisAnimation onComplete={handleAnalysisComplete} />
  }

  if (analysis) {
    return <AnalysisResults analysis={analysis} onAccept={handleAccept} onDecline={handleDecline} tipo={tipo} />
  }

  return <AnalysisAnimation onComplete={handleAnalysisComplete} />
}

// ─── Análise Básica (fallback sem API) ───────────────────────
function createBasicAnalysis(data) {
  const tipo = data.tipo || 'interno'
  const symbol = tipo === 'externo' ? 'US$' : 'R$'

  const historico = data.historicoFaturamento || []
  const fats = historico.map(h => parseFloat(String(h.faturamento || '0').replace(/[^\d.,]/g, '').replace(',', '.')) || 0)
  const perds = historico.map(h => parseFloat(String(h.perdas || '0').replace(/[^\d.,]/g, '').replace(',', '.')) || 0)
  const revenue = fats.length > 0 ? fats[fats.length - 1] : 0
  const mult = tipo === 'interno' ? 1000 : 1
  const adjRevenue = revenue * mult

  const totalFat = fats.reduce((a, b) => a + b, 0)
  const totalPer = perds.reduce((a, b) => a + b, 0)
  const avgLR = totalFat > 0 ? totalPer / totalFat : 0

  const cv = data.condicoesVenda || {}
  const pctPrazo = parseFloat(cv.pct_prazo || '80') / 100
  const prazoMedio = parseInt(cv.prazo_medio_dias || '60') || 60
  const fatDesejado = parseFloat(String(cv.faturamento_desejado_seguro || '0').replace(/[^\d.,]/g, '').replace(',', '.')) || 0
  const fatSeg = fatDesejado > 0 ? fatDesejado * mult : adjRevenue * pctPrazo

  const baseRate = 0.0020
  const adjustedRate = baseRate * (avgLR === 0 ? 0.85 : avgLR < 0.05 ? 0.95 : avgLR < 0.15 ? 1.10 : 1.40)
  const premium = Math.max(fatSeg * adjustedRate, 15000)

  const score = avgLR === 0 ? 78 : avgLR < 0.05 ? 70 : avgLR < 0.15 ? 55 : 40

  const fmt = v => `${symbol} ${Math.round(v).toLocaleString('pt-BR')}`

  return {
    tipo, empresa: data.proponente?.razao_social || 'Empresa', cnpj: data.proponente?.cnpj || '',
    setor: data.proponente?.setor || 'Não identificado', setorRisco: 'medium',
    score, scoreMax: 100, riskClass: score >= 65 ? 'standard' : 'substandard',
    riskLabel: score >= 65 ? 'Risco Padrão' : 'Risco Subpadrão',
    riskColor: score >= 65 ? '#7DD3FC' : '#FCD34D',
    scores: {
      revenue: { value: 9, max: 15, label: 'Porte da Empresa' },
      lossRatio: { value: avgLR === 0 ? 25 : 15, max: 25, label: 'Histórico de Perdas' },
      concentration: { value: 12, max: 20, label: 'Concentração de Compradores' },
      paymentTerms: { value: 9, max: 15, label: 'Prazo Médio de Crédito' },
      sector: { value: 7, max: 10, label: 'Risco do Setor' },
      geography: { value: 3, max: 5, label: 'Diversificação Geográfica' },
      portfolio: { value: 7, max: 10, label: 'Qualidade da Carteira' },
    },
    metrics: { faturamentoAnual: adjRevenue, faturamentoSeguravel: fatSeg, pctPrazo, prazoMedio, prazoMaximo: 90, avgLossRatio: avgLR, topBuyerPct: 0.15, top5Pct: 0.45, numBuyers: 10, atrasosRatio: 0, currency: tipo === 'externo' ? 'USD' : 'BRL', symbol },
    pricing: { baseRate, adjustedRate, baseRatePct: (baseRate * 100).toFixed(3) + '%', adjustedRatePct: (adjustedRate * 100).toFixed(3) + '%', factors: { setor: { value: 1.0, label: 'Setor' }, sinistralidade: { value: avgLR === 0 ? 0.85 : 1.0, label: 'Sinistralidade' } } },
    premium: { estimated: Math.round(premium), minimum: Math.round(premium * 0.7), maximum: Math.round(premium * 1.3), monthly: Math.round(premium / 12), estimatedFormatted: fmt(premium), minimumFormatted: fmt(premium * 0.7), maximumFormatted: fmt(premium * 1.3), monthlyFormatted: fmt(premium / 12) },
    bonusMalus: { factor: 1, type: avgLR === 0 ? 'bonus' : 'neutro', label: avgLR === 0 ? 'Bônus (sem sinistro)' : 'Neutro', pct: avgLR === 0 ? -15 : 0 },
    coverage: { structure: 'whole_turnover', structureLabel: 'Apólice Global (Whole Turnover)', structureReason: 'Estrutura recomendada com base no perfil.', pmi: 0.85, pmiPct: '85%', pos: 0.15, posPct: '15%', aad: 0, aadLabel: 'Sem franquia agregada', discretionaryLimit: 50000, discretionaryLimitFormatted: fmt(50000), maxCreditPeriod: Math.min(parseInt(cv.prazo_maximo_dias || '90') || 90, 120), aggregateLimit: Math.round(premium * 14), aggregateLimitFormatted: fmt(premium * 14), waitingPeriod: tipo === 'externo' ? 180 : 150 },
    insurers: [
      { name: 'Allianz Trade', score: 90, strengths: ['Líder global em seguro de crédito'] },
      { name: 'Coface', score: 85, strengths: ['Rating DRA proprietário'] },
      { name: 'Atradius', score: 80, strengths: ['Cobrança integrada'] },
      { name: 'AVLA', score: 78, strengths: ['Agilidade e foco em LATAM'] },
      { name: 'CESCE', score: 72, strengths: ['Expertise ibero-americana'] },
    ],
    analyzedAt: new Date().toISOString(),
  }
}
