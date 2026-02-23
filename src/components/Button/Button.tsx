import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: ReactNode;
  inverted?: boolean;
  darkBg?: boolean;
  className?: string;
  heading?: "h2" | "h3";
}

const Button = ({
  text,
  children,
  inverted,
  darkBg,
  className,
  heading,
  ...props
}: Props) => {
  const Heading = heading ? heading : "h3";
  const content = children || text;

  return (
    <button
      className={`${styles.button} ${inverted ? styles.inverted : ""} ${
        darkBg ? styles.darkBg : ""
      } ${className || ""}`}
      {...props}
    >
      {heading ? <Heading className="p">{content}</Heading> : <p>{content}</p>}
    </button>
  );
};

export default Button;
