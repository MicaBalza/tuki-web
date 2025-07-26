"use client";

import { useTranslation } from "@/i18n/client";
import { ServiceType } from "@/types/services";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ServiceTypeHeader from "../ServiceTypeHeader";
import SlideMenu from "../SlideMenu";
import SocialLinks from "../SocialLinks";
import { NAVBAR_COLORS, ROUTES } from "./constants";
import styles from "./styles.module.css";

const Navbar = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const { lng, projectType } = useParams();
  const { t } = useTranslation(lng as string, "navbar");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 105) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const color = NAVBAR_COLORS[pathname.replace(`${lng}`, "")] || "red";
  const bgIsDark = color === "red" || color === "green";

  return (
    <nav className={`${styles.navbar} bg-${color}`}>
      <div
        className={`${styles.container} ${
          scrolled ? `${styles.scrolled} bg-${color}` : ""
        }`}
      >
        <div onClick={() => push("/")} className="pointer">
          <Image
            src={
              bgIsDark
                ? "/static/tuki-logo-white.png"
                : "/static/video/tuki-logo.gif"
            }
            alt="Tuki Logo"
            width="179"
            height="100"
            unoptimized
          />
        </div>
        <div className={styles.navlinks}>
          {ROUTES.map((route) => (
            <div
              key={route.text}
              className={`${styles.navlinkContainer} ${
                route.dropdown ? styles.hasDropdown : ""
              }`}
            >
              <Link
                href={route.path}
                className={`${styles.navlink} ${
                  pathname.replace(`/${lng}`, "") === route.path ||
                  pathname.replace(`${lng}`, "") === route.path
                    ? styles.active
                    : ""
                } ${bgIsDark ? "text-white" : "text-purple"} pointer`}
              >
                {(pathname.replace(`/${lng}`, "") === route.path ||
                  pathname.replace(`${lng}`, "") === route.path) && (
                  <span className={styles.underline} />
                )}
                {t(route.text)}
              </Link>
              {route.dropdown && (
                <div className={`${styles.dropdown} bg-${color}`}>
                  {route.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.text}
                      href={dropdownItem.path}
                      className={`${styles.dropdownItem} ${
                        bgIsDark ? "text-white" : "text-purple"
                      } pointer`}
                    >
                      {t(dropdownItem.text)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* <LangSelector invert={bgIsDark} /> */}
          <SocialLinks className={bgIsDark ? "fill-white" : ""} />
        </div>

        <div className={styles.slideMenu}>
          <SlideMenu />
        </div>
      </div>
      {projectType && <ServiceTypeHeader type={projectType as ServiceType} />}
    </nav>
  );
};

export default Navbar;
