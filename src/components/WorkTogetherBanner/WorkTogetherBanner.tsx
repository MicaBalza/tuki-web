import { useTranslation } from "@/i18n/client";
import { useRouter } from "next/navigation";
import { use } from "react";
import Button from "../Button";
import styles from "./styles.module.css";

type tParams = {
  lng: string;
};

const WorkTogetherBanner = (props: { params: Promise<tParams> }) => {
  const params = use(props.params);

  const { lng } = params;
  const { t } = useTranslation(lng, "us");
  const { push } = useRouter();

  return (
    <div className={`column align-center g-24 ${styles.ready}`}>
      <h2>{t("work-together")}</h2>
      <Button
        text={t("work-together-button")}
        onClick={() => push("/contact-us")}
      />
    </div>
  );
};

export default WorkTogetherBanner;
