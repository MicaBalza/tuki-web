import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import styles from "./styles.module.css";

const WhatWeDo = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "what-we-do");
  const video = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={`column align-center g-40 ${styles.container}`}>
      <div className={styles.titleContainer}>
        <div className={styles.shapeContainer}>
          <Image
            src={`/static/images/shape1.svg`}
            alt=""
            fill
            className={styles.shape}
          />
        </div>

        <h2 className="text-purple">{t("title")}</h2>
      </div>
      <div className={styles.videoContainer}>
        {!isPlaying && (
          <div
            onClick={() => {
              setIsPlaying(true);
              video.current?.play();
            }}
          >
            <div className={styles.black} />
            <Image
              src="/static/images/reel.jpg"
              alt=""
              fill
              className={styles.videoFrame}
            />
            <Image
              src="/static/images/play.svg"
              alt=""
              width={146}
              height={155}
              className={styles.videoPlay}
            />
          </div>
        )}
        <video
          src="/static/video/reel.mp4"
          className={styles.video}
          ref={video}
          controls={isPlaying}
        ></video>
      </div>
    </section>
  );
};

export default WhatWeDo;
