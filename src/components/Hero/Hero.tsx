import React from "react";
import styles from "./styles.module.css";
import Button from "../Button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { push } = useRouter();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
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
        <div className={styles.gifPlaceholder}>Gif recontra re copado</div>
      </div>
    </section>
  );
};

export default Hero;
