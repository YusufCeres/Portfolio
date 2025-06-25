
import React from 'react';
import SkillCategory from '../components/SkillCategory';
import skills from '../data/skills';

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-portfolio-lightestSlate opacity-0 animate-fade-in">Skills & Technologies</h1>
        <p className="text-portfolio-slate mb-12 max-w-3xl opacity-0 animate-fade-in animate-delay-100">
          Through my academic journey and personal projects, I've developed proficiency in a wide range of technologies and disciplines.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <SkillCategory 
              key={category.id}
              title={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-portfolio-lightNavy rounded-lg p-8 opacity-0 animate-fade-in animate-delay-400">
          <h2 className="text-2xl font-semibold mb-6 text-portfolio-lightestSlate">Technical Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <div>
              <h3 className="text-portfolio-teal font-medium mb-3">Full-Stack Development</h3>
              <div className="h-2 bg-portfolio-navy rounded overflow-hidden">
                <div className="bg-portfolio-teal h-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="text-portfolio-teal font-medium mb-3">Algorithms & Data Structures</h3>
              <div className="h-2 bg-portfolio-navy rounded overflow-hidden">
                <div className="bg-portfolio-teal h-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="text-portfolio-teal font-medium mb-3">Mobile Development</h3>
              <div className="h-2 bg-portfolio-navy rounded overflow-hidden">
                <div className="bg-portfolio-teal h-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="text-portfolio-teal font-medium mb-3">Database Management</h3>
              <div className="h-2 bg-portfolio-navy rounded overflow-hidden">
                <div className="bg-portfolio-teal h-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="text-portfolio-teal font-medium mb-3">AI & Machine Learning</h3>
              <div className="h-2 bg-portfolio-navy rounded overflow-hidden">
                <div className="bg-portfolio-teal h-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="text-portfolio-teal font-medium mb-3">DevOps</h3>
              <div className="h-2 bg-portfolio-navy rounded overflow-hidden">
                <div className="bg-portfolio-teal h-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
