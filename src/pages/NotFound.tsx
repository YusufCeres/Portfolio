
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-portfolio-navy px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-4 text-portfolio-teal">404</h1>
        <p className="text-2xl text-portfolio-lightestSlate mb-6">Oops! Page not found</p>
        <p className="text-portfolio-slate mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-portfolio-teal text-portfolio-navy rounded-md hover:bg-portfolio-teal/80 transition-colors font-medium"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
