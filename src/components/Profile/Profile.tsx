import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";
import styles from "./styles.module.css";

interface Props {
  person: "flor" | "nat";
  inverted?: boolean;
  noDescription?: boolean;
}

const Profile = ({ person, inverted, noDescription }: Props) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "profile");

  return (
    <div
      className={`${noDescription ? "column" : "row"} ${
        noDescription ? "g-16" : styles.container
      } ${inverted ? styles.inverted : ""}`}
    >
      <video
        autoPlay
        muted
        loop
        src={`/static/video/${person}.mp4`}
        className={styles.video}
      ></video>
      <div className={`column align-center ${styles.content}`}>
        <div className="column">
          <h3 className={styles.name}>{t(`${person}.name`)}</h3>
          <p className={styles.title}>{t(`${person}.title`)}</p>
        </div>
        {!noDescription && (
          <p className={`${styles.description} text-gray`}>
            {t(`${person}.description`)}
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
