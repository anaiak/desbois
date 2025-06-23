import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';
import { useAnalytics } from '../../contexts/AnalyticsContext';

const PricingPreview: React.FC = () => {
  const { trackConversion } = useAnalytics();

  const packages = [
    {
      id: 1,
      name: 'Découverte',
      price: '350€',
      description: 'Première expérience sensuelle',
      features: [
        '1h de séance',
        '10 photos retouchées',
        'Coaching personnalisé',
        'Galerie privée'
      ],
      popular: false,
      color: 'from-neutral-100 to-neutral-200'
    },
    {
      id: 2,
      name: 'Signature',
      price: '650€',
      description: 'L\'expérience complète',
      features: [
        '2h de séance',
        '25 photos retouchées',
        'Changements de tenues',
        'Maquillage professionnel',
        'Tirage premium inclus'
      ],
      popular: true,
      color: 'from-accent to-accent-dark'
    },
    {
      id: 3,
      name: 'Prestige',
      price: '950€',
      description: 'Création artistique exclusive',
      features: [
        '3h de séance',
        '40 photos retouchées',
        'Concepts multiples',
        'Stylisme complet',
        'Album de luxe',
        'Shooting extérieur'
      ],
      popular: false,
      color: 'from-neutral-800 to-neutral-900'
    }
  ];

  const handleDetailsClick = (packageName: string) => {
    trackConversion('pricing_details_view');
    // Redirection vers page tarifs avec ancre
    window.location.href = `/tarifs#${packageName.toLowerCase()}`;
  };

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6"
          >
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Nos Formules</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Offres & Expériences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Trois expériences uniques conçues pour révéler votre beauté avec élégance et raffinement
          </p>
        </motion.div>

        {/* Grille des 3 cartes tarifaires */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative p-8 rounded-3xl shadow-luxury hover:shadow-accent transition-all duration-500 overflow-visible ${
                pkg.popular 
                  ? 'transform scale-105 z-10' 
                  : 'hover:scale-105'
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} ${
                pkg.popular ? 'opacity-100' : 'opacity-5'
              } rounded-3xl`}></div>
              
              {/* Badge populaire */}
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg z-20"
                >
                  ⭐ Populaire
                </motion.div>
              )}

              <div className={`relative z-10 ${pkg.popular ? 'pt-4' : ''}`}>
                {/* Nom du package */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className={`text-2xl font-serif font-bold mb-2 ${
                    pkg.popular ? 'text-white' : 'text-neutral-800'
                  }`}
                >
                  {pkg.name}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  className={`text-sm mb-6 ${
                    pkg.popular ? 'text-white/90' : 'text-neutral-600'
                  }`}
                >
                  {pkg.description}
                </motion.p>

                {/* Prix */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  className="mb-8"
                >
                  <span className={`text-4xl font-bold ${
                    pkg.popular ? 'text-white' : 'text-accent'
                  }`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm ml-2 ${
                    pkg.popular ? 'text-white/80' : 'text-neutral-500'
                  }`}>
                    TTC
                  </span>
                </motion.div>

                {/* Features */}
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="space-y-3 mb-8"
                >
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.7 + index * 0.2 + featureIndex * 0.1 
                      }}
                      className="flex items-center space-x-3"
                    >
                      <Check className={`h-5 w-5 ${
                        pkg.popular ? 'text-white' : 'text-accent'
                      }`} />
                      <span className={`text-sm ${
                        pkg.popular ? 'text-white/90' : 'text-neutral-700'
                      }`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA Détails */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDetailsClick(pkg.name)}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    pkg.popular
                      ? 'bg-white text-accent hover:bg-neutral-100'
                      : 'bg-accent text-white hover:bg-accent-dark'
                  }`}
                >
                  <span>Voir les détails</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Effet de brillance */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA vers page tarifs complète */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="/tarifs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 text-accent hover:text-accent-dark font-semibold transition-colors duration-300"
          >
            <span>Comparer toutes les formules</span>
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview; 