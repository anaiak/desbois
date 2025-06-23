import React from 'react';
import { motion } from 'framer-motion';

const ManifestoSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-light rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge philosophie */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-12 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-medium tracking-wider">MA PHILOSOPHIE</span>
            <div className="w-2 h-2 bg-accent rounded-full"></div>
          </motion.div>

          {/* Manifesto principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-tight">
              La{' '}
              <motion.span
                className="text-accent font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                sensualité élégante
              </motion.span>
              {' '}n'est pas une pose,
              <br />
              c'est une{' '}
              <motion.span
                className="text-accent font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                révélation
              </motion.span>
              {' '}de votre essence.
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-xl md:text-2xl font-serif font-light text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Chaque femme porte en elle une{' '}
              <span className="text-accent font-medium">beauté unique</span>
              {' '}qui ne demande qu'à être sublimée avec respect et{' '}
              <span className="text-accent font-medium">raffinement</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 2 }}
              className="text-lg md:text-xl font-serif font-light text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Mon art consiste à capturer cette{' '}
              <span className="text-accent font-medium">authenticité</span>
              {' '}dans un écrin de lumière et d'émotion.
            </motion.p>
          </motion.div>

          {/* Signature artistique */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="mt-16"
          >
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent"></div>
              <div className="text-accent font-serif text-2xl font-light italic">
                Votre Nom
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent"></div>
            </div>
            <p className="text-white/60 text-sm mt-2 font-light tracking-wider">
              Photographe Fine Art
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Particules flottantes subtiles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ManifestoSection; 