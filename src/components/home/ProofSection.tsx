import React from 'react';
import { motion } from 'framer-motion';

const ProofSection: React.FC = () => {
  // Logos de médias - Version simplifiée avec texte et images
  const logos = [
    { name: 'VOGUE', textColor: 'text-black', weight: 'font-bold' },
    { name: 'ELLE', textColor: 'text-black', weight: 'font-bold' },
    { name: 'MARIE CLAIRE', textColor: 'text-black', weight: 'font-semibold' },
    { name: 'GRAZIA', textColor: 'text-black', weight: 'font-bold' },
    { name: 'FEMME ACTUELLE', textColor: 'text-black', weight: 'font-semibold' },
    { name: 'MADAME FIGARO', textColor: 'text-black', weight: 'font-semibold' },
    { name: 'HARPER\'S BAZAAR', textColor: 'text-black', weight: 'font-bold' },
    { name: 'GLAMOUR', textColor: 'text-black', weight: 'font-bold' }
  ];

  // Dupliquer les logos pour un défilement infini
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative py-8 md:py-12 bg-white border-y border-neutral-100 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-8"
        >
          <p className="text-xs md:text-sm text-neutral-500 font-medium tracking-wider">
            VU DANS LES MÉDIAS
          </p>
        </motion.div>
        
        {/* Carousel infini */}
        <div className="relative h-12 md:h-16 flex items-center">
          <div className="flex media-carousel-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-12 md:h-16 min-w-max"
              >
                <span
                  className={`${logo.textColor} ${logo.weight} text-sm md:text-lg tracking-wider opacity-40 hover:opacity-80 transition-opacity duration-300 font-serif`}
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradients de fondu responsive */}
      <div className="absolute left-0 top-0 w-20 md:w-48 h-full carousel-fade-left z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-20 md:w-48 h-full carousel-fade-right z-10 pointer-events-none"></div>
    </section>
  );
};

export default ProofSection; 