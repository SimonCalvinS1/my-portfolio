import React, { useState } from "react";

function Heading() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" }
  ];

  const linkStyle =
    "text-white font-semibold hover:text-gray-400 transition";

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-[#141414] backdrop-blur">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
        
        {/* Logo */}
        <h1 className="text-white text-lg md:text-2xl font-bold">
          Simon Calvin S
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {links.map(link => (
            <a key={link.name} href={link.href} className={linkStyle}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800">
          <div className="flex flex-col px-6 py-6 gap-5 max-h-[70vh] overflow-y-auto">
            {links.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-base font-medium hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Heading;
