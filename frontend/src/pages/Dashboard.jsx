import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const STATUS_LABELS = { aguardando_resposta: 'Aguardando', respondida: 'Respondida', em_negociacao: 'Em Negociação', proposta_emitida: 'Proposta Emitida', perdida: 'Perdida', ganha: 'Ganha' }
const STATUS_COLORS = { aguardando_resposta: 'bg-yellow-100 text-yellow-800', respondida: 'bg-blue-100 text-blue-800', em_negociacao: 'bg-purple-100 text-purple-800', proposta_emitida: 'bg-cyan-100 text-cyan-800', perdida: 'bg-red-100 text-red-800', ganha: 'bg-green-100 text-green-800' }

export default function Dashboard() {
  const [cotacoes, setCotacoes] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [editStatus, setEditStatus] = useState('')
  const [editObs, setEditObs] = useState('')
  const [saving, setSaving] = useState(false)
  const [filtro, setFiltro] = useState('')

  async function fetchCotacoes() {
    try {
      const res = await fetch('/api/cotacoes')
      const data = await res.json()
      if (data.sucesso) setCotacoes(data.data)
    } catch { toast.error('Erro ao carregar cotações') }
    finally { setLoading(false) }
  }

  useEffect(() => { fetchCotacoes() }, [])

  async function salvarStatus(id) {
    setSaving(true)
    try {
      const res = await fetch(`/api/cotacoes/${id}/status`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: editStatus, observacao_broker: editObs })
      })
      const data = await res.json()
      if (data.sucesso) { toast.success('Status atualizado'); setEditingId(null); fetchCotacoes() }
      else toast.error(data.mensagem)
    } catch { toast.error('Erro ao atualizar') }
    finally { setSaving(false) }
  }

  const filtered = filtro ? cotacoes.filter(c => c.tipo === filtro) : cotacoes

  if (loading) return <div className="flex items-center justify-center py-20"><svg className="animate-spin h-8 w-8 text-cobre" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg></div>

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-bold text-navy">Pipeline de Cotações</h2>
          <p className="text-gray-500 text-sm">{filtered.length} cotações</p>
        </div>
        <div className="flex gap-2">
          {['', 'interno', 'externo'].map(f => (
            <button key={f} onClick={() => setFiltro(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${filtro === f ? 'bg-navy text-white border-navy' : 'border-gray-300 text-gray-600 hover:border-navy'}`}>
              {f === '' ? 'Todos' : f === 'interno' ? 'Interno' : 'Externo'}
            </button>
          ))}
          <button onClick={() => { setLoading(true); fetchCotacoes() }} className="btn-secondary text-xs py-1.5 px-3">Atualizar</button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="card text-center py-12"><p className="text-gray-400 text-lg">Nenhuma cotação registrada.</p></div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-navy text-white text-left text-sm">
                <th className="px-4 py-3 rounded-tl-xl">Empresa</th>
                <th className="px-4 py-3">Tipo</th>
                <th className="px-4 py-3">Seguradora</th>
                <th className="px-4 py-3">Setor</th>
                <th className="px-4 py-3">Data Envio</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Dias</th>
                <th className="px-4 py-3 rounded-tr-xl">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="font-semibold text-navy text-sm">{c.razao_social}</div>
                    <div className="text-xs text-gray-400">{c.cnpj}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${c.tipo === 'externo' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                      {c.tipo === 'externo' ? 'Export' : 'Interno'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">{c.seguradora}</td>
                  <td className="px-4 py-3 text-sm">{c.setor}</td>
                  <td className="px-4 py-3 text-sm">{new Date(c.data_envio).toLocaleDateString('pt-BR')}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[c.status]}`}>{STATUS_LABELS[c.status]}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-sm font-bold ${c.dias_em_aberto > 10 ? 'text-red-600' : c.dias_em_aberto > 5 ? 'text-yellow-600' : 'text-green-600'}`}>
                      {c.dias_em_aberto || 0}d
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {editingId === c.id ? (
                      <div className="space-y-2 min-w-[200px]">
                        <select className="select-field text-sm py-1.5" value={editStatus} onChange={e => setEditStatus(e.target.value)}>
                          {Object.entries(STATUS_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                        </select>
                        <input className="input-field text-sm py-1.5" placeholder="Observação..." value={editObs} onChange={e => setEditObs(e.target.value)} />
                        <div className="flex gap-1">
                          <button onClick={() => salvarStatus(c.id)} disabled={saving} className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-700 disabled:opacity-50">{saving ? '...' : 'Salvar'}</button>
                          <button onClick={() => setEditingId(null)} className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs font-medium hover:bg-gray-300">Cancelar</button>
                        </div>
                      </div>
                    ) : (
                      <button onClick={() => { setEditingId(c.id); setEditStatus(c.status); setEditObs(c.observacao_broker || '') }} className="text-cobre hover:text-cobre-dark text-sm font-medium hover:underline">Editar</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
