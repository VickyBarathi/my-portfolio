import React from 'react';

const About = () => {
 
  return (
    <section className="w-full py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4">
       <h2 className='text-center text-2xl font-semibold mb-3'data-aos="fade-down">Projects</h2>
      <p className='text-center mb-6' data-aos="fade-up">"I’m a frontend developer with [X] years of experience turning design concepts into interactive, pixel-perfect web experiences. I have a passion for UI/UX design, performance optimization, and writing clean, reusable code."</p>
              <div className='grid grid-cols-12 mt-3 text-center justify-center flex gap-5'>
              <div className='col-span-12 md:col-span-6' data-aos="fade-right">
                      <div class="bg-white border-none rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700">
                          
                              <img class="rounded-t-lg w-100 h-[345px] border-none" src="/images/tax-filing.jpg" alt="" />
                         
                          <div class="p-5">
                            
                                  <h5 class="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">TaxBandits</h5>
                              
                            
                              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">TaxBandits is the leading e-file provider for Payroll and Employment forms, and BOI Reporting, offering business owners, tax professionals, and service providers of all sizes a comprehensive solution for maintaining compliance. This includes Forms 1099, W-2, and more!</p>
                              <div>
                             <span className='bg-html text-xxs rounded-full px-3 text-white py-1 opacity-75'>
                                 HTML
                              </span>
                              <span className='bg-css text-xxs rounded-full px-3 ms-3 text-white py-1 opacity-75'>
                                 CSS
                              </span>
                              <span className='bg-bs text-xxs rounded-full px-3 ms-3 text-white py-1 opacity-75'>
                                 Bootsrtap 5
                              </span>
                              <span className='bg-sass text-xxs rounded-full px-3 ms-3 text-white py-1 opacity-75'>
                                 SASS
                              </span>
                              <span className='bg-js text-xxs rounded-full px-3 ms-3 py-1 opacity-75'>
                                 Javascript
                              </span>
                              
                             </div>
                          </div>
                      </div>

                  </div>
                  <div className='col-span-12 md:col-span-6' data-aos="fade-left">
                      <div class="bg-white border-none rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700">
                         
                              <img class="rounded-t-lg w-100  border-none" src="/images/truck.jpg" alt="" />
                          
                          <div class="p-5">
                             
                                  <h5 class="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">Trucklogics</h5>
                              
                              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">TruckLogics is a web-based transportation management software designed to help trucking businesses of all sizes streamline their operations. It offers a suite of tools for dispatching, driver management, accounting, IFTA reporting, and more.</p>

                             <div>
                             <span className='bg-html text-xxs rounded-full px-3 text-white py-1 opacity-75'>
                                 HTML
                              </span>
                              <span className='bg-css text-xxs rounded-full px-3 ms-3 text-white py-1 opacity-75'>
                                 CSS
                              </span>
                              <span className='bg-bs text-xxs rounded-full px-3 ms-3 text-white py-1 opacity-75'>
                                 Bootsrtap 5
                              </span>
                              <span className='bg-sass text-xxs rounded-full px-3 ms-3 text-white py-1 opacity-75'>
                                 SASS
                              </span>
                              <span className='bg-js text-xxs rounded-full px-3 ms-3 py-1 opacity-75'>
                                 Javascript
                              </span>
                              <span className='bg-react text-xxs rounded-full px-3 ms-3 py-1 opacity-75'>
                                 React JS
                              </span>
                             </div>
                          </div>
                      </div>

                  </div>
              </div>
    </div>
  </section>
  );
};

export default About;
