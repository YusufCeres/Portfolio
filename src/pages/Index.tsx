
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';
import NotFound from './NotFound';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <main className="min-h-screen">
      {children}
    </main>
    <Footer />
    <Chatbot />
  </>
);

const Index = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout>
            <Home />
          </Layout>
        } 
      />
      <Route 
        path="/about" 
        element={
          <Layout>
            <About />
          </Layout>
        } 
      />
      <Route 
        path="/skills" 
        element={
          <Layout>
            <Skills />
          </Layout>
        } 
      />
      <Route 
        path="/projects" 
        element={
          <Layout>
            <Projects />
          </Layout>
        } 
      />
      <Route 
        path="/certificates" 
        element={
          <Layout>
            <Certificates />
          </Layout>
        } 
      />
      <Route 
        path="/contact" 
        element={
          <Layout>
            <Contact />
          </Layout>
        } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Index;
