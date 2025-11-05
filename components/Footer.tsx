import React from 'react';
import { Link } from 'react-router-dom';

/**
 * The footer component for the application.
 * Contains copyright information and important links.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-600">
        <div className="flex justify-center gap-x-6 mb-4">
            <Link to="/#" className="text-sm hover:text-primary">About</Link>
            <Link to="/feedback" className="text-sm hover:text-primary">Contact</Link>
            <Link to="/#" className="text-sm hover:text-primary">Privacy Policy</Link>
            <Link to="/#" className="text-sm hover:text-primary">Terms of Service</Link>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} TaxSense Nigeria. All rights reserved.
        </p>
         <p className="text-xs mt-1 text-gray-500">
          Disclaimer: This tool is for informational purposes only and does not constitute financial advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
