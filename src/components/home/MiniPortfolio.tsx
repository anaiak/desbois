import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Camera, Eye, X } from 'lucide-react';
import { useAnalytics } from '../../contexts/AnalyticsContext';

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
  description: string;
  height: string; // Pour effet masonry
}

const MiniPortfolio: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const { trackConversion } = useAnalytics();
  const ticking = useRef(false);

  // Mémorisation des photos pour éviter les re-créations
  const featuredPhotos: Photo[] = useMemo(() => [
    {
      id: 1,
      src: '/images/portfolio/1.png',
      alt: 'Portrait sensuel élégant couple',
      category: 'Portrait Sensuel',
      description: 'Élégance naturelle',
      height: 'h-80'
    },
    {
      id: 2,
      src: '/images/portfolio/2.png',
      alt: 'Étreinte intime passionnée',
      category: 'Fine Art',
      description: 'Art & Créativité',
      height: 'h-96'
    },
    {
      id: 3,
      src: '/images/portfolio/3.png',
      alt: 'Portrait sensuel artistique',
      category: 'Élégance',
      description: 'Intemporel & Chic',
      height: 'h-72'
    },
    {
      id: 4,
      src: '/images/portfolio/4.png',
      alt: 'Connexion intime fine art',
      category: 'Lumière Naturelle',
      description: 'Beauté authentique',
      height: 'h-88'
    },
    {
      id: 5,
      src: '/images/portfolio/5.png',
      alt: 'Art photographique passionné',
      category: 'Créatif',
      description: 'Vision artistique',
      height: 'h-84'
    },
    {
      id: 6,
      src: '/images/portfolio/6.png',
      alt: 'Création artistique élégante',
      category: 'Conceptuel',
      description: 'Expression pure',
      height: 'h-76'
    },
    {
      id: 7,
      src: '/images/portfolio/7.png',
      alt: 'Portrait intime sensuel',
      category: 'Intimité',
      description: 'Connexion profonde',
      height: 'h-90'
    }
  ], []);

  // Effet parallax optimisé avec throttling et RAF
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

  const handlePortfolioClick = useCallback(() => {
    trackConversion('portfolio_view');
  }, [trackConversion]);

  const handlePhotoClick = useCallback((photo: Photo) => {
    setSelectedPhoto(photo);
    trackConversion('portfolio_modal_view');
  }, [trackConversion]);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Éléments décoratifs avec parallax réduit */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-accent/10 rounded-full hidden lg:block"
        style={{
          transform: `translate3d(0, ${scrollY * 0.02}px, 0)`,
          willChange: 'transform'
        }}
      >
        <motion.div
          className="absolute inset-4 border border-accent/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Badge décoratif */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6"
          >
            <Camera className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Best-Of Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6 text-shadow-luxury">
            Mon Style
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Découvrez ma signature artistique à travers une sélection de mes créations les plus emblématiques
          </p>
        </motion.div>

        {/* Grille masonry optimisée */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mb-16">
          {featuredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid mb-6 group relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-accent hover-lift card-artistic cursor-pointer"
              onClick={() => handlePhotoClick(photo)}
              style={{
                transform: `translate3d(0, ${scrollY * 0.005 * (index % 2 === 0 ? 1 : -1)}px, 0)`,
                willChange: 'transform'
              }}
            >
              {/* Image avec lazy loading optimisé */}
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full ${photo.height} object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110`}
                  loading="lazy"
                  decoding="async"
                  style={{
                    willChange: 'transform, filter',
                    backfaceVisibility: 'hidden'
                  }}
                />
                
                {/* Overlay avec glassmorphisme */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 backdrop-blur-sm"></div>
                </div>

                {/* Contenu overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center space-x-2 mb-2">
                    <Eye className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-accent">{photo.category}</span>
                  </div>
                  <p className="text-lg font-semibold mb-1">{photo.description}</p>
                  <p className="text-sm text-white/80">Cliquez pour agrandir</p>
                </div>

                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Indicateur zoom */}
              <motion.div
                className="absolute top-4 right-4 w-10 h-10 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Eye className="h-4 w-4 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA vers portfolio complet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <motion.a
            href="/portfolio"
            onClick={handlePortfolioClick}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-5 rounded-2xl transition-all duration-300 transform shadow-accent shine-effect relative overflow-hidden group"
          >
            <span className="relative z-10">Voir tout le portfolio</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative z-10"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>

      {/* Modal zoom optimisée */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 bg-accent/80 text-white p-3 rounded-full hover:bg-accent transition-colors backdrop-blur-sm"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain rounded-lg shadow-luxury max-h-[90vh]"
                style={{
                  willChange: 'auto',
                  backfaceVisibility: 'hidden'
                }}
              />
              <div className="absolute bottom-4 left-4 text-white bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold">{selectedPhoto.description}</p>
                <p className="text-sm opacity-80">{selectedPhoto.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MiniPortfolio;

 