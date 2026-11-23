import { useState } from 'react'
import {
  ArrowRight,
  Award,
  ChartNoAxesColumn,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Clock3,
  FilePenLine,
  History,
  Minus,
  RotateCcw,
  Sparkles,
  X,
} from 'lucide-react'
import { correctCount, useStudy } from '../lib/study-store'
import { Link, useRoute } from '../lib/navigation'
import type { Question, Result, Topic } from '../lib/types'
import { MathText } from '../components/MathText'
import { PageHeading } from '../components/PageHeading'
import { ProgressRing } from '../components/DashboardPanels'

const stamp = (n: number) =>
  new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(n)

const status = (q: Question, r: Result) =>
  q.type === 'esai'
    ? 'Esai'
    : !r.answers[q.id]?.trim()
      ? 'Kosong'
      : r.answers[q.id] === String(q.key)
        ? 'Benar'
        : 'Salah'

function Review({ q, result, topics }: { q: Question; result: Result; topics: Topic[] }) {
  const { markRubric } = useStudy()
  const label = status(q, result)
  const choice = result.answers[q.id]
  const marked = result.selfMarks[q.id] ?? []
  const currentTopic = topics.find((t) => t.id === q.topic) ?? topics[q.topic - 1]
  const rubricMax = q.rubric ? q.rubric.length : 4

  return (
    <details className="review-item">
      <summary>
        <span className="review-num">{String(q.id).padStart(2, '0')}</span>
        <div>
          <b>{currentTopic?.short ?? `Topik ${q.topic}`}</b>
          <small>
            {q.type === 'pg' ? 'Pilihan ganda' : 'Esai / Uraian'} · {q.level}
          </small>
        </div>
        <span className={'result-status status-' + label.toLowerCase()}>
          {label === 'Benar' ? (
            <Check size={12} />
          ) : label === 'Salah' ? (
            <X size={12} />
          ) : label === 'Esai' ? (
            <FilePenLine size={12} />
          ) : (
            <Minus size={12} />
          )}{' '}
          {label}
        </span>
        <ChevronDown size={16} />
      </summary>
      <div className="review-body">
        <div className="review-prompt">
          <MathText>{q.prompt}</MathText>
        </div>

        {q.svgDiagram && (
          <div
            className="exam-diagram my-3 p-3 rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] flex justify-center"
            dangerouslySetInnerHTML={{ __html: q.svgDiagram }}
          />
        )}

        {q.type === 'pg' ? (
          <div className="review-answer-grid">
            <div>
              <small>Jawabanmu</small>
              <p>
                {choice === undefined || choice === '' ? (
                  'Tidak dijawab'
                ) : (
                  <>
                    {'ABCDE'[Number(choice)]}.{' '}
                    <MathText>{q.options![Number(choice)] ?? 'Tidak valid'}</MathText>
                  </>
                )}
              </p>
            </div>
            <div className="correct-answer">
              <small>Kunci jawaban</small>
              <p>
                {'ABCDE'[q.key!]}. <MathText>{q.options![q.key!]}</MathText>
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="written-answer">
              <small>Jawabanmu</small>
              <p>{choice?.trim() || 'Tidak dijawab'}</p>
            </div>
            <div className="answer-box">
              <CircleCheck size={18} />
              <div>
                <b>Contoh jawaban ideal</b>
                <p>
                  <MathText>{q.model!}</MathText>
                </p>
              </div>
            </div>
          </>
        )}
        <h3>Pembahasan</h3>
        <ol className="review-steps">
          {q.solution.map((s, i) => (
            <li key={i}>
              <span>{i + 1}</span>
              <p>
                <MathText>{s}</MathText>
              </p>
            </li>
          ))}
        </ol>
        {q.type === 'esai' && q.rubric && (
          <div className="rubric">
            <div className="flex items-center justify-between gap-3">
              <h3>Rubrik penilaian mandiri</h3>
              <b>
                {marked.length} / {rubricMax}
              </b>
            </div>
            <p>Centang kriteria yang terpenuhi pada jawabanmu. Setiap kriteria bernilai 1 poin.</p>
            {q.rubric.map((c, i) => (
              <label key={c}>
                <input
                  type="checkbox"
                  checked={marked.includes(i)}
                  onChange={() => markRubric(result.id, q.id, i)}
                />
                <span>{c}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </details>
  )
}

export function Results() {
  const { state, ready } = useStudy()
  const { currentSubject, subjectRoute, search, go } = useRoute()
  const [tab, setTab] = useState('Pembahasan')
  const [filter, setFilter] = useState('Semua')
  const selected = new URLSearchParams(search).get('ujian')
  const r = state.history.find((x) => x.id === selected) ?? state.history[0]

  const questions = currentSubject.questions
  const topics = currentSubject.topics
  const pgCount = currentSubject.pgCount
  const essayCount = currentSubject.essayCount

  if (!r)
    return (
      <>
        <PageHeading
          section={`Hasil · ${currentSubject.name}`}
          title={`Hasil try out ${currentSubject.name}`}
          desc="Skor, pembahasan, dan catatan dari setiap percobaanmu."
        />
        <section className="panel empty-results">
          <div className="empty-illustration">
            <img src="/images/notebook.webp" alt="" width="170" height="140" />
          </div>
          <span className="pill pill-blue">Riwayat ujian</span>
          <h2>{ready ? 'Belum ada hasil try out' : 'Memuat hasil try out'}</h2>
          <p>
            {state.draft
              ? 'Kamu masih memiliki sesi yang berjalan. Lanjutkan dan kumpulkan jawaban untuk melihat hasilnya.'
              : `Selesaikan satu try out ${currentSubject.name} untuk melihat skor pilihan ganda, pembahasan soal, dan rubrik esai.`}
          </p>
          <Link href={subjectRoute('/try-out')} className="btn btn-primary">
            {state.draft ? 'Lanjutkan try out' : 'Mulai try out'}
            <ArrowRight size={16} />
          </Link>
        </section>
      </>
    )

  const right = correctCount(r, questions)
  const answered = questions.filter((q) => q.type === 'pg' && r.answers[q.id]?.trim()).length
  const score = Math.round((right / pgCount) * 100)
  const self = Object.values(r.selfMarks).reduce((n, marks) => n + marks.length, 0)
  const maxRubric = questions
    .filter((q) => q.type === 'esai')
    .reduce((acc, q) => acc + (q.rubric ? q.rubric.length : 4), 0)
  const duration = Math.max(1, Math.ceil((r.finishedAt - r.startedAt) / 1000))

  const selectResult = (id: string) => {
    go(subjectRoute('/hasil?ujian=' + encodeURIComponent(id)))
    setFilter('Semua')
    setTab('Pembahasan')
  }

  const list = questions.filter((q) => filter === 'Semua' || status(q, r) === filter)

  return (
    <>
      <PageHeading
        section={`Hasil · ${currentSubject.name}`}
        title={`Hasil try out ${currentSubject.name}`}
        desc={stamp(r.finishedAt) + ` · Paket latihan 01 (${currentSubject.name})`}
      >
        <Link href={subjectRoute('/try-out')} className="btn btn-outline">
          <RotateCcw size={15} />
          {state.draft ? 'Lanjutkan try out' : 'Ulangi try out'}
        </Link>
      </PageHeading>

      {r.timedOut && (
        <div className="inline-note timeout-note">
          <Clock3 size={17} />
          Waktu habis. Jawaban terakhir dikumpulkan otomatis.
        </div>
      )}

      {currentSubject.slug === 'seni-tari' && (
        <div className="mb-4 p-4 rounded-xl border border-[var(--primary)] bg-[var(--surface-hover)] flex flex-wrap items-center justify-between gap-3">
          <div>
            <b className="text-[var(--text)] flex items-center gap-2">
              <Sparkles size={16} className="text-[var(--primary)]" />
              Tersedia Lembar Penilaian Praktik Seni Tari
            </b>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Uji keterampilan menari dengan rubrik Wiraga, Wirama, Wirasa, dan Pola Lantai/Busana.
            </p>
          </div>
          <Link href={subjectRoute('/praktik')} className="btn btn-primary text-xs py-1.5 px-3">
            Buka lembar penilaian praktik
            <ArrowRight size={14} />
          </Link>
        </div>
      )}

      <section className="panel score-card">
        <div className="score-main">
          <ProgressRing value={score} label="skor PG" />
          <div>
            <span className="small-label">Skor pilihan ganda ({currentSubject.name})</span>
            <h2>
              {score}
              <small> / 100</small>
            </h2>
            <p>
              {right} dari {pgCount} jawaban benar
            </p>
          </div>
        </div>
        <div className="score-details">
          <div>
            <span>
              <Check size={14} />
              Benar
            </span>
            <strong>{right}</strong>
          </div>
          <div>
            <span>
              <X size={14} />
              Salah
            </span>
            <strong>{answered - right}</strong>
          </div>
          <div>
            <span>
              <Minus size={14} />
              Kosong
            </span>
            <strong>{pgCount - answered}</strong>
          </div>
        </div>
        <div className="result-metas">
          <span>
            <Clock3 size={15} />
            {Math.floor(duration / 60)} menit {duration % 60} detik
          </span>
          <span>
            <FilePenLine size={15} />
            {essayCount > 0 ? `Esai mandiri: ${self} / ${maxRubric}` : 'Tidak ada esai'}
          </span>
          <small>Nilai esai dinilai terpisah melalui rubrik mandiri.</small>
        </div>
      </section>

      <div className="results-layout">
        <div>
          <div className="tab-strip result-tabs">
            {['Pembahasan', 'Per kisi-kisi', 'Riwayat'].map((t) => (
              <button
                key={t}
                aria-pressed={tab === t}
                className={tab === t ? 'active' : ''}
                onClick={() => setTab(t)}
              >
                {t === 'Riwayat' ? (
                  <History size={15} />
                ) : t === 'Per kisi-kisi' ? (
                  <ChartNoAxesColumn size={15} />
                ) : (
                  <CheckCheck size={15} />
                )}{' '}
                {t}
              </button>
            ))}
          </div>

          {tab === 'Pembahasan' ? (
            <section className="panel review-panel">
              <div className="review-heading">
                <h2>Pembahasan soal {currentSubject.name}</h2>
                <select
                  aria-label="Filter pembahasan"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {['Semua', 'Benar', 'Salah', 'Kosong', 'Esai'].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </div>
              {list.map((q) => (
                <Review key={r.id + '-' + q.id} q={q} result={r} topics={topics} />
              ))}
              {!list.length && <p className="filter-empty">Tidak ada soal dengan status ini.</p>}
            </section>
          ) : tab === 'Per kisi-kisi' ? (
            <section className="panel topic-results">
              <h2>Ketepatan per kisi-kisi ({currentSubject.name})</h2>
              <p className="muted">Berdasarkan pilihan ganda pada percobaan ini.</p>
              {topics.map((t) => {
                const qs = questions.filter((q) => q.topic === t.id && q.type === 'pg')
                const ok = qs.filter((q) => r.answers[q.id] === String(q.key)).length
                const totalInTopic = qs.length || 1
                return (
                  <div className="topic-result" key={t.id}>
                    <div>
                      <b>{t.short}</b>
                      <span>
                        {ok} / {qs.length} benar
                      </span>
                    </div>
                    <div className="progress-track">
                      <span style={{ width: `${(ok / totalInTopic) * 100}%` }} />
                    </div>
                    <Link href={subjectRoute('/materi?topik=' + t.id)}>
                      Pelajari kembali
                      <ChevronRight size={12} />
                    </Link>
                  </div>
                )
              })}
            </section>
          ) : (
            <section className="panel history-panel">
              <h2>Riwayat percobaan {currentSubject.name}</h2>
              {state.history.map((item, i) => {
                const itemRight = correctCount(item, questions)
                const itemScore = Math.round((itemRight / pgCount) * 100)
                return (
                  <button
                    key={item.id}
                    onClick={() => selectResult(item.id)}
                    className="history-row"
                  >
                    <span className="history-icon">
                      <Award size={20} />
                    </span>
                    <span>
                      <b>Percobaan {state.history.length - i}</b>
                      <small>{stamp(item.finishedAt)}</small>
                    </span>
                    <strong>
                      {itemScore}
                      <small>/100</small>
                    </strong>
                    <ChevronRight size={15} />
                  </button>
                )
              })}
            </section>
          )}
        </div>

        <aside className="panel result-guide">
          <div className="panel-heading">
            <FilePenLine size={18} />
            <h2>Penilaian esai / uraian</h2>
          </div>
          <p>
            {essayCount} soal esai dinilai secara mandiri, bukan otomatis. Bandingkan jawabanmu dengan contoh dan rubrik setiap soal.
          </p>
          <div className="rubric-total">
            <strong>
              {self}
              <small> / {maxRubric}</small>
            </strong>
            <span>Poin mandiri</span>
          </div>
          <button
            className="btn btn-outline w-full"
            onClick={() => {
              setTab('Pembahasan')
              setFilter('Esai')
            }}
          >
            Buka rubrik esai
            <ArrowRight size={15} />
          </button>
        </aside>
      </div>
    </>
  )
}
