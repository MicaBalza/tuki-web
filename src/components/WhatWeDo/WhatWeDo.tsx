import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className={styles.video}>
      <div className={styles.titleContainer}>
        <Image
          src={`/static/images/shape1.svg`}
          alt=""
          width={82}
          height={56}
          className={styles.misc}
        />
        <h2 className={styles.title}>Esto es lo que hacemos</h2>
      </div>
      <iframe
        width="1044"
        height="586"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
    </section>
  );
};

export default WhatWeDo;
