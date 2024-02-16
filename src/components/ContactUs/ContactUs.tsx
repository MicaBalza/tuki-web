import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

const WhatWeDo = () => {
  const { push } = useRouter();

  return (
    <section
      className={`column ${styles.container} align-center`}
      onClick={() => push("/contact-us")}
    >
      <div className={styles.titleContainer}>
        <Image
          src={`/static/images/shape2.svg`}
          alt=""
          width={82}
          height={56}
          unoptimized={true}
        />
        <h2 className="text-purple">Contáctanos</h2>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={`/static/images/hamburguer.gif`}
          alt=""
          width={600}
          height={600}
          unoptimized={true}
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
