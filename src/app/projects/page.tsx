// src/app/projects/page.tsx
"use client";

import { motion } from "framer-motion";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto pt-8 pb-20 relative px-4 sm:px-6">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ai-blue/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center md:text-left"
      >
        <SectionTitle title="Featured Infrastructure & AI" />
        <p className="text-gray-400 text-lg mt-5 max-w-3xl leading-relaxed font-light">
          A curated collection of my recent architectures in AI engineering, robust backend systems, and pipeline automation.
          Each project demonstrates a commitment to intelligent design, massive scalability, and clean component architecture.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="h-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-20 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center shadow-inner"
      >
        <p className="text-gray-500 text-sm italic font-medium">
          *Some architectures are private due to strict enterprise confidentiality regulations, but their high-level technical summaries are detailed here.
        </p>
      </motion.div>
    </section>
  );
}
