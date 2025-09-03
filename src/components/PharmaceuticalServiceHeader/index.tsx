import Image from "next/image";
import styles from "./styles.module.css";

interface PharmaceuticalServiceHeaderProps {
  service: any; // Translation object with same structure
  serviceId: string;
}

export default function PharmaceuticalServiceHeader({
  service,
  serviceId,
}: PharmaceuticalServiceHeaderProps) {
  const coverTextColor = ["nude", "pink"].includes(service.cover.bgColor)
    ? "purple"
    : "white";

  return (
    <div className={styles.headerSection}>
      <div className={styles.headerImage}>
        <Image
          src={`/static/images/pharmaceutical-services/cover/${serviceId}.png`}
          alt={service.cover.title}
          fill
          style={{ objectFit: "cover" }}
          unoptimized={true}
        />
      </div>

      <div className={styles.headerContent}>
        <h1 className={`text-${coverTextColor} bold ${styles.headerTitle}`}>
          {service.cover.title}
        </h1>
      </div>

      <div className={styles.headerDescription}>
        <h2
          className={`text-${coverTextColor}`}
          dangerouslySetInnerHTML={{ __html: service.cover.bigDescription }}
        />
        <p className={`text-${coverTextColor}`}>{service.cover.description}</p>
      </div>
    </div>
  );
}
