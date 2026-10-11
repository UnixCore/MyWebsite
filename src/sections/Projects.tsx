import { useEffect, useMemo, useState } from 'react'
import { Section } from '../components/Section'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectDialog } from '../components/ProjectDialog'
import { contacts } from '../content/contacts'
import { projects } from '../content/projects'
import type { Project } from '../content/types'
import styles from './Projects.module.css'

const HASH_PREFIX = '#project-'

export function Projects() {
  const [filter, setFilter] = useState<string | null>(null)
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  // Technologies used by more than one project make useful filters.
  const filters = useMemo(() => {
    const count = new Map<string, number>()
    projects.forEach((p) => p.tech.forEach((t) => count.set(t, (count.get(t) ?? 0) + 1)))
    return [...count.entries()]
      .filter(([, n]) => n > 1)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([t]) => t)
  }, [])

  const visible = filter ? projects.filter((p) => p.tech.includes(filter)) : projects
  const openProject: Project | undefined = projects.find((p) => p.slug === openSlug)

  // Deep links: /#project-<slug> opens that project.
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash
      if (h.startsWith(HASH_PREFIX)) {
        const slug = decodeURIComponent(h.slice(HASH_PREFIX.length))
        if (projects.some((p) => p.slug === slug)) setOpenSlug(slug)
      }
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [])

  const open = (slug: string) => {
    setOpenSlug(slug)
    history.replaceState(null, '', `${HASH_PREFIX}${slug}`)
  }
  const close = () => {
    setOpenSlug(null)
    history.replaceState(null, '', '#projects')
  }

  const linkedin = contacts.find((c) => c.kind === 'linkedin')

  return (
    <Section
      id="projects"
      title="Projects"
      lead="Things I built on my own time. Open a card for screenshots, the full story and the stack."
    >
      {projects.length === 0 ? (
        <div className={styles.empty}>
          <p>Personal projects are being documented and will appear here soon.</p>
          {linkedin && (
            <p>
              Meanwhile, my professional work is on{' '}
              <a href={linkedin.url} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              .
            </p>
          )}
        </div>
      ) : (
        <>
          {filters.length > 0 && (
            <div className={styles.filters} role="group" aria-label="Filter by technology">
              <button type="button" aria-pressed={filter === null} onClick={() => setFilter(null)}>
                All <span>{projects.length}</span>
              </button>
              {filters.map((t) => (
                <button key={t} type="button" aria-pressed={filter === t} onClick={() => setFilter(t)}>
                  {t}
                </button>
              ))}
            </div>
          )}

          <ul className={styles.grid}>
            {visible.map((p) => (
              <li key={p.slug}>
                <ProjectCard project={p} onOpen={() => open(p.slug)} />
              </li>
            ))}
          </ul>
        </>
      )}

      <ProjectDialog project={openProject} onClose={close} />
    </Section>
  )
}
