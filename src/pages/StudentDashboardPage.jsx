import { motion } from 'framer-motion'
import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  MessageSquareText,
  UserRound,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import {
  formatAttendanceDate,
  getAttendanceStatusLabel,
} from '../data/attendance'

function StudentDashboardPage() {
  const { student, getStudentById } = useAuth()
  const studentRecord = getStudentById(student?.id) ?? student
  const attendanceHistory = [...(studentRecord?.attendance ?? [])].sort((first, second) =>
    second.date.localeCompare(first.date),
  )
  const latestAttendance = attendanceHistory[0] ?? null

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
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
              Student Dashboard
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Welcome, {studentRecord?.name}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              This dashboard is accessible only after login. It is reserved for
              the student account linked to {studentRecord?.email}.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-4 text-white">
                <UserRound className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Student Name</p>
                <p className="text-xl font-semibold text-white">{studentRecord?.name}</p>
                <p className="mt-1 text-sm text-slate-300">{studentRecord?.email}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
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

            {studentRecord?.results?.length ? (
              studentRecord.results.map((result) => (
                <div
                  key={`${studentRecord.id}-${result.test}`}
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
          className="space-y-6"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
                <CalendarDays className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  Attendance
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-white">
                  {latestAttendance
                    ? getAttendanceStatusLabel(latestAttendance.status)
                    : 'No attendance yet'}
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {latestAttendance
                ? `Latest attendance update: ${formatAttendanceDate(latestAttendance.date)}`
                : 'Attendance will appear here once the admin marks it.'}
            </p>

            <div className="mt-5 space-y-3">
              {attendanceHistory.length ? (
                attendanceHistory.slice(0, 5).map((entry) => (
                  <div
                    key={`${studentRecord.id}-attendance-${entry.date}`}
                    className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-300"
                  >
                    <span>{formatAttendanceDate(entry.date)}</span>
                    <span className="font-medium text-white">
                      {getAttendanceStatusLabel(entry.status)}
                    </span>
                  </div>
                ))
              ) : (
                <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/40 px-4 py-3 text-sm leading-7 text-slate-300">
                  No attendance history available.
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  Result Status
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-white">
                  {studentRecord?.results?.length ? 'Results available' : 'No results yet'}
                </h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {studentRecord?.results?.length
                ? 'Your test results are available in the exam records table above.'
                : 'No exam data is available right now. Once tests are added later, marks and percentage will appear here.'}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
                <MessageSquareText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  Feedback
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-white">
                  {studentRecord?.feedback?.length ? 'Feedback available' : 'No feedback available'}
                </h3>
              </div>
            </div>
            {studentRecord?.feedback?.length ? (
              <div className="mt-4 space-y-3">
                {studentRecord.feedback.map((entry, index) => (
                  <div
                    key={`${studentRecord.id}-feedback-${index}`}
                    className="rounded-[1.25rem] border border-white/10 bg-slate-950/40 px-4 py-3 text-sm leading-7 text-slate-300"
                  >
                    {entry}
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Feedback for exams will appear here after tests are attempted and reviewed.
              </p>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default StudentDashboardPage
