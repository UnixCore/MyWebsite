import { asset } from '../lib/asset'
import type { Project } from '../content/types'
import { formatYearMonth } from '../lib/date'
import styles from './ProjectCard.module.css'

const MAX_TAGS = 4

interface Props {
  project: Project
  onOpen: () => void
}

export function ProjectCard({ project, onOpen }: Props) {
  const cover = project.images[0]
  const extra = project.tech.length - MAX_TAGS

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {cover ? (
          <img src={asset(cover.src)} alt="" loading="lazy" decoding="async" width={1600} height={1000} />
        ) : (
          <div className={styles.noImage} aria-hidden="true" />
        )}
        {project.images.length > 1 && <span className={styles.count}>{project.images.length} images</span>}
      </div>

      <div className={styles.body}>
        <p className={styles.meta}>
          <span>{formatYearMonth(project.date)}</span>
          {project.draft && <span className={styles.draft}>draft</span>}
        </p>
        <h3 className={styles.title}>
          {/* The whole card is clickable through this button's ::after overlay. */}
          <button type="button" className={styles.open} onClick={onOpen} aria-haspopup="dialog">
            {project.title}
          </button>
        </h3>
        <p className={styles.summary}>{project.summary}</p>
        <ul className={`tag-list ${styles.tags}`} aria-label="Technologies">
          {project.tech.slice(0, MAX_TAGS).map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
          {extra > 0 && <li className={`tag ${styles.more}`}>+{extra}</li>}
        </ul>
      </div>
    </article>
  )
}
