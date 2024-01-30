import React from "react";
import styles from "./styles.module.css";
import Button from "../Button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { push } = useRouter();

  return (
    <section className={styles.hero}>
      <div className={`${styles.container}`}>
        <div className={styles.text}>
          <p className={`body ${styles.subtitle}`}>
            Estudio de diseño en Barcelona
          </p>
          <h1 className={styles.title}>Le damos vida a tus ideas.</h1>
          <Button
            text="Conoce nuestros trabajos"
            onClick={() => push("/projects")}
          />
        </div>
        <video
          autoPlay
          muted
          loop
          src={`/static/video/main.mp4`}
          className={styles.video}
          width={900}
          height={500}
        ></video>
      </div>
    </section>
  );
};

export default Hero;
