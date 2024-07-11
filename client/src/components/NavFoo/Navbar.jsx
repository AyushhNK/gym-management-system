import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-white">
                <span className="text-green-500">F</span>lex
                <span className="text-red-500">N</span>ation
              </span>
            </div>
          </div>
          <div className="hidden md:flex">
            {/* Navigation links */}
            <div className="ml-4 flex space-x-4">
              <a href="#services" className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">Login</a>
              <a href="#contact" className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">Signup</a>
            </div>
          </div>

          {/* Mobile Menu (hidden by default, shown on small screens) */}
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            {/* Render your mobile menu items here */}
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Login</a>
              <a href="#contact" className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Signup</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
