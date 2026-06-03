"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBackground from "@/components/HeroBackground";
import { HeroSideColumn } from "@/components/HeroSideDecor";
import HeroTechStrip from "@/components/HeroTechStrip";
import { ABOUT_PARAGRAPHS } from "@/data/about";
import Link from "next/link";
import { Mic, Brain, Server } from "lucide-react";

const METRICS = [
  { value: "500+", label: "Calls Automated Daily" },
  { value: "10x", label: "Document Processing Throughput" },
  { value: "30min → 0", label: "Wait Time Eliminated" },
  { value: "95%+", label: "Extraction Accuracy" },
];

const WHAT_I_BUILD = [
  {
    icon: Mic,
    title: "Voice & Conversational AI",
    description:
      "Intelligent voice agents with full telephony integration, speech recognition, natural TTS, dialogue logic, and real-time backend data connections.",
  },
  {
    icon: Brain,
    title: "RAG & Document Intelligence",
    description:
      "Pipelines that extract, retrieve, and reason over unstructured data (documents, records, forms) with LLM-powered understanding and structured output.",
  },
  {
    icon: Server,
    title: "Backend & AI Infrastructure",
    description:
      "Scalable multi-tenant systems, event-driven architecture, queue-based orchestration, and APIs that keep AI reliable and fast at production scale.",
  },
];

export default function Home() {
  return (
    <div className="page-section w-full pb-20">
      <section className="relative pt-0 pb-14 md:pb-20 px-2 sm:px-4 overflow-hidden rounded-3xl w-full">
        <HeroBackground />

        {/* Soft corner glows (fills upper dead space on wide screens) */}
        <div
          className="hidden xl:block absolute top-4 left-4 w-32 h-32 rounded-full bg-accent-from/15 blur-[60px] pointer-events-none"
          aria-hidden
        />
        <div
          className="hidden xl:block absolute top-4 right-4 w-32 h-32 rounded-full bg-accent-to/15 blur-[60px] pointer-events-none"
          aria-hidden
        />

        <div className="relative z-10 w-full xl:grid xl:grid-cols-[minmax(200px,240px)_minmax(0,1fr)_minmax(200px,240px)] xl:gap-6 2xl:gap-10 xl:items-start">
          <HeroSideColumn side="left" />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-5 md:gap-6 w-full min-w-0 text-center col-span-1"
          >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-from to-accent-to blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <img
              src="/profile.png"
              alt="Zaheer Abass"
              className="relative w-36 h-36 md:w-40 md:h-40 rounded-full shadow-2xl border-2 border-white/20 object-cover object-[20%_10%] z-10"
            />
          </div>

          <div className="space-y-5 w-full max-w-3xl mx-auto px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight tracking-tight">
              I build AI systems that{" "}
              <span className="text-accent-gradient">work in the real world.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mx-auto">
              From voice agents to RAG pipelines to intelligent document processing. I design and ship
              production-grade AI across backend systems, conversational interfaces, and automation.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="btn-accent px-8 py-3.5 rounded-full font-semibold transition-all active:scale-95"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full glass text-white font-medium hover:border-accent-from/40 transition-all active:scale-95"
              >
                Let&apos;s Connect
              </Link>
            </div>

            <HeroTechStrip />
          </div>

          <div className="pt-10 w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="glass-card rounded-2xl px-4 py-5 text-center hover:border-accent-from/30 transition-colors w-full"
                >
                  <p className="text-2xl md:text-3xl font-bold text-accent-gradient">{m.value}</p>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 font-medium">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
          </motion.div>

          <HeroSideColumn side="right" />
        </div>
      </section>

      <ScrollReveal className="mt-12 md:mt-20 w-full">
        <SectionTitle title="What I Build" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
          {WHAT_I_BUILD.map((card) => (
            <div
              key={card.title}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:border-accent-to/30 transition-all duration-300 group h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-from/20 to-accent-to/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <card.icon className="w-6 h-6 text-accent-from" />
              </div>
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-1">{card.description}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-16 md:mt-24 w-full" delay={0.1}>
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-14 relative overflow-hidden w-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-from/10 rounded-full blur-[100px] pointer-events-none" />
          <SectionTitle title="About Me" />
          <div className="space-y-6 mt-4 md:mt-6 relative z-10 max-w-none">
            {ABOUT_PARAGRAPHS.map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-300 leading-relaxed text-lg md:text-xl font-light text-left w-full"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
