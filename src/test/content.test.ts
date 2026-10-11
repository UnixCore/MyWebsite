/**
 * Guards for the content files: run `npm test` after editing anything in src/content.
 */
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { contacts, cv } from '../content/contacts'
import { certifications } from '../content/education'
import { experience } from '../content/experience'
import { profile } from '../content/profile'
import { allProjects } from '../content/projects'
import { hardSkills, softSkills } from '../content/skills'

const YM = /^\d{4}-(0[1-9]|1[0-2])$/
const publicFile = (p: string) => resolve(__dirname, '../../public', p.replace(/^\//, ''))

describe('profile', () => {
  it('has the essentials', () => {
    expect(profile.name).toBeTruthy()
    expect(profile.intro.length).toBeGreaterThan(20)
    expect(profile.careerStart).toMatch(YM)
  })
  it('photo files exist', () => {
    expect(existsSync(publicFile(profile.photo.src))).toBe(true)
    if (profile.photo.srcWebp) expect(existsSync(publicFile(profile.photo.srcWebp))).toBe(true)
  })
})

describe('experience', () => {
  it('uses valid dates, with end after start', () => {
    for (const emp of experience) {
      expect(emp.start, emp.company).toMatch(YM)
      for (const r of emp.roles) {
        expect(r.start, r.title).toMatch(YM)
        if (r.end && r.end !== 'present') {
          expect(r.end, r.title).toMatch(YM)
          expect(r.end >= r.start, `${r.title}: end before start`).toBe(true)
        }
        expect(r.tech.length, `${r.title}: no technologies`).toBeGreaterThan(0)
      }
    }
  })
})

describe('skills and certifications', () => {
  it('has no empty groups or duplicates inside a group', () => {
    for (const g of hardSkills) {
      expect(g.items.length, g.name).toBeGreaterThan(0)
      expect(new Set(g.items).size, `${g.name} has duplicates`).toBe(g.items.length)
    }
    expect(softSkills.length).toBeGreaterThan(0)
  })
  it('certification dates are valid', () => {
    for (const c of certifications) if (c.date) expect(c.date, c.name).toMatch(YM)
  })
})

describe('projects', () => {
  it('have unique slugs', () => {
    const slugs = allProjects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
  it.each(allProjects.map((p) => [p.slug, p] as const))('%s is complete and its images exist', (_, p) => {
    expect(p.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
    expect(p.title).toBeTruthy()
    expect(p.summary).toBeTruthy()
    expect(p.description.length).toBeGreaterThan(0)
    expect(p.date).toMatch(/^\d{4}(-(0[1-9]|1[0-2]))?$/)
    for (const img of p.images) {
      expect(img.alt, `${p.slug}: image without alt text`).toBeTruthy()
      expect(existsSync(publicFile(img.src)), `${p.slug}: missing ${img.src}`).toBe(true)
    }
    for (const l of p.links ?? []) expect(l.url).toMatch(/^https:\/\//)
  })
})

describe('contacts', () => {
  it('use safe URL schemes', () => {
    for (const c of contacts) expect(c.url).toMatch(/^(https:\/\/|mailto:)/)
  })
  it('CV file exists', () => {
    expect(existsSync(publicFile(cv.href))).toBe(true)
  })
})
