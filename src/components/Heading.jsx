import React from 'react';

function Heading() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-blue-500 z-[1000]">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-8">
        <h1 className="text-white text-2xl font-bold">Simon Calvin S</h1>
        <nav className="flex items-center gap-12">
          <a href="#about" className="text-white text-lg font-medium hover:text-[#fcfc00] transition-colors duration-200">
            About
          </a>
          <a href="#skills" className="text-white text-lg font-medium hover:text-[#fcfc00] transition-colors duration-200">
            Skills
          </a>
          <a href="#experience" className="text-white text-lg font-medium hover:text-[#fcfc00] transition-colors duration-200">
            Experience
          </a>
          <a href="#education" className="text-white text-lg font-medium hover:text-[#fcfc00] transition-colors duration-200">
            Education
          </a>
          <a href="#projects" className="text-white text-lg font-medium hover:text-[#fcfc00] transition-colors duration-200">
            Projects
          </a>
          <a href="#contact" className="text-white text-lg font-medium hover:text-[#fcfc00] transition-colors duration-200">
            Contact
          </a>
          <a href="#blog" className="text-white text-lg font-medium hover:text-[#fcfc00] transition-colors duration-200">
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Heading;