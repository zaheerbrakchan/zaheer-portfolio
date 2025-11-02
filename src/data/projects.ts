// src/data/projects.ts
const projects = [
  {
    id: 'invoice-ocr',
    title: 'AI Invoice Processor',
    description: 'Invoice PDF -> Azure Document Intelligence -> GPT-cleaner pipeline. Handles batch matching, item normalization, and duplicate merging.',
    stack: ['FastAPI','Azure Document Intelligence','Azure OpenAI','TypeScript'],
    github: 'https://github.com/<your-username>/invoice-ocr',
  },
  {
    id: 'langchain-sql-agent',
    title: 'LangChain SQL Agent',
    description: 'Natural language to SQL queries with schema detection and safe execution guardrails.',
    stack: ['LangChain','Postgres','Python'],
    github: 'https://github.com/<your-username>/langchain-sql-agent',
  },
  {
    id: 'clinical-bert-qa',
    title: 'ClinicalBERT QA',
    description: 'Fine-tuned ClinicalBERT for question-answering on discharge summaries (SQuAD-style training).',
    stack: ['PyTorch','HuggingFace'],
    github: 'https://github.com/<your-username>/clinicalbert-qa',
  },
];

export default projects;
