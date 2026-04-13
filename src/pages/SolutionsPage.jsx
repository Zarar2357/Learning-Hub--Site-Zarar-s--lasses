import { motion } from 'framer-motion'
import {
  ArrowLeft,
  BookCheck,
  CircleHelp,
  GraduationCap,
  LoaderCircle,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getChapterContent } from '../data/chapterContent'
import { getChapterById, getSubjectById } from '../data/data'
import {
  hasChapterSolutions,
  loadChapterSolutions,
} from '../data/solutions'
import { renderMathText } from '../utils/renderMathText'

function getGroupId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function SolutionsPage() {
  const { subjectId, chapterId } = useParams()
  const subject = getSubjectById(subjectId)
  const chapter = getChapterById(subject, chapterId)
  const content = getChapterContent(subjectId, chapterId)
  const [solutionPack, setSolutionPack] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let isMounted = true

    async function hydrateSolutions() {
      if (!hasChapterSolutions(subjectId, chapterId)) {
        setStatus('missing')
        return
      }

      setStatus('loading')

      const loadedSolutions = await loadChapterSolutions(subjectId, chapterId)

      if (!isMounted) {
        return
      }

      setSolutionPack(loadedSolutions)
      setStatus(loadedSolutions ? 'ready' : 'missing')
    }

    hydrateSolutions()

    return () => {
      isMounted = false
    }
  }, [chapterId, subjectId])

  const groupOffsets = useMemo(() => {
    if (!solutionPack) {
      return []
    }

    let runningTotal = 0

    return solutionPack.questionGroups.map((group) => {
      const offset = runningTotal
      runningTotal += group.solutions.length
      return offset
    })
  }, [solutionPack])

  if (!subject || !chapter) {
    return <Navigate to="/" replace />
  }

  const ChapterIcon = chapter.icon

  if (status === 'loading') {
    return (
      <div className="flex w-full justify-center">
        <section className="section-shell w-full max-w-4xl px-6 py-12 text-center sm:px-8">
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-cyan-100">
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Loading chapter solutions...
          </div>
        </section>
      </div>
    )
  }

  if (!content || !solutionPack) {
    return <Navigate to={`/subject/${subject.id}/chapter/${chapter.id}`} replace />
  }

  const totalSolutions = solutionPack.questionGroups.reduce(
    (total, group) => total + group.solutions.length,
    0,
  )

  return (
    <div className="flex w-full justify-center">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="section-shell relative w-full max-w-6xl overflow-hidden px-6 py-10 sm:px-10"
      >
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${subject.accent}`} />
        <div className="absolute right-8 top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        <Link
          to={`/subject/${subject.id}/chapter/${chapter.id}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {chapter.title}
        </Link>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div
              className={`inline-flex rounded-[1.75rem] bg-gradient-to-br ${subject.accent} p-5 text-white shadow-2xl`}
            >
              <ChapterIcon className="h-10 w-10" />
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-slate-400">
              {subject.title}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {chapter.title} Solutions
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              {solutionPack.intro}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
              {totalSolutions} solved questions
            </div>
            {solutionPack.questionGroups.map((group) => (
              <a
                key={group.title}
                href={`#${getGroupId(group.title)}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
              >
                <CircleHelp className="h-4 w-4" />
                {group.title}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <BookCheck className="h-4 w-4" />
                Section 3: Solved Practice Set
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Step-by-step solutions
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
                Each answer follows the same practice-set order so students can move
                from question to solution smoothly.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-200">
              Detailed solutions for every uploaded practice question
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {solutionPack.questionGroups.map((group, groupIndex) => (
              <section
                key={group.title}
                id={getGroupId(group.title)}
                className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 shadow-xl sm:p-6"
              >
                <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div
                    className={`inline-flex w-fit rounded-full bg-gradient-to-r ${group.accent} px-4 py-2 text-sm font-semibold text-slate-950`}
                  >
                    {group.title}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    <GraduationCap className="h-4 w-4 text-cyan-200" />
                    {group.solutions.length} worked answers
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {group.solutions.map((solution, solutionIndex) => (
                    <article
                      key={`${group.title}-${solution.question}`}
                      className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/25 to-violet-500/25 text-sm font-semibold text-cyan-100">
                          {groupOffsets[groupIndex] + solutionIndex + 1}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-lg font-semibold leading-8 text-white">
                            {renderMathText(solution.question)}
                          </h4>

                          <div className="mt-4 space-y-3 border-l border-cyan-300/20 pl-4 text-sm leading-7 text-slate-300 sm:text-base">
                            {solution.steps.map((step) => (
                              <p key={step}>{renderMathText(step)}</p>
                            ))}
                          </div>

                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default SolutionsPage
