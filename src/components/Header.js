import React from 'react';

const Header = () => {
  const navLinks = ['Home', 'Projects', 'Contact'];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">Barathi🙎🏻‍♂️</div>

        {/* Navigation */}
        <div className='hidden md:block'>
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
  href="/images/Barathi_front-end-developer.pdf" // replace with your actual file path
  download="Barathi-Resume.pdf"
  className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition inline-block"
>
  Download CV
</a>
        </nav>
        </div>

        {/* CTA Button */}
        
      </div>
    </header>
  );
};

export default Header;
