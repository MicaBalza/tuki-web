import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";
import Button from "../Button";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  inverted?: boolean;
  className?: string;
}

const ContactForm = ({ ...props }: Props) => {
  async function sendMail(formData: FormData) {
    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      tel: formData.get("phone"),
      source: formData.get("source"),
      message: formData.get("message"),
    };

    console.log(rawFormData);
  }

  return (
    <form className="column g-16" action={sendMail}>
      <input
        name="name"
        type="text"
        required
        placeholder="Name"
        className={styles.input}
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className={styles.input}
      />
      <input
        name="tel"
        type="tel"
        placeholder="Móvil"
        className={styles.input}
      />
      <select name="source" required className={styles.select}>
        <option value="">¿Cómo nos has encontrado?</option>
        <option value="Instagram">Instagram</option>
        <option value="Mail">Internet</option>
        <option value="Mail">Conocidxs</option>
      </select>
      <textarea name="message" placeholder="Mensaje" className={styles.input} />
      <Button text="Enviar" type="submit" className="fullWidth" />
    </form>
  );
};

export default ContactForm;
