import { asset } from '../lib/asset'
import { cv } from '../content/contacts'
import { profile } from '../content/profile'
import type { SectionId } from '../sections'
import { SECTIONS } from '../sections'
import { useTheme } from '../hooks/useTheme'
import { Icon } from './Icon'
import styles from './Header.module.css'

interface HeaderProps {
  active: SectionId
}

/**
 * The navigation is drawn as a pipeline DAG: sections already read are
 * "succeeded", the one on screen is "running", the rest are "queued".
 */
export function Header({ active }: HeaderProps) {
  const { theme, toggle } = useTheme()
  const activeIndex = SECTIONS.findIndex((s) => s.id === active)
  const initials = profile.name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .toLowerCase()

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand} aria-label={`${profile.name}, back to top`}>
          <span className={styles.mark} aria-hidden="true">
            {initials}
          </span>
          <span className={styles.brandName}>{profile.name}</span>
        </a>

        <nav className={styles.dag} aria-label="Sections">
          <ol>
            {SECTIONS.map((s, i) => {
              const state = i < activeIndex ? 'done' : i === activeIndex ? 'running' : 'queued'
              return (
                <li key={s.id} className={styles.step} data-state={state}>
                  {i > 0 && <span className={styles.edge} aria-hidden="true" />}
                  <a href={`#${s.id}`} aria-current={i === activeIndex ? 'location' : undefined}>
                    <span className={styles.node} aria-hidden="true" />
                    <span className={styles.label}>{s.nav}</span>
                  </a>
                </li>
              )
            })}
          </ol>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconBtn}
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a className={`btn btn-primary ${styles.cv}`} href={asset(cv.href)} download={cv.downloadName}>
            <Icon name="download" />
            <span>CV</span>
          </a>
        </div>
      </div>
    </header>
  )
}
