import { motion } from 'framer-motion'
import { BookOpenCheck, Sparkles } from 'lucide-react'
import SubjectCard from '../components/SubjectCard'
import { subjects } from '../data/data'

function NcertClass10Page() {
  return (
    <div className="w-full space-y-8">
      <section className="page-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-transparent to-violet-500/10" />
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-cyan-400/16 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/14 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              <Sparkles className="h-4 w-4" />
              Organized NCERT pathway for Class 10
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl"
            >
              NCERT Class 10th
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.55 }}
              className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              Start from this hub to choose your Class 10 NCERT subject and move
              into chapters, uploaded notes, question banks, and worked solutions.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.18, duration: 0.65 }}
            className="panel-card-strong"
          >
            <div className="grid gap-4">
              {[
                'Central hub for Mathematics and Science',
                'Professional entry page before chapter browsing',
                'Cleaner navigation structure for Class 10 NCERT content',
              ].map((item) => (
                <div key={item} className="panel-card flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-2 text-cyan-200">
                    <BookOpenCheck className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
            NCERT Subjects
          </p>
          <h3 className="mt-2 text-3xl font-semibold text-white">
            Choose your Class 10 subject
          </h3>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
          {subjects.map((subject, index) => (
            <SubjectCard key={subject.id} subject={subject} index={index} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default NcertClass10Page
