import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className={`column align-center g-40 ${styles.container}`}>
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
      <video controls src="/static/reel.mp4" className={styles.video}></video>
    </section>
  );
};

export default WhatWeDo;
