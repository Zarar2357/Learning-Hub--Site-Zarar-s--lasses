import { motion } from 'framer-motion'
import { BookOpenText, Mail, ShieldCheck } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { siteConfig } from '../data/site'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/subject/mathematics', label: 'Mathematics' },
  { to: '/subject/science', label: 'Science' },
  { to: '/contact', label: 'Contact', icon: Mail },
  { to: '/privacy', label: 'Privacy', icon: ShieldCheck },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 text-slate-950 shadow-glow">
              <BookOpenText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/80">
                Learning Hub
              </p>
              <h1 className="text-lg font-semibold text-white">{siteConfig.brandName}</h1>
            </div>
          </Link>

          <a
            href={siteConfig.gmailComposeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:scale-105 hover:shadow-[0_18px_40px_rgba(20,184,166,0.35)]"
          >
            <Mail className="h-4 w-4" />
            Email Me Right Now
          </a>
        </div>

        <nav className="flex flex-wrap items-center gap-2 rounded-[1.5rem] border border-white/10 bg-white/5 p-2">
          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 inline-flex items-center gap-2">
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
