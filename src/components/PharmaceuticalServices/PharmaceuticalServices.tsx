import { getLocalizedPath } from "@/constants/localizedRoutes";
import { useTranslation } from "@/i18n/client";
// [PAGESPEED TEST] import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Button from "../Button";
import styles from "./styles.module.css";

const PharmaceuticalServices = () => {
  const { lng } = useParams();
  const { push } = useRouter();
  const { t } = useTranslation(lng as string, "health-services");

  const listItems = [t("list.item1"), t("list.item2"), t("list.item3")];

  return (
    <section className={styles.container}>
      {/* [PAGESPEED TEST] Image commented out */}
      <div className={styles.imageSection}>
        <div style={{ width: "100%", height: "100%", background: "#d0c4e0", borderRadius: "12px" }} />
      </div>
      <div className={styles.textSection}>
        <h2 className={`${styles.title} text-purple`}>{t("title")}</h2>
        <h3 className={`text-purple p`}>{t("subtitle")}</h3>
        <ul className={styles.list}>
          {listItems.map((item, index) => {
            const serviceSlug = [
              "promotional-videos",
              "product-launch",
              "events-conferences",
            ][index];

            return (
              <li key={index} className={`${styles.listItem} text-white`}>
                {/* [PAGESPEED TEST] chevron commented out */}
                <span className={styles.bullet} style={{ display: "inline-block", width: "16px" }}>›</span>
                <Link
                  href={`/${lng}${getLocalizedPath(
                    `/health-services/${serviceSlug}`,
                    lng as "en" | "es"
                  )}`}
                  className={styles.serviceLink}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          text={t("button")}
          onClick={() =>
            push(
              `/${lng}${getLocalizedPath(
                "/health-services",
                lng as "en" | "es"
              )}`
            )
          }
          className={styles.button}
        />
      </div>
    </section>
  );
};

export default PharmaceuticalServices;
