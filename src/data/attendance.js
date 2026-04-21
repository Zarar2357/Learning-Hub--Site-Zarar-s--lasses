export const attendanceOptions = [
  { value: 'present', label: 'Present', accent: 'text-emerald-200' },
  { value: 'absent', label: 'Absent', accent: 'text-rose-200' },
  { value: 'leave', label: 'Leave', accent: 'text-amber-200' },
  { value: 'half-day', label: 'Half Day', accent: 'text-cyan-200' },
  { value: 'no-class', label: 'No Class', accent: 'text-slate-300' },
]

export const attendanceLabelMap = Object.fromEntries(
  attendanceOptions.map((option) => [option.value, option.label]),
)

export function formatAttendanceDate(dateString) {
  if (!dateString) {
    return ''
  }

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${dateString}T00:00:00`))
}

export function getAttendanceStatusLabel(status) {
  return attendanceLabelMap[status] ?? 'Not marked'
}
