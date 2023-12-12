"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";
import Profile from "@/components/Profile";

export default function Us() {
  return (
    <PageContainer>
      <div className={styles.hero}>
        <div className={`container ${styles.container}`}>
          <div className={styles.text}>
            <h3>Somos un estudio creativo ubicado en Barcelona.</h3>
            <p>
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
            height={552}
          />
        </div>
      </div>
      <div className={styles.us}>
        <h2 className={styles.usTitle}>Tuki esta hecho por...</h2>
        <div className={styles.usContainer}>
          <Profile person="flor" />
          <Profile person="nati" />
        </div>
      </div>
      <div className={`column align-center g-24 ${styles.ready}`}>
        <h2>¿Listx para trabajar juntxs?</h2>
        <Button text="Escribenos" />
      </div>
    </PageContainer>
  );
}
