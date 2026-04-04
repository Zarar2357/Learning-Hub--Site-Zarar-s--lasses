import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="flex w-full items-center justify-center">
      <section className="section-shell w-full max-w-2xl px-6 py-14 text-center sm:px-10">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">404</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Page not found</h2>
        <p className="mt-4 text-slate-300">
          The page you’re looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:border-white/20 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Return home
        </Link>
      </section>
    </div>
  )
}

export default NotFoundPage
