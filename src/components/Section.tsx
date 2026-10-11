import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  title: string
  /** Optional one-line introduction under the title. */
  lead?: ReactNode
  /** Hide the visible title (it stays available to screen readers). */
  hideTitle?: boolean
  children: ReactNode
}

export function Section({ id, title, lead, hideTitle, children }: SectionProps) {
  const headingId = `${id}-title`
  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <div className="container">
        <header className={hideTitle ? 'visually-hidden' : styles.head}>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          {lead && <p className={styles.lead}>{lead}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
