import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const WhatWeDo = () => {
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
      <video controls src="/static/reel.mp4" className={styles.video}></video>
    </section>
  );
};

export default WhatWeDo;
