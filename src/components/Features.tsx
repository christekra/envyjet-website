import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Star, Plane, Award, Zap, Heart, Globe, Crown } from 'lucide-react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Sécurité Maximale',
      description: 'Certification internationale et équipages expérimentés pour votre tranquillité d\'esprit.',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      icon: Clock,
      title: 'Rapidité Exceptionnelle',
      description: 'Décollage en 2h maximum, pas d\'attente, pas de contraintes horaires.',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
    },
    {
      icon: Heart,
      title: 'Service Personnalisé',
      description: 'Conciergerie 24/7, menus sur mesure, configuration selon vos préférences.',
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
    },
    {
      icon: Crown,
      title: 'Confort Premium',
      description: 'Cabines luxueuses, sièges convertibles en lits, équipements de dernière génération.',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      icon: Globe,
      title: 'Flexibilité Totale',
      description: 'Départ et arrivée selon vos horaires, destinations sur mesure.',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
    },
    {
      icon: Award,
      title: 'Excellence Reconnue',
      description: '20 ans d\'expérience, 8 800 clients satisfaits, certifications internationales.',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    }
  ];

  const stats = [
    { number: '20', label: 'Ans d\'expérience', icon: Award, color: '#8b5cf6' },
    { number: '8800', label: 'Clients satisfaits', icon: Users, color: '#ef4444' },
    { number: '150+', label: 'Destinations', icon: Plane, color: '#3b82f6' },
    { number: '24/7', label: 'Support client', icon: Clock, color: '#10b981' }
  ];

  return (
    <section className="features">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Pourquoi Choisir EnvyJet ?</h2>
          <p className="section-subtitle">
            Découvrez les avantages qui font d'EnvyJet votre partenaire de confiance pour tous vos déplacements privés.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="feature-icon-container">
                <motion.div 
                  className="feature-icon"
                  style={{ background: feature.gradient }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon size={32} color="white" />
                </motion.div>
                <motion.div 
                  className="feature-particles"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="particle"
                      style={{ background: feature.color }}
                      animate={{
                        x: [0, Math.cos(i * 60 * Math.PI / 180) * 20],
                        y: [0, Math.sin(i * 60 * Math.PI / 180) * 20],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3 + index * 0.1
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <motion.div 
                  className="feature-highlight"
                  style={{ background: feature.gradient }}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="stats-title">Nos Chiffres Clés</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="stat-icon"
                  style={{ color: stat.color }}
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <stat.icon size={32} />
                </motion.div>
                <motion.div 
                  className="stat-number"
                  style={{ color: stat.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
                <motion.div 
                  className="stat-glow"
                  style={{ background: stat.color }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
