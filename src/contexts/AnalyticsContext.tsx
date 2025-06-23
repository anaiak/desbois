import React, { createContext, useContext, ReactNode } from 'react';

// Types pour les événements GA4
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface AnalyticsContextType {
  trackEvent: (event: AnalyticsEvent) => void;
  trackConversion: (type: 'booking' | 'contact' | 'portfolio_view') => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

// Déclaration globale pour gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const trackEvent = (event: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  };

  const trackConversion = (type: 'booking' | 'contact' | 'portfolio_view') => {
    const conversionEvents = {
      booking: {
        action: 'click_booking_cta',
        category: 'conversion',
        label: 'Réserver une séance',
        value: 1,
      },
      contact: {
        action: 'submit_contact_form',
        category: 'conversion',
        label: 'Formulaire de contact',
        value: 1,
      },
      portfolio_view: {
        action: 'view_portfolio',
        category: 'engagement',
        label: 'Portfolio complet',
        value: 1,
      },
    };

    trackEvent(conversionEvents[type]);
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackConversion }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}; 