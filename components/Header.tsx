
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAddToHomeScreen } from '../hooks/useAddToHomeScreen';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

/**
 * The main header for the application.
 * Features a responsive navigation menu and the "Add to Home Screen" button.
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { canInstall, promptInstall } = useAddToHomeScreen();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-primary-light text-primary' : 'text-gray-700 hover:bg-gray-200'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
      isActive ? 'bg-primary-light text-primary' : 'text-gray-700 hover:bg-gray-200'
    }`;


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 text-2xl font-bold text-primary">
              TaxSense<span className="text-gray-700">NG</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/calculator" className={navLinkClass}>Calculator</NavLink>
              <NavLink to="/explainer" className={navLinkClass}>Explainer</NavLink>
              <NavLink to="/benefits" className={navLinkClass}>Benefits</NavLink>
              <NavLink to="/feedback" className={navLinkClass}>Feedback</NavLink>
              {canInstall && (
                <button
                  onClick={promptInstall}
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-green-800 transition-colors"
                >
                  Install App
                </button>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/calculator" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Calculator</NavLink>
            <NavLink to="/explainer" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Explainer</NavLink>
            <NavLink to="/benefits" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Benefits</NavLink>
            <NavLink to="/feedback" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Feedback</NavLink>
            {canInstall && (
              <button
                onClick={() => {
                  promptInstall();
                  setIsMenuOpen(false);
                }}
                className="w-full mt-2 px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-green-800 transition-colors"
              >
                Install App
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
