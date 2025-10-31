"use client";

import LinkedinIcon from "@/assets/icons/Linkedin";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRef } from "react";
import styles from "./styles.module.css";

type Review = {
  name: string;
  role: string;
  quote: string;
  image?: string;
  linkedin?: string;
};

const Reviews = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "reviews");
  const containerRef = useRef<HTMLDivElement>(null);
  const reviews = t("items", { returnObjects: true }) as Review[];

  const scrollToReview = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const target = container.children.item(index) as HTMLElement | null;
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <section className={styles.reviews}>
      <div className={styles.header}>
        <h3 className={`h2 text-purple`}>{t("title")}</h3>
      </div>
      <div className={styles.carousel} ref={containerRef}>
        {reviews.map((review, index) => (
          <article
            key={review.name}
            className={styles.card}
            onClick={() => scrollToReview(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                scrollToReview(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`${review.name} — ${review.role}`}
          >
            <div className={styles.cardInner}>
              <div className={styles.left}>
                <div className={styles.avatar} aria-hidden="true">
                  <Image
                    src={review.image as string}
                    alt={`${review.name} photo`}
                    width={84}
                    height={84}
                    className={styles.avatarImg}
                  />
                </div>
                <div className={styles.identityCentered}>
                  <div className={styles.nameRow}>
                    <p className={`h4 bold ${styles.name}`}>{review.name}</p>
                    {review.linkedin && (
                      <a
                        href={review.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkedin}
                        aria-label="LinkedIn Profile"
                      >
                        <LinkedinIcon />
                      </a>
                    )}
                  </div>
                  <p className={styles.role}>{review.role}</p>
                </div>
              </div>

              <div className={styles.quoteWrap}>
                <div className={styles.quoteText}>
                  {review.quote
                    .split("\n\n")
                    .map((paragraph, paragraphIndex) => (
                      <p
                        key={`${review.name}-${paragraphIndex}`}
                        className={styles.quote}
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
