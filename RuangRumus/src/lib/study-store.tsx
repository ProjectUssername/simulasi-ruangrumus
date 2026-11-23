'use client'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { subjectRoute, useRoute } from './navigation'
import type { Attempt, Question, Result, StudyState } from './types'

export const STORAGE_KEY = 'ruangrumus.study.v1'

export function getStorageKey(slug: string): string {
  return slug === 'matematika-wajib' ? STORAGE_KEY : `ruangrumus.study.${slug}.v1`
}

const empty = (): StudyState => ({
  version: 1,
  name: 'Pelajar',
  lessons: [],
  examples: [],
  draft: null,
  history: [],
  practiceScores: {},
})

const numbers = (x: unknown, max: number) =>
  Array.isArray(x)
    ? [...new Set(x.filter((n): n is number => Number.isInteger(n) && n >= 1 && n <= max))]
    : []

function validDraft(a: unknown, totalQuestions: number): a is Attempt {
  if (!a || typeof a !== 'object') return false
  const d = a as Attempt
  return (
    typeof d.id === 'string' &&
    Number.isFinite(d.startedAt) &&
    Number.isFinite(d.endsAt) &&
    d.endsAt > d.startedAt &&
    !!d.answers &&
    typeof d.answers === 'object' &&
    !Array.isArray(d.answers) &&
    Object.values(d.answers).every((v) => typeof v === 'string') &&
    Array.isArray(d.flags) &&
    Number.isInteger(d.cursor) &&
    d.cursor >= 0 &&
    d.cursor < totalQuestions
  )
}

function restore(text: string | null, totalQuestions: number, totalTopics: number): StudyState {
  if (!text) return empty()
  try {
    const s = JSON.parse(text)
    if (s?.version !== 1) return empty()
    return {
      version: 1,
      name: typeof s.name === 'string' && s.name.trim() ? s.name.trim().slice(0, 28) : 'Pelajar',
      lessons: numbers(s.lessons, totalTopics),
      examples: numbers(s.examples, totalTopics),
      draft: validDraft(s.draft, totalQuestions) ? s.draft : null,
      history: Array.isArray(s.history)
        ? s.history
            .filter((r: Result) => validDraft(r, totalQuestions) && Number.isFinite(r.finishedAt))
            .map((r: Result) => ({
              ...r,
              selfMarks: r.selfMarks && typeof r.selfMarks === 'object' ? r.selfMarks : {},
            }))
        : [],
      practiceScores:
        s.practiceScores && typeof s.practiceScores === 'object' && !Array.isArray(s.practiceScores)
          ? s.practiceScores
          : {},
    }
  } catch {
    return empty()
  }
}

export type ExtendedStudyState = StudyState

interface StudyAPI {
  state: StudyState
  ready: boolean
  saveError: boolean
  setName: (name: string) => void
  toggleTopic: (kind: 'lessons' | 'examples', id: number) => void
  start: () => void
  answer: (id: number, value: string) => void
  flag: (id: number) => void
  move: (index: number) => void
  finish: () => void
  markRubric: (resultId: string, q: number, index: number) => void
  setPracticeScore: (criterionId: string, score: number) => void
}

const Store = createContext<StudyAPI | null>(null)

export function useStudy() {
  const ctx = useContext(Store)
  if (!ctx) throw new Error('StudyProvider diperlukan')
  return ctx
}

export function countAnswered(a: Attempt, qs?: Question[]) {
  if (!qs) return 0
  return qs.filter((q) => (a.answers[q.id] ?? '').trim().length > 0).length
}

export function correctCount(a: Attempt, qs?: Question[]) {
  if (!qs) return 0
  return qs.filter((q) => q.type === 'pg' && a.answers[q.id] === String(q.key)).length
}

