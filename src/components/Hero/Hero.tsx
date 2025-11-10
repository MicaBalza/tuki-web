"use client";
import { useParams, useRouter } from "next/navigation";

import { getLocalizedPath } from "@/constants/localizedRoutes";
import { useTranslation } from "@/i18n/client";
import { openCalendarBooking } from "@/utils/calendar";
import Button from "../Button";
import styles from "./styles.module.css";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import mainAnimation from "../../../public/static/lottie/main.json";

// Dynamically import Lottie to avoid adding it to the initial JS bundle
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%" }} />,
});

const Hero = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "hero");
  const { push } = useRouter();

  const audioRef = useRef<HTMLAudioElement>(null);
  const lottieRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  // Only load/play animation when in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowAnimation(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (audioRef.current && hasUserInteracted) {
      const audio = audioRef.current;
      const lottie = lottieRef.current;
      audio.muted = isMuted;
      audio.loop = true;

      if (!isMuted) {
        audio.play().catch(console.error);
        lottie?.play();
      } else {
        audio.pause();
        lottie?.pause();
      }

      return () => {
        audio.pause();
        lottie?.pause();
      };
    }
  }, [isMuted, hasUserInteracted]);

  const handleSoundToggle = () => {
    setHasUserInteracted(true);
    setIsMuted(!isMuted);
  };

  const handleLoopComplete = () => {
    if (audioRef.current && !audioRef.current.paused && !isMuted) {
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={`${styles.subtitle} p`}>{t("subtitle")}</h1>
          <h3 className={`${styles.title} h1`}>{t("title")}</h3>
          <Link
            href={`/${lng}${getLocalizedPath("/services", lng as "en" | "es")}`}
            className={`${styles.servicesLink} h4`}
          >
            <Image
              src="/static/icons/chevron_right.svg"
              alt="Arrow"
              width={28}
              height={28}
              className={styles.chevronIcon}
            />
            {t("servicesLink")}
          </Link>
          <Button onClick={openCalendarBooking}>
            <span dangerouslySetInnerHTML={{ __html: t("button") }} />
          </Button>
        </div>
        <div
          className={styles.videoContainer}
          onClick={handleSoundToggle}
          ref={containerRef}
        >
          <audio
            ref={audioRef}
            src="/static/audio/main.mp3"
            muted={isMuted}
            loop
            preload="none" /* Avoid fetching audio before user interaction */
          />
          <div className={styles.videoSound}>
            <Image
              src={`/static/images/sound-${isMuted ? "off" : "on"}.svg`}
              alt={isMuted ? "Turn on the sound" : "Turn off the sound"}
              title={isMuted ? "Turn on the sound" : "Turn off the sound"}
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          {showAnimation && (
            <Lottie
              lottieRef={lottieRef}
              animationData={mainAnimation}
              loop={true}
              onLoopComplete={handleLoopComplete}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
