"use client";;
import { use } from "react";

import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";
import Profile from "@/components/Profile";
import { useTranslation } from "@/i18n/client";
import { PageProps } from "@/types/i18n";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Us(props: PageProps) {
  const params = use(props.params);

  const {
    lng
  } = params;

  const { t } = useTranslation(lng, "us");
  const { push } = useRouter();
  return (
    <PageContainer>
      <div className={styles.hero}>
        <div className={`container ${styles.container}`}>
          <div className={styles.text}>
            <h3>{t("title")}</h3>
            <p>{t("description")}</p>
            <Button text={t("button")} onClick={() => push("/contact-us")} />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={"/static/images/us.png"}
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.us}>
        <h2 className={styles.usTitle}>{t("made-by")}</h2>
        <div className={styles.usContainer}>
          <Profile person="flor" />
          <Profile person="nat" />
        </div>
      </div>
      <div className={`column align-center g-24 ${styles.ready}`}>
        <h2>{t("work-together")}</h2>
        <Button
          text={t("work-together-button")}
          onClick={() => push("/contact-us")}
        />
      </div>
    </PageContainer>
  );
}
