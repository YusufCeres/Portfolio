
import React, { useState } from 'react';
import { useToast } from '../components/ui/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-portfolio-lightestSlate opacity-0 animate-fade-in">Contact Me</h1>
        <p className="text-portfolio-slate mb-12 max-w-3xl opacity-0 animate-fade-in animate-delay-100">
          Feel free to reach out to me for job opportunities, collaborations, or any questions you might have.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in animate-delay-200">
            <h2 className="text-2xl font-semibold mb-6 text-portfolio-lightestSlate">Get In Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-portfolio-lightestSlate mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-portfolio-navy border border-portfolio-lightNavy rounded focus:outline-none focus:border-portfolio-teal text-portfolio-lightestSlate"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-portfolio-lightestSlate mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-portfolio-navy border border-portfolio-lightNavy rounded focus:outline-none focus:border-portfolio-teal text-portfolio-lightestSlate"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-portfolio-lightestSlate mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-portfolio-navy border border-portfolio-lightNavy rounded focus:outline-none focus:border-portfolio-teal text-portfolio-lightestSlate"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-portfolio-lightestSlate mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-portfolio-navy border border-portfolio-lightNavy rounded focus:outline-none focus:border-portfolio-teal text-portfolio-lightestSlate"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-portfolio-teal text-portfolio-navy rounded-md hover:bg-portfolio-teal/80 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-300">
            <h2 className="text-2xl font-semibold mb-6 text-portfolio-lightestSlate">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-portfolio-teal/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-portfolio-lightestSlate">Phone</h3>
                  <p className="text-portfolio-slate">+27 65 936 7997</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-portfolio-teal/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-portfolio-lightestSlate">Email</h3>
                  <p className="text-portfolio-slate">ceresyusuf@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-portfolio-teal/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-portfolio-lightestSlate">Location</h3>
                  <p className="text-portfolio-slate">Cape Town, Western Cape, South Africa</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-portfolio-teal/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-portfolio-lightestSlate">GitHub</h3>
                  <a 
                    href="https://github.com/YusufCeres" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-portfolio-teal hover:underline"
                  >
                    github.com/YusufCeres
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10 bg-portfolio-lightNavy p-6 rounded-lg">
              <h3 className="font-semibold text-portfolio-lightestSlate mb-4">Availability</h3>
              <p className="text-portfolio-slate mb-4">
                I'm currently available for full-time positions and freelance projects. Feel free to reach out to discuss opportunities.
              </p>
              <div className="flex items-center text-portfolio-teal">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                <span>Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
