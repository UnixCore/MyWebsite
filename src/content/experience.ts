import type { Employer } from './types'

// ─────────────────────────────────────────────────────────────
// EXPERIENCE — taken from the CV.
// To add a role: copy one object inside `roles` and edit it.
// To add an employer: copy a whole object of the array.
// Employers and roles are sorted newest-first automatically.
// ─────────────────────────────────────────────────────────────

export const experience: Employer[] = [
  {
    company: 'NTT DATA Italia',
    location: 'Rende (CS), Italy',
    // Starts 17/12/2025, right after the previous job ended (matches the CV).
    start: '2025-12',
    end: 'present',
    roles: [
      {
        title: 'AI Engineer — AI Toolkit',
        start: '2026-01',
        end: 'present',
        sector: 'Artificial Intelligence (cross-sector)',
        summary:
          'Designing and building an AI Toolkit plugin for everyone: a skills marketplace for Claude Code and Codex, plus guided AI workflows that let people with no AI experience benefit from agents.',
        details: [
          'In parallel with my insurance project, I work on an AI Toolkit plugin. It includes a Skills Marketplace that collects agents, skills and plugins ready to install on the most widely used AI harnesses, such as Claude Code and Codex.',
          'Its most innovative part is a library of AI-based workflows built for different goals: they guide the user step by step, so even people with no prior AI experience can benefit from these tools.',
          'I work hands-on with the full agentic stack: custom agents and multi-agent workflows, skills and plugins, MCP (Model Context Protocol) servers, hooks to automate and control agent behaviour, and graph-based memory that gives agents persistent, structured context.',
        ],
        tech: [
          'Claude Code',
          'Codex',
          'AI Agents',
          'Multi-Agent Workflows',
          'Skills',
          'Plugins',
          'MCP',
          'Hooks',
          'Graph Memory',
          'Python',
        ],
      },
      {
        title: 'Senior Data Engineer',
        start: '2025-12',
        end: 'present',
        sector: 'Insurance',
        summary:
          'Designing, developing and maintaining high-performance ETL pipelines on Azure with PySpark, Polars and Delta Lake, and bringing an agentic development approach to the team.',
        details: [
          'Pipelines are built in PySpark and Python (Polars) or with native Azure Synapse services. The platform runs on Microsoft Azure: Azure Data Factory, SQL Server and Synapse Analytics, plus supporting services for orchestration, monitoring and data management.',
          'Data lives on ADLS Gen2 following a Delta Lake approach. I design and manage Delta tables with incremental loads through append and merge/upsert patterns (DeltaTable.merge) for deduplication, schema evolution with mergeSchema, and partition-aware writes to optimise performance and storage.',
          'I introduced an Agentic Development approach at enterprise level, with skills and custom agents built with Claude Code and Codex for technical design, assisted implementation and solution validation. I also built multi-agent workflows and MCP configurations that support colleagues in data engineering and cybersecurity.',
        ],
        tech: [
          'PySpark',
          'Python (Polars)',
          'SQL',
          'Delta Lake',
          'Azure Synapse Analytics',
          'Azure Data Factory',
          'ADLS Gen2',
          'SQL Server',
          'Claude Code',
          'Codex',
          'AI Agents',
          'MCP',
        ],
      },
    ],
  },
  {
    company: 'VT-Solutions and Consulting',
    location: 'Rende (CS), Italy',
    start: '2022-03',
    end: '2025-12',
    roles: [
      {
        title: 'Big Data Engineer — Oracle/DWH to GCP migration',
        start: '2025-01',
        end: '2025-06',
        sector: 'Telecommunications',
        summary:
          'Migrated the entire data infrastructure and ETL processes of a major telecom operator from an on-premise Oracle/DWH system to Google Cloud.',
        details: [
          'I worked in the solutioning area of the team, developing and migrating data flows and defining technical solutions for the constraints created by the infrastructure paradigm shift.',
          'I adapted complex PL/SQL logic to GCP-native services, rewrote ETL jobs in Python and SQL, developed Airflow DAGs to orchestrate all migrated jobs, and used Apache Spark for distributed processing.',
        ],
        tech: ['Python', 'SQL', 'PL/SQL', 'Apache Spark', 'BigQuery', 'Cloud Composer', 'Airflow'],
      },
      {
        title: 'Big Data Engineer — Team Leader',
        start: '2024-06',
        end: '2024-12',
        sector: 'Telecommunications',
        summary:
          'Led my team in designing and developing a GCP platform that replicates a series of ETL jobs originally built in SAS and Oracle.',
        tech: ['BigQuery', 'Cloud Composer', 'Airflow', 'Cloud Storage', 'Cloud Build', 'SQL', 'Python'],
      },
      {
        title: 'Big Data Engineer — Survey analytics on GCP',
        start: '2024-04',
        end: '2024-06',
        sector: 'Telecommunications',
        summary:
          'Designed and built a GCP infrastructure applying SQL logic to calculate surveys for the provider’s clients.',
        tech: ['BigQuery', 'Cloud Composer', 'Airflow', 'Cloud Storage', 'Cloud Build', 'SQL', 'Python'],
      },
      {
        title: 'Big Data Engineer — SAS to GCP pilot',
        start: '2024-02',
        end: '2024-04',
        sector: 'Entertainment',
        summary:
          'Built a pilot to migrate ETL processes from an on-premise SAS environment to Google Cloud, including a framework that creates or edits Airflow DAGs from a JSON file.',
        details: [
          'I used Cloud Composer and Airflow to orchestrate the processes that made up each SAS ETL job, and BigQuery to host the SQL scripts previously written for SAS.',
          'To migrate the jobs fully I developed custom Airflow operators (PythonOperator) with many tasks, plus a framework that creates or modifies DAGs simply by editing a JSON file.',
        ],
        tech: ['Cloud Composer', 'Airflow', 'BigQuery', 'Python', 'SQL'],
      },
      {
        title: 'Big Data Engineer — Multi-source KPI platform',
        start: '2023-09',
        end: '2024-02',
        sector: 'Multi-sector',
        summary:
          'Ingested data from APIs, on-premise databases, Firebase and Google Ads to build KPIs that trace a user’s activity across a client’s applications.',
        details: [
          'Composer and Airflow orchestrated Dataflow jobs (batch and streaming) and, through custom Python operators, launched parameterised SQL scripts on BigQuery, sent Pub/Sub messages to trigger other procedures and started Dataflow jobs.',
          'I wrote SQL on BigQuery, used Cloud Build and Cloud Run for Python functions that pull data from APIs or expose push APIs, and used Stackdriver logs to trigger further Cloud Run functions.',
        ],
        tech: [
          'Cloud Composer',
          'Airflow',
          'Dataflow',
          'BigQuery',
          'Pub/Sub',
          'Cloud Run',
          'Cloud Build',
          'Python',
          'SQL',
        ],
      },
      {
        title: 'Big Data Engineer — Processing team',
        start: '2022-07',
        end: '2023-09',
        sector: 'Entertainment',
        summary:
          'Structured data coming from the ingestion layer on Google Cloud and extracted KPIs through SQL and PL/SQL procedures used by Business Intelligence.',
        tech: [
          'SQL',
          'PL/SQL',
          'Python',
          'Java',
          'Cloud Composer',
          'Dataflow',
          'Cloud Logging',
          'Pub/Sub',
          'Grafana',
          'Collibra',
        ],
      },
      {
        // CV gives only the start date for this role — add `end` once confirmed.
        title: 'Big Data Engineer — Database connector',
        start: '2023-03',
        sector: 'IT',
        summary:
          'Developed a connector that migrates data from on-premise source databases to GCP, writing to Cloud Storage (CSV, Avro…) or directly to BigQuery, with resilience and data tracking.',
        tech: ['Java 8', 'Apache Beam', 'Python', 'SQL', 'Cloud Storage', 'BigQuery'],
      },
      {
        title: 'Big Data Engineer — Connector-based migration platform',
        start: '2022-03',
        end: '2022-07',
        sector: 'IT',
        summary:
          'Built with my team a three-level, connector-based platform in Java and Apache Beam that migrates company data from on-premise to Google Cloud.',
        details: [
          'Level 1 turned raw CSV files in a Cloud Storage bucket into semi-structured Avro files (csv-connector). Level 2 wrote them to staging tables in BigQuery (dvse-connector). Level 3 moved data to final tables and enriched it for KPI calculation.',
          'We used a tracking table, a dead-letter queue table for data quality, and a library we wrote on top of Google KMS and Secret Manager to mask sensitive data.',
          'Two run modes: Initial Load for bulk loads and On-Going for delta processing that also recovers failed runs from previous days. Cloud Composer orchestrated every job.',
        ],
        tech: [
          'Java 8',
          'Apache Beam',
          'Python',
          'SQL',
          'BigQuery',
          'Cloud Storage',
          'Cloud Composer',
          'KMS',
          'Secret Manager',
        ],
      },
    ],
  },
]
