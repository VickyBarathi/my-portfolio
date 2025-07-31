import React, { useState } from 'react';

const Header = () => {
  const navLinks = ['Home', 'About', 'Projects', 'Contact'];
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-xl z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 transition-all duration-300">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">Barathi🙎🏻‍♂️</div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <nav className="flex gap-8 items-center">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-black hover:text-gray-800 transition"
              >
                {link}
              </a>
            ))}
            <a
              href="/images/Barathi_front-end-developer.pdf"
              download="Barathi-Resume.pdf"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition inline-block"
            >
              Download CV
            </a>
          </nav>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="transition-transform duration-300 ease-in-out focus:outline-none"
          >
            <svg
              className={`w-7 h-7 text-black transform transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-90 scale-110' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-4 px-4 py-4">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-black hover:text-gray-800 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="/images/Barathi_front-end-developer.pdf"
            download="Barathi-Resume.pdf"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
