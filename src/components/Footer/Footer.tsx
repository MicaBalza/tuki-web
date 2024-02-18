"use client";

import { useTranslation } from "@/i18n/client";
import { useParams, usePathname } from "next/navigation";
import SocialLinks from "../SocialLinks";
import { COLOR_BY_PATH } from "./constants";
import styles from "./styles.module.css";

const Footer = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "footer");
  const pathname = usePathname();

  const { bgColor, color } = COLOR_BY_PATH.find(
    (route) => route.path === pathname
  ) || { bgColor: "light-purple", color: "white" };

  return (
    <div className={`bg-${bgColor} text-${color} ${styles.footer}`}>
      {t("text")}
      <SocialLinks className={`fill-${color}`} />
    </div>
  );
};

export default Footer;
