import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  inverted?: boolean;
  darkBg?: boolean;
  className?: string;
}

const Button = ({ text, inverted, darkBg, className, ...props }: Props) => {
  return (
    <button
      className={`${styles.button} ${inverted ? styles.inverted : ""} ${
        darkBg ? styles.darkBg : ""
      } ${className || ""}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
