import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { API_BASE } from '../config'

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

  const generateCode = useCallback(async (email, nome, empresa, telefone) => {
    const res = await fetch(`${API_BASE}/api/auth/send-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, nome, empresa, telefone })
    })
    const data = await res.json()
    if (!data.sucesso) throw new Error(data.mensagem)
    return true
  }, [])

  const verifyCode = useCallback(async (email, code) => {
    const res = await fetch(`${API_BASE}/api/auth/verify-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code })
    })
    const data = await res.json()
    if (!data.sucesso) return { success: false }

    // Registra o usuário localmente após verificação bem-sucedida
    const userData = {
      id: Date.now().toString(),
      nome: data.data.nome,
      email: data.data.email,
      telefone: data.data.telefone,
      empresa: data.data.empresa,
      createdAt: new Date().toISOString(),
      verified: true
    }
    setUser(userData)
    localStorage.setItem('sentinel_user', JSON.stringify(userData))
    // Track prospect inline (evita dependência circular de useCallback)
    const prospects = JSON.parse(localStorage.getItem(PROSPECTS_KEY) || '[]')
    const existingIdx = prospects.findIndex(p => p.email === userData.email)
    const prospect = {
      id: userData.id, nome: userData.nome, email: userData.email,
      telefone: userData.telefone, empresa: userData.empresa,
      fase: 'verificado', faseLabel: 'Verificado',
      createdAt: userData.createdAt, updatedAt: new Date().toISOString()
    }
    if (existingIdx >= 0) { prospects[existingIdx] = { ...prospects[existingIdx], ...prospect } }
    else { prospects.push(prospect) }
    localStorage.setItem(PROSPECTS_KEY, JSON.stringify(prospects))
    return { success: true }
  }, [])

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
