"use client";

import { useCookieConsent } from "@/contexts/CookieContext";
import { useTranslation } from "@/i18n/client";
import { CookieConsent } from "@/types/cookies";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "../CookieBanner/styles.module.css";

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: "preferences" | "policy";
}

export default function CookiePreferencesModal({
  isOpen,
  onClose,
  initialView = "preferences",
}: CookiePreferencesModalProps) {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "cookies");
  const { consentState, updateConsent } = useCookieConsent();
  const [activeView, setActiveView] = useState<"preferences" | "policy">(
    initialView
  );
  const [tempConsent, setTempConsent] = useState<CookieConsent>(
    consentState.consent
  );

  useEffect(() => {
    setActiveView(initialView);
  }, [initialView]);

  useEffect(() => {
    setTempConsent(consentState.consent);
  }, [consentState.consent]);

  if (!isOpen) {
    return null;
  }

  const handleSavePreferences = () => {
    updateConsent(tempConsent);
    onClose();
  };

  const handleCategoryChange = (
    category: keyof CookieConsent,
    enabled: boolean
  ) => {
    setTempConsent((prev) => ({ ...prev, [category]: enabled }));
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.viewToggle}>
          {activeView === "preferences" ? (
            <button
              className={styles.inlineLink}
              onClick={() => setActiveView("policy")}
            >
              {t("policy.link")}
            </button>
          ) : (
            <button
              className={styles.inlineLink}
              onClick={() => setActiveView("preferences")}
            >
              {t("policy.backToPreferences")}
            </button>
          )}
        </div>

        {activeView === "preferences" && (
          <>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{t("preferences.title")}</h2>
              <p className={styles.modalDescription}>
                {t("preferences.description")}
              </p>
            </div>

            {/* Essential Cookies */}
            <div className={styles.cookieCategory}>
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>
                  {t("preferences.essential.title")}
                </h3>
                <div className={styles.required}>
                  {t("preferences.essential.required")}
                </div>
              </div>
              <p className={styles.categoryDescription}>
                {t("preferences.essential.description")}
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className={styles.cookieCategory}>
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>
                  {t("preferences.analytics.title")}
                </h3>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    className={styles.switchInput}
                    checked={tempConsent.analytics}
                    onChange={(e) =>
                      handleCategoryChange("analytics", e.target.checked)
                    }
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
                <h3 className={styles.categoryTitle}>
                  {t("preferences.marketing.title")}
                </h3>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    className={styles.switchInput}
                    checked={tempConsent.marketing}
                    onChange={(e) =>
                      handleCategoryChange("marketing", e.target.checked)
                    }
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
                <h3 className={styles.categoryTitle}>
                  {t("preferences.preferences.title")}
                </h3>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    className={styles.switchInput}
                    checked={tempConsent.preferences}
                    onChange={(e) =>
                      handleCategoryChange("preferences", e.target.checked)
                    }
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
                onClick={onClose}
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
          </>
        )}

        {activeView === "policy" && (
          <div className={styles.policyWrapper}>
            <h2 className={styles.modalTitle}>{t("policy.pageTitle")}</h2>
            <div className={styles.policyContent}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {t("policy.lorem")}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
