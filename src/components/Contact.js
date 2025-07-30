import React from 'react';
const Contact = () => {

  return (
    <section className="w-full py-16 bg-gray-200" id='contact'>
    <div className="max-w-7xl mx-auto px-4">
       <h2 className='text-center text-2xl font-semibold mb-3' data-aos="fade-down">Contact me</h2>
      <p className='text-center mb-6' data-aos="fade-up">"Let’s build something great together!"</p>
    
             

<div className='flex items-center justify-center mt-8' data-aos="fade-top">
  <a href="tel:8778243074" aria-label="Phone" className='flex items-center justify-center'>
    <svg width="24" height="24" fill="#fff" stroke="#000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.69.59 1 1 0 011 1v3.5a1 1 0 01-1 1C10.4 21.03 2.97 13.6 2.97 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.2 2.51.59 3.69a1 1 0 01-.24 1.01l-2.2 2.2z"/>
    </svg>
    <span className='ps-1'>8778243074</span>
  </a>
  <div className='mx-8 text-gray-400'>|</div>
  
  <a href="mailto:vickybarathi11@gmail.com" aria-label="Email" className='flex items-center justify-center '>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
    <polyline points="3 7 12 13 21 7"/>
  </svg>
    <span className='ps-1'>vickybarathi11@gmail.com</span>
  </a>

  <div className='mx-8 text-gray-400'>|</div>
  <a href="https://www.linkedin.com/in/vicky-barathi-329709189/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='flex items-center justify-center'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
    <path d="M16 8c2.2 0 4 1.8 4 4v6h-4v-6c0-.6-.4-1-1-1s-1 .4-1 1v6h-4v-6c0-2.2 1.8-4 4-4zM4 9h4v11H4z"/>
    <circle cx="6" cy="5" r="2"/>
  </svg>
    <span className='ps-1'>My LinkedIn Profile</span>
  </a>
</div>
     
        
    </div>
  </section>
  );
};

export default Contact;
