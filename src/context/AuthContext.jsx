import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { defaultAccounts } from '../data/accountData'

const SESSION_STORAGE_KEY = 'zarar-classes-session'
const ACCOUNTS_STORAGE_KEY = 'zarar-classes-accounts'
const AuthContext = createContext(null)

function readStoredJson(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function normalizeAccount(account) {
  return {
    ...account,
    results: Array.isArray(account.results) ? account.results : [],
    feedback: Array.isArray(account.feedback) ? account.feedback : [],
    attendance: Array.isArray(account.attendance)
      ? account.attendance
          .filter((entry) => entry?.date && entry?.status)
          .map((entry) => ({
            date: entry.date,
            status: entry.status,
            updatedAt: entry.updatedAt ?? null,
          }))
      : [],
  }
}

function mergeAccounts(storedAccounts) {
  const safeStoredAccounts = Array.isArray(storedAccounts)
    ? storedAccounts.map(normalizeAccount)
    : []

  const storedByEmail = new Map(
    safeStoredAccounts.map((account) => [account.email.toLowerCase(), account]),
  )

  const mergedDefaults = defaultAccounts.map((account) => {
    const storedMatch = storedByEmail.get(account.email.toLowerCase())
    return normalizeAccount({ ...account, ...storedMatch, role: account.role })
  })

  const defaultEmails = new Set(
    defaultAccounts.map((account) => account.email.toLowerCase()),
  )

  const customStudents = safeStoredAccounts.filter(
    (account) => !defaultEmails.has(account.email.toLowerCase()),
  )

  return [...mergedDefaults, ...customStudents]
}

function createSessionUser(account) {
  return {
    id: account.id,
    role: account.role,
    name: account.name,
    email: account.email,
  }
}

function createStudentId(email) {
  const slug = email
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  const randomPart =
    globalThis.crypto?.randomUUID?.().slice(0, 8) ?? `${Date.now()}`

  return `student-${slug}-${randomPart}`
}

export function AuthProvider({ children }) {
  const [accounts, setAccounts] = useState(() =>
    mergeAccounts(readStoredJson(ACCOUNTS_STORAGE_KEY)),
  )
  const [currentUser, setCurrentUser] = useState(() =>
    readStoredJson(SESSION_STORAGE_KEY),
  )

  useEffect(() => {
    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts))
  }, [accounts])

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentUser))
      return
    }

    localStorage.removeItem(SESSION_STORAGE_KEY)
  }, [currentUser])

  const students = useMemo(
    () => accounts.filter((account) => account.role === 'student'),
    [accounts],
  )

  const value = useMemo(
    () => ({
      accounts,
      students,
      currentUser,
      student: currentUser?.role === 'student' ? currentUser : null,
      isAuthenticated: Boolean(currentUser),
      isAdmin: currentUser?.role === 'admin',
      isStudent: currentUser?.role === 'student',
      findAccountByEmail(email) {
        const normalizedEmail = email.trim().toLowerCase()
        return (
          accounts.find(
            (account) => account.email.toLowerCase() === normalizedEmail,
          ) ?? null
        )
      },
      getStudentById(studentId) {
        return (
          students.find((account) => account.id === studentId && account.role === 'student') ??
          null
        )
      },
      login(account) {
        const sessionUser = createSessionUser(account)
        setCurrentUser(sessionUser)
        return sessionUser
      },
      logout() {
        setCurrentUser(null)
      },
      addStudent(studentData) {
        const newStudent = normalizeAccount({
          id: createStudentId(studentData.email),
          role: 'student',
          name: studentData.name.trim(),
          email: studentData.email.trim().toLowerCase(),
          password: studentData.password,
          results: [],
          feedback: [],
          attendance: [],
        })

        setAccounts((currentAccounts) => [...currentAccounts, newStudent])
        return newStudent
      },
      updateAttendanceForDate(date, statusByStudentId) {
        const now = new Date().toISOString()

        setAccounts((currentAccounts) =>
          currentAccounts.map((account) => {
            if (account.role !== 'student') {
              return account
            }

            const nextStatus = statusByStudentId[account.id]

            if (!nextStatus) {
              return account
            }

            const attendanceWithoutDate = account.attendance.filter(
              (entry) => entry.date !== date,
            )

            return {
              ...account,
              attendance: [
                ...attendanceWithoutDate,
                { date, status: nextStatus, updatedAt: now },
              ].sort((first, second) => second.date.localeCompare(first.date)),
            }
          }),
        )
      },
      deleteStudent(studentId) {
        setAccounts((currentAccounts) =>
          currentAccounts.filter(
            (account) => !(account.role === 'student' && account.id === studentId),
          ),
        )
      },
    }),
    [accounts, currentUser, students],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
