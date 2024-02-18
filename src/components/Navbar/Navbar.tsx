"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import SocialLinks from "../SocialLinks";
import { NAVBAR_COLORS, ROUTES } from "./constants";
import styles from "./styles.module.css";

const Navbar = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const { lng } = useParams();

  const color = NAVBAR_COLORS[pathname.replace(`${lng}`, "")] || "red";

  return (
    <nav className={`${styles.navbar} bg-${color}`}>
      <div className={`container ${styles.container}`}>
        <Image
          src="/static/tuki-logo.svg"
          alt="me"
          width="150"
          height="68"
          onClick={() => push("/")}
          className="pointer"
        />
        <div className={styles.navlinks}>
          {ROUTES.map((route) => (
            <Link
              href={route.path}
              key={route.text}
              className={`${styles.navlink} ${
                color === "red" ? "text-white" : "text-purple"
              } pointer`}
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
          <SocialLinks className={color === "red" ? "fill-white" : ""} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
