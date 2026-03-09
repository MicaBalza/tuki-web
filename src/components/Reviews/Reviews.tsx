"use client";
import LinkedinIcon from "@/assets/icons/Linkedin";
import { useTranslation } from "@/i18n/client";
// [PAGESPEED TEST] import Image from "next/image";
import { useParams } from "next/navigation";
// [PAGESPEED TEST] Swiper imports commented out
// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";

// [PAGESPEED TEST] Swiper CSS commented out
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

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
  const reviews = t("items", { returnObjects: true }) as Review[];

  // [PAGESPEED TEST] renderCard and Swiper carousel replaced with simple list
  return (
    <section className={styles.reviews}>
      <div className={styles.header}>
        <h3 className={`h2 text-purple`}>{t("title")}</h3>
      </div>
      <div className={styles.carouselWrapper}>
        {reviews.map((review, index) => (
          <div className={styles.cardInner} key={`card-${index}`} style={{ display: index === 0 ? "flex" : "none" }}>
            <div className={styles.left}>
              <div className={styles.avatar} aria-hidden="true" style={{ width: 84, height: 84, background: "#d0c4e0", borderRadius: "50%" }} />
              <div className={styles.identityCentered}>
                <div className={styles.nameRow}>
                  <p className={`h4 bold ${styles.name}`}>{review.name}</p>
                  {review.linkedin && (
                    <a href={review.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedin} aria-label="LinkedIn Profile">
                      <LinkedinIcon />
                    </a>
                  )}
                </div>
                <p className={styles.role}>{review.role}</p>
              </div>
            </div>
            <div className={styles.quoteWrap}>
              <div className={styles.quoteText}>
                {review.quote.split("\n\n").map((paragraph, paragraphIndex) => (
                  <p key={`${review.name}-${paragraphIndex}`} className={styles.quote}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
