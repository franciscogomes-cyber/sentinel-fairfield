import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext'
import { formatPhone } from '../components/FormComponents'

const B = import.meta.env.BASE_URL

export default function Login({ onComplete }) {
  const { generateCode, verifyCode } = useAuth()
  const [stage, setStage] = useState('form')
  const [loading, setLoading] = useState(false)
  const [resending, setResending] = useState(false)
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', empresa: '' })
  const [code, setCode] = useState('')
  const [errors, setErrors] = useState({})
  const [devInfo, setDevInfo] = useState(null)

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
    try {
      const result = await generateCode(form.email, form.nome, form.empresa, form.telefone)
      if (result.devMode) {
        setDevInfo({ code: result.devCode, preview: result.devPreview })
        toast.success('Modo dev — codigo visivel abaixo')
      } else {
        setDevInfo(null)
        toast.success('Codigo enviado! Verifique seu e-mail.')
      }
      setStage('verify')
    } catch (err) {
      toast.error(err.message || 'Erro ao enviar codigo.')
    } finally {
      setLoading(false)
    }
  }

  async function handleVerify(e) {
    e.preventDefault()
    if (code.length !== 6) { toast.error('Digite o codigo de 6 digitos'); return }
    setLoading(true)
    try {
      const result = await verifyCode(form.email, code)
      if (result.success) {
        toast.success('Verificado com sucesso!')
        onComplete && onComplete()
      } else {
        toast.error('Codigo invalido ou expirado.')
      }
    } catch (err) {
      toast.error('Erro ao verificar codigo.')
    } finally {
      setLoading(false)
    }
  }

  async function handleResend() {
    setResending(true)
    try {
      const result = await generateCode(form.email, form.nome, form.empresa, form.telefone)
      if (result.devMode) setDevInfo({ code: result.devCode, preview: result.devPreview })
      toast.success('Novo codigo enviado!')
    } catch (err) {
      toast.error(err.message || 'Erro ao reenviar codigo.')
    } finally {
      setResending(false)
    }
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-10 sm:py-16 animate-fadeIn">
      <div className="text-center mb-8">
        <div className="relative inline-block mb-4">
          <img src={`${B}logos/sentinel.png`} alt="SENTINEL" className="h-16 w-16 sm:h-20 sm:w-20 object-contain relative z-10" />
          <div className="absolute inset-0 bg-sentinel/20 rounded-full blur-xl" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white">
          Acesse o <span className="text-sentinel">SENTINEL</span>
        </h1>
        <p className="text-white/30 text-sm mt-2">
          Preencha seus dados para iniciar a cotacao de Seguro de Credito
        </p>
      </div>

      <div className="card-glass">
        {stage === 'form' ? (
          <form onSubmit={handleRegister} className="space-y-4">
            <h3 className="text-base font-bold text-white border-b border-white/[0.06] pb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-sentinel" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Identificacao
            </h3>

            <div>
              <label className="label-field">Nome Completo *</label>
              <input className={`input-field ${errors.nome ? 'border-rose-400/50 ring-2 ring-rose-400/20' : ''}`}
                value={form.nome} onChange={e => u('nome', e.target.value)} placeholder="Seu nome completo" />
              {errors.nome && <p className="error-msg">{errors.nome}</p>}
            </div>

            <div>
              <label className="label-field">Nome da Empresa *</label>
              <input className={`input-field ${errors.empresa ? 'border-rose-400/50 ring-2 ring-rose-400/20' : ''}`}
                value={form.empresa} onChange={e => u('empresa', e.target.value)} placeholder="Razao social ou nome fantasia" />
              {errors.empresa && <p className="error-msg">{errors.empresa}</p>}
            </div>

            <div>
              <label className="label-field">E-mail Corporativo *</label>
              <input type="email" className={`input-field ${errors.email ? 'border-rose-400/50 ring-2 ring-rose-400/20' : ''}`}
                value={form.email} onChange={e => u('email', e.target.value)} placeholder="seu@empresa.com.br" />
              {errors.email && <p className="error-msg">{errors.email}</p>}
            </div>

            <div>
              <label className="label-field">Telefone *</label>
              <input className={`input-field ${errors.telefone ? 'border-rose-400/50 ring-2 ring-rose-400/20' : ''}`}
                value={form.telefone} onChange={e => u('telefone', formatPhone(e.target.value))} placeholder="(00) 00000-0000" maxLength={15} />
              {errors.telefone && <p className="error-msg">{errors.telefone}</p>}
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
              {loading && <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
              {loading ? 'Enviando codigo...' : 'Receber Codigo de Acesso'}
            </button>

            <p className="text-[10px] text-white/20 text-center mt-3">
              Enviaremos um codigo de verificacao para o e-mail informado. Seus dados sao protegidos pela LGPD.
            </p>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-5">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-sentinel/10 border border-sentinel/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-sentinel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Verifique seu E-mail</h3>
              <p className="text-sm text-white/35 mt-1">
                Enviamos um codigo de 6 digitos para <strong className="text-sentinel">{form.email}</strong>
              </p>
            </div>

            {devInfo ? (
              <div className="rounded-xl overflow-hidden border border-amber-500/30">
                <div className="bg-amber-500/15 px-4 py-2 flex items-center gap-2">
                  <span className="text-amber-400 font-bold text-xs">⚠ MODO DESENVOLVIMENTO</span>
                </div>
                <div className="bg-amber-500/5 px-4 py-3">
                  <p className="text-xs text-amber-300/60 mb-2">SMTP nao configurado — codigo de teste:</p>
                  <div className="bg-navy-dark border border-amber-500/20 rounded-lg p-3 text-center">
                    <p className="text-3xl font-mono font-bold text-amber-400 tracking-[0.4em]">{devInfo.code}</p>
                  </div>
                  {devInfo.preview && (
                    <a href={devInfo.preview} target="_blank" rel="noopener noreferrer"
                      className="block text-center text-xs text-sentinel underline mt-2">Ver email no Ethereal</a>
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 px-4 py-3">
                <p className="text-sm text-accent-emerald font-semibold">
                  ✓ Codigo enviado para <strong>{form.email}</strong>
                </p>
                <p className="text-xs text-white/25 mt-1">Verifique sua caixa de entrada. Valido por 15 minutos.</p>
              </div>
            )}

            <div>
              <label className="label-field text-center block">Codigo de Verificacao</label>
              <input className="input-field text-center text-2xl tracking-[0.5em] font-mono font-bold"
                value={code} onChange={e => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="000000" maxLength={6} autoFocus />
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
              {loading && <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
              {loading ? 'Verificando...' : 'Verificar e Acessar'}
            </button>

            <div className="flex items-center justify-between text-xs">
              <button type="button" onClick={handleResend} disabled={resending}
                className="text-sentinel hover:underline font-medium disabled:opacity-50">
                {resending ? 'Reenviando...' : 'Reenviar codigo'}
              </button>
              <button type="button" onClick={() => { setStage('form'); setCode('') }}
                className="text-white/25 hover:text-white/50">Voltar</button>
            </div>
          </form>
        )}
      </div>

      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-white/20">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Ambiente seguro — Fairfield SUSEP 20.2036457.1
        </div>
      </div>
    </div>
  )
}
