import React from 'react';
import HeroSection from './Home/HeroSection';
import WhyChoose from './Home/WhyChoose';
import Features from './Home/Features';
import Pricing from './Home/Pricing';
import Contact from './Home/Contact';
import Footer from './Home/Footer';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyChoose />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
