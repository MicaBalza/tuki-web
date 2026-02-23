"use client";

import Button from "@/components/Button";
import { getLocalizedPath } from "@/constants/localizedRoutes";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.css";

interface PharmaceuticalServiceVideoProps {
  service: any; // Translation object with same structure
  colors: { video: string };
  serviceId: string;
}

export default function PharmaceuticalServiceVideo({
  service,
  colors,
  serviceId,
}: PharmaceuticalServiceVideoProps) {
  const { push } = useRouter();
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "health-services");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className={`${styles.thirdSection} bg-${colors.video}`}>
      <div className={styles.thirdSectionVideo}>
        {!isVideoPlaying && (
          <div className={styles.videoOverlay} onClick={playVideo}>
            <div className={styles.videoBlack} />
            <Image
              src={`/static/images/pharmaceutical-services/video-placeholders/${serviceId}.jpg`}
              alt={service.cover.title}
              fill
              className={styles.videoPlaceholder}
              style={{ objectFit: "cover" }}
            />
            <Image
              src="/static/images/play.svg"
              alt="Play video"
              width={100}
              height={106}
              className={styles.videoPlay}
            />
          </div>
        )}
        <iframe
          src={
            isVideoPlaying
              ? `${service.video.videoUrl}&autoplay=1`
              : service.video.videoUrl
          }
          title="Health service video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className={styles.video}
          style={{ display: isVideoPlaying ? "block" : "none" }}
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
