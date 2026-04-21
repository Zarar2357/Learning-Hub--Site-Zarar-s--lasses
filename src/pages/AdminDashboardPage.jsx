import { motion } from 'framer-motion'
import { CalendarCheck2, LayoutDashboard, ShieldCheck, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const adminCards = [
  {
    title: 'View Students',
    description: 'Open the student directory, review student records, and manage accounts.',
    to: '/admin/students',
    icon: UsersRound,
  },
  {
    title: 'Attendance',
    description: 'Open the attendance area to mark, edit, and review records.',
    to: '/admin/attendance',
    icon: CalendarCheck2,
  },
]

function AdminDashboardPage() {
  const { currentUser, students } = useAuth()

  return (
    <div className="w-full space-y-8">
      <section className="page-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-transparent to-violet-500/10" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <ShieldCheck className="h-4 w-4" />
              Admin Dashboard
            </div>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Welcome, {currentUser?.name}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              This admin area is designed for secure day-to-day class operations:
              student management, attendance handling, and account-level oversight.
            </p>
          </div>

          <div className="panel-card-strong">
            <div className="flex items-center gap-4">
              <div className="rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-4 text-white">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Admin Account</p>
                <p className="text-xl font-semibold text-white">{currentUser?.name}</p>
                <p className="mt-1 text-sm text-slate-300">{currentUser?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          className="panel-card-strong"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                Overview
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-white">Admin controls</h3>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="panel-card">
              <p className="text-sm text-slate-400">Registered students</p>
              <p className="mt-2 text-3xl font-semibold text-white">{students.length}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                All student accounts available in the current system.
              </p>
            </div>

            <div className="panel-card">
              <p className="text-sm text-slate-400">Operations</p>
              <p className="mt-2 text-3xl font-semibold text-white">Active</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Attendance and student management tools are ready for admin use.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.45 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {adminCards.map((card) => {
            const Icon = card.icon

            return (
              <Link
                key={card.to}
                to={card.to}
                className="group panel-card-strong transition duration-300 hover:-translate-y-1.5 hover:border-white/20"
              >
                <div className="rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-3 text-white shadow-lg w-fit">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
              </Link>
            )
          })}
        </motion.div>
      </section>
    </div>
  )
}

export default AdminDashboardPage
