import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Input, Select, DynamicTable, StepNav, ProgressBar, SuccessScreen, CNPJInput, formatPhone } from '../components/FormComponents'
import { LearningTrailInterno } from '../components/LearningTrail'
import { useAuth } from '../contexts/AuthContext'

const STORAGE_KEY = 'fairfield_intake_interno'
const UFS = ['AC','AL','AM','AP','BA','CE','DF','ES','GO','MA','MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN','RO','RR','RS','SC','SE','SP','TO']
const STEPS = ['Proponente', 'Faturamento', 'Carteira', 'Perdas', 'Atrasos', 'Compradores']

const FAIXAS_CARTEIRA = ['Até 5.000', 'De 5.001 a 10.000', 'De 10.001 a 50.000', 'De 50.001 a 100.000', 'De 100.001 a 500.000', 'De 500.001 a 1.000.000', 'De 1.000.001 a 5.000.000', 'Acima de 5.000.001']
const FAIXAS_ATRASOS = ['Até 30 dias', 'Entre 31 e 120 dias', 'Entre 121 e 180 dias', 'Acima de 181 dias']

function emptyForm() {
  return {
    proponente: { razao_social: '', cnpj: '', setor: '', faturamento_pct: '', uf: '' },
    contato: { nome: '', email: '', telefone: '' },
    coSeguradas: [{ empresa: '', cnpj: '', setor: '', faturamento_pct: '' }],
    historicoFaturamento: [
      { ano: '2023', faturamento: '', perdas: '' },
      { ano: '2024', faturamento: '', perdas: '' },
      { ano: '2025', faturamento: '', perdas: '' },
      { ano: 'Próximos 12 meses', faturamento: '', perdas: '' }
    ],
    condicoesVenda: { pct_vista: '', pct_prazo: '', prazo_medio_dias: '', prazo_maximo_dias: '', faturamento_desejado_seguro: '' },
    carteiraRecebiveis: FAIXAS_CARTEIRA.map(f => ({ faixa: f, faturamento_total: '', pct_faturamento: '', num_clientes: '', pct_clientes: '' })),
    perdasPorFaixa: [],
    maioresPerdas: [{ razao_social: '', cnpj: '', exercicio: '', valor: '', motivo: '' }],
    atrasos: FAIXAS_ATRASOS.map(f => ({ faixa_dias: f, valor_atraso: '', pct_valor: '', qtd_clientes: '', pct_clientes: '' })),
    atrasosDetalhados: [{ razao_social: '', cnpj: '', data_emissao: '', data_vencimento: '', valor: '' }],
    amostraCompradores: [{ cnpj_codigo_fiscal: '', razao_social: '', faturamento_anual: '', limite_credito: '' }]
  }
}

