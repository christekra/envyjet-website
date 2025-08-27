import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Plane, Calendar, MapPin } from 'lucide-react';
import './Pages.css';

const MemberAreaPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      alert('Connexion en cours...');
    } else {
      alert('Inscription en cours...');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="member-area-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Espace Adhérent</h1>
            <p>Accédez à vos réservations et profitez d'offres exclusives</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="member-content">
            <motion.div
              className="member-form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="form-tabs">
                <button
                  className={`tab ${isLogin ? 'active' : ''}`}
                  onClick={() => setIsLogin(true)}
                >
                  <User size={20} />
                  Connexion
                </button>
                <button
                  className={`tab ${!isLogin ? 'active' : ''}`}
                  onClick={() => setIsLogin(false)}
                >
                  <User size={20} />
                  Inscription
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Votre nom complet"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Votre mot de passe"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {!isLogin && (
                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirmez votre mot de passe"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
                <button type="submit" className="btn btn-primary btn-large">
                  {isLogin ? 'Se connecter' : 'S\'inscrire'}
                </button>
              </form>
            </motion.div>

            <motion.div
              className="member-benefits"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Avantages Adhérent</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <Plane size={24} />
                  <div>
                    <h3>Réservations prioritaires</h3>
                    <p>Accès en avant-première aux vols disponibles</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <Calendar size={24} />
                  <div>
                    <h3>Historique des vols</h3>
                    <p>Consultez tous vos voyages passés</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <MapPin size={24} />
                  <div>
                    <h3>Destinations favorites</h3>
                    <p>Sauvegardez vos itinéraires préférés</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberAreaPage;
