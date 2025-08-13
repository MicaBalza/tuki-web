import Button from "@/components/Button";
import { useTranslation } from "@/i18n/client";
import styles from "./styles.module.css";

interface HeroSectionProps {
  lng: string;
  onButtonClick: () => void;
}

export default function HeroSection({ lng, onButtonClick }: HeroSectionProps) {
  const { t } = useTranslation(lng, "pharmaceutical-services");

  return (
    <section className={styles.section}>
      <div className={styles.heroContent}>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/DwwGHAhw7yc?si=dXIPJ9eGEq1NeReI&autoplay=1&mute=1&loop=1&playlist=DwwGHAhw7yc"
            title="Pharmaceutical Services Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className={styles.textContent}>
          <h1 className="text-purple bold">{t("hero.title")}</h1>
          <p className="text-purple">{t("hero.subtitle")}</p>
          <Button text={t("hero.button")} onClick={onButtonClick} />
        </div>
      </div>
    </section>
  );
}