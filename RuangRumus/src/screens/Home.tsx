import { useState } from 'react'
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Dna,
  FileCheck2,
  GraduationCap,
  History,
  Layers,
  Sparkles,
} from 'lucide-react'
import { Link, useRoute } from '../lib/navigation'
import { useStudy } from '../lib/study-store'
import { ExamFacts, ProgressPanel, StudyTip } from '../components/DashboardPanels'
import { SubjectHeroArt } from '../components/SubjectIllustrations'
import type { Subject } from '../data/subjects'

function SubjectCardMotif({ type }: { type: Subject['heroSvgType'] }) {
  if (type === 'geometry') {
    return (
      <img
        src="/images/geometry.webp"
        alt=""
        width="96"
        height="96"
        className="subject-card-img"
      />
    )
  }
  if (type === 'history') {
    return (
      <img
        src="/images/sejarah.png"
        alt=""
        width="96"
        height="96"
        className="subject-card-img"
      />
    )
  }
  if (type === 'biology') {
    return (
      <img
        src="/images/biologi.png"
        alt=""
        width="96"
        height="96"
        className="subject-card-img"
      />
    )
  }
  return (
    <img
      src="/images/seni-tari.png"
      alt=""
      width="96"
      height="96"
      className="subject-card-img"
    />
  )
}

