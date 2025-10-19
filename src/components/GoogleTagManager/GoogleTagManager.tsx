"use client";

import { useCookieConsent } from "@/contexts/CookieContext";
import Script from "next/script";
import { useEffect } from "react";

interface GoogleTagManagerProps {
  gtmId: string;
}

export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  const { consentState } = useCookieConsent();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      // Update consent mode based on user preferences
      window.gtag("consent", "update", {
        analytics_storage: consentState.consent.analytics ? "granted" : "denied",
        ad_storage: consentState.consent.marketing ? "granted" : "denied",
        ad_user_data: consentState.consent.marketing ? "granted" : "denied",
        ad_personalization: consentState.consent.marketing ? "granted" : "denied",
        functionality_storage: consentState.consent.preferences ? "granted" : "denied",
        personalization_storage: consentState.consent.preferences ? "granted" : "denied",
        security_storage: "granted", // Always granted for essential functionality
      });
    }
  }, [consentState.consent]);

  return (
    <>
      {/* Google Tag Manager - gtag.js */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Set default consent mode
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
            security_storage: 'granted',
            wait_for_update: 500,
          });

          gtag('js', new Date());
          gtag('config', '${gtmId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}