import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext'
import { formatPhone } from '../components/FormComponents'

const B = import.meta.env.BASE_URL

export default function Login({ onComplete }) {
  const { register, verifyCode, generateCode } = useAuth()
  const [stage, setStage] = useState('form') // form | verify
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', empresa: '' })
  const [code, setCode] = useState('')
  const [errors, setErrors] = useState({})
  const [demoCode, setDemoCode] = useState(null)

  function u(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => { const n = { ...prev }; delete n[field]; return n })
  }

  function validate() {
    const errs = {}
    if (!form.nome.trim()) errs.nome = 'Informe seu nome'
    if (!form.empresa.trim()) errs.empresa = 'Informe a empresa'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'E-mail invalido'
    if (form.telefone.replace(/\D/g, '').length < 10) errs.telefone = 'Telefone invalido'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleRegister(e) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)

    const result = register(form)
    if (!result.success) {
      // User exists, just send code
      const c = generateCode(form.email)
      setDemoCode(c)
      setStage('verify')
      toast.success('Codigo de verificacao enviado para seu e-mail!')
      setLoading(false)
      return
    }

    const c = generateCode(form.email)
    setDemoCode(c)
    setStage('verify')
    toast.success('Cadastro realizado! Verifique seu e-mail para o codigo.')
    setLoading(false)
  }

  function handleVerify(e) {
    e.preventDefault()
    if (code.length !== 6) {
      toast.error('Digite o codigo de 6 digitos')
      return
    }
    const result = verifyCode(form.email, code)
    if (result.success) {
      toast.success('Verificado com sucesso!')
      onComplete && onComplete()
    } else {
      toast.error('Codigo invalido. Tente novamente.')
    }
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-8 sm:py-16 animate-fadeIn">
      <div className="text-center mb-6 sm:mb-8">
        <img src={`${B}logos/sentinel.png`} alt="SENTINEL" className="h-16 w-16 sm:h-20 sm:w-20 object-contain mx-auto mb-4" />
        <h1 className="text-2xl sm:text-3xl font-bold text-navy">
          Acesse o <span className="text-[#7DD3FC]">SENTINEL</span>
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Preencha seus dados para iniciar a cotacao de Seguro de Credito
        </p>
      </div>

      <div className="card">
        {stage === 'form' ? (
          <form onSubmit={handleRegister} className="space-y-4">
            <h3 className="text-lg font-bold text-navy border-b border-gray-100 pb-3">Identificacao</h3>

            <div>
              <label className="label-field">Nome Completo *</label>
              <input
                className={`input-field ${errors.nome ? 'border-red-400 ring-2 ring-red-200' : ''}`}
                value={form.nome} onChange={e => u('nome', e.target.value)}
                placeholder="Seu nome completo"
              />
              {errors.nome && <p className="error-msg">{errors.nome}</p>}
            </div>

            <div>
              <label className="label-field">Nome da Empresa *</label>
              <input
                className={`input-field ${errors.empresa ? 'border-red-400 ring-2 ring-red-200' : ''}`}
                value={form.empresa} onChange={e => u('empresa', e.target.value)}
                placeholder="Razao social ou nome fantasia"
              />
              {errors.empresa && <p className="error-msg">{errors.empresa}</p>}
            </div>

            <div>
              <label className="label-field">E-mail Corporativo *</label>
              <input
                type="email"
                className={`input-field ${errors.email ? 'border-red-400 ring-2 ring-red-200' : ''}`}
                value={form.email} onChange={e => u('email', e.target.value)}
                placeholder="seu@empresa.com.br"
              />
              {errors.email && <p className="error-msg">{errors.email}</p>}
            </div>

            <div>
              <label className="label-field">Telefone *</label>
              <input
                className={`input-field ${errors.telefone ? 'border-red-400 ring-2 ring-red-200' : ''}`}
                value={form.telefone} onChange={e => u('telefone', formatPhone(e.target.value))}
                placeholder="(00) 00000-0000" maxLength={15}
              />
              {errors.telefone && <p className="error-msg">{errors.telefone}</p>}
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
              {loading && <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
              {loading ? 'Processando...' : 'Receber Codigo de Acesso'}
            </button>

            <p className="text-[10px] text-gray-400 text-center mt-3">
              Enviaremos um codigo de verificacao para o e-mail informado.
              Seus dados sao protegidos pela LGPD.
            </p>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-5">
            <div className="text-center">
              <div className="w-16 h-16 bg-cobre/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cobre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy">Verifique seu E-mail</h3>
              <p className="text-sm text-gray-500 mt-1">
                Enviamos um codigo de 6 digitos para <strong className="text-navy">{form.email}</strong>
              </p>
            </div>

            <div>
              <label className="label-field text-center block">Codigo de Verificacao</label>
              <input
                className="input-field text-center text-2xl tracking-[0.5em] font-mono font-bold"
                value={code} onChange={e => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="000000" maxLength={6} autoFocus
              />
            </div>

            {/* Demo mode: show code */}
            {demoCode && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
                <p className="text-xs text-amber-700 font-medium">Modo demonstracao — seu codigo:</p>
                <p className="text-2xl font-mono font-bold text-amber-800 tracking-[0.3em] mt-1">{demoCode}</p>
                <p className="text-[10px] text-amber-500 mt-1">Em producao, este codigo seria enviado por e-mail/SMS</p>
              </div>
            )}

            <button type="submit" className="btn-primary w-full">
              Verificar e Acessar
            </button>

            <div className="flex items-center justify-between text-xs">
              <button type="button" onClick={() => { const c = generateCode(form.email); setDemoCode(c); toast.success('Novo codigo enviado!') }}
                className="text-cobre hover:underline font-medium">
                Reenviar codigo
              </button>
              <button type="button" onClick={() => { setStage('form'); setCode(''); setDemoCode(null) }}
                className="text-gray-400 hover:text-gray-600">
                Voltar
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Ambiente seguro — Fairfield SUSEP 20.2036457.1
        </div>
      </div>
    </div>
  )
}
