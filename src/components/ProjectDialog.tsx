import { asset } from '../lib/asset'
import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, MouseEvent } from 'react'
import type { Project } from '../content/types'
import { formatYearMonth } from '../lib/date'
import { Icon } from './Icon'
import styles from './ProjectDialog.module.css'

interface Props {
  project?: Project
  onClose: () => void
}

/** Detail view built on the native <dialog>: focus trap, Esc and inert background for free. */
export function ProjectDialog({ project, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  // Clicking the backdrop (the dialog element itself, outside the panel) closes it.
  const onDialogClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      aria-labelledby={project ? `dialog-${project.slug}` : undefined}
      onClose={onClose}
      onClick={onDialogClick}
    >
      {project && <Panel key={project.slug} project={project} onClose={onClose} />}
    </dialog>
  )
}

function Panel({ project, onClose }: { project: Project; onClose: () => void }) {
  const [index, setIndex] = useState(0)
  const images = project.images
  const count = images.length
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count)

  const onKeyDown = (e: KeyboardEvent) => {
    if (count < 2) return
    if (e.key === 'ArrowRight') go(1)
    if (e.key === 'ArrowLeft') go(-1)
  }

  return (
    <div className={styles.panel} onKeyDown={onKeyDown}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Close project details">
        <Icon name="close" />
      </button>

      {count > 0 && (
        <div className={styles.gallery}>
          <div className={styles.stage}>
            <img src={asset(images[index].src)} alt={images[index].alt} width={1600} height={1000} />
            {count > 1 && (
              <>
                <button
                  type="button"
                  className={`${styles.nav} ${styles.prev}`}
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                >
                  <Icon name="chevron-left" />
                </button>
                <button
                  type="button"
                  className={`${styles.nav} ${styles.next}`}
                  onClick={() => go(1)}
                  aria-label="Next image"
                >
                  <Icon name="chevron-right" />
                </button>
                <span className={styles.counter} aria-live="polite">
                  {index + 1} / {count}
                </span>
              </>
            )}
          </div>
          {count > 1 && (
            <ul className={styles.thumbs}>
              {images.map((img, i) => (
                <li key={img.src}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show image ${i + 1}: ${img.alt}`}
                    aria-current={i === index || undefined}
                  >
                    <img src={asset(img.src)} alt="" loading="lazy" width={160} height={100} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className={styles.info}>
        <p className={styles.meta}>
          {formatYearMonth(project.date)}
          {project.draft && <span className={styles.draft}>draft</span>}
        </p>
        <h3 id={`dialog-${project.slug}`} className={styles.title}>
          {project.title}
        </h3>
        <div className={styles.description}>
          {project.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <h4 className={styles.subhead}>Technologies</h4>
        <ul className="tag-list">
          {project.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>

        {project.links && project.links.length > 0 && (
          <>
            <h4 className={styles.subhead}>Links</h4>
            <ul className={styles.links}>
              {project.links.map((l) => (
                <li key={l.url}>
                  <a className="btn" href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label}
                    <Icon name="external" />
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}
