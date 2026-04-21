import { motion } from 'framer-motion'
import {
  AlertCircle,
  Eye,
  PlusCircle,
  Trash2,
  UserPlus,
  UsersRound,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function AdminStudentsPage() {
  const { addStudent, deleteStudent, findAccountByEmail, students } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')

  const normalizedEmail = form.email.trim().toLowerCase()
  const emailExists = normalizedEmail ? Boolean(findAccountByEmail(normalizedEmail)) : false
  const isEmailFormatValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)
  const isPasswordLengthValid = form.password.length >= 8
  const hasAtSymbol = form.password.includes('@')
  const hasNumber = /\d/.test(form.password)
  const isPasswordFormatValid = isPasswordLengthValid && hasAtSymbol && hasNumber

  const sortedStudents = useMemo(
    () => [...students].sort((first, second) => first.name.localeCompare(second.name)),
    [students],
  )

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
    setMessage('')
    setStatus('idle')
  }

  function handleCreateStudent(event) {
    event.preventDefault()

    if (!form.name.trim()) {
      setStatus('error')
      setMessage('Please enter the student name before creating the account.')
      return
    }

    if (!isEmailFormatValid) {
      setStatus('error')
      setMessage('Please enter a valid email address for the student.')
      return
    }

    if (emailExists) {
      setStatus('error')
      setMessage('An account with this email already exists.')
      return
    }

    if (!isPasswordFormatValid) {
      setStatus('error')
      setMessage('Please create a stronger password with at least 8 characters, one @ symbol, and one number.')
      return
    }

    const newStudent = addStudent(form)
    setStatus('success')
    setMessage(`Student account created for ${newStudent.name}.`)
    setForm({ name: '', email: '', password: '' })
  }

  function handleDeleteStudent(studentId, studentName) {
    if (!window.confirm(`Delete the student account for ${studentName}?`)) {
      return
    }

    deleteStudent(studentId)
    setStatus('success')
    setMessage(`Student account deleted for ${studentName}.`)
  }

  return (
    <div className="w-full">
      <section className="section-shell overflow-hidden px-6 py-10 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
              Admin Students
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              View and manage student accounts
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              Create student accounts, remove them when needed, and open individual
              student details from this admin-only area.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
                <UsersRound className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Total students</p>
                <p className="text-2xl font-semibold text-white">{students.length}</p>
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
          onSubmit={handleCreateStudent}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
              <UserPlus className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                Create Student
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-white">Add a student account</h3>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Student name
              </label>
              <input
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder="Enter student name"
                className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Student email
              </label>
              <input
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder="student@zararclasses.com"
                className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
              />
              {form.email ? (
                <p className={`mt-2 text-sm ${isEmailFormatValid && !emailExists ? 'text-emerald-300' : 'text-amber-200'}`}>
                  {!isEmailFormatValid
                    ? 'Please enter a valid email address.'
                    : emailExists
                      ? 'This email already belongs to an account.'
                      : 'Email format looks correct.'}
                </p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Student password
              </label>
              <input
                value={form.password}
                onChange={(event) => updateField('password', event.target.value)}
                placeholder="Create a secure password"
                className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
              />
              <p className={`mt-2 text-sm ${isPasswordFormatValid ? 'text-emerald-300' : 'text-slate-400'}`}>
                Password must be at least 8 characters long, include @, and contain one number.
              </p>
            </div>

            {message ? (
              <div
                className={`flex items-start gap-3 rounded-[1.25rem] border px-4 py-3 text-sm leading-6 ${
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:scale-[1.01] hover:shadow-[0_18px_40px_rgba(59,130,246,0.35)]"
            >
              <PlusCircle className="h-4 w-4" />
              Create Student Account
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.45 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold text-white">Student directory</h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            Open each student profile to view their account details, exam records, and feedback area.
          </p>

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
                    <p className="mt-2 text-sm text-slate-400">
                      Results: {student.results.length} | Feedback entries: {student.feedback.length}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={`/admin/students/${student.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/30 hover:bg-cyan-300/15"
                    >
                      <Eye className="h-4 w-4" />
                      View details
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleDeleteStudent(student.id, student.name)}
                      className="inline-flex items-center gap-2 rounded-full border border-rose-300/20 bg-rose-300/10 px-4 py-2 text-sm font-medium text-rose-100 transition hover:border-rose-300/30 hover:bg-rose-300/15"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
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

export default AdminStudentsPage
