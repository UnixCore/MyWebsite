/**
 * Content model for the whole site.
 *
 * Every piece of text you see on the page lives in `src/content/*`.
 * Edit those files — you should never need to touch a component to
 * change what the site says. TypeScript checks the shape at build time,
 * and `npm test` validates dates, links and image paths.
 *
 * Dates use the "YYYY-MM" format (e.g. "2024-06").
 */

/** "YYYY-MM", e.g. "2025-01". */
export type YearMonth = `${number}-${number}`

export interface Profile {
  name: string
  /** Short role line under the name. */
  role: string
  /** One or two sentences shown next to the photo. */
  intro: string
  /** "My story" paragraphs. Each string is one paragraph. */
  story: string[]
  /** Interests / life outside work. The block is hidden while empty. */
  interests: string[]
  location: string
  /** Career start, used to compute "years of experience". */
  careerStart: YearMonth
  photo: { src: string; srcWebp?: string; alt: string }
  spokenLanguages: { name: string; level: string }[]
}

export interface SkillGroup {
  name: string
  items: string[]
}

export interface SoftSkill {
  name: string
  /** Concrete evidence: where/how you showed it. */
  evidence: string
}

export interface Role {
  title: string
  start: YearMonth
  /** Omit when unknown; use "present" for the current role. */
  end?: YearMonth | 'present'
  sector?: string
  /** One or two sentences, always visible. */
  summary: string
  /** Optional longer paragraphs, revealed with "Show details". */
  details?: string[]
  tech: string[]
}

export interface Employer {
  company: string
  location: string
  start: YearMonth
  end?: YearMonth | 'present'
  /** Roles/projects at this employer. They are sorted newest-first automatically. */
  roles: Role[]
}

export interface Education {
  title: string
  institution: string
  start: string
  end: string
}

export interface Certification {
  name: string
  issuer: string
  /** "YYYY-MM", or omit while in preparation. */
  date?: YearMonth
  validUntil?: string
  status?: 'active' | 'in-preparation'
  /** Optional link to the public credential (Credly, Accredible, ...). */
  url?: string
}

export interface ProjectImage {
  /** Path under /public, e.g. "/projects/my-project/01.webp". */
  src: string
  alt: string
}

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  /** Unique id, also used for the URL hash (#project-<slug>). */
  slug: string
  title: string
  /** One line for the card. */
  summary: string
  /** Full description, one string per paragraph. */
  description: string[]
  tech: string[]
  /** The first image is the card cover. */
  images: ProjectImage[]
  links?: ProjectLink[]
  /** "YYYY" or "YYYY-MM"; used to sort cards newest-first. */
  date: string
  /** Pinned projects come first. */
  featured?: boolean
  /** Drafts appear only in `npm run dev`, never in the production build. */
  draft?: boolean
}

export type ContactKind = 'linkedin' | 'instagram' | 'whatsapp' | 'email' | 'github'

export interface Contact {
  kind: ContactKind
  label: string
  /** What is displayed, e.g. the handle or number. */
  value: string
  url: string
}

export interface CvFile {
  /** Path under /public. */
  href: string
  /** Name proposed to the browser when downloading. */
  downloadName: string
  updated: YearMonth
  format: string
}
