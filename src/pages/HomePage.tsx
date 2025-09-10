import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Partner from '../components/Partner';
import FAQ from '../components/FAQ';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Partner />
      <FAQ />
    </div>
  );
};

export default HomePage;
