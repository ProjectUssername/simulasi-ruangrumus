/* Independent answer checks. No answer key is used to calculate expected results. */
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'
import katex from 'katex'

async function data(file) {
  const source = readFileSync(new URL('../src/data/' + file + '.ts', import.meta.url), 'utf8')
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  })
  return import('data:text/javascript;base64,' + Buffer.from(outputText).toString('base64'))
}

// ---------------------------------------------------------
// 1. MATEMATIKA WAJIB VERIFICATION (Original Unchanged Suite)
// ---------------------------------------------------------
console.log('--- Memverifikasi Matematika Wajib ---')
const { questions: qs } = await data('questions')
const { topics } = await data('topics')

const seq = (a, b, n) => Array.from({ length: n }, (_, i) => a + b * i)
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i)
const sum = (a) => a.reduce((x, y) => x + y, 0)
const compound = (p, i, n) => {
  let balance = p
  for (let t = 0; t < n; t++) balance += balance * i
  return Math.round(balance)
}
const simple = (p, i, n) => Math.round(p + p * i * n)
const money = (n) => 'Rp' + Math.round(n).toLocaleString('id-ID')
const unique = (arr, pred) => {
  const found = arr.filter(pred)
  assert.equal(found.length, 1, 'Answer must be unique')
  return found[0]
}
const correct = []
correct[1] = String(seq(7, 4, 12).at(-1))
correct[2] = String(geo(3, 2, 8).at(-1))
correct[3] = String(17 + ((15 - 4) * (37 - 17)) / (9 - 4))
correct[4] = String(sum(seq(5, 3, 20)))
correct[5] = String(sum(geo(2, 3, 5)))
correct[6] = String(sum(geo(128, 0.5, 8)))
correct[7] = money(seq(10000, 5000, 10).at(-1))
correct[8] = sum(seq(14, 2, 12)) + ' kursi'
correct[9] = sum(geo(4, 3, 5)) + ' siswa'
correct[10] = money((2400000 * 0.06 * 8) / 12)
correct[11] = money(compound(1500000, 0.1, 2))
correct[12] = money(simple(3000000, 0.12, 1) / 12)
// Compare the five proposed interest bases, using the second interest payment.
const p = 1000,
  i = 0.1,
  b1 = compound(p, i, 1) - p,
  b2 = compound(p, i, 2) - compound(p, i, 1)
const bases = [p, p + b1, b1, p - b1, (p + b1) / 2]
correct[13] =
  qs[12].options[
    unique(
      bases.map((_, j) => j),
      (j) => Math.abs(bases[j] * i - b2) < 1e-9,
    )
  ]
correct[14] = money(compound(1000000, 0.1, 2) - simple(1000000, 0.1, 2))
correct[15] = money(
  compound(2000000, 0.05, 3) -
    compound(2000000, 0.05, 2) -
    (simple(2000000, 0.05, 3) - simple(2000000, 0.05, 2)),
)
// Distinguish composition from addition, multiplication, reversed order and division.
const f = (x) => 2 * x + 1,
  g = (x) => x * x - 3
const operations = [
  (x) => f(x) + g(x),
  (x) => f(x) * g(x),
  (x) => f(g(x)),
  (x) => g(f(x)),
  (x) => f(x) / g(x),
]
correct[16] =
  qs[15].options[
    unique([0, 1, 2, 3, 4], (j) => [2, 3, 5].every((x) => operations[j](x) === f(g(x))))
  ]
