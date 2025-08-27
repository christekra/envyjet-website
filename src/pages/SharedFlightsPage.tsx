import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Calendar, MapPin } from 'lucide-react';
import './Pages.css';

const SharedFlightsPage: React.FC = () => {
  return (
    <div className="shared-flights-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Vols Partagés</h1>
            <p>Économisez sur vos déplacements privés en partageant les coûts</p>
          </motion.div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Page en cours de développement</h2>
            <p>Cette page sera bientôt disponible avec toutes les informations sur nos vols partagés.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SharedFlightsPage;
