import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [counters, setCounters] = useState({ clients: 0, photos: 0, experience: 0, satisfaction: 0 });

  const stats = [
    { key: 'clients', value: 250, suffix: '+', label: 'Clients satisfaites' },
    { key: 'photos', value: 5000, suffix: '+', label: 'Photos créées' },
    { key: 'experience', value: 8, suffix: ' ans', label: 'D\'expérience' },
    { key: 'satisfaction', value: 98, suffix: '%', label: 'De satisfaction' }
  ];

  useEffect(() => {
    if (inView) {
      stats.forEach((stat) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounters(prev => ({ ...prev, [stat.key]: end }));
            clearInterval(counter);
          } else {
            setCounters(prev => ({ ...prev, [stat.key]: Math.floor(start) }));
          }
        }, 16);
      });
    }
  }, [inView]);

  return (
    <section className="section-padding bg-gradient-to-r from-accent to-accent-light text-white">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Des résultats qui parlent
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            La confiance de mes clientes est ma plus belle récompense
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counters[stat.key as keyof typeof counters]}{stat.suffix}
              </div>
              <div className="text-lg opacity-90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 