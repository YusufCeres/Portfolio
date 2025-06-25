
import React from 'react';
import CertificateCard from '../components/CertificateCard';
import certificates from '../data/certificates';

const Certificates: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-portfolio-lightestSlate opacity-0 animate-fade-in">Certificates</h1>
        <p className="text-portfolio-slate mb-12 max-w-3xl opacity-0 animate-fade-in animate-delay-100">
          After graduating, I completed several professional certifications to expand my knowledge in artificial intelligence and related fields.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
