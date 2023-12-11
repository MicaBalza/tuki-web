import React from "react";
import styles from "./styles.module.css";
import Profile from "../Profile";
import Button from "../Button";

const WhatWeDo = () => {
  return (
    <section className={`row g-96 ${styles.container} justify-center`}>
      <div className="row g-48">
        <Profile person="flor" illustration />
        <Profile person="nati" illustration />
      </div>
      <div className="column g-24">
        <h2>¿Quiénes somos?</h2>
        <Button text="Conocenos" />
      </div>
    </section>
  );
};

export default WhatWeDo;
