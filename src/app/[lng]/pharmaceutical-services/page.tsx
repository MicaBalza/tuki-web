"use client";

import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
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
              <Image
                src="/static/images/pharmaceutical-services/board.png"
                alt="Services Board"
                width={1000}
                height={700}
                className={styles.boardImage}
              />
              <div className={styles.boardContent}>
                <h2 className={styles.boardTitle}>{t("services.title")}</h2>
                <ul className={styles.servicesList}>
                  <li className={styles.serviceItem}>
                    <span className={styles.checkmark}>✓</span>
                    <span>{t("services.item1")}</span>
                  </li>
                  <li className={styles.serviceItem}>
                    <span className={styles.checkmark}>✓</span>
                    <span>{t("services.item2")}</span>
                  </li>
                  <li className={styles.serviceItem}>
                    <span className={styles.checkmark}>✓</span>
                    <span>{t("services.item3")}</span>
                  </li>
                  <li className={styles.serviceItem}>
                    <span className={styles.checkmark}>✓</span>
                    <span>{t("services.item4")}</span>
                  </li>
                  <li className={styles.serviceItem}>
                    <span className={styles.checkmark}>✓</span>
                    <span>{t("services.item5")}</span>
                  </li>
                  <li className={styles.serviceItem}>
                    <span className={styles.checkmark}>✓</span>
                    <span>{t("services.item6")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.characterContainer}>
            <div className={styles.character}>
              <Image
                src="/static/images/pharmaceutical-services/girl.png"
                alt="Pharmaceutical Services Character"
                width={670}
                height={745}
                className={styles.characterImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section ref={section3Ref} className={styles.section3}>
        <div className={styles.sectionContent}>
          <h2>Section 3</h2>
          <p>Content for section 3 goes here</p>
        </div>
      </section>
    </PageContainer>
  );
}
