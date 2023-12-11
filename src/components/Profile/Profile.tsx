import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { CONTENT } from "./constants";

interface Props {
  person: "flor" | "nati";
  illustration?: boolean;
}

const Profile = ({ person, illustration }: Props) => {
  return (
    <div className={`column align-center g-32 ${styles.container}`}>
      <Image
        src={`/static/images/${person}${illustration ? "-illus" : ""}.png`}
        alt="Illustration"
        width={360}
        height={360}
      />
      <div className="column align-center">
        <h3 className={styles.name}>{CONTENT[person].name}</h3>
        <p className={styles.title}>{CONTENT[person].title}</p>
      </div>
    </div>
  );
};

export default Profile;