export function StudyProvider({ children }: { children: ReactNode }) {
  const { currentSubject, go } = useRoute()
  const storageKey = getStorageKey(currentSubject.slug)
  const totalQuestions = currentSubject.questions.length
  const totalTopics = currentSubject.topics.length

  const [state, setState] = useState<StudyState>(empty)
  const [ready, setReady] = useState(false)
  const [saveError, setSaveError] = useState(false)
  const live = useRef(state)

  const change = useCallback(
    (fn: (s: StudyState) => StudyState) => {
      const next = fn(live.current)
      live.current = next
      setState(next)
      try {
        localStorage.setItem(storageKey, JSON.stringify(next))
        setSaveError(false)
      } catch {
        setSaveError(true)
      }
    },
    [storageKey],
  )

  useEffect(() => {
    const load = () => {
      try {
        const s = restore(localStorage.getItem(storageKey), totalQuestions, totalTopics)
        live.current = s
        setState(s)
      } catch {
        setSaveError(true)
      }
    }

    const frame = window.requestAnimationFrame(() => {
      load()
      setReady(true)
    })

    const storage = (e: StorageEvent) => {
      if (e.key === storageKey || e.key === null) load()
    }
    window.addEventListener('storage', storage)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('storage', storage)
    }
  }, [storageKey, totalQuestions, totalTopics])

  const finish = useCallback(() => {
    const d = live.current.draft
    if (!d) return
    const now = Date.now()
    const result: Result = {
      ...d,
      finishedAt: Math.min(now, d.endsAt),
      timedOut: now >= d.endsAt,
      selfMarks: {},
    }
    change((s) => ({
      ...s,
      draft: null,
      history: [result, ...s.history.filter((r) => r.id !== d.id)],
    }))
    const targetUrl = subjectRoute(currentSubject.slug, 'hasil') + '?ujian=' + encodeURIComponent(d.id)
    go(targetUrl)
  }, [change, go, currentSubject.slug])

  const draftId = state.draft?.id
  useEffect(() => {
    if (!ready || !draftId) return
    const check = () => {
      if (live.current.draft && Date.now() >= live.current.draft.endsAt) finish()
    }
    check()
    const timer = window.setInterval(check, 500)
    document.addEventListener('visibilitychange', check)
    return () => {
      window.clearInterval(timer)
      document.removeEventListener('visibilitychange', check)
    }
  }, [ready, draftId, finish])

  const editDraft = (fn: (a: Attempt) => Attempt) => {
    if (!live.current.draft) return
    if (Date.now() >= live.current.draft.endsAt) {
      finish()
      return
    }
    change((s) => ({ ...s, draft: s.draft ? fn(s.draft) : null }))
  }

  const api: StudyAPI = {
    state,
    ready,
    saveError,
    setName: (name) => change((s) => ({ ...s, name: name.trim().slice(0, 28) || 'Pelajar' })),
    toggleTopic: (kind, id) =>
      change((s) => ({
        ...s,
        [kind]: s[kind].includes(id) ? s[kind].filter((n) => n !== id) : [...s[kind], id],
      })),
    start: () => {
      if (!ready || live.current.draft) return
      const now = Date.now()
      const id =
        globalThis.crypto?.randomUUID?.() ??
        `rr-${now.toString(36)}-${Math.random().toString(36).slice(2, 9)}`
      change((s) => ({
        ...s,
        draft: {
          id,
          startedAt: now,
          endsAt: now + currentSubject.examMinutes * 60000,
          cursor: 0,
          answers: {},
          flags: [],
        },
      }))
    },
    answer: (id, value) =>
      editDraft((d) => ({ ...d, answers: { ...d.answers, [id]: value.slice(0, 12000) } })),
    flag: (id) =>
      editDraft((d) => ({
        ...d,
        flags: d.flags.includes(id) ? d.flags.filter((n) => n !== id) : [...d.flags, id],
      })),
    move: (index) =>
      editDraft((d) => ({
        ...d,
        cursor: Math.max(0, Math.min(currentSubject.questions.length - 1, index)),
      })),
    finish,
    markRubric: (id, q, index) =>
      change((s) => ({
        ...s,
        history: s.history.map((r) => {
          if (r.id !== id) return r
          const marked = r.selfMarks[q] ?? []
          return {
            ...r,
            selfMarks: {
              ...r.selfMarks,
              [q]: marked.includes(index) ? marked.filter((n) => n !== index) : [...marked, index],
            },
          }
        }),
      })),
    setPracticeScore: (criterionId, score) =>
      change((s) => ({
        ...s,
        practiceScores: {
          ...(s.practiceScores ?? {}),
          [criterionId]: score,
        },
      })),
  }

  return (
    <Store.Provider value={api}>
      {saveError && (
        <div className="storage-alert" role="alert">
          Penyimpanan perangkat tidak tersedia. Jangan tutup halaman sebelum selesai.
        </div>
      )}
      {children}
    </Store.Provider>
  )
}
