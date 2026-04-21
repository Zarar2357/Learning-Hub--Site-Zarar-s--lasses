import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpenCheck, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'

function ChapterCard({ chapter, subjectId, accent, hasContent, index = 0 }) {
  const Icon = chapter.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.4, ease: 'easeOut' }}
    >
      <Link
        to={`/subject/${subjectId}/chapter/${chapter.id}`}
        className="group relative block h-full overflow-hidden rounded-[1.7rem] border border-white/10 p-5 shadow-[0_18px_50px_rgba(2,10,24,0.28)] transition duration-300 hover:-translate-y-1.5 hover:border-white/20"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))]" />
        <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-[0.08] transition duration-500 group-hover:opacity-[0.12]`} />

        <div className="relative z-10">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div
              className={`inline-flex rounded-[1.15rem] bg-gradient-to-br ${accent} p-3 text-white shadow-lg`}
            >
              <Icon className="h-5 w-5" />
            </div>

            <div
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                hasContent
                  ? 'border border-emerald-300/15 bg-emerald-300/10 text-emerald-100'
                  : 'border border-white/10 bg-white/5 text-slate-300'
              }`}
            >
              {hasContent ? (
                <BookOpenCheck className="h-3.5 w-3.5" />
              ) : (
                <Clock3 className="h-3.5 w-3.5" />
              )}
              {hasContent ? 'Uploaded' : 'Pending'}
            </div>
          </div>

          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold leading-7 text-white">
              {chapter.title}
            </h3>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            {hasContent
              ? 'Professional notes, questions, and solutions are available for this chapter.'
              : 'This chapter shell is ready and waiting for uploaded content.'}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default ChapterCard
