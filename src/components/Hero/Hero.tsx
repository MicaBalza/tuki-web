"use client";
import { useParams } from "next/navigation";
import { useTranslation } from "@/i18n/client";
import { openCalendarBooking } from "@/utils/calendar";
import Button from "../Button";
import styles from "./styles.module.css";
// [PAGESPEED TEST] Media imports commented out
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import mainAnimation from "../../../public/static/lottie/main.json";

// const Lottie = dynamic(() => import("lottie-react"), {
//   ssr: false,
//   loading: () => <div style={{ width: "100%", height: "100%" }} />,
// });

const Hero = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "hero");

  // [PAGESPEED TEST] All media state/refs/effects commented out
  // const audioRef = useRef<HTMLAudioElement>(null);
  // const lottieRef = useRef<any>(null);
  // const containerRef = useRef<HTMLDivElement>(null);
  // const [isMuted, setIsMuted] = useState(true);
  // const [hasUserInteracted, setHasUserInteracted] = useState(false);
  // const [showAnimation, setShowAnimation] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* TEXT COLUMN */}
        <div className={styles.text}>
          <h1 className={`${styles.subtitle} p`}>
            {t("subtitle")}
          </h1>

          <h3 className={`${styles.title} h1`}>
            {t("title")}
          </h3>

          <div className={styles.buttons}>
            <Button onClick={openCalendarBooking}>
              <span
                dangerouslySetInnerHTML={{ __html: t("button") }}
              />
            </Button>

            <Button
              alternative
              onClick={() =>
                window.open(
                  "https://www.tukistudio.tv/en/services",
                  "_blank"
                )
              }
              text={t("servicesButton")}
            />
          </div>
        </div>

        {/* [PAGESPEED TEST] VIDEO COLUMN - media commented out */}
        <div className={styles.videoContainer}>
          <div style={{ width: "100%", height: "100%", background: "var(--nude)", borderRadius: "12px" }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
