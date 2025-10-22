import Button from "@/components/Button";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useState } from "react";
import { HERO_SECTION_VIDEO_URLS } from "./constants";
import styles from "./styles.module.css";

interface HeroSectionProps {
  lng: string;
  onButtonClick: () => void;
}

export default function HeroSection({ lng, onButtonClick }: HeroSectionProps) {
  const { t } = useTranslation(lng, "health-services");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.heroContent}>
        <div className={styles.videoContainer}>
          {!isVideoPlaying && (
            <div className={styles.videoOverlay} onClick={playVideo}>
              <div className={styles.videoBlack} />
              <Image
                src="/static/images/pharmaceutical-services/video-placeholders/main.jpg"
                alt="Health Services Video"
                fill
                className={styles.videoPlaceholder}
                style={{ objectFit: "cover" }}
              />
              <Image
                src="/static/images/play.svg"
                alt="Play video"
                width={120}
                height={127}
                className={styles.videoPlay}
              />
            </div>
          )}
          <iframe
            className={styles.video}
            src={
              isVideoPlaying
                ? `${
                    HERO_SECTION_VIDEO_URLS[
                      lng as keyof typeof HERO_SECTION_VIDEO_URLS
                    ] || HERO_SECTION_VIDEO_URLS.en
                  }&autoplay=1`
                : HERO_SECTION_VIDEO_URLS[
                    lng as keyof typeof HERO_SECTION_VIDEO_URLS
                  ] || HERO_SECTION_VIDEO_URLS.en
            }
            title="Health Services Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ display: isVideoPlaying ? "block" : "none" }}
          />
        </div>
        <div className={styles.textContent}>
          <h1 className="text-purple bold">{t("hero.title")}</h1>
          <h3 className="text-purple p">{t("hero.subtitle")}</h3>
          <Button text={t("hero.button")} onClick={onButtonClick} />
        </div>
      </div>
    </section>
  );
}
