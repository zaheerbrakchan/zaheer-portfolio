// src/components/ProjectCard.tsx
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }: { project: any }) {
  return (
    <article className="border rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-64">
      <div>
        <h3 className="font-semibold text-lg text-slate-800">{project.title}</h3>
        <p className="text-sm text-slate-600 mt-2 line-clamp-3">{project.description}</p>
        <p className="text-xs text-slate-500 mt-3">
          <span className="font-medium text-slate-700">Stack:</span> {project.stack.join(', ')}
        </p>
      </div>

      <div className="mt-4 flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            <Github size={14} /> Code
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            <ExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </article>
  );
}
