import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Button from "../Button";
import styles from "./styles.module.css";

const PharmaceuticalServices = () => {
  const { lng } = useParams();
  const { push } = useRouter();
  const { t } = useTranslation(lng as string, "pharmaceutical-services");

  const listItems = [t("list.item1"), t("list.item2"), t("list.item3")];

  return (
    <section className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src="/static/images/pharmaceutical-services.png"
          alt="Pharmaceutical Services"
          fill
          className={styles.image}
          unoptimized={true}
        />
      </div>
      <div className={styles.textSection}>
        <h2 className={`${styles.title} text-purple`}>{t("title")}</h2>
        <p className="text-purple">{t("subtitle")}</p>
        <ul className={styles.list}>
          {listItems.map((item, index) => {
            const serviceSlug = [
              "promotional-videos",
              "product-launch",
              "events-conferences",
            ][index];

            return (
              <li key={index} className={`${styles.listItem} text-white`}>
                <img
                  src="/static/icons/chevron_right.svg"
                  alt="Bullet"
                  className={styles.bullet}
                />
                <a
                  href={`/${lng}/pharmaceutical-services/${serviceSlug}`}
                  className={styles.serviceLink}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
        <Button
          text={t("button")}
          onClick={() => push(`/${lng}/pharmaceutical-services`)}
          className={styles.button}
        />
      </div>
    </section>
  );
};

export default PharmaceuticalServices;
