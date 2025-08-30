"use client";

import { PharmaceuticalService } from "@/constants/pharmaceuticalServices";
import { useState } from "react";
import Button from "../Button";
import styles from "./styles.module.css";

interface PharmaceuticalServiceFAQProps {
  service: PharmaceuticalService;
}

export default function PharmaceuticalServiceFAQ({
  service,
}: PharmaceuticalServiceFAQProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedQuestion((prev) => (prev === index ? null : index));
  };

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
              <h3 className="text-purple h1 bold">Preguntas Frecuentes</h3>
              <p className="text-purple h4">(FAQ)</p>
            </div>
            <Button
              text="Ver Preguntas Frecuentes :)"
              className={styles.faqButton}
              onClick={() => setIsExpanded(!isExpanded)}
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
              <h3 className="text-purple h1 bold">Preguntas Frecuentes</h3>
              <p className="text-purple h4">(FAQ)</p>
            </div>
          </div>
          <div className={styles.expandedRight}>
            <div className={styles.faqList}>
              <div className={styles.faqColumn}>
                {service.faq.slice(0, 5).map((faqItem, index) => (
                  <div key={index} className={styles.faqItem}>
                    <p
                      className={styles.faqQuestion}
                      onClick={() => toggleQuestion(index)}
                    >
                      {faqItem.question}
                    </p>
                    {expandedQuestion === index && (
                      <p className={styles.faqAnswer}>{faqItem.answer}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.faqColumn}>
                {service.faq.slice(5).map((faqItem, index) => (
                  <div key={index + 5} className={styles.faqItem}>
                    <p
                      className={styles.faqQuestion}
                      onClick={() => toggleQuestion(index + 5)}
                    >
                      {faqItem.question}
                    </p>
                    {expandedQuestion === index + 5 && (
                      <p className={styles.faqAnswer}>{faqItem.answer}</p>
                    )}
                  </div>
                ))}
                <Button
                  text="Ocultar Preguntas Frecuentes :)"
                  className={styles.closeButton}
                  onClick={() => setIsExpanded(!isExpanded)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
