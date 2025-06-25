
import React from 'react';

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index }) => {
  return (
    <div 
      className={`bg-portfolio-lightNavy rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl opacity-0 animate-fade-in`} 
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={certificate.image} 
          alt={`${certificate.title} certificate`} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <div className="w-6 h-6 mr-2 text-portfolio-teal">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 15l-8-8h16l-8 8z"></path>
              <path d="M7 13h10v8H7z"></path>
              <path d="M12 3v12"></path>
            </svg>
          </div>
          <h3 className="font-semibold text-portfolio-lightestSlate truncate">{certificate.title}</h3>
        </div>
        <div className="mb-4 text-portfolio-slate text-sm">
          <span className="block">Issued by: {certificate.issuer}</span>
          <span className="block">Date: {certificate.date}</span>
        </div>
        <a 
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-block px-4 py-2 bg-portfolio-navy text-portfolio-teal border border-portfolio-teal rounded text-sm font-medium hover:bg-portfolio-teal/10 transition-colors"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
