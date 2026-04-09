import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, NavLink, useSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import NdaAcceptance from './pages/NdaAcceptance'
import IntakeInterno from './pages/IntakeInterno'
import IntakeExterno from './pages/IntakeExterno'
import Dashboard from './pages/Dashboard'
import SLA from './pages/SLA'

const B = import.meta.env.BASE_URL

function AppContent() {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const { user, ndaAccepted, logout } = useAuth()
  const isAdmin = searchParams.get('admin') === '1'
  const isHome = location.pathname === '/'
  const isIntake = location.pathname.startsWith('/cotacao')
  const [homeStarted, setHomeStarted] = useState(false)

  useEffect(() => {
    function onStarted() { setHomeStarted(true) }
    function onReset() { setHomeStarted(false) }
    window.addEventListener('sentinel-started', onStarted)
    window.addEventListener('sentinel-reset', onReset)
    return () => { window.removeEventListener('sentinel-started', onStarted); window.removeEventListener('sentinel-reset', onReset) }
  }, [])

  useEffect(() => { if (!isHome) setHomeStarted(false) }, [isHome])

  // Check if prospect needs login or NDA before accessing intake
  const needsAuth = isIntake && !user
  const needsNda = isIntake && user && !ndaAccepted

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-navy shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <NavLink to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <img src={`${B}logos/sentinel.png`} alt="SENTINEL" className="h-7 w-7 sm:h-9 sm:w-9 object-contain" />
                <h1 className="text-lg sm:text-2xl font-bold tracking-tight">
                  <span className="text-[#7DD3FC]">SENTINEL</span>
                </h1>
              </div>
              <span className="hidden md:block text-xs text-gray-400 border-l border-gray-600 pl-3 leading-tight">
                Cotacoes Inteligentes<br />
                <span className="text-gray-500">by Fairfield</span>
              </span>
            </NavLink>
            <nav className="flex items-center gap-1 sm:gap-2">
              {/* Iniciar button - home only, before started */}
              {isHome && !homeStarted && (
                <a href="#iniciar" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('sentinel-iniciar')) }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all bg-cobre text-white hover:bg-cobre/80 cursor-pointer"
                >Iniciar</a>
              )}
              {/* User info */}
              {user && !isAdmin && (
                <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400 border-l border-gray-600 pl-3 ml-1">
                  <span className="text-white font-medium">{user.nome.split(' ')[0]}</span>
                  <button onClick={logout} className="text-gray-500 hover:text-red-400 transition-colors" title="Sair">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </button>
                </div>
              )}
              {/* Admin nav */}
              {isAdmin && (
                <>
                  <NavLink to="/dashboard?admin=1" className={({ isActive }) =>
                    `px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${isActive ? 'bg-cobre text-white' : 'text-gray-300 hover:text-white hover:bg-navy-light'}`
                  }>Dashboard</NavLink>
                  <NavLink to="/sla?admin=1" className={({ isActive }) =>
                    `px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${isActive ? 'bg-cobre text-white' : 'text-gray-300 hover:text-white hover:bg-navy-light'}`
                  }>SLA</NavLink>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {needsAuth ? (
          <Login />
        ) : needsNda ? (
          <NdaAcceptance />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cotacao/interno" element={<IntakeInterno />} />
            <Route path="/cotacao/externo" element={<IntakeExterno />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sla" element={<SLA />} />
          </Routes>
        )}
      </main>
      <footer className="bg-navy text-center py-3 sm:py-4 mt-6 sm:mt-8 px-4">
        <p className="text-cobre text-xs sm:text-sm font-semibold">SENTINEL — Plataforma de Cotacoes Inteligentes com IA</p>
        <p className="text-gray-400 text-[10px] sm:text-xs mt-1">Fairfield Consultoria em Seguros | SUSEP 20.2036457.1 | www.fairfield.com.br</p>
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
          style: { borderRadius: '8px', background: '#0A1628', color: '#fff', fontSize: '14px' }
        }} />
        <AppContent />
      </AuthProvider>
    </HashRouter>
  )
}

export default App
