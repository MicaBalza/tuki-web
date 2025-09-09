import { MouseEvent, ReactNode, useRef, useState } from "react";

import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { getLocalizedRoutes } from "../Navbar/constants";
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
  
  // Get localized routes for current language
  const localizedRoutes = getLocalizedRoutes(lng as "en" | "es");

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
              {localizedRoutes.map((route) => {
                const isActive = pathname.replace(`/${lng}`, "") === route.path;
                return (
                  <div key={route.text} className={styles.mobileNavSection}>
                    <Link
                      href={route.path}
                      className={`text-white pointer ${isActive ? styles.activeMainLink : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {t(route.text)}
                    </Link>
                  {route.dropdown && (
                    <div className={styles.mobileSublinks}>
                      {route.dropdown
                        .filter(
                          (item) =>
                            item.text !== "pharmaceutical" &&
                            item.text !== "projects"
                        )
                        .map((dropdownItem) => {
                          const isSubActive = pathname.replace(`/${lng}`, "") === dropdownItem.path;
                          return (
                            <Link
                              key={dropdownItem.text}
                              href={dropdownItem.path}
                              className={`${styles.sublink} text-white pointer ${isSubActive ? styles.activeLink : ""}`}
                              onClick={() => setIsOpen(false)}
                            >
                              {t(dropdownItem.text)}
                            </Link>
                          );
                        })}
                    </div>
                  )}
                  </div>
                );
              })}
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
