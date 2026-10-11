import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from '../App'
import { projects } from '../content/projects'
import { formatDuration, formatPeriod, yearsSince } from '../lib/date'

describe('date helpers', () => {
  const now = new Date(Date.UTC(2026, 9, 1))
  it('formats periods', () => {
    expect(formatPeriod('2024-06', '2024-12')).toBe('Jun 2024 – Dec 2024')
    expect(formatPeriod('2025-12', 'present')).toBe('Dec 2025 – Present')
    expect(formatPeriod('2023-03')).toBe('Mar 2023')
  })
  it('formats durations', () => {
    expect(formatDuration('2024-06', '2024-12', now)).toBe('7 mos')
    expect(formatDuration('2022-03', '2023-05', now)).toBe('1 yr 3 mos')
    expect(formatDuration('2023-03', undefined, now)).toBe('')
  })
  it('computes years of experience', () => {
    expect(yearsSince('2022-03', now)).toBe(4)
  })
})

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
  })

  it('renders the four sections', () => {
    render(<App />)
    for (const name of ['About me', 'Experience', 'Projects', 'Contact']) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }
  })

  it('toggles and remembers the theme', async () => {
    render(<App />)
    const btn = screen.getByRole('button', { name: /switch to dark theme/i })
    await userEvent.click(btn)
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
    expect(screen.getByRole('button', { name: /switch to light theme/i })).toBeInTheDocument()
  })

  it('offers the CV download', () => {
    render(<App />)
    const links = screen.getAllByRole('link', { name: /download cv/i })
    expect(links.length).toBeGreaterThan(0)
    expect(links[0]).toHaveAttribute('download')
  })

  it('opens external links safely', () => {
    render(<App />)
    for (const a of document.querySelectorAll('a[target="_blank"]')) {
      expect(a.getAttribute('rel')).toContain('noopener')
    }
  })

  it.skipIf(projects.length === 0)('expands a project card into the detail dialog', async () => {
    render(<App />)
    const p = projects[0]
    await userEvent.click(screen.getByRole('button', { name: p.title }))
    const dialog = document.querySelector('dialog')!
    expect(dialog.open).toBe(true)
    expect(within(dialog).getByRole('heading', { name: p.title })).toBeInTheDocument()
    await userEvent.click(within(dialog).getByRole('button', { name: /close project details/i }))
    expect(dialog.open).toBe(false)
  })
})
