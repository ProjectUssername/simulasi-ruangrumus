import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCheck,
  ChevronRight,
  CircleCheck,
  Eye,
  Lightbulb,
  ListOrdered,
  Search,
} from 'lucide-react'
import type { Topic } from '../lib/types'
import { Link, subjectRoute, useRoute } from '../lib/navigation'
import { useStudy } from '../lib/study-store'
import { Formula, MathText } from '../components/MathText'
import { PageHeading } from '../components/PageHeading'

function Example({ topic }: { topic: Topic }) {
  const { currentSubject } = useRoute()
  const { state, toggleTopic } = useStudy()
  const done = state.examples.includes(topic.id)
  const [show, setShow] = useState(done)

  return (
    <>
      <div className="example-prompt">
        <span className="small-label">Soal latihan</span>
        <p>
          <MathText>{topic.example.prompt}</MathText>
        </p>
      </div>
      {!show ? (
        <button className="btn btn-primary" onClick={() => setShow(true)}>
          <Eye size={16} />
          Lihat pembahasan
        </button>
      ) : (
        <div className="reveal">
          <h3 className="subheading">Pembahasan langkah demi langkah</h3>
          <ol className="steps-list">
            {topic.example.steps.map((step, i) => (
              <li key={step}>
                <span className="step-index">{i + 1}</span>
                <div>
                  <b>Langkah {i + 1}</b>
                  <p>
                    <MathText>{step}</MathText>
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="answer-box">
            <CircleCheck size={18} />
            <div>
              <b>Jawaban akhir</b>
              <p>
                <MathText>{topic.example.answer}</MathText>
              </p>
            </div>
          </div>
          <div className="lesson-actions">
            <button
              className={'btn ' + (done ? 'btn-done' : 'btn-primary')}
              onClick={() => toggleTopic('examples', topic.id)}
              aria-pressed={done}
            >
              <Check size={16} />
              {done ? 'Sudah dipahami' : 'Tandai sudah dipahami'}
            </button>
            <Link className="text-link" href={subjectRoute(currentSubject.slug, 'materi') + '?topik=' + topic.id}>
              Lihat materi
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export function Learn({ mode }: { mode: 'materi' | 'contoh' }) {
  const material = mode === 'materi'
  const { path, search, go, currentSubject } = useRoute()
  const { state, toggleTopic } = useStudy()
  const topics = currentSubject.topics

  const topic =
    topics.find((t) => t.id === Number(new URLSearchParams(search).get('topik'))) ?? topics[0]
  const [query, setQuery] = useState('')
  const learned = material ? state.lessons : state.examples
  const filtered = topics.filter((t) =>
    `${t.title} ${t.group} ${t.id}`.toLowerCase().includes(query.toLowerCase().trim()),
  )
  const title = material ? `Materi belajar ${currentSubject.name}` : `Contoh soal ${currentSubject.name}`

  return (
    <>
      <PageHeading
        section={material ? 'Materi' : 'Contoh Soal'}
        title={title}
        desc={
          material
            ? `Ringkasan konsep dan indikator penting untuk ${topics.length} topik ujian.`
            : 'Pahami alur berpikirnya, satu langkah demi satu langkah.'
        }
      >
        <span className="completion-badge">
          <CheckCheck size={15} />
          {learned.length} dari {topics.length} {material ? 'dipelajari' : 'dipahami'}
        </span>
      </PageHeading>
      <div className="learning-layout">
        <aside className="panel lesson-sidebar">
          <h2>Daftar topik</h2>
          <label className="search-field">
            <Search size={16} />
            <input
              aria-label="Cari topik"
              placeholder="Cari topik"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <nav aria-label="Daftar topik" className="lesson-list">
            {filtered.map((t) => (
              <Link
                href={path + '?topik=' + t.id}
                key={t.id}
                className={t.id === topic.id ? 'current' : ''}
                aria-current={t.id === topic.id ? 'page' : undefined}
              >
                <span className="lesson-num">
                  {learned.includes(t.id) ? <Check size={14} /> : String(t.id).padStart(2, '0')}
                </span>
                <span>{t.short}</span>
                <ChevronRight size={13} />
              </Link>
            ))}
            {!filtered.length && (
              <p className="search-empty">
                Tidak ada topik yang cocok.
                <button className="text-link" onClick={() => setQuery('')}>
                  Lihat semua topik
                </button>
              </p>
            )}
          </nav>
        </aside>
        <div className="learning-content">
          <div className="mobile-topic-select">
            <label htmlFor="select-topic">Pilih topik</label>
            <select
              id="select-topic"
              value={topic.id}
              onChange={(e) => go(path + '?topik=' + e.target.value)}
            >
              {topics.map((t) => (
                <option key={t.id} value={t.id}>
                  {String(t.id).padStart(2, '0')} · {t.short}
                </option>
              ))}
            </select>
          </div>
          <article className="panel lesson-article" key={mode + topic.id}>
            <div className="article-topline">
              <span className="pill pill-blue">Topik {String(topic.id).padStart(2, '0')}</span>
              <span>{topic.group}</span>
              {learned.includes(topic.id) && <Check size={17} className="green-ink" />}
            </div>
            <h2>{topic.title}</h2>
            {material ? (
              <>
                <p className="lesson-intro">{topic.intro}</p>
                <div className="formula-set">
                  {topic.formulas.map((f) => (
                    <div className="formula-box" key={f.label}>
                      <h3>{f.label}</h3>
                      <Formula display>{f.math}</Formula>
                      <p>
                        <MathText>{f.note}</MathText>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="inline-tip">
                  <Lightbulb size={19} />
                  <p>{topic.tip}</p>
                </div>
                <div className="lesson-actions">
                  <button
                    className={'btn ' + (learned.includes(topic.id) ? 'btn-done' : 'btn-primary')}
                    aria-pressed={learned.includes(topic.id)}
                    onClick={() => toggleTopic('lessons', topic.id)}
                  >
                    <Check size={16} />
                    {learned.includes(topic.id) ? 'Sudah dipelajari' : 'Tandai sudah dipelajari'}
                  </button>
                  <Link
                    className="text-link"
                    href={subjectRoute(currentSubject.slug, 'contoh-soal') + '?topik=' + topic.id}
                  >
                    Lihat contoh soal
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </>
            ) : (
              <Example topic={topic} />
            )}
          </article>
          {topic.id < topics.length ? (
            <Link href={path + '?topik=' + (topic.id + 1)} className="next-topic">
              <span className="next-topic-icon">
                {material ? <BookOpen size={20} /> : <ListOrdered size={20} />}
              </span>
              <span>
                <small>Topik berikutnya</small>
                <b>{topics[topic.id].short}</b>
              </span>
              <ArrowRight size={18} />
            </Link>
          ) : (
            <Link href={subjectRoute(currentSubject.slug, 'try-out')} className="next-topic">
              <span>
                <small>Uji pemahamanmu</small>
                <b>Mulai try out {currentSubject.name}</b>
              </span>
              <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
