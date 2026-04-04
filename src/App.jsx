import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ChapterPage from './pages/ChapterPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PrivacyPage from './pages/PrivacyPage'
import SubjectPage from './pages/SubjectPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route
          path="/subject/:subjectId/chapter/:chapterId"
          element={<ChapterPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
