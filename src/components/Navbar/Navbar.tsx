"use client";

import { getLocalizedPath } from "@/constants/localizedRoutes";
import { useTranslation } from "@/i18n/client";
import { ServiceType } from "@/types/services";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import tukiLogoAnimation from "../../../public/static/lottie/tuki_logo.json";
import LangSelector from "../LangSelector";
import ServiceTypeHeader from "../ServiceTypeHeader";
import SlideMenu from "../SlideMenu";
import SocialLinks from "../SocialLinks";
import { NAVBAR_COLORS, getLocalizedRoutes } from "./constants";
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

  useEffect(() => {
    setHoveredRoute(null);
  }, [pathname]);

  const color = NAVBAR_COLORS[pathname.replace(`${lng}`, "")] || "red";
  const bgIsDark = color === "red" || color === "green";

  // Get localized routes for current language
  const localizedRoutes = getLocalizedRoutes(lng as "en" | "es");

  return (
    <nav className={`${styles.navbar} bg-${color}`}>
      <div
        className={`${styles.container} ${
          scrolled ? `${styles.scrolled} bg-${color}` : ""
        }`}
      >
        <div
          onClick={() =>
            push(`/${lng}${getLocalizedPath("/", lng as "en" | "es")}`)
          }
          className="pointer"
          style={{ width: "179px", height: "100px" }}
        >
          {bgIsDark ? (
            <Image
              src="/static/tuki-logo-white.png"
              alt="Tuki Logo"
              width="179"
              height="100"
              unoptimized
            />
          ) : (
            <Lottie
              animationData={tukiLogoAnimation}
              loop={true}
              style={{ width: "179px", height: "100px" }}
            />
          )}
        </div>
        <div className={styles.navlinks}>
          {localizedRoutes.map((route) => {
            const cleanPath = pathname.replace(`/${lng}`, "") || "/";
            const isExactMatch = cleanPath === route.path;
            const isNestedMatch =
              route.path !== "/" && cleanPath.startsWith(route.path + "/");
            const isActive = isExactMatch || isNestedMatch;
            const isHovered = hoveredRoute === route.path;
            const showUnderline = isActive || isHovered;

            return (
              <div
                key={route.text}
                className={`${styles.navlinkContainer} ${
                  route.dropdown || route.dropdownLeft || route.dropdownRight
                    ? styles.hasDropdown
                    : ""
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
                        damping: 30,
                      }}
                    />
                  )}
                  {t(route.text)}
                </Link>
                {(route.dropdown ||
                  route.dropdownLeft ||
                  route.dropdownRight) && (
                  <div
                    className={`${styles.dropdownFullWidth} ${
                      isHovered ? styles.show : ""
                    } bg-${color}`}
                  >
                    <div className={styles.dropdownContent}>
                      <div className={styles.dropdownLeft}>
                        <p
                          className={`${styles.dropdownTitle} bold ${
                            bgIsDark ? "text-white" : "text-purple"
                          }`}
                        >
                          {t(route.text)}
                        </p>
                        <p
                          className={`${styles.dropdownDescription} ${
                            bgIsDark ? "text-white" : "text-purple"
                          }`}
                        >
                          {t(route.description || "")}
                        </p>
                      </div>
                      <div className={styles.dropdownMiddle}>
                        {route.dropdownLeft && (
                          <div className={styles.dropdownColumn}>
                            {route.dropdownLeft.map((dropdownItem: any) => (
                              <Link
                                key={dropdownItem.text}
                                href={dropdownItem.path}
                                className={`${styles.dropdownItemFullWidth} ${
                                  bgIsDark ? "text-white" : "text-purple"
                                } pointer`}
                              >
                                {t(dropdownItem.text)}
                              </Link>
                            ))}
                          </div>
                        )}
                        {route.dropdownRight && (
                          <div
                            className={`${styles.dropdownColumn} ${
                              bgIsDark ? styles.whiteLine : ""
                            }`}
                          >
                            {route.dropdownRightTitle && (
                              <Link
                                href={route.dropdownRightTitle.path}
                                className={`${styles.dropdownColumnTitle} ${
                                  bgIsDark ? "text-white" : "text-purple"
                                } pointer`}
                              >
                                {t(route.dropdownRightTitle.text)}
                              </Link>
                            )}
                            {route.dropdownRight.map((dropdownItem: any) => (
                              <Link
                                key={dropdownItem.text}
                                href={dropdownItem.path}
                                className={`${styles.dropdownItemFullWidth} ${
                                  bgIsDark ? "text-white" : "text-purple"
                                } pointer`}
                              >
                                {t(dropdownItem.text)}
                              </Link>
                            ))}
                          </div>
                        )}
                        {route.dropdown &&
                          !route.dropdownLeft &&
                          !route.dropdownRight && (
                            <>
                              {route.dropdown.map((dropdownItem: any) => (
                                <Link
                                  key={dropdownItem.text}
                                  href={dropdownItem.path}
                                  className={`${styles.dropdownItemFullWidth} ${
                                    bgIsDark ? "text-white" : "text-purple"
                                  } pointer`}
                                >
                                  {t(dropdownItem.text)}
                                </Link>
                              ))}
                            </>
                          )}
                      </div>
                      <div className={styles.dropdownRight}>
                        {route.image && (
                          <Image
                            src="/static/images/toolbar.png"
                            alt={t(route.text)}
                            width={440}
                            height={440}
                            className={styles.dropdownImage}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <LangSelector invert={bgIsDark} />
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
