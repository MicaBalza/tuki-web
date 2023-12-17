import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...props }: Props) => {
  return (
    <button className={styles.button} {...props}>
      {text}
    </button>
  );
};

export default Button;
