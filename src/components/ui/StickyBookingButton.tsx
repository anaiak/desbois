import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useAnalytics } from '../../contexts/AnalyticsContext';

const StickyBookingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { trackConversion } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le bouton après avoir scrollé de 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingClick = () => {
    trackConversion('booking');
    window.location.href = '/contact?action=booking';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <button
            onClick={handleBookingClick}
            className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-6 rounded-lg shadow-accent flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="h-5 w-5" />
            <span>Réserver ma séance</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBookingButton; 