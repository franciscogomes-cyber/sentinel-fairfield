import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext'
import { formatPhone } from '../components/FormComponents'

const B = import.meta.env.BASE_URL

export default function Login({ onComplete }) {
  const { generateCode, verifyCode } = useAuth()
  const [stage, setStage] = useState('form') // form | verify
  const [loading, setLoading] = useState(false)
  const [resending, setResending] = useState(false)
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', empresa: '' })
  const [code, setCode] = useState('')
  const [errors, setErrors] = useState({})
  const [devInfo, setDevInfo] = useState(null) // { code, preview } para modo desenvolvimento

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
        toast.success('Modo dev — código visível abaixo (SMTP não configurado)')
      } else {
        setDevInfo(null)
        toast.success('Código enviado! Verifique seu e-mail.')
      }
      setStage('verify')
    } catch (err) {
      toast.error(err.message || 'Erro ao enviar código. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  async function handleVerify(e) {
    e.preventDefault()
    if (code.length !== 6) {
      toast.error('Digite o código de 6 dígitos')
      return
    }
    setLoading(true)
    try {
      const result = await verifyCode(form.email, code)
      if (result.success) {
        toast.success('Verificado com sucesso!')
        onComplete && onComplete()
      } else {
        toast.error('Código inválido ou expirado. Tente novamente.')
      }
    } catch (err) {
      toast.error('Erro ao verificar código. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  async function handleResend() {
    setResending(true)
    try {
      const result = await generateCode(form.email, form.nome, form.empresa, form.telefone)
      if (result.devMode) {
        setDevInfo({ code: result.devCode, preview: result.devPreview })
      }
      toast.success('Novo código enviado!')
    } catch (err) {
      toast.error(err.message || 'Erro ao reenviar código.')
    } finally {
      setResending(false)
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
              {loading ? 'Enviando código...' : 'Receber Código de Acesso'}
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

            {/* Confirmação de envio / Dev Mode */}
            {devInfo ? (
              <div className="rounded-lg overflow-hidden border border-amber-300">
                <div className="bg-amber-400 px-4 py-2 flex items-center gap-2">
                  <span className="text-amber-900 font-bold text-xs">⚠ MODO DESENVOLVIMENTO — SMTP não configurado</span>
                </div>
                <div className="bg-amber-50 px-4 py-3">
                  <p className="text-xs text-amber-800 mb-2">
                    Email foi para <strong>Ethereal</strong> (servidor de teste), não chegou no Gmail real.<br/>
                    Para receber emails reais, configure <code className="bg-amber-100 px-1 rounded">SMTP_PASS</code> no arquivo <code className="bg-amber-100 px-1 rounded">.env</code>.
                  </p>
                  <div className="bg-white border border-amber-200 rounded p-3 text-center mt-2">
                    <p className="text-xs text-amber-600 font-semibold mb-1">Código para teste:</p>
                    <p className="text-3xl font-mono font-bold text-amber-700 tracking-[0.4em]">{devInfo.code}</p>
                  </div>
                  {devInfo.preview && (
                    <a href={devInfo.preview} target="_blank" rel="noopener noreferrer"
                      className="block text-center text-xs text-blue-600 underline mt-2">
                      👁 Ver email no Ethereal
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '8px', padding: '12px 16px' }}>
                <p style={{ margin: 0, fontSize: '13px', color: '#15803D', fontWeight: '600' }}>
                  ✅ Código enviado para <strong>{form.email}</strong>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Verifique sua caixa de entrada e spam. Válido por 15 minutos.
                </p>
              </div>
            )}

            <div>
              <label className="label-field text-center block">Codigo de Verificacao</label>
              <input
                className="input-field text-center text-2xl tracking-[0.5em] font-mono font-bold"
                value={code} onChange={e => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="000000" maxLength={6} autoFocus
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
              {loading && <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
              {loading ? 'Verificando...' : 'Verificar e Acessar'}
            </button>

            <div className="flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={handleResend}
                disabled={resending}
                className="text-cobre hover:underline font-medium disabled:opacity-50"
              >
                {resending ? 'Reenviando...' : 'Reenviar código'}
              </button>
              <button type="button" onClick={() => { setStage('form'); setCode('') }}
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
