import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "J'ai été impressionné par les services de rédaction de contenu basés sur l'IA proposés par Alvi. En tant qu'entrepreneur très occupé, j'avais souvent du mal à trouver le temps de créer du contenu de qualité pour mon site web. Cependant, grâce à leur solution basée sur l'IA, j'ai pu générer des articles captivants et bien écrits en quelques minutes.",
      author: {
        name: "Schadrack DUVAN",
        title: "Chef de projet",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
      }
    },
    {
      id: 2,
      text: "J'ai été impressionné par les services de rédaction de contenu basés sur l'IA proposés par Alvi. En tant qu'entrepreneur très occupé, j'avais souvent du mal à trouver le temps de créer du contenu de qualité pour mon site web. Cependant, grâce à leur solution basée sur l'IA, j'ai pu générer des articles captivants et bien écrits en quelques minutes.",
      author: {
        name: "Schadrack DUVAN",
        title: "Chef de projet",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-header">
            <span className="testimonials-badge">TÉMOIGNAGES</span>
            <h2 className="testimonials-title">
              Ce que les gens<br />pensent de nous
            </h2>
            <p className="testimonials-subtitle">
              Leur professionnalisme et leur engagement<br />
              envers notre réussite ont été évidents<br />
              tout au long du processus.
            </p>
          </div>

          <div className="testimonials-slider">
            <div className="testimonial-navigation">
              <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="slider-btn slider-btn-next" onClick={nextSlide}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="testimonials-cards" id="testimonialsCards">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonial-card ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="testimonial-card-content">
                    <p className="testimonial-text">
                      {testimonial.text}
                    </p>
                    <div className="testimonial-author">
                      <img 
                        src={testimonial.author.avatar} 
                        alt={testimonial.author.name} 
                        className="author-avatar"
                      />
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.author.name}</h4>
                        <p className="author-title">{testimonial.author.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;