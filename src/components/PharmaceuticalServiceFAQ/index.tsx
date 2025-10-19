"use client";

import { useTranslation } from "@/i18n/client";
import { useState } from "react";
import Button from "../Button";
import styles from "./styles.module.css";

interface PharmaceuticalServiceFAQProps {
  lng: string;
  serviceType?: string; // Maps to FAQ section key (institutional, productLaunch, etc.) or 'mainPage'
}

const SERVICE_TYPE_MAPPING: Record<string, string> = {
  "institutional-corporate-videos": "institutional",
  "product-launch": "productLaunch",
  "tutorial-training": "tutorials",
  "promotional-videos": "promotional",
  "events-conferences": "events",
  "podcast-videos": "podcast",
};

export default function PharmaceuticalServiceFAQ({
  lng,
  serviceType = "mainPage",
}: PharmaceuticalServiceFAQProps) {
  const { t } = useTranslation(lng, "health-services");
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedQuestion((prev) => (prev === index ? null : index));
  };

  // Get the correct FAQ section key
  const faqSectionKey = SERVICE_TYPE_MAPPING[serviceType] || serviceType;

  // Get FAQ content from translations
  const faqContent = t(`faq.${faqSectionKey}`, {
    returnObjects: true,
  }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <div
      className={`${styles.faqSection} ${isExpanded ? styles.expanded : ""}`}
    >
      {!isExpanded && (
        <div className={styles.faqHeader}>
          <div className={styles.background}>
            <img
              src="/static/images/pharmaceutical-services/question.png"
              alt="Question mark"
              className={styles.questionImage}
            />
            <img
              src="/static/images/pharmaceutical-services/faq.png"
              alt="FAQ Character"
              className={styles.characterImage}
            />
          </div>

          <div className={styles.faqTitleContainer}>
            <div className={styles.faqTitle}>
              <h2 className="text-purple h1 bold">{t("faq.title")}</h2>
              <p className="text-purple h4">{t("faq.subtitle")}</p>
            </div>
            <Button
              text={t("faq.showButton")}
              className={styles.faqButton}
              onClick={() => setIsExpanded(!isExpanded)}
              inverted
            />
          </div>
        </div>
      )}

      {isExpanded && (
        <div className={styles.expandedContainer}>
          <div className={styles.expandedLeft}>
            <img
              src="/static/images/pharmaceutical-services/question.png"
              alt="Question mark"
              className={styles.expandedQuestionImage}
            />
            <div className={styles.expandedTitle}>
              <h3 className="text-purple h1 bold">{t("faq.title")}</h3>
              <p className="text-purple h4">{t("faq.subtitle")}</p>
            </div>
          </div>
          <div className={styles.expandedRight}>
            <div className={styles.faqList}>
              <div className={styles.faqColumn}>
                {faqContent.slice(0, 5).map((faqItem, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h2
                      className={`${styles.faqQuestion} ${
                        expandedQuestion === index ? styles.expanded : ""
                      } p`}
                      onClick={() => toggleQuestion(index)}
                    >
                      {faqItem.question}
                    </h2>
                    {expandedQuestion === index && (
                      <p
                        className={styles.faqAnswer}
                        dangerouslySetInnerHTML={{
                          __html: faqItem.answer.replace(/\n/g, "<br>"),
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.faqColumn}>
                {faqContent.slice(5).map((faqItem, index) => (
                  <div key={index + 5} className={styles.faqItem}>
                    <p
                      className={`${styles.faqQuestion} ${
                        expandedQuestion === index + 5 ? styles.expanded : ""
                      }`}
                      onClick={() => toggleQuestion(index + 5)}
                    >
                      {faqItem.question}
                    </p>
                    {expandedQuestion === index + 5 && (
                      <p
                        className={styles.faqAnswer}
                        dangerouslySetInnerHTML={{
                          __html: faqItem.answer.replace(/\n/g, "<br>"),
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Button
              text={t("faq.hideButton")}
              className={styles.closeButton}
              onClick={() => setIsExpanded(!isExpanded)}
              inverted
            />
          </div>
        </div>
      )}
    </div>
  );
}
