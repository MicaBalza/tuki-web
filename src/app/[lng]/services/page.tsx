"use client";
import { use } from "react";

import PageContainer from "@/components/PageContainer";
import PharmaceuticalService from "@/components/PharmaceuticalService";
import Service from "@/components/Service";
import WorkTogetherBanner from "@/components/WorkTogetherBanner";
import { SERVICES } from "@/constants/services";
import { useTranslation } from "@/i18n/client";
import styles from "./page.module.css";

type tParams = {
  lng: string;
};

export default function Page(props: { params: Promise<tParams> }) {
  const params = use(props.params);

  const { lng } = params;

  const { t } = useTranslation(lng, "services");

  return (
    <PageContainer className="bg-white">
      <div className={styles.hero}>
        <h1 className={`text-purple h2 ${styles.title}`}>{t("title")}</h1>
        <div className={styles.imageContainer}>
          <img
            src="/static/images/services.gif"
            alt="Workaholic"
            className={styles.image}
          />
        </div>
      </div>
      {/* <div className={styles.services}>
        {SERVICES.map((service) => (
          <Carrousel key={service} service={service} />
        ))}
      </div> */}
      <section className={styles.resources}>
        {SERVICES.map((service) => (
          <Service key={service} service={service} />
        ))}
      </section>
      <PharmaceuticalService />
      <WorkTogetherBanner params={props.params} />
    </PageContainer>
  );
}
