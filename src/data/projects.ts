const projects = [
  {
    id: 1,
    title: "AI-Powered Conversational Appointment Assistant",
    description:
      "Developed a telephonic AI agent using Spring Boot, Twilio, and n8n to schedule patient appointments via natural conversation, integrating live slot management, confirmations, and reminders.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Twilio", "n8n"],
    github: 'https://github.com/<your-username>/clinicalbert-qa',
     isPrivate: true,
  },
    {
  id: 2,
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
    id: 3,
    title: "Automated GRN Processing System",
    description:
      "Built an AI-OCR backend to extract invoice data from 500+ vendor formats with 95% accuracy, automating warehouse GRN entries using Java, Kafka, and Azure Document Intelligence.",
    stack: ["Java", "Spring Boot", "Kafka", "Azure OCR", "PostgreSQL"],
     github: 'https://github.com/<your-username>/clinicalbert-qa',
      isPrivate: true,
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
