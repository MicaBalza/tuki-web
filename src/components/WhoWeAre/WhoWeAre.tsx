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
        <h2 className="text-purple">{t("title")}</h2>
        <Button
          text={t("button")}
          onClick={() => push("/us")}
          className={styles.desktopButton}
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
