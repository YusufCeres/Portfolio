import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex flex-1 items-center justify-center py-20 md:py-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0 opacity-0 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-portfolio-lightestSlate">
                Yusuf Ceres
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-portfolio-slate">
                Software Developer
              </h2>
              <p className="text-portfolio-slate mb-8 max-w-lg">
                I'm a software developer with a strong foundation in computer science, 
                specializing in both frontend and backend development. 
                With expertise in various technologies including React, Flutter, and Python,
                I'm passionate about creating efficient and impactful software solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projects" 
                  className="px-6 py-3 bg-transparent border border-portfolio-teal text-portfolio-teal rounded-md hover:bg-portfolio-teal/10 transition-colors"
                >
                  View My Projects
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-portfolio-teal text-portfolio-navy rounded-md hover:bg-portfolio-teal/80 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 opacity-0 animate-fade-in animate-delay-200">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-portfolio-teal/20 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-portfolio-navy border-2 border-portfolio-teal flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-bold text-portfolio-teal">YC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-portfolio-lightNavy/30">
        <div className="container mx-auto px-4">
          <h2 className="section-heading opacity-0 animate-fade-in">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-portfolio-lightNavy p-6 rounded-lg opacity-0 animate-fade-in animate-delay-100">
              <div className="w-12 h-12 bg-portfolio-teal/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-2">Web Development</h3>
              <p className="text-portfolio-slate">
                Building responsive, performant web applications using modern JavaScript frameworks and libraries.
              </p>
            </div>
            <div className="bg-portfolio-lightNavy p-6 rounded-lg opacity-0 animate-fade-in animate-delay-200">
              <div className="w-12 h-12 bg-portfolio-teal/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-2">Mobile Development</h3>
              <p className="text-portfolio-slate">
                Creating cross-platform mobile applications with Flutter and Dart for seamless user experiences.
              </p>
            </div>
            <div className="bg-portfolio-lightNavy p-6 rounded-lg opacity-0 animate-fade-in animate-delay-300">
              <div className="w-12 h-12 bg-portfolio-teal/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 6V2H8"></path>
                  <path d="m6.8 14 .9-2.8a2 2 0 0 1 3.8 0l.9 2.8"></path>
                  <path d="M17 17h1a4 4 0 0 0 0-8h-1"></path>
                  <path d="m5 15-2 6"></path>
                  <path d="m19 15 2 6"></path>
                  <path d="M5 11h14"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-2">AI & ML Integration</h3>
              <p className="text-portfolio-slate">
                Implementing artificial intelligence and machine learning solutions to enhance software capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
