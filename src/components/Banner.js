import React from 'react';

const Banner = () => {
 
  return (
    <section className="w-full py-16 bg-gray-100 pt-44" id="home">
    <div className="max-w-7xl mx-auto px-4"> 
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2 grid grid-cols-10 gap-4 items-center">
        {/* Left Column */}
        <div className='col-span-12 md:col-span-6 mx-auto' data-aos="fade-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
         Hi, I'm Barathi   👋
          </h1>
          <p className="text-lg text-gray-700 mb-2">
          Frontend Developer | 5 years of experiences 🚀
          </p>
          <p>I build pixel-perfect, engaging, and accessible digital experiences.  </p>
                        <div className='grid grid-cols-3 gap-4 items-center mt-5'>
                          <div className='flex items-center'>
                              <div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="30"
                                      height="30"
                                      viewBox="0 0 48 48"
                                     
                                  >
                                      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
                                      <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
                                      <path
                                          fill="#FFF"
                                          d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                                      />
                                      <path
                                          fill="#EEE"
                                          d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                                      />
                                  </svg>
                              </div>
                              <div>
                                  <p className='mb-0 ms-2 text-gray-700'>HTML</p>
                              </div>
                          </div>
                          <div className='flex items-center'>
                              <div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="30"
                                      height="30"
                                      viewBox="0 0 48 48"
                                      
                                  >
                                      <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5z" />
                                      <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
                                      <path
                                          fill="#FFF"
                                          d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                                      />
                                      <path
                                          fill="#EEE"
                                          d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                                      />
                                  </svg>
                              </div>
                              <div>
                                  <p className='mb-0 ms-2 text-gray-700'>CSS</p>
                              </div>
                          </div>
                        </div>
                        <div className='grid grid-cols-3 item-center mt-5'>
                        <div className='flex items-center'>
                              <div>
                                  <img src="/images/bootstrap-logo.svg" className='w-7 h-6' />
                              </div>
                              <div>
                                  <p className='mb-0 ms-2 text-gray-700'>Bootstrap</p>
                              </div>
                          </div>
                          <div className='flex items-center'>
                              <div>
                                  <img src="/images/sass-logo.png" className='w-7 h-7' />

                              </div>
                              <div>
                                  <p className='mb-0 ms-2 text-gray-700'>SASS</p>
                              </div>
                          </div>
                        </div>
         
                        <div className='grid grid-cols-3 mt-5 items-center'>
                        <div className='flex items-center'>
                              <div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="30"
                                      height="20"
                                      viewBox="0 0 48 48"
                                      
                                  >
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
                              </div>
                              <div>
                                  <p className='mb-0 ms-2 text-gray-700'>Tailwind</p>
                              </div>
                        </div>
                        
                        <div className='flex items-center'>
                              <div>
                                  <svg
                                      className="h-6 w-6"
                                      viewBox="0 0 630 630"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <rect width="630" height="630" fill="#f7df1e" />
                                      <path d="M423 492c13 21 30 36 60 36 25 0 41-12 41-29 0-20-16-27-44-39l-15-6c-44-19-73-43-73-93 0-46 35-81 90-81 39 0 67 14 87 52l-48 31c-10-18-21-25-39-25s-30 10-30 25c0 17 12 24 39 34l15 6c51 22 80 45 80 96 0 55-43 85-101 85-57 0-94-27-112-63zm-209 6c10 18 20 33 43 33 22 0 36-9 36-44V290h60v199c0 62-36 90-88 90-47 0-75-24-89-53z" />
                                  </svg>
                              </div>
                              <div>
                                  <p className='mb-0 ms-3 text-gray-700'>JavaScript</p>
                              </div>
                        </div>
                          
                        </div>  

                        <div className='grid grid-cols-3 mt-5 items-center'>                     
                         
                          <div className='flex items-center'>
                              <div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="30"
                                      height="30"
                                      viewBox="0 0 48 48"
                                     
                                  >
                                      <path
                                          fill="#80deea"
                                          d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                                      />
                                      <path
                                          fill="#80deea"
                                          d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5
      c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z 
      M32.9,5.4c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3
      c3.4-2.7,6.9-6.9,9.8-11.9c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                                      />
                                      <path
                                          fill="#80deea"
                                          d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19
      c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z 
      M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4
      C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                                      />
                                      <circle cx="24" cy="24" r="4" fill="#80deea" />
                                  </svg>
                              </div>
                              <div>
                                  <p className='mb-0 ms-2 text-gray-700'>React</p>
                              </div>
                          </div>
                          <div className='flex items-center'>
                              <div>
                                  <img src="/images/figma-logo.png" className='w-7 h-7' />
                              </div>
                              <div>
                                  <p className='mb-0 ms-2 text-gray-700'>Figma</p>
                              </div>
                          </div>
                        </div>  
               
        </div>

        {/* Right Column */}
        <div className="col-span-3 hidden md:block mx-auto" data-aos="fade-right">
          <img
            src="/images/my-profile.png"
            alt="My Banner"
            className="w-25 h-25 rounded-3xl shadow-xl"
          />
          <div className='flex items-center justify-center mt-3  rounded-full'>
          <p className='text-center mb-0 me-3 font-medium '>Available to work </p>
                          <div class="pulse">
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
