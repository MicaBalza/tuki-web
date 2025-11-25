"use client";
import LinkedinIcon from "@/assets/icons/Linkedin";
import LogoLoop from "@/components/LogoLoop";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LogoLoopAny: any = LogoLoop;

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

  // Build LogoLoop items using 'node' items so LogoLoop renders our review cards
  const loopItems = reviews.map((review, index) => ({
    node: (
      <div className={styles.card} key={`node-${index}`}>
        <div className={styles.cardInner}>
          <div className={styles.left}>
            <div className={styles.avatar} aria-hidden="true">
              {/* LogoLoop expects native <img> elements — use plain img here */}
              <img
                src={review.image}
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
      </div>
    ),
  }));

  // track whether viewport is mobile-sized so we can render a column instead of the loop
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handle = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile((e as MediaQueryList).matches ?? false);
    // set initial
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", handle as any);
    else mq.addListener(handle as any);
    return () => {
      if (mq.removeEventListener)
        mq.removeEventListener("change", handle as any);
      else mq.removeListener(handle as any);
    };
  }, []);

  const renderCard = (review: Review, index: number) => (
    <div className={styles.card} key={`card-${index}`}>
      <div className={styles.cardInner}>
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
    </div>
  );

  return (
    <section className={styles.reviews}>
      <div className={styles.header}>
        <h3 className={`h2 text-purple`}>{t("title")}</h3>
      </div>
      {isMobile ? (
        <div className={styles.mobileCarouselWrapper}>
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
              el: `.${styles.swiperPagination}`,
            }}
            className={styles.mobileSwiper}
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`${styles.swiperButtonNext} ${styles.swiperButton}`}
            aria-label="Next review"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className={styles.swiperPagination}></div>
        </div>
      ) : (
        <div className={styles.carouselContainer}>
          <LogoLoopAny
            logos={loopItems}
            speed={80}
            direction="left"
            gap={48}
            logoHeight={200}
            pauseOnHover={true}
            ariaLabel={t("title")}
            width="100%"
          />
        </div>
      )}
    </section>
  );
};

export default Reviews;
