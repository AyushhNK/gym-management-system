import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4 flex"><p className="text-green-500">F</p>lex<p className="text-red-500">N</p>ation</h2>
            <p className="text-sm">FlexNation is dedicated to providing high-quality web development solutions.</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li><a href="#services" className="hover:text-gray-400 block px-2 py-1">Services</a></li>
              <li><a href="#about" className="hover:text-gray-400 block px-2 py-1">About Us</a></li>
              <li><a href="#contact" className="hover:text-gray-400 block px-2 py-1">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">123 Flex Street, FlexCity, FL 12345</p>
            <p className="text-sm">Email: info@flexnation.com</p>
            <p className="text-sm">Phone: +1 123-456-7890</p>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 FlexNation. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
