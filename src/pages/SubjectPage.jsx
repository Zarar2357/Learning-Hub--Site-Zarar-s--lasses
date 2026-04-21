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
    <div className="w-full space-y-8">
      <section className="page-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-transparent to-violet-500/10" />

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link to="/ncert-class-10th" className="button-secondary">
              <ArrowLeft className="h-4 w-4" />
              Back to NCERT Class 10th
            </Link>

            <div className="mt-7 flex items-center gap-4">
              <div
                className={`rounded-[1.55rem] bg-gradient-to-br ${subject.accent} p-4 text-white shadow-xl`}
              >
                <SubjectIcon className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Subject Overview
                </p>
                <h2 className="mt-2 text-4xl font-semibold text-white">
                  {subject.title}
                </h2>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Browse all chapters for {subject.title}. Uploaded notes, question
              banks, and solutions are clearly marked in the chapter grid below.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="panel-card-strong"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
                <BookText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Available chapters</p>
                <p className="text-3xl font-semibold text-white">
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

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
