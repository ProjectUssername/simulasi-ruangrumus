import App from '../../../src/App'
import { notFound } from 'next/navigation'
import { getAllSubjects } from '../../../src/data/subjects'

const subjects = getAllSubjects().map((s) => s.slug)

export const dynamicParams = false

export function generateStaticParams() {
  return subjects.map((subject) => ({ subject }))
}

export default async function SubjectHomePage({
  params,
}: {
  params: Promise<{ subject: string }>
}) {
  const { subject } = await params
  if (!subjects.includes(subject)) notFound()
  return <App initialPath={`/mapel/${subject}`} />
}
