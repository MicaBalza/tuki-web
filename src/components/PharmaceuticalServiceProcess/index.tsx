import { getLocalizedPath } from "@/constants/localizedRoutes";
import { useTranslation } from "@/i18n/client";
import { useParams, useRouter } from "next/navigation";
import Button from "../Button";
import styles from "./styles.module.css";

interface PharmaceuticalServiceProcessProps {
  service: any; // Translation object with same structure
}

export default function PharmaceuticalServiceProcess({
  service,
}: PharmaceuticalServiceProcessProps) {
  const params = useParams();
  const lng = params?.lng as string;
  const { t } = useTranslation(lng, "pharmaceutical-services");
  const { push } = useRouter();

  return (
    <div className={styles.processSection}>
      <div className={styles.processHeader}>
        <h2 className="text-light-green h1 bold">
          {t("processSection.title")}
        </h2>
        <p className={`text-white ${styles.processSubtitle}`}>
          {t("processSection.subtitle")}
        </p>
        <Button
          text={t("processSection.button")}
          onClick={() =>
            push(
              `/${lng}${getLocalizedPath("/contact-us", lng as "en" | "es")}`
            )
          }
          className={styles.processButton}
          darkBg
        />
      </div>

      <div className={styles.processSteps}>
        {[1, 2, 3, 4, 5, 6].map((stepNumber) => {
          const stepKey = `step${stepNumber}`;
          return (
            <div key={stepNumber} className={styles.processStep}>
              <div className={`${styles.stepNumber} h1 text-light-green`}>
                {stepNumber}
              </div>
              <div className={styles.processStepContent}>
                <h4 className={`${styles.stepTitle} bold text-light-green`}>
                  {t(`processStepTitles.${stepKey}`)}
                </h4>
                <p className={`${styles.stepDescription} text-white`}>
                  {service.processSteps[stepKey]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
