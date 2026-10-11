/** Page sections, in order. `nav` is the short id shown in the pipeline navigation. */
export const SECTIONS = [
  { id: 'about', nav: 'about', title: 'About me' },
  { id: 'experience', nav: 'experience', title: 'Experience' },
  { id: 'projects', nav: 'projects', title: 'Projects' },
  { id: 'contact', nav: 'contact', title: 'Contact' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']
export const SECTION_IDS: readonly SectionId[] = SECTIONS.map((s) => s.id)
