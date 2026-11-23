'use client'
import { useState } from 'react'
import { Check, ChevronDown, Flag, Grid2X2, Send } from 'lucide-react'
import { countAnswered, useStudy } from '../lib/study-store'
import { useRoute } from '../lib/navigation'

export function QuestionNavigator({ onSubmit }: { onSubmit: () => void }) {
  const { currentSubject } = useRoute()
  const { state, move } = useStudy()
  const [open, setOpen] = useState(false)
  const d = state.draft
  if (!d) return null

  const qs = currentSubject.questions
  const total = qs.length
  const count = countAnswered(d, qs)

  return (
    <aside className={'panel navigator ' + (open ? 'nav-open' : '')}>
      <div className="panel-heading">
        <Grid2X2 size={18} />
        <h2>Navigasi soal</h2>
        <button
          aria-label={open ? 'Tutup nomor soal' : 'Tampilkan nomor soal'}
          aria-expanded={open}
          className="nav-disclosure icon-btn"
          onClick={() => setOpen(!open)}
        >
          <ChevronDown size={17} />
        </button>
      </div>
      <div className="nav-progress">
        <span>Terjawab</span>
        <b>{count} / {total}</b>
      </div>
      <div className="progress-track">
        <span style={{ width: `${(count / total) * 100}%` }} />
      </div>
      <div className="nav-grid-wrap">
        {(['pg', 'esai'] as const).map((kind) => {
          const kindTitle =
            kind === 'pg'
              ? 'Pilihan ganda'
              : currentSubject.slug === 'biologi'
                ? 'Soal uraian'
                : 'Esai'
          return (
            <div key={kind}>
              <h3>{kindTitle}</h3>
              <div className="number-grid">
                {qs
                  .filter((q) => q.type === kind)
                  .map((q) => {
                    const flagged = d.flags.includes(q.id)
                    const answered = !!d.answers[q.id]?.trim()
                    return (
                      <button
                        key={q.id}
                        className={
                          'number-btn ' +
                          (answered ? 'answered ' : '') +
                          (flagged ? 'flagged ' : '') +
                          (d.cursor === q.id - 1 ? 'current' : '')
                        }
                        aria-label={`Soal ${q.id}, ${answered ? 'terjawab' : 'belum dijawab'}${flagged ? ', ragu-ragu' : ''}`}
                        aria-current={d.cursor === q.id - 1 ? 'step' : undefined}
                        onClick={() => {
                          move(q.id - 1)
                          setOpen(false)
                          document
                            .getElementById('question-card')
                            ?.scrollIntoView({ behavior: 'instant', block: 'start' })
                        }}
                      >
                        {q.id}
                        {flagged ? (
                          <Flag className="number-mark" size={9} />
                        ) : answered ? (
                          <Check className="number-mark" size={9} />
                        ) : null}
                      </button>
                    )
                  })}
              </div>
            </div>
          )
        })}
        <div className="nav-legend">
          <span>
            <i className="legend-answered" />
            Terjawab
          </span>
          <span>
            <Flag size={11} />
            Ragu-ragu
          </span>
          <span>
            <i />
            Kosong
          </span>
        </div>
      </div>
      <button className="btn btn-primary w-full" onClick={onSubmit}>
        <Send size={15} />
        Selesaikan try out
      </button>
    </aside>
  )
}
