'use client'

import { RouteProvider, useRoute } from './lib/navigation'
import { StudyProvider } from './lib/study-store'
import { Header, Footer } from './components/Shell'
import { Home } from './screens/Home'
import { Learn } from './screens/Learn'
import { Guide } from './screens/Guide'
import { Exam } from './screens/Exam'
import { Results } from './screens/Results'
import { PracticeSheet } from './screens/PracticeSheet'

function Workspace() {
  const { path, currentSection } = useRoute()
  const screen =
    currentSection === 'materi' ? (
      <Learn mode="materi" />
    ) : currentSection === 'contoh-soal' ? (
      <Learn mode="contoh" />
    ) : currentSection === 'cara-pengerjaan' ? (
      <Guide />
    ) : currentSection === 'try-out' ? (
      <Exam />
    ) : currentSection === 'hasil' ? (
      <Results />
    ) : currentSection === 'praktik' ? (
      <PracticeSheet />
    ) : (
      <Home />
    )

  return (
    <>
      <a className="skip-link" href="#konten">
        Langsung ke konten
      </a>
      <Header />
      <main id="konten" className="page-wrap" key={path}>
        {screen}
      </main>
      <Footer />
    </>
  )
}

export default function App({ initialPath }: { initialPath?: string }) {
  return (
    <RouteProvider initialPath={initialPath}>
      <StudyProvider>
        <Workspace />
      </StudyProvider>
    </RouteProvider>
  )
}
