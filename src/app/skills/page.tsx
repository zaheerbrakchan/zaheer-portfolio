// src/app/skills/page.tsx
"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { BrainCircuit, Server, Braces, TerminalSquare, BookOpen } from "lucide-react";

// The categories and their skills
const skillCategories = [
  {
    title: "AI & Automation",
    icon: <BrainCircuit className="w-6 h-6 text-ai-cyan" />,
    skills: ["LangChain", "LangGraph", "LangChain4j", "RAG", "Azure OpenAI", "Hugging Face", "Prompt Engineering", "Semantic Search", "Azure Cognitive Search", "Azure Document Intelligence", "OCR", "NLP", "n8n", "VAPI", "Twilio", "ElevenLabs", "Webhooks"],
  },
  {
    title: "Backend & Systems",
    icon: <Server className="w-6 h-6 text-ai-violet" />,
    skills: ["Python", "FastAPI", "Java", "Spring Boot", "REST APIs", "Kafka", "Postgres", "Redis", "Elasticsearch", "SQL"],
  },
  {
    title: "Frontend & Type Systems",
    icon: <Braces className="w-6 h-6 text-ai-blue" />,
    skills: ["TypeScript", "React", "Next.js", "Vue.js", "jQuery", "JavaScript", "HTML/CSS"],
  },
  {
    title: "DevOps & Tools",
    icon: <TerminalSquare className="w-6 h-6 text-gray-400" />,
    skills: ["Docker", "Git", "Linux"],
  },
  {
    title: "CS Core",
    icon: <BookOpen className="w-6 h-6 text-gray-400" />,
    skills: ["Data Structures & Algorithms"],
  }
];

export default function SkillsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section className="max-w-5xl mx-auto pt-8 pb-20 relative">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-ai-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:text-left"
      >
        <SectionTitle title="Technical Expertise" />
        <p className="text-gray-400 text-lg mt-4 max-w-3xl leading-relaxed font-light">
          A blend of AI engineering, scalable backend systems, and intelligent automation built for production environments.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300 overflow-hidden shadow-lg"
          >
            {/* Hover subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 shadow-inner">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white tracking-wide">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5 relative z-10">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-lg bg-black/40 border border-white/10 text-gray-300 text-sm font-medium hover:text-white hover:border-ai-cyan/50 hover:bg-ai-cyan/10 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
