"use client";

import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";
import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef } from "react";
import styles from "./page.module.css";

type tParams = {
  lng: string;
};

export default function PharmaceuticalServicesPage() {
  const { lng } = useParams() as tParams;
  const { t } = useTranslation(lng as string, "pharmaceutical-services");
  const section3Ref = useRef<HTMLElement>(null);

  const scrollToSection3 = () => {
    section3Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const serviceLinks = [
    { key: "item1", url: "institutional-videos" },
    { key: "item2", url: "product-launch" },
    { key: "item3", url: "tutorials-training" },
    { key: "item4", url: "promotional-videos" },
    { key: "item5", url: "events-congress" },
    { key: "item6", url: "video-podcast" }
  ];

  const serviceImages = [
    { 
      src: "/static/images/pharmaceutical-services/institutional-corporate-videos.png",
      alt: "Institutional & Corporate Videos",
      url: "institutional-videos"
    },
    { 
      src: "/static/images/pharmaceutical-services/product-launch.png",
      alt: "Product Launch",
      url: "product-launch"
    },
    { 
      src: "/static/images/pharmaceutical-services/tutorial-training.png",
      alt: "Tutorials & Training",
      url: "tutorials-training"
    },
    { 
      src: "/static/images/pharmaceutical-services/promotional-videos.png",
      alt: "Promotional Videos",
      url: "promotional-videos"
    },
    { 
      src: "/static/images/pharmaceutical-services/events-conferences.png",
      alt: "Events & Congress",
      url: "events-congress"
    },
    { 
      src: "/static/images/pharmaceutical-services/podcast-videos.png",
      alt: "Video Podcast",
      url: "video-podcast"
    }
  ];

  return (
    <PageContainer>
      {/* Section 1 - Hero with Video and Content */}
      <section className={styles.section1}>
        <div className={styles.heroContent}>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/DwwGHAhw7yc?si=dXIPJ9eGEq1NeReI&autoplay=1&mute=1&loop=1&playlist=DwwGHAhw7yc"
              title="Pharmaceutical Services Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className={styles.textContent}>
            <h1 className="text-purple bold">{t("hero.title")}</h1>
            <p className="text-purple">{t("hero.subtitle")}</p>
            <Button text={t("hero.button")} onClick={scrollToSection3} />
          </div>
        </div>
      </section>

      {/* Section 2 - Services Board */}
      <section className={styles.section2}>
        <div className={styles.servicesContent}>
          <div className={styles.boardContainer}>
            <div className={styles.boardWrapper}>
              <img
                src="/static/images/pharmaceutical-services/board.png"
                alt="Services Board"
                className={styles.boardImage}
              />
              <div className={styles.boardContent}>
                <h2 className="text-magenta bold">{t("services.title")}</h2>
                <ul className={styles.servicesList}>
                  {serviceLinks.map((service) => (
                    <li key={service.key} className={styles.serviceItem}>
                      <Link href={`/${lng}/pharmaceutical-services/${service.url}`} className={`${styles.serviceLink} text-purple h4`}>
                        <span className={styles.checkmark}>✓</span>
                        <span>{t(`services.${service.key}`)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.characterContainer}>
            <div className={styles.character}>
              <img
                src="/static/images/pharmaceutical-services/girl.png"
                alt="Pharmaceutical Services Character"
                className={styles.characterImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Services Grid */}
      <section ref={section3Ref} className={styles.section3}>
        <div className={styles.sectionContent}>
          <div className={styles.servicesGrid}>
            {/* Row 1: First image wider than second */}
            <div className={styles.gridRow}>
              <Link href={`/${lng}/pharmaceutical-services/${serviceImages[0].url}`} className={`${styles.gridItem} ${styles.wideFirst}`}>
                <img src={serviceImages[0].src} alt={serviceImages[0].alt} className={styles.gridImage} />
              </Link>
              <Link href={`/${lng}/pharmaceutical-services/${serviceImages[1].url}`} className={`${styles.gridItem} ${styles.narrowSecond}`}>
                <img src={serviceImages[1].src} alt={serviceImages[1].alt} className={styles.gridImage} />
              </Link>
            </div>
            
            {/* Row 2: First image smaller than second */}
            <div className={styles.gridRow}>
              <Link href={`/${lng}/pharmaceutical-services/${serviceImages[2].url}`} className={`${styles.gridItem} ${styles.narrowFirst}`}>
                <img src={serviceImages[2].src} alt={serviceImages[2].alt} className={styles.gridImage} />
              </Link>
              <Link href={`/${lng}/pharmaceutical-services/${serviceImages[3].url}`} className={`${styles.gridItem} ${styles.wideSecond}`}>
                <img src={serviceImages[3].src} alt={serviceImages[3].alt} className={styles.gridImage} />
              </Link>
            </div>
            
            {/* Row 3: First image wider than second */}
            <div className={styles.gridRow}>
              <Link href={`/${lng}/pharmaceutical-services/${serviceImages[4].url}`} className={`${styles.gridItem} ${styles.wideFirst}`}>
                <img src={serviceImages[4].src} alt={serviceImages[4].alt} className={styles.gridImage} />
              </Link>
              <Link href={`/${lng}/pharmaceutical-services/${serviceImages[5].url}`} className={`${styles.gridItem} ${styles.narrowSecond}`}>
                <img src={serviceImages[5].src} alt={serviceImages[5].alt} className={styles.gridImage} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
