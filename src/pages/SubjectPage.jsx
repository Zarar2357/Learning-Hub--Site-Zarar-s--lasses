import { motion } from 'framer-motion'
import { ArrowLeft, BookText } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ChapterCard from '../components/ChapterCard'
import { getChapterContent } from '../data/chapterContent'
import { getSubjectById } from '../data/data'

function SubjectPage() {
  const { subjectId } = useParams()
  const subject = getSubjectById(subjectId)

  if (!subject) {
    return <Navigate to="/" replace />
  }

  const SubjectIcon = subject.icon
  const uploadedCount = subject.chapters.filter((chapter) =>
    getChapterContent(subject.id, chapter.id),
  ).length

  return (
    <div className="w-full">
      <section className="section-shell overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="mt-6 flex items-center gap-4">
              <div
                className={`rounded-[1.75rem] bg-gradient-to-br ${subject.accent} p-4 text-white shadow-xl`}
              >
                <SubjectIcon className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Subject Overview
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  {subject.title}
                </h2>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Browse all chapters for {subject.title}. Chapters with uploaded notes
              are marked clearly in the grid below.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
                <BookText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Available chapters</p>
                <p className="text-2xl font-semibold text-white">
                  {subject.chapters.length}
                </p>
                <p className="mt-1 text-sm text-emerald-200">
                  {uploadedCount} with content uploaded
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {subject.chapters.map((chapter, index) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            subjectId={subject.id}
            accent={subject.accent}
            hasContent={Boolean(getChapterContent(subject.id, chapter.id))}
            index={index}
          />
        ))}
      </section>
    </div>
  )
}

export default SubjectPage
