import React from 'react';

const Footer = () => {
 
  return (
    <section className="w-full py-4 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4" >
       <p className='mb-0 text-center text-white'>© {new Date().getFullYear()} Barathi. Designed & Developed with ❤️</p>
    </div>
  </section>
  );
};

export default Footer;
