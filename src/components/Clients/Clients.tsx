// [PAGESPEED TEST] import LogoLoop from "@/components/LogoLoop";
import { useTranslation } from "@/i18n/client";
// [PAGESPEED TEST] import Image from "next/image";
import { useParams } from "next/navigation";
import styles from "./styles.module.css";
// [PAGESPEED TEST] LogoLoop and LOGOS commented out

const Footer = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "clients");

  return (
    <section className={styles.clients}>
      <div className={styles.titleContainer}>
        {/* [PAGESPEED TEST] shape and logos commented out */}
        <h3 className={`${styles.title} h2`}>{t("title")}</h3>
      </div>
      <div className={styles.marqueeContainer}>
        <div style={{ height: "168px", display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
          [Client logos placeholder]
        </div>
      </div>
    </section>
  );
};

export default Footer;
