import React, { LegacyRef, useRef, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const WhatWeDo = () => {
  const video = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={`column align-center g-40 ${styles.container}`}>
      <div className="row g-32">
        <Image
          src={`/static/images/shape1.svg`}
          alt=""
          width={82}
          height={56}
        />
        <h3>Esto es lo que hacemos</h3>
      </div>
      <div className={styles.videoContainer}>
        {!isPlaying && (
          <>
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
              onClick={() => {
                setIsPlaying(true);
                video.current?.play();
              }}
            />
          </>
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