correct[17] = '$' + unique([-3, -2, -1, 1, 2], (x) => !Number.isFinite(1 / (x + 3 - 2))) + '$'
correct[18] = String(((x) => 2 * x + 3)(((x) => x ** 2 - 1)(4)))
correct[19] = money(100000 * (1 - 0.2) + 5000)
correct[20] = String(unique([5, 6, 7, 8, 9], (x) => 3 * (x + 5) - 2 === 34))
correct[21] = String(unique([4, 8, 12, 16, 20], (x) => 3 * x - 4 === 20))
correct[22] = unique([20, 25, 30, 35, 45], (x) => 200 * x + 2000 === 9000) + ' lembar'
const numerator = unique(
  [4, 8, 10, 14, 16],
  (n) => Math.abs((2 * (n / 3) + 1) / (n / 3 - 3) - 5) < 1e-9,
)
correct[23] = `$\\frac{${numerator}}{3}$`
// Compose each candidate inverse with the original function over multiple points.
const inverseMap = new Map([
  [String.raw`$\frac{x+5}{2}$`, (x) => (x + 5) / 2],
  [String.raw`$\frac{x-5}{2}$`, (x) => (x - 5) / 2],
  ['$2x+5$', (x) => 2 * x + 5],
  [String.raw`$\frac{x+1}{2}$`, (x) => (x + 1) / 2],
  ['$2x-5$', (x) => 2 * x - 5],
  [String.raw`$\sqrt{x+3}$`, (x) => Math.sqrt(x + 3)],
  [String.raw`$\sqrt{x}-3$`, (x) => Math.sqrt(x) - 3],
  [String.raw`$\sqrt{x}+3$`, (x) => Math.sqrt(x) + 3],
  [String.raw`$\sqrt{x-3}$`, (x) => Math.sqrt(x - 3)],
  ['$(x-3)^2$', (x) => (x - 3) ** 2],
])
correct[24] = unique(qs[23].options, (o) =>
  [-5, -1, 0, 2, 8].every((x) => inverseMap.get(o)(2 * (x - 4) + 3) === x),
)
correct[25] = unique(qs[24].options, (o) =>
  [-3, -2, 0, 3, 7].every((x) => inverseMap.get(o)((x + 3) ** 2) === x),
)
assert.equal(qs.length, 30)
assert.equal(qs.filter((q) => q.type === 'pg').length, 25)
assert.equal(qs.filter((q) => q.type === 'esai').length, 5)
for (let j = 0; j < 25; j++) {
  const q = qs[j]
  assert.equal(q.id, j + 1)
  assert.equal(q.options.length, 5)
  assert.equal(new Set(q.options).size, 5)
  assert.equal(q.options[q.key], correct[q.id], `Incorrect key for question ${q.id}`)
}
const b = (26 - 11) / (8 - 3),
  a = 11 - 2 * b
const n = Array.from({ length: 100 }, (_, k) => k + 1).find((n) => sum(seq(18, 4, n)) >= 400)
const sA = simple(2500000, 0.08, 3),
  sB = compound(2500000, 0.08, 3)
const essayValues = [
  [b, a, sum(seq(a, b, 15))],
  [n, sum(seq(18, 4, n - 1)), sum(seq(18, 4, n))],
  [sA, sB, sB - sA],
  [80000 * 0.9 + 3000, (80000 + 3000) * 0.9],
]
// Rational composition: (a*x+b)/(c*x+d) after the affine substitution x=2x+1.
const h = [1 * 2, 1 * 1 + 1, 1 * 2, 1 * 1 - 2]
const inv = [-h[3], h[1], h[2], -h[0]]
const apply = (z, x) => (z[0] * x + z[1]) / (z[2] * x + z[3])
for (const x of [-9, -1, 0, 1, 2, 8.5, 100]) assert.ok(Math.abs(apply(inv, apply(h, x)) - x) < 1e-9)
essayValues.push([...h, ...inv, -h[3] / h[2], -inv[3] / inv[2]])
// Verify the actual model answers shown to learners, not just the numeric test fields.
assert.equal(qs[25].model, `$b=${b}$, $a=${a}$, dan $S_{15}=${essayValues[0][2]}$.`)
assert.equal(
  qs[26].model,
  `Paling sedikit ${n} baris. Sepuluh baris hanya memuat ${essayValues[1][1]} siswa, sedangkan ${n} baris memuat ${essayValues[1][2]} siswa.`,
)
assert.equal(
  qs[27].model,
  `Saldo A ${money(sA)}, saldo B ${money(sB)}. Saldo B lebih besar ${money(sB - sA)}.`,
)
for (const value of essayValues[3]) assert.ok(qs[28].model.includes(money(value)))
const polynomial = (a, b) => (a === 1 ? '' : String(a)) + 'x' + (b >= 0 ? '+' : '') + b
const rational = (z) => `\\frac{${polynomial(z[0], z[1])}}{${polynomial(z[2], z[3])}}`
assert.ok(qs[29].model.includes(rational(h)) && qs[29].model.includes(rational(inv)))
assert.ok(
  qs[29].model.includes(String.raw`x\ne\frac12`) && qs[29].model.includes(String.raw`x\ne1`),
)
for (let j = 0; j < 5; j++) {
  const q = qs[25 + j]
  assert.equal(q.id, 26 + j)
  assert.deepEqual(q.verifiedValues, essayValues[j])
  assert.equal(q.rubric.length, 4)
  assert.ok(q.model && q.solution.length)
}
assert.equal(sum(qs.slice(25).map((q) => q.rubric.length)), 20)
for (const t of topics) {
  const count = qs.filter((q) => q.topic === t.id).length
  assert.ok(count === 3 || count === 4)
}

