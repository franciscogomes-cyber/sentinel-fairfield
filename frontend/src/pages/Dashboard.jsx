import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import toast from 'react-hot-toast'

const B = import.meta.env.BASE_URL

const FASE_COLORS = {
  cadastro: 'bg-gray-100 text-gray-700',
  verificado: 'bg-blue-100 text-blue-700',
  nda_aceito: 'bg-purple-100 text-purple-700',
  preenchendo_interno: 'bg-amber-100 text-amber-700',
  preenchendo_externo: 'bg-amber-100 text-amber-700',
  enviado_interno: 'bg-green-100 text-green-700',
  enviado_externo: 'bg-green-100 text-green-700'
}

const FASE_ICONS = {
  cadastro: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  verificado: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  nda_aceito: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  preenchendo_interno: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  preenchendo_externo: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  enviado_interno: 'M5 13l4 4L19 7',
  enviado_externo: 'M5 13l4 4L19 7'
}

export default function Dashboard() {
  const { getProspects, getAllUsers } = useAuth()
  const [prospects, setProspects] = useState([])
  const [filtro, setFiltro] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [view, setView] = useState('pipeline') // pipeline | kanban
  const [tab, setTab] = useState('prospects') // prospects | comerciais
  const [comerciais, setComerciais] = useState([])
  const [novoComercial, setNovoComercial] = useState({ nome: '', email: '' })
  const [loadingComercial, setLoadingComercial] = useState(false)

  useEffect(() => {
    const data = getProspects()
    setProspects(data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)))
    fetchComerciais()
  }, [])

  async function fetchComerciais() {
    try {
      const res = await fetch('/api/admin/comerciais')
      const data = await res.json()
      if (data.sucesso) setComerciais(data.data)
    } catch { /* backend may be off */ }
  }

  async function addComercial(e) {
    e.preventDefault()
    if (!novoComercial.nome || !novoComercial.email) return
    setLoadingComercial(true)
    try {
      const res = await fetch('/api/admin/comerciais', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoComercial)
      })
      const data = await res.json()
      if (data.sucesso) {
        toast.success('Comercial adicionado!')
        setNovoComercial({ nome: '', email: '' })
        fetchComerciais()
      } else {
        toast.error(data.mensagem || 'Erro ao adicionar')
      }
    } catch { toast.error('Erro de conexão') }
    finally { setLoadingComercial(false) }
  }

  async function toggleComercial(id) {
    try {
      await fetch(`/api/admin/comerciais/${id}`, { method: 'PUT' })
      fetchComerciais()
    } catch { toast.error('Erro ao atualizar') }
  }

  async function deleteComercial(id) {
    try {
      await fetch(`/api/admin/comerciais/${id}`, { method: 'DELETE' })
      toast.success('Removido')
      fetchComerciais()
    } catch { toast.error('Erro ao remover') }
  }

  // Stats
  const total = prospects.length
  const verificados = prospects.filter(p => p.fase !== 'cadastro').length
  const ndaAceitos = prospects.filter(p => !['cadastro', 'verificado'].includes(p.fase)).length
  const preenchendo = prospects.filter(p => p.fase.startsWith('preenchendo')).length
  const enviados = prospects.filter(p => p.fase.startsWith('enviado')).length
  const taxaConversao = total > 0 ? ((enviados / total) * 100).toFixed(1) : '0'

  const faseOptions = [
    { value: 'todos', label: 'Todos' },
    { value: 'cadastro', label: 'Cadastro' },
    { value: 'verificado', label: 'Verificado' },
    { value: 'nda_aceito', label: 'NDA Aceito' },
    { value: 'preenchendo', label: 'Preenchendo' },
    { value: 'enviado', label: 'Enviado' }
  ]

  const filtered = prospects.filter(p => {
    if (filtro !== 'todos') {
      if (filtro === 'preenchendo' && !p.fase.startsWith('preenchendo')) return false
      if (filtro === 'enviado' && !p.fase.startsWith('enviado')) return false
      if (!['preenchendo', 'enviado', 'todos'].includes(filtro) && p.fase !== filtro) return false
    }
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      return p.nome?.toLowerCase().includes(term) || p.empresa?.toLowerCase().includes(term) || p.email?.toLowerCase().includes(term)
    }
    return true
  })

  // Kanban columns
  const kanbanCols = [
    { key: 'cadastro', title: 'Cadastro', color: 'border-gray-300', items: prospects.filter(p => p.fase === 'cadastro') },
    { key: 'verificado', title: 'Verificado', color: 'border-blue-400', items: prospects.filter(p => p.fase === 'verificado') },
    { key: 'nda_aceito', title: 'NDA Aceito', color: 'border-purple-400', items: prospects.filter(p => p.fase === 'nda_aceito') },
    { key: 'preenchendo', title: 'Preenchendo', color: 'border-amber-400', items: prospects.filter(p => p.fase.startsWith('preenchendo')) },
    { key: 'enviado', title: 'Enviado', color: 'border-green-400', items: prospects.filter(p => p.fase.startsWith('enviado')) }
  ]

  function formatDate(d) {
    if (!d) return '—'
    return new Date(d).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })
  }

  function daysSince(d) {
    if (!d) return 0
    return Math.floor((Date.now() - new Date(d).getTime()) / (1000 * 60 * 60 * 24))
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <img src={`${B}logos/sentinel.png`} alt="" className="h-10 w-10 object-contain" />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy">Dashboard Admin</h2>
            <p className="text-xs text-gray-400">Painel de acompanhamento de prospects</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setTab('prospects')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${tab === 'prospects' ? 'bg-navy text-white border-navy' : 'border-gray-300 text-gray-600 hover:border-navy'}`}>
            Prospects
          </button>
          <button onClick={() => setTab('comerciais')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${tab === 'comerciais' ? 'bg-cobre text-white border-cobre' : 'border-gray-300 text-gray-600 hover:border-cobre'}`}>
            Comerciais {comerciais.length > 0 && <span className="ml-1 bg-white/30 rounded-full px-1">{comerciais.length}</span>}
          </button>
          {tab === 'prospects' && <>
            <button onClick={() => setView('pipeline')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${view === 'pipeline' ? 'bg-navy text-white border-navy' : 'border-gray-300 text-gray-600 hover:border-navy'}`}>Pipeline</button>
            <button onClick={() => setView('kanban')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${view === 'kanban' ? 'bg-navy text-white border-navy' : 'border-gray-300 text-gray-600 hover:border-navy'}`}>Kanban</button>
            <button onClick={() => setProspects(getProspects().sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)))} className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-300 text-gray-600 hover:border-navy transition-all">Atualizar</button>
          </>}
        </div>
      </div>

      {/* Tab: Comerciais */}
      {tab === 'comerciais' && (
        <div className="space-y-4">
          <div className="card p-5">
            <h3 className="text-sm font-bold text-navy mb-1">Comerciais Responsáveis</h3>
            <p className="text-xs text-gray-400 mb-4">Estes contatos recebem cópia (CC) de cada nova cotação submetida no SENTINEL.</p>
            <form onSubmit={addComercial} className="flex gap-2 mb-4 flex-wrap">
              <input className="input-field flex-1 min-w-[160px]" placeholder="Nome" value={novoComercial.nome} onChange={e => setNovoComercial(p => ({ ...p, nome: e.target.value }))} />
              <input className="input-field flex-1 min-w-[200px]" placeholder="E-mail" type="email" value={novoComercial.email} onChange={e => setNovoComercial(p => ({ ...p, email: e.target.value }))} />
              <button type="submit" disabled={loadingComercial} className="btn-primary px-4 py-2 text-sm whitespace-nowrap">
                {loadingComercial ? '...' : '+ Adicionar'}
              </button>
            </form>
            {comerciais.length === 0 ? (
              <p className="text-xs text-gray-400 text-center py-6">Nenhum comercial cadastrado. Adicione acima.</p>
            ) : (
              <table className="w-full text-sm">
                <thead><tr className="bg-navy text-white text-xs"><th className="px-3 py-2 text-left rounded-tl-lg">Nome</th><th className="px-3 py-2 text-left">E-mail</th><th className="px-3 py-2 text-center">Status</th><th className="px-3 py-2 rounded-tr-lg"></th></tr></thead>
                <tbody>
                  {comerciais.map(c => (
                    <tr key={c.id} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-3 py-2.5 font-medium text-navy">{c.nome}</td>
                      <td className="px-3 py-2.5 text-gray-600">{c.email}</td>
                      <td className="px-3 py-2.5 text-center">
                        <button onClick={() => toggleComercial(c.id)} className={`text-xs px-2 py-0.5 rounded-full font-semibold ${c.ativo ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                          {c.ativo ? 'Ativo' : 'Inativo'}
                        </button>
                      </td>
                      <td className="px-3 py-2.5 text-right">
                        <button onClick={() => deleteComercial(c.id)} className="text-red-400 hover:text-red-600 text-xs">Remover</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="card p-4 border border-cobre/20 bg-cobre/5">
            <p className="text-xs text-gray-600"><strong className="text-cobre">Como funciona:</strong> A cada nova cotação enviada pelo SENTINEL, o email principal (broering.gomes@gmail.com) recebe o relatório completo em PDF + planilhas Excel. Os comerciais cadastrados aqui recebem cópia automática (CC).</p>
          </div>
        </div>
      )}

      {/* Prospects Tab */}
      {tab === 'prospects' && <>
      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <KpiCard label="Total Prospects" value={total} icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" color="text-navy" bg="bg-navy/5" />
        <KpiCard label="Verificados" value={verificados} icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" color="text-blue-600" bg="bg-blue-50" />
        <KpiCard label="NDA Aceito" value={ndaAceitos} icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" color="text-purple-600" bg="bg-purple-50" />
        <KpiCard label="Preenchendo" value={preenchendo} icon="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" color="text-amber-600" bg="bg-amber-50" />
        <KpiCard label="Enviados" value={enviados} icon="M5 13l4 4L19 7" color="text-green-600" bg="bg-green-50" />
        <KpiCard label="Conversao" value={`${taxaConversao}%`} icon="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" color="text-cobre" bg="bg-cobre/5" />
      </div>

      {/* Funnel visualization */}
      <div className="card">
        <h3 className="text-sm font-bold text-navy mb-4">Funil de Conversao</h3>
        <div className="space-y-2">
          {[
            { label: 'Cadastro', count: total, color: 'bg-gray-400' },
            { label: 'Verificado', count: verificados, color: 'bg-blue-500' },
            { label: 'NDA Aceito', count: ndaAceitos, color: 'bg-purple-500' },
            { label: 'Preenchendo', count: preenchendo, color: 'bg-amber-500' },
            { label: 'Enviado', count: enviados, color: 'bg-green-500' }
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-xs text-gray-500 w-24 text-right">{item.label}</span>
              <div className="flex-1 h-7 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full transition-all duration-700 flex items-center justify-end pr-2`}
                  style={{ width: `${total > 0 ? Math.max(3, (item.count / total) * 100) : 0}%` }}>
                  {item.count > 0 && <span className="text-white text-[10px] font-bold">{item.count}</span>}
                </div>
              </div>
              <span className="text-xs font-bold text-navy w-12 text-right">
                {total > 0 ? ((item.count / total) * 100).toFixed(0) : 0}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 max-w-xs">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            className="input-field pl-9 py-2 text-sm"
            placeholder="Buscar por nome, empresa ou e-mail..."
            value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {faseOptions.map(f => (
            <button key={f.value} onClick={() => setFiltro(f.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${filtro === f.value ? 'bg-navy text-white border-navy' : 'border-gray-200 text-gray-500 hover:border-navy'}`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* View: Pipeline or Kanban */}
      {view === 'kanban' ? (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {kanbanCols.map(col => (
            <div key={col.key} className={`bg-gray-50 rounded-xl p-3 border-t-4 ${col.color}`}>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-navy">{col.title}</h4>
                <span className="text-xs font-bold bg-white rounded-full w-6 h-6 flex items-center justify-center text-navy shadow-sm">{col.items.length}</span>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {col.items.map(p => (
                  <div key={p.id} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <p className="text-xs font-bold text-navy truncate">{p.empresa}</p>
                    <p className="text-[10px] text-gray-500 truncate">{p.nome}</p>
                    <p className="text-[10px] text-gray-400 mt-1">{formatDate(p.updatedAt)}</p>
                  </div>
                ))}
                {col.items.length === 0 && (
                  <p className="text-[10px] text-gray-400 text-center py-4">Nenhum prospect</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          {filtered.length === 0 ? (
            <div className="card text-center py-12">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-400 text-sm">Nenhum prospect encontrado</p>
              <p className="text-gray-300 text-xs mt-1">Os prospects aparecerão aqui conforme acessarem o sistema</p>
            </div>
          ) : (
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100">
              <thead>
                <tr className="bg-navy text-white text-left text-xs">
                  <th className="px-4 py-3 rounded-tl-xl">Empresa</th>
                  <th className="px-4 py-3">Contato</th>
                  <th className="px-4 py-3">E-mail</th>
                  <th className="px-4 py-3">Telefone</th>
                  <th className="px-4 py-3">Fase</th>
                  <th className="px-4 py-3">Cadastro</th>
                  <th className="px-4 py-3">Atualizado</th>
                  <th className="px-4 py-3 rounded-tr-xl">Dias</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(p => (
                  <tr key={p.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="font-semibold text-navy text-sm">{p.empresa || '—'}</span>
                    </td>
                    <td className="px-4 py-3 text-sm">{p.nome}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{p.email}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{p.telefone}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${FASE_COLORS[p.fase] || 'bg-gray-100 text-gray-700'}`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={FASE_ICONS[p.fase] || FASE_ICONS.cadastro} />
                        </svg>
                        {p.faseLabel || p.fase}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">{formatDate(p.createdAt)}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{formatDate(p.updatedAt)}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-bold ${daysSince(p.createdAt) > 7 ? 'text-red-600' : daysSince(p.createdAt) > 3 ? 'text-amber-600' : 'text-green-600'}`}>
                        {daysSince(p.createdAt)}d
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
      </>}
    </div>
  )
}

function KpiCard({ label, value, icon, color, bg }) {
  return (
    <div className="card text-center p-3 sm:p-4">
      <div className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center mx-auto mb-2`}>
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
      </div>
      <p className={`text-2xl sm:text-3xl font-bold ${color}`}>{value}</p>
      <p className="text-[10px] sm:text-xs text-gray-500 mt-1">{label}</p>
    </div>
  )
}
