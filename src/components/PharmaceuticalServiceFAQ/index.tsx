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

  return (
    <div className={styles.faqSection}>
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

      {isExpanded && (
        <div className={styles.faqContent}>
          <div className={styles.faqList}>
            {service.faq.map((faqItem, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faqItem.question}</h4>
                <p>{faqItem.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
