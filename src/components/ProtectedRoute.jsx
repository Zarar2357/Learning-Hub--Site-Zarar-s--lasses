import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getDashboardRouteForRole } from '../utils/accountRoutes'

function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, currentUser } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  if (allowedRoles?.length && !allowedRoles.includes(currentUser?.role)) {
    return <Navigate to={getDashboardRouteForRole(currentUser?.role)} replace />
  }

  return children
}

export default ProtectedRoute
