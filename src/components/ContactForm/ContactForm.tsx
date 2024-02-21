import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";
import { ButtonHTMLAttributes } from "react";
import Select from "react-select";
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

  const options = [
    { value: "instagram", label: "Instagram" },
    { value: "internet", label: "Internet" },
    { value: "conocidos", label: t("form.acquaintances") },
  ];

  async function sendMail(formData: FormData) {
    const apiEndpoint = "/api/email";
    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      tel: formData.get("phone") || "",
      source: formData.get("source") || "",
      message: formData.get("message") || "",
    };

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(rawFormData),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
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
      <Select
        options={options}
        placeholder={t("form.source")}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "#6a68d4",
            backgroundColor: "transparent",
            height: "40px",
            boxShadow: "none",
            "&:hover": {
              borderColor: "#6a68d4",
            },
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: "#6a68d4",
            fontSize: "13px",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            padding: "2px 18px",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "#6a68d4",
            fontSize: "13px",
          }),
          indicatorSeparator: (baseStyles) => ({
            display: "none",
          }),
          dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            color: "#6a68d4",
            svg: {
              height: "16px",
              width: "16px",
            },
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#b2aee9",
          }),
          option: (baseStyles, state) => {
            console.log(state);
            return {
              ...baseStyles,
              backgroundColor: state.isSelected ? "#6a68d4" : "#b2aee9",
              "&:hover": {
                backgroundColor: "#c0bdea",
              },
            };
          },
        }}
      />
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
