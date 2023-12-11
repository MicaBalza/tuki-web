"use client";

import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "./constants";
import { usePathname } from "next/navigation";
import SocialLinks from "../SocialLinks";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  const color =
    ROUTES.find((route) => route.path === pathname)?.color || "nude";

  return (
    <nav className={`${styles.navbar} bg-${color}`}>
      <div className={`container ${styles.container}`}>
        <Image src="/tuki-logo.png" alt="me" width="150" height="70" />
        <div className={styles.navlinks}>
          {ROUTES.map((route) => (
            <Link
              href={route.path}
              key={route.text}
              className={`${styles.navlink}`}
            >
              {pathname === route.path && (
                <motion.span
                  layoutId="underline"
                  className={styles.underline}
                />
              )}
              {route.text}
            </Link>
          ))}
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
