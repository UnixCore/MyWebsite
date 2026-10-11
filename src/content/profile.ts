import type { Profile } from './types'

// ─────────────────────────────────────────────────────────────
// ABOUT ME — edit freely. Sources: the CV and Francesco's own words.
// ─────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: 'Francesco Altomare',
  role: 'Big Data Engineer · AI Engineer',
  intro:
    'I design and build data pipelines on Azure and Google Cloud — PySpark, Delta Lake, BigQuery, Airflow — and I build agentic AI tooling: custom agents, skills, MCP servers and multi-agent workflows.',

  story: [
    'I have always been passionate about electronics and computers. I got my first PC when I was seven and started experimenting with it in every creative way I could find. As the son of an electrician, I also grew up around electrical systems, which gives me an edge on the infrastructure side: electrical installations and the design of data networks.',
    'Choosing Computer Engineering at the University of Calabria (2017–2022) was the best decision I could have made. It gave me a way of looking at things and an approach to problems that let me go deep into programming and electronics in a structured way.',
    'In 2022 I joined VT-Solutions and Consulting as a Big Data Engineer. My first project was a connector-based platform in Java and Apache Beam that moved on-premise data to Google Cloud, with tracking tables, dead-letter queues and masking of sensitive data. Over the next years I worked on processing, KPI extraction and migrations from Oracle, SAS and on-premise DWH systems to GCP, and in 2024 I led a team building a GCP platform to replace SAS and Oracle ETL jobs.',
    'Since December 2025 I have been at NTT DATA, building ETL pipelines in PySpark, Polars and Delta Lake on Azure for the insurance sector. I introduced an agentic development approach to the team, and since January 2026 I have also been building an AI Toolkit that lets people with no AI background use agents, skills and guided workflows.',
  ],

  // What you do outside work. The block is hidden when the list is empty.
  interests: [
    'Electronics',
    'Electrical systems and data network infrastructure',
    'Website development',
    'Data connectors that export product data from suppliers to retailers',
    'Personal and enterprise server setups',
  ],

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
