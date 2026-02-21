// src/app/page.tsx
"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto text-center pt-2 md:pt-6 pb-20 relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ai-violet/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-ai-cyan to-ai-violet blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
          <img
            src="/profile.png"
            alt="Zaheer"
            className="relative w-40 h-40 rounded-full shadow-2xl border-2 border-white/20 object-cover object-[20%_10%] scale-130 z-10"
          />
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-ai-cyan mb-2 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
            <span className="w-2 h-2 rounded-full bg-ai-cyan animate-pulse"></span>
            Building Production-Grade AI Systems
          </div>



          <p className="max-w-[50rem] mx-auto text-xl text-gray-400 font-light leading-relaxed">
            AI Systems Architect specializing in LLM-powered voice agents, intelligent document processing (OCR), and RAG pipelines. I design and deploy end-to-end AI systems integrating conversational AI, structured data extraction, workflow orchestration, and scalable backend infrastructure
          </p>



          <div className="pt-6 flex flex-wrap justify-center gap-5">
            <Link
              href="/projects"
              className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-medium hover:bg-white/10 transition-all active:scale-95"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-32 text-left bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-ai-cyan/5 rounded-full blur-[80px] -z-10 group-hover:bg-ai-cyan/10 transition-colors duration-700"></div>

        <SectionTitle title="Executive Summary" />
        <div className="space-y-6 mt-8">
          <p className="text-gray-300 leading-relaxed text-lg font-light">
            IIT graduate with 5 years of engineering experience, specializing in applied AI and distributed systems over the past 3 years.
            I architect and deploy production-grade intelligent automation platforms including advanced <strong className="text-white font-medium">conversational AI agents, scalable RAG architectures, semantic search infrastructures, and intelligent document processing systems</strong> integrating LLM capabilities into enterprise-scale ecosystems.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg font-light">
            With a strong foundation in resilient microservice architectures, I focus on bridging cutting-edge AI innovation with robust backend systems. My work emphasizes reliability, evaluation-driven development, and seamless real-world production deployments.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
