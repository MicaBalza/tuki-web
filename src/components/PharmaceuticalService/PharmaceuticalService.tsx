import { getLocalizedPath } from "@/constants/localizedRoutes";
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
        <h1 className={`${styles.title} h1`}>{t(`pharmaceutical.title`)}</h1>
        <p className={styles.description}>{t(`pharmaceutical.description`)}</p>
        <Button
          text={t("button")}
          onClick={() =>
            push(
              `/${lng}${getLocalizedPath(
                "/pharmaceutical-services",
                lng as "en" | "es"
              )}`
            )
          }
          heading="h3"
        />
      </div>
    </div>
  );
};

export default PharmaceuticalService;
