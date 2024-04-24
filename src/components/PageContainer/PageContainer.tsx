import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${className || ""} ${styles.pageContainer}`}
    >
      {children}
    </motion.div>
  );
};

export default PageContainer;
