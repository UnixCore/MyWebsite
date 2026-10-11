// ⚠️  EXAMPLE — this is a draft, so it shows only in `npm run dev` and never in production.
// It exists to let you preview the card and the detail view. Delete it once you add a
// real project (copy `_template.ts`).
import type { Project } from '../types'

const project: Project = {
  slug: 'example-project',
  title: 'Example project (draft)',
  summary: 'Placeholder used to preview the showroom. Replace it with a real project.',
  description: [
    'This card is a draft: it is visible while developing and filtered out of the production build.',
    'Open it to see how the detail view works: the image gallery on the left, the full description, the technologies and the links.',
    'To publish a real project, copy src/content/projects/_template.ts, fill it in, and put its screenshots in public/projects/<slug>/.',
  ],
  tech: ['React', 'TypeScript', 'Docker'],
  images: [
    { src: '/projects/example-project/01.svg', alt: 'Placeholder screenshot 1' },
    { src: '/projects/example-project/02.svg', alt: 'Placeholder screenshot 2' },
    { src: '/projects/example-project/03.svg', alt: 'Placeholder screenshot 3' },
  ],
  links: [{ label: 'Example link', url: 'https://example.com' }],
  date: '2026-10',
  draft: true,
}

export default project
