import type { Contact, CvFile } from './types'

// ─────────────────────────────────────────────────────────────
// CONTACTS — shown in the order below.
// Tracking parameters (utm_*, igsh...) are removed on purpose.
// ─────────────────────────────────────────────────────────────

export const contacts: Contact[] = [
  {
    kind: 'linkedin',
    label: 'LinkedIn',
    value: 'francesco-altomare',
    url: 'https://www.linkedin.com/in/francesco-altomare-545ba820b',
  },
  {
    kind: 'email',
    label: 'Email',
    value: 'Francescoaltomare99@icloud.com',
    url: 'mailto:Francescoaltomare99@icloud.com',
  },
  {
    kind: 'whatsapp',
    label: 'WhatsApp',
    value: '+39 327 750 7177',
    url: 'https://wa.me/393277507177',
  },
  {
    kind: 'instagram',
    label: 'Instagram',
    value: '@francesco___altomare',
    url: 'https://www.instagram.com/francesco___altomare',
  },
  {
    kind: 'github',
    label: 'GitHub',
    value: 'UnixCore',
    url: 'https://github.com/UnixCore/',
  },
]

// ─────────────────────────────────────────────────────────────
// CV — replace the file in /public/cv and update `updated`.
// ─────────────────────────────────────────────────────────────

export const cv: CvFile = {
  href: '/cv/Francesco-Altomare-CV.pdf',
  downloadName: 'Francesco-Altomare-CV.pdf',
  updated: '2026-09',
  format: 'PDF',
}
