import React from 'react';
import './Partner.css';

const Partner: React.FC = () => {
  return (
    <section className="partner-section">
      <div className="partner-container">
        <div className="partner-content">
          <div className="partner-image">
            <img src="/api/placeholder/400/300" alt="Tinitz Awards" />
          </div>
          <div className="partner-text">
            <div className="partner-logo">
              <span className="logo-text">COP</span>
            </div>
            <h2>Un partenariat qui fait la différence</h2>
            <p>
              Nous croyons que la réussite passe par la collaboration. Associez vos idées 
              à notre savoir-faire digital pour créer des solutions puissantes et sur mesure.
            </p>
            <div className="partner-features">
              <h3>Un accompagnement complet et personnalisé</h3>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Innovation continue</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Résultats concrets</span>
                </div>
              </div>
            </div>
            <div className="partner-buttons">
              <button className="btn-primary">
                <span className="btn-icon">👤</span>
                Demander un devis
              </button>
              <button className="btn-secondary">
                <span className="btn-icon">📞</span>
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;