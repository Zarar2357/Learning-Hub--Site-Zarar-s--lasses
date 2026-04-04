import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-center text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
        <div>
          <p className="font-medium text-slate-200">{siteConfig.brandName}</p>
          <p>Class 10 notes platform for Mathematics and Science students.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
          <Link to="/contact" className="transition hover:text-white">
            Contact
          </Link>
          <Link to="/privacy" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <a href={siteConfig.ownerPhoneHref} className="transition hover:text-white">
            {siteConfig.ownerPhone}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
