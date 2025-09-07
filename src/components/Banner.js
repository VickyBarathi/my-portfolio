import React from 'react';
import  { useState } from 'react';

const Banner = () => {
 const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <section className="w-full py-16 bg-gray-100 pt-36" id="home">
    <div className="max-w-7xl mx-auto px-4"> 
      <div className="grid grid-cols-12">
        <div className="col-span-12 col-start-1 grid grid-cols-10 gap-4 items-center">
        {/* Left Column */}
        <div className='col-span-12 md:col-span-6 mx-auto' data-aos="fade-left">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">
         Hi, I'm Barathi   👋
          </h1>
          <p className="text-md text-gray-700 mb-5">
         “Frontend Developer | UI/UX Enthusiast | Web Performance Optimizer” 🚀
          </p>
          <p>I’m a passionate Frontend Developer with 5 years of experience crafting modern, responsive, and user-friendly web applications.</p>
          <p className='mt-2 mb-5'> I specialize in building pixel-perfect interfaces, enhancing performance, and delivering seamless digital experiences.</p>


          <p className='font-semibold'> Tech I Work With:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
  {/* HTML */}
  <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
      <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
      <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z" />
      <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" />
    </svg>
    <p className="text-gray-700 font-medium">HTML</p>
  </div>

  {/* CSS */}
  <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
      <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5z" />
      <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
      <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z" />
      <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z" />
    </svg>
    <p className="text-gray-700 font-medium">CSS</p>
  </div>

  {/* Bootstrap */}
  <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
    <img src="/images/bootstrap-logo.svg" className="w-7 h-7" alt="Bootstrap" />
    <p className="text-gray-700 font-medium">Bootstrap</p>
  </div>

  {/* SASS */}
  <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
    <img src="/images/sass-logo.png" className="w-7 h-7" alt="SASS" />
    <p className="text-gray-700 font-medium">SASS</p>
  </div>

  {/* Tailwind */}
  <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
      <path
        fill="#00acc1"
        d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599
        c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24
        c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6
        c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604z
        M12,24c-6.4,0-10.4,3.199-12,9.598
        c2.4-3.199,5.2-4.399,8.4-3.599
        c1.825,0.457,3.13,1.781,4.575,3.246
        c2.353,2.388,5.077,5.152,11.025,5.152
        c6.4,0,10.4-3.199,12-9.598
        c-2.4,3.199-5.2,4.399-8.4,3.599
        c-1.826-0.456-3.131-1.781-4.576-3.246
        C20.672,26.764,17.949,24,12,24z"
      />
    </svg>
    <p className="text-gray-700 font-medium">Tailwind</p>
  </div>

  {/* JavaScript */}
  <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
    <svg className="w-7 h-7" viewBox="0 0 630 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="630" height="630" fill="#f7df1e" />
      <path d="M423 492c13 21 30 36 60 36 25 0 41-12 41-29 0-20-16-27-44-39l-15-6c-44-19-73-43-73-93 0-46 35-81 90-81 39 0 67 14 87 52l-48 31c-10-18-21-25-39-25s-30 10-30 25c0 17 12 24 39 34l15 6c51 22 80 45 80 96 0 55-43 85-101 85-57 0-94-27-112-63zm-209 6c10 18 20 33 43 33 22 0 36-9 36-44V290h60v199c0 62-36 90-88 90-47 0-75-24-89-53z" />
    </svg>
    <p className="text-gray-700 font-medium">JavaScript</p>
  </div>

{/* React */}
<div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="30"
    height="30"
  >
    <g fill="#61DAFB">
      <circle cx="64" cy="64" r="11.4" />
      <path d="M107.3 45.2c-1.7-.6-3.4-1.2-5.1-1.7.5-2.2.8-4.3 1-6.3 1.2-13.6-1.8-22.4-8.3-25.5-6.5-3.1-15.6.1-25.8 8.9-2.1 1.9-4.1 3.9-6.1 6.1-1.9-2.1-4-4.2-6.1-6.1C44.8 12 35.8 8.8 29.3 11.9c-6.5 3.1-9.5 11.9-8.3 25.5.2 2 .5 4.1 1 6.3-1.7.5-3.4 1.1-5.1 1.7C2.4 50.1-2 57.3.8 64c2.8 6.7 11.1 11.9 23.2 15.2 1.7.5 3.5.9 5.3 1.3-.6 2.3-1 4.5-1.2 6.7-1.2 13.6 1.8 22.4 8.3 25.5 6.5 3.1 15.6-.1 25.8-8.9 2.1-1.9 4.1-3.9 6.1-6.1 1.9 2.1 4 4.2 6.1 6.1 10.2 8.8 19.3 12 25.8 8.9 6.5-3.1 9.5-11.9 8.3-25.5-.2-2.2-.6-4.4-1.2-6.7 1.8-.4 3.5-.8 5.3-1.3 12.1-3.3 20.4-8.5 23.2-15.2 2.8-6.7-1.6-13.9-11.5-18.8zm-21.6 39.8c-1.5 1.5-3.3 2.9-5.3 4.3 1.5-2.7 2.7-5.7 3.7-8.9 1.1-.2 2.1-.5 3.2-.8-.4 1.7-1 3.4-1.6 5.4zm-9.3-39.5c.8 1.5 1.4 3.1 2 4.8-1.7.4-3.5.8-5.3 1.3-.3-1.7-.6-3.3-1-5 .7-.2 1.5-.4 2.2-.5 1-.2 2.1-.4 3.1-.6zm-16.4-8.4c.8.7 1.6 1.5 2.4 2.3-.8.8-1.6 1.5-2.4 2.3-.8-.8-1.6-1.5-2.4-2.3.8-.8 1.6-1.5 2.4-2.3zm-9.4 8.4c1 .2 2.1.4 3.1.6.7.1 1.5.3 2.2.5-.4 1.7-.7 3.3-1 5-1.8-.5-3.6-.9-5.3-1.3.6-1.7 1.2-3.3 2-4.8zm-10.3 39.5c-.6-2-1.2-3.7-1.6-5.4 1.1.3 2.1.6 3.2.8.9 3.1 2.2 6.2 3.7 8.9-2-.9-3.8-2.3-5.3-4.3zM24.5 64c0-1.2.1-2.3.3-3.4 2.3.5 4.6 1.1 7.1 1.8-.6 2.1-1 4.3-1.3 6.5-2.1-.6-4.1-1.2-6-2.1-.3-.9-.1-1.7-.1-2.8zm9.2 17.7c-.7-1.8-1.3-3.5-1.8-5.2 1.8.5 3.6.9 5.5 1.3-.4 2.4-.9 4.8-1.6 7.1-1-.9-1.4-2.1-2.1-3.2zm20.3 17.4c-.8-.7-1.6-1.5-2.4-2.3.8-.8 1.6-1.5 2.4-2.3.8.8 1.6 1.5 2.4 2.3-.8.8-1.6 1.5-2.4 2.3zm20.3-17.4c-.7 1.1-1.1 2.3-2.1 3.2-.7-2.3-1.2-4.7-1.6-7.1 1.9-.4 3.7-.8 5.5-1.3-.5 1.7-1.1 3.4-1.8 5.2zm9.2-17.7c0 1.1-.1 2-.1 2.8-1.9.8-3.9 1.5-6 2.1-.3-2.2-.7-4.4-1.3-6.5 2.5-.7 4.8-1.3 7.1-1.8.2 1.1.3 2.2.3 3.4z" />
    </g>
  </svg>
  <p className="text-gray-700 font-medium">React</p>
</div>


  {/* Figma */}
  <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
    <img src="/images/figma-logo.png" className="w-7 h-7" alt="Figma" />
    <p className="text-gray-700 font-medium">Figma</p>
  </div>
<div className="flex justify-center sm:justify-start mt-5 w-full">
  <a
    href="/images/Barathi_front-end-developer.pdf"
    download="Barathi-Resume.pdf"
    className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition min-w-fit whitespace-nowrap text-center"
    onClick={() => setMobileMenuOpen(false)}
  >
    Download CV
  </a>
</div>

</div>
         
               
        </div>

   <div className="col-span-12 md:col-span-4 flex justify-center items-center" data-aos="fade-right">
  <div className="relative">
    <img
      src="/images/my-profile.png"
      alt="My Banner"
      className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] object-cover rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
    />
    <div className="flex items-center justify-center mt-4">
      <p className="text-center mb-0 me-3 font-medium">Available to work</p>
      <div className="pulse"></div>
    </div>
  </div>
</div>
        </div>
      </div>
      
    </div>
  </section>
  );
};

export default Banner;