export function Home() {
  const { currentSubject, allSubjects, subjectRoute } = useRoute()
  const { state, ready } = useStudy()
  const [allTopics, setAllTopics] = useState(false)

  const date = ready
    ? new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date())
    : ''

  const baseMenus = [
    {
      title: 'Materi Konsep',
      desc: 'Ringkasan konsep dan rumus esensial per indikator kisi-kisi.',
      href: subjectRoute('/materi'),
      image: 'book',
      color: 'blue',
      code: '01',
    },
    {
      title: 'Contoh Soal',
      desc: 'Pelajari pembahasan soal langkah demi langkah.',
      href: subjectRoute('/contoh-soal'),
      image: 'notebook',
      color: 'green',
      code: '02',
    },
    {
      title: 'Cara Pengerjaan',
      desc: 'Kenali strategi efektif dan hindari jebakan kesalahan umum.',
      href: subjectRoute('/cara-pengerjaan'),
      image: 'instruments',
      color: 'sand',
      code: '03',
    },
  ]

  const menus =
    currentSubject.slug === 'seni-tari'
      ? [
          ...baseMenus,
          {
            title: 'Penilaian Praktik',
            desc: 'Lembar asesmen kinerja tari (Wiraga, Wirama, Wirasa, Komposisi).',
            href: subjectRoute('/praktik'),
            image: 'notebook',
            color: 'coral',
            code: '04',
          },
        ]
      : baseMenus

  return (
    <div className="home-page">
      {/* Title Bar */}
      <div className="home-titlebar">
        <div className="title-line">
          <span className="section-marker" />
          <h1>Beranda belajar</h1>
        </div>
        <time className="today">
          <CalendarDays size={15} />
          {date}
        </time>
      </div>

      {/* Subject Picker Section */}
      <section className="subject-picker mb-8" aria-labelledby="picker-title">
        <div className="subject-picker-heading">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] flex items-center gap-1.5 mb-1">
              <Sparkles size={14} />
              Pilihan Mata Pelajaran
            </span>
            <h2 id="picker-title" className="text-xl md:text-2xl font-bold text-[var(--ink)]">
              Katalog Try Out & Bimbingan Ujian
            </h2>
            <p className="text-xs md:text-sm text-[var(--body)] mt-0.5">
              Pilih mata pelajaran untuk mengakses materi indikator, latihan terbimbing, dan simulasi try out terstandar.
            </p>
          </div>
        </div>

        <div className="subject-grid">
          {allSubjects.map((subj) => {
            const isCurrent = subj.slug === currentSubject.slug
            return (
              <Link
                key={subj.slug}
                href={`/mapel/${subj.slug}`}
                className={`subject-card ${isCurrent ? 'ring-2 ring-[var(--card-accent)]' : ''}`}
                data-subj={subj.slug}
              >
                <div className="subject-card-banner">
                  <span className="subject-card-badge">
                    {subj.badge}
                  </span>
                  <div className="subject-card-art">
                    <SubjectCardMotif type={subj.heroSvgType} />
                  </div>
                </div>

                <div className="subject-card-content">
                  <h3>
                    <span>{subj.name}</span>
                    <ArrowUpRight size={17} className="text-[var(--muted)] group-hover:text-[var(--card-accent)]" />
                  </h3>
                  <p>{subj.description}</p>

                  <div className="subject-card-stats">
                    <span>
                      <strong>{subj.topics.length}</strong> Topik
                    </span>
                    <span>
                      <strong>{subj.pgCount}</strong> PG + <strong>{subj.essayCount}</strong> Esai
                    </span>
                    <span>
                      <strong>{subj.examMinutes}</strong> Menit
                    </span>
                  </div>

                  <div className="subject-card-action">
                    <span>{isCurrent ? 'Sedang Dipelajari' : 'Buka Mapel'}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Main Subject Workspace */}
      <div className="dashboard-grid">
        <div className="dashboard-main">
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-copy">
              <div className="hero-kicker">
                <GraduationCap size={15} /> Persiapan Ujian · {currentSubject.name}
              </div>
              <h2>
                Try Out
                <br />
                {currentSubject.name}
              </h2>
              <p>
                Pahami konsep, latih kemampuan,
                <br className="hero-break" /> dan ukur kesiapanmu.
              </p>
              <div className="hero-actions">
                <Link href={subjectRoute('/try-out')} className="btn hero-btn">
                  {state.draft ? 'Lanjutkan try out' : 'Mulai try out'}
                  <ArrowRight size={16} />
                </Link>
                <span>
                  <Clock3 size={14} />
                  {currentSubject.examMinutes} menit
                </span>
              </div>
            </div>

            <SubjectHeroArt type={currentSubject.heroSvgType} />

            <span className="figure-no" aria-hidden="true">
              FIG. {currentSubject.slug.toUpperCase()}
            </span>
          </section>

          {/* Menus Grid */}
          <section className="menu-section" aria-labelledby="menu-title">
            <div className="section-heading">
              <h2 id="menu-title">Menu belajar {currentSubject.name}</h2>
              <span className="little-rule" />
            </div>
            <div className="menu-cards">
              {menus.map((menu) => (
                <Link href={menu.href} className="menu-card" key={menu.href}>
                  <div className={'menu-art art-' + menu.color}>
                    <span className="art-index">/ {menu.code}</span>
                    <span className="art-corner" />
                    <img
                      src={'/images/' + menu.image + '.webp'}
                      alt=""
                      width="210"
                      height="148"
                    />
                  </div>
                  <div className="menu-card-body">
                    <div>
                      <h3>{menu.title}</h3>
                      <ArrowUpRight size={17} />
                    </div>
                    <p>{menu.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Syllabus Section */}
          <section className="syllabus-section">
            <div className="section-heading">
              <h2>Kisi-kisi ujian {currentSubject.name}</h2>
              <span className="count-tag">{currentSubject.topics.length} topik</span>
              <button
                className="text-link ml-auto"
                onClick={() => setAllTopics(!allTopics)}
                aria-expanded={allTopics}
              >
                {allTopics ? 'Tampilkan ringkas' : 'Lihat semua'}
                <ArrowRight size={15} />
              </button>
            </div>
            <div className="topic-table">
              {currentSubject.topics
                .slice(0, allTopics ? currentSubject.topics.length : 3)
                .map((t) => (
                  <Link
                    key={t.id}
                    href={subjectRoute('/materi?topik=' + t.id)}
                    className="topic-row"
                  >
                    <span
                      className={
                        'topic-number ' +
                        (state.lessons.includes(t.id) ? 'done' : '')
                      }
                    >
                      {state.lessons.includes(t.id) ? (
                        <Check size={15} />
                      ) : (
                        String(t.id).padStart(2, '0')
                      )}
                    </span>
                    <span className="topic-name">{t.title}</span>
                    <span className="topic-family">{t.group}</span>
                    <ChevronRight size={15} />
                  </Link>
                ))}
            </div>
          </section>
        </div>

        {/* Aside Panels */}
        <aside className="dashboard-aside">
          <ProgressPanel />
          <ExamFacts />
          <StudyTip />
        </aside>
      </div>
    </div>
  )
}
