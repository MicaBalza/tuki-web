import React from "react";
import { CONTENT } from "./constants";
import styles from "./styles.module.css";
import Button from "../Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ServiceType } from "@/types/services";

export interface Props {
  service: ServiceType;
}

const Service = ({ service }: Props) => {
  const { push } = useRouter();

  return (
    <div className={`${styles.wrapper} ${styles[service]}`}>
      <div className={styles.text}>
        <h3 className={styles.title}>{CONTENT[service].title}</h3>
        <p className={styles.description}>{CONTENT[service].description}</p>
        <Button
          text="Echa un vistazo"
          onClick={() => push(`/projects/${service}`)}
        />
      </div>
      <Image
        src={`/static/images/${service}.gif`}
        alt="Illustration"
        width={360}
        height={360}
        unoptimized={true}
      />
    </div>
  );
};

export default Service;
