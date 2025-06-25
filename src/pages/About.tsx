
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-portfolio-lightestSlate opacity-0 animate-fade-in">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 opacity-0 animate-fade-in animate-delay-100">
            <p className="text-portfolio-lightSlate mb-6 leading-relaxed">
              I am a driven software developer with a strong academic background in Computer Science from Stellenbosch University. 
              My passion lies in tackling challenging problems and continuously improving my skills as a developer.
            </p>
            <p className="text-portfolio-lightSlate mb-6 leading-relaxed">
              Throughout my studies, I've built a solid foundation in data structures and algorithms, while also developing 
              strong problem-solving abilities through courses in Mathematics and Operations Research. I enjoy working across 
              the full stack and am comfortable with both frontend and backend technologies.
            </p>
            <p className="text-portfolio-lightSlate mb-6 leading-relaxed">
              My technical experience spans multiple domains, including web development with React and Next.js, 
              mobile development with Flutter, and backend work with Python, Flask, and various database technologies. 
              After completing my degree, I've focused on expanding my knowledge in AI and completed several certifications in the field.
            </p>
          </div>
          
          <div className="bg-portfolio-lightNavy p-6 rounded-lg opacity-0 animate-fade-in animate-delay-200">
            <h2 className="text-xl font-semibold mb-4 text-portfolio-lightestSlate">Education</h2>
            <div className="mb-6">
              <h3 className="text-portfolio-teal font-medium">BSc Computer Science</h3>
              <p className="text-portfolio-lightSlate">Stellenbosch University</p>
              <p className="text-sm text-portfolio-slate">February 2021 - December 2024</p>
            </div>
            
            <h2 className="text-xl font-semibold mb-4 text-portfolio-lightestSlate">Experience</h2>
            <div className="mb-4">
              <h3 className="text-portfolio-teal font-medium">Math Tutor</h3>
              <p className="text-portfolio-lightSlate">Self-employed</p>
              <p className="text-sm text-portfolio-slate">January 2021 - December 2024</p>
              <ul className="mt-2 list-disc list-inside text-portfolio-slate text-sm">
                <li>Tutored high school Mathematics for grades 8 to 12</li>
                <li>Developed comprehensive study guides and learning materials</li>
                <li>Helped students build fundamental understanding of mathematical concepts</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 opacity-0 animate-fade-in animate-delay-300">
          <h2 className="text-2xl font-semibold mb-6 text-portfolio-lightestSlate">My Journey</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-portfolio-lightNavy transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-portfolio-teal font-semibold">Started Computer Science Degree</h3>
                  <p className="text-sm text-portfolio-slate">February 2021</p>
                  <p className="text-portfolio-lightSlate mt-2">Began my academic journey in Computer Science at Stellenbosch University.</p>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-2.5 md:-translate-x-2.5 w-5 h-5 rounded-full bg-portfolio-teal"></div>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                  <h3 className="text-portfolio-teal font-semibold">Started Tutoring Mathematics</h3>
                  <p className="text-sm text-portfolio-slate">January 2021</p>
                  <p className="text-portfolio-lightSlate mt-2">Began tutoring high school students in Mathematics, developing teaching and communication skills.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-2.5 md:-translate-x-2.5 w-5 h-5 rounded-full bg-portfolio-teal"></div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-portfolio-teal font-semibold">Graduated with BSc in Computer Science</h3>
                  <p className="text-sm text-portfolio-slate">December 2024</p>
                  <p className="text-portfolio-lightSlate mt-2">Successfully completed my bachelor's degree with a strong foundation in software development.</p>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-2.5 md:-translate-x-2.5 w-5 h-5 rounded-full bg-portfolio-teal"></div>
              </div>
              
              {/* Item 4 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-portfolio-teal font-semibold">AI Certifications</h3>
                  <p className="text-sm text-portfolio-slate">2025</p>
                  <p className="text-portfolio-lightSlate mt-2">Completed multiple AI certifications from Google Cloud, IBM, Intel, and DeepLearning.AI after graduation.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-2.5 md:-translate-x-2.5 w-5 h-5 rounded-full bg-portfolio-teal"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
