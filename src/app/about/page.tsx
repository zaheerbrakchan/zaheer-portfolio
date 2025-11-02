// src/app/about/page.tsx
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
          I specialize in building <span className="font-semibold text-slate-900">robust backend systems</span> and
          integrating them with modern <span className="font-semibold text-indigo-600">AI-driven workflows</span> — including
          RAG pipelines, document understanding, and production-grade APIs.
          <br />
          <br />
          I’m passionate about solving real-world problems like invoice OCR, clinical QA, and hybrid search systems — 
          and turning them into <span className="text-slate-900 font-semibold">scalable, reliable AI products</span>.
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
            <span className="font-semibold text-slate-900">AI Engineer</span> — Building
            LLM-based automation and RAG systems (2023–Present)
          </li>
          <li>
            <span className="font-semibold text-slate-900">Full-stack Developer</span> — Java Spring Boot, Vue.js,
            Microservices (2020–2023)
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
