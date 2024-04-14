import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ButtonHTMLAttributes, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";
import Button from "../Button";
import Modal from "../Modal";
import styles from "./styles.module.css";

type Inputs = {
  name: string;
  email: string;
  tel: string;
  source: string;
  message: string;
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  inverted?: boolean;
  className?: string;
}

const ContactForm = ({ ...props }: Props) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "contact-us");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const options = [
    { value: "instagram", label: "Instagram" },
    { value: "internet", label: "Internet" },
    { value: "conocidos", label: t("form.acquaintances") },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => sendMail(data);

  async function sendMail(formData: Inputs) {
    setIsModalOpen(true);
    setIsSendingEmail(true);

    const apiEndpoint = "/api/email";

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setIsSendingEmail(false);
      })
      .catch((err) => {
        setIsModalOpen(false);
        alert(err);
      });
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modalContent}>
          <div className={styles.gifContainer}>
            <Image
              src={
                isSendingEmail
                  ? "/static/images/contact-form/loading.gif"
                  : "/static/images/contact-form/success.gif"
              }
              alt=""
              fill
              style={{ objectFit: "cover" }}
              unoptimized={true}
            />
          </div>
          {isSendingEmail ? (
            <p className="text-white">Espera un momento...</p>
          ) : (
            <>
              <p className="text-white">¡Mail Enviado con éxito!</p>
              <Button
                text="Volver"
                onClick={() => {
                  setIsModalOpen(false);
                  setIsSendingEmail(false);
                }}
              />
            </>
          )}
        </div>
      </Modal>
      <form
        className="column g-16"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="column g-4">
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Este campo es requerido.",
              },
            })}
            required
            placeholder={t("form.name")}
            className={styles.input}
          />
          {errors.name && (
            <p className={styles.errorMessage}>{errors.name.message}</p>
          )}
        </div>
        <div className="column g-4">
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Este campo es requerido.",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email inválido",
              },
            })}
            type="email"
            required
            placeholder="Email"
            className={styles.input}
          />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}
        </div>
        <input
          {...register("tel")}
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
              return {
                ...baseStyles,
                color: "white",
                backgroundColor: state.isSelected ? "#6a68d4" : "#b2aee9",
                "&:hover": {
                  backgroundColor: "#c0bdea",
                },
              };
            },
          }}
        />
        <textarea
          {...register("message")}
          placeholder={t("form.message")}
          className={styles.input}
        />
        <Button text={t("form.button")} type="submit" className="fullWidth" />
      </form>
    </>
  );
};

export default ContactForm;
