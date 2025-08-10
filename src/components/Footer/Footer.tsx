"use client";

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
  const { t: tNav } = useTranslation(lng as string, "navigation");
  const pathname = usePathname();
  const { push } = useRouter();
  console.log("🌸 ~ Footer ~ pathname:", pathname);

  const { bgColor, color } = COLOR_BY_PATH.find(
    (route) => route.path === pathname.replace(`/${lng}`, "")
  ) || { bgColor: "light-purple", color: "white" };

  return (
    <div className={`bg-${bgColor} text-${color} ${styles.footer}`}>
      {/* First Row - Logo, CTA Text, and Button */}
      <div className="row fullWidth justify-center align-center g-96">
        <Image
          src="/static/tuki-logo-full-white.png"
          alt="Tuki Studio"
          width={200}
          height={100}
          className={styles.logo}
        />
        <p className="h2">¿Listx para trabajar juntxs?</p>
        <Button text="Escríbenos" onClick={() => push(`/${lng}/contact-us`)} />
      </div>

      {/* Second Row - Navigation Sections */}
      <div className={styles.navigationRow}>
        {FOOTER_SECTIONS.map((section) => (
          <div key={section.title} className={styles.navigationColumn}>
            <Link
              href={`/${lng}${section.path}`}
              className={styles.sectionTitle}
            >
              {tNav(section.title)}
            </Link>
            {section.items.length > 0 && (
              <ul className={styles.sectionItems}>
                {section.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={`/${lng}${item.path}`}
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

      {/* Third Row - Copyright and Social Links */}
      <div className={styles.bottomRow}>
        <span className={styles.copyright}>{t("text")}</span>
        <SocialLinks className={`fill-${color}`} />
      </div>
    </div>
  );
};

export default Footer;
