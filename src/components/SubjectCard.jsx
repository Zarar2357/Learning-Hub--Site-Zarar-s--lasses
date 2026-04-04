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
        className={`group relative block overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 ${subject.glow}`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${subject.accent} opacity-85 transition duration-500 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_38%)]" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15 text-white shadow-lg">
              <Icon className="h-8 w-8" />
            </div>
            <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              Subject
            </div>
          </div>

          <h3 className="text-3xl font-semibold tracking-tight text-white">
            {subject.title}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
            {subject.subtitle}
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white">
            Explore chapters
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default SubjectCard