export default function IntakeInterno() {
  const navigate = useNavigate()
  const { user, updateProspectPhase } = useAuth()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : emptyForm()
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState(null)
  const [isReview, setIsReview] = useState(false)

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(form)) }, [form])

  // Track phase
  useEffect(() => {
    if (user) updateProspectPhase(user.email, 'preenchendo_interno')
  }, [])

  function u(section, field, value) {
    setForm(prev => ({ ...prev, [section]: { ...prev[section], [field]: value } }))
    setErrors(prev => { const n = { ...prev }; delete n[`${section}.${field}`]; return n })
  }

  function uArray(section, index, field, value) {
    setForm(prev => {
      const arr = [...prev[section]]
      arr[index] = { ...arr[index], [field]: value }

      // Auto-calcular percentuais para carteira de recebíveis
      if (section === 'carteiraRecebiveis' && (field === 'faturamento_total' || field === 'num_clientes')) {
        const totalFat = arr.reduce((s, r) => s + (parseFloat(String(r.faturamento_total).replace(/\./g, '').replace(',', '.')) || 0), 0)
        const totalCli = arr.reduce((s, r) => s + (parseInt(String(r.num_clientes).replace(/\D/g, '')) || 0), 0)
        arr.forEach((r, i) => {
          const fat = parseFloat(String(r.faturamento_total).replace(/\./g, '').replace(',', '.')) || 0
          const cli = parseInt(String(r.num_clientes).replace(/\D/g, '')) || 0
          arr[i] = {
            ...arr[i],
            pct_faturamento: totalFat > 0 ? (fat / totalFat * 100).toFixed(1) : '',
            pct_clientes: totalCli > 0 ? (cli / totalCli * 100).toFixed(1) : ''
          }
        })
      }

      // Auto-calcular percentuais para atrasos
      if (section === 'atrasos' && (field === 'valor_atraso' || field === 'qtd_clientes')) {
        const totalVal = arr.reduce((s, r) => s + (parseFloat(String(r.valor_atraso).replace(/\./g, '').replace(',', '.')) || 0), 0)
        const totalCli = arr.reduce((s, r) => s + (parseInt(String(r.qtd_clientes).replace(/\D/g, '')) || 0), 0)
        arr.forEach((r, i) => {
          const val = parseFloat(String(r.valor_atraso).replace(/\./g, '').replace(',', '.')) || 0
          const cli = parseInt(String(r.qtd_clientes).replace(/\D/g, '')) || 0
          arr[i] = {
            ...arr[i],
            pct_valor: totalVal > 0 ? (val / totalVal * 100).toFixed(1) : '',
            pct_clientes: totalCli > 0 ? (cli / totalCli * 100).toFixed(1) : ''
          }
        })
      }

      return { ...prev, [section]: arr }
    })
  }

  function addRow(section, template) {
    setForm(prev => ({ ...prev, [section]: [...prev[section], { ...template }] }))
  }

  function removeRow(section, index) {
    setForm(prev => ({ ...prev, [section]: prev[section].filter((_, i) => i !== index) }))
  }

  function validate(s) {
    const errs = {}
    if (s === 0) {
      if (!form.proponente.razao_social.trim()) errs['proponente.razao_social'] = 'Obrigatório'
      if (form.proponente.cnpj.replace(/\D/g, '').length !== 14) errs['proponente.cnpj'] = 'CNPJ inválido'
      if (!form.proponente.setor.trim()) errs['proponente.setor'] = 'Obrigatório'
      if (!form.contato.nome.trim()) errs['contato.nome'] = 'Obrigatório'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contato.email)) errs['contato.email'] = 'E-mail inválido'
    } else if (s === 1) {
      if (!form.condicoesVenda.faturamento_desejado_seguro) errs['cv.fds'] = 'Informe o faturamento desejado'
    } else if (s === 5) {
      const compradores = form.amostraCompradores.filter(c => c.razao_social || c.faturamento_anual || c.limite_credito)
      if (compradores.length === 0) {
        errs['compradores'] = 'Informe pelo menos 1 comprador'
      } else {
        compradores.forEach((c, i) => {
          if (!c.cnpj_codigo_fiscal || c.cnpj_codigo_fiscal.replace(/\D/g, '').length < 11) {
            errs[`comprador_cnpj_${i}`] = `CNPJ obrigatório para o comprador ${i + 1}`
          }
        })
      }
    }
    setErrors(errs)
    if (Object.keys(errs).length > 0 && s === 5) {
      toast.error('Preencha o CNPJ de todos os compradores informados')
    }
    return Object.keys(errs).length === 0
  }

  function next() { if (validate(step)) setStep(s => Math.min(s + 1, STEPS.length - 1)) }
  function prev() { setIsReview(false); setStep(s => Math.max(s - 1, 0)) }

  async function handleSubmit(action) {
    if (action === 'review') { if (validate(step)) setIsReview(true) }
    else {
      setLoading(true)
      try {
        const body = { tipo: 'interno', ...form, seguradoras: [] }
        const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        const data = await res.json()
        if (!data.sucesso) throw new Error(data.mensagem)
        setResult(data.data)
        setSubmitted(true)
        localStorage.removeItem(STORAGE_KEY)
        if (user) updateProspectPhase(user.email, 'enviado_interno')
        toast.success('Solicitação enviada com sucesso!')
      } catch (err) { toast.error(err.message || 'Erro ao enviar') }
      finally { setLoading(false) }
    }
  }

  function handleCNPJResult(data) {
    setForm(prev => ({
      ...prev,
      proponente: { ...prev.proponente, razao_social: data.razao_social, uf: data.uf || prev.proponente.uf }
    }))
    toast.success(`Empresa: ${data.razao_social}`)
  }

  if (submitted) return <SuccessScreen result={result} tipo="interno" onReset={() => { setSubmitted(false); setStep(0); setForm(emptyForm()); setResult(null); setIsReview(false) }} />

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-navy">Crédito Interno</h2>
        <p className="text-cobre text-sm font-semibold">Operações Nacionais — Valores em R$</p>
      </div>

      {!isReview && <ProgressBar step={step} steps={STEPS} />}

      {!isReview && <LearningTrailInterno step={step} />}

      <div className="card">
        {isReview ? (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-navy border-b pb-3">Revisão dos Dados</h3>
            <Section title="Proponente">
              <p><b>Empresa:</b> {form.proponente.razao_social} | <b>CNPJ:</b> {form.proponente.cnpj}</p>
              <p><b>Setor:</b> {form.proponente.setor} | <b>UF:</b> {form.proponente.uf} | <b>Fat. %:</b> {form.proponente.faturamento_pct}</p>
              <p><b>Contato:</b> {form.contato.nome} — {form.contato.email} — {form.contato.telefone}</p>
              {form.coSeguradas.filter(c => c.empresa).length > 0 && <p><b>Co-seguradas:</b> {form.coSeguradas.filter(c => c.empresa).map(c => c.empresa).join(', ')}</p>}
            </Section>
            <Section title="Faturamento e Condições">
              {form.historicoFaturamento.map(h => <p key={h.ano}><b>{h.ano}:</b> Fat. {h.faturamento || '—'} | Perdas {h.perdas || '—'}</p>)}
              <p><b>Fat. desejado seguro:</b> R$ {form.condicoesVenda.faturamento_desejado_seguro}</p>
              <p><b>Vista:</b> {form.condicoesVenda.pct_vista}% | <b>Prazo:</b> {form.condicoesVenda.pct_prazo}% | <b>Médio:</b> {form.condicoesVenda.prazo_medio_dias}d | <b>Máx:</b> {form.condicoesVenda.prazo_maximo_dias}d</p>
            </Section>
            <Section title="Carteira">
              {form.carteiraRecebiveis.filter(c => c.faturamento_total).map(c => <p key={c.faixa}><b>{c.faixa}:</b> {c.faturamento_total} ({c.pct_faturamento}%) — {c.num_clientes} clientes</p>)}
            </Section>
            <Section title="Compradores">{form.amostraCompradores.filter(c => c.razao_social).map((c, i) => <p key={i}>{c.razao_social} — {c.cnpj_codigo_fiscal} — Lim: {c.limite_credito}</p>)}</Section>

            {/* Mensagem de confiança Fairfield */}
            <div className="bg-gradient-to-r from-navy/5 to-cobre/10 border border-cobre/20 rounded-xl p-5 mt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-cobre/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">A Fairfield cuida da melhor negociação para você</h4>
                  <p className="text-xs text-gray-600 mt-1">Ao enviar, seus dados serão analisados simultaneamente por <strong className="text-cobre">6 seguradoras líderes</strong> (AIG, Atradius, Coface, Euler Hermes, AVLA e CESCE). Nossa equipe de especialistas irá comparar todas as propostas e negociar as melhores condições de <strong>custo, cobertura e serviço</strong> para a sua empresa.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Step 0 - Proponente */}
            {step === 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-navy border-b pb-3">1. Dados do Proponente</h3>
                <CNPJInput value={form.proponente.cnpj} onChange={v => u('proponente', 'cnpj', v)} onResult={handleCNPJResult} error={errors['proponente.cnpj']} />
                <Input label="Razão Social" value={form.proponente.razao_social} onChange={v => u('proponente', 'razao_social', v)} required error={errors['proponente.razao_social']} />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Input label="Setor de Atividade" value={form.proponente.setor} onChange={v => u('proponente', 'setor', v)} required error={errors['proponente.setor']} placeholder="Atividade e produtos" />
                  <Input label="Faturamento Empresa (%)" value={form.proponente.faturamento_pct} onChange={v => u('proponente', 'faturamento_pct', v)} placeholder="100%" />
                  <Select label="UF" value={form.proponente.uf} onChange={v => u('proponente', 'uf', v)} options={UFS} />
                </div>
                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">Contato Responsável</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Input label="Nome" value={form.contato.nome} onChange={v => u('contato', 'nome', v)} required error={errors['contato.nome']} />
                  <Input label="E-mail" value={form.contato.email} onChange={v => u('contato', 'email', v)} type="email" required error={errors['contato.email']} />
                  <Input label="Telefone" value={form.contato.telefone} onChange={v => u('contato', 'telefone', formatPhone(v))} placeholder="(00) 00000-0000" />
                </div>
                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">Co-Seguradas (opcional)</h4>
                </div>
                <DynamicTable
                  columns={[
                    { key: 'empresa', label: 'Empresa', placeholder: 'Razão Social' },
                    { key: 'cnpj', label: 'CNPJ', placeholder: '00.000.000/0000-00' },
                    { key: 'setor', label: 'Setor' },
                    { key: 'faturamento_pct', label: 'Fat. %', placeholder: '%' }
                  ]}
                  rows={form.coSeguradas}
                  onChange={(i, k, v) => uArray('coSeguradas', i, k, v)}
                  onAdd={() => addRow('coSeguradas', { empresa: '', cnpj: '', setor: '', faturamento_pct: '' })}
                  onRemove={i => removeRow('coSeguradas', i)}
                  maxRows={3}
                  addLabel="Adicionar co-segurada"
                />
              </div>
            )}

            {/* Step 1 - Faturamento */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-navy border-b pb-3">2. Histórico de Faturamento e PDD</h3>
                <p className="text-xs text-gray-400">Em Milhares de Reais. Excluindo vendas para coligadas, pessoas físicas, empresas públicas, à vista ou antecipadas.</p>
                <DynamicTable
                  columns={[
                    { key: 'ano', label: 'Período', readOnly: true },
                    { key: 'faturamento', label: 'Faturamento (R$ mil)', placeholder: 'Ex: 5.000' },
                    { key: 'perdas', label: 'Perdas (R$ mil)', placeholder: 'Ex: 100' }
                  ]}
                  rows={form.historicoFaturamento}
                  onChange={(i, k, v) => uArray('historicoFaturamento', i, k, v)}
                />
                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-bold text-navy mb-3">2.1 Distribuição das Condições de Venda</h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Input label="À Vista (%)" value={form.condicoesVenda.pct_vista} onChange={v => u('condicoesVenda', 'pct_vista', v)} placeholder="%" />
                  <Input label="À Prazo (%)" value={form.condicoesVenda.pct_prazo} onChange={v => u('condicoesVenda', 'pct_prazo', v)} placeholder="%" />
                  <Input label="Prazo Médio (dias)" value={form.condicoesVenda.prazo_medio_dias} onChange={v => u('condicoesVenda', 'prazo_medio_dias', v)} placeholder="Ex: 60" />
                  <Input label="Prazo Máximo (dias)" value={form.condicoesVenda.prazo_maximo_dias} onChange={v => u('condicoesVenda', 'prazo_maximo_dias', v)} placeholder="Ex: 120" />
                </div>
                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-bold text-navy mb-3">2.2 Faturamento Anual Desejado para o Seguro</h4>
                  <p className="text-xs text-gray-400 mb-2">Considerar o faturamento total anual somado de todos os clientes que a empresa deseja ter coberto dentro da apólice.</p>
                </div>
                <Input label="Valor (R$)" value={form.condicoesVenda.faturamento_desejado_seguro} onChange={v => u('condicoesVenda', 'faturamento_desejado_seguro', v)} required error={errors['cv.fds']} placeholder="Ex: 10.000.000" hint="Sobre este faturamento estimado incide o custo da apólice." />
              </div>
            )}

            {/* Step 2 - Carteira */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-navy border-b pb-3">3. Distribuição da Carteira de Recebíveis</h3>
                <p className="text-xs text-gray-400">Excluindo vendas para coligadas, PF, empresas públicas, à vista ou antecipadas. Somar todas as vendas de um mesmo cliente para enquadrar na faixa correta.</p>
                <DynamicTable
                  columns={[
                    { key: 'faixa', label: 'Faixa de Valor (R$)', readOnly: true },
                    { key: 'faturamento_total', label: 'Fat. Total (R$)', placeholder: 'Valor' },
                    { key: 'pct_faturamento', label: '% Fat.', readOnly: true, placeholder: 'Auto' },
                    { key: 'num_clientes', label: 'Nº Clientes', placeholder: 'Qtd' },
                    { key: 'pct_clientes', label: '% Clientes', readOnly: true, placeholder: 'Auto' }
                  ]}
                  rows={form.carteiraRecebiveis}
                  onChange={(i, k, v) => uArray('carteiraRecebiveis', i, k, v)}
                />
              </div>
            )}

            {/* Step 3 - Perdas */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-navy border-b pb-3">4. Detalhamento das Perdas Efetivas</h3>
                <p className="text-xs text-gray-400 mb-2">Indique as 5 maiores perdas nos últimos 3 anos. Motivo: Mora, Falência, ações judiciais ou extrajudiciais.</p>
                <h4 className="text-sm font-bold text-navy">4.1 Maiores Perdas</h4>
                <DynamicTable
                  columns={[
                    { key: 'razao_social', label: 'Razão Social', placeholder: 'Empresa' },
                    { key: 'cnpj', label: 'CNPJ', placeholder: '00.000.000/0000-00' },
                    { key: 'exercicio', label: 'Exercício', placeholder: '2024' },
                    { key: 'valor', label: 'Valor (R$)', placeholder: 'Valor' },
                    { key: 'motivo', label: 'Motivo', placeholder: 'Mora, Falência...' }
                  ]}
                  rows={form.maioresPerdas}
                  onChange={(i, k, v) => uArray('maioresPerdas', i, k, v)}
                  onAdd={() => addRow('maioresPerdas', { razao_social: '', cnpj: '', exercicio: '', valor: '', motivo: '' })}
                  onRemove={i => removeRow('maioresPerdas', i)}
                  maxRows={5}
                />
              </div>
            )}

            {/* Step 4 - Atrasos */}
            {step === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-navy border-b pb-3">5. Distribuição de Atrasos</h3>
                <DynamicTable
                  columns={[
                    { key: 'faixa_dias', label: 'Dias de Atraso', readOnly: true },
                    { key: 'valor_atraso', label: 'Valor em Atraso (R$)', placeholder: 'Valor' },
                    { key: 'pct_valor', label: '% Valor', readOnly: true, placeholder: 'Auto' },
                    { key: 'qtd_clientes', label: 'Qtd Clientes', placeholder: 'Qtd' },
                    { key: 'pct_clientes', label: '% Clientes', readOnly: true, placeholder: 'Auto' }
                  ]}
                  rows={form.atrasos}
                  onChange={(i, k, v) => uArray('atrasos', i, k, v)}
                />
                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-bold text-navy mb-2">5.1 Abertura de Vencidos Acima de 180 Dias</h4>
                  <p className="text-xs text-gray-400 mb-2">Detalhe os títulos vencidos há mais de 180 dias.</p>
                </div>
                <DynamicTable
                  columns={[
                    { key: 'razao_social', label: 'Razão Social', placeholder: 'Empresa' },
                    { key: 'cnpj', label: 'CNPJ', placeholder: '00.000.000/0000-00' },
                    { key: 'data_emissao', label: 'Data Emissão', placeholder: 'dd/mm/aaaa' },
                    { key: 'data_vencimento', label: 'Data Vencimento', placeholder: 'dd/mm/aaaa' },
                    { key: 'valor', label: 'Valor (R$)', placeholder: 'Valor' }
                  ]}
                  rows={form.atrasosDetalhados}
                  onChange={(i, k, v) => uArray('atrasosDetalhados', i, k, v)}
                  onAdd={() => addRow('atrasosDetalhados', { razao_social: '', cnpj: '', data_emissao: '', data_vencimento: '', valor: '' })}
                  onRemove={i => removeRow('atrasosDetalhados', i)}
                  addLabel="Adicionar título vencido"
                />
              </div>
            )}

            {/* Step 5 - Compradores */}
            {step === 5 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-navy border-b pb-3">6. Amostra de Compradores</h3>
                <p className="text-xs text-gray-400">Informar até 20 compradores — maiores, médios e menores. Valores em R$.</p>
                <DynamicTable
                  columns={[
                    { key: 'cnpj_codigo_fiscal', label: 'CNPJ *', placeholder: '00.000.000/0000-00', required: true },
                    { key: 'razao_social', label: 'Razão Social', placeholder: 'Nome da empresa' },
                    { key: 'faturamento_anual', label: 'Fat. Anual (R$)', placeholder: 'Valor' },
                    { key: 'limite_credito', label: 'Limite Crédito (R$)', placeholder: 'Valor' }
                  ]}
                  rows={form.amostraCompradores}
                  onChange={(i, k, v) => uArray('amostraCompradores', i, k, v)}
                  onAdd={() => addRow('amostraCompradores', { cnpj_codigo_fiscal: '', razao_social: '', faturamento_anual: '', limite_credito: '' })}
                  onRemove={i => removeRow('amostraCompradores', i)}
                  errors={errors}
                  maxRows={20}
                  addLabel="Adicionar comprador"
                />
                <p className="text-xs text-gray-400 mt-2">* Faturamento anual: valor faturado para cada comprador. ** Limite de crédito rotativo: maior valor acumulado de créditos a receber no ano.</p>

                {/* Mensagem de valor no último step */}
                <FairfieldValueProp />
              </div>
            )}
          </>
        )}

        <StepNav step={step} totalSteps={STEPS.length} stepNames={STEPS} onPrev={prev} onNext={next} onSubmit={handleSubmit} loading={loading} isReview={isReview} />
      </div>
    </div>
  )
}

