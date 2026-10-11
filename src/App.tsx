import { Header } from './components/Header'
import { useScrollSpy } from './hooks/useScrollSpy'
import { profile } from './content/profile'
import { SECTION_IDS } from './sections'
import type { SectionId } from './sections'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import styles from './App.module.css'

const YEAR = new Date().getFullYear()

export default function App() {
  const active = useScrollSpy(SECTION_IDS) as SectionId

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" />
      <Header active={active} />
      <main id="main">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <p>
            © {YEAR} {profile.name}
          </p>
          <p>Built with React and Vite, served by nginx.</p>
        </div>
      </footer>
    </>
  )
}
