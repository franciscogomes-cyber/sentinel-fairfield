import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

const AUTH_KEY = 'sentinel_auth'
const USERS_KEY = 'sentinel_users'
const PROSPECTS_KEY = 'sentinel_prospects'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(AUTH_KEY)
    return saved ? JSON.parse(saved) : null
  })

  const [ndaAccepted, setNdaAccepted] = useState(() => {
    if (!user) return false
    const accepted = localStorage.getItem(`sentinel_nda_${user.email}`)
    return accepted === 'true'
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(user))
      const accepted = localStorage.getItem(`sentinel_nda_${user.email}`)
      setNdaAccepted(accepted === 'true')
    } else {
      localStorage.removeItem(AUTH_KEY)
      setNdaAccepted(false)
    }
  }, [user])

  function register(userData) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
    const existing = users.find(u => u.email === userData.email)
    if (existing) return { success: false, message: 'E-mail já cadastrado' }

    const newUser = {
      ...userData,
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      createdAt: new Date().toISOString(),
      verified: false
    }
    users.push(newUser)
    localStorage.setItem(USERS_KEY, JSON.stringify(users))

    // Track prospect
    trackProspect(newUser, 'cadastro')

    return { success: true, user: newUser }
  }

  function verifyCode(email, code) {
    const storedCode = sessionStorage.getItem(`sentinel_code_${email}`)
    if (storedCode && storedCode === code) {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
      const userIndex = users.findIndex(u => u.email === email)
      if (userIndex >= 0) {
        users[userIndex].verified = true
        localStorage.setItem(USERS_KEY, JSON.stringify(users))
        setUser(users[userIndex])
        trackProspect(users[userIndex], 'verificado')
        sessionStorage.removeItem(`sentinel_code_${email}`)
        return { success: true }
      }
    }
    return { success: false, message: 'Codigo invalido' }
  }

  function generateCode(email) {
    const code = String(Math.floor(100000 + Math.random() * 900000))
    sessionStorage.setItem(`sentinel_code_${email}`, code)
    // In production, send via email/SMS. For demo, show in console and toast
    console.log(`[SENTINEL] Codigo de verificacao para ${email}: ${code}`)
    return code
  }

  function acceptNda() {
    if (user) {
      localStorage.setItem(`sentinel_nda_${user.email}`, 'true')
      setNdaAccepted(true)
      trackProspect(user, 'nda_aceito')
    }
  }

  function logout() {
    setUser(null)
    setNdaAccepted(false)
  }

  function trackProspect(userData, fase) {
    const prospects = JSON.parse(localStorage.getItem(PROSPECTS_KEY) || '[]')
    const existing = prospects.findIndex(p => p.email === userData.email)
    const prospect = {
      id: userData.id,
      nome: userData.nome,
      email: userData.email,
      telefone: userData.telefone,
      empresa: userData.empresa,
      fase,
      faseLabel: FASE_LABELS[fase] || fase,
      createdAt: userData.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    if (existing >= 0) {
      prospects[existing] = { ...prospects[existing], ...prospect }
    } else {
      prospects.push(prospect)
    }
    localStorage.setItem(PROSPECTS_KEY, JSON.stringify(prospects))
  }

  function updateProspectPhase(email, fase) {
    const prospects = JSON.parse(localStorage.getItem(PROSPECTS_KEY) || '[]')
    const idx = prospects.findIndex(p => p.email === email)
    if (idx >= 0) {
      prospects[idx].fase = fase
      prospects[idx].faseLabel = FASE_LABELS[fase] || fase
      prospects[idx].updatedAt = new Date().toISOString()
      localStorage.setItem(PROSPECTS_KEY, JSON.stringify(prospects))
    }
  }

  function getProspects() {
    return JSON.parse(localStorage.getItem(PROSPECTS_KEY) || '[]')
  }

  function getAllUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  }

  return (
    <AuthContext.Provider value={{
      user, ndaAccepted,
      register, verifyCode, generateCode, acceptNda, logout,
      trackProspect, updateProspectPhase, getProspects, getAllUsers
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}

const FASE_LABELS = {
  cadastro: 'Cadastro',
  verificado: 'Verificado',
  nda_aceito: 'NDA Aceito',
  preenchendo_interno: 'Preenchendo (Interno)',
  preenchendo_externo: 'Preenchendo (Externo)',
  enviado_interno: 'Enviado (Interno)',
  enviado_externo: 'Enviado (Externo)'
}

export { FASE_LABELS }
