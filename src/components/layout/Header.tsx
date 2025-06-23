import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera } from 'lucide-react';
import { useAnalytics } from '../../contexts/AnalyticsContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { trackConversion } = useAnalytics();

  // Vérifier si on est sur la page d'accueil
  const isHomePage = location.pathname === '/';

  // Détection du scroll pour l'effet de transparence (seulement sur la page d'accueil)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Sur les autres pages, forcer l'état "scrolled" pour avoir un fond blanc
      setIsScrolled(true);
    }
  }, [isHomePage]);

  // Navigation items
  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Tarifs', path: '/tarifs' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleBookingClick = () => {
    trackConversion('booking');
    // Redirection vers le formulaire de contact avec paramètre
    window.location.href = '/contact?action=booking';
  };

  // Déterminer les styles selon la page et l'état de scroll
  const shouldShowWhiteBackground = !isHomePage || isScrolled;
  const shouldShowDarkText = !isHomePage || isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowWhiteBackground
          ? 'bg-white/95 backdrop-blur-luxury shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 lg:justify-between relative">
          {/* Espace gauche invisible sur mobile pour équilibrer */}
          <div className="w-10 h-10 lg:hidden"></div>

          {/* Logo - Centré parfaitement sur mobile */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none lg:flex lg:items-center lg:justify-start">
            <img 
              src="/images/Black and Beige Minimalist Elegant Cosmetics Logo (500 x 300 px).svg" 
              alt="DesBois Logo" 
              className={`h-12 lg:h-14 w-auto transition-all duration-300 ${
                !shouldShowDarkText ? 'filter brightness-0 invert' : ''
              }`}
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                  location.pathname === item.path
                    ? 'text-accent border-b-2 border-accent pb-1'
                    : shouldShowDarkText ? 'text-neutral-700' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Réservation */}
          <div className="hidden lg:block">
            <button
              onClick={handleBookingClick}
              className="btn-primary"
            >
              Réserver une séance
            </button>
          </div>

          {/* Menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 relative z-10"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${shouldShowDarkText ? 'text-neutral-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${shouldShowDarkText ? 'text-neutral-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Menu mobile overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-luxury border-t border-neutral-200"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 text-neutral-700 hover:text-accent transition-colors duration-300 ${
                      location.pathname === item.path ? 'text-accent bg-accent/10' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4">
                  <button
                    onClick={() => {
                      handleBookingClick();
                      setIsMenuOpen(false);
                    }}
                    className="btn-primary w-full"
                  >
                    Réserver une séance
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header; 