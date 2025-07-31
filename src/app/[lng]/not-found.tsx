"use client";

import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import styles from "./not-found.module.css";

export default function NotFound() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "not-found");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <Image
            src="/static/images/404.png"
            alt="Under Construction"
            width={600}
            height={450}
            className={styles.image}
          />
        </div>
        <h2 className="text-purple">{t("title")}</h2>
        <p className="text-purple">{t("description")}</p>
      </div>
    </div>
  );
}
