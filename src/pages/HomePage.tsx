import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default HomePage;
