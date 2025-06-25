
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-portfolio-lightestSlate opacity-0 animate-fade-in">Projects</h1>
        <p className="text-portfolio-slate mb-12 max-w-3xl opacity-0 animate-fade-in animate-delay-100">
          A selection of projects I've worked on that demonstrate my technical skills and problem-solving abilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in animate-delay-500">
          <h2 className="text-2xl font-semibold mb-6 text-portfolio-lightestSlate">Interested in seeing more?</h2>
          <p className="text-portfolio-slate mb-8">
            Check out my GitHub for more projects and contributions.
          </p>
          <a 
            href="https://github.com/YusufCeres" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-transparent border border-portfolio-teal text-portfolio-teal rounded-md hover:bg-portfolio-teal/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
