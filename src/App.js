import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
     useEffect(() => {
          AOS.init({ duration: 1000 });
        }, []);
  return (
    <div className=''>
      <Header/>
      <Banner/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
