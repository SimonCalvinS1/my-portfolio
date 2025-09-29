import React from 'react';

function Heading() {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Simon Calvin S</h1>
        <nav className="navbar">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </nav>
      </div>
    </header>
  );
}

export default Heading;