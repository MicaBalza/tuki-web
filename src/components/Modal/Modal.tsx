"use client";

import { ReactNode, useEffect, useState } from "react";

import { createPortal } from "react-dom";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
  isModalOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isModalOpen, onClose }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (isModalOpen !== true) {
    return null;
  }

  return mounted
    ? createPortal(
        <section className={styles.modal}>
          <article className={styles.modalContent}>
            <main>{children}</main>
          </article>
        </section>,
        document.body
      )
    : null;
};

export default Modal;
