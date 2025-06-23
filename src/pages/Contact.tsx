import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { useAnalytics } from '../contexts/AnalyticsContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const { trackConversion } = useAnalytics();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<FormData>();

  useEffect(() => {
    // Détection si c'est une demande de réservation
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('action') === 'booking') {
      setIsBooking(true);
    }
  }, []);

  const onSubmit = async (data: FormData) => {
    // Simulation d'envoi - Remplacez par votre logique d'envoi
    console.log('Formulaire soumis:', data);
    
    // Tracking de conversion
    trackConversion('contact');
    
    // Simulation d'une requête
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    reset();
  };

  const services = [
    'Séance Portrait Sensuel',
    'Séance Fine Art',
    'Séance Élégante',
    'Séance Couple',
    'Autre demande'
  ];

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
            {isBooking ? 'Réserver une séance' : 'Contact'}
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {isBooking 
              ? 'Prête à vivre une expérience photographique unique ? Parlons de votre projet ensemble.'
              : 'Une question ? Un projet ? N\'hésitez pas à me contacter, je vous réponds rapidement.'
            }
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-neutral-700 font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      {...register('name', { required: 'Le nom est requis' })}
                      className="form-field"
                      placeholder="Votre nom"
                    />
                    {errors.name && <p className="form-error">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'L\'email est requis',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email invalide'
                        }
                      })}
                      className="form-field"
                      placeholder="votre@email.com"
                    />
                    {errors.email && <p className="form-error">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="form-field"
                      placeholder="+33 X XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-medium mb-2">
                      Type de séance
                    </label>
                    <select
                      {...register('service', { required: 'Veuillez choisir un service' })}
                      className="form-field"
                      defaultValue={isBooking ? services[0] : ''}
                    >
                      <option value="">Choisissez votre séance</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="form-error">{errors.service.message}</p>}
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Le message est requis' })}
                      rows={5}
                      className="form-field"
                      placeholder="Parlez-moi de votre projet, vos attentes, vos questions..."
                    />
                    {errors.message && <p className="form-error">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={!isValid}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isBooking ? 'Réserver ma séance' : 'Envoyer le message'}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Je vous réponds généralement sous 24h. À très bientôt !
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-6">
                  Informations de contact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-medium text-neutral-800">Téléphone</p>
                      <p className="text-neutral-600">+33 X XX XX XX XX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-medium text-neutral-800">Email</p>
                      <p className="text-neutral-600">contact@votre-domaine.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-medium text-neutral-800">Studio</p>
                      <p className="text-neutral-600">Votre Ville, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-medium text-neutral-800">Disponibilités</p>
                      <p className="text-neutral-600">Lun-Sam: 9h-19h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-neutral-800 mb-4">
                  Avant votre séance
                </h4>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Consultation gratuite de 15 minutes</li>
                  <li>• Conseils vestimentaire personnalisés</li>
                  <li>• Préparation et mise en confiance</li>
                  <li>• Studio privé et discret</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact; 