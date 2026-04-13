import { getChapterContent } from '../chapterContent.js'

export function createSolutionPack(subjectId, chapterId, intro, solutionGroups) {
  const chapter = getChapterContent(subjectId, chapterId)

  if (!chapter) {
    throw new Error(`Missing chapter content for ${subjectId}/${chapterId}`)
  }

  if (chapter.questionGroups.length !== solutionGroups.length) {
    throw new Error(`Solution group count mismatch for ${subjectId}/${chapterId}`)
  }

  return {
    intro,
    questionGroups: chapter.questionGroups.map((group, groupIndex) => {
      const groupSolutions = solutionGroups[groupIndex]

      if (group.questions.length !== groupSolutions.length) {
        throw new Error(
          `Solution count mismatch for ${subjectId}/${chapterId} in group ${group.title}`,
        )
      }

      return {
        title: group.title,
        accent: group.accent,
        solutions: group.questions.map((question, questionIndex) => ({
          question,
          ...groupSolutions[questionIndex],
        })),
      }
    }),
  }
}
