"use client";
import LinkedinIcon from "@/assets/icons/Linkedin";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  const renderCard = (review: Review, index: number) => {
    return (
      <div className={styles.cardInner} key={`card-${index}`}>
        <div className={styles.left}>
          <div className={styles.avatar} aria-hidden="true">
            <Image
              src={encodeURI(review.image as string)}
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
            {review.quote.split("\n\n").map((paragraph, paragraphIndex) => (
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
    );
  };

  return (
    <section className={styles.reviews}>
      <div className={styles.header}>
        <h3 className={`h2 text-purple`}>{t("title")}</h3>
      </div>
      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: `.${styles.swiperButtonPrev}`,
            nextEl: `.${styles.swiperButtonNext}`,
          }}
          pagination={{
            clickable: true,
          }}
          className={styles.swiper}
          autoHeight
          loop
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={`slide-${index}`}>
              {renderCard(review, index)}
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`${styles.swiperButtonPrev} ${styles.swiperButton}`}
          aria-label="Previous review"
        >
          <Image
            src="/static/icons/chevron_right.svg"
            alt="Previous"
            width={25}
            height={25}
            style={{ transform: "rotate(180deg)" }}
          />
        </button>
        <button
          className={`${styles.swiperButtonNext} ${styles.swiperButton}`}
          aria-label="Next review"
        >
          <Image
            src="/static/icons/chevron_right.svg"
            alt="Next"
            width={25}
            height={25}
          />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
