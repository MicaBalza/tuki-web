"use client";

import { useCookieConsent } from "@/contexts/CookieContext";
import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";
import { useState } from "react";
import CookiePreferencesModal from "../CookiePreferencesModal";
import styles from "./styles.module.css";

export default function CookieBanner() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "cookies");
  const { consentState, acceptAll, rejectAll } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const [activeView, setActiveView] = useState<"preferences" | "policy">(
    "preferences"
  );

  return (
    <>
      {/* Main Banner */}
      {consentState.showBanner ? (
        <div className={styles.banner}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h3 className={styles.title}>{t("banner.title")}</h3>
              <p className={styles.description}>{t("banner.description")}</p>
            </div>
            <div className={styles.actions}>
              <button
                className={`${styles.button} ${styles.preferences}`}
                onClick={() => {
                  setActiveView("preferences");
                  setShowPreferences(true);
                }}
              >
                {t("banner.preferences")}
              </button>
              <button
                className={`${styles.button} ${styles.policyLink}`}
                onClick={() => {
                  setActiveView("policy");
                  setShowPreferences(true);
                }}
              >
                {t("policy.link")}
              </button>
              <button
                className={`${styles.button} ${styles.rejectAll}`}
                onClick={rejectAll}
              >
                {t("banner.rejectAll")}
              </button>
              <button
                className={`${styles.button} ${styles.acceptAll}`}
                onClick={acceptAll}
              >
                {t("banner.acceptAll")}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Preferences / Policy Modal */}
      <CookiePreferencesModal
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        initialView={activeView}
      />
    </>
  );
}
