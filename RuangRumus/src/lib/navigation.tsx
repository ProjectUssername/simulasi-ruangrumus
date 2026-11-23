'use client'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react'
import { getSubjectOrDefault, getAllSubjects, type Subject } from '../data/subjects'

export interface ParsedRoute {
  subjectSlug: string
  section: 'beranda' | 'materi' | 'contoh-soal' | 'cara-pengerjaan' | 'try-out' | 'hasil' | 'praktik'
  isRootHome: boolean
}

export function parseRoute(pathname: string): ParsedRoute {
  const clean = pathname.replace(/\/$/, '') || '/'
  if (clean === '/') {
    return { subjectSlug: 'matematika-wajib', section: 'beranda', isRootHome: true }
  }
  if (clean.startsWith('/mapel/')) {
    const parts = clean.split('/').filter(Boolean)
    const slug = parts[1] || 'matematika-wajib'
    const section = (parts[2] || 'beranda') as ParsedRoute['section']
    return { subjectSlug: slug, section, isRootHome: false }
  }
  const rawSection = clean.replace(/^\//, '') as ParsedRoute['section']
  return { subjectSlug: 'matematika-wajib', section: rawSection, isRootHome: false }
}

export function subjectRoute(slug: string, section?: string): string {
  const cleanSec = section ? section.replace(/^\//, '') : ''
  if (!cleanSec || cleanSec === 'beranda') return `/mapel/${slug}`
  return `/mapel/${slug}/${cleanSec}`
}

export interface NavigationContextType {
  path: string
  search: string
  go: (to: string) => void
  currentSubject: Subject
  currentSection: ParsedRoute['section']
  isRootHome: boolean
  allSubjects: Subject[]
  subjectRoute: (section?: string) => string
}

const Navigation = createContext<NavigationContextType>({
  path: '/',
  search: '',
  go: () => {},
  currentSubject: getSubjectOrDefault('matematika-wajib'),
  currentSection: 'beranda',
  isRootHome: true,
  allSubjects: getAllSubjects(),
  subjectRoute: (section?: string) => subjectRoute('matematika-wajib', section),
})

export const useRoute = () => useContext(Navigation)

export function RouteProvider({
  initialPath,
  children,
}: {
  initialPath?: string
  children: ReactNode
}) {
  const [location, setLocation] = useState(
    initialPath ??
      (typeof window === 'undefined' ? '/' : window.location.pathname + window.location.search),
  )
  const [raw, search = ''] = location.split('?')
  const path = raw.replace(/\/$/, '') || '/'

  useEffect(() => {
    const sync = () => setLocation(window.location.pathname + window.location.search)
    sync()
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  const { subjectSlug, section, isRootHome } = useMemo(() => parseRoute(path), [path])
  const currentSubject = useMemo(() => getSubjectOrDefault(subjectSlug), [subjectSlug])

  useEffect(() => {
    // Set data-theme on documentElement for CSS token variables
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', currentSubject.theme)
    }

    if (isRootHome) {
      document.title = 'RuangRumus · Bimbingan & Try Out Ujian SMA'
    } else {
      const titles: Record<string, string> = {
        beranda: 'Beranda',
        materi: 'Materi',
        'contoh-soal': 'Contoh Soal',
        'cara-pengerjaan': 'Cara Pengerjaan',
        'try-out': 'Try Out',
        hasil: 'Hasil',
        praktik: 'Penilaian Praktik',
      }
      const label = titles[section] || 'Belajar'
      document.title = `${label} · ${currentSubject.name} · RuangRumus`
    }
  }, [path, isRootHome, section, currentSubject])

  const go = useCallback((to: string) => {
    if (!to.startsWith('/') || to.startsWith('//')) return
    window.history.pushState({}, '', to)
    setLocation(to)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const value = useMemo(
    () => ({
      path,
      search,
      go,
      currentSubject,
      currentSection: section,
      isRootHome,
      allSubjects: getAllSubjects(),
      subjectRoute: (sec?: string) => subjectRoute(currentSubject.slug, sec),
    }),
    [path, search, go, currentSubject, section, isRootHome],
  )

  return <Navigation.Provider value={value}>{children}</Navigation.Provider>
}

export function Link({
  href,
  onClick,
  children,
  ...attrs
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { go } = useRoute()
  return (
    <a
      href={href}
      {...attrs}
      onClick={(e) => {
        onClick?.(e)
        if (
          !e.defaultPrevented &&
          e.button === 0 &&
          !e.metaKey &&
          !e.ctrlKey &&
          !e.shiftKey &&
          !e.altKey &&
          attrs.target !== '_blank' &&
          href.startsWith('/')
        ) {
          e.preventDefault()
          go(href)
        }
      }}
    >
      {children}
    </a>
  )
}
