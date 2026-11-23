import { useState } from 'react'
import {
  BookOpen,
  CheckCheck,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  Info,
  Layers3,
  Lightbulb,
  NotebookPen,
  TrendingUp,
} from 'lucide-react'
import { Link, subjectRoute, useRoute } from '../lib/navigation'
import { useStudy } from '../lib/study-store'
import { Dialog } from './Dialog'

export function ProgressRing({
  value,
  label = 'tercapai',
  small = false,
}: {
  value: number
  label?: string
  small?: boolean
}) {
  const length = Math.PI * 2 * 49
  return (
    <div
      className={'progress-ring ' + (small ? 'small-ring' : '')}
      role="img"
      aria-label={`${value}% ${label}`}
    >
      <svg viewBox="0 0 116 116" aria-hidden="true">
        <circle cx="58" cy="58" r="49" stroke="#e9edf5" strokeWidth="9" fill="none" />
        <circle
          cx="58"
          cy="58"
          r="49"
          stroke="var(--blue)"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${(length * value) / 100} ${length}`}
          transform="rotate(-90 58 58)"
        />
      </svg>
      <div>
        <strong>
          {value}
          <span>%</span>
        </strong>
        <span>{label}</span>
      </div>
    </div>
  )
}

export function ProgressPanel() {
  const { currentSubject } = useRoute()
  const { state } = useStudy()
  const [info, setInfo] = useState(false)
  const totalActivities = currentSubject.topics.length * 2
  const completed = state.lessons.length + state.examples.length
  const percent = totalActivities > 0 ? Math.round((completed / totalActivities) * 100) : 0

  return (
    <>
      <section className="panel progress-panel">
        <div className="panel-heading">
          <span className="heading-icon">
            <TrendingUp size={19} />
          </span>
          <h2>Progres belajar</h2>
          <button
            className="info-btn"
            onClick={() => setInfo(true)}
            aria-label="Tentang perhitungan progres"
          >
            <Info size={15} />
          </button>
        </div>
        <ProgressRing value={percent} label="progres belajar" />
        <div className="progress-stats">
          <div>
            <BookOpen />
            <span>Materi dipelajari</span>
            <strong>
              {state.lessons.length}
              <em> / {currentSubject.topics.length}</em>
            </strong>
          </div>
          <div>
            <NotebookPen />
            <span>Contoh dipahami</span>
            <strong>
              {state.examples.length}
              <em> / {currentSubject.topics.length}</em>
            </strong>
          </div>
          <Link href={subjectRoute(currentSubject.slug, 'hasil')}>
            <ClipboardCheck />
            <span>Try out selesai</span>
            <strong>
              {state.history.length}
              <em> kali</em>
            </strong>
          </Link>
        </div>
      </section>
      {info && (
        <Dialog title="Tentang progres belajar" onClose={() => setInfo(false)}>
          <p className="body-copy">
            Ada {totalActivities} kegiatan belajar untuk {currentSubject.name}: {currentSubject.topics.length} materi dan {currentSubject.topics.length} contoh soal. Tandai kegiatan yang sudah kamu pahami untuk memperbarui progres.
          </p>
          <div className="soft-box">
            <strong>{completed} dari {totalActivities} kegiatan selesai</strong>
            <p>Hasil try out dicatat terpisah dan tidak memengaruhi persentase ini.</p>
          </div>
          <button className="btn btn-primary w-full" onClick={() => setInfo(false)}>
            Mengerti
          </button>
        </Dialog>
      )}
    </>
  )
}

export function ExamFacts() {
  const { currentSubject } = useRoute()
  return (
    <section className="panel facts-panel">
      <div className="panel-heading">
        <span className="heading-icon">
          <ClipboardList size={18} />
        </span>
        <h2>Ringkasan try out</h2>
      </div>
      <div className="facts-big">
        <div>
          <strong>{currentSubject.pgCount}</strong>
          <span>Pilihan ganda</span>
        </div>
        <div>
          <strong>{currentSubject.essayCount}</strong>
          <span>{currentSubject.slug === 'biologi' ? 'Soal uraian' : 'Soal esai'}</span>
        </div>
      </div>
      <div className="fact-meta">
        <div>
          <Clock3 />
          <span>Durasi</span>
          <b>{currentSubject.examMinutes} menit</b>
        </div>
        <div>
          <Layers3 />
          <span>Cakupan</span>
          <b>{currentSubject.topics.length} topik</b>
        </div>
      </div>
      <div className="autosave-note">
        <CheckCheck size={15} /> Jawaban tersimpan otomatis
      </div>
    </section>
  )
}

export function StudyTip() {
  const { currentSubject } = useRoute()
  return (
    <section className="tip-panel">
      <div className="flex items-center gap-2">
        <Lightbulb size={19} />
        <h2>Tips belajar</h2>
      </div>
      <p>Pahami konsepnya dulu, lalu uji dirimu dengan simulasi try out.</p>
      <Link href={subjectRoute(currentSubject.slug, 'cara-pengerjaan')}>
        Baca panduan <ChevronRight size={14} />
      </Link>
    </section>
  )
}
