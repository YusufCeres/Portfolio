
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-portfolio-lightNavy/90 backdrop-blur-md shadow-md py-3' : 'py-5 bg-transparent'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-lightestSlate p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12"/>
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16"/>
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center flex-1 justify-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/certificates" className="nav-link">Certificates</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        
        {/* Resume Button */}
        <a 
          href="https://portfolio-downloadables.web.app/Yusuf_Ceres_Resume_2025.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-4 py-2 border border-portfolio-teal text-portfolio-teal rounded hover:bg-portfolio-teal/10 transition"
        >
          Resume
        </a>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-portfolio-lightNavy/95 flex flex-col justify-center items-center">
            <button 
              className="absolute top-5 right-4 text-portfolio-lightestSlate"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
            <nav className="flex flex-col items-center space-y-6 text-lg">
              <Link onClick={() => setMobileMenuOpen(false)} to="/" className="nav-link">Home</Link>
              <Link onClick={() => setMobileMenuOpen(false)} to="/about" className="nav-link">About</Link>
              <Link onClick={() => setMobileMenuOpen(false)} to="/skills" className="nav-link">Skills</Link>
              <Link onClick={() => setMobileMenuOpen(false)} to="/projects" className="nav-link">Projects</Link>
              <Link onClick={() => setMobileMenuOpen(false)} to="/certificates" className="nav-link">Certificates</Link>
              <Link onClick={() => setMobileMenuOpen(false)} to="/contact" className="nav-link">Contact</Link>
              <a 
                href="https://portfolio-downloadables.web.app/Yusuf_Ceres_Resume_2025.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-portfolio-teal text-portfolio-teal rounded hover:bg-portfolio-teal/10 transition"
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
