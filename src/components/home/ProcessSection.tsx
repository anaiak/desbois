import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Camera, Sparkles } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: MessageCircle,
      title: 'Consultation',
      description: 'Échange personnalisé pour définir vos attentes et créer le concept parfait',
      duration: '30min',
      color: 'from-accent/20 to-accent/10'
    },
    {
      id: 2,
      icon: Camera,
      title: 'Séance Photo',
      description: 'Coaching bienveillant dans un cadre luxueux et totalement confidentiel',
      duration: '1-3h',
      color: 'from-accent/30 to-accent/20'
    },
    {
      id: 3,
      icon: Sparkles,
      title: 'Livraison',
      description: 'Retouche artistique et galerie privée avec vos plus belles créations',
      duration: '7-10j',
      color: 'from-accent/40 to-accent/30'
    }
  ];

  return (
    <section className="section-padding bg-white">
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
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-medium text-accent">Processus Simple</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            En 3 Étapes Seulement
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Un processus pensé pour votre confort et des résultats exceptionnels
          </p>
        </motion.div>

        {/* Timeline horizontale */}
        <div className="relative">
          {/* Ligne de connexion */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 transform -translate-y-1/2 z-0"></div>
          
          {/* Étapes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Carte étape */}
                <div className="bg-white rounded-3xl p-8 shadow-luxury hover:shadow-accent transition-all duration-500 border border-neutral-100 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Numéro d'étape */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                      className="absolute -top-4 -right-4 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                    >
                      {step.id}
                    </motion.div>

                    {/* Icône */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center mb-6 shadow-accent group-hover:scale-110 transition-transform duration-300"
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Titre */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                      className="text-2xl font-serif font-bold text-neutral-800 mb-3"
                    >
                      {step.title}
                    </motion.h3>

                    {/* Durée */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                      className="inline-flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4"
                    >
                      {step.duration}
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                      className="text-neutral-600 leading-relaxed"
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Effet de brillance */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Flèche de connexion (desktop seulement) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                  >
                    <div className="w-8 h-8 bg-white border-2 border-accent rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-neutral-600 mb-6"
          >
            Prête à vivre cette expérience unique ?
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-accent"
          >
            Commencer ma consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection; 