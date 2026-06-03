"use client";

import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import { ABOUT_PARAGRAPHS } from "@/data/about";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Narayana Health",
    role: "AI Engineer",
    period: "Jan 2024 to Present",
    highlight: true,
    bullets: [
      "Built production voice agent automating 500+ daily interactions with near-zero latency and live backend integration",
      "Designed multi-tenant outbound AI platform with full scheduling, state management, and human review workflows",
      "Built intelligent document pipeline achieving 10x throughput improvement and 95%+ extraction accuracy",
      "Architected RAG pipeline for real-time context summarisation from unstructured records",
      "Built natural language query interface enabling plain English queries on structured databases",
      "Automated speech-to-record pipeline reducing manual documentation time from 10 min to a quick review",
    ],
    skills: [
      "VAPI",
      "Twilio",
      "LangChain",
      "FastAPI",
      "Azure OpenAI",
      "PostgreSQL",
      "n8n",
      "RAG",
      "OCR",
      "ElevenLabs",
      "Deepgram",
      "Node.js",
      "Express.js",
      "Whisper",
      "Azure Document Intelligence",
      "Azure Cognitive Search",
      "Prisma",
      "Redis",
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "Python",
    ],
  },
  {
    company: "LTIMindTree",
    role: "Software Engineer",
    period: "Jul 2020 to Dec 2023",
    highlight: false,
    bullets: [
      "Led backend for enterprise IT operations platform across 3 major product modules",
      "Built shared Spring Boot framework that cut new service setup time significantly across the team",
      "Developed Object Management module from scratch with search, filtering, and permission management",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "ArangoDB",
      "Vue.js",
      "REST APIs",
      "Microservices",
      "MySQL",
      "Keycloak",
      "Elasticsearch",
    ],
  },
];

export default function About() {
  return (
    <section className="page-section w-full pt-8 pb-20 relative px-0">
      <div className="absolute top-0 left-0 w-full h-64 bg-accent-to/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <ScrollReveal className="w-full">
        <SectionTitle title="About Me" />
        <div className="glass-card rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-14 mt-4 w-full">
          <div className="space-y-6">
            {ABOUT_PARAGRAPHS.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg md:text-xl leading-relaxed text-gray-300 font-light text-left"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-16 md:mt-20 w-full" delay={0.1}>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-accent-from" />
          <span className="text-accent-gradient">Experience</span>
        </h3>

        <div className="relative pl-8 md:pl-10 space-y-12 before:absolute before:left-[11px] md:before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-accent-from before:via-accent-to/50 before:to-transparent w-full">
          {experiences.map((exp, index) => (
            <div key={index} className="relative w-full">
              <div
                className={`absolute -left-8 md:-left-10 top-1 w-[22px] h-[22px] rounded-full border-4 border-background z-10 ${
                  exp.highlight
                    ? "bg-gradient-to-br from-accent-from to-accent-to ring-2 ring-accent-from/30"
                    : "bg-white/10 border-white/20"
                }`}
              />

              <div className="glass-card rounded-2xl p-6 md:p-8 lg:p-10 hover:border-accent-from/25 transition-all duration-300 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h4>
                    <p className="text-accent-from font-medium mt-0.5 text-lg">{exp.role}</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-accent-to bg-accent-to/10 border border-accent-to/25 px-3 py-1.5 rounded-full w-fit shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed flex gap-2.5">
                      <span className="text-accent-from mt-1.5 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 bg-black/30 text-gray-300 hover:border-accent-from/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
