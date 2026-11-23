import App from '../../../../src/App'
import { notFound } from 'next/navigation'
import { getAllSubjects } from '../../../../src/data/subjects'

const subjects = getAllSubjects().map((s) => s.slug)
const sections = ['materi', 'contoh-soal', 'cara-pengerjaan', 'try-out', 'hasil', 'praktik']

export const dynamicParams = false

export function generateStaticParams() {
  const params: { subject: string; section: string }[] = []
  for (const subject of subjects) {
    for (const section of sections) {
      params.push({ subject, section })
    }
  }
  return params
}

export default async function SubjectSectionPage({
  params,
}: {
  params: Promise<{ subject: string; section: string }>
}) {
  const { subject, section } = await params
  if (!subjects.includes(subject) || !sections.includes(section)) {
    notFound()
  }
  return <App initialPath={`/mapel/${subject}/${section}`} />
}
