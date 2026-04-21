import { motion } from 'framer-motion'
import {
  AlertCircle,
  CalendarCheck2,
  CheckCheck,
  ClipboardPenLine,
  ShieldCheck,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { attendanceOptions, formatAttendanceDate } from '../data/attendance'
import { useAuth } from '../context/AuthContext'

function getTodayDateString() {
  return new Date().toISOString().slice(0, 10)
}

function AdminAttendancePage() {
  const { students, updateAttendanceForDate } = useAuth()
  const [selectedDate, setSelectedDate] = useState(getTodayDateString())
  const [draftAttendance, setDraftAttendance] = useState({})
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')

  const sortedStudents = useMemo(
    () => [...students].sort((first, second) => first.name.localeCompare(second.name)),
    [students],
  )

  useEffect(() => {
    const nextDraft = Object.fromEntries(
      sortedStudents.map((student) => {
        const existingEntry = student.attendance.find(
          (attendance) => attendance.date === selectedDate,
        )

        return [student.id, existingEntry?.status ?? 'present']
      }),
    )

    setDraftAttendance(nextDraft)
    setMessage('')
    setStatus('idle')
  }, [selectedDate, sortedStudents])

  const attendanceCount = useMemo(() => {
    return sortedStudents.reduce((counts, student) => {
      const statusKey = draftAttendance[student.id]
      if (!statusKey) {
        return counts
      }

      counts[statusKey] = (counts[statusKey] ?? 0) + 1
      return counts
    }, {})
  }, [draftAttendance, sortedStudents])

  function setStudentStatus(studentId, nextStatus) {
    setDraftAttendance((current) => ({
      ...current,
      [studentId]: nextStatus,
    }))
    setMessage('')
    setStatus('idle')
  }

  function applyStatusToAll(nextStatus) {
    setDraftAttendance(
      Object.fromEntries(sortedStudents.map((student) => [student.id, nextStatus])),
    )
    setMessage('')
    setStatus('idle')
  }

  function handleSaveAttendance(event) {
    event.preventDefault()
    updateAttendanceForDate(selectedDate, draftAttendance)
    setStatus('success')
    setMessage(`Attendance saved for ${formatAttendanceDate(selectedDate)}.`)
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
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
              Admin Attendance
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Attendance
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Select any date, mark attendance for each student, and update past or
              present records whenever you need to edit them.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-4 text-white">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Access level</p>
                <p className="text-xl font-semibold text-white">Admin only</p>
                <p className="mt-1 text-sm text-slate-300">
                  Editing enabled for previous and current dates
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          onSubmit={handleSaveAttendance}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
              <ClipboardPenLine className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                Attendance Editor
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-white">Pick date and status</h3>
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Attendance date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
              className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none focus:border-cyan-300/40"
            />
            <p className="mt-2 text-sm text-slate-400">
              Editing attendance for {formatAttendanceDate(selectedDate)}.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-slate-200">Quick apply to all students</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {attendanceOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => applyStatusToAll(option.value)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {attendanceOptions.map((option) => (
              <div
                key={option.value}
                className="rounded-[1.25rem] border border-white/10 bg-slate-950/40 px-4 py-3"
              >
                <p className={`text-sm font-medium ${option.accent}`}>{option.label}</p>
                <p className="mt-1 text-2xl font-semibold text-white">
                  {attendanceCount[option.value] ?? 0}
                </p>
              </div>
            ))}
          </div>

          {message ? (
            <div
              className={`mt-6 flex items-start gap-3 rounded-[1.25rem] border px-4 py-3 text-sm leading-6 ${
                status === 'success'
                  ? 'border-emerald-300/20 bg-emerald-300/10 text-emerald-100'
                  : 'border-amber-300/20 bg-amber-300/10 text-amber-100'
              }`}
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{message}</span>
            </div>
          ) : null}

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:scale-[1.01] hover:shadow-[0_18px_40px_rgba(59,130,246,0.35)]"
          >
            <CheckCheck className="h-4 w-4" />
            Save Attendance
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.45 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
              <CalendarCheck2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                Student Attendance Grid
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-white">
                Mark attendance by student
              </h3>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {sortedStudents.map((student) => (
              <article
                key={student.id}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{student.name}</h4>
                    <p className="mt-2 text-sm text-slate-300">{student.email}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {attendanceOptions.map((option) => {
                      const isActive = draftAttendance[student.id] === option.value

                      return (
                        <button
                          key={`${student.id}-${option.value}`}
                          type="button"
                          onClick={() => setStudentStatus(student.id, option.value)}
                          className={`rounded-full border px-4 py-2 text-sm transition ${
                            isActive
                              ? 'border-cyan-300/30 bg-cyan-300/15 text-cyan-100'
                              : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10'
                          }`}
                        >
                          {option.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default AdminAttendancePage
