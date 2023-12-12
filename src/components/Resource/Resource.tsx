import React from "react";
import { CONTENT } from "./constants";
import styles from "./styles.module.css";
import Button from "../Button";
import Image from "next/image";

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
      <Image
        src={`/static/images/${variant}.png`}
        alt="Illustration"
        width={360}
        height={360}
        unoptimized={true}
      />
    </div>
  );
};

export default Resource;
