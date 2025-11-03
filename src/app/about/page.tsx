"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto text-slate-800">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle title="About Me" />
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          I’m an engineer focused on building <span className="font-semibold text-slate-900">scalable backend systems </span> 
           and <span className="font-semibold text-indigo-600">AI-driven workflows</span>. 
          My work spans across areas like conversational AI , RAG pipelines, hybrid search, and document understanding
           combining intelligence with reliable system design.
          <br />
          <br />
          I enjoy designing <span className="font-semibold text-slate-900"> production-ready architectures </span> 
          that connect data, automation, and language models through clean, maintainable APIs. 
          Whether it's improving system scalability, automating operations, or integrating conversational logic, 
          I focus on delivering practical and efficient solutions.
          <br />
          <br />
          I’m passionate about creating <span className="font-semibold text-slate-900">AI systems that work in the real world </span>
          systems that understand, respond, and evolve to make everyday workflows smarter and faster.
        </p>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <SectionTitle title="Experience Snapshot" />
        <ul className="list-disc ml-6 space-y-3 text-slate-700 text-lg">
          <li>
            <span className="font-semibold text-slate-900">AI Engineer</span> — 
            Building intelligent backend and automation systems powered by LLMs, RAG, and conversational AI (2023–Present)
          </li>
          <li>
            <span className="font-semibold text-slate-900">Full-stack Developer</span> — 
            Developed scalable microservices and REST APIs using Java Spring Boot, PostgreSQL, and Vue.js (2020–2023)
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
