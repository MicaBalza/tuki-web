import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WhatWeDo = () => {
  const { push } = useRouter();

  return (
    <section
      className={`column ${styles.container} align-center g-24`}
      onClick={() => push("/contact-us")}
    >
      <div className={styles.titleContainer}>
        <Image
          src={`/static/images/shape2.svg`}
          alt=""
          width={82}
          height={56}
          className={styles.misc}
          unoptimized={true}
        />
        <h2 className={styles.title}>Contáctanos</h2>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={`/static/images/hamburguer.gif`}
          alt=""
          width={600}
          height={600}
          unoptimized={true}
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
