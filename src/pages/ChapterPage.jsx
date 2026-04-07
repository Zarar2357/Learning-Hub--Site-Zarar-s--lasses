import { motion } from 'framer-motion'
import {
  ArrowLeft,
  BookOpenCheck,
  BookText,
  CircleHelp,
  Download,
  ScrollText,
  Sparkles,
} from 'lucide-react'
import { Fragment, useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getChapterContent } from '../data/chapterContent'
import { getChapterById, getSubjectById } from '../data/data'

function renderMathText(text) {
  const parts = String(text).split(/(\^[A-Za-z0-9+-]+)/g)

  return parts.map((part, index) => {
    if (part.startsWith('^')) {
      return <sup key={`${part}-${index}`}>{part.slice(1)}</sup>
    }

    return <Fragment key={`${part}-${index}`}>{part}</Fragment>
  })
}

function ChapterPage() {
  const { subjectId, chapterId } = useParams()
  const subject = getSubjectById(subjectId)
  const chapter = getChapterById(subject, chapterId)
  const content = getChapterContent(subjectId, chapterId)
  const exportRef = useRef(null)
  const [isDownloading, setIsDownloading] = useState(false)

  if (!subject || !chapter) {
    return <Navigate to="/" replace />
  }

  const ChapterIcon = chapter.icon

  async function handleDownloadPdf() {
    if (!exportRef.current || !content || isDownloading) {
      return
    }

    setIsDownloading(true)

    try {
      const canvas = await html2canvas(exportRef.current, {
        backgroundColor: '#020617',
        scale: 2,
        useCORS: true,
        logging: false,
      })

      const imageData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const margin = 10
      const usableWidth = pageWidth - margin * 2
      const imageHeight = (canvas.height * usableWidth) / canvas.width
      const printableHeight = pageHeight - margin * 2
      let remainingHeight = imageHeight
      let position = margin

      pdf.addImage(imageData, 'PNG', margin, position, usableWidth, imageHeight)
      remainingHeight -= printableHeight

      while (remainingHeight > 0) {
        position = margin - (imageHeight - remainingHeight)
        pdf.addPage()
        pdf.addImage(imageData, 'PNG', margin, position, usableWidth, imageHeight)
        remainingHeight -= printableHeight
      }

      const filename = `${subject.title}-${chapter.title}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')

      pdf.save(`${filename}.pdf`)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="flex w-full justify-center">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="section-shell relative w-full max-w-6xl overflow-hidden px-6 py-10 sm:px-10"
      >
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${subject.accent}`} />
        <div className="absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        <Link
          to={`/subject/${subject.id}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {subject.title}
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
              {chapter.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              {content
                ? 'Structured notes and a full question bank for classroom teaching, revision, and practice.'
                : 'This page is ready for future notes, summaries, or chapter resources.'}
            </p>
          </div>

          {content ? (
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleDownloadPdf}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-300/30 hover:bg-emerald-300/15"
              >
                <Download className="h-4 w-4" />
                {isDownloading ? 'Preparing PDF...' : 'Download PDF'}
              </button>
              <a
                href="#notes"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
              >
                <ScrollText className="h-4 w-4" />
                Notes
              </a>
              <a
                href="#questions"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
              >
                <CircleHelp className="h-4 w-4" />
                Questions
              </a>
            </div>
          ) : null}
        </div>

        {content ? (
          <div ref={exportRef} className="mt-10 space-y-8">
            <section
              id="notes"
              className="overflow-hidden rounded-[2rem] border border-amber-100/40 bg-[#f8f1e3] shadow-[0_30px_80px_rgba(15,23,42,0.28)]"
            >
              <div className="border-b border-[#d9cdb8] bg-[linear-gradient(135deg,rgba(210,184,140,0.2),rgba(255,255,255,0.55))] px-6 py-6 sm:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#cdbb9b] bg-white/60 px-4 py-2 text-sm text-slate-700">
                      <BookText className="h-4 w-4" />
                      Section 1: Detailed Notes
                    </div>
                    <h3 className="mt-4 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
                      {content.notesTitle}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-8 text-slate-700">
                      {content.notesIntro}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[linear-gradient(to_bottom,rgba(34,197,94,0.08)_1px,transparent_1px)] bg-[length:100%_2.2rem] px-6 py-8 sm:px-8">
                <div className="border-l-4 border-rose-300/70 pl-5 sm:pl-7">
                  <div className="space-y-10 font-serif text-slate-800">
                    {content.notes.map((item) => (
                      <article key={item.title} className="relative">
                        <h4 className="text-2xl font-semibold tracking-tight text-slate-900">
                          {renderMathText(item.title)}
                        </h4>

                        {item.definition ? (
                          <div className="mt-4">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                              Definition
                            </p>
                            <p className="mt-2 text-lg leading-9 text-slate-800">
                              {renderMathText(item.definition)}
                            </p>
                          </div>
                        ) : null}

                        {item.bullets?.length ? (
                          <div className="mt-4 space-y-2 text-lg leading-9 text-slate-800">
                            {item.bullets.map((bullet) => (
                              <p key={bullet} className="pl-2">
                                - {renderMathText(bullet)}
                              </p>
                            ))}
                          </div>
                        ) : null}

                        {item.examples?.length ? (
                          <div className="mt-5 rounded-[1.5rem] border border-[#dccfb8] bg-white/60 px-5 py-4 shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                              Examples
                            </p>
                            <div className="mt-3 space-y-2 text-lg leading-8 text-slate-800">
                              {item.examples.map((example) => (
                                <p key={example}>{renderMathText(example)}</p>
                              ))}
                            </div>
                          </div>
                        ) : null}

                        {item.formula ? (
                          <div className="mt-5 rounded-[1.5rem] border border-violet-200 bg-violet-50/90 px-5 py-4 text-lg font-medium leading-8 text-violet-950 shadow-sm">
                            {renderMathText(item.formula)}
                          </div>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-[#d9cdb8] bg-white/55 px-6 py-6 sm:px-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#cdbb9b] bg-white/70 px-4 py-2 text-sm text-slate-700">
                  <Sparkles className="h-4 w-4" />
                  Quick Summary
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {content.summary.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.4rem] border border-[#dccfb8] bg-white/70 px-4 py-3 text-base leading-8 text-slate-800 shadow-sm"
                    >
                      {renderMathText(point)}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="questions" className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-2 text-sm text-fuchsia-100">
                    <CircleHelp className="h-4 w-4" />
                    Section 2: Question Bank
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                    {content.questionsTitle}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
                    {content.questionsIntro}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-200">
                  50 total questions
                </div>
              </div>

              <div className="mt-8 grid gap-5 xl:grid-cols-2">
                {content.questionGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 shadow-xl"
                  >
                    <div
                      className={`inline-flex rounded-full bg-gradient-to-r ${group.accent} px-4 py-2 text-sm font-semibold text-slate-950`}
                    >
                      {group.title}
                    </div>
                    <ol className="mt-5 space-y-3">
                      {group.questions.map((question, index) => (
                        <li
                          key={question}
                          className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-slate-200"
                        >
                          <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-white/10 px-2 text-xs font-semibold text-cyan-100">
                            {index + 1}
                          </span>
                          <span className="pt-0.5">{renderMathText(question)}</span>
                        </li>
                      ))}
                    </ol>
                  </article>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 text-center backdrop-blur-xl">
            <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Chapter content area
            </div>

            <div className="mt-6 flex justify-center text-white/90">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-4">
                <BookOpenCheck className="h-12 w-12" />
              </div>
            </div>

            <p className="mt-6 text-xl font-medium text-white sm:text-2xl">
              Content will be uploaded soon.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
              This page is ready for future notes, summaries, or chapter resources.
            </p>
          </div>
        )}
      </motion.section>
    </div>
  )
}

export default ChapterPage
