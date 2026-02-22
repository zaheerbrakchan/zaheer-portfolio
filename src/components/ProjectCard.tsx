"use client";
import React, { useState } from 'react';
import { Github, ExternalLink, Lock, Youtube, Terminal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MAX_VISIBLE_TAGS = 4;

export default function ProjectCard({ project, index }: { project: any; index?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const visibleTags = project.stack.slice(0, MAX_VISIBLE_TAGS);
  const remainingCount = project.stack.length - MAX_VISIBLE_TAGS;

  return (
    <>
      <article
        onClick={() => setIsOpen(true)}
        className="cursor-pointer group relative rounded-2xl bg-white/[0.02] backdrop-blur-sm shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.07)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
      >
        {/* Top accent gradient bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-ai-cyan via-ai-violet to-ai-blue opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Background glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/5 to-ai-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

        <div className="p-6 md:p-8 flex flex-col flex-1">
          {/* Header: index badge + title + status icon */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3 min-w-0">
              {typeof index === 'number' && (
                <span className="text-xs font-mono font-bold text-ai-cyan/50 bg-ai-cyan/5 border border-ai-cyan/10 rounded-md px-2 py-1 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
              )}
              <h3 className="font-bold text-lg text-white leading-snug line-clamp-2 tracking-tight">
                {project.title}
              </h3>
            </div>
            {project.isPrivate ? (
              <div className="p-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 shrink-0" title="Internal Project">
                <Lock size={14} />
              </div>
            ) : (
              <div className="p-2 rounded-full bg-ai-cyan/10 border border-ai-cyan/20 text-ai-cyan shrink-0" title="Public Project">
                <Terminal size={14} />
              </div>
            )}
          </div>

          {/* Description — clamped to 3 lines */}
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-5">
            {project.description}
          </p>

          {/* Tech stack tags — limited */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {visibleTags.map((tech: string, i: number) => (
              <span key={i} className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-gray-400">
                {tech}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-md bg-ai-violet/10 border border-ai-violet/20 text-ai-violet">
                +{remainingCount} more
              </span>
            )}
          </div>

          {/* Footer — pushed to bottom */}
          <div className="mt-auto flex gap-4 pt-4 border-t border-white/5 relative z-10">
            {project.github && !project.isPrivate && (
              <a
                href={project.github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-ai-cyan transition-colors"
              >
                <Github size={14} /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-ai-cyan transition-colors"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
            {project.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-ai-violet transition-colors"
              >
                <Youtube size={14} /> Demo
              </a>
            )}
            {project.isPrivate && (
              <span className="flex items-center gap-1.5 text-xs text-gray-600 italic font-medium">
                <Lock size={12} /> Internal
              </span>
            )}
          </div>
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
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ai-cyan via-ai-violet to-ai-blue rounded-t-3xl"></div>

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
