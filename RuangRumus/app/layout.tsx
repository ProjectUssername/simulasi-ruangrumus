import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '../src/index.css'
import 'katex/dist/katex.min.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'RuangRumus — Ruang Belajar & Try Out SMA',
  description:
    'Simulasi try out mandiri Matematika Wajib, Sejarah Indonesia, Biologi, dan Seni Tari SMA berbasis kisi-kisi resmi lengkap dengan pembahasan dan rubrik.',
  icons: { icon: '/favicon.svg' },
}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link
          rel="preload"
          href="/fonts/jakarta-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
