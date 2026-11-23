export type Level = 'Dasar' | 'Menengah' | 'Lanjut'
export interface Question {
  id: number
  topic: number
  type: 'pg' | 'esai'
  level: Level
  prompt: string
  options?: string[]
  key?: number
  solution: string[]
  model?: string
  rubric?: string[]
  verifiedValues?: number[]
  svgDiagram?: string
}
export interface Topic {
  id: number
  title: string
  short: string
  group: string
  intro: string
  formulas: { label: string; math: string; note: string }[]
  tip: string
  example: { prompt: string; steps: string[]; answer: string }
}
export interface Attempt {
  id: string
  startedAt: number
  endsAt: number
  answers: Record<string, string>
  flags: number[]
  cursor: number
}
export interface Result extends Attempt {
  finishedAt: number
  timedOut: boolean
  selfMarks: Record<string, number[]>
}
export interface StudyState {
  version: 1
  name: string
  lessons: number[]
  examples: number[]
  draft: Attempt | null
  history: Result[]
  practiceScores?: Record<string, number>
}
