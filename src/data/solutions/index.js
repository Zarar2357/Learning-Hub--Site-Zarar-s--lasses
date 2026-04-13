const solutionLoaders = {
  'mathematics/real-numbers': () => import('./realNumbersSolutions.js'),
  'mathematics/polynomials': () => import('./polynomialsSolutions.js'),
  'science/chemical-reactions-and-equations': () =>
    import('./chemicalReactionsSolutions.js'),
}

export function hasChapterSolutions(subjectId, chapterId) {
  return Boolean(solutionLoaders[`${subjectId}/${chapterId}`])
}

export async function loadChapterSolutions(subjectId, chapterId) {
  const loader = solutionLoaders[`${subjectId}/${chapterId}`]

  if (!loader) {
    return null
  }

  const module = await loader()
  return module.chapterSolutions ?? null
}
