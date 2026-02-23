"use client";

import { CookieConsent, CookieConsentState } from "@/types/cookies";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface CookieContextType {
  consentState: CookieConsentState;
  updateConsent: (consent: Partial<CookieConsent>) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  showPreferences: () => void;
  hideBanner: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

const CONSENT_STORAGE_KEY = "tuki-cookie-consent";
const CONSENT_DATE_KEY = "tuki-consent-date";

const defaultConsent: CookieConsent = {
  essential: true, // Always true
  analytics: false,
  marketing: false,
  preferences: false,
};

export function CookieProvider({ children }: { children: ReactNode }) {
  const [consentState, setConsentState] = useState<CookieConsentState>({
    hasConsented: false,
    consent: defaultConsent,
    showBanner: true,
  });

  useEffect(() => {
    // Check if user has already consented
    const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    const consentDate = localStorage.getItem(CONSENT_DATE_KEY);

    if (storedConsent && consentDate) {
      // Check if consent is still valid (12 months)
      const consentTimestamp = parseInt(consentDate);
      const twelveMonthsAgo = Date.now() - 12 * 30 * 24 * 60 * 60 * 1000;

      if (consentTimestamp > twelveMonthsAgo) {
        const parsedConsent = JSON.parse(storedConsent);
        setConsentState({
          hasConsented: true,
          consent: { ...defaultConsent, ...parsedConsent },
          showBanner: false,
        });

        // Load analytics based on stored consent
        loadAnalytics(parsedConsent.analytics);
      } else {
        // Consent expired, clear storage
        localStorage.removeItem(CONSENT_STORAGE_KEY);
        localStorage.removeItem(CONSENT_DATE_KEY);
      }
    }
  }, []);

  const saveConsent = (consent: CookieConsent) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    localStorage.setItem(CONSENT_DATE_KEY, Date.now().toString());
    loadAnalytics(consent.analytics);
  };

  const loadAnalytics = (analyticsEnabled: boolean) => {
    if (typeof window !== "undefined" && window.gtag) {
      // Update Google Analytics consent
      window.gtag("consent", "update", {
        analytics_storage: analyticsEnabled ? "granted" : "denied",
        ad_storage: analyticsEnabled ? "granted" : "denied",
      });
    }
  };

  const updateConsent = (newConsent: Partial<CookieConsent>) => {
    const updatedConsent = { ...consentState.consent, ...newConsent };
    setConsentState({
      hasConsented: true,
      consent: updatedConsent,
      showBanner: false,
    });
    saveConsent(updatedConsent);
  };

  const acceptAll = () => {
    const allAccepted: CookieConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setConsentState({
      hasConsented: true,
      consent: allAccepted,
      showBanner: false,
    });
    saveConsent(allAccepted);
  };

  const rejectAll = () => {
    setConsentState({
      hasConsented: true,
      consent: defaultConsent,
      showBanner: false,
    });
    saveConsent(defaultConsent);
  };

  const showPreferences = () => {
    setConsentState((prev) => ({ ...prev, showBanner: true }));
  };

  const hideBanner = () => {
    setConsentState((prev) => ({ ...prev, showBanner: false }));
  };

  return (
    <CookieContext.Provider
      value={{
        consentState,
        updateConsent,
        acceptAll,
        rejectAll,
        showPreferences,
        hideBanner,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieProvider");
  }
  return context;
}

// Global gtag declaration
declare global {
  interface Window {
    gtag: (command: string, action: string, parameters: any) => void;
  }
}
