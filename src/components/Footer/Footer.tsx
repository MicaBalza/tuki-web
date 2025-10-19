"use client";

import { getLocalizedPath } from "@/constants/localizedRoutes";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import Button from "../Button";
import SocialLinks from "../SocialLinks";
import { COLOR_BY_PATH, FOOTER_SECTIONS } from "./constants";
import styles from "./styles.module.css";

const Footer = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "footer");
  const { t: tNav } = useTranslation(lng as string, "navbar");
  const pathname = usePathname();
  const { push } = useRouter();

  const { bgColor, color } = COLOR_BY_PATH.find(
    (route) => route.path === pathname.replace(`/${lng}`, "")
  ) || { bgColor: "purple", color: "white" };

  const isContactPage = pathname.replace(`/${lng}`, "") === "/contact-us";

  return (
    <div
      className={`bg-${bgColor} text-${color} ${styles.footer} ${
        isContactPage ? styles.contactPage : ""
      }`}
    >
      {/* CTA Row - Hidden on contact page */}
      {!isContactPage && (
        <div
          className={`row fullWidth justify-center align-center ${styles.topRow}`}
        >
          <div className={styles.topRowItem}>
            <Image
              src="/static/tuki-logo-full-white.png"
              alt="Tuki Studio"
              title="Tuki Studio"
              width={150}
              height={75}
              className={styles.logo}
            />
          </div>
          <div className={styles.topRowItem}>
            <p className="h2">{t("cta-text")}</p>
          </div>
          <div className={styles.topRowItem}>
            <Button
              text={t("cta-button")}
              onClick={() =>
                push(
                  `/${lng}${getLocalizedPath(
                    "/contact-us",
                    lng as "en" | "es"
                  )}`
                )
              }
              darkBg={bgColor === "purple"}
            />
          </div>
        </div>
      )}

      {/* Navigation Row - Logo included on contact page */}
      <div className={styles.navigationRow}>
        {isContactPage && (
          <div className={styles.logoColumn}>
            <Image
              src="/static/tuki-logo-full-white.png"
              alt="Tuki Studio"
              width={150}
              height={75}
              className={styles.logo}
            />
          </div>
        )}

        {/* Desktop: All sections displayed normally */}
        <div className={styles.desktopNavigation}>
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className={styles.navigationColumn}>
              <Link
                href={`/${lng}${getLocalizedPath(
                  section.path,
                  lng as "en" | "es"
                )}`}
                className={styles.sectionTitle}
              >
                {tNav(section.title)}
              </Link>
              {section.items.length > 0 && (
                <ul className={styles.sectionItems}>
                  {section.items.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={`/${lng}${getLocalizedPath(
                          item.path,
                          lng as "en" | "es"
                        )}`}
                        className={styles.sectionItem}
                      >
                        {tNav(item.text)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Two-column layout */}
        <div className={styles.mobileNavigation}>
          {/* First Column: Inicio, Servicios (with subsections) */}
          <div className={styles.navigationColumn}>
            {FOOTER_SECTIONS.filter(
              (section) =>
                section.title === "home" || section.title === "services"
            ).map((section) => (
              <div key={section.title} className={styles.sectionGroup}>
                <Link
                  href={`/${lng}${getLocalizedPath(
                    section.path,
                    lng as "en" | "es"
                  )}`}
                  className={styles.sectionTitle}
                >
                  {tNav(section.title)}
                </Link>
                {section.items.length > 0 && (
                  <ul className={styles.sectionItems}>
                    {section.items.map((item) => (
                      <li key={item.path}>
                        <Link
                          href={`/${lng}${getLocalizedPath(
                            item.path,
                            lng as "en" | "es"
                          )}`}
                          className={`${styles.sectionItem} p`}
                        >
                          {tNav(item.text)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Second Column: Servicios Farmaceutica, Blog, Quienes Somos, Contacto */}
          <div className={styles.navigationColumn}>
            {FOOTER_SECTIONS.filter(
              (section) =>
                section.title === "health-services" ||
                section.title === "blog" ||
                section.title === "who-we-are" ||
                section.title === "contact"
            ).map((section) => (
              <div key={section.title} className={styles.sectionGroup}>
                <Link
                  href={`/${lng}${getLocalizedPath(
                    section.path,
                    lng as "en" | "es"
                  )}`}
                  className={styles.sectionTitle}
                >
                  {tNav(section.title)}
                </Link>
                {section.items.length > 0 && (
                  <ul className={styles.sectionItems}>
                    {section.items.map((item) => (
                      <li key={item.path}>
                        <Link
                          href={`/${lng}${getLocalizedPath(
                            item.path,
                            lng as "en" | "es"
                          )}`}
                          className={`${styles.sectionItem} p`}
                        >
                          {tNav(item.text)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright and Social Links */}
      <div className={styles.bottomRow}>
        <span className={styles.copyright}>{t("text")}</span>
        <SocialLinks className={`fill-${color}`} />
      </div>
    </div>
  );
};

export default Footer;
