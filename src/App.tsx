import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Composants de layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StickyBookingButton from './components/ui/StickyBookingButton';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Context pour le tracking GA4
import { AnalyticsProvider } from './contexts/AnalyticsContext';

function App() {
  return (
    <AnalyticsProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/tarifs" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          
          {/* CTA récurrents pour maximiser la conversion */}
          <StickyBookingButton />
          
          <Footer />
        </div>
      </Router>
    </AnalyticsProvider>
  );
}

export default App; 