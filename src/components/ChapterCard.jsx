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
        className="group block h-full rounded-[1.75rem] border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/25"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div
            className={`inline-flex rounded-2xl bg-gradient-to-br ${accent} p-3 text-white shadow-lg`}
          >
            <Icon className="h-5 w-5" />
          </div>

          <div
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
              hasContent
                ? 'border border-emerald-300/20 bg-emerald-300/10 text-emerald-100'
                : 'border border-white/10 bg-white/5 text-slate-300'
            }`}
          >
            {hasContent ? <BookOpenCheck className="h-3.5 w-3.5" /> : <Clock3 className="h-3.5 w-3.5" />}
            {hasContent ? 'Content Uploaded' : 'Coming Soon'}
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold leading-7 text-white">
            {chapter.title}
          </h3>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-300">
          {hasContent
            ? 'Detailed notes and question bank are available for this chapter.'
            : 'Content will be uploaded soon.'}
        </p>
      </Link>
    </motion.div>
  )
}

export default ChapterCard
