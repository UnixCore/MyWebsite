import type { Profile } from './types'

// ─────────────────────────────────────────────────────────────
// ABOUT ME — edit freely. Everything here comes from the CV.
// ─────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: 'Francesco Altomare',
  role: 'Big Data Engineer · AI Engineer',
  intro:
    'I design and build data pipelines on Azure and Google Cloud — PySpark, Delta Lake, BigQuery, Airflow — and I build agentic AI tooling: custom agents, skills, MCP servers and multi-agent workflows.',

  story: [
    'I studied Computer Engineering at the University of Calabria (2017–2022), where I built personal projects in Java, JavaScript, Angular and Spring and got comfortable with Linux and networking.',
    'In 2022 I joined VT-Solutions and Consulting as a Big Data Engineer. My first project was a connector-based platform in Java and Apache Beam that moved on-premise data to Google Cloud, with tracking tables, dead-letter queues and masking of sensitive data. Over the next years I worked on processing, KPI extraction and migrations from Oracle, SAS and on-premise DWH systems to GCP, and in 2024 I led a team building a GCP platform to replace SAS and Oracle ETL jobs.',
    'Since December 2025 I have been at NTT DATA, building ETL pipelines in PySpark, Polars and Delta Lake on Azure for the insurance sector. I introduced an agentic development approach to the team, and since January 2026 I have also been building an AI Toolkit that lets people with no AI background use agents, skills and guided workflows.',
  ],

  // Add hobbies and what you do outside work. The block stays hidden while empty.
  interests: [],

  location: 'Cosenza, Italy',
  careerStart: '2022-03',

  photo: {
    src: '/images/francesco.jpg',
    srcWebp: '/images/francesco.webp',
    alt: 'Francesco working on a laptop at an outdoor table',
  },

  spokenLanguages: [
    { name: 'Italian', level: 'Native' },
    { name: 'English', level: 'Professional (reading, writing and speaking: high)' },
  ],
}
