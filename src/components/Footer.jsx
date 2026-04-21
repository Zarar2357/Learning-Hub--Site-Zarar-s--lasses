import { Mail, Phone, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/55 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[88rem] gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="panel-card-strong">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/70">
            {siteConfig.brandName}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            Professional Class 10 learning platform
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            A focused study environment for Mathematics and Science notes, chapter access,
            practice work, student login, and admin management.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="panel-card">
            <p className="text-sm font-medium text-slate-400">Quick links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-200">
              <Link to="/contact" className="inline-flex items-center gap-2 transition hover:text-white">
                <Mail className="h-4 w-4 text-cyan-200" />
                Contact
              </Link>
              <Link to="/privacy" className="inline-flex items-center gap-2 transition hover:text-white">
                <ShieldCheck className="h-4 w-4 text-cyan-200" />
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="panel-card">
            <p className="text-sm font-medium text-slate-400">Owner contact</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-200">
              <a href={siteConfig.ownerPhoneHref} className="inline-flex items-center gap-2 transition hover:text-white">
                <Phone className="h-4 w-4 text-cyan-200" />
                {siteConfig.ownerPhone}
              </a>
              <a
                href={siteConfig.gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-cyan-200" />
                {siteConfig.ownerEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
