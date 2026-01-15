import React from "react";

function Footer() {
  const linkStyle =
    "text-white text-center hover:text-gray-400 transition";

  const headingStyle =
    "text-lg font-semibold mb-3 text-blue-500";

  return (
    <footer className="bg-[#141414] backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-center">
          
          {/* Contact */}
          <div>
            <h3 className={headingStyle}>Contact</h3>
            <p className="text-white text-center">
              simoncalvin9b@gmail.com
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={headingStyle}>Social Links</h3>
            <nav className="flex justify-center md:justify-center gap-4 text-white">
              <a
                href="https://www.linkedin.com/in/simon-calvin-s"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                LinkedIn
              </a> |
              <a
                href="https://github.com/SimonCalvinS1"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                GitHub
              </a> |
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
            <h3 className={headingStyle}>Navigate to</h3>
            <nav className="flex justify-center md:justify-center gap-4 text-white">
              <a href="#about" className={linkStyle}>
                About
              </a> |
              <a href="#projects" className={linkStyle}>
                Projects
              </a> |
              <a href="#experience" className={linkStyle}>
                Experience
              </a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-6 text-center">
          <p className="text-white text-sm">
            © 2025 Simon Calvin S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
