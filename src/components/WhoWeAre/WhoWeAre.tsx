import React from "react";
import styles from "./styles.module.css";
import Profile from "../Profile";
import Button from "../Button";
import { useRouter } from "next/navigation";

const WhatWeDo = () => {
  const { push } = useRouter();

  return (
    <section className={`row g-96 ${styles.container} justify-center`}>
      <div className="row g-48">
        <Profile person="flor" />
        <Profile person="nat" />
      </div>
      <div className="column g-24">
        <h2 className="text-purple">¿Quiénes somos?</h2>
        <Button text="Conócenos" onClick={() => push("/us")} />
      </div>
    </section>
  );
};

export default WhatWeDo;
