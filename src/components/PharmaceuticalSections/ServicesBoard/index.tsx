import { useTranslation } from "@/i18n/client";
import { getLocalizedPath } from "@/constants/localizedRoutes";
import Link from "next/link";
import styles from "./styles.module.css";

interface ServicesBoardProps {
  lng: string;
}

export default function ServicesBoard({ lng }: ServicesBoardProps) {
  const { t } = useTranslation(lng, "pharmaceutical-services");

  const serviceLinks = [
    { key: "item1", url: "institutional-corporate-videos" },
    { key: "item2", url: "product-launch" },
    { key: "item3", url: "tutorial-training" },
    { key: "item4", url: "promotional-videos" },
    { key: "item5", url: "events-conferences" },
    { key: "item6", url: "podcast-videos" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.servicesContent}>
        <div className={styles.boardContainer}>
          <div className={styles.boardWrapper}>
            <img
              src="/static/images/pharmaceutical-services/board.png"
              alt="Services Board"
              className={styles.boardImage}
            />
            <div className={styles.boardContent}>
              <h2 className="text-magenta bold">{t("services.title")}</h2>
              <ul className={styles.servicesList}>
                {serviceLinks.map((service) => (
                  <li key={service.key} className={styles.serviceItem}>
                    <Link
                      href={`/${lng}${getLocalizedPath(`/pharmaceutical-services/${service.url}`, lng as "en" | "es")}`}
                      className={`${styles.serviceLink} text-purple h4`}
                    >
                      <img
                        src="/static/icons/chevron_down.svg"
                        alt="Bullet"
                        className={styles.chevron}
                      />
                      <span>{t(`services.${service.key}`)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.characterContainer}>
          <div className={styles.character}>
            <img
              src="/static/images/pharmaceutical-services/girl.png"
              alt="Pharmaceutical Services Character"
              className={styles.characterImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
