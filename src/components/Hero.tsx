import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, MapPin, Users, Briefcase, Calendar, Search } from 'lucide-react';
import './Hero.css';

interface BookingForm {
  tripType: 'aller' | 'multilet' | 'retour';
  departure: string;
  arrival: string;
  passengers: number;
  luggage: number;
  date: string;
}

const Hero: React.FC = () => {
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    tripType: 'aller',
    departure: '',
    arrival: '',
    passengers: 1,
    luggage: 1,
    date: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (field: keyof BookingForm, value: string | number) => {
    setBookingForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    console.log('Recherche de vol:', bookingForm);
    alert('Recherche en cours... Vols trouvés ! ✈️');
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="hero">
      {/* Arrière-plan avec photo de jet privé */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          {/* Texte principal */}
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Voyagez <span className="highlight">autrement</span>
            </h1>
            <p className="hero-subtitle">
              Charter de jets privés – rapide. sûr. premium.
            </p>
            <p className="hero-description">
              At the heart of your travels. 20 ans d'expérience, 8 800 clients satisfaits.
            </p>

            {/* Statistiques */}
            <div className="hero-stats">
              <div className="stat-item">
                <Plane size={24} color="#d4af37" />
                <span>20 ans d'expertise</span>
              </div>
              <div className="stat-item">
                <Users size={24} color="#d4af37" />
                <span>8 800 clients satisfaits</span>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de réservation */}
          <motion.div 
            className="booking-form-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="booking-form">
              <div className="form-header">
                <h3>Réserver un vol</h3>
                <div className="step-indicator">
                  <span className={`step ${currentStep >= 1 ? 'active' : ''}`}>1</span>
                  <span className={`step ${currentStep >= 2 ? 'active' : ''}`}>2</span>
                  <span className={`step ${currentStep >= 3 ? 'active' : ''}`}>3</span>
                  <span className={`step ${currentStep >= 4 ? 'active' : ''}`}>4</span>
                </div>
              </div>

              <div className="form-content">
                {/* Step 1: Trip Type */}
                {currentStep === 1 && (
                  <div className="form-step">
                    <h4>Type de voyage</h4>
                    <div className="trip-type-options">
                      <button
                        className={`trip-type-btn ${bookingForm.tripType === 'aller' ? 'active' : ''}`}
                        onClick={() => handleInputChange('tripType', 'aller')}
                      >
                        <Plane size={24} />
                        Aller simple
                      </button>
                      <button
                        className={`trip-type-btn ${bookingForm.tripType === 'retour' ? 'active' : ''}`}
                        onClick={() => handleInputChange('tripType', 'retour')}
                      >
                        <Plane size={24} />
                        Aller-retour
                      </button>
                      <button
                        className={`trip-type-btn ${bookingForm.tripType === 'multilet' ? 'active' : ''}`}
                        onClick={() => handleInputChange('tripType', 'multilet')}
                      >
                        <Plane size={24} />
                        Multi-étapes
                      </button>
                    </div>
                    <button className="btn btn-primary btn-large" onClick={nextStep}>
                      Suivant
                    </button>
                  </div>
                )}

                {/* Step 2: Destinations */}
                {currentStep === 2 && (
                  <div className="form-step">
                    <h4>Destinations</h4>
                    <div className="form-group">
                      <label>
                        <MapPin size={20} />
                        Départ
                      </label>
                      <input
                        type="text"
                        placeholder="Aéroport de départ"
                        value={bookingForm.departure}
                        onChange={(e) => handleInputChange('departure', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <MapPin size={20} />
                        Arrivée
                      </label>
                      <input
                        type="text"
                        placeholder="Aéroport d'arrivée"
                        value={bookingForm.arrival}
                        onChange={(e) => handleInputChange('arrival', e.target.value)}
                      />
                    </div>
                    <div className="form-actions">
                      <button className="btn btn-secondary" onClick={prevStep}>
                        Précédent
                      </button>
                      <button className="btn btn-primary" onClick={nextStep}>
                        Suivant
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Passengers & Luggage */}
                {currentStep === 3 && (
                  <div className="form-step">
                    <h4>Passagers et bagages</h4>
                    <div className="form-group">
                      <label>
                        <Users size={20} />
                        Nombre de passagers
                      </label>
                      <div className="number-input">
                        <button onClick={() => handleInputChange('passengers', Math.max(1, bookingForm.passengers - 1))}>
                          -
                        </button>
                        <span>{bookingForm.passengers}</span>
                        <button onClick={() => handleInputChange('passengers', bookingForm.passengers + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        <Briefcase size={20} />
                        Bagages
                      </label>
                      <div className="number-input">
                        <button onClick={() => handleInputChange('luggage', Math.max(0, bookingForm.luggage - 1))}>
                          -
                        </button>
                        <span>{bookingForm.luggage}</span>
                        <button onClick={() => handleInputChange('luggage', bookingForm.luggage + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="form-actions">
                      <button className="btn btn-secondary" onClick={prevStep}>
                        Précédent
                      </button>
                      <button className="btn btn-primary" onClick={nextStep}>
                        Suivant
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Date & Search */}
                {currentStep === 4 && (
                  <div className="form-step">
                    <h4>Date de voyage</h4>
                    <div className="form-group">
                      <label>
                        <Calendar size={20} />
                        Date de départ
                      </label>
                      <input
                        type="date"
                        value={bookingForm.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                      />
                    </div>
                    <div className="form-actions">
                      <button className="btn btn-secondary" onClick={prevStep}>
                        Précédent
                      </button>
                      <button className="btn btn-primary btn-large" onClick={handleSearch}>
                        <Search size={20} />
                        Rechercher
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
