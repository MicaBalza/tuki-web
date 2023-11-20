import React from "react";
import styles from "./styles.module.css";
import SocialLinks from "../SocialLinks";

const Footer = () => {
  return (
    <div className={styles.footer}>
      ©2023 Tuki Studio · ¡Mantengamos el contacto!
      <SocialLinks className={styles.links} />
    </div>
  );
};

export default Footer;
