import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import IntakeInterno from './pages/IntakeInterno'
import IntakeExterno from './pages/IntakeExterno'
import Dashboard from './pages/Dashboard'
import SLA from './pages/SLA'

function App() {
  return (
    <HashRouter>
      <Toaster position="top-right" toastOptions={{
        duration: 4000,
        style: { borderRadius: '8px', background: '#0A1628', color: '#fff' }
      }} />
      <div className="min-h-screen flex flex-col">
        <header className="bg-navy shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <NavLink to="/" className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <img src={`${import.meta.env.BASE_URL}logos/sentinel.png`} alt="SENTINEL" className="h-9 w-9 object-contain" />
                  <h1 className="text-2xl font-bold tracking-tight">
                    <span className="text-cobre">SENTINEL</span>
                  </h1>
                </div>
                <span className="hidden sm:block text-xs text-gray-400 border-l border-gray-600 pl-3 leading-tight">
                  Cotações Inteligentes<br />
                  <span className="text-gray-500">by Fairfield</span>
                </span>
              </NavLink>
              <nav className="flex gap-1">
                <NavLink to="/" end className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive ? 'bg-cobre text-white' : 'text-gray-300 hover:text-white hover:bg-navy-light'}`
                }>Cotação</NavLink>
                <NavLink to="/dashboard" className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive ? 'bg-cobre text-white' : 'text-gray-300 hover:text-white hover:bg-navy-light'}`
                }>Dashboard</NavLink>
                <NavLink to="/sla" className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive ? 'bg-cobre text-white' : 'text-gray-300 hover:text-white hover:bg-navy-light'}`
                }>SLA</NavLink>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cotacao/interno" element={<IntakeInterno />} />
            <Route path="/cotacao/externo" element={<IntakeExterno />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sla" element={<SLA />} />
          </Routes>
        </main>
        <footer className="bg-navy text-center py-4 mt-8">
          <p className="text-cobre text-sm font-semibold">SENTINEL — Plataforma de Cotações Inteligentes com IA</p>
          <p className="text-gray-400 text-xs mt-1">Fairfield Consultoria em Seguros | SUSEP 20.2036457.1 | www.fairfield.com.br</p>
        </footer>
      </div>
    </HashRouter>
  )
}

export default App
