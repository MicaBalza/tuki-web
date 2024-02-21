"use client";

import Image from "next/image";

import Carrousel from "@/components/Carrousel";
import PageContainer from "@/components/PageContainer";
import { SERVICES } from "@/constants/services";
import { useTranslation } from "@/i18n/client";
import { PageProps } from "@/types/i18n";
import styles from "./page.module.css";

export default function Page({ params: { lng } }: PageProps) {
  const { t } = useTranslation(lng, "projects");

  return (
    <PageContainer>
      <div className={styles.hero}>
        <h2 className="text-purple">{t("title")}</h2>
        <Image
          src="/static/images/projects.gif"
          alt="Workaholic"
          width={600}
          height={400}
          style={{ objectFit: "cover" }}
          unoptimized={true}
        />
      </div>
      <div className={styles.projects}>
        {SERVICES.map((service) => (
          <Carrousel key={service} service={service} />
        ))}
      </div>
    </PageContainer>
  );
}
