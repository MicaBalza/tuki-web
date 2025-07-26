import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Button from "../Button";
import styles from "./styles.module.css";

const PharmaceuticalServices = () => {
  const { lng } = useParams();
  const { push } = useRouter();

  const listItems = [
    "Videos de Promoción",
    "Lanzamiento de productos",
    "Contenido para eventos & conferencias",
  ];

  return (
    <section className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src="/static/images/pharmaceutical-services.png"
          alt="Pharmaceutical Services"
          fill
          className={styles.image}
          unoptimized={true}
        />
      </div>
      <div className={styles.textSection}>
        <h2 className={`${styles.title} text-purple`}>
          Hacemos animación y videos para la industria Farmacéutica
        </h2>
        <p className="text-purple">
          Te ayudamos a crear contenido visual de manera clara y efectiva
        </p>
        <ul className={styles.list}>
          {listItems.map((item, index) => (
            <li key={index} className={`${styles.listItem} text-white`}>
              <img
                src="/static/icons/chevron_right.svg"
                alt="Bullet"
                className={styles.bullet}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button
          text="Conoce todos nuestros servicios :)"
          onClick={() => push(`/${lng}/pharmaceutical-services`)}
          className={styles.button}
        />
      </div>
    </section>
  );
};

export default PharmaceuticalServices;
