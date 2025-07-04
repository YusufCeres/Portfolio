
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Card 
      className={`bg-portfolio-lightNavy overflow-hidden shadow-lg opacity-0 animate-fade-in`}
      style={{ animationDelay: `${index * 100 + 100}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error(`Failed to load image: ${target.src}`);
          }}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl text-portfolio-lightestSlate mb-2">{project.title}</h3>
        <p className="text-portfolio-slate mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="bg-portfolio-navy px-2 py-1 rounded text-xs text-portfolio-lightSlate"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.githubLink && (
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center text-portfolio-teal hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Code
            </a>
          )}
          {project.liveLink && (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center text-portfolio-teal hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
