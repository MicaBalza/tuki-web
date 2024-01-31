import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const Button = ({ text, className, ...props }: Props) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
