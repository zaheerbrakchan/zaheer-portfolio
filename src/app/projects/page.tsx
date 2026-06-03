// src/app/projects/page.tsx
"use client";

import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProjectsPage() {
  return (
    <section className="page-section w-full pt-8 pb-20 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-from/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <ScrollReveal className="mb-16 text-center md:text-left">
        <SectionTitle title="Featured Infrastructure & AI" />
        <p className="text-gray-400 text-lg mt-5 max-w-3xl leading-relaxed font-light">
          A curated collection of my recent architectures in AI engineering, robust backend systems, and pipeline automation.
          Each project demonstrates a commitment to intelligent design, massive scalability, and clean component architecture.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.06} className="h-full">
            <ProjectCard project={project} index={index} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-20">
        <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
          <p className="text-gray-500 text-sm italic font-medium leading-relaxed">
            Production deployments are summarized here under confidentiality. Architecture walkthroughs available on request.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
