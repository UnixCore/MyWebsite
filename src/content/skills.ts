import type { SkillGroup, SoftSkill } from './types'

// ─────────────────────────────────────────────────────────────
// HARD SKILLS — groups appear in this order; items too.
// ─────────────────────────────────────────────────────────────

export const hardSkills: SkillGroup[] = [
  {
    name: 'Data engineering',
    items: [
      'PySpark / Apache Spark',
      'Delta Lake',
      'Databricks',
      'Apache Beam',
      'Apache Airflow',
      'Polars',
      'ETL / ELT design',
      'Batch & streaming',
    ],
  },
  {
    name: 'Google Cloud',
    items: [
      'BigQuery',
      'Cloud Composer',
      'Dataflow',
      'Pub/Sub',
      'Cloud Storage',
      'Cloud Run',
      'Cloud Functions',
      'Cloud Build',
      'Bigtable',
      'IAM',
      'Cloud Logging',
      'Secret Manager / KMS',
      'Artifact Registry',
    ],
  },
  {
    name: 'Microsoft Azure',
    items: ['Synapse Analytics', 'Data Factory', 'ADLS Gen2', 'SQL Server on Azure'],
  },
  {
    name: 'Agentic AI',
    items: [
      'Claude Code',
      'Codex',
      'AI agents',
      'Multi-agent workflows',
      'Skills & plugins',
      'MCP (Model Context Protocol)',
      'Hooks',
      'Graph memory',
    ],
  },
  {
    name: 'Languages',
    items: ['Python', 'SQL', 'PL/SQL', 'Java', 'Scala', 'TypeScript', 'JavaScript', 'Bash'],
  },
  {
    name: 'Databases',
    items: ['BigQuery', 'SQL Server', 'Oracle', 'PostgreSQL', 'MySQL'],
  },
  {
    name: 'Web & backend',
    items: ['Angular', 'Spring Boot', 'CSS'],
  },
  {
    name: 'Tools & practices',
    items: ['Git', 'GitHub', 'GitLab', 'Maven', 'Grafana', 'Collibra', 'Linux', 'Agile (Scrum / Kanban)'],
  },
]

// ─────────────────────────────────────────────────────────────
// SOFT SKILLS — each one backed by evidence from real work.
// ─────────────────────────────────────────────────────────────

export const softSkills: SoftSkill[] = [
  {
    name: 'Leadership based on listening',
    evidence:
      'I lead by listening and by making every person on the team count. In 2024 I led the team that built a GCP platform replacing SAS and Oracle ETL jobs for a telecommunications client.',
  },
  {
    name: 'Teamwork',
    evidence:
      'I work at my best in a group, from university projects to multi-team cloud migrations, and I care about getting the most out of every contribution.',
  },
  {
    name: 'Calm under pressure',
    evidence: 'I handle high-pressure situations well and keep the work moving when the stakes are high.',
  },
  {
    name: 'Handling disagreement',
    evidence:
      'When positions clash, I look for the approach that works best for the team and the goal, not for one side.',
  },
  {
    name: 'Assertive and goal-oriented',
    evidence: 'I say clearly what I think and I aim for the objective, reaching it in the best way possible.',
  },
  {
    name: 'Problem solving',
    evidence:
      'Found technical solutions to the constraints of moving PL/SQL logic and on-premise jobs to cloud-native services.',
  },
  {
    name: 'Enabling others',
    evidence:
      'Built multi-agent workflows and MCP setups that support colleagues in data engineering and cybersecurity, and an AI Toolkit made for people with no AI experience.',
  },
  {
    name: 'Discipline & organisation',
    evidence:
      'I plan my work with to-do lists and move through it step by step, which keeps long migrations predictable.',
  },
  {
    name: 'Curiosity',
    evidence:
      'Moved from Java and Beam to Spark, Delta Lake and agentic AI, and keep certifying new skills (GCP, Azure, Databricks).',
  },
]
