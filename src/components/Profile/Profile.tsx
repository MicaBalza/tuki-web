import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { CONTENT } from "./constants";

interface Props {
  person: "flor" | "nat";
}

const Profile = ({ person }: Props) => {
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
        <h3 className={styles.name}>{CONTENT[person].name}</h3>
        <p className={styles.title}>{CONTENT[person].title}</p>
      </div>
    </div>
  );
};

export default Profile;
