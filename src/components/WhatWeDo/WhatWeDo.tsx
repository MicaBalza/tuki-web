import { getLocalizedPath } from "@/constants/localizedRoutes";
import { useTranslation } from "@/i18n/client";
// [PAGESPEED TEST] import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
// [PAGESPEED TEST] import { useRef, useState } from "react";
import styles from "./styles.module.css";

const WhatWeDo = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "what-we-do");
  // [PAGESPEED TEST] const video = useRef<HTMLVideoElement>(null);
  // [PAGESPEED TEST] const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={`column align-center g-40 ${styles.container}`}>
      <div className={styles.titleContainer}>
        {/* [PAGESPEED TEST] shape image commented out */}
        <Link
          href={`/${lng}${getLocalizedPath("/services", lng as "en" | "es")}`}
        >
          <h3 className={`text-purple ${styles.title} h2`}>{t("title")}</h3>
        </Link>
      </div>
      {/* [PAGESPEED TEST] Video section commented out */}
      <div className={styles.videoContainer}>
        <div style={{ width: "100%", height: "400px", background: "#e0e0e0", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
          [Video placeholder]
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
