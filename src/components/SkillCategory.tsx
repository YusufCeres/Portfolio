
import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, index }) => {
  return (
    <div 
      className={`bg-portfolio-lightNavy rounded-lg p-6 opacity-0 animate-fade-in`}
      style={{ animationDelay: `${index * 100 + 100}ms` }}
    >
      <h3 className="text-portfolio-teal font-semibold text-xl mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span 
            key={idx} 
            className="bg-portfolio-navy px-3 py-1 rounded text-sm text-portfolio-lightestSlate hover:bg-portfolio-teal/10 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
