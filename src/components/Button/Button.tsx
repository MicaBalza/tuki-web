import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  inverted?: boolean;
  darkBg?: boolean;
  className?: string;
  heading?: "h3";
}

const Button = ({
  text,
  inverted,
  darkBg,
  className,
  heading,
  ...props
}: Props) => {
  return (
    <button
      className={`${styles.button} ${inverted ? styles.inverted : ""} ${
        darkBg ? styles.darkBg : ""
      } ${className || ""}`}
      {...props}
    >
      {heading ? <h3 className="p">{text}</h3> : <p>{text}</p>}
    </button>
  );
};

export default Button;
