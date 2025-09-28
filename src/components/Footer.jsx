import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact</h3>
            <p>simoncalvin9b@gmail.com</p>
            <p>Location: Bengaluru, India</p>
          </div>
          <div className="footer-section">
            <h3>Social Links</h3>
            <nav className="footer-nav">
              <a href="#linkedin">LinkedIn</a>
              <a href="#github">GitHub</a>
              <a href="#twitter">Twitter</a>
            </nav>
          </div>
          <div className="footer-section">
            <h3>Navigate To</h3>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Simon Calvin S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;