import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Heart, Camera } from 'lucide-react';

const USPSection: React.FC = () => {
  const usps = [
    {
      icon: Shield,
      title: 'Confidentialité Absolue',
      description: 'Studio privé et discret, respect total de votre intimité et de vos attentes.'
    },
    {
      icon: Award,
      title: 'Excellence Artistique',
      description: 'Plus de 8 années d\'expérience dans la photographie fine art et sensuelle.'
    },
    {
      icon: Heart,
      title: 'Approche Bienveillante',
      description: 'Coaching personnalisé pour vous mettre à l\'aise et révéler votre beauté naturelle.'
    },
    {
      icon: Camera,
      title: 'Qualité Premium',
      description: 'Équipement professionnel et retouche artistique pour des images d\'exception.'
    }
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Pourquoi me choisir ?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Une expérience unique alliant art, élégance et respect dans un cadre luxueux
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group hover-lift h-full"
            >
              <div className="bg-white p-8 rounded-lg shadow-luxury hover:shadow-accent transition-all duration-300 h-full flex flex-col">
                <div className="mb-6">
                  <usp.icon className="h-12 w-12 text-accent mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                  {usp.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed flex-grow">
                  {usp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection; 