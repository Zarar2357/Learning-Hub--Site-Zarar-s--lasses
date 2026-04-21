export function getDashboardRouteForRole(role) {
  return role === 'admin' ? '/admin' : '/student-dashboard'
}

export function getRoleLabel(role) {
  return role === 'admin' ? 'Admin' : 'Student'
}
