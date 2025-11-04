"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const groupedSkills = {
  "AI & Automation": [
    "LangChain", "LangGraph", "LangChain4j", "RAG", "Azure OpenAI", "Hugging Face",
    "Prompt Engineering", "Semantic Search", "Azure Cognitive Search",
    "Azure Document Intelligence", "OCR", "NLP", "n8n", "VAPI", "Twilio", "Webhook",
  ],

  "Backend & Systems": [
    "Python", "FastAPI", "Java", "Spring Boot", "REST APIs",
    "Kafka", "Postgres", "Redis", "Elasticsearch", "SQL",
  ],

    "Frontend & Type Systems": [
    "TypeScript", "React", "Next.js", "Vue.js", "jQuery", "JavaScript", "HTML/CSS",
  ],

    "DevOps & Tools": [
    "Docker", "Git", "Linux",
  ],

  "CS Core": [
    "Data Structures & Algorithms",
  ],




};

export default function SkillsPage() {
  return (
    <section className="max-w-3xl mx-auto text-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle title="Tech Stack & Skills" />

        <p className="text-slate-700 mb-6 text-lg">
          A blend of AI engineering, backend systems, and automation tools I use to design scalable, intelligent, and production-ready solutions.
        </p>

        <div className="space-y-8 mt-6">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-indigo-600 font-semibold text-lg mb-3">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.08 }}
                    className="px-4 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 text-slate-800 border border-slate-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
