"use client";

import styles from "@/app/[lng]/projects/[projectType]/[project]/page.module.css";
import Image from "next/image";
import { useRef, useState } from "react";

type VideoPlayerProps = {
  videoSrc: string;
  autoplay?: boolean;
};

export default function VideoPlayer({ videoSrc, autoplay }: VideoPlayerProps) {
  const video = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.playContainer}>
      {!isPlaying && !autoplay && (
        <div
          onClick={() => {
            setIsPlaying(true);
            video.current?.play();
          }}
        >
          <div className={styles.black} />
          <Image
            src="/static/images/play.svg"
            alt=""
            width={146}
            height={155}
            className={styles.play}
          />
        </div>
      )}
      <video
        src={videoSrc}
        className={styles.playVideo}
        controls={isPlaying}
        ref={video}
        autoPlay={autoplay}
        muted
      ></video>
    </div>
  );
}
