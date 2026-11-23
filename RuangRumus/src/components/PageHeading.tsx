import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from '../lib/navigation'
export function PageHeading({
  section,
  title,
  desc,
  children,
}: {
  section: string
  title: string
  desc?: string
  children?: ReactNode
}) {
  return (
    <header className="page-heading">
      <div className="breadcrumb">
        <Link href="/">Beranda</Link>
        <ChevronRight size={13} />
        <span>{section}</span>
      </div>
      <div className="page-heading-row">
        <div>
          <h1>{title}</h1>
          {desc && <p>{desc}</p>}
        </div>
        {children}
      </div>
    </header>
  )
}
