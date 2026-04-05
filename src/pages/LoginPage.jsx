import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, LockKeyhole, Mail } from 'lucide-react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { studentAccount } from '../data/studentAuth'

const passwordRules = [
  'At least 8 characters',
  'Includes @ symbol',
  'Contains at least one number',
]

function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState('idle')

  const trimmedEmail = email.trim().toLowerCase()
  const isEmailFormatValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
  const matchesKnownEmail = trimmedEmail === studentAccount.email
  const isPasswordLengthValid = password.length >= 8
  const hasAtSymbol = password.includes('@')
  const hasNumber = /\d/.test(password)
  const isPasswordFormatValid = isPasswordLengthValid && hasAtSymbol && hasNumber

  const emailHint = useMemo(() => {
    if (!email) return 'Enter your student email address.'
    if (!isEmailFormatValid) return 'Please enter a valid email address.'
    if (!matchesKnownEmail) return 'This email does not exist. Please check and try again.'
    return 'Email looks correct.'
  }, [email, isEmailFormatValid, matchesKnownEmail])

  const passwordHint = useMemo(() => {
    if (!password) return 'Enter your password.'
    if (!matchesKnownEmail) return 'Enter the correct email first to verify the password.'
    if (!isPasswordFormatValid) return 'Password does not meet the required format yet.'
    if (password !== studentAccount.password) {
      return 'The email is correct, but the password is wrong. Please check again and try again with the correct password.'
    }
    return 'Password looks correct.'
  }, [password, matchesKnownEmail, isPasswordFormatValid])

  if (isAuthenticated) {
    return <Navigate to="/student-dashboard" replace />
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!isEmailFormatValid) {
      setSubmitStatus('error')
      setSubmitMessage('Please enter a valid email address before logging in.')
      return
    }

    if (!matchesKnownEmail) {
      setSubmitStatus('error')
      setSubmitMessage('This email does not exist. Please use the correct student email.')
      return
    }

    if (!isPasswordFormatValid) {
      setSubmitStatus('error')
      setSubmitMessage('Your password format is incomplete. Please follow the required conditions.')
      return
    }

    if (password !== studentAccount.password) {
      setSubmitStatus('error')
      setSubmitMessage('The email is correct, but the password is wrong. Please check again and try again with the correct password.')
      return
    }

    login()
    setSubmitStatus('success')
    setSubmitMessage('Login successful. Opening the student dashboard...')
    const destination = location.state?.from || '/student-dashboard'
    navigate(destination, { replace: true })
  }

  return (
    <div className="flex w-full items-center justify-center">
      <section className="section-shell w-full max-w-5xl overflow-hidden px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
              Student Login
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Student Login
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              Log in to continue to your dashboard. The form validates your email
              and password and gives instant feedback while typing.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Password conditions
                </p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {passwordRules.map((rule) => (
                    <div key={rule} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-300" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Enter your email
                </label>
                <div className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-slate-950/50 px-4 py-3 focus-within:border-cyan-300/40">
                  <Mail className="h-4 w-4 text-cyan-200" />
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="example@zararclasses.com"
                    className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                  />
                </div>
                <p className={`mt-2 text-sm ${matchesKnownEmail && isEmailFormatValid ? 'text-emerald-300' : 'text-amber-200'}`}>
                  {emailHint}
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Enter your password
                </label>
                <div className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-slate-950/50 px-4 py-3 focus-within:border-cyan-300/40">
                  <LockKeyhole className="h-4 w-4 text-cyan-200" />
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                  />
                </div>
                <p className={`mt-2 text-sm ${password === studentAccount.password && matchesKnownEmail ? 'text-emerald-300' : 'text-amber-200'}`}>
                  {passwordHint}
                </p>
              </div>

              {submitMessage ? (
                <div
                  className={`flex items-start gap-3 rounded-[1.25rem] border px-4 py-3 text-sm leading-6 ${
                    submitStatus === 'success'
                      ? 'border-emerald-300/20 bg-emerald-300/10 text-emerald-100'
                      : 'border-amber-300/20 bg-amber-300/10 text-amber-100'
                  }`}
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{submitMessage}</span>
                </div>
              ) : null}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:scale-[1.01] hover:shadow-[0_18px_40px_rgba(59,130,246,0.35)]"
              >
                <LockKeyhole className="h-4 w-4" />
                Login to Dashboard
              </button>

              <p className="text-center text-sm text-slate-400">
                Need help? Go to the <Link to="/contact" className="text-cyan-200 transition hover:text-white">contact page</Link>.
              </p>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  )
}

export default LoginPage
