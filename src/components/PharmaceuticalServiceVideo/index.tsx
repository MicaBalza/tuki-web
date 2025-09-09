"use client";

import Button from "@/components/Button";
import { getLocalizedPath } from "@/constants/localizedRoutes";
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

  return (
    <div className={`${styles.thirdSection} bg-${colors.video}`}>
      <div className={styles.thirdSectionVideo}>
        <iframe
          src={service.video.videoUrl}
          title="Pharmaceutical service video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className={styles.video}
        />
      </div>

      <div className={styles.thirdSectionContentContainer}>
        <div className={styles.thirdSectionContent}>
          <h3 className="text-purple text-center">{service.cover.title}</h3>
          <p className={styles.thirdSectionDescription}>
            {service.video.description}
          </p>
        </div>
        <Button
          text="Ver más Videos Farma aquí :)"
          onClick={() => push(`/${lng}${getLocalizedPath("/pharmaceutical-services", lng as "en" | "es")}`)}
        />
      </div>
    </div>
  );
}
