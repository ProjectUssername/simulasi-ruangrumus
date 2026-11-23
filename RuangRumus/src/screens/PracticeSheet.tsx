import { useState } from 'react'
import {
  Activity,
  ArrowRight,
  Award,
  CheckCircle2,
  FileCheck,
  Heart,
  Layers,
  Music,
  RotateCcw,
  Sparkles,
  UserCheck,
} from 'lucide-react'
import { PageHeading } from '../components/PageHeading'
import { Link, useRoute } from '../lib/navigation'
import { useStudy } from '../lib/study-store'
import { practiceRubric, type PracticeCriterion } from '../data/seni-tari/practice-rubric'

const elementIcons = {
  Wiraga: Activity,
  Wirama: Music,
  Wirasa: Heart,
  Komposisi: Layers,
}

export function PracticeSheet() {
  const { currentSubject, subjectRoute } = useRoute()
  const { state, setPracticeScore } = useStudy()
  const [activeTab, setActiveTab] = useState<'form' | 'guide'>('form')

  const scores = state.practiceScores ?? {}

  const totalScore = practiceRubric.criteria.reduce((sum, c) => {
    return sum + (scores[c.id] ?? 0)
  }, 0)

  const filledCount = practiceRubric.criteria.filter((c) => scores[c.id] !== undefined).length
  const allFilled = filledCount === practiceRubric.criteria.length

  const getPredicate = (s: number) => {
    if (s >= 90) return { label: 'Sangat Memuaskan (A)', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/30' }
    if (s >= 80) return { label: 'Memuaskan (B)', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-500/30' }
    if (s >= 70) return { label: 'Cukup (C)', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/40 border-orange-500/30' }
    return { label: 'Perlu Bimbingan (D)', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-950/40 border-red-500/30' }
  }

  const predicate = getPredicate(totalScore)

  const handleReset = () => {
    if (window.confirm('Reset seluruh nilai praktik tari?')) {
      practiceRubric.criteria.forEach((c) => {
        setPracticeScore(c.id, 0)
      })
    }
  }

  return (
    <>
      <PageHeading
        section="Penilaian Praktik · Seni Tari"
        title="Lembar Penilaian Kinerja Praktik Tari"
        desc="Asesmen sumatif keterampilan unjuk kerja tari tradisional dan kreasi berdasarkan 4 pilar: Wiraga, Wirama, Wirasa, dan Pola Lantai/Busana."
      >
        <div className="flex gap-2">
          <Link href={subjectRoute('/try-out')} className="btn btn-outline text-xs">
            <FileCheck size={14} />
            Try out teori
          </Link>
          <button onClick={handleReset} className="btn btn-outline text-xs">
            <RotateCcw size={14} />
            Reset skor
          </button>
        </div>
      </PageHeading>

      {/* Summary Score Card */}
      <section className="panel mb-6 practice-hero-card">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-2">
          <div className="flex items-center gap-5">
            <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-[var(--surface-hover)] border border-[var(--border)] shadow-sm">
              <span className="text-3xl font-extrabold text-[var(--primary)] font-mono">
                {totalScore}
              </span>
              <span className="absolute bottom-2 text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">
                Skor / 100
              </span>
            </div>
            <div>
              <span className="text-xs uppercase font-semibold text-[var(--text-muted)] tracking-wider">
                Hasil Akumulasi Praktik
              </span>
              <h2 className="text-xl font-bold text-[var(--text)] mt-0.5">
                {allFilled ? predicate.label : `Terisi ${filledCount} dari 4 Kriteria`}
              </h2>
              <p className="text-xs text-[var(--text-muted)] mt-1 max-w-md">
                {allFilled
                  ? 'Seluruh kriteria telah dievaluasi sesuai indikator capaian kinerja tari.'
                  : 'Pilih capaian level pada setiap kriteria di bawah untuk melengkapi asesmen praktik.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className={`px-4 py-2.5 rounded-xl border text-sm font-semibold flex items-center gap-2 ${predicate.bg}`}>
              <Award size={16} className={predicate.color} />
              <span>Predikat: <strong className={predicate.color}>{totalScore >= 70 ? 'Lulus' : 'Belum Memenuhi'}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Criteria Cards */}
      <div className="space-y-6">
        {practiceRubric.criteria.map((criterion, idx) => {
          const Icon = elementIcons[criterion.element] || Activity
          const currentVal = scores[criterion.id]

          return (
            <section key={criterion.id} className="panel practice-criterion-card">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--surface-hover)] text-[var(--primary)] border border-[var(--border)] font-semibold text-xs">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text)] flex items-center gap-2">
                      <Icon size={16} className="text-[var(--primary)]" />
                      {criterion.name}
                    </h3>
                    <span className="text-xs text-[var(--text-muted)]">
                      Bobot maksimal: {criterion.weight} poin
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-[var(--text-muted)] block">Nilai Tercapai</span>
                  <span className="text-lg font-bold font-mono text-[var(--primary)]">
                    {currentVal ?? 0} <small className="text-xs font-normal text-[var(--text-muted)]">/ {criterion.weight}</small>
                  </span>
                </div>
              </div>

              <p className="text-xs text-[var(--text-muted)] mt-3 mb-4 leading-relaxed">
                {criterion.description}
              </p>

              {/* Levels Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {criterion.levels.map((lvl) => {
                  const isSelected = currentVal === lvl.score

                  return (
                    <button
                      key={lvl.score}
                      type="button"
                      onClick={() => setPracticeScore(criterion.id, lvl.score)}
                      className={`text-left p-3.5 rounded-xl border transition-all relative flex flex-col justify-between ${
                        isSelected
                          ? 'border-[var(--primary)] bg-[var(--surface-hover)] ring-2 ring-[var(--primary)]/20 shadow-sm'
                          : 'border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-xs font-bold text-[var(--text)]">
                            {lvl.label}
                          </span>
                          <span
                            className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                              isSelected
                                ? 'bg-[var(--primary)] text-white'
                                : 'bg-[var(--surface-hover)] text-[var(--text-muted)]'
                            }`}
                          >
                            {lvl.score} pt
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                          {lvl.descriptor}
                        </p>
                      </div>

                      {isSelected && (
                        <div className="mt-2.5 pt-2 border-t border-[var(--border)] flex items-center gap-1.5 text-xs font-medium text-[var(--primary)]">
                          <CheckCircle2 size={13} />
                          <span>Level terpilih</span>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      {/* Guide & Advice Footer */}
      <section className="panel mt-6">
        <h3 className="text-base font-bold text-[var(--text)] flex items-center gap-2 mb-2">
          <Sparkles size={16} className="text-[var(--primary)]" />
          Petunjuk Pelaksanaan Asesmen Praktik Tari
        </h3>
        <ul className="text-xs text-[var(--text-muted)] space-y-2 leading-relaxed">
          <li>
            • <strong>Wiraga (30%)</strong>: Amati kesiapan fisik, kestabilan tumpuan tubuh bawah (kuda-kuda/mendak), kejelasan bentuk jari (ukel, nyempurit), dan artikulasi torso.
          </li>
          <li>
            • <strong>Wirama (25%)</strong>: Evaluasi apakah ketukan kaki dan aksen tangan selaras dengan ketukan kendang, irama gong, dan dinamika musik pengiring (laya).
          </li>
          <li>
            • <strong>Wirasa (25%)</strong>: Perhatikan ekspresi wajah (pasemon), sorot pandang mata (seledet), dan kemampuan penari mentransformasikan karakter tarian (halus, gagah, atau lincah).
          </li>
          <li>
            • <strong>Pola Lantai & Properti (20%)</strong>: Cek ketepatan penari mengisi ruang pentas, konsistensi formasi kelompok/tunggal, serta kelihaian penggunaan properti (selendang, kipas, atau tameng).
          </li>
        </ul>
      </section>
    </>
  )
}
