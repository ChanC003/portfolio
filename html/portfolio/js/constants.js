'use strict';

const COLORS = {
  orange:  { text: '#4ade80', bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.35)'  },
  blue:    { text: '#93c5fd', bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.3)'  },
  green:   { text: '#86efac', bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.4)'   },
  purple:  { text: '#c4b5fd', bg: 'rgba(168,85,247,0.1)',  border: 'rgba(168,85,247,0.3)'  },
  teal:    { text: '#5eead4', bg: 'rgba(20,184,166,0.1)',  border: 'rgba(20,184,166,0.3)'  },
  red:     { text: '#fca5a5', bg: 'rgba(239,68,68,0.15)',  border: 'rgba(239,68,68,0.3)'   },
  yellow:  { text: '#fcd34d', bg: 'rgba(251,191,36,0.1)',  border: 'rgba(251,191,36,0.3)'  },
  muted:   { text: '#94a3b8', bg: 'rgba(100,116,139,0.12)',border: 'rgba(100,116,139,0.25)'},
};

const CHIP_CLASS = {
  orange: 'chip-orange',
  blue:   'chip-blue',
  green:  'chip-green',
  purple: 'chip-purple',
  teal:   'chip-teal',
  muted:  'chip-muted',
};

const STACK_DATA = [
  {
    category: 'Ingestion & Streaming',
    color: 'orange',
    tools: ['Apache Kafka', 'Debezium CDC', 'Kafka Connect', 'Python', 'Spark Streaming'],
  },
  {
    category: 'Orchestration & Transform',
    color: 'blue',
    tools: ['Apache Airflow', 'dbt Core', 'dbt Cloud', 'SQL'],
  },
  {
    category: 'Storage & Warehouse',
    color: 'green',
    tools: ['Snowflake', 'PostgreSQL', 'ClickHouse', 'DuckDB', 'Iceberg'],
  },
  {
    category: 'Analytics & BI',
    color: 'purple',
    tools: ['Power BI', 'Grafana', 'Metabase'],
  },
  {
    category: 'AI & Developer Tools',
    color: 'teal',
    tools: ['OpenAI API', 'LangChain', 'Streamlit', 'Ollama', 'Docker', 'Git', 'CI/CD'],
  },
];

const PIPELINE_LAYERS = [
  { label: 'Source',      nodes: ['PostgreSQL', 'Event Stream', 'REST API'] },
  { label: 'Ingest',      nodes: ['Kafka', 'Debezium'] },
  { label: 'Transform',   nodes: ['dbt', 'Spark', 'Python'] },
  { label: 'Warehouse',   nodes: ['Snowflake', 'ClickHouse'] },
  { label: 'Serve',       nodes: ['Power BI', 'Grafana', 'Streamlit'] },
];

function makeChip(label, colorKey) {
  const cls = CHIP_CLASS[colorKey] || 'chip-muted';
  return `<span class="chip ${cls}">${label}</span>`;
}

function makeArchNode(label, colorKey) {
  const c = COLORS[colorKey] || COLORS.muted;
  return `<span class="arch-node" style="color:${c.text};background:${c.bg};border:1px solid ${c.border};">${label}</span>`;
}

function makeTechChip(label) {
  return `<span class="card-tech-chip">${label}</span>`;
}
