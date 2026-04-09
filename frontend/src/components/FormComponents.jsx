import { useState } from 'react'

export function Input({ label, value, onChange, placeholder, required, error, type = 'text', readOnly, className = '', hint }) {
  return (
    <div>
      <label className="label-field">{label}{required && ' *'}</label>
      {hint && <p className="text-xs text-gray-400 mb-1">{hint}</p>}
      <input type={type} className={`input-field ${className}`} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} readOnly={readOnly} />
      {error && <p className="error-msg">{error}</p>}
    </div>
  )
}

export function Select({ label, value, onChange, options, required, error, placeholder = 'Selecione...', hint }) {
  return (
    <div>
      <label className="label-field">{label}{required && ' *'}</label>
      {hint && <p className="text-xs text-gray-400 mb-1">{hint}</p>}
      <select className="select-field" value={value} onChange={e => onChange(e.target.value)}>
        <option value="">{placeholder}</option>
        {options.map(o => typeof o === 'string'
          ? <option key={o} value={o}>{o}</option>
          : <option key={o.value} value={o.value}>{o.label}</option>
        )}
      </select>
      {error && <p className="error-msg">{error}</p>}
    </div>
  )
}

export function DynamicTable({ columns, rows, onChange, onAdd, onRemove, maxRows, addLabel = 'Adicionar linha', errors = {} }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-navy text-white">
            {columns.map((col, i) => (
              <th key={i} className="px-3 py-2 text-left text-xs font-semibold">{col.label}</th>
            ))}
            <th className="px-2 py-2 w-10"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-t border-gray-100 hover:bg-gray-50">
              {columns.map((col, ci) => (
                <td key={ci} className="px-2 py-1">
                  {col.readOnly ? (
                    <span className={`text-xs px-2 py-1.5 block rounded ${row[col.key] ? 'bg-navy/5 text-navy font-semibold' : 'text-gray-400'}`}>{row[col.key] ? `${row[col.key]}${col.placeholder === 'Auto' ? '%' : ''}` : (col.placeholder || '—')}</span>
                  ) : (
                    <input
                      className={`w-full px-2 py-1.5 text-xs border rounded focus:ring-1 focus:ring-cobre focus:border-cobre outline-none ${
                        col.required && errors[`comprador_cnpj_${ri}`] ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                      value={row[col.key] || ''}
                      onChange={e => onChange(ri, col.key, e.target.value)}
                      placeholder={col.placeholder || ''}
                    />
                  )}
                </td>
              ))}
              <td className="px-2 py-1">
                {onRemove && rows.length > 1 && (
                  <button onClick={() => onRemove(ri)} className="text-red-400 hover:text-red-600 text-lg leading-none" title="Remover">×</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {onAdd && (!maxRows || rows.length < maxRows) && (
        <button onClick={onAdd} className="mt-2 text-cobre text-xs font-semibold hover:underline">+ {addLabel}</button>
      )}
    </div>
  )
}

export function StepNav({ step, totalSteps, stepNames, onPrev, onNext, onSubmit, loading, isReview }) {
  return (
    <div className="flex justify-between mt-8 pt-4 border-t border-gray-100">
      {step > 0 ? (
        <button onClick={onPrev} className="btn-secondary">Voltar</button>
      ) : <div />}
      {step < totalSteps - 1 && !isReview && (
        <button onClick={onNext} className="btn-primary">Próximo</button>
      )}
      {step === totalSteps - 1 && !isReview && (
        <button onClick={() => onSubmit('review')} className="btn-primary">Revisar Dados</button>
      )}
      {isReview && (
        <button onClick={() => onSubmit('send')} disabled={loading} className="btn-primary flex items-center gap-2">
          {loading && <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
          {loading ? 'Enviando...' : 'Enviar Solicitação de Cotação'}
        </button>
      )}
    </div>
  )
}

export function ProgressBar({ step, steps }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {steps.map((s, i) => (
          <span key={i} className={`text-[10px] font-medium hidden sm:block ${i <= step ? 'text-navy' : 'text-gray-400'}`}>{s}</span>
        ))}
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-navy rounded-full transition-all duration-500" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>
      <p className="text-right text-xs text-gray-400 mt-1">Etapa {step + 1} de {steps.length} — {steps[step]}</p>
    </div>
  )
}

export function SuccessScreen({ result, onReset, tipo }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="card">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-navy mb-2">Solicitação Enviada!</h2>
        <p className="text-xs text-cobre font-semibold mb-4 uppercase">Crédito {tipo === 'externo' ? 'Exportação' : 'Interno'}</p>
        <p className="text-gray-600 mb-4">
          Seus dados foram enviados para análise simultânea em <strong className="text-cobre">{result?.cotacoesGeradas} seguradoras</strong>.
        </p>
        <div className="bg-gradient-to-r from-navy/5 to-cobre/5 rounded-xl p-4 mb-6 text-left">
          <h4 className="text-sm font-bold text-navy mb-2">Próximos passos:</h4>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cobre text-white text-[10px] font-bold flex items-center justify-center mt-0.5">1</span>
              <p className="text-xs text-gray-600">As seguradoras <strong>AIG, Atradius, Coface, Euler Hermes, AVLA e CESCE</strong> estão recebendo seus dados agora</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cobre text-white text-[10px] font-bold flex items-center justify-center mt-0.5">2</span>
              <p className="text-xs text-gray-600">Nossa equipe irá <strong>negociar as melhores condições</strong> entre todas as propostas recebidas</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cobre text-white text-[10px] font-bold flex items-center justify-center mt-0.5">3</span>
              <p className="text-xs text-gray-600">Você receberá um <strong>comparativo completo</strong> com a melhor relação custo-benefício</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 mb-6">Você receberá um e-mail de confirmação em breve. Prazo médio de resposta: 5 a 10 dias úteis.</p>
        <button onClick={onReset} className="btn-primary">Nova Cotação</button>
      </div>
    </div>
  )
}

export function CNPJInput({ value, onChange, onResult, error, label = 'CNPJ' }) {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  function formatCNPJ(v) {
    const d = v.replace(/\D/g, '').slice(0, 14)
    if (d.length <= 2) return d
    if (d.length <= 5) return `${d.slice(0,2)}.${d.slice(2)}`
    if (d.length <= 8) return `${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5)}`
    if (d.length <= 12) return `${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5,8)}/${d.slice(8)}`
    return `${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5,8)}/${d.slice(8,12)}-${d.slice(12)}`
  }

  function validarCNPJ(cnpj) {
    const d = cnpj.replace(/\D/g, '')
    if (d.length !== 14 || /^(\d)\1{13}$/.test(d)) return false
    let t = 12, nums = d.substring(0, t).split('').map(Number), soma = 0, pos = t - 7
    for (let i = t; i >= 1; i--) { soma += nums[t - i] * pos--; if (pos < 2) pos = 9 }
    let res = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (res !== parseInt(d.charAt(t))) return false
    t = 13; nums = d.substring(0, t).split('').map(Number); soma = 0; pos = t - 7
    for (let i = t; i >= 1; i--) { soma += nums[t - i] * pos--; if (pos < 2) pos = 9 }
    res = soma % 11 < 2 ? 0 : 11 - soma % 11
    return res === parseInt(d.charAt(t))
  }

  async function handleChange(raw) {
    const formatted = formatCNPJ(raw)
    onChange(formatted)
    setStatus(null)
    const digits = formatted.replace(/\D/g, '')
    if (digits.length === 14) {
      if (!validarCNPJ(formatted)) { setStatus('invalid'); return }
      setLoading(true)
      try {
        const r = await fetch(`/api/cnpj/${digits}`)
        const data = await r.json()
        if (data.sucesso) { setStatus('found'); onResult && onResult(data.data) }
        else { setStatus('not_found') }
      } catch { setStatus('error') }
      finally { setLoading(false) }
    }
  }

  return (
    <div>
      <label className="label-field">{label} *</label>
      <div className="relative">
        <input
          className={`input-field pr-12 ${status === 'found' ? 'border-green-500 ring-2 ring-green-200' : status === 'invalid' || status === 'not_found' ? 'border-red-500 ring-2 ring-red-200' : ''}`}
          value={value} onChange={e => handleChange(e.target.value)} placeholder="00.000.000/0000-00" maxLength={18}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {loading && <svg className="animate-spin h-5 w-5 text-cobre" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
          {status === 'found' && <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
          {(status === 'not_found' || status === 'invalid') && <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
        </div>
      </div>
      {loading && <p className="text-xs text-cobre mt-1">Consultando Receita Federal...</p>}
      {status === 'found' && <p className="text-xs text-green-600 mt-1">Empresa verificada na Receita Federal</p>}
      {error && <p className="error-msg">{error}</p>}
    </div>
  )
}

export function formatPhone(v) {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return `(${d}`
  if (d.length <= 7) return `(${d.slice(0,2)}) ${d.slice(2)}`
  return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`
}
