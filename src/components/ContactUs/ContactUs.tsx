import { useTranslation } from "@/i18n/client";
import { getLocalizedPath } from "@/constants/localizedRoutes";
// [PAGESPEED TEST] import Lottie from "lottie-react";
// [PAGESPEED TEST] import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
// [PAGESPEED TEST] import hamburguerAnimation from "../../../public/static/lottie/hamburguer.json";
import styles from "./styles.module.css";

const WhatWeDo = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "contact-us");
  const { push } = useRouter();

  return (
    <section
      className={`column ${styles.container} align-center`}
      onClick={() => push(`/${lng}${getLocalizedPath("/contact-us", lng as "en" | "es")}`)}
    >
      {/* [PAGESPEED TEST] Shape image and Lottie commented out */}
      <div className={styles.titleContainer}>
        <h2 className="text-purple">{t("title")}</h2>
      </div>
      <div className={styles.imageContainer}>
        <div style={{ width: "200px", height: "200px", background: "#d0c4e0", borderRadius: "12px", margin: "0 auto" }} />
      </div>
    </section>
  );
};

export default WhatWeDo;
