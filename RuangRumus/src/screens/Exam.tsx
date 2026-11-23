import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCheck,
  ChevronRight,
  CircleAlert,
  Clock3,
  FilePenLine,
  Flag,
  ListChecks,
  Save,
  ShieldCheck,
} from 'lucide-react'
import { countAnswered, useStudy } from '../lib/study-store'
import { Link, subjectRoute, useRoute } from '../lib/navigation'
import { MathText } from '../components/MathText'
import { PageHeading } from '../components/PageHeading'
import { Dialog } from '../components/Dialog'
import { QuestionNavigator } from '../components/QuestionNavigator'
import { SubjectHeroArt } from '../components/SubjectIllustrations'

function Timer({ endsAt }: { endsAt: number }) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 500)
    return () => clearInterval(id)
  }, [])
  const seconds = Math.max(0, Math.ceil((endsAt - now) / 1000))
  return (
    <div className={'exam-timer ' + (seconds <= 300 ? 'timer-low' : '')}>
      <Clock3 size={21} />
      <div>
        <span>Sisa waktu</span>
        <strong role="timer" aria-label="Sisa waktu ujian">
          {String(Math.floor(seconds / 60)).padStart(2, '0')}:
          {String(seconds % 60).padStart(2, '0')}
        </strong>
      </div>
    </div>
  )
}

