import type { Question, Topic } from '../lib/types'
import { topics as mathTopics } from './matematika-wajib/topics'
import { questions as mathQuestions, EXAM_MINUTES as mathExamMinutes } from './matematika-wajib/questions'
import { strategy as mathStrategy, mistakes as mathMistakes, faq as mathFaq } from './matematika-wajib/guide'

import { topics as sejarahTopics } from './sejarah-indonesia/topics'
import { questions as sejarahQuestions, EXAM_MINUTES as sejarahExamMinutes } from './sejarah-indonesia/questions'
import { strategy as sejarahStrategy, mistakes as sejarahMistakes, faq as sejarahFaq } from './sejarah-indonesia/guide'

import { topics as bioTopics } from './biologi/topics'
import { questions as bioQuestions, EXAM_MINUTES as bioExamMinutes } from './biologi/questions'
import { strategy as bioStrategy, mistakes as bioMistakes, faq as bioFaq } from './biologi/guide'

import { topics as tariTopics } from './seni-tari/topics'
import { questions as tariQuestions, EXAM_MINUTES as tariExamMinutes } from './seni-tari/questions'
import { strategy as tariStrategy, mistakes as tariMistakes, faq as tariFaq } from './seni-tari/guide'
import { practiceRubric, type PracticeRubric } from './seni-tari/practice-rubric'

export interface Subject {
  id: string
  slug: string
  name: string
  shortName: string
  description: string
  badge: string
  theme: 'matematika-wajib' | 'sejarah-indonesia' | 'biologi' | 'seni-tari'
  examMinutes: number
  totalQuestions: number
  pgCount: number
  essayCount: number
  topicsCount: number
  bannerKicker: string
  heroSvgType: 'geometry' | 'history' | 'biology' | 'dance'
  topics: Topic[]
  questions: Question[]
  guide: {
    strategy: [string, string, string][]
    mistakes: [string, string, string][]
    faq: [string, string][]
  }
  practiceRubric?: PracticeRubric
}

export const subjects: Subject[] = [
  {
    id: 'matematika-wajib',
    slug: 'matematika-wajib',
    name: 'Matematika Wajib',
    shortName: 'Matematika Wajib',
    description:
      'Barisan & deret aritmetika/geometri, pemodelan bunga tunggal & majemuk, serta komposisi dan fungsi invers.',
    badge: 'Matematika Wajib SMA',
    theme: 'matematika-wajib',
    examMinutes: mathExamMinutes,
    totalQuestions: mathQuestions.length,
    pgCount: 25,
    essayCount: 5,
    topicsCount: mathTopics.length,
    bannerKicker: 'Persiapan Ujian Matematika Wajib SMA',
    heroSvgType: 'geometry',
    topics: mathTopics,
    questions: mathQuestions,
    guide: {
      strategy: mathStrategy,
      mistakes: mathMistakes,
      faq: mathFaq,
    },
  },
  {
    id: 'sejarah-indonesia',
    slug: 'sejarah-indonesia',
    name: 'Sejarah Indonesia',
    shortName: 'Sejarah Indonesia',
    description:
      'Penjelajahan samudra, hegemoni VOC, Daendels & Raffles, Tanam Paksa, Politik Pintu Terbuka, perlawanan rakyat, dan Pergerakan Nasional.',
    badge: 'Materi Fokus Belajar',
    theme: 'sejarah-indonesia',
    examMinutes: sejarahExamMinutes,
    totalQuestions: sejarahQuestions.length,
    pgCount: 25,
    essayCount: 5,
    topicsCount: sejarahTopics.length,
    bannerKicker: 'Materi Fokus Belajar Sejarah Indonesia',
    heroSvgType: 'history',
    topics: sejarahTopics,
    questions: sejarahQuestions,
    guide: {
      strategy: sejarahStrategy,
      mistakes: sejarahMistakes,
      faq: sejarahFaq,
    },
  },
  {
    id: 'biologi',
    slug: 'biologi',
    name: 'Biologi',
    shortName: 'Biologi',
    description:
      'Sel & transpor zat membran, struktur jaringan tumbuhan & fotosintesis, regulasi sirkulasi-respirasi-ekskresi, serta imunitas tubuh.',
    badge: 'ASAS Biologi Kelas XI',
    theme: 'biologi',
    examMinutes: bioExamMinutes,
    totalQuestions: bioQuestions.length,
    pgCount: 30,
    essayCount: 5,
    topicsCount: bioTopics.length,
    bannerKicker: 'Kisi-Kisi ASAS Biologi TP 2026/2027',
    heroSvgType: 'biology',
    topics: bioTopics,
    questions: bioQuestions,
    guide: {
      strategy: bioStrategy,
      mistakes: bioMistakes,
      faq: bioFaq,
    },
  },
  {
    id: 'seni-tari',
    slug: 'seni-tari',
    name: 'Seni Tari',
    shortName: 'Seni Tari',
    description:
      'Karakteristik tari tradisi & kreasi, gerak murni vs maknawi, Wiraga-Wirama-Wirasa, pola lantai, tata rias busana, dan manajemen panggung.',
    badge: 'Seni Tari Kelas XI',
    theme: 'seni-tari',
    examMinutes: tariExamMinutes,
    totalQuestions: tariQuestions.length,
    pgCount: 30,
    essayCount: 5,
    topicsCount: tariTopics.length,
    bannerKicker: 'Kisi-Kisi Seni Tari TP 2026/2027',
    heroSvgType: 'dance',
    topics: tariTopics,
    questions: tariQuestions,
    guide: {
      strategy: tariStrategy,
      mistakes: tariMistakes,
      faq: tariFaq,
    },
    practiceRubric,
  },
]

export function getAllSubjects(): Subject[] {
  return subjects
}

export function getSubject(slug?: string): Subject | undefined {
  if (!slug) return undefined
  return subjects.find((s) => s.slug === slug || s.id === slug)
}

export function getSubjectOrDefault(slug?: string): Subject {
  const found = getSubject(slug)
  return found ?? subjects[0]
}
