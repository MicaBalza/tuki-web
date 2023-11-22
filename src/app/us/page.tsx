import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button";

export default function Us() {
  return (
    <>
      <div className={styles.hero}>
        <div className={`container ${styles.container}`}>
          <div className={styles.text}>
            <p className={styles.title}>
              Somos un estudio creativo ubicado en Barcelona.
            </p>
            <p className={styles.description}>
              Nos inspira la diversión - lo irreverente del cambio constante.
              Trasladamos esta idea a todos nuestros proyectos. En nuestro ADN
              está contar historias de la forma más divertida, simple y eficaz.
              Trabajando en conjunto con nuestros clientes, materializamos sus
              ideas e inspiramos a su público objetivo.
            </p>
            <Button text="Trabajemos juntos" />
          </div>
          <Image
            src={"/static/images/us.png"}
            alt=""
            width={896}
            height={584}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.us}>
        <p className={styles.usTitle}>Tuki esta hecho por...</p>
        <div className={styles.usContainer}>
          <div className={styles.profile}>
            <Image
              src={"/static/images/flor.png"}
              alt=""
              width={350}
              height={350}
            />
            <p className={styles.usTitle}>Flor Castarataro</p>
            <p>Estrategia & Dirección de Arte</p>
          </div>
          <div className={styles.profile}>
            <Image
              src={"/static/images/nati.png"}
              alt=""
              width={350}
              height={350}
            />
            <p className={styles.usTitle}>Natalia Balza</p>
            <p>Directora Creativa</p>
          </div>
        </div>
      </div>
    </>
  );
}
