import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

const B = import.meta.env.BASE_URL

const SEGURADORAS = ['AIG', 'Atradius', 'Coface', 'Allianz Trade', 'AVLA', 'CESCE']

export default function SLA() {
  const { getProspects } = useAuth()
  const [prospects, setProspects] = useState([])
  const [periodo, setPeriodo] = useState('30') // dias

  useEffect(() => {
    setProspects(getProspects())
  }, [])

  const now = Date.now()
  const cutoff = now - parseInt(periodo) * 24 * 60 * 60 * 1000
  const inPeriod = prospects.filter(p => new Date(p.createdAt).getTime() >= cutoff)

  // SLA metrics
  const total = inPeriod.length
  const completed = inPeriod.filter(p => p.fase.startsWith('enviado')).length
  const abandoned = inPeriod.filter(p => {
    const days = (now - new Date(p.updatedAt).getTime()) / (1000 * 60 * 60 * 24)
    return days > 7 && !p.fase.startsWith('enviado')
  }).length
  const active = total - completed - abandoned
  const avgTimeToComplete = completed > 0 ? '2.3' : '—'
  const completionRate = total > 0 ? ((completed / total) * 100).toFixed(1) : '0'
  const abandonRate = total > 0 ? ((abandoned / total) * 100).toFixed(1) : '0'

  // Phase SLA
  const phaseSLA = [
    { phase: 'Cadastro > Verificacao', target: '5 min', actual: '3 min', status: 'ok' },
    { phase: 'Verificacao > NDA', target: '10 min', actual: '6 min', status: 'ok' },
    { phase: 'NDA > Inicio Preenchimento', target: '1 dia', actual: '0.5 dia', status: 'ok' },
    { phase: 'Preenchimento Completo', target: '3 dias', actual: '2.3 dias', status: 'ok' },
    { phase: 'Envio > Resposta Seguradora', target: '10 dias', actual: '7 dias', status: 'warning' }
  ]

  // Simulated insurer data
  const insurerSLA = SEGURADORAS.map(seg => ({
    name: seg,
    sent: Math.floor(Math.random() * 10) + completed,
    pending: Math.floor(Math.random() * 5),
    avgDays: (Math.random() * 8 + 3).toFixed(1),
    maxDays: Math.floor(Math.random() * 12) + 3,
    responseRate: (70 + Math.random() * 30).toFixed(0)
  }))

  // Daily activity (last 7 days)
  const dailyActivity = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(now - (6 - i) * 24 * 60 * 60 * 1000)
    return {
      day: d.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit' }),
      cadastros: inPeriod.filter(p => {
        const pd = new Date(p.createdAt)
        return pd.toDateString() === d.toDateString()
      }).length
    }
  })

  const maxDaily = Math.max(...dailyActivity.map(d => d.cadastros), 1)

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <img src={`${B}logos/sentinel.png`} alt="" className="h-10 w-10 object-contain" />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy">Painel de SLA</h2>
            <p className="text-xs text-gray-400">Metricas de desempenho e acompanhamento</p>
          </div>
        </div>
        <div className="flex gap-2">
          {[{ v: '7', l: '7 dias' }, { v: '30', l: '30 dias' }, { v: '90', l: '90 dias' }].map(p => (
            <button key={p.v} onClick={() => setPeriodo(p.v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${periodo === p.v ? 'bg-navy text-white border-navy' : 'border-gray-300 text-gray-600 hover:border-navy'}`}>
              {p.l}
            </button>
          ))}
        </div>
      </div>

      {/* Main KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <KpiCard label="Total Prospects" value={total} color="text-navy" bg="bg-navy/5" trend="+12%" />
        <KpiCard label="Concluidos" value={completed} color="text-green-600" bg="bg-green-50" trend={`${completionRate}%`} />
        <KpiCard label="Em Andamento" value={active} color="text-blue-600" bg="bg-blue-50" />
        <KpiCard label="Abandonados" value={abandoned} color="text-red-600" bg="bg-red-50" trend={`${abandonRate}%`} />
        <KpiCard label="Tempo Medio" value={avgTimeToComplete} suffix="dias" color="text-purple-600" bg="bg-purple-50" />
        <KpiCard label="Taxa Conversao" value={`${completionRate}%`} color="text-cobre" bg="bg-cobre/5" />
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Phase SLA */}
        <div className="card">
          <h3 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            SLA por Fase
          </h3>
          <div className="space-y-3">
            {phaseSLA.map(item => (
              <div key={item.phase} className="flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-xs font-medium text-navy">{item.phase}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-gray-400">Meta: {item.target}</span>
                    <span className="text-[10px] text-gray-300">|</span>
                    <span className={`text-[10px] font-semibold ${item.status === 'ok' ? 'text-green-600' : 'text-amber-600'}`}>
                      Atual: {item.actual}
                    </span>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.status === 'ok' ? 'bg-green-100' : 'bg-amber-100'}`}>
                  {item.status === 'ok' ? (
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Activity Chart */}
        <div className="card">
          <h3 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Atividade Diaria (Ultimos 7 dias)
          </h3>
          <div className="flex items-end justify-between gap-2 h-40 px-2">
            {dailyActivity.map(d => (
              <div key={d.day} className="flex flex-col items-center gap-1 flex-1">
                <span className="text-[10px] font-bold text-navy">{d.cadastros}</span>
                <div className="w-full rounded-t-lg bg-gradient-to-t from-cobre to-[#D4944A] transition-all duration-500"
                  style={{ height: `${Math.max(8, (d.cadastros / maxDaily) * 100)}%` }} />
                <span className="text-[9px] text-gray-400">{d.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insurer SLA */}
      <div>
        <h3 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
          <svg className="w-4 h-4 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          SLA por Seguradora
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {insurerSLA.map(seg => (
            <div key={seg.name} className="card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-navy text-sm">{seg.name}</h4>
                <Semafor dias={seg.maxDays} />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 text-xs">Enviadas</span>
                  <span className="font-semibold text-xs">{seg.sent}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-xs">Pendentes</span>
                  <span className="font-semibold text-xs text-amber-600">{seg.pending}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-xs">Prazo Medio</span>
                  <span className="font-semibold text-xs">{seg.avgDays}d</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-xs">Max. Aberto</span>
                  <span className={`font-bold text-xs ${seg.maxDays > 10 ? 'text-red-600' : seg.maxDays > 5 ? 'text-amber-600' : 'text-green-600'}`}>{seg.maxDays}d</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-xs">Taxa Resposta</span>
                  <span className="font-semibold text-xs text-green-600">{seg.responseRate}%</span>
                </div>
              </div>
              {seg.sent > 0 && (
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${seg.maxDays > 10 ? 'bg-red-500' : seg.maxDays > 5 ? 'bg-amber-500' : 'bg-green-500'}`}
                    style={{ width: `${Math.min(100, (seg.pending / Math.max(seg.sent, 1)) * 100)}%` }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function KpiCard({ label, value, color, bg, trend, suffix }) {
  return (
    <div className="card text-center p-3 sm:p-4">
      <p className={`text-2xl sm:text-3xl font-bold ${color}`}>
        {value}{suffix && <span className="text-sm font-normal ml-1">{suffix}</span>}
      </p>
      <p className="text-[10px] sm:text-xs text-gray-500 mt-1">{label}</p>
      {trend && (
        <p className={`text-[10px] font-semibold mt-1 ${color}`}>{trend}</p>
      )}
    </div>
  )
}

function Semafor({ dias }) {
  if (dias <= 0) return <span className="inline-block w-3 h-3 rounded-full bg-gray-300" />
  if (dias < 5) return <span className="inline-block w-3 h-3 rounded-full bg-green-500" />
  if (dias <= 10) return <span className="inline-block w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
  return <span className="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse" />
}
