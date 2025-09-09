import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import styles from "./styles.module.css";

interface PharmaceuticalServiceProcessProps {
  service: any; // Translation object with same structure
  colors: { cover: string; howWeDoIt: string };
}

export default function PharmaceuticalServiceProcess({
  service,
  colors,
}: PharmaceuticalServiceProcessProps) {
  const params = useParams();
  const lng = params?.lng as string;
  const { t } = useTranslation(lng, "pharmaceutical-services");

  const processImages = [
    { key: "animation2d", index: 1 },
    { key: "animation3d", index: 2 },
    { key: "motionGraphics", index: 3 },
  ];
  return (
    <div className={`${styles.secondSection} bg-${colors.howWeDoIt}`}>
      <div className={styles.secondSectionContent}>
        <h2 className={`${styles.secondSectionTitle} h3`}>
          {t("howWeDoItSection.title")}
        </h2>
        <p className={styles.secondSectionDescription}>
          {service.howWeDoIt.description}
        </p>
      </div>

      <div className={styles.processContainer}>
        <div className={styles.processImages}>
          {processImages.map((processImage) => (
            <div key={processImage.key} className={styles.processImageCard}>
              <div className={styles.processImage}>
                <Image
                  src={`/static/images/pharmaceutical-services/how-we-do-it/${processImage.index}.png`}
                  alt={t(`processImages.${processImage.key}.alt`)}
                  fill
                  style={{ objectFit: "contain" }}
                  unoptimized={true}
                />
              </div>
              <h3 className={styles.processImageTitle}>
                {t(`processImages.${processImage.key}.title`)}
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
