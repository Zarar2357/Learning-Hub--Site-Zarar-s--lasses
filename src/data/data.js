import {
  Atom,
  Beaker,
  Calculator,
  CircleDashed,
  Compass,
  Dna,
  FlaskConical,
  FunctionSquare,
  Gauge,
  Landmark,
  Orbit,
  PieChart,
  Radar,
  Sigma,
  Sparkles,
  Triangle,
  Waves,
  Zap,
} from 'lucide-react'

export const subjects = [
  {
    id: 'mathematics',
    title: 'Mathematics',
    subtitle: 'Formulas, concepts, and chapter-wise practice support.',
    icon: Calculator,
    accent: 'from-blue-500 via-indigo-500 to-violet-500',
    glow: 'shadow-[0_24px_60px_rgba(79,70,229,0.28)]',
    chapterIcon: Sigma,
    chapters: [
      { id: 'real-numbers', title: 'Real Numbers', icon: Landmark },
      { id: 'polynomials', title: 'Polynomials', icon: FunctionSquare },
      {
        id: 'pair-of-linear-equations-in-two-variables',
        title: 'Pair of Linear Equations in Two Variables',
        icon: Orbit,
      },
      {
        id: 'quadratic-equations',
        title: 'Quadratic Equations',
        icon: Waves,
      },
      {
        id: 'arithmetic-progressions',
        title: 'Arithmetic Progressions',
        icon: Gauge,
      },
      { id: 'triangles', title: 'Triangles', icon: Triangle },
      {
        id: 'coordinate-geometry',
        title: 'Coordinate Geometry',
        icon: Radar,
      },
      {
        id: 'introduction-to-trigonometry',
        title: 'Introduction to Trigonometry',
        icon: Compass,
      },
      {
        id: 'some-applications-of-trigonometry',
        title: 'Some Applications of Trigonometry',
        icon: Sparkles,
      },
      { id: 'circles', title: 'Circles', icon: CircleDashed },
      {
        id: 'areas-related-to-circles',
        title: 'Areas Related to Circles',
        icon: PieChart,
      },
      {
        id: 'surface-areas-and-volumes',
        title: 'Surface Areas and Volumes',
        icon: Atom,
      },
      { id: 'statistics', title: 'Statistics', icon: Beaker },
      { id: 'probability', title: 'Probability', icon: Zap },
    ],
  },
  {
    id: 'science',
    title: 'Science',
    subtitle: 'Physics, chemistry, and biology chapters in one place.',
    icon: FlaskConical,
    accent: 'from-emerald-400 via-teal-500 to-cyan-500',
    glow: 'shadow-[0_24px_60px_rgba(16,185,129,0.28)]',
    chapterIcon: Beaker,
    chapters: [
      {
        id: 'chemical-reactions-and-equations',
        title: 'Chemical Reactions and Equations',
        icon: FlaskConical,
      },
      {
        id: 'acids-bases-and-salts',
        title: 'Acids, Bases and Salts',
        icon: Beaker,
      },
      {
        id: 'metals-and-non-metals',
        title: 'Metals and Non-metals',
        icon: Atom,
      },
      {
        id: 'carbon-and-its-compounds',
        title: 'Carbon and its Compounds',
        icon: Orbit,
      },
      { id: 'life-processes', title: 'Life Processes', icon: Dna },
      {
        id: 'control-and-coordination',
        title: 'Control and Coordination',
        icon: Radar,
      },
      {
        id: 'how-do-organisms-reproduce',
        title: 'How do Organisms Reproduce?',
        icon: Sparkles,
      },
      { id: 'heredity', title: 'Heredity', icon: Dna },
      {
        id: 'light-reflection-and-refraction',
        title: 'Light – Reflection and Refraction',
        icon: Waves,
      },
      {
        id: 'the-human-eye-and-the-colourful-world',
        title: 'The Human Eye and the Colourful World',
        icon: Compass,
      },
      { id: 'electricity', title: 'Electricity', icon: Zap },
      {
        id: 'magnetic-effects-of-electric-current',
        title: 'Magnetic Effects of Electric Current',
        icon: Gauge,
      },
      { id: 'our-environment', title: 'Our Environment', icon: Atom },
    ],
  },
]


export function getSubjectById(subjectId) {
  return subjects.find((subject) => subject.id === subjectId)
}

export function getChapterById(subject, chapterId) {
  return subject?.chapters.find((chapter) => chapter.id === chapterId)
}

