import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function SubjectCard({ subject, index = 0 }) {
  const Icon = subject.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * index, duration: 0.5, ease: 'easeOut' }}
    >
      <Link
        to={`/subject/${subject.id}`}
        className={`group relative block overflow-hidden rounded-[1.6rem] border border-white/10 p-5 shadow-[0_18px_50px_rgba(2,10,24,0.3)] transition duration-300 hover:-translate-y-1 hover:border-white/20 ${subject.glow}`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${subject.accent} opacity-[0.18] transition duration-500 group-hover:scale-105 group-hover:opacity-[0.24]`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%)]" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-[0.9rem] bg-gradient-to-br ${subject.accent} text-white shadow-lg`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300">
              NCERT
            </div>
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {subject.title}
          </h3>
          <p className="mt-2.5 max-w-sm text-sm leading-6 text-slate-300">
            {subject.subtitle}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
            Open subject
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default SubjectCard
