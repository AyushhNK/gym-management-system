import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 bg-transparent fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-3xl font-bold text-white">
          <span style={{ color: 'blue' }}>F</span>
          lex
          <span style={{ color: 'red' }}>N</span>
          ation
        </div>
        <div>
          <ul className="flex space-x-4 text-white">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
