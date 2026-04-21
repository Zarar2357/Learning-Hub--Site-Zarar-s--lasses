import { motion } from 'framer-motion'
import { ArrowLeft, ClipboardList, MessageSquareText, UserRound } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function AdminStudentDetailsPage() {
  const { studentId } = useParams()
  const { getStudentById } = useAuth()
  const student = getStudentById(studentId)

  if (!student) {
    return <Navigate to="/admin/students" replace />
  }

  return (
    <div className="w-full">
      <section className="section-shell overflow-hidden px-6 py-10 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div>
            <Link
              to="/admin/students"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to students
            </Link>

            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-cyan-200/70">
              Student Details
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {student.name}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Review this student account, including the current result status and feedback area.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-4 text-white">
                <UserRound className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Student account</p>
                <p className="text-xl font-semibold text-white">{student.name}</p>
                <p className="mt-1 text-sm text-slate-300">{student.email}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
              <ClipboardList className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                Tests
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-white">Exam records</h3>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="grid grid-cols-3 bg-white/10 px-4 py-3 text-sm font-semibold text-slate-200">
              <p>Test</p>
              <p>Marks</p>
              <p>Percentage</p>
            </div>

            {student.results.length ? (
              student.results.map((result) => (
                <div
                  key={`${student.id}-${result.test}`}
                  className="grid grid-cols-3 px-4 py-5 text-sm text-slate-300"
                >
                  <p>{result.test}</p>
                  <p>{result.marks}</p>
                  <p>{result.percentage}</p>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-3 px-4 py-5 text-sm text-slate-300">
                <p>No data available</p>
                <p>No data available</p>
                <p>No data available</p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.45 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
              <MessageSquareText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                Feedback
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-white">Student feedback area</h3>
            </div>
          </div>

          {student.feedback.length ? (
            <div className="mt-6 space-y-4">
              {student.feedback.map((entry, index) => (
                <div
                  key={`${student.id}-feedback-${index}`}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 px-4 py-4 text-sm leading-7 text-slate-300"
                >
                  {entry}
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm leading-7 text-slate-300">
              No feedback available for this student right now.
            </p>
          )}
        </motion.div>
      </section>
    </div>
  )
}

export default AdminStudentDetailsPage
