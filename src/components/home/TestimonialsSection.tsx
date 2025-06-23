import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  // Témoignages clients - Remplacez par vos vrais témoignages
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      text: 'Une expérience absolument magique ! L\'approche bienveillante et professionnelle m\'a mise en confiance immédiatement. Les photos sont sublimes, elles révèlent une beauté que je ne me connaissais pas.',
      rating: 5,
      service: 'Portrait Sensuel'
    },
    {
      id: 2,
      name: 'Emma L.',
      text: 'Un moment hors du temps dans un cadre luxueux et discret. Le coaching personnalisé et les conseils m\'ont permis de me sentir à l\'aise. Le résultat dépasse toutes mes attentes !',
      rating: 5,
      service: 'Séance Fine Art'
    },
    {
      id: 3,
      name: 'Julie R.',
      text: 'Professionnalisme, élégance et respect. Cette séance m\'a redonné confiance en moi. Les photos sont d\'une qualité exceptionnelle, un vrai travail d\'artiste !',
      rating: 5,
      service: 'Portrait Élégant'
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
            Témoignages
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            La satisfaction de mes clientes est ma plus belle récompense. 
            Découvrez leurs expériences uniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-luxury hover:shadow-accent hover-lift relative"
            >
              {/* Icône quote */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-accent/20" />
              </div>

              {/* Étoiles */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Témoignage */}
              <p className="text-neutral-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Auteur et service */}
              <div className="border-t border-neutral-200 pt-4">
                <p className="font-semibold text-neutral-800 mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm text-accent font-medium">
                  {testimonial.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 