"use client";

import { useTranslation } from "@/i18n/client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { slide as Menu } from "react-burger-menu";
import LangSelector from "../LangSelector";
import SocialLinks from "../SocialLinks";
import { NAVBAR_COLORS, ROUTES } from "./constants";
import styles from "./styles.module.css";

const Navbar = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "navbar");

  const color = NAVBAR_COLORS[pathname.replace(`${lng}`, "")] || "red";
  const bgIsRed = color === "red";

  return (
    <nav className={`${styles.navbar} bg-${color}`}>
      <div className={`container ${styles.container}`}>
        <div onClick={() => push("/")} className="pointer">
          <Image
            src={
              bgIsRed ? "/static/tuki-logo-white.png" : "/static/tuki-logo.gif"
            }
            alt="Tuki Logo"
            width="179"
            height="100"
          />
        </div>
        <div className={styles.navlinks}>
          {ROUTES.map((route) => (
            <Link
              href={route.path}
              key={route.text}
              className={`${styles.navlink} ${
                color === "red" ? "text-white" : "text-purple"
              } pointer`}
            >
              {(pathname.replace(`/${lng}`, "") === route.path ||
                pathname.replace(`${lng}`, "") === route.path) && (
                <motion.span
                  layoutId="underline"
                  className={styles.underline}
                />
              )}
              {t(route.text)}
            </Link>
          ))}
          <LangSelector />
          <SocialLinks className={color === "red" ? "fill-white" : ""} />
        </div>
        <div className={styles.slideMenu}>
          <Menu right>
            {ROUTES.map((route) => (
              <Link
                href={route.path}
                key={route.text}
                className={`${styles.navlinkSidebar} text-white pointer`}
              >
                {(pathname.replace(`/${lng}`, "") === route.path ||
                  pathname.replace(`${lng}`, "") === route.path) && (
                  <span className={styles.underline} />
                )}
                {t(route.text)}
              </Link>
            ))}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
