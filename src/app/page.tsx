import Button from "@/components/Button";
import styles from "./page.module.css";
import Resource from "@/components/Resource";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.container}`}>
          <div className={styles.text}>
            <p className={styles.subtitle}>Estudio de diseño en Barcelona</p>
            <p className={styles.title}>Animamos tus ideas.</p>
            <Button text="Conoce nuestros trabajos" />
          </div>
          <div className={styles.gifPlaceholder}>Gif recontra re copado</div>
        </div>
      </section>
      <section className={styles.video}>
        <p>Esto es lo que hacemos</p>
        <iframe
          width="1044"
          height="586"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </section>
      <section className={styles.services}>
        <Resource variant="illustration" />
        <Resource variant="animation" />
      </section>
      <section className={styles.services}>
        <Resource variant="social-media" />
        <Resource variant="editorial" />
      </section>
      <section className={styles.services}>
        <Resource variant="branding" />
        <Resource variant="motion-graphics" />
      </section>
      <section className={styles.clients}>
        <p className={styles.title}>Quienes nos eligen</p>
        <p className={styles.clientNames}>
          Levi’s · Cabify · Pernord Ricard · Western Union · Nestlè
        </p>
      </section>
    </main>
  );
}
