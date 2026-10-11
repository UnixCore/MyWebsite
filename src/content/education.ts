import type { Certification, Education } from './types'

export const education: Education[] = [
  {
    title: 'Degree in Computer Engineering',
    institution: 'University of Calabria (UNICAL)',
    start: '2017',
    end: '2022',
  },
  {
    title: 'Technical and scientific high school diploma',
    institution: 'IIS IPSIA Marconi CS — ITE Guarasci, Rogliano',
    start: '2013',
    end: '2017',
  },
]

export const certifications: Certification[] = [
  {
    name: 'Claude Professional Architect',
    issuer: 'Anthropic',
    status: 'in-preparation',
  },
  {
    name: 'Google Cloud Professional Data Engineer (renewal)',
    issuer: 'Google Cloud',
    date: '2026-08',
    validUntil: '2027',
    status: 'active',
  },
  {
    name: 'Databricks Certified Data Engineer Professional',
    issuer: 'Databricks',
    date: '2026-07',
    validUntil: '2029',
    status: 'active',
  },
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: '2026-06',
    status: 'active',
  },
  {
    name: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    date: '2024-02',
  },
]
