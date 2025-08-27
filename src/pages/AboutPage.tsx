import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Lock, Star, Users, Award, CheckCircle } from 'lucide-react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Sécurité Avant Tout',
      description: 'Nos équipages sont hautement qualifiés et nos avions respectent les normes de sécurité les plus strictes.'
    },
    {
      icon: Clock,
      title: 'Rapidité d\'Exécution',
      description: 'Nous organisons vos départs en moins de 2 heures sur demande, pour répondre à vos urgences.'
    },
    {
      icon: Lock,
      title: 'Confidentialité Totale',
      description: 'Vos informations et vos déplacements restent strictement confidentiels et protégés.'
    },
    {
      icon: Star,
      title: 'Service Premium',
      description: 'Un service personnalisé et un confort exceptionnel pour chaque voyage.'
    }
  ];

  const achievements = [
    '20 ans d\'expérience dans le charter privé',
    '8 800 clients satisfaits',
    'Plus de 500 destinations desservies',
    'Support client 24h/24 et 7j/7',
    'Équipages certifiés et expérimentés',
    'Flotte d\'avions modernes et sécurisés'
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Pourquoi Choisir EnvyJet ?</h1>
            <p className="hero-subtitle">
              Votre partenaire de confiance pour tous vos déplacements privés depuis 20 ans
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Nos Valeurs</h2>
            <p className="section-subtitle">
              Découvrez les principes qui guident chacune de nos actions
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon">
                  <value.icon size={40} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Notre Histoire</h2>
              <p>
                Fondée en 2004, EnvyJet est née de la vision d'offrir une expérience de voyage 
                privé exceptionnelle, combinant luxe, sécurité et efficacité. Depuis plus de 
                20 ans, nous avons accompagné plus de 8 800 clients dans leurs déplacements 
                les plus importants.
              </p>
              <p>
                Notre expertise s'est construite sur des valeurs fondamentales : la sécurité 
                avant tout, la confidentialité absolue, et un service personnalisé de qualité 
                premium. Chaque vol est une promesse d'excellence que nous tenons avec fierté.
              </p>
            </motion.div>
            
            <motion.div
              className="story-stats"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stat-card">
                <div className="stat-number">20</div>
                <div className="stat-label">ans d'expérience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8 800</div>
                <div className="stat-label">clients satisfaits</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">destinations</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Nos Réalisations</h2>
            <p className="section-subtitle">
              Une expertise reconnue et des résultats qui parlent d'eux-mêmes
            </p>
          </motion.div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                className="achievement-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle size={24} className="achievement-icon" />
                <span>{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Prêt à Voyager avec EnvyJet ?</h2>
            <p>Découvrez l'excellence du voyage privé</p>
            <div className="cta-buttons">
              <a href="/" className="btn btn-primary btn-large">
                Réserver un Vol
              </a>
              <a href="/contact" className="btn btn-secondary btn-large">
                Nous Contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
