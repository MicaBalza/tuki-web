import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import styles from "./styles.module.css";

const WhatWeDo = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "contact-us");
  const { push } = useRouter();

  return (
    <section
      className={`column ${styles.container} align-center`}
      onClick={() => push("/contact-us")}
    >
      <div className={styles.titleContainer}>
        <div className={styles.shapeContainer}>
          <Image
            src={`/static/images/shape2.svg`}
            alt=""
            fill
            className={styles.shape}
          />
        </div>
        <h2 className="text-purple">{t("title")}</h2>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={`/static/images/hamburguer.gif`}
          alt=""
          fill
          unoptimized={true}
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
