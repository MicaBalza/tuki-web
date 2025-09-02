import Button from "@/components/Button";
import { useTranslation } from "@/i18n/client";
import { HERO_SECTION_VIDEO_URLS } from "./constants";
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
            src={
              HERO_SECTION_VIDEO_URLS[
                lng as keyof typeof HERO_SECTION_VIDEO_URLS
              ] || HERO_SECTION_VIDEO_URLS.en
            }
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
