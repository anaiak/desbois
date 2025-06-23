import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-accent" />
              <span className="text-2xl font-serif font-bold">
                Votre Nom
              </span>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              Photographe spécialisée dans la photographie sensuelle, fine art et élégante. 
              Créons ensemble des images qui révèlent votre beauté unique dans un cadre luxueux et raffiné.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/votre-compte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-accent transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/votre-page"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-accent transition-colors duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-neutral-300 hover:text-accent transition-colors duration-300">
                Accueil
              </Link>
              <Link to="/portfolio" className="block text-neutral-300 hover:text-accent transition-colors duration-300">
                Portfolio
              </Link>
              <Link to="/a-propos" className="block text-neutral-300 hover:text-accent transition-colors duration-300">
                À propos
              </Link>
              <Link to="/tarifs" className="block text-neutral-300 hover:text-accent transition-colors duration-300">
                Tarifs
              </Link>
              <Link to="/contact" className="block text-neutral-300 hover:text-accent transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Informations de contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-neutral-300">+33 X XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-neutral-300">contact@votre-domaine.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-neutral-300">Votre Ville, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 Votre Nom. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-neutral-400 hover:text-accent text-sm transition-colors duration-300">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-neutral-400 hover:text-accent text-sm transition-colors duration-300">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD pour les informations de contact */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Votre Nom - Photographe Sensuelle",
            "description": "Photographe spécialisée dans la photographie sensuelle, fine art et élégante",
            "url": "https://votre-domaine.com",
            "telephone": "+33-X-XX-XX-XX-XX",
            "email": "contact@votre-domaine.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Votre Ville",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.8566",
              "longitude": "2.3522"
            },
            "openingHours": "Mo-Sa 09:00-19:00",
            "priceRange": "€€€"
          })
        }}
      />
    </footer>
  );
};

export default Footer; 