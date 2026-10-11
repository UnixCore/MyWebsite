import type { Project } from '../types'

/**
 * Every `*.ts` file in this folder (except this one and files starting
 * with `_`) is a project. To add a project:
 *
 *   1. copy `_template.ts` to `my-project.ts` and fill it in;
 *   2. put its images in `public/projects/my-project/`.
 *
 * No other file needs to change.
 */
const modules = import.meta.glob<{ default: Project }>(['./*.ts', '!./index.ts', '!./_*.ts'], {
  eager: true,
})

const showDrafts = import.meta.env.DEV

export const allProjects: Project[] = Object.values(modules).map((m) => m.default)

export const projects: Project[] = allProjects
  .filter((p) => showDrafts || !p.draft)
  .sort((a, b) => {
    if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1
    return b.date.localeCompare(a.date)
  })
