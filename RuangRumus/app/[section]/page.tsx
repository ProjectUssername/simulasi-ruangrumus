import App from '../../src/App'
import { notFound } from 'next/navigation'
const pages = ['materi', 'contoh-soal', 'cara-pengerjaan', 'try-out', 'hasil', 'praktik']
export const dynamicParams = false
export function generateStaticParams() {
  return pages.map((section) => ({ section }))
}
export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  if (!pages.includes(section)) notFound()
  return <App initialPath={`/${section}`} />
}
