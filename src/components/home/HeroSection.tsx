import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useAnalytics } from '../../contexts/AnalyticsContext';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const { trackConversion } = useAnalytics();
  const ticking = useRef(false);

  // Effet parallax optimisé avec throttling
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    const updateScrollY = () => {
      handleScroll();
      ticking.current = false;
    };

    const requestTick = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollY);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    return () => window.removeEventListener('scroll', requestTick);
  }, [handleScroll]);

  const handleBookingClick = () => {
    trackConversion('booking');
    window.location.href = '/contact?action=booking';
  };

  // Mémoriser l'URL de l'image pour éviter les rechargements
  const backgroundImageUrl = '/images/home.png';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond avec effet parallax optimisé */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
          transform: `translate3d(0, ${scrollY * 0.3}px, 0) scale(1.1)`,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
        }}
      >
        {/* Overlay gradient artistique - Renforcé sur mobile */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/80 md:from-black/50 md:via-black/30 md:to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent md:from-accent/20"></div>
      </div>

      {/* Éléments décoratifs géométriques - Desktop seulement */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rotate-45 hidden lg:block">
        <motion.div
          className="absolute inset-2 border border-accent/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-white/10 rotate-12 hidden lg:block">
        <motion.div
          className="absolute inset-3 bg-accent/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Contenu principal - Optimisé mobile */}
      <div className="relative z-10 text-center text-white px-4 py-8 md:py-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge artistique - Responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-luxury border border-white/20 rounded-full px-4 py-2 mb-6 md:px-6 md:mb-8 text-xs md:text-sm"
          >
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-accent" />
            <span className="font-medium">Photographe Fine Art</span>
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-accent" />
          </motion.div>

          {/* Titre principal - Responsive amélioré */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 md:mb-6 text-shadow-luxury leading-tight"
          >
            <span className="block mb-2">Révélez votre</span>
            <motion.span
              className="text-gradient inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              beauté unique
            </motion.span>
          </motion.h1>

          {/* Sous-titre - Responsive amélioré */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto font-light text-shadow leading-relaxed px-2"
          >
            Photographe spécialisée dans l'art sensuel et élégant, 
            je capture votre essence dans un cadre luxueux et confidentiel
          </motion.p>

          {/* Points de différenciation - Stack vertical sur mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-10 text-xs sm:text-sm md:text-base"
          >
            {[
              'Studio privé & discret',
              'Retouche professionnelle',
              'Coaching personnalisé'
            ].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-luxury rounded-full px-3 py-2 sm:px-4 border border-white/20 mx-auto sm:mx-0 max-w-xs sm:max-w-none"
              >
                <motion.div
                  className="w-2 h-2 bg-accent rounded-full flex-shrink-0"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                <span className="whitespace-nowrap">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA principal - Stack complet sur mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col gap-4 justify-center items-center max-w-sm sm:max-w-none mx-auto"
          >
            {/* Bouton principal - Pleine largeur sur mobile */}
            <motion.button
              onClick={handleBookingClick}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white font-semibold px-8 sm:px-10 py-4 rounded-none transition-all duration-300 shadow-accent text-base sm:text-lg shine-effect relative overflow-hidden min-h-[56px]"
            >
              <span className="relative z-10">Réserver ma séance</span>
            </motion.button>
            
            {/* Bouton secondaire - Pleine largeur sur mobile */}
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-neutral-800 font-semibold px-8 sm:px-10 py-4 rounded-none transition-all duration-300 text-base sm:text-lg backdrop-blur-luxury relative overflow-hidden group min-h-[56px] flex items-center justify-center"
            >
              <span className="relative z-10">Découvrir le portfolio</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur de scroll - Centré avec Flexbox */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col items-center space-y-1 md:space-y-2 text-white/80"
        >
          <span className="text-xs md:text-sm font-light tracking-wider">Découvrez</span>
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <ChevronDown className="h-5 w-5 md:h-6 md:w-6" />
            <motion.div
              className="absolute inset-0 border border-white/30 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 