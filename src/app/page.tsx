// src/app/page.tsx
"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import VisitorCounter from "@/components/VisitorCounter";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6"
      >
<img
  src="/profile.png"
  alt="Zaheer"
  className="w-36 h-36 rounded-full shadow-lg border-4 border-white object-cover object-[20%_10%] scale-130"
/>


        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Zaheer Abass
          </h1>
<p className="mt-3 text-lg text-slate-700">
  AI Engineer & Full-Stack Developer — crafting scalable backend systems and intelligent LLM-powered solutions.
</p>

<VisitorCounter />

<div className="mt-6 flex flex-wrap justify-center gap-4">
  <Link
    href="/projects"
    className="px-5 py-2.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
  >
    View Projects
  </Link>
  <Link
    href="/contact"
    className="px-5 py-2.5 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
  >
    Contact
  </Link>
</div>

        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 text-left"
      >
<SectionTitle title="Summary" />
<p className="text-slate-700 leading-relaxed text-lg mt-3">
IIT graduate with 5 years of experience in applied AI and backend engineering. 
For the past 2 years, I’ve focused on building intelligent automation systems — including RAG pipelines, semantic search, 
document understanding, and conversational AI — using Python, LangChain, and Azure OpenAI. 
Earlier, I spent 3 years developing scalable microservice-based platforms with Java Spring Boot and Vue.js.

</p>
<p className="text-slate-700 leading-relaxed text-lg mt-4">
  Passionate about bridging AI research with production systems — I design practical,
  reliable, and maintainable solutions that make complex automation accessible.
</p>

      </motion.div>
    </section>
  );
}
