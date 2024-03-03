"use client";

import Carrousel from "@/components/Carrousel";
import PageContainer from "@/components/PageContainer";
import { SERVICES } from "@/constants/services";
import { useTranslation } from "@/i18n/client";
import { PageProps } from "@/types/i18n";
import styles from "./page.module.css";

export default function Page({ params: { lng } }: PageProps) {
  const { t } = useTranslation(lng, "projects");

  return (
    <PageContainer className="bg-white">
      <div className={styles.hero}>
        <h2 className={`text-purple ${styles.title}`}>{t("title")}</h2>
        <div className={styles.imageContainer}>
          <img
            src="/static/images/projects.gif"
            alt="Workaholic"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.projects}>
        {SERVICES.map((service) => (
          <Carrousel key={service} service={service} />
        ))}
      </div>
    </PageContainer>
  );
}
