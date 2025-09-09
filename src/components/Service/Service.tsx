import { useTranslation } from "@/i18n/client";
import { ServiceType } from "@/types/services";
import { getLocalizedPath } from "@/constants/localizedRoutes";
import Lottie from "lottie-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import editorialAnimation from "../../../public/static/lottie/editorial.json";
import motionGraphicsAnimation from "../../../public/static/lottie/motion-graphics.json";
import socialMediaAnimation from "../../../public/static/lottie/social-media.json";
import Button from "../Button";
import styles from "./styles.module.css";

export interface Props {
  service: ServiceType;
}

const Service = ({ service }: Props) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "services");
  const { push } = useRouter();

  const lottieAnimations = {
    "motion-graphics": motionGraphicsAnimation,
    "social-media": socialMediaAnimation,
    editorial: editorialAnimation,
  };

  return (
    <div className={`${styles.wrapper} ${styles[service]}`}>
      <div className={styles.text}>
        <h3 className={styles.title}>{t(`${service}.title`)}</h3>
        <p className={styles.description}>{t(`${service}.description`)}</p>
        <Button
          text={t("button")}
          onClick={() => push(`/${lng}${getLocalizedPath(`/services/${service}`, lng as "en" | "es")}`)}
        />
      </div>
      <div className={styles.imgContainer}>
        {service in lottieAnimations ? (
          <Lottie
            animationData={
              lottieAnimations[service as keyof typeof lottieAnimations]
            }
          />
        ) : (
          <Image
            src={`/static/images/${service}.gif`}
            alt={service}
            fill
            unoptimized={true}
          />
        )}
      </div>
    </div>
  );
};

export default Service;
