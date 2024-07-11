import React from 'react';

const LogoLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 flex items-center justify-center z-50">
      <div className="text-white text-9xl font-bold animate-bounce">
        <span className="text-green-500 transform scale-125">F</span>
        <span className="text-red-500 transform scale-125">N</span>
      </div>
    </div>
  );
};

export default LogoLoader;

