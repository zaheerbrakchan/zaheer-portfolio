const projects = [
  {
    id: 8,
    title: "Enterprise Conversational AI Platform for Automated Hospital Event & Post-Surgery Follow-up",
    description: `
Architected and deployed a production-grade, multi-tenant AI-powered voice automation platform that enables hospitals to automatically schedule and conduct post-surgery and clinical event follow-up calls using intelligent conversational agents.

The system integrates event-driven backend microservices with conversational AI voice agents to autonomously collect structured recovery data (e.g., wound healing status, symptom progression, patient feedback) without manual intervention.

Built a scalable scheduling engine that triggers AI calls automatically based on hospital events (e.g., surgery completion) or allows administrators to schedule immediate or future calls via a secure dashboard. Implemented patient identity verification flows, dynamic variable injection, contextual conversation control, fallback handling, and structured JSON output extraction.

Designed a robust backend architecture with normalized database schemas (patients, call_jobs, call_sessions, call_transcripts, call_reviews, tenants) ensuring scalability, auditability, and multi-tenant isolation.

Integrated Twilio telephony with region-specific voice synthesis (UK/India accents via ElevenLabs), conversational orchestration via VAPI, webhook-based automation via n8n, and real-time data persistence through event-driven APIs.

Enabled call transcript storage, structured AI-generated clinical summaries, call recordings, and review workflows through a full-stack dashboard with human-in-the-loop validation.
`, stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Microservices Architecture",
      "Event-Driven Scheduling",
      "VAPI (Conversational AI)",
      "Twilio (Telephony)",
      "ElevenLabs (Voice Synthesis)",
      "Deepgram (Speech Processing)",
      "n8n (Workflow Automation)",
      "Webhooks",
      "Multi-Tenant Architecture"
    ],
    github: "https://github.com/zaheerbrakchan/internal-project",
    isPrivate: true,
  },
  {
    id: 1,
    title: "Enterprise AI Voice Assistant for Real-Time Hospital Appointment Booking & Management",
    description: `
Designed and deployed a production-grade conversational AI voice assistant that automates hospital appointment booking, rescheduling, cancellation, and doctor availability inquiries in real time — replacing traditional call-center workflows.

Integrated Twilio telephony with VAPI-based conversational orchestration, ElevenLabs multi-region voice synthesis (UK/India accents), and Deepgram speech processing to deliver natural, human-like voice interactions at scale.

Engineered deterministic conversational flows with tool-based execution logic, enabling the AI agent to securely communicate with existing hospital SaaS backend microservices via webhooks. Implemented real-time API integrations for patient lookup, doctor discovery, department navigation, slot availability checks, and instant booking confirmations — all without frontend dependency.

Built secure patient identity verification using phone-number-based lookup and DOB validation. Designed intelligent fallback handling, slot unavailability negotiation, contextual query routing, and structured confirmation workflows.

Architected the backend with scalable microservices (Spring Boot), PostgreSQL persistence, Redis caching, and workflow automation (n8n) to ensure low-latency responses and high concurrency. The system supports parallel call handling, eliminating wait times and significantly reducing operational load on human call centers.

This platform transformed appointment management into a scalable, AI-driven, real-time conversational experience fully integrated with enterprise healthcare systems.
`,
    stack: [
      "Java",
      "Spring Boot",
      "Microservices Architecture",
      "PostgreSQL",
      "Redis",
      "Twilio (Telephony)",
      "VAPI (Conversational AI)",
      "ElevenLabs (Voice Synthesis)",
      "Deepgram (Speech Processing)",
      "Webhooks",
      "n8n (Workflow Automation)"
    ],
    github: "https://github.com/<your-username>/clinicalbert-qa",
    isPrivate: true,
  },
  {
    id: 2,
    title: "Intelligent Document Processing (IDP) Pipeline for Automated GRN & Invoice Reconciliation",
    description: `
Designed and implemented a production-grade Intelligent Document Processing (IDP) workflow that automates end-to-end Goods Receipt Note (GRN) creation from vendor invoices, eliminating manual data entry for warehouse operations.

Built a fully automated pipeline that reads vendor invoices directly from Outlook via scheduled jobs, extracts Purchase Order references, downloads attachments, and processes them through Azure Document Intelligence (OCR). Implemented custom pre-processing logic to normalize unstructured invoice layouts before OCR to improve header detection and extraction accuracy.

Due to inconsistencies in vendor formats, engineered a hybrid extraction system combining:
• Azure OCR table extraction  
• Pattern-based backend cleaning & normalization  
• LLM-powered structured data correction using Azure OpenAI (LangChain pipeline)  

Developed dynamic GST-based invoice pattern detection to apply vendor-specific cleaning rules and prompt tuning. Implemented data standardization logic for HSN codes, expiry formats, tax fields, quantity normalization, and intelligent splitting of free-of-cost (FOC) line items with cost adjustments.

Architected a deterministic reconciliation engine in Spring Boot microservices to match extracted invoice items with master PO data using multi-stage filtering (cost price, HSN code) followed by semantic scoring for item-name resolution. Designed a confidence-based scoring system to identify the most accurate PO match.

Integrated the pipeline with existing backend GRN services, enabling:
• Automated GRN creation  
• Partial extraction state handling  
• Error recovery workflows  
• Human-in-the-loop validation dashboard  

Improved warehouse processing capacity from ~50 GRNs/day to 500+ GRNs/day with ~97% structured extraction accuracy, significantly reducing manual effort and increasing data reliability.

This system transformed a manual, time-intensive warehouse operation into a scalable AI-driven document automation workflow.
`,
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "Azure OpenAI",
      "Azure Document Intelligence (OCR)",
      "Spring Boot",
      "Microservices Architecture",
      "PostgreSQL",
      "Semantic Matching & Scoring Engine",
      "Outlook Mail Automation",
      "Event-Driven Scheduling"
    ],
    github: "https://github.com/<your-username>/clinicalbert-qa",
    isPrivate: true,
  },
  {
    id: 3,
    title: "Healthcare Agent System – Large Context Handling in Agentic Systems",
    description:
      "Designed a multi-agent healthcare system that enables seamless context sharing between appointment and pre-assessment agents. Implemented dynamic token-aware context management, chunked tool output handling, and adaptive memory persistence to overcome LLM context limits.",
    stack: [
      "FastAPI",
      "OpenAI API",
      "LangChain",
      "PostgreSQL (Supabase)",
      "Python",
      "Railway"
    ],
    github: "https://github.com/zaheerbrakchan/healthcare-agent-context",
    live: "https://healthcare-agent-context-production.up.railway.app/",
    youtube: "https://www.youtube.com/watch?v=uP_ahcpJuKM",
  },

  {
    id: 4,
    title: "QuickPoll – Real-Time Opinion Polling Platform",
    description:
      "Built a real-time polling app where users can create polls, vote, and like with live updates using Next.js, FastAPI, WebSockets, PostgreSQL, and Redis. Includes JWT authentication and live broadcast updates.",
    stack: ["Next.js", "TypeScript", "FastAPI", "WebSockets", "PostgreSQL", "Redis"],
    github: "https://github.com/zaheerbrakchan/quickpoll-frontend",
    live: "https://quickpoll-frontend-sable.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=8ikMVdqtdB4&t=51s",
  },
  {
    id: 5,
    title: "EMR Natural Language Query Interface",
    description:
      "Designed a secure NLQ engine for EMR databases using LangChain, Azure OpenAI, and FastAPI — enabling doctors to query structured data in plain English.",
    stack: ["Python", "LangChain", "Azure OpenAI", "FastAPI", "PostgreSQL"],
    github: 'https://github.com/zaheerbrakchan/LinguaQuery',
    youtube: 'https://www.youtube.com/watch?v=qB3gShilhFI',
  },
  {
    id: 6,
    title: "AI Charting & Discharge Automation",
    description:
      "Developed AI pipelines using Whisper and RAG to transcribe consultations and generate structured EHR entries and discharge summaries, deployed through Spring Boot REST APIs.",
    stack: ["Python", "Whisper", "RAG", "Spring Boot", "FastAPI"],
    github: 'https://github.com/<your-username>/clinicalbert-qa',
    isPrivate: true,
  },
  {
    id: 7,
    title: "AI-Powered Patient Summaries",
    description:
      "Implemented real-time RAG pipelines that deliver top-5 patient insights before appointments, improving decision-making and clinician efficiency.",
    stack: ["FastAPI", "PostgreSQL", "Kafka", "LangChain", "RAG"],
    github: 'https://github.com/<your-username>/clinicalbert-qa',
    isPrivate: true,
  }

];

export default projects;
