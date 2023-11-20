import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.hero}>
        <p className={styles.heroText}>Esto es lo que hacemos</p>
        <Image
          src="/static/images/projects.png"
          alt=""
          width={500}
          height={392}
          className={styles.image}
        />
      </div>
      <div className={styles.projects}>
        <div>
          <div></div>
          <p>Ilustración</p>
        </div>
        <div>
          <div></div>
          <p>Ilustración</p>
        </div>
        <div>
          <div></div>
          <p>Ilustración</p>
        </div>
        <div>
          <div></div>
          <p>Ilustración</p>
        </div>
      </div>
    </>
  );
}
