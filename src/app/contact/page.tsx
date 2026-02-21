"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Youtube, PenTool, Code } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-6 text-center pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 mt-8"
      >
        <SectionTitle title="Connect & Collaborate" />
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto font-light leading-relaxed">
          Open to collaborations, ideas, and discussions around AI, backend systems, and automation.
          Feel free to reach out across any platform.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch relative">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-ai-violet/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        {/* Contact Links Grid (3 Columns mode) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 h-max">
          <a
            href="mailto:xaheer3scc@gmail.com"
            className="flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-ai-cyan/30 bg-ai-cyan/[0.03] hover:bg-ai-cyan/[0.08] transition-all duration-300 group shadow-lg text-center"
          >
            <div className="p-3 bg-black/40 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5 text-ai-cyan" />
            </div>
            <div className="flex flex-col items-center w-full">
              <span className="text-gray-300 font-medium tracking-wide text-sm">Email</span>
              <span className="text-gray-500 text-[10px] sm:text-[11px] tracking-wide w-full break-all mt-1">xaheer3scc@gmail.com</span>
            </div>
          </a>

          <a
            href="tel:+917889511370"
            className="flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-ai-violet/30 hover:bg-ai-violet/[0.03] transition-all duration-300 group shadow-lg text-center"
          >
            <div className="p-3 bg-black/40 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-5 h-5 text-ai-violet" />
            </div>
            <div className="flex flex-col items-center w-full">
              <span className="text-gray-300 font-medium tracking-wide text-sm">Phone</span>
              <span className="text-gray-500 text-[10px] sm:text-[11px] tracking-wide w-full break-all mt-1">+91 7889511370</span>
            </div>
          </a>

          <a
            href="https://github.com/zaheerbrakchan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group shadow-lg"
          >
            <div className="p-3 bg-black/40 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <Github className="w-5 h-5 text-gray-300" />
            </div>
            <span className="text-gray-300 font-medium tracking-wide text-sm">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/zaheer-abass-590a31142/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-all duration-300 group shadow-lg"
          >
            <div className="p-3 bg-black/40 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-5 h-5 text-[#0077b5]" />
            </div>
            <span className="text-gray-300 font-medium tracking-wide text-sm">LinkedIn</span>
          </a>

          <a
            href="https://medium.com/@xaheer3scc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300 group shadow-lg"
          >
            <div className="p-3 bg-black/40 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <PenTool className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-300 font-medium tracking-wide text-sm">Medium</span>
          </a>

          <a
            href="https://leetcode.com/u/n4R83vqkTm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FFA116]/50 hover:bg-[#FFA116]/10 transition-all duration-300 group shadow-lg"
          >
            <div className="p-3 bg-black/40 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-5 h-5 text-[#FFA116]" />
            </div>
            <span className="text-gray-300 font-medium tracking-wide text-sm">LeetCode</span>
          </a>

          <a
            href="https://www.youtube.com/@ZaheerAbass-Brakchan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10 transition-all duration-300 group shadow-lg col-span-2 sm:col-span-3 mt-2"
          >
            <div className="p-4 bg-black/40 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <Youtube className="w-7 h-7 text-[#FF0000]" />
            </div>
            <span className="text-gray-300 font-bold tracking-wide text-base">YouTube</span>
          </a>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-3xl shadow-xl backdrop-blur-md relative overflow-hidden flex flex-col h-full"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-ai-cyan/10 rounded-full blur-[60px] pointer-events-none"></div>

          <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Send a Message</h3>

          <form
            action="https://formspree.io/f/mldoynzg"
            method="POST"
            className="flex flex-col gap-4 relative z-10 flex-grow"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-ai-cyan focus:ring-1 focus:ring-ai-cyan outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-ai-cyan focus:ring-1 focus:ring-ai-cyan outline-none transition-all"
              />
            </div>
            <div className="flex-grow flex flex-col">
              <textarea
                name="message"
                placeholder="Your Message..."
                required
                className="w-full h-full min-h-[160px] p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-ai-cyan focus:ring-1 focus:ring-ai-cyan outline-none resize-none transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-bold text-lg py-4 mt-2 rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95 duration-200"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
