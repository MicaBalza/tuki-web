import Link from "next/link";

import styles from "./styles.module.css";

interface Props {
  crumbs: {
    text: string;
    path?: string;
  }[];
  dark?: boolean;
  className?: string;
}

const Breadcrumb = ({ crumbs, dark, className }: Props) => {
  return (
    <div className={`row ${className ? className : ""}`}>
      {crumbs.map((crumb, index) => (
        <span key={crumb.text} className="row">
          {index > 0 && (
            <span
              className={`${styles.separator} ${
                dark ? "text-purple" : "text-light-purple"
              }`}
            >
              &#8250;
            </span>
          )}
          {crumb.path ? (
            <Link
              href={crumb.path}
              className={`${styles.crumb} ${styles.link}`}
            >
              {crumb.text}
            </Link>
          ) : (
            <span className={`${styles.crumb} ${styles.noLink}`}>
              {crumb.text}
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
