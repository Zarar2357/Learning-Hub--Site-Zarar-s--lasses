import { Fragment } from 'react'

export function renderMathText(text) {
  if (text === null || text === undefined) {
    return null
  }

  const parts = String(text).split(/(\^[A-Za-z0-9+-]+)/g)

  return parts.map((part, index) => {
    if (part.startsWith('^')) {
      return <sup key={`${part}-${index}`}>{part.slice(1)}</sup>
    }

    return <Fragment key={`${part}-${index}`}>{part}</Fragment>
  })
}
