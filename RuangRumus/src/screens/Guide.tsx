import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, Clock3, Flag, Lightbulb, X } from 'lucide-react'
import { PageHeading } from '../components/PageHeading'
import { ExamFacts } from '../components/DashboardPanels'
import { Link, subjectRoute, useRoute } from '../lib/navigation'
import { MathText } from '../components/MathText'
import { useStudy } from '../lib/study-store'

export function Guide() {
  const [tab, setTab] = useState(0)
  const { currentSubject } = useRoute()
  const { state } = useStudy()
  const { strategy, mistakes, faq } = currentSubject.guide

  return (
    <>
      <PageHeading
        section="Cara Pengerjaan"
        title={`Cara pengerjaan ${currentSubject.name}`}
        desc="Atur alokasi waktu, kuasai strategi pengerjaan, dan hindari kesalahan umum."
      />
      <div className="content-aside-layout">
        <div>
          <div className="tab-strip" aria-label="Bagian panduan">
            {['Strategi ujian', 'Kesalahan umum', 'Tentang try out'].map((t, i) => (
              <button
                key={t}
                className={tab === i ? 'active' : ''}
                aria-pressed={tab === i}
                onClick={() => setTab(i)}
              >
                {t}
              </button>
            ))}
          </div>
          <section className="panel guide-body">
            {tab === 0 ? (
              <>
                <div className="article-topline">
                  <Clock3 size={16} />
                  <span>Rencana {currentSubject.examMinutes} menit</span>
                </div>
                <h2>Bagi waktumu dengan tepat</h2>
                <p className="lesson-intro">
                  Gunakan pembagian ini sebagai panduan alokasi waktu yang efektif selama simulasi.
                </p>
                <ol className="strategy-list">
                  {strategy.map(([time, title, desc], i) => (
                    <li key={title}>
                      <span className="step-index">{i + 1}</span>
                      <div>
                        <span className="time-tag">{time}</span>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </>
            ) : tab === 1 ? (
              <>
                <div className="article-topline">
                  <Lightbulb size={16} />
                  <span>Catatan konsep</span>
                </div>
                <h2>Kesalahan yang sering terjadi</h2>
                <div className="guide-accordions">
                  {mistakes.map(([title, wrong, right], i) => (
                    <details key={title} open={i === 0}>
                      <summary>
                        {title}
                        <ChevronDown size={17} />
                      </summary>
                      <div className="mistake">
                        <X size={16} />
                        <p>
                          <MathText>{wrong}</MathText>
                        </p>
                      </div>
                      <div className="correction">
                        <Check size={16} />
                        <p>
                          <MathText>{right}</MathText>
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="article-topline">
                  <Flag size={16} />
                  <span>Petunjuk teknis</span>
                </div>
                <h2>Tentang pengerjaan try out</h2>
                <div className="guide-accordions">
                  {faq.map(([q, a], i) => (
                    <details key={q} open={i === 0}>
                      <summary>
                        {q}
                        <ChevronDown size={17} />
                      </summary>
                      <p>{a}</p>
                    </details>
                  ))}
                </div>
              </>
            )}
            <div className="guide-cta">
              <Link href={subjectRoute(currentSubject.slug, 'try-out')} className="btn btn-primary">
                {state.draft ? 'Lanjutkan try out' : 'Ke halaman try out'}
                <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        </div>
        <aside>
          <ExamFacts />
        </aside>
      </div>
    </>
  )
}
