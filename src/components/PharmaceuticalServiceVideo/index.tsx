"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

interface PharmaceuticalServiceVideoProps {
  service: any; // Translation object with same structure
}

export default function PharmaceuticalServiceVideo({
  service,
}: PharmaceuticalServiceVideoProps) {
  const { push } = useRouter();

  return (
    <div className={styles.thirdSection}>
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
          onClick={() => push("/pharmaceutical-services")}
        />
      </div>
    </div>
  );
}
