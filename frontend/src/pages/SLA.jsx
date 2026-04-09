import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const STATUS_LABELS = { aguardando_resposta: 'Aguardando', respondida: 'Respondida', em_negociacao: 'Em Negociação', proposta_emitida: 'Proposta Emitida', perdida: 'Perdida', ganha: 'Ganha' }
const STATUS_COLORS = { aguardando_resposta: 'bg-yellow-100 text-yellow-800', respondida: 'bg-blue-100 text-blue-800', em_negociacao: 'bg-purple-100 text-purple-800', proposta_emitida: 'bg-cyan-100 text-cyan-800', perdida: 'bg-red-100 text-red-800', ganha: 'bg-green-100 text-green-800' }

function Semafor({ dias }) {
  if (dias <= 0) return <span className="inline-block w-3 h-3 rounded-full bg-gray-300" />
  if (dias < 5) return <span className="inline-block w-3 h-3 rounded-full bg-green-500" />
  if (dias <= 10) return <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
  return <span className="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse" />
}

export default function SLA() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [filtro, setFiltro] = useState('')

  async function fetchDashboard() {
    try {
      const url = filtro ? `/api/sla/dashboard?tipo=${filtro}` : '/api/sla/dashboard'
      const res = await fetch(url)
      const json = await res.json()
      if (json.sucesso) setData(json.data)
    } catch { toast.error('Erro ao carregar dashboard') }
    finally { setLoading(false) }
  }

  useEffect(() => { setLoading(true); fetchDashboard() }, [filtro])

  if (loading) return <div className="flex items-center justify-center py-20"><svg className="animate-spin h-8 w-8 text-cobre" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg></div>
  if (!data) return null

  const { pipeline, slaPorSeguradora, resumo } = data

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-navy">Painel de SLA e Acompanhamento</h2>
        <div className="flex gap-2">
          {['', 'interno', 'externo'].map(f => (
            <button key={f} onClick={() => setFiltro(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${filtro === f ? 'bg-navy text-white border-navy' : 'border-gray-300 text-gray-600 hover:border-navy'}`}>
              {f === '' ? 'Todos' : f === 'interno' ? 'Interno' : 'Externo'}
            </button>
          ))}
        </div>
      </div>

      {/* Resumo */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div className="card text-center"><p className="text-3xl font-bold text-navy">{resumo.total_leads}</p><p className="text-xs text-gray-500 mt-1">Leads</p></div>
        <div className="card text-center"><p className="text-3xl font-bold text-navy">{resumo.total_cotacoes}</p><p className="text-xs text-gray-500 mt-1">Cotações</p></div>
        <div className="card text-center"><p className="text-3xl font-bold text-yellow-600">{resumo.aguardando}</p><p className="text-xs text-gray-500 mt-1">Aguardando</p></div>
        <div className="card text-center"><p className="text-3xl font-bold text-green-600">{resumo.ganhas}</p><p className="text-xs text-gray-500 mt-1">Ganhas</p></div>
        <div className="card text-center"><p className="text-3xl font-bold text-red-600">{resumo.perdidas}</p><p className="text-xs text-gray-500 mt-1">Perdidas</p></div>
      </div>

      {/* SLA por Seguradora */}
      <div>
        <h3 className="text-lg font-bold text-navy mb-4">SLA por Seguradora</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {slaPorSeguradora.map(seg => (
            <div key={seg.seguradora} className="card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-navy">{seg.seguradora}</h4>
                <Semafor dias={seg.max_dias_aberto} />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Total Enviadas</span><span className="font-semibold">{seg.total_enviadas}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Aguardando</span><span className="font-semibold text-yellow-600">{seg.aguardando}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Prazo Médio</span><span className="font-semibold">{seg.prazo_medio}d</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Máx. Aberto</span><span className={`font-bold ${seg.max_dias_aberto > 10 ? 'text-red-600' : seg.max_dias_aberto > 5 ? 'text-yellow-600' : 'text-green-600'}`}>{seg.max_dias_aberto}d</span></div>
              </div>
              {seg.total_enviadas > 0 && (
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${seg.max_dias_aberto > 10 ? 'bg-red-500' : seg.max_dias_aberto > 5 ? 'bg-yellow-500' : 'bg-green-500'}`}
                    style={{ width: `${Math.min(100, (seg.aguardando / Math.max(seg.total_enviadas, 1)) * 100)}%` }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline */}
      <div>
        <h3 className="text-lg font-bold text-navy mb-4">Pipeline de Leads</h3>
        {pipeline.length === 0 ? (
          <div className="card text-center py-8"><p className="text-gray-400">Nenhum lead registrado.</p></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100">
              <thead>
                <tr className="bg-navy text-white text-left text-sm">
                  <th className="px-4 py-3 rounded-tl-xl">Empresa</th>
                  <th className="px-4 py-3">Tipo</th>
                  <th className="px-4 py-3">Setor</th>
                  <th className="px-4 py-3">Fat. Seguro</th>
                  <th className="px-4 py-3">Data</th>
                  <th className="px-4 py-3">Seguradoras</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 rounded-tr-xl">Dias</th>
                </tr>
              </thead>
              <tbody>
                {pipeline.map(lead => (
                  <tr key={lead.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-navy text-sm">{lead.razao_social}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${lead.tipo === 'externo' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                        {lead.tipo === 'externo' ? 'Export' : 'Interno'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">{lead.setor}</td>
                    <td className="px-4 py-3 text-sm">{lead.faturamento_desejado_seguro || '—'}</td>
                    <td className="px-4 py-3 text-sm">{new Date(lead.created_at).toLocaleDateString('pt-BR')}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex flex-wrap gap-1">
                        {(lead.seguradoras || '').split(',').filter(Boolean).map(s => (
                          <span key={s} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">{s.trim()}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[lead.status_geral] || 'bg-gray-100 text-gray-700'}`}>
                        {STATUS_LABELS[lead.status_geral] || lead.status_geral}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Semafor dias={lead.dias_em_aberto} />
                        <span className="text-sm font-bold">{lead.dias_em_aberto}d</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
