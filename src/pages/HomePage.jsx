import { motion } from 'framer-motion'
import { ArrowDown, Mail, Phone, Sparkles, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import SubjectCard from '../components/SubjectCard'
import { subjects } from '../data/data'
import { siteConfig } from '../data/site'

function HomePage() {
  return (
    <div className="w-full space-y-8">
      <section className="page-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-transparent to-violet-500/10" />
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-500/14 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              <Sparkles className="h-4 w-4" />
              Structured learning space for Class 10 students
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {siteConfig.brandName}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.55 }}
              className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.55 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <div className="metric-card">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Subjects
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">2</p>
              </div>
              <div className="metric-card">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Chapters
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">27</p>
              </div>
              <div className="metric-card">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Access
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">UI Ready</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.18, duration: 0.65 }}
            className="panel-card-strong"
          >
            <div className="grid gap-4">
              {[
                'Chapter-wise access designed for quick subject navigation',
                'Notes, question banks, solutions, login, and admin tools in one system',
                'Professional layout tuned for students, parents, and class management',
              ].map((item) => (
                <div
                  key={item}
                  className="panel-card flex items-center gap-3"
                >
                  <div className="rounded-xl bg-white/10 p-2 text-cyan-200">
                    <Star className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}

              <div className="mt-2 flex items-center gap-3 text-sm text-slate-300">
                <ArrowDown className="h-4 w-4 text-cyan-300" />
                Choose a subject below or use the sidebar to move anywhere in the site.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
              Subjects
            </p>
            <h3 className="mt-2 text-3xl font-semibold text-white">
              Pick your study track
            </h3>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {subjects.map((subject, index) => (
            <SubjectCard key={subject.id} subject={subject} index={index} />
          ))}
        </div>
      </section>

      <section className="section-shell overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-200/70">
              Contact Owner
            </p>
            <h3 className="mt-2 text-3xl font-semibold text-white">
              Reach out to {siteConfig.brandName}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              For questions, note requests, or any academic support, use the contact
              page or reach the owner directly through email and phone.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <div className="panel-card inline-flex items-center gap-3 text-slate-200">
                <div className="rounded-xl bg-white/10 p-2 text-cyan-200">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium">{siteConfig.ownerEmail}</span>
              </div>
              <div className="panel-card inline-flex items-center gap-3 text-slate-200">
                <div className="rounded-xl bg-white/10 p-2 text-cyan-200">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-medium">{siteConfig.ownerPhone}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={siteConfig.gmailComposeUrl}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              <Mail className="h-4 w-4" />
              Email Me Right Now
            </a>
            <Link to="/contact" className="button-secondary">
              Open Contact Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
