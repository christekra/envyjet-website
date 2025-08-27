import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('Merci pour votre inscription à notre newsletter !');
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <Plane className="logo-icon" />
              <span className="logo-text">EnvyJet</span>
            </div>
            <p className="footer-description">
              Votre partenaire de confiance pour tous vos déplacements privés. 
              Rapidité, sécurité et confidentialité depuis 20 ans.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Nos Services</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Charter Privé</Link>
              </li>
              <li>
                <Link to="/vols-partages">Vols Partagés</Link>
              </li>
              <li>
                <Link to="/vols-a-vide">Vols à Vide</Link>
              </li>
              <li>
                <Link to="/pourquoi-envyjet">Pourquoi EnvyJet</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/espace-adherent">Espace Adhérent</Link>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#">Support 24/7</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>contact@envyjet.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section newsletter-section">
            <h3>Newsletter</h3>
            <p>Recevez nos offres exclusives et actualités</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-input">
                <input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-btn">
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 EnvyJet. Tous droits réservés.</p>
            <div className="footer-bottom-links">
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
              <a href="#">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
