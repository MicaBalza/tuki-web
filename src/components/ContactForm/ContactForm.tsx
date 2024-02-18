import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";
import { ButtonHTMLAttributes } from "react";
import Button from "../Button";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  inverted?: boolean;
  className?: string;
}

const ContactForm = ({ ...props }: Props) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "contact-us");

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
        placeholder={t("form.name")}
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
        placeholder={t("form.mobile")}
        className={styles.input}
      />
      <select name="source" required className={styles.select}>
        <option value="">{t("form.source")}</option>
        <option value="Instagram">Instagram</option>
        <option value="Mail">Internet</option>
        <option value="Mail">{t("form.acquaintances")}</option>
      </select>
      <textarea
        name="message"
        placeholder={t("form.message")}
        className={styles.input}
      />
      <Button text={t("form.button")} type="submit" className="fullWidth" />
    </form>
  );
};

export default ContactForm;
