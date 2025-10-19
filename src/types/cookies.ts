export interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export interface CookieConsentState {
  hasConsented: boolean;
  consent: CookieConsent;
  showBanner: boolean;
}

export type CookieCategory = keyof CookieConsent;