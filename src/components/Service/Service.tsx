import { useTranslation } from "@/i18n/client";
import { ServiceType } from "@/types/services";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Button from "../Button";
import styles from "./styles.module.css";

export interface Props {
  service: ServiceType;
}

const Service = ({ service }: Props) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "services");
  const { push } = useRouter();

  return (
    <div className={`${styles.wrapper} ${styles[service]}`}>
      <div className={styles.text}>
        <h3 className={styles.title}>{t(`${service}.title`)}</h3>
        <p className={styles.description}>{t(`${service}.description`)}</p>
        <Button
          text={t("button")}
          onClick={() => push(`/services/${service}`)}
        />
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={`/static/images/${service}.gif`}
          alt={service}
          fill
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default Service;
