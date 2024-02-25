import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  inverted?: boolean;
  className?: string;
}

const Button = ({ text, inverted, className, ...props }: Props) => {
  return (
    <button
      className={`${styles.button} ${inverted ? styles.inverted : ""} ${
        className || ""
      }`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
