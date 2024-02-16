"use client";

import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";
import Profile from "@/components/Profile";
import { PageProps } from "@/types/i18n";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Us({ params: { lng } }: PageProps) {
  const { push } = useRouter();
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
            <Button
              text="Trabajemos juntos"
              onClick={() => push("/contact-us")}
            />
          </div>
          <Image
            src={"/static/images/us.gif"}
            alt=""
            width={896}
            height={552}
          />
        </div>
      </div>
      <div className={styles.us}>
        <h2 className={styles.usTitle}>Tuki está hecho por...</h2>
        <div className={styles.usContainer}>
          <Profile person="flor" />
          <Profile person="nat" />
        </div>
      </div>
      <div className={`column align-center g-24 ${styles.ready}`}>
        <h2>¿Listx para trabajar juntxs?</h2>
        <Button text="Escribenos" onClick={() => push("/contact-us")} />
      </div>
    </PageContainer>
  );
}
