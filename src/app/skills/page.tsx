// src/app/skills/page.tsx
"use client";
import { motion } from "framer-motion";
import skills from "@/data/skills";
import SectionTitle from "@/components/SectionTitle";

export default function SkillsPage() {
  return (
    <section className="max-w-3xl mx-auto text-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle title="Skills" />

        <p className="text-slate-700 mb-6 text-lg">
          A mix of backend engineering, AI integration, and modern development tools I use daily to build scalable, intelligent systems.
        </p>

        <div className="flex flex-wrap gap-3 mt-4">
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
      </motion.div>
    </section>
  );
}
