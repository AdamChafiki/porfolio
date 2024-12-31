import React from "react";
import { ExternalLink, Github } from "lucide-react";
import ProjectSlider from "./ProjectSlider";
import type { Project } from "./types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden group">
      <ProjectSlider images={project.images} />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            target="_blank"
            href={project.github}
            className="flex items-center text-gray-700 hover:text-cyan-600 transition-colors"
          >
            <Github size={20} className="mr-2" />
            Code
          </a>
          <a
            href={project.live}
            className="flex items-center text-gray-700 hover:text-cyan-600 transition-colors"
          >
            <ExternalLink size={20} className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
