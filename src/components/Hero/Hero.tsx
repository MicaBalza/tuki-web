import { useParams, useRouter } from "next/navigation";

import { getLocalizedPath } from "@/constants/localizedRoutes";
import { useTranslation } from "@/i18n/client";
import Button from "../Button";
import styles from "./styles.module.css";

import Lottie from "lottie-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import mainAnimation from "../../../public/static/lottie/main.json";

const Hero = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "hero");
  const { push } = useRouter();

  const audioRef = useRef<HTMLAudioElement>(null);
  const lottieRef = useRef<any>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

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
          <Button
            text={t("button")}
            onClick={() =>
              push(
                `/${lng}${getLocalizedPath("/services", lng as "en" | "es")}`
              )
            }
          />
        </div>
        <div className={styles.videoContainer} onClick={handleSoundToggle}>
          <audio
            ref={audioRef}
            src="/static/audio/main.mp3"
            muted={isMuted}
            loop
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
          <Lottie
            lottieRef={lottieRef}
            animationData={mainAnimation}
            loop={true}
            onLoopComplete={handleLoopComplete}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
