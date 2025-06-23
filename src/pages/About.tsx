import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, Camera, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Empathie profonde',
      description: 'L\'handicap de Patrick a aiguisé notre écoute et développé une patience infinie. Nous accueillons chaque personnalité dans toute sa richesse et sa diversité.'
    },
    {
      icon: Eye,
      title: 'Sixième sens créatif',
      description: 'On nous décrit souvent comme deux âmes sages capables de pressentir vos aspirations avant même que vous les formuliez.'
    },
    {
      icon: Camera,
      title: 'Photographie « reportage »',
      description: 'Nous privilégions l\'instant vécu à la pose figée — pour des images authentiques, vibrantes, chargées de mouvement.'
    },
    {
      icon: Users,
      title: 'Expertise transversale',
      description: 'Psychologie, conseil en image, direction artistique… autant de savoir-faire mis au service de votre confiance et de votre beauté singulière.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-800 mb-6">
                Sylvie & Patrick Desbois
              </h1>
              <p className="text-xl text-accent font-medium mb-4">
                Photographes boudoir à Lyon, depuis 2000
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Depuis plus de vingt ans, nous explorons l'alchimie subtile entre la lumière, 
                le corps et l'émotion. Notre ambition ? Créer des images qui élèvent, subliment 
                et révèlent votre vérité intérieure — celles qui capturent non pas ce que vous 
                paraissez, mais ce que vous ressentez.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/about/8.png"
                alt="Sylvie & Patrick Desbois, photographes boudoir"
                className="w-full rounded-lg shadow-luxury"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-lg">
                <p className="text-sm font-medium">20+ années</p>
                <p className="text-xs opacity-90">d'expérience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notre Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-8">
              Notre Vision
            </h2>
            <div className="text-lg text-neutral-600 leading-relaxed space-y-6">
              <p>
                Nous croyons que la photographie boudoir est un dialogue : un échange d'énergies, 
                de regards et de silences complices. Chaque prise de vue est donc pensée comme 
                une expérience sensorielle, guidée par la conscience, l'intention et la connexion émotionnelle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notre Approche */}
      <section className="section-padding bg-gradient-to-r from-accent to-accent-light text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Notre Approche
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Une méthode unique développée au fil de deux décennies d'expérience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center h-full"
              >
                <div className="bg-white/10 backdrop-blur-luxury p-6 rounded-lg hover:bg-white/20 transition-all duration-300 h-full flex flex-col justify-between min-h-[280px]">
                  <div className="flex flex-col items-center">
                    <value.icon className="h-12 w-12 mx-auto mb-4 flex-shrink-0" />
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  </div>
                  <p className="opacity-90 leading-relaxed text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-8">
              Notre Mission
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              Plonger au cœur de qui vous êtes pour en extraire l'essence et l'amplifier. 
              Parce que chaque histoire mérite d'être racontée avec justesse et délicatesse, 
              nous créons des images qui célèbrent la féminité, la sensualité et l'estime de soi.
            </p>
            <div className="text-2xl font-serif text-accent font-medium">
              Élever. Sublimer. Révéler.
            </div>
            <p className="text-lg text-neutral-500 mt-2">Tels sont nos maîtres-mots.</p>
          </motion.div>
        </div>
      </section>

      {/* Rencontrez l'équipe */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
              Rencontrez l'équipe
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Sylvie */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-luxury"
            >
              <div className="flex items-start space-x-6">
                <img
                  src="/images/about/8.png"
                  alt="Sylvie Desbois"
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-2">
                    Sylvie Desbois
                  </h3>
                  <p className="text-accent font-medium mb-4">Fondatrice & Photographe glamour</p>
                  <p className="text-neutral-600 leading-relaxed">
                    Spécialiste des relations humaines, j'ai à cœur de vous mettre à l'aise dès la 
                    première minute. Mon rôle : vous guider avec douceur, décoder vos émotions et 
                    laisser transparaître votre lumière intérieure. Ma sensibilité complète parfaitement 
                    la vision de Patrick pour que votre expérience soit, avant tout, votre réussite.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Patrick */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-luxury"
            >
              <div className="flex items-start space-x-6">
                <img
                  src="/images/about/7.png"
                  alt="Patrick Desbois"
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-2">
                    Patrick Desbois
                  </h3>
                  <p className="text-accent font-medium mb-4">Photographe boudoir & Humaniste visuel</p>
                  <p className="text-neutral-600 leading-relaxed">
                    Formé en psychologie et en droit, j'ai troqué ma carrière de juriste d'affaires 
                    pour suivre ma passion : l'image sensuelle et esthétique. Fondateur de l'association 
                    « Vos photos sensuelles sur mesure » et fort d'une collaboration avec l'agence Elite, 
                    j'accompagne chaque modèle — débutant ou confirmé — avec simplicité, bienveillance 
                    et exigence artistique. Mes passions : l'humanisme et l'esthétisme, toujours au 
                    service de vos envies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About; 