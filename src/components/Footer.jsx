import React from 'react';

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-[#fcfcfc] py-4 pb-2">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-3 gap-[300px] mb-3">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#154cb3]">Contact</h3>
            <p className="text-gray-600 leading-relaxed">
              simoncalvin9b@gmail.com
            </p>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#154cb3]">Social Links</h3>
            <nav className="flex flex-row gap-2">
              <a href="#linkedin" className="text-gray-600 hover:text-[#0015ff] transition-colors">
                LinkedIn
              </a>
              <span className="text-gray-600">|</span>
              <a href="#github" className="text-gray-600 hover:text-[#0015ff] transition-colors">
                GitHub
              </a>
            </nav>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#154cb3]">Navigate To</h3>
            <nav className="flex flex-row gap-2">
              <a href="#about" className="text-gray-600 hover:text-[#0015ff] transition-colors">
                About
              </a>
              <span className="text-gray-600">|</span>
              <a href="#projects" className="text-gray-600 hover:text-[#0015ff] transition-colors">
                Projects
              </a>
              <span className="text-gray-600">|</span>
              <a href="#experience" className="text-gray-600 hover:text-[#0015ff] transition-colors">
                Experience
              </a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-[1px]">
          <p className="text-[#333232] text-sm">
            &copy; 2025 Simon Calvin S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;