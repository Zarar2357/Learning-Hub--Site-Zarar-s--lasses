import AdminAttendancePage from './pages/AdminAttendancePage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import AdminStudentDetailsPage from './pages/AdminStudentDetailsPage'
import AdminStudentsPage from './pages/AdminStudentsPage'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import ChapterPage from './pages/ChapterPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NcertClass10Page from './pages/NcertClass10Page'
import NotFoundPage from './pages/NotFoundPage'
import PrivacyPage from './pages/PrivacyPage'
import SolutionsPage from './pages/SolutionsPage'
import StudentDashboardPage from './pages/StudentDashboardPage'
import SubjectPage from './pages/SubjectPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/ncert-class-10th" element={<NcertClass10Page />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/students"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminStudentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/students/:studentId"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminStudentDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/attendance"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminAttendancePage />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route
          path="/subject/:subjectId/chapter/:chapterId"
          element={<ChapterPage />}
        />
        <Route
          path="/subject/:subjectId/chapter/:chapterId/solutions"
          element={<SolutionsPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
