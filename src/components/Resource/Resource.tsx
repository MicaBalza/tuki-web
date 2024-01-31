import React from "react";
import { CONTENT } from "./constants";
import styles from "./styles.module.css";
import Button from "../Button";
import Image from "next/image";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";

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
  const { push } = useRouter();

  return (
    <div className={`${styles.wrapper} ${styles[variant]}`}>
      <div className={styles.text}>
        <h3 className={styles.title}>{CONTENT[variant].title}</h3>
        <p className={styles.description}>{CONTENT[variant].description}</p>
        <Button
          text="Echa un vistazo"
          onClick={() => push(`/projects/${variant.toLowerCase()}`)}
        />
      </div>
      <Image
        src={`/static/images/${variant}.gif`}
        alt="Illustration"
        width={360}
        height={360}
        unoptimized={true}
      />
    </div>
  );
};

export default Resource;
