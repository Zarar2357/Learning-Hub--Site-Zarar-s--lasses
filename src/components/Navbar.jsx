import { AnimatePresence, motion } from 'framer-motion'
import {
  BookOpenText,
  LogIn,
  LogOut,
  Mail,
  Menu,
  Moon,
  ShieldCheck,
  Sun,
  UserRound,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { siteConfig } from '../data/site'
import { getDashboardRouteForRole, getRoleLabel } from '../utils/accountRoutes'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/ncert-class-10th', label: 'NCERT Class 10th', icon: BookOpenText },
  { to: '/contact', label: 'Contact', icon: Mail },
  { to: '/privacy', label: 'Privacy', icon: ShieldCheck },
]

function SidebarNavLink({ item, onNavigate }) {
  const Icon = item.icon

  return (
    <NavLink
      to={item.to}
      onClick={onNavigate}
      className={({ isActive }) =>
        `group relative block w-full overflow-hidden rounded-[1.35rem] border px-4 py-3 text-sm font-medium transition ${
          isActive
            ? 'border-cyan-300/20 bg-cyan-300/10 text-white'
            : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white'
        }`
      }
    >
      {({ isActive }) => (
        <span className="relative z-10 inline-flex items-center gap-3">
          {Icon ? (
            <span
              className={`rounded-full p-2 ${
                isActive ? 'bg-cyan-300/15 text-cyan-100' : 'bg-white/5 text-slate-300'
              }`}
            >
              <Icon className="h-4 w-4" />
            </span>
          ) : (
            <span
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
                isActive ? 'bg-cyan-300/15 text-cyan-100' : 'bg-white/5 text-slate-300'
              }`}
            >
              <span className="text-xs font-semibold">
                {item.label.slice(0, 1)}
              </span>
            </span>
          )}
          {item.label}
        </span>
      )}
    </NavLink>
  )
}

function Navbar() {
  const navigate = useNavigate()
  const { currentUser, isAuthenticated, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const dashboardRoute = isAuthenticated
    ? getDashboardRouteForRole(currentUser?.role)
    : '/login'
  const sidebarItems = [
    navItems[0],
    {
      to: dashboardRoute,
      label: isAuthenticated ? 'Dashboard' : 'Account Login',
      icon: UserRound,
    },
    ...navItems.slice(1),
  ]

  function handleLogout() {
    setIsSidebarOpen(false)
    logout()
    navigate('/login')
  }

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex w-full items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setIsSidebarOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white -ml-1 sm:-ml-2"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </button>

              <Link to="/" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 text-slate-950 shadow-glow">
                  <BookOpenText className="h-5 w-5" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-white sm:text-xl">
                    {siteConfig.brandName}
                  </h1>
                </div>
              </Link>
            </div>

              <div className="flex items-center gap-2 sm:gap-3">
              {isAuthenticated ? (
                <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  <UserRound className="h-4 w-4 text-cyan-200" />
                  {currentUser?.name}
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs uppercase tracking-[0.2em] text-cyan-100">
                    {getRoleLabel(currentUser?.role)}
                  </span>
                </div>
              ) : null}

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="theme-toggle-btn inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              <a
                href={siteConfig.gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:scale-105 hover:shadow-[0_18px_40px_rgba(20,184,166,0.35)]"
              >
                <Mail className="h-4 w-4" />
                Email Me Right Now
              </a>

              {isAuthenticated ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <LogIn className="h-4 w-4" />
                  Account Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {isSidebarOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: 'easeInOut' }}
              onClick={closeSidebar}
              className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-md"
            />

            <motion.aside
              initial={{ x: -340, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -340, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 left-0 z-50 w-[min(86vw,22rem)] border-r border-white/10 bg-slate-950/95 px-5 py-5 shadow-[0_30px_80px_rgba(2,6,23,0.65)] backdrop-blur-2xl"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200/80">
                      Navigation
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">
                      Browse the site
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={closeSidebar}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                    aria-label="Close navigation menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="mt-8 space-y-3">
                  {sidebarItems.map((item) => (
                    <SidebarNavLink
                      key={item.to}
                      item={item}
                      onNavigate={closeSidebar}
                    />
                  ))}
                </nav>

                <div className="mt-auto rounded-[1.5rem] border border-cyan-300/15 bg-cyan-300/10 p-4 text-sm leading-7 text-slate-200">
                  {isAuthenticated
                    ? `${currentUser?.name} is signed in as ${getRoleLabel(currentUser?.role)}.`
                    : 'Use this sidebar to move across the site without shifting the page layout.'}
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default Navbar
