import React from 'react';

function Heading() {
  const hrefStyle = "text-white font-semibold hover:text-blue-400";
  return (
    <header className="bg-gray-900/50 fixed top-0 left-0 right-0 h-18 z-[1000]">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-8">
        <h1 className="text-white text-2xl font-bold">Simon Calvin S</h1>
        <nav className="flex items-center gap-12">
          <a href="#about" className={hrefStyle}>
            About
          </a>
          <a href="#experience" className={hrefStyle}>
            Experience
          </a>
          <a href="#education" className={hrefStyle}>
            Education
          </a>
          <a href="#projects" className={hrefStyle}>
            Projects
          </a>
          <a href="#certifications" className={hrefStyle}>
            Certifications
          </a>
          <a href="#achievements" className={hrefStyle}>
            Achievements
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Heading;