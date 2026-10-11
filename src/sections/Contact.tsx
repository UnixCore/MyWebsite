import { asset } from '../lib/asset'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import { contacts, cv } from '../content/contacts'
import { formatYearMonth } from '../lib/date'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      lead="Recruiters and fellow engineers are welcome. Pick the channel you prefer."
    >
      <div className={styles.layout}>
        <ul className={styles.list}>
          {contacts.map((c) => {
            const external = c.url.startsWith('http')
            return (
              <li key={c.kind}>
                <a
                  className={styles.row}
                  href={c.url}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon name={c.kind} className={styles.icon} />
                  <span className={styles.label}>{c.label}</span>
                  <span className={styles.value}>{c.value}</span>
                  <Icon name={external ? 'external' : 'chevron-right'} className={styles.go} />
                </a>
              </li>
            )
          })}
        </ul>

        <aside className={styles.cv} aria-labelledby="cv-title">
          <h3 id="cv-title" className={styles.cvTitle}>
            Curriculum vitae
          </h3>
          <p className={styles.cvMeta}>
            {cv.format}, updated {formatYearMonth(cv.updated)}
          </p>
          <p className={styles.cvText}>The full history of projects, technologies and certifications in one file.</p>
          <a className="btn btn-primary" href={asset(cv.href)} download={cv.downloadName}>
            <Icon name="download" />
            Download CV
          </a>
        </aside>
      </div>
    </Section>
  )
}
