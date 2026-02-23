import { MouseEvent, ReactNode, useRef, useState } from "react";

import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import LangSelector from "../LangSelector";
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

                // Get dropdown items from left and right separately
                const dropdownLeftItems = route.dropdownLeft || [];
                const dropdownRightItems = route.dropdownRight || [];
                const dropdownItems = route.dropdown || [];

                return (
                  <div key={route.text} className={styles.mobileNavSection}>
                    <Link
                      href={route.path}
                      className={`text-white pointer ${
                        isActive ? styles.activeMainLink : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {t(route.text)}
                    </Link>

                    {/* Show dropdownLeft items (Services section) */}
                    {dropdownLeftItems.length > 0 && (
                      <div className={styles.mobileSublinks}>
                        {dropdownLeftItems
                          .filter(
                            (item: { text: string; path: string }) =>
                              item.text !== "pharmaceutical" &&
                              item.text !== "projects" &&
                              item.text !== "all-services"
                          )
                          .map(
                            (dropdownItem: { text: string; path: string }) => {
                              const isSubActive: boolean =
                                pathname.replace(`/${lng}`, "") ===
                                dropdownItem.path;
                              return (
                                <Link
                                  key={dropdownItem.text}
                                  href={dropdownItem.path}
                                  className={`${
                                    styles.sublink
                                  } text-white pointer ${
                                    isSubActive ? styles.activeLink : ""
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {t(dropdownItem.text)}
                                </Link>
                              );
                            }
                          )}
                      </div>
                    )}

                    {/* Show "Other services" title and dropdownRight items */}
                    {dropdownRightItems.length > 0 &&
                      route.dropdownRightTitle && (
                        <>
                          <hr className={styles.divider} />
                          <Link
                            href={route.dropdownRightTitle.path}
                            className={`text-white pointer ${
                              pathname.replace(`/${lng}`, "") ===
                              route.dropdownRightTitle.path
                                ? styles.activeMainLink
                                : ""
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {t(route.dropdownRightTitle.text)}
                          </Link>
                          <div className={styles.mobileSublinks}>
                            {dropdownRightItems.map(
                              (dropdownItem: {
                                text: string;
                                path: string;
                              }) => {
                                const isSubActive: boolean =
                                  pathname.replace(`/${lng}`, "") ===
                                  dropdownItem.path;
                                return (
                                  <Link
                                    key={dropdownItem.text}
                                    href={dropdownItem.path}
                                    className={`${
                                      styles.sublink
                                    } text-white pointer ${
                                      isSubActive ? styles.activeLink : ""
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {t(dropdownItem.text)}
                                  </Link>
                                );
                              }
                            )}
                          </div>
                        </>
                      )}

                    {/* Show regular dropdown items if no left/right structure */}
                    {dropdownItems.length > 0 &&
                      !dropdownLeftItems.length &&
                      !dropdownRightItems.length && (
                        <div className={styles.mobileSublinks}>
                          {dropdownItems
                            .filter(
                              (item: { text: string; path: string }) =>
                                item.text !== "pharmaceutical" &&
                                item.text !== "projects"
                            )
                            .map(
                              (dropdownItem: {
                                text: string;
                                path: string;
                              }) => {
                                const isSubActive: boolean =
                                  pathname.replace(`/${lng}`, "") ===
                                  dropdownItem.path;
                                return (
                                  <Link
                                    key={dropdownItem.text}
                                    href={dropdownItem.path}
                                    className={`${
                                      styles.sublink
                                    } text-white pointer ${
                                      isSubActive ? styles.activeLink : ""
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {t(dropdownItem.text)}
                                  </Link>
                                );
                              }
                            )}
                        </div>
                      )}
                  </div>
                );
              })}
            </div>
            <div className={styles.mobileLangSelector}>
              <LangSelector invert />
            </div>
            <div className={styles.footer}>
              <SocialLinks className="fill-white" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
