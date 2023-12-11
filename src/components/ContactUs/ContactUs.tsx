import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Button from "../Button";

const WhatWeDo = () => {
  return (
    <section className={`column ${styles.container} align-center`}>
      <div className={styles.titleContainer}>
        <Image
          src={`/static/images/shape2.svg`}
          alt=""
          width={82}
          height={56}
          className={styles.misc}
        />
        <h2 className={styles.title}>Contáctanos</h2>
      </div>
      <Image
        src={`/static/images/hamburguer.png`}
        alt=""
        width={718}
        height={426}
      />
    </section>
  );
};

export default WhatWeDo;
