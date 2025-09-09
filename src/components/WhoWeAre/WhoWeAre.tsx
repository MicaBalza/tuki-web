import { getLocalizedPath } from "@/constants/localizedRoutes";
import { useTranslation } from "@/i18n/client";
import { useParams, useRouter } from "next/navigation";
import Button from "../Button";
import Profile from "../Profile";
import styles from "./styles.module.css";

const WhatWeDo = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "who-we-are");
  const { push } = useRouter();

  return (
    <section className={`row g-96 ${styles.container} justify-center`}>
      <div className={styles.persons}>
        <Profile person="flor" noDescription />
        <Profile person="nat" noDescription />
      </div>
      <div className="column g-24">
        <h3 className="text-purple h2">{t("title")}</h3>
        <Button
          text={t("button")}
          onClick={() =>
            push(`/${lng}${getLocalizedPath("/us", lng as "en" | "es")}`)
          }
          className={styles.desktopButton}
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
