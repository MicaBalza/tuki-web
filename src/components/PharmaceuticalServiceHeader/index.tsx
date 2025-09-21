import { PHARMACEUTICAL_SERVICE_COLORS } from "@/constants/pharmaceuticalServices";
import { useTranslation } from "@/i18n/client";
import { openCalendarBooking } from "@/utils/calendar";
import Image from "next/image";
import { useParams } from "next/navigation";
import Button from "../Button";
import styles from "./styles.module.css";

interface PharmaceuticalServiceHeaderProps {
  service: any; // Translation object with same structure
  serviceId: string;
}

export default function PharmaceuticalServiceHeader({
  service,
  serviceId,
}: PharmaceuticalServiceHeaderProps) {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "hero");

  const coverTextColor = ["nude", "pink"].includes(
    PHARMACEUTICAL_SERVICE_COLORS[
      serviceId as keyof typeof PHARMACEUTICAL_SERVICE_COLORS
    ].cover
  )
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
        <h4
          className={`text-${coverTextColor} h2 ${styles.headerDescriptionTitle}`}
          dangerouslySetInnerHTML={{ __html: service.cover.bigDescription }}
        />
        <p className={`text-${coverTextColor}`}>{service.cover.description}</p>
        <Button onClick={openCalendarBooking} className={styles.headerButton}>
          <span dangerouslySetInnerHTML={{ __html: t("button") }} />
        </Button>
      </div>
    </div>
  );
}
