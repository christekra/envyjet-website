import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Combien de temps à l'avance dois-je réserver ?",
    answer: "Pour les vols privés, nous recommandons une réservation 24h à l'avance pour garantir la disponibilité. Cependant, nous pouvons organiser des départs en urgence en moins de 2 heures selon la disponibilité."
  },
  {
    question: "Quelles sont les destinations desservies ?",
    answer: "EnvyJet dessert plus de 500 destinations dans le monde entier. De l'Europe à l'Asie, en passant par les Amériques et l'Afrique, nous pouvons vous emmener partout où vous le souhaitez."
  },
  {
    question: "Mes informations restent-elles confidentielles ?",
    answer: "Absolument. La confidentialité de nos clients est notre priorité absolue. Toutes vos informations personnelles et vos déplacements sont protégés par des protocoles de sécurité stricts."
  },
  {
    question: "Quel est le support client disponible ?",
    answer: "Notre équipe est disponible 24h/24 et 7j/7 pour vous accompagner. Vous pouvez nous contacter par téléphone, email ou chat en direct sur notre site web."
  },
  {
    question: "Les vols partagés sont-ils moins chers ?",
    answer: "Oui, les vols partagés permettent de réduire significativement les coûts en partageant les frais entre plusieurs passagers. C'est une excellente option pour les voyages réguliers."
  },
  {
    question: "Que sont les vols à vide ?",
    answer: "Les vols à vide sont des vols de repositionnement d'avions qui peuvent être proposés à des tarifs très attractifs. Ils sont parfaits pour les voyages de dernière minute."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Questions Fréquentes</h2>
          <p className="section-subtitle">
            Trouvez rapidement les réponses à vos questions sur nos services de charter privé.
          </p>
        </motion.div>

        <div className="faq-container">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="faq-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>Vous ne trouvez pas votre réponse ?</p>
          <a href="/contact" className="btn btn-primary">
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
