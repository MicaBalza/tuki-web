"use client";

import { useTranslation } from "@/i18n/client";
import { ServiceType } from "@/types/services";
import { motion } from "framer-motion";
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
  const { lng, serviceType } = useParams();
  const { t } = useTranslation(lng as string, "navbar");

  const [scrolled, setScrolled] = useState(false);
  const [hoveredRoute, setHoveredRoute] = useState<string | null>(null);

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
          {ROUTES.map((route) => {
            const cleanPath = pathname.replace(`/${lng}`, "") || "/";
            const isExactMatch = cleanPath === route.path;
            const isNestedMatch = route.path !== "/" && cleanPath.startsWith(route.path + "/");
            const isActive = isExactMatch || isNestedMatch;
            const isHovered = hoveredRoute === route.path;
            const showUnderline = isActive || isHovered;

            return (
              <div
                key={route.text}
                className={`${styles.navlinkContainer} ${
                  route.dropdown ? styles.hasDropdown : ""
                }`}
                onMouseEnter={() => setHoveredRoute(route.path)}
                onMouseLeave={() => setHoveredRoute(null)}
              >
                <Link
                  href={route.path}
                  className={`${styles.navlink} ${
                    isActive ? styles.active : ""
                  } ${bgIsDark ? "text-white" : "text-purple"} pointer`}
                >
                  {showUnderline && (
                    <motion.span
                      layoutId="navbar-underline"
                      className={`${styles.underline} ${
                        bgIsDark ? "bg-white" : "bg-purple"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
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
            );
          })}
          {/* <LangSelector invert={bgIsDark} /> */}
          <SocialLinks className={bgIsDark ? "fill-white" : ""} />
        </div>

        <div className={styles.slideMenu}>
          <SlideMenu />
        </div>
      </div>
      {serviceType && <ServiceTypeHeader type={serviceType as ServiceType} />}
    </nav>
  );
};

export default Navbar;
