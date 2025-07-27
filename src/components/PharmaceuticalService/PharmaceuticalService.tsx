import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Button from "../Button";
import styles from "./styles.module.css";

const PharmaceuticalService = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "services");
  const { push } = useRouter();

  return (
    <div className={`${styles.wrapper} bg-nude`}>
      <div className={styles.imgContainer}>
        <Image
          src={`/static/images/pharmaceutical.png`}
          alt="Pharmaceutical"
          fill
          unoptimized={true}
        />
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{t(`pharmaceutical.title`)}</h3>
        <p className={styles.description}>{t(`pharmaceutical.description`)}</p>
        <Button
          text={t("button")}
          onClick={() => push(`/services/pharmaceutical`)}
        />
      </div>
    </div>
  );
};

export default PharmaceuticalService;
