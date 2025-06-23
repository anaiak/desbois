import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown } from 'lucide-react';
import { useAnalytics } from '../contexts/AnalyticsContext';

const Pricing: React.FC = () => {
  const { trackConversion } = useAnalytics();

  const pricingPlans = [
    {
      name: 'Découverte',
      price: '350',
      duration: '1h30',
      icon: Star,
      description: 'Parfait pour une première expérience',
      features: [
        'Séance photo 1h30',
        'Consultation préparatoire',
        '3 photos retouchées HD',
        'Galerie privée en ligne',
        'Conseils styling inclus'
      ],
      popular: false
    },
    {
      name: 'Signature',
      price: '650',
      duration: '2h30',
      icon: Crown,
      description: 'L\'expérience complète recommandée',
      features: [
        'Séance photo 2h30',
        'Consultation approfondie',
        '8 photos retouchées HD',
        'Galerie privée premium',
        'Coaching personnalisé',
        'Shooting 2 tenues',
        'Retouches artistiques'
      ],
      popular: true
    },
    {
      name: 'Prestige',
      price: '950',
      duration: '3h',
      icon: Crown,
      description: 'L\'excellence absolue',
      features: [
        'Séance photo 3h',
        'Consultation VIP',
        '15 photos retouchées HD',
        'Galerie premium illimitée',
        'Coaching expert',
        'Shooting 3 tenues',
        'Retouches artistiques avancées',
        'Maquillage professionnel',
        'Album photo luxury'
      ],
      popular: false
    }
  ];

  const handleBookingClick = (planName: string) => {
    trackConversion('booking');
    window.location.href = `/contact?action=booking&plan=${planName}`;
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-800 mb-6">
              Tarifs & Offres
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choisissez l'expérience qui vous correspond. Toutes nos séances incluent 
              un accompagnement personnalisé dans un cadre luxueux et confidentiel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cartes tarifaires */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-lg shadow-luxury hover:shadow-accent transition-all duration-300 overflow-hidden ${
                  plan.popular ? 'ring-2 ring-accent transform scale-105' : ''
                }`}
              >
                {/* Badge populaire */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-2 text-sm font-semibold">
                    Le plus populaire
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  {/* Icône et nom */}
                  <div className="text-center mb-6">
                    <plan.icon className={`h-12 w-12 mx-auto mb-4 ${plan.popular ? 'text-accent' : 'text-neutral-600'}`} />
                    <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-neutral-600">{plan.description}</p>
                  </div>

                  {/* Prix */}
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-neutral-800 mb-2">
                      {plan.price}€
                    </div>
                    <div className="text-neutral-600">
                      Séance {plan.duration}
                    </div>
                  </div>

                  {/* Fonctionnalités */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleBookingClick(plan.name)}
                    className={`w-full py-4 px-6 rounded-none font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-accent hover:bg-accent-dark text-white shadow-accent'
                        : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                    }`}
                  >
                    Réserver cette séance
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-serif font-bold text-neutral-800 text-center mb-12">
              Ce qui est inclus dans toutes nos séances
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-2">Studio Privé</h3>
                    <p className="text-neutral-600">Espace luxueux et totalement confidentiel</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-2">Consultation Gratuite</h3>
                    <p className="text-neutral-600">Échange de 15 minutes avant la séance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-2">Retouches Professionnelles</h3>
                    <p className="text-neutral-600">Post-traitement artistique de qualité</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-2">Galerie Privée</h3>
                    <p className="text-neutral-600">Accès sécurisé à vos photos en ligne</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-2">Coaching Personnalisé</h3>
                    <p className="text-neutral-600">Accompagnement pour vous mettre à l'aise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-2">Conseils Styling</h3>
                    <p className="text-neutral-600">Recommandations vestimentaires personnalisées</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-luxury">
              <p className="text-neutral-600 mb-4">
                <strong>Facilités de paiement :</strong> Possibilité de règlement en 2 ou 3 fois sans frais
              </p>
              <p className="text-sm text-neutral-500">
                Acompte de 30% à la réservation - Solde le jour de la séance
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing; 