import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useAnalytics } from '../contexts/AnalyticsContext';

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const { trackConversion } = useAnalytics();

  // Photos du portfolio - Vos vraies images
  const photos: Photo[] = [
    // Portrait Sensuel
    { 
      id: 1, 
      src: '/images/portfolio/1.png', 
      alt: 'Portrait sensuel élégant couple', 
      category: 'sensual' 
    },
    { 
      id: 2, 
      src: '/images/portfolio/2.png', 
      alt: 'Étreinte intime passionnée', 
      category: 'sensual' 
    },
    { 
      id: 3, 
      src: '/images/portfolio/3.png', 
      alt: 'Portrait sensuel artistique', 
      category: 'sensual' 
    },
    
    // Fine Art
    { 
      id: 4, 
      src: '/images/portfolio/4.png', 
      alt: 'Connexion intime fine art', 
      category: 'fineart' 
    },
    { 
      id: 5, 
      src: '/images/portfolio/5.png', 
      alt: 'Art photographique passionné', 
      category: 'fineart' 
    },
    { 
      id: 6, 
      src: '/images/portfolio/6.png', 
      alt: 'Création artistique élégante', 
      category: 'fineart' 
    },
    
    // Élégant
    { 
      id: 7, 
      src: '/images/portfolio/7.png', 
      alt: 'Portrait élégant raffiné', 
      category: 'elegant' 
    },
    { 
      id: 8, 
      src: '/images/portfolio/8.png', 
      alt: 'Élégance intemporelle', 
      category: 'elegant' 
    },
    { 
      id: 9, 
      src: '/images/portfolio/9.png', 
      alt: 'Portrait élégant sophistiqué', 
      category: 'elegant' 
    }
  ];

  const categories = [
    { key: 'all', label: 'Tous' },
    { key: 'sensual', label: 'Sensuel' },
    { key: 'fineart', label: 'Fine Art' },
    { key: 'elegant', label: 'Élégant' }
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    trackConversion('portfolio_view');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Header */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-800 mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes créations artistiques, 
            chaque image raconte une histoire unique de beauté et d'élégance
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`portfolio-filter ${
                  activeFilter === category.key ? 'active' : ''
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Grille portfolio */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-luxury hover:shadow-accent"
                  onClick={() => handlePhotoClick(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal zoom */}
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
              className="relative max-w-4xl max-h-[90vh] m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Schema.org pour le portfolio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Portfolio - Photographie Sensuelle & Fine Art",
            "description": "Galerie de photographies sensuelles et artistiques",
            "url": "https://votre-domaine.com/portfolio"
          })
        }}
      />
    </motion.div>
  );
};

export default Portfolio; 