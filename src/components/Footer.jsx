import React from 'react';

function Footer() {
  return (
    <footer className="bottom-0 w-full bg-cyan-700 py-4">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-3 gap-[300px] mb-3">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <p className="text-white leading-relaxed">
              simoncalvin9b@gmail.com
            </p>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Social Links</h3>
            <nav className="flex flex-row gap-2">
              <a 
                href="https://www.linkedin.com/in/simon-calvin-s" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-colors">
                  LinkedIn
              </a>
              <span className="text-white">|</span>
              <a 
                href="https://github.com/SimonCalvinS1" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-colors">
                  GitHub
              </a>
            </nav>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Navigate To</h3>
            <nav className="flex flex-row gap-2">
              <a href="#about" className="text-white hover:text-red-400">
                About
              </a>
              <span className="text-white">|</span>
              <a href="#projects" className="text-white hover:text-red-400">
                Projects
              </a>
              <span className="text-white">|</span>
              <a href="#experience" className="text-white hover:text-red-400">
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