function FairfieldValueProp() {
  return (
    <div className="bg-gradient-to-br from-navy/5 via-white to-cobre/5 border border-cobre/20 rounded-xl p-5 mt-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 bg-cobre/10 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h4 className="text-sm font-bold text-navy">O que acontece depois que você enviar?</h4>
      </div>
      <div className="space-y-2 ml-10">
        <Step num="1" text="Seus dados são enviados simultaneamente para as 6 maiores seguradoras de crédito do mercado" highlight="AIG, Atradius, Coface, Euler Hermes, AVLA e CESCE" />
        <Step num="2" text="Nossa equipe de especialistas analisa cada proposta recebida e negocia condições exclusivas" />
        <Step num="3" text="Você recebe um comparativo completo com a melhor relação custo-benefício do mercado" />
      </div>
      <div className="mt-4 ml-10 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
        <p className="text-xs text-green-700"><strong>Sem custo para você.</strong> A Fairfield é remunerada pela seguradora escolhida — você não paga nada pelo nosso serviço de consultoria.</p>
      </div>
    </div>
  )
}

function Step({ num, text, highlight }) {
  return (
    <div className="flex items-start gap-2">
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center mt-0.5">{num}</span>
      <p className="text-xs text-gray-600">{text}{highlight && <> — <strong className="text-cobre">{highlight}</strong></>}</p>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-cobre uppercase tracking-wide mb-2">{title}</h4>
      <div className="bg-gray-50 rounded-lg p-4 space-y-1 text-sm">{children}</div>
    </div>
  )
}
