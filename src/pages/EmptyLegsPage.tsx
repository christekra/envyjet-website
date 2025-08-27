import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

const EmptyLegsPage: React.FC = () => {
  return (
    <div className="empty-legs-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Vols à Vide</h1>
            <p>Profitez de tarifs exceptionnels sur nos vols de repositionnement</p>
          </motion.div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Page en cours de développement</h2>
            <p>Cette page sera bientôt disponible avec toutes les informations sur nos vols à vide.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmptyLegsPage;
