import React from 'react';
import { motion } from 'framer-motion';

// Import des sections dans l'ordre du plan
import HeroSection from '../components/home/HeroSection';
import ProofSection from '../components/home/ProofSection';
import MiniPortfolio from '../components/home/MiniPortfolio';
import ManifestoSection from '../components/home/ManifestoSection';
import PricingPreview from '../components/home/PricingPreview';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StatsSection from '../components/home/StatsSection';
import USPSection from '../components/home/USPSection';
import StickyBookingButton from '../components/ui/StickyBookingButton';
import BottomBanner from '../components/ui/BottomBanner';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* 1. Hero plein écran */}
      <HeroSection />

      {/* 2. Preuve sociale instantanée */}
      <ProofSection />

      {/* 3. Mini-portfolio ("best-of") */}
      <MiniPortfolio />

      {/* 4. Upside statement / Manifesto */}
      <ManifestoSection />

      {/* 5. Offres & packs résumé */}
      <PricingPreview />

      {/* 6. Processus en 3 étapes */}
      <ProcessSection />

      {/* 7. Témoignages carrousel */}
      <TestimonialsSection />

      {/* 8. Compteur animé */}
      <StatsSection />

      {/* 9. Section "À propos express" */}
      <USPSection />

      {/* 10. FAQ condensée (3 questions) - TODO: Créer composant */}
      {/* 11. Bandes CTA récurrentes - Intégrées via composants UI */}
      {/* 12. Galerie Instagram temps réel - TODO: Optionnel */}
      {/* 13. Formulaire contact rapide - TODO: Créer composant */}
      {/* 14. Footer premium - Déjà dans layout */}

      {/* Composants UI transversaux */}
      <StickyBookingButton />
      <BottomBanner />
    </motion.div>
  );
};

export default Home; 