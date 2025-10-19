"use client";

import { useCookieConsent } from "@/contexts/CookieContext";
import { useTranslation } from "@/i18n/client";
import { CookieConsent } from "@/types/cookies";
import { useParams } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.css";

export default function CookieBanner() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "cookies");
  const { consentState, acceptAll, rejectAll, updateConsent, hideBanner } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const [tempConsent, setTempConsent] = useState<CookieConsent>(consentState.consent);

  if (!consentState.showBanner) {
    return null;
  }

  const handleSavePreferences = () => {
    updateConsent(tempConsent);
    setShowPreferences(false);
  };

  const handleCategoryChange = (category: keyof CookieConsent, enabled: boolean) => {
    setTempConsent(prev => ({ ...prev, [category]: enabled }));
  };

  return (
    <>
      {/* Main Banner */}
      <div className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h3 className={styles.title}>{t("banner.title")}</h3>
            <p className={styles.description}>{t("banner.description")}</p>
          </div>
          <div className={styles.actions}>
            <button
              className={`${styles.button} ${styles.preferences}`}
              onClick={() => setShowPreferences(true)}
            >
              {t("banner.preferences")}
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

      {/* Preferences Modal */}
      {showPreferences && (
        <div className={styles.modal} onClick={() => setShowPreferences(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{t("preferences.title")}</h2>
              <p className={styles.modalDescription}>{t("preferences.description")}</p>
            </div>

            {/* Essential Cookies */}
            <div className={styles.cookieCategory}>
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>{t("preferences.essential.title")}</h3>
                <div className={styles.required}>{t("preferences.essential.required")}</div>
              </div>
              <p className={styles.categoryDescription}>
                {t("preferences.essential.description")}
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className={styles.cookieCategory}>
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>{t("preferences.analytics.title")}</h3>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    className={styles.switchInput}
                    checked={tempConsent.analytics}
                    onChange={(e) => handleCategoryChange("analytics", e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <p className={styles.categoryDescription}>
                {t("preferences.analytics.description")}
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className={styles.cookieCategory}>
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>{t("preferences.marketing.title")}</h3>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    className={styles.switchInput}
                    checked={tempConsent.marketing}
                    onChange={(e) => handleCategoryChange("marketing", e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <p className={styles.categoryDescription}>
                {t("preferences.marketing.description")}
              </p>
            </div>

            {/* Preference Cookies */}
            <div className={styles.cookieCategory}>
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>{t("preferences.preferences.title")}</h3>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    className={styles.switchInput}
                    checked={tempConsent.preferences}
                    onChange={(e) => handleCategoryChange("preferences", e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <p className={styles.categoryDescription}>
                {t("preferences.preferences.description")}
              </p>
            </div>

            <div className={styles.modalActions}>
              <button
                className={`${styles.button} ${styles.closeButton}`}
                onClick={() => setShowPreferences(false)}
              >
                {t("banner.close")}
              </button>
              <button
                className={`${styles.button} ${styles.saveButton}`}
                onClick={handleSavePreferences}
              >
                {t("banner.savePreferences")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}