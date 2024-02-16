"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import SocialLinks from "../SocialLinks";
import { ROUTES } from "./constants";
import styles from "./styles.module.css";

const Navbar = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  console.log("🌸 ~ Navbar ~ pathname:", pathname);
  const { lng } = useParams();

  // MEJOR QUE EL DEFAULT SEA NUDE Y VER COMO SETEARLE EL ROJO A PROYECTOS
  const color =
    ROUTES.find((route) => `/${lng}${route.path}` === pathname)?.color || "red";

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
