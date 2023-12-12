"use client";

import React from "react";
import styles from "./styles.module.css";
import SocialLinks from "../SocialLinks";
import { usePathname } from "next/navigation";
import { COLOR_BY_PATH } from "./constants";

const Footer = () => {
  const pathname = usePathname();

  const { bgColor, color } = COLOR_BY_PATH.find(
    (route) => route.path === pathname
  ) || { bgColor: "light-purple", color: "white" };

  return (
    <div className={`bg-${bgColor} text-${color} ${styles.footer}`}>
      ©2023 Tuki Studio · ¡Mantengamos el contacto!
      <SocialLinks className={`fill-${color}`} />
    </div>
  );
};

export default Footer;
