"use client";
import { use } from "react";

import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";
import Profile from "@/components/Profile";
import { getLocalizedPath } from "@/constants/localizedRoutes";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

type tParams = {
  lng: string;
};

export default function Us(props: { params: Promise<tParams> }) {
  const params = use(props.params);

  const { lng } = params;

  const { t } = useTranslation(lng, "us");
  const { push } = useRouter();
  return (
    <PageContainer>
      <div className={styles.hero}>
        <div className={`container ${styles.container}`}>
          <div className={styles.text}>
            <h1 className="h3">{t("title")}</h1>
            <p>{t("description")}</p>
            <Button text={t("button")} onClick={() => push(`/${lng}${getLocalizedPath("/contact-us", lng as "en" | "es")}`)} />
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
          <Profile person="nat" inverted />
        </div>
      </div>
    </PageContainer>
  );
}
