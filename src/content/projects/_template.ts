// Copy this file to `<your-slug>.ts` (no leading underscore) to publish a project.
// Files starting with `_` are ignored by the site.
import type { Project } from '../types'

const project: Project = {
  slug: 'your-slug', // must match the file name and the image folder
  title: 'Project title',
  summary: 'One line that tells a recruiter what this is and why it matters.',
  description: [
    'First paragraph: the problem and the context.',
    'Second paragraph: what you built and how.',
    'Third paragraph: the result, numbers if you have them, what you learned.',
  ],
  tech: ['Python', 'PySpark'],
  images: [
    // The first image is the card cover. Recommended: 1600×1000 WebP, < 300 KB.
    { src: '/projects/your-slug/01.webp', alt: 'Describe what the screenshot shows' },
  ],
  links: [
    { label: 'Source code', url: 'https://github.com/you/your-repo' },
    // { label: 'Live demo', url: 'https://...' },
  ],
  date: '2026-01',
  featured: false,
  draft: true, // set to false (or remove) to publish
}

export default project
