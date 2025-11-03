"use client";

import { motion } from "framer-motion";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 text-center">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle title="Featured Projects" />
        <p className="text-slate-600 text-lg mt-3 mb-12 max-w-2xl mx-auto leading-relaxed">
          A curated collection of my recent projects in AI engineering, backend systems, and automation.
          Each project blends intelligent design, scalability, and clean architecture to solve real-world challenges.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-slate-500 text-sm mt-16"
      >
        *Some projects are private due to enterprise confidentiality, but their technical summaries are included here.
      </motion.p>
    </section>
  );
}
