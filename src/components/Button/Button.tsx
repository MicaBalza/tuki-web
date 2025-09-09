import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  inverted?: boolean;
  darkBg?: boolean;
  className?: string;
  heading?: "h2" | "h3";
}

const Button = ({
  text,
  inverted,
  darkBg,
  className,
  heading,
  ...props
}: Props) => {
  const Heading = heading ? heading : "h3";

  return (
    <button
      className={`${styles.button} ${inverted ? styles.inverted : ""} ${
        darkBg ? styles.darkBg : ""
      } ${className || ""}`}
      {...props}
    >
      {heading ? <Heading className="p">{text}</Heading> : <p>{text}</p>}
    </button>
  );
};

export default Button;
