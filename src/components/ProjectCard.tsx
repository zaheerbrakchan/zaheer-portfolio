// src/components/ProjectCard.tsx
import React from 'react';
import { Github, ExternalLink, Lock, Youtube } from 'lucide-react';

export default function ProjectCard({ project }: { project: any }) {
  return (
    <article className="border rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-64">
      <div>
        <h3 className="font-semibold text-lg text-slate-800 flex items-center gap-2">
          {project.title}
          {project.isPrivate && (
            <Lock size={14} className="text-slate-400" aria-label="Private / Internal Project" />
          )}
        </h3>
        <p className="text-sm text-slate-600 mt-2 line-clamp-3">{project.description}</p>
        <p className="text-xs text-slate-500 mt-3">
          <span className="font-medium text-slate-700">Stack:</span> {project.stack.join(', ')}
        </p>
      </div>

      <div className="mt-4 flex gap-4">
        {project.github && !project.isPrivate && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            <Github size={14} /> Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-green-600 hover:underline"
          >
            <ExternalLink size={14} /> Live
          </a>
        )}
        {project.youtube && (
          <a
            href={project.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-red-600 hover:underline"
          >
            <Youtube size={14} /> Demo
          </a>
        )}
        {project.isPrivate && (
          <span className="flex items-center gap-1 text-sm text-slate-500 italic">
            <Lock size={14} /> Internal Project
          </span>
        )}
      </div>
    </article>
  );
}
