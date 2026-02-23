import React from "react";
import styles from "./styles.module.css";
import { LINKS } from "./constants";
import Link from "next/link";

interface Props {
  className?: string;
}

const SocialLinks = ({ className }: Props) => {
  return (
    <div className={`${className} ${styles.container}`}>
      {LINKS.map((link) => (
        <Link key={link.link} href={link.link}>
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
