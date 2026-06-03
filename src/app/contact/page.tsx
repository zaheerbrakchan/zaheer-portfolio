"use client";

import { Mail, Phone, Github, Linkedin, Youtube, PenTool, Code, Globe } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <section className="page-section w-full text-center pb-20">
      <ScrollReveal className="mb-12 mt-8">
        <SectionTitle title="Connect & Collaborate" />
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto font-light leading-relaxed">
          Interested in collaborating or building something together? Let&apos;s talk. Reach out via
          email or any platform below.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-accent-to/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 h-max">
          <a
            href="mailto:xaheer3scc@gmail.com"
            className="glass-card flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl hover:border-accent-from/40 transition-all duration-300 group text-center"
          >
            <div className="p-3 bg-black/40 rounded-full border border-white/5 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-accent-from" />
            </div>
            <div className="flex flex-col items-center w-full">
              <span className="text-gray-300 font-medium tracking-wide text-sm">Email</span>
              <span className="text-gray-500 text-[10px] sm:text-[11px] tracking-wide w-full break-all mt-1">
                xaheer3scc@gmail.com
              </span>
            </div>
          </a>

          <a
            href="tel:+917889511370"
            className="glass-card flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl hover:border-accent-to/40 transition-all duration-300 group text-center"
          >
            <div className="p-3 bg-black/40 rounded-full border border-white/5 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-accent-to" />
            </div>
            <div className="flex flex-col items-center w-full">
              <span className="text-gray-300 font-medium tracking-wide text-sm">Phone</span>
              <span className="text-gray-500 text-[10px] sm:text-[11px] tracking-wide w-full break-all mt-1">
                +91 7889511370
              </span>
            </div>
          </a>

          <a
            href="https://github.com/zaheerbrakchan"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl hover:border-white/20 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 font-medium text-sm">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/zaheer-abass-590a31142/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl hover:border-[#0077b5]/50 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-[#0077b5]" />
            <span className="text-gray-300 font-medium text-sm">LinkedIn</span>
          </a>

          <a
            href="https://zaheer-portfolio-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl hover:border-accent-from/40 transition-all duration-300 group"
          >
            <Globe className="w-5 h-5 text-accent-from" />
            <span className="text-gray-300 font-medium text-sm">Portfolio</span>
          </a>

          <a
            href="https://medium.com/@xaheer3scc"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl hover:border-white/20 transition-all duration-300 group"
          >
            <PenTool className="w-5 h-5 text-white" />
            <span className="text-gray-300 font-medium text-sm">Medium</span>
          </a>

          <a
            href="https://leetcode.com/u/n4R83vqkTm/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl hover:border-[#FFA116]/50 transition-all duration-300 group"
          >
            <Code className="w-5 h-5 text-[#FFA116]" />
            <span className="text-gray-300 font-medium text-sm">LeetCode</span>
          </a>

          <a
            href="https://www.youtube.com/@ZaheerAbass-Brakchan"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex flex-col items-center justify-center gap-3 p-5 rounded-2xl hover:border-[#FF0000]/50 transition-all duration-300 group col-span-2 sm:col-span-3 mt-2"
          >
            <Youtube className="w-7 h-7 text-[#FF0000]" />
            <span className="text-gray-300 font-bold tracking-wide text-base">YouTube</span>
          </a>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Send a Message</h3>

            <form
              action="https://formspree.io/f/mldoynzg"
              method="POST"
              className="flex flex-col gap-4 relative z-10 flex-grow"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-accent-from focus:ring-1 focus:ring-accent-from outline-none transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-accent-from focus:ring-1 focus:ring-accent-from outline-none transition-all"
              />
              <textarea
                name="message"
                placeholder="Your Message..."
                required
                className="w-full min-h-[160px] p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-accent-from focus:ring-1 focus:ring-accent-from outline-none resize-none transition-all flex-grow"
              />
              <button
                type="submit"
                className="w-full btn-accent font-bold text-lg py-4 mt-2 rounded-xl active:scale-95 duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
