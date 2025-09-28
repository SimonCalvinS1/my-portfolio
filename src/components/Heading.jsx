import React from 'react';

function Heading() {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Simon Calvin S</h1>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Heading;