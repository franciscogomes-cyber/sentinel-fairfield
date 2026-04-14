import { useState, useEffect, useRef } from 'react'
import { HashRouter, Routes, Route, NavLink, useSearchParams, useLocation, useNavigate, Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home, { MiniShield } from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NdaAcceptance from './pages/NdaAcceptance'
import IntakeInterno from './pages/IntakeInterno'
import IntakeExterno from './pages/IntakeExterno'
import Dashboard from './pages/Dashboard'
import SLA from './pages/SLA'
import ICoverChat from './pages/ICoverChat'
import ClientDashboard from './pages/ClientDashboard'
import QuotationDetail from './pages/QuotationDetail'
import Profile from './pages/Profile'

const B = import.meta.env.BASE_URL

function UserDropdown() {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!user) return null

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-xs text-white/40 hover:text-white/60 transition-colors pl-3 ml-1 border-l border-white/10">
        <div className="h-7 w-7 rounded-full bg-sentinel/15 border border-sentinel/25 flex items-center justify-center">
          <span className="text-[11px] font-bold text-sentinel">{user.nome?.charAt(0) || 'U'}</span>
        </div>
        <span className="hidden sm:block text-white/60 font-medium max-w-[100px] truncate">{user.nome?.split(' ')[0]}</span>
        <svg className={`w-3 h-3 text-white/30 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-navy-light border border-white/[0.08] rounded-xl shadow-xl overflow-hidden z-50 animate-fadeIn">
          <div className="px-4 py-3 border-b border-white/[0.06]">
            <p className="text-sm font-semibold text-white truncate">{user.nome}</p>
            <p className="text-[10px] text-white/30 truncate">{user.email}</p>
          </div>
          <div className="py-1">
            <button onClick={() => { setOpen(false); navigate('/meu-painel') }}
              className="w-full text-left px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors flex items-center gap-2.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Meu Painel
            </button>
            <button onClick={() => { setOpen(false); navigate('/perfil') }}
              className="w-full text-left px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors flex items-center gap-2.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Meu Perfil
            </button>
            <div className="border-t border-white/[0.06] my-1" />
            <button onClick={() => { setOpen(false); logout() }}
              className="w-full text-left px-4 py-2.5 text-sm text-rose-400/70 hover:text-rose-400 hover:bg-rose-400/5 transition-colors flex items-center gap-2.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sair
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function AppContent() {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const { user, isAuthenticated, ndaAccepted, logout } = useAuth()
  const isAdmin = searchParams.get('admin') === '1'
  const isHome = location.pathname === '/'
  const isIntake = location.pathname.startsWith('/cotacao')
  const isICover = location.pathname === '/icover'
  const [homeStarted, setHomeStarted] = useState(false)

  useEffect(() => {
    function onStarted() { setHomeStarted(true) }
    function onReset() { setHomeStarted(false) }
    window.addEventListener('sentinel-started', onStarted)
    window.addEventListener('sentinel-reset', onReset)
    return () => { window.removeEventListener('sentinel-started', onStarted); window.removeEventListener('sentinel-reset', onReset) }
  }, [])

  useEffect(() => { if (!isHome) setHomeStarted(false) }, [isHome])

  const needsAuth = isIntake && !user
  const needsNda = isIntake && user && !ndaAccepted
  const isLightBg = isIntake || needsNda

  // iCover is standalone
  if (isICover) {
    return (
      <Routes>
        <Route path="/icover" element={<ICoverChat />} />
      </Routes>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-navy">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-navy/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <NavLink to="/" className="flex items-center gap-2 sm:gap-3 min-w-0 group">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <span className="hidden sm:block text-[10px] text-white/30 font-medium tracking-wide uppercase">Fairfield</span>
                <span className="hidden sm:block text-white/10 mx-1">|</span>
                <div className="relative">
                  <MiniShield size={32} />
                  <div className="absolute inset-0 bg-sentinel/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h1 className="text-lg sm:text-xl font-bold tracking-tight">
                  <span className="text-sentinel">SENTINEL</span>
                </h1>
              </div>
              <span className="hidden lg:block text-[10px] text-white/25 border-l border-white/10 pl-3 leading-tight uppercase tracking-wider">
                Seguro de Credito
              </span>
            </NavLink>

            <nav className="flex items-center gap-1 sm:gap-2">
              {isHome && !homeStarted && (
                <a href="#iniciar" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('sentinel-iniciar')) }}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark hover:shadow-lg hover:shadow-sentinel/20 hover:scale-[1.02] cursor-pointer"
                >Iniciar Cotacao</a>
              )}

              {/* Meu Painel link for authenticated users */}
              {isAuthenticated && !isAdmin && (
                <NavLink to="/meu-painel" className={({ isActive }) =>
                  `hidden sm:inline-flex px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isActive ? 'bg-sentinel/15 text-sentinel border border-sentinel/25' : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`
                }>
                  Meu Painel
                </NavLink>
              )}

              {isAdmin && (
                <>
                  <NavLink to="/dashboard?admin=1" className={({ isActive }) =>
                    `px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${isActive ? 'bg-sentinel/15 text-sentinel border border-sentinel/25' : 'text-white/40 hover:text-white hover:bg-white/5'}`
                  }>Dashboard</NavLink>
                  <NavLink to="/sla?admin=1" className={({ isActive }) =>
                    `px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${isActive ? 'bg-sentinel/15 text-sentinel border border-sentinel/25' : 'text-white/40 hover:text-white hover:bg-white/5'}`
                  }>SLA</NavLink>
                </>
              )}

              {/* User dropdown (replaces old inline user display) */}
              {isAuthenticated && !isAdmin && <UserDropdown />}

              {/* Login link when not authenticated */}
              {!isAuthenticated && !isAdmin && (
                <NavLink to="/login" className={({ isActive }) =>
                  `px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isActive ? 'bg-sentinel/15 text-sentinel border border-sentinel/25' : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`
                }>
                  Entrar
                </NavLink>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className={`flex-1 ${isLightBg ? 'bg-white light-theme' : 'bg-grid'}`}>
        {needsAuth ? (
          <Login />
        ) : needsNda ? (
          <NdaAcceptance />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/icover" element={<ICoverChat />} />
            <Route path="/cotacao/interno" element={<IntakeInterno />} />
            <Route path="/cotacao/externo" element={<IntakeExterno />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sla" element={<SLA />} />
            <Route path="/meu-painel" element={
              <ProtectedRoute><ClientDashboard /></ProtectedRoute>
            } />
            <Route path="/meu-painel/:id" element={
              <ProtectedRoute><QuotationDetail /></ProtectedRoute>
            } />
            <Route path="/perfil" element={
              <ProtectedRoute><Profile /></ProtectedRoute>
            } />
          </Routes>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <a href="https://www.fairfield.com.br" target="_blank" rel="noopener noreferrer" className="font-semibold text-white/60 hover:text-sentinel transition-colors text-sm">
                Fairfield
              </a>
              <span className="text-white/10">|</span>
              <span className="font-bold text-sentinel tracking-tight text-sm">SENTINEL</span>
              <span className="text-white/25 text-xs">Seguro de Credito</span>
              <span className="text-white/10">·</span>
              <span className="font-bold text-white/60 tracking-tight text-sm">COVENANT</span>
              <span className="text-white/25 text-xs">Seguro Garantia</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-white/20">SUSEP 20.2036457.1</span>
              <span className="text-white/10">|</span>
              <p className="text-xs text-white/20">
                &copy; {new Date().getFullYear()} Fairfield. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Toaster position="top-right" toastOptions={{
          duration: 4000,
          style: { borderRadius: '12px', background: '#111833', color: '#e2e8f0', fontSize: '13px', border: '1px solid rgba(255,255,255,0.06)' }
        }} />
        <AppContent />
      </AuthProvider>
    </HashRouter>
  )
}

export default App
