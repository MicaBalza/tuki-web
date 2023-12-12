import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const LOGOS = [
  "levis",
  "cabify",
  "pernod-ricard",
  "western-union",
  "nestle",
  "caixa-bank",
  "pfizer",
  "schneider-electric",
];

const Footer = () => {
  return (
    <section className={styles.clients}>
      <h2 className={styles.title}>Quienes nos eligen</h2>
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          {LOGOS.map((logo) => (
            <div key={logo} className={styles.imageContainer}>
              <Image
                src={`/static/images/logos/${logo}.png`}
                alt={logo}
                fill
                className={styles.image}
              />
            </div>
          ))}
        </div>
        <div className={styles.marquee} aria-hidden="true">
          {LOGOS.map((logo) => (
            <div key={logo} className={styles.imageContainer}>
              <Image
                src={`/static/images/logos/${logo}.png`}
                alt={logo}
                fill
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
