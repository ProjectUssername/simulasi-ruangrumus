'use client'
import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Compass,
  GraduationCap,
  HardDrive,
  Menu,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react'
import { Link, subjectRoute, useRoute } from '../lib/navigation'
import { useStudy } from '../lib/study-store'
import { Dialog } from './Dialog'

export function Logo({ small = false }: { small?: boolean }) {
  const { currentSubject } = useRoute()
  return (
    <span className={'brand ' + (small ? 'brand-small' : '')}>
      <svg width="39" height="39" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M1 12 19 3l18 9-18 9z" fill="var(--theme-color, #3766df)" />
        <path d="m1 16 18 9 18-9v6l-18 9-18-9z" fill="var(--theme-dark, #234fc3)" />
        <path d="m1 26 18 9 18-9v4l-18 9-18-9z" fill="var(--theme-border, #73a0fb)" />
        <path d="m19 3 18 9-18 9z" fill="var(--theme-color, #477ff1)" />
      </svg>
      <span>
        Ruang<span className="brand-second">Rumus</span>
      </span>
    </span>
  )
}

export function Header() {
  const { path, currentSubject, currentSection, isRootHome, allSubjects } = useRoute()
  const { state, setName, ready } = useStudy()
  const [menu, setMenu] = useState(false)
  const [profile, setProfile] = useState(false)
  const [subjectDropdown, setSubjectDropdown] = useState(false)
  const [name, setDraft] = useState('')

  useEffect(() => {
    if (!menu && !subjectDropdown) return
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenu(false)
        setSubjectDropdown(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [menu, subjectDropdown])

  const slug = currentSubject.slug
  const navRoutes: [string, string][] = [
    [isRootHome ? '/' : subjectRoute(slug), 'Beranda'],
    [subjectRoute(slug, 'materi'), 'Materi'],
    [subjectRoute(slug, 'contoh-soal'), 'Contoh Soal'],
    [subjectRoute(slug, 'cara-pengerjaan'), 'Cara Pengerjaan'],
    [subjectRoute(slug, 'try-out'), 'Try Out'],
    [subjectRoute(slug, 'hasil'), 'Hasil'],
  ]

  if (currentSubject.practiceRubric) {
    navRoutes.push([subjectRoute(slug, 'praktik'), 'Praktik'])
  }

  const isNavActive = (url: string) => {
    if (url === '/' && path === '/') return true
    if (url !== '/' && path.startsWith(url)) return true
    // Fallback for root aliases e.g. /materi
    if (url.endsWith('/' + currentSection)) return true
    return false
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="header-left" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link href="/" aria-label="RuangRumus, beranda" onClick={() => setMenu(false)}>
              <Logo />
            </Link>

            {/* Subject Switcher Pill */}
            <div className="subject-switcher-dropdown">
              <button
                type="button"
                className="subject-badge-pill"
                onClick={() => setSubjectDropdown(!subjectDropdown)}
                aria-expanded={subjectDropdown}
                aria-label="Pilih mata pelajaran"
              >
                <GraduationCap size={14} />
                <span>{currentSubject.name}</span>
                <ChevronDown size={12} />
              </button>

              {subjectDropdown && (
                <div className="subject-switcher-menu" role="menu">
                  <div style={{ padding: '4px 10px 8px', fontSize: '11px', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Pilih Mata Pelajaran
                  </div>
                  {allSubjects.map((sub) => (
                    <Link
                      key={sub.id}
                      href={subjectRoute(sub.slug)}
                      className={'subject-switcher-item ' + (sub.slug === slug ? 'active' : '')}
                      role="menuitem"
                      onClick={() => setSubjectDropdown(false)}
                    >
                      <span>{sub.name}</span>
                      {sub.slug === slug && <Check size={14} />}
                    </Link>
                  ))}
                  <div style={{ borderTop: '1px solid var(--line)', marginTop: '4px', paddingTop: '4px' }}>
                    <Link
                      href="/"
                      className="subject-switcher-item"
                      role="menuitem"
                      onClick={() => setSubjectDropdown(false)}
                    >
                      <span style={{ color: 'var(--muted)', fontSize: '12px' }}>Lihat Semua Mapel</span>
                      <ArrowUpRight size={13} style={{ color: 'var(--muted)' }} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <nav className="desktop-nav" aria-label="Navigasi utama">
            {navRoutes.map(([url, label]) => (
              <Link
                key={url}
                href={url}
                aria-current={isNavActive(url) ? 'page' : undefined}
                className={isNavActive(url) ? 'nav-active' : ''}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="header-tools">
            <button
              className="profile-btn"
              disabled={!ready}
              onClick={() => {
                setDraft(state.name)
                setProfile(true)
                setMenu(false)
              }}
              aria-label="Buka profil belajar"
            >
              <span className="avatar">
                <UserRound size={17} strokeWidth={1.8} />
              </span>
              <span className="profile-name">{state.name}</span>
              <ChevronDown size={13} />
            </button>
            <button
              className="mobile-menu icon-btn"
              aria-label={menu ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menu}
              aria-controls="mobile-nav"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menu && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Navigasi seluler">
            <div style={{ padding: '8px 16px', fontSize: '12px', color: 'var(--muted)', fontWeight: 600 }}>
              Mapel Aktif: {currentSubject.name}
            </div>
            {navRoutes.map(([url, label]) => (
              <Link
                href={url}
                key={url}
                className={isNavActive(url) ? 'selected' : ''}
                onClick={() => setMenu(false)}
              >
                {label}
                {isNavActive(url) ? <Check size={16} /> : <ArrowUpRight size={15} />}
              </Link>
            ))}
            <div style={{ borderTop: '1px solid var(--line)', margin: '8px 0', paddingTop: '8px' }}>
              <div style={{ padding: '6px 16px', fontSize: '11px', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                Ganti Mapel:
              </div>
              {allSubjects.map((sub) => (
                <Link
                  key={sub.id}
                  href={subjectRoute(sub.slug)}
                  className={sub.slug === slug ? 'selected' : ''}
                  onClick={() => setMenu(false)}
                  style={{ fontSize: '13px', paddingLeft: '24px' }}
                >
                  {sub.name}
                  {sub.slug === slug ? <Check size={15} /> : null}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {profile && (
        <Dialog title="Profil belajar" onClose={() => setProfile(false)}>
          <p className="muted">Nama ini hanya tersimpan di perangkatmu.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (name.trim()) {
                setName(name)
                setProfile(false)
              }
            }}
          >
            <label className="field-label" htmlFor="profile-name">
              Nama panggilan
            </label>
            <input
              id="profile-name"
              className="text-input"
              autoFocus
              required
              maxLength={28}
              value={name}
              onChange={(e) => setDraft(e.target.value)}
              autoComplete="nickname"
            />
            <div className="dialog-actions">
              <button type="button" className="btn btn-outline" onClick={() => setProfile(false)}>
                Batal
              </button>
              <button className="btn btn-primary" disabled={!name.trim()}>
                Simpan nama
              </button>
            </div>
          </form>
        </Dialog>
      )}
    </>
  )
}

export function Footer() {
  const { currentSubject } = useRoute()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Logo small />
        <span>Ruang belajar Try Out SMA · {currentSubject.name}</span>
        <span className="footer-local">
          <HardDrive size={14} /> Progres tersimpan di perangkat ini
        </span>
      </div>
    </footer>
  )
}
