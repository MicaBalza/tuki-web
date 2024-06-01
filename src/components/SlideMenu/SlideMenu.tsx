import { MouseEvent, ReactNode, useRef, useState } from "react";

import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ROUTES } from "../Navbar/constants";
import SocialLinks from "../SocialLinks";
import styles from "./styles.module.css";

export type SlideMenuProps = {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function SlideMenu() {
  const pathname = usePathname();
  const { lng } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(lng as string, "navbar");
  const [isOpen, setIsOpen] = useState(false);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className={`${styles.menuIcon} ${isOpen ? styles.menuOpen : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      {isOpen && (
        <div className={styles.backdrop} onClick={handleBackdropClick} />
      )}
      <div
        className={`${styles.container} ${
          isOpen ? styles.open : styles.closed
        }`}
        ref={containerRef}
      >
        {isOpen && (
          <div className={styles.content}>
            <div className={styles.mobileNavlinks}>
              {ROUTES.map((route) => (
                <Link
                  href={route.path}
                  key={route.text}
                  className={`${styles.navlink} text-white pointer`}
                  onClick={() => setIsOpen(false)}
                >
                  {pathname.replace(`/${lng}`, "") === route.path ||
                    pathname.replace(`${lng}`, "") === route.path}
                  {t(route.text)}
                </Link>
              ))}
            </div>
            <div className={styles.footer}>
              <SocialLinks className="fill-white" />
              {/* <LangSelector invert /> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
