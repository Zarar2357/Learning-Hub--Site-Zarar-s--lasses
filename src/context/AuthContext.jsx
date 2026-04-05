import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { studentAccount } from '../data/studentAuth'

const AUTH_STORAGE_KEY = 'zarar-classes-student'
const AuthContext = createContext(null)

function readStoredStudent() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [student, setStudent] = useState(() => readStoredStudent())

  useEffect(() => {
    if (student) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(student))
      return
    }

    localStorage.removeItem(AUTH_STORAGE_KEY)
  }, [student])

  const value = useMemo(
    () => ({
      student,
      isAuthenticated: Boolean(student),
      login: () => setStudent({ email: studentAccount.email, name: studentAccount.name }),
      logout: () => setStudent(null),
    }),
    [student],
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
