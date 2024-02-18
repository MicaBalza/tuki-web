import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";
import styles from "./styles.module.css";

interface Props {
  person: "flor" | "nat";
}

const Profile = ({ person }: Props) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "profile");

  return (
    <div className={`column align-center g-32 ${styles.container}`}>
      <video
        autoPlay
        muted
        loop
        src={`/static/video/${person}.mp4`}
        className={styles.video}
        width={360}
        height={360}
      ></video>
      <div className="column align-center">
        <h3 className={styles.name}>{t(`${person}.name`)}</h3>
        <p className={styles.title}>{t(`${person}.title`)}</p>
      </div>
    </div>
  );
};

export default Profile;
