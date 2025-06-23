import React from 'react';
import { motion } from 'framer-motion';
import { useAnalytics } from '../../contexts/AnalyticsContext';

const BottomBanner: React.FC = () => {
  const { trackConversion } = useAnalytics();

  const handleBookingClick = () => {
    trackConversion('booking');
    window.location.href = '/contact?action=booking';
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-accent to-accent-light text-white py-16 px-4 sm:px-6"
    >
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 px-2">
          Votre séance photo vous attend
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 px-2">
          Ne laissez pas passer cette opportunité de capturer votre essence unique. Places limitées chaque mois.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
          <button
            onClick={handleBookingClick}
            className="bg-white text-accent hover:bg-neutral-100 font-semibold px-8 py-4 rounded-none transition-all duration-300 transform hover:scale-105"
          >
            Réserver maintenant
          </button>
          <a
            href="/portfolio"
            className="border-2 border-white text-white hover:bg-white hover:text-accent font-semibold px-8 py-4 rounded-none transition-all duration-300"
          >
            Voir le portfolio
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default BottomBanner; 