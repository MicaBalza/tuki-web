import { useParams, useRouter } from "next/navigation";

import { useTranslation } from "@/i18n/client";
import Button from "../Button";
import styles from "./styles.module.css";

import Image from "next/image";
import { useRef, useState } from "react";

const Hero = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "hero");
  const { push } = useRouter();

  const video = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.subtitle}>{t("subtitle")}</p>
          <h1 className={styles.title}>{t("title")}</h1>
          <Button text={t("button")} onClick={() => push("/projects")} />
        </div>
        <div
          className={styles.videoContainer}
          onClick={() => {
            setIsMuted(!isMuted);
          }}
        >
          <div className={styles.videoSound}>
            <Image
              src={`/static/images/sound-${isMuted ? "off" : "on"}.svg`}
              alt=""
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <video
            autoPlay
            muted={isMuted}
            loop
            src={`/static/video/main.mp4`}
            className={styles.video}
            ref={video}
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
