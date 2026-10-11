import { useId, useState } from 'react'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import { experience } from '../content/experience'
import type { Role } from '../content/types'
import { formatDuration, formatPeriod } from '../lib/date'
import styles from './Experience.module.css'

const byStartDesc = <T extends { start: string }>(a: T, b: T) => b.start.localeCompare(a.start)

export function Experience() {
  const employers = [...experience].sort(byStartDesc)

  return (
    <Section
      id="experience"
      title="Experience"
      lead="Data platforms, cloud migrations and, lately, agentic AI. Newest first."
    >
      <div className={styles.employers}>
        {employers.map((emp) => (
          <article key={emp.company} className={styles.employer}>
            <header className={styles.empHead}>
              <h3 className={styles.company}>{emp.company}</h3>
              <p className={styles.empMeta}>
                <span>{formatPeriod(emp.start, emp.end)}</span>
                {formatDuration(emp.start, emp.end) && <span>{formatDuration(emp.start, emp.end)}</span>}
                <span>{emp.location}</span>
              </p>
            </header>

            <ol className={styles.timeline}>
              {[...emp.roles].sort(byStartDesc).map((role) => (
                <RoleItem key={role.title + role.start} role={role} />
              ))}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  )
}

function RoleItem({ role }: { role: Role }) {
  const [open, setOpen] = useState(false)
  const detailsId = useId()
  const current = role.end === 'present'

  return (
    <li className={styles.role} data-current={current || undefined}>
      <div className={styles.when}>
        <span className={styles.period}>{formatPeriod(role.start, role.end)}</span>
        {formatDuration(role.start, role.end) && (
          <span className={styles.duration}>{formatDuration(role.start, role.end)}</span>
        )}
      </div>

      <div className={styles.body}>
        <h4 className={styles.title}>{role.title}</h4>
        {role.sector && <p className={styles.sector}>{role.sector}</p>}
        <p className={styles.summary}>{role.summary}</p>

        {role.details && role.details.length > 0 && (
          <>
            <div id={detailsId} className={styles.details} hidden={!open}>
              {role.details.map((d, i) => (
                <p key={i}>{d}</p>
              ))}
            </div>
            <button
              type="button"
              className={styles.toggle}
              aria-expanded={open}
              aria-controls={detailsId}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? 'Hide details' : 'Show details'}
              <Icon name="chevron-down" className={styles.chev} data-open={open || undefined} />
            </button>
          </>
        )}

        <ul className={`tag-list ${styles.tech}`} aria-label="Technologies">
          {role.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
