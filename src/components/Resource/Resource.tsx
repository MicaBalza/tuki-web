import React from "react";
import { CONTENT } from "./constants";
import styles from "./styles.module.css";
import Button from "../Button";
import Image from "next/image";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export interface Props {
  variant:
    | "illustration"
    | "animation"
    | "motion-graphics"
    | "social-media"
    | "editorial"
    | "branding";
}

const Resource = ({ variant }: Props) => {
  return (
    <div className={`${styles.wrapper} ${styles[variant]}`}>
      <div className={styles.text}>
        <h3 className={styles.title}>{CONTENT[variant].title}</h3>
        <p className={styles.description}>{CONTENT[variant].description}</p>
        <Button text="Echa un vistazo" />
      </div>
      <video
        autoPlay
        muted
        loop
        src={`/static/video/${variant}.mp4`}
        className={styles.video}
        width={360}
        height={360}
      ></video>
      {/* <Image
        src={`/static/images/${variant}.gif`}
        alt="Illustration"
        width={360}
        height={360}
        unoptimized={true}
      /> */}
      {/* <Player
        autoplay
        loop
        src="/static/lottie/motion-graphics.lottie.json"
        style={{ height: "300px", width: "300px" }}
      >
        <Controls buttons={["play", "repeat", "frame", "debug"]} />
      </Player> */}
    </div>
  );
};

export default Resource;
