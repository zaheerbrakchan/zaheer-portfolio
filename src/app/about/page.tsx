// src/app/about/page.tsx
"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Briefcase, Calendar, Terminal } from "lucide-react";

export default function About() {
  const experiences = [
    {
      role: "AI Systems Engineer",
      period: "2023 — Present",
      description: "Architecting production-grade distributed AI systems powered by LLMs and advanced conversational AI agents. Designing scalable RAG pipelines, intelligent document processing, and semantic search infrastructures, seamlessly integrating AI into enterprise-scale architectures",
      skills: [
        "LLM Applications",
        "Conversational AI & Voice Agents",
        "Prompt Engineering",
        "RAG & Semantic Search",
        "Intelligent Document Processing (OCR)",
        "AI Orchestration & Webhooks",
        "Distributed Systems",
        "Microservices Architecture",
        "Event-Driven Systems (Kafka)",
        "Vector Databases",
        "Enterprise Backend Systems",
        "Model Fine-Tuning (LoRA / QLoRA)",
        "Cloud & Storage Services"
      ],
      icon: <Terminal className="w-5 h-5 text-ai-cyan" />,
      highlight: true
    },
    {
      role: "Full-Stack Software Engineer",
      period: "2020 — 2023",
      description: "Developed and maintained highly scalable microservices and RESTful APIs. Focused on system reliability, database optimization, and responsive frontend interfaces for enterprise platforms.",
      skills: ["Java", "Spring Boot", "python", "Rest APIs", "Microservices", "System Design", "PostgreSQL", "ArangoDB", "Vue.js", "Html", "CSS", "JQuery",],
      icon: <Briefcase className="w-5 h-5 text-gray-400" />,
      highlight: false
    }
  ];

  return (
    <section className="max-w-4xl mx-auto pt-8 pb-20 relative">
      <div className="absolute top-0 left-[-10%] w-96 h-96 bg-ai-violet/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <SectionTitle title="About & Experience" />
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 mt-8 shadow-xl backdrop-blur-sm relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-ai-cyan/10 rounded-full blur-[80px] group-hover:bg-ai-cyan/20 transition-colors duration-700"></div>

          <p className="text-lg leading-relaxed text-gray-300 font-light relative z-10">
            I’m an engineer focused on building <span className="font-semibold text-white">scalable backend systems</span> and <span className="font-semibold text-ai-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">AI-driven workflows</span>.
            My work spans across conversational AI, RAG pipelines, hybrid search, and document understanding—combining intelligence with reliable system design.
            <br /><br />
            I formulate <span className="font-semibold text-white">production-ready architectures</span> that connect data, automation, and language models through clean, maintainable APIs.
            Whether optimizing system scale, automating operations, or integrating robust conversational logic, my primary goal is delivering practical and resilient solutions.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-ai-violet drop-shadow-[0_0_10px_rgba(138,43,226,0.6)]" />
          Career Journey
        </h3>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-ai-violet before:via-ai-cyan/30 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              {/* Timeline dot */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0a0a] bg-black shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-transform duration-300 group-hover:scale-110 ${exp.highlight ? 'ring-2 ring-ai-cyan ring-offset-2 ring-offset-[#0a0a0a] bg-white/5' : ''}`}>
                {exp.icon}
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 shadow-lg group-hover:-translate-y-1">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-3 gap-2">
                  <h4 className={`text-xl font-bold ${exp.highlight ? 'text-white' : 'text-gray-200'}`}>{exp.role}</h4>
                  <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-ai-violet bg-ai-violet/10 border border-ai-violet/20 px-3 py-1.5 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 text-justify">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className={`flex-grow flex items-center justify-center text-center text-[11px] sm:text-xs font-medium tracking-wide px-3 py-1.5 rounded-lg border transition-all duration-300 ${exp.highlight ? 'border-ai-cyan/20 bg-ai-cyan/[0.03] hover:bg-ai-cyan/[0.08] text-ai-cyan/90 hover:text-ai-cyan shadow-sm hover:shadow-[0_0_12px_rgba(0,240,255,0.15)]' : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.06] text-gray-400 hover:text-gray-300'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
