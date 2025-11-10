import React from 'react';

function Heading() {
  return (
    <header className="fixed top-0 left-0 right-0 h-18 bg-cyan-600 z-[1000]">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-8">
        <h1 className="text-white text-2xl font-bold">Simon Calvin S</h1>
        <nav className="flex items-center gap-12">
          <a href="#about" className="text-white hover:text-orange-300">
            About
          </a>
          <a href="#skills" className="text-white hover:text-orange-300">
            Skills
          </a>
          <a href="#experience" className="text-white hover:text-orange-300">
            Experience
          </a>
          <a href="#education" className="text-white hover:text-orange-300">
            Education
          </a>
          <a href="#projects" className="text-white hover:text-orange-300">
            Projects
          </a>
          <a href="#certifications" className="text-white hover:text-orange-300">
            Certifications
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Heading;