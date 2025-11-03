"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Youtube, PenTool, Code } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle title="Connect & Collaborate" />


        <p className="text-slate-700 text-lg mt-3 mb-8">
          Open to collaborations, ideas, and discussions around AI, backend systems, and automation. 
          Feel free to reach out or explore my work across platforms.
        </p>

        {/* Social Links */}
        <div className="flex flex-col gap-4 items-center mb-10">
          <a
            href="mailto:xaheer3scc@gmail.com"
            className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition text-lg"
          >
            <Mail className="w-5 h-5 text-indigo-600" />
            xaheer3scc@gmail.com
          </a>

          <a
            href="tel:+917889511370"
            className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition text-lg"
          >
            <Phone className="w-5 h-5 text-indigo-600" />
            +91 7889511370
          </a>

          <a
            href="https://github.com/zaheerbrakchan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition text-lg"
          >
            <Github className="w-5 h-5 text-indigo-600" />
            github.com/zaheerbrakchan
          </a>

          <a
            href="https://www.linkedin.com/in/zaheer-abass-590a31142/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition text-lg"
          >
            <Linkedin className="w-5 h-5 text-indigo-600" />
            linkedin.com/in/zaheer-abass
          </a>

          <a
            href="https://www.youtube.com/@ZaheerAbass-Brakchan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition text-lg"
          >
            <Youtube className="w-5 h-5 text-indigo-600" />
            youtube.com/@zaheerbrakchan
          </a>

          <a
            href="https://medium.com/@xaheer3scc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition text-lg"
          >
            <PenTool className="w-5 h-5 text-indigo-600" />
            medium.com/@zaheerbrakchan
          </a>

          <a
            href="https://leetcode.com/u/n4R83vqkTm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition text-lg"
          >
            <Code className="w-5 h-5 text-indigo-600" />
            leetcode.com/zaheerbrakchan
          </a>
        </div>

        {/* Contact Form */}
        <motion.form
          action="https://formspree.io/f/mldoynzg"
          method="POST"
          className="flex flex-col gap-4 mt-8 bg-slate-50 p-6 rounded-2xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