function ExamIntro() {
  const { currentSubject } = useRoute()
  const { start, ready, state } = useStudy()
  const questions = currentSubject.questions
  const topics = currentSubject.topics

  return (
    <>
      <PageHeading
        section="Try Out"
        title={`Try out ${currentSubject.name}`}
        desc={`${currentSubject.bannerKicker} · Simulasi lengkap mandiri.`}
      />
      <div className="exam-intro-layout">
        <section className="panel start-card">
          <div className="start-cover">
            <div>
              <span className="pill">{currentSubject.badge}</span>
              <h2>
                Simulasi ujian
                <br />
                {currentSubject.name}
              </h2>
            </div>
            <div style={{ width: '190px', height: '160px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SubjectHeroArt type={currentSubject.heroSvgType} />
            </div>
          </div>
          <div className="start-body">
            <div className="start-stats">
              <div>
                <ListChecks />
                <strong>{currentSubject.pgCount}</strong>
                <span>Pilihan ganda</span>
              </div>
              <div>
                <FilePenLine />
                <strong>{currentSubject.essayCount}</strong>
                <span>{currentSubject.slug === 'biologi' ? 'Soal uraian' : 'Soal esai'}</span>
              </div>
              <div>
                <Clock3 />
                <strong>{currentSubject.examMinutes}</strong>
                <span>Menit</span>
              </div>
            </div>
            <h3>Sebelum mulai</h3>
            <ul className="check-list">
              <li>
                <Check />
                Siapkan kertas dan alat tulis untuk mencatat hal-hal penting.
              </li>
              <li>
                <Check />
                Pilih satu opsi jawaban A–E untuk pilihan ganda, lalu uraikan langkah pengerjaan pada esai.
              </li>
              <li>
                <Check />
                Kamu bebas berpindah nomor soal dan menandai jawaban yang masih ragu.
              </li>
              <li>
                <Check />
                Timer terus berjalan meski tab ditutup. Jawaban dikumpulkan otomatis bila batas waktu habis.
              </li>
            </ul>
            <div className="inline-note">
              <Save size={17} />
              <p>Jawaban disimpan otomatis di browser ini. Selesaikan dengan perangkat yang sama.</p>
            </div>
            <button className="btn btn-primary start-button" onClick={start} disabled={!ready}>
              Mulai pengerjaan
              <ArrowRight size={17} />
            </button>
          </div>
        </section>
        <aside className="panel coverage-panel">
          <div className="panel-heading">
            <BookOpen size={18} />
            <h2>Cakupan ujian</h2>
          </div>
          <ol>
            {topics.map((t) => (
              <li key={t.id}>
                <span>{String(t.id).padStart(2, '0')}</span>
                {t.short}
              </li>
            ))}
          </ol>
          <Link href={subjectRoute(currentSubject.slug, 'materi')} className="text-link">
            Pelajari materi
            <ArrowRight size={15} />
          </Link>
          {state.history.length > 0 && (
            <Link href={subjectRoute(currentSubject.slug, 'hasil')} className="text-link block-link">
              Lihat hasil sebelumnya
              <ChevronRight size={14} />
            </Link>
          )}
        </aside>
      </div>
    </>
  )
}

export function Exam() {
  const { currentSubject } = useRoute()
  const { state, answer, flag, move, finish, saveError } = useStudy()
  const [submit, setSubmit] = useState(false)

  const d = state.draft
  if (!d) return <ExamIntro />

  const questions = currentSubject.questions
  const topics = currentSubject.topics
  const q = questions[d.cursor] ?? questions[0]
  const chosen = d.answers[q.id] ?? ''
  const flagged = d.flags.includes(q.id)
  const answered = countAnswered(d, questions)

  const changeQuestion = (i: number) => {
    move(i)
    document
      .getElementById('question-card')
      ?.scrollIntoView({ block: 'start', behavior: 'instant' })
  }

  const topicObj = topics.find((t) => t.id === q.topic) ?? topics[0]

  return (
    <>
      <PageHeading
        section="Try Out"
        title="Ruang ujian"
        desc={`Try Out ${currentSubject.name} · Paket latihan 01`}
      >
        <Timer endsAt={d.endsAt} />
      </PageHeading>
      <div className="exam-layout">
        <div className="question-column">
          <section className="panel question-card" id="question-card">
            <div className="question-meta">
              <span className="pill pill-blue">
                {q.type === 'pg'
                  ? 'Pilihan ganda'
                  : currentSubject.slug === 'biologi'
                    ? 'Uraian'
                    : 'Esai'}
              </span>
              <span className={'level level-' + q.level.toLowerCase()}>{q.level}</span>
              <span className="saved-label">
                <CheckCheck size={14} />
                {saveError ? 'Belum tersimpan' : 'Tersimpan'}
              </span>
            </div>
            <div className="question-title">
              <h2>
                Soal {String(q.id).padStart(2, '0')}
                <small> / {questions.length}</small>
              </h2>
              <button
                className={'flag-btn ' + (flagged ? 'flag-on' : '')}
                aria-pressed={flagged}
                onClick={() => flag(q.id)}
              >
                <Flag size={15} />
                {flagged ? 'Ditandai ragu-ragu' : 'Ragu-ragu'}
              </button>
            </div>
            <p className="question-topic">
              Topik {String(q.topic).padStart(2, '0')} · {topicObj.short}
            </p>

            {q.svgDiagram && (
              <div
                className="question-diagram"
                dangerouslySetInnerHTML={{ __html: q.svgDiagram }}
              />
            )}

            <div className="question-text">
              <MathText>{q.prompt}</MathText>
            </div>

            {q.type === 'pg' ? (
              <fieldset className="options">
                <legend className="sr-only">Pilih satu jawaban untuk soal {q.id}</legend>
                {q.options!.map((o, i) => (
                  <label
                    key={q.id + '-' + i}
                    className={'option ' + (chosen === String(i) ? 'is-chosen' : '')}
                  >
                    <input
                      type="radio"
                      name={'answer-' + q.id}
                      value={i}
                      checked={chosen === String(i)}
                      onChange={() => answer(q.id, String(i))}
                    />
                    <span className="option-letter">{'ABCDE'[i]}</span>
                    <span>
                      <MathText>{o}</MathText>
                    </span>
                    {chosen === String(i) && <Check size={17} className="option-check" />}
                  </label>
                ))}
              </fieldset>
            ) : (
              <div className="essay-input">
                <label htmlFor={'essay-' + q.id}>Jawaban dan langkah pengerjaan</label>
                <textarea
                  id={'essay-' + q.id}
                  rows={8}
                  maxLength={12000}
                  placeholder="Tuliskan analisis, langkah pemecahan masalah, atau penjelasan konsepmu secara terperinci…"
                  value={chosen}
                  onChange={(e) => answer(q.id, e.target.value)}
                />
                <p>
                  Gunakan bahasa yang jelas dan terstruktur.
                  <span>{chosen.length.toLocaleString('id-ID')} / 12.000</span>
                </p>
              </div>
            )}
            <div className="question-actions">
              <button
                className="btn btn-outline"
                onClick={() => changeQuestion(d.cursor - 1)}
                disabled={d.cursor === 0}
              >
                <ArrowLeft size={15} />
                Sebelumnya
              </button>
              {d.cursor < questions.length - 1 ? (
                <button className="btn btn-primary" onClick={() => changeQuestion(d.cursor + 1)}>
                  Selanjutnya
                  <ArrowRight size={15} />
                </button>
              ) : (
                <button className="btn btn-primary" onClick={() => setSubmit(true)}>
                  Selesai
                  <Check size={15} />
                </button>
              )}
            </div>
          </section>
          <p className="exam-footnote">
            <ShieldCheck size={14} />
            Jawaban dapat diubah sewaktu-waktu sebelum dikumpulkan.
          </p>
        </div>
        <QuestionNavigator onSubmit={() => setSubmit(true)} />
      </div>
      {submit && (
        <Dialog title="Kumpulkan jawaban?" onClose={() => setSubmit(false)}>
          <p className="body-copy">
            Periksa ringkasan jawabanmu. Setelah dikumpulkan, jawaban tidak dapat diubah lagi.
          </p>
          <div className="submit-stats">
            <div>
              <b>{answered}</b>
              <span>Terjawab</span>
            </div>
            <div>
              <b>{questions.length - answered}</b>
              <span>Kosong</span>
            </div>
            <div>
              <b>{d.flags.length}</b>
              <span>Ragu-ragu</span>
            </div>
          </div>
          {answered < questions.length && (
            <div className="inline-tip">
              <CircleAlert size={17} />
              <p>{questions.length - answered} soal masih belum dijawab. Soal kosong bernilai 0.</p>
            </div>
          )}
          <div className="dialog-actions">
            <button className="btn btn-outline" onClick={() => setSubmit(false)}>
              Periksa lagi
            </button>
            <button className="btn btn-primary" onClick={finish}>
              Kumpulkan jawaban
            </button>
          </div>
        </Dialog>
      )}
    </>
  )
}
