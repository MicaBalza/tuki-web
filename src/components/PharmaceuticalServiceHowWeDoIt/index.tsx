import Image from "next/image";
import { PharmaceuticalService, PHARMACEUTICAL_PROCESS_IMAGES } from "@/constants/pharmaceuticalServices";
import styles from "./styles.module.css";

interface PharmaceuticalServiceProcessProps {
  service: PharmaceuticalService;
}

export default function PharmaceuticalServiceProcess({
  service,
}: PharmaceuticalServiceProcessProps) {
  return (
    <div className={`${styles.secondSection} bg-${service.howWeDoIt.bgColor}`}>
      <div className={styles.secondSectionContent}>
        <h3 className={styles.secondSectionTitle}>¿Cómo lo hacemos?</h3>
        <p className={styles.secondSectionDescription}>
          {service.howWeDoIt.description}
        </p>
      </div>

      <div className={styles.processContainer}>
        <div className={styles.processImages}>
          {PHARMACEUTICAL_PROCESS_IMAGES.map((processImage, index) => (
            <div key={index} className={styles.processImageCard}>
              <div className={styles.processImage}>
                <Image
                  src={`/static/images/pharmaceutical-services/how-we-do-it/${
                    index + 1
                  }.png`}
                  alt={processImage.alt}
                  fill
                  style={{ objectFit: "contain" }}
                  unoptimized={true}
                />
              </div>
              <h3 className={styles.processImageTitle}>
                {processImage.title}
              </h3>
              <Image
                src="/static/icons/chevron_down_white.svg"
                alt="Chevron down"
                width={40}
                height={40}
              />
            </div>
          ))}
        </div>

        <div className={styles.expandableSection}>
          <div className={styles.expandableGrid}>
            <div className={styles.expandableItem}>
              <p>{service.howWeDoIt.animation2d}</p>
            </div>
            <div className={styles.expandableItem}>
              <p>{service.howWeDoIt.animation3d}</p>
            </div>
            <div className={styles.expandableItem}>
              <p>{service.howWeDoIt.motionGraphics}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}