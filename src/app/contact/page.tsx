// src/app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle title="Contact" />

        <p className="text-slate-700 text-lg mt-3 mb-8">
          I’d love to connect! Whether you have a project idea, a question, or just want to say hi —
          feel free to reach out.
        </p>

        <div className="flex flex-col gap-4 items-center">
          {/* Email */}
          <a
            href="mailto:xaheer3scc@gmail.com"
            className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition text-lg"
          >
            <Mail className="w-5 h-5 text-indigo-600" />
            xaheer3scc@gmail.com
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/zaheerbrakchan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition text-lg"
          >
            <Github className="w-5 h-5 text-indigo-600" />
            github.com/zaheerbrakchan
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/zaheer-abass-590a31142/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition text-lg"
          >
            <Linkedin className="w-5 h-5 text-indigo-600" />
            linkedin.com/in/zaheer-abass
          </a>
        </div>
      </motion.div>
    </section>
  );
}
