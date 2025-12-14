import React from 'react';

function Footer() {
  const hrefStyle = "text-white hover:text-red-500";
  const headings = "text-lg font-bold mb-2 text-center text-blue-400";
  return (
    <footer className="bottom-0 w-full bg-gray-900/50 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-[300px] mb-3">
          {/* Contact Section */}
          <div>
            <h3 className={headings}>Contact</h3>
            <p className="text-white">
              simoncalvin9b@gmail.com
            </p>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className={headings}>Social Links</h3>
            <nav className="flex flex-row gap-2">
              <a 
                href="https://www.linkedin.com/in/simon-calvin-s" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600">
                  LinkedIn
              </a>
              <span className="text-white">|</span>
              <a 
                href="https://github.com/SimonCalvinS1" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-500">
                  GitHub
              </a>
              <span className="text-white">|</span>
              <a 
                href="https://leetcode.com/u/SimonCalvinS" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500">
                  LeetCode
              </a>
            </nav>
          </div>

          <div>
            <h3 className={headings}>Navigate To</h3>
            <nav className="flex flex-row gap-2">
              <a href="#about" className={hrefStyle}>
                About
              </a>
              <span className="text-white">|</span>
              <a href="#projects" className={hrefStyle}>
                Projects
              </a>
              <span className="text-white">|</span>
              <a href="#experience" className={hrefStyle}>
                Experience
              </a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-[1px]">
          <p className="text-white text-sm">
            &copy; 2025 Simon Calvin S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;