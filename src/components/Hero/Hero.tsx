import { useParams, useRouter } from "next/navigation";

import { useTranslation } from "@/i18n/client";
import Button from "../Button";
import styles from "./styles.module.css";

const Hero = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "hero");
  const { push } = useRouter();

  return (
    <section className={styles.hero}>
      <div className={`${styles.container}`}>
        <div className={styles.text}>
          <p className={`body ${styles.subtitle}`}>{t("subtitle")}</p>
          <h1 className={styles.title}>{t("title")}</h1>
          <Button text={t("button")} onClick={() => push("/projects")} />
        </div>
        <video
          autoPlay
          muted
          loop
          src={`/static/video/main.mp4`}
          className={styles.video}
          width={900}
          height={500}
        ></video>
      </div>
    </section>
  );
};

export default Hero;
