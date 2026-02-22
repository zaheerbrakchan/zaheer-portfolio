// src/app/skills/page.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import {
  BrainCircuit,
  Server,
  Braces,
  TerminalSquare,
  BookOpen,
  Mic,
  Zap,
  Boxes,
} from "lucide-react";

const MAX_VISIBLE = 8;

// The categories and their skills
const skillCategories = [
  {
    title: "AI Systems & Architecture",
    icon: <Boxes className="w-6 h-6 text-ai-cyan" />,
    color: "ai-cyan",
    skills: [
      "Conversational AI Systems",
      "Intelligent Document Processing (IDP)",
      "Agentic Workflows",
      "Event-Driven Architecture",
      "Human-in-the-Loop AI",
      "Multi-Tenant SaaS Architecture",
      "Semantic Matching & Scoring Systems",
      "Structured Output Engineering",
      "AI Workflow Orchestration",
    ],
  },
  {
    title: "AI & Automation",
    icon: <BrainCircuit className="w-6 h-6 text-ai-cyan" />,
    color: "ai-cyan",
    skills: [
      "LangChain",
      "LangGraph",
      "LangChain4j",
      "LLM Orchestration",
      "Tool Calling / Function Calling",
      "Deterministic AI Workflows",
      "Prompt Engineering (Structured JSON)",
      "RAG Architecture",
      "Embeddings & Vector Search",
      "Hybrid AI + Rule Systems",
      "AI Pipeline Design",
      "Azure OpenAI",
      "Hugging Face",
      "Semantic Search",
      "Azure Cognitive Search",
      "Azure Document Intelligence",
      "OCR",
      "NLP",
      "n8n",
    ],
  },
  {
    title: "AI & Voice",
    icon: <Mic className="w-6 h-6 text-ai-violet" />,
    color: "ai-violet",
    skills: [
      "Voice Agent Architecture",
      "Telephony AI Integration",
      "Speech-to-Text (STT)",
      "Text-to-Speech (TTS)",
      "Real-Time API Interaction",
      "Webhook-Based Automation",
      "VAPI",
      "Twilio",
      "ElevenLabs",
      "Deepgram",
    ],
  },
  {
    title: "Backend & Systems",
    icon: <Server className="w-6 h-6 text-ai-violet" />,
    color: "ai-violet",
    skills: [
      "Python",
      "FastAPI",
      "Java",
      "Spring Boot",
      "Microservices Architecture",
      "REST APIs",
      "API Integration & Orchestration",
      "Event Scheduling Systems",
      "Distributed Systems Basics",
      "Data Normalization & Validation",
      "Semantic Matching Algorithms",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "SQL",
    ],
  },
  {
    title: "Frontend & Type Systems",
    icon: <Braces className="w-6 h-6 text-ai-blue" />,
    color: "ai-blue",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "jQuery",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <TerminalSquare className="w-6 h-6 text-gray-400" />,
    color: "gray",
    skills: [
      "Docker",
      "Git",
      "Linux",
      "CI/CD Basics",
      "Vercel Deployment",
      "Cloud Deployment (Azure)",
      "Linux Server Management",
    ],
  },
  {
    title: "AI-Augmented Engineering",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    color: "yellow",
    skills: [
      "AI-Assisted Development (Cursor, Antigravity)",
      "Prompt-Driven Code Generation",
      "Rapid Prototyping with LLMs",
      "AI Code Review & Refactoring",
      "Workflow Automation Design",
    ],
  },
  {
    title: "CS Core",
    icon: <BookOpen className="w-6 h-6 text-gray-400" />,
    color: "gray",
    skills: ["Data Structures & Algorithms"],
  },
];

function SkillCard({ category }: { category: typeof skillCategories[number] }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = category.skills.length > MAX_VISIBLE;
  const displayedSkills = expanded ? category.skills : category.skills.slice(0, MAX_VISIBLE);
  const remainingCount = category.skills.length - MAX_VISIBLE;

  return (
    <div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden shadow-lg flex flex-col h-full">
      {/* Top accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-ai-cyan via-ai-violet to-ai-blue opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Hover subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3.5 mb-5 relative z-10">
          <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 shadow-inner">
            {category.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wide leading-tight">
              {category.title}
            </h3>
            <span className="text-[11px] text-gray-500 font-medium">
              {category.skills.length} {category.skills.length === 1 ? "skill" : "skills"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 relative z-10 flex-1 content-start">
          {displayedSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-gray-300 text-[12px] font-medium hover:text-white hover:border-ai-cyan/50 hover:bg-ai-cyan/10 transition-all duration-300 cursor-default h-fit"
            >
              {skill}
            </span>
          ))}
          {hasMore && !expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="px-3 py-1.5 rounded-lg bg-ai-violet/10 border border-ai-violet/20 text-ai-violet text-[12px] font-semibold cursor-pointer h-fit hover:bg-ai-violet/20 hover:border-ai-violet/40 transition-all duration-300"
            >
              +{remainingCount} more
            </button>
          )}
          {hasMore && expanded && (
            <button
              onClick={() => setExpanded(false)}
              className="px-3 py-1.5 rounded-lg bg-ai-cyan/10 border border-ai-cyan/20 text-ai-cyan text-[12px] font-semibold cursor-pointer h-fit hover:bg-ai-cyan/20 hover:border-ai-cyan/40 transition-all duration-300"
            >
              Show less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 },
    },
  };

  return (
    <section className="max-w-6xl mx-auto pt-8 pb-20 relative px-4 sm:px-6">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-ai-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-ai-violet/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center md:text-left"
      >
        <SectionTitle title="Technical Expertise" />
        <p className="text-gray-400 text-lg mt-5 max-w-3xl leading-relaxed font-light">
          A blend of AI systems architecture, scalable backend engineering, voice AI, and intelligent automation — built for production environments.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="h-full"
          >
            <SkillCard category={category} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