// ---------------------------------------------------------
// Helper for Generic Subject Verification
// ---------------------------------------------------------
function verifySubjectSuite(name, subjectQuestions, subjectTopics, expectedPg, expectedEssay) {
  console.log(`--- Memverifikasi ${name} ---`)
  assert.equal(
    subjectQuestions.length,
    expectedPg + expectedEssay,
    `${name}: total soal tidak sesuai (${subjectQuestions.length} vs ${expectedPg + expectedEssay})`,
  )
  const pgs = subjectQuestions.filter((q) => q.type === 'pg')
  const essays = subjectQuestions.filter((q) => q.type === 'esai')
  assert.equal(pgs.length, expectedPg, `${name}: jumlah PG tidak sesuai`)
  assert.equal(essays.length, expectedEssay, `${name}: jumlah Esai tidak sesuai`)

  for (let j = 0; j < expectedPg; j++) {
    const q = pgs[j]
    assert.equal(q.id, j + 1, `${name}: ID soal PG #${j + 1} tidak urut`)
    assert.equal(q.options.length, 5, `${name}: Soal PG #${q.id} tidak memiliki 5 opsi`)
    assert.equal(new Set(q.options).size, 5, `${name}: Soal PG #${q.id} memiliki opsi duplikat`)
    assert.ok(
      typeof q.key === 'number' && q.key >= 0 && q.key <= 4,
      `${name}: Kunci PG #${q.id} tidak valid (${q.key})`,
    )
    assert.ok(q.solution && q.solution.length > 0, `${name}: Pembahasan PG #${q.id} kosong`)
  }

  for (let j = 0; j < expectedEssay; j++) {
    const q = essays[j]
    assert.equal(q.id, expectedPg + j + 1, `${name}: ID esai #${q.id} tidak sesuai`)
    assert.ok(q.model && q.model.length > 10, `${name}: Model jawaban esai #${q.id} kosong`)
    assert.ok(q.rubric && q.rubric.length >= 3, `${name}: Rubrik esai #${q.id} kurang lengkap`)
    assert.ok(q.solution && q.solution.length > 0, `${name}: Pembahasan esai #${q.id} kosong`)
  }

  // Ensure every topic has at least one question
  for (const t of subjectTopics) {
    const topicQuestions = subjectQuestions.filter((q) => q.topic === t.id)
    assert.ok(
      topicQuestions.length >= 1,
      `${name}: Topik '${t.title}' (ID ${t.id}) belum memiliki soal terhubung`,
    )
  }
  console.log(
    `SUKSES ${name}: ${expectedPg} PG dan ${expectedEssay} Esai terverifikasi di ${subjectTopics.length} topik.`,
  )
}

// ---------------------------------------------------------
// 2. SEJARAH INDONESIA
// ---------------------------------------------------------
const { questions: sejarahQuestions } = await data('sejarah-indonesia/questions')
const { topics: sejarahTopics } = await data('sejarah-indonesia/topics')
verifySubjectSuite('Sejarah Indonesia', sejarahQuestions, sejarahTopics, 25, 5)

// ---------------------------------------------------------
// 3. BIOLOGI (ASAS)
// ---------------------------------------------------------
const { questions: biologiQuestions } = await data('biologi/questions')
const { topics: biologiTopics } = await data('biologi/topics')
verifySubjectSuite('Biologi ASAS', biologiQuestions, biologiTopics, 30, 5)

// ---------------------------------------------------------
// 4. SENI TARI (KELAS XI)
// ---------------------------------------------------------
const { questions: seniTariQuestions } = await data('seni-tari/questions')
const { topics: seniTariTopics } = await data('seni-tari/topics')
verifySubjectSuite('Seni Tari Kelas XI', seniTariQuestions, seniTariTopics, 30, 5)

// ---------------------------------------------------------
// 5. GLOBAL KATEX VERIFICATION
// ---------------------------------------------------------
let formulas = 0
function mathCheck(v) {
  if (typeof v === 'string') {
    for (const match of v.matchAll(/\$([^$]+)\$/g)) {
      katex.renderToString(match[1], { throwOnError: true })
      formulas++
    }
  } else if (Array.isArray(v)) v.forEach(mathCheck)
  else if (v && typeof v === 'object') Object.values(v).forEach(mathCheck)
}

mathCheck(qs)
mathCheck(topics)
for (const t of topics)
  for (const f of t.formulas) {
    katex.renderToString(f.math, { throwOnError: true })
    formulas++
  }

mathCheck(sejarahQuestions)
mathCheck(sejarahTopics)
mathCheck(biologiQuestions)
mathCheck(biologiTopics)
mathCheck(seniTariQuestions)
mathCheck(seniTariTopics)

console.log(
  `\nLULUS SELURUH VERIFIKASI: 4 Mata Pelajaran (110 PG, 20 Esai/Uraian), dan ${formulas} ekspresi KaTeX valid.`,
)
