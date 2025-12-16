import React from "react";

function Footer() {
  const linkStyle =
    "text-white hover:text-gray-300 transition";

  const headingStyle =
    "text-lg font-semibold mb-3 text-white";

  return (
    <footer className="bg-gray-900/70 backdrop-blur mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Contact */}
          <div>
            <h3 className={headingStyle}>Contact</h3>
            <p className="text-white">
              simoncalvin9b@gmail.com
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={headingStyle}>Social Links</h3>
            <nav className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/simon-calvin-s"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/SimonCalvinS1"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                GitHub
              </a>
              <a
                href="https://leetcode.com/u/SimonCalvinS"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                LeetCode
              </a>
            </nav>
          </div>

          {/* Navigation */}
          <div>
            <h3 className={headingStyle}>Navigate</h3>
            <nav className="flex justify-center md:justify-start gap-4">
              <a href="#about" className={linkStyle}>
                About
              </a>
              <a href="#projects" className={linkStyle}>
                Projects
              </a>
              <a href="#experience" className={linkStyle}>
                Experience
              </a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-white text-sm">
            © 2025 Simon Calvin S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
