"use client";
import React, { useState } from 'react';
import { Github, ExternalLink, Lock, Youtube, Terminal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectCard({ project }: { project: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article onClick={() => setIsOpen(true)} className="cursor-pointer group relative border border-white/5 rounded-2xl p-6 md:p-8 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.07)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-full min-h-[340px] overflow-hidden">
        {/* Background glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/5 to-ai-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

        <div className="relative z-10">
          <h3 className="font-bold text-2xl text-white flex items-center justify-between gap-3 mb-4 tracking-tight">
            <span className="line-clamp-2 leading-tight">{project.title}</span>
            {project.isPrivate ? (
              <div className="p-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 shrink-0" title="Internal Project">
                <Lock size={16} />
              </div>
            ) : (
              <div className="p-2 rounded-full bg-ai-cyan/10 border border-ai-cyan/20 text-ai-cyan shrink-0" title="Public Project">
                <Terminal size={16} />
              </div>
            )}
          </h3>
          <p className="text-base text-gray-400 leading-relaxed line-clamp-4">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech: string, i: number) => (
              <span key={i} className="text-xs font-semibold tracking-wide px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-5 pt-5 border-t border-white/5 relative z-10 w-full">
          {project.github && !project.isPrivate && (
            <a
              href={project.github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-ai-cyan transition-colors"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-ai-cyan transition-colors"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
          {project.youtube && (
            <a
              href={project.youtube}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-ai-violet transition-colors"
            >
              <Youtube size={16} /> Demo
            </a>
          )}
          {project.isPrivate && (
            <span className="flex items-center gap-1.5 text-sm text-gray-500 italic font-medium">
              <Lock size={14} /> Internal Architecture
            </span>
          )}
        </div>
      </article>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="font-bold text-3xl md:text-4xl text-white flex items-center gap-4 mb-8 pr-12 leading-tight">
                {project.title}
                {project.isPrivate ? (
                  <div className="p-2.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 shrink-0" title="Internal Project">
                    <Lock size={20} />
                  </div>
                ) : (
                  <div className="p-2.5 rounded-full bg-ai-cyan/10 border border-ai-cyan/20 text-ai-cyan shrink-0" title="Public Project">
                    <Terminal size={20} />
                  </div>
                )}
              </h3>

              <div className="prose prose-invert max-w-none mb-10">
                <p className="text-gray-300 leading-relaxed text-lg sm:text-xl whitespace-pre-wrap">{project.description}</p>
              </div>

              <div className="mb-10">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.stack.map((tech: string, i: number) => (
                    <span key={i} className="text-sm font-semibold tracking-wide px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-4 pt-8 border-t border-white/10">
                {project.github && !project.isPrivate && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-200 active:scale-95 text-black font-semibold transition-all"
                  >
                    <Github size={20} /> View Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ai-cyan/10 border border-ai-cyan/30 text-ai-cyan hover:bg-ai-cyan/20 active:scale-95 font-semibold transition-all"
                  >
                    <ExternalLink size={20} /> Open Live Demo
                  </a>
                )}
                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ai-violet/10 border border-ai-violet/30 text-ai-violet hover:bg-ai-violet/20 active:scale-95 font-semibold transition-all"
                  >
                    <Youtube size={20} /> Watch Video Demo
                  </a>
                )}
                {project.isPrivate && (
                  <span className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 text-gray-400 font-medium italic cursor-not-allowed">
                    <Lock size={20} /> Internal / Proprietary System
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
