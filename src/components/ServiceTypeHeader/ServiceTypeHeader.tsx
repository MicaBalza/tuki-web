import { useTranslation } from "@/i18n/client";
import { ServiceType } from "@/types/services";
import Image from "next/image";
import { useParams } from "next/navigation";
import { BG_COLORS } from "./constants";
import styles from "./styles.module.css";

interface Props {
  type: ServiceType;
}

const ServiceTypeHeader = ({ type }: Props) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "services");

  return (
    <div className={`${styles.header} bg-${BG_COLORS[type]}`}>
      <div className={styles.titleContainer}>
        <h1 className="text-white">{t(`${type as string}.title`)}</h1>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={`/static/images/section-hero/${type}.png`}
          alt={type}
          fill
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default ServiceTypeHeader;
