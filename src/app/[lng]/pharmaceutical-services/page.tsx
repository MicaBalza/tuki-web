"use client";

import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";
import { useTranslation } from "@/i18n/client";
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

      {/* Section 2 */}
      <section className={styles.section2}>
        <div className={styles.sectionContent}>
          <h2>Section 2</h2>
          <p>Content for section 2 goes here</p>
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
