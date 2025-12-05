import React from 'react';

function Footer() {
  const hrefStyle = "hover:text-red-700";
  const headings = "text-lg font-bold mb-2 text-center text-blue-800";
  return (
    <footer className="bottom-0 w-full bg-white py-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-[300px] mb-3">
          {/* Contact Section */}
          <div>
            <h3 className={headings}>Contact</h3>
            <p className="leading-relaxed">
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
                className="hover:text-blue-600">
                  LinkedIn
              </a>
              <span>|</span>
              <a 
                href="https://github.com/SimonCalvinS1" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500">
                  GitHub
              </a>
              <span>|</span>
              <a 
                href="https://leetcode.com/u/SimonCalvinS" 
                target="_blank"
                rel="noopener noreferrer"
                className={hrefStyle}>
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
              <span>|</span>
              <a href="#projects" className={hrefStyle}>
                Projects
              </a>
              <span>|</span>
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