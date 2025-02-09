"use client";
import { use } from "react";

import Carrousel from "@/components/Carrousel";
import PageContainer from "@/components/PageContainer";
import { SERVICES } from "@/constants/services";
import { useTranslation } from "@/i18n/client";
import styles from "./page.module.css";

type tParams = {
  lng: string;
};

export default function Page(props: { params: Promise<tParams> }) {
  const params = use(props.params);

  const { lng } = params;

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
