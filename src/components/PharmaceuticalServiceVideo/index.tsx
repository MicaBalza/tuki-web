"use client";

import Button from "@/components/Button";
import { getLocalizedPath } from "@/constants/localizedRoutes";
import { useTranslation } from "@/i18n/client";
import { useParams, useRouter } from "next/navigation";
import styles from "./styles.module.css";

interface PharmaceuticalServiceVideoProps {
  service: any; // Translation object with same structure
  colors: { video: string };
}

export default function PharmaceuticalServiceVideo({
  service,
  colors,
}: PharmaceuticalServiceVideoProps) {
  const { push } = useRouter();
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "health-services");

  return (
    <div className={`${styles.thirdSection} bg-${colors.video}`}>
      <div className={styles.thirdSectionVideo}>
        <iframe
          src={service.video.videoUrl}
          title="Health service video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className={styles.video}
        />
      </div>

      <div className={styles.thirdSectionContentContainer}>
        <div className={styles.thirdSectionContent}>
          <p className="text-purple text-center bold h2">
            {service.cover.title}
          </p>
          <p className={styles.thirdSectionDescription}>
            {service.video.description}
          </p>
        </div>
        <Button
          inverted
          onClick={() =>
            push(
              `/${lng}${getLocalizedPath(
                "/health-services",
                lng as "en" | "es"
              )}`
            )
          }
        >
          <span dangerouslySetInnerHTML={{ __html: t("video.button") }} />
        </Button>
      </div>
    </div>
  );
}
