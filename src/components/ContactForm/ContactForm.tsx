import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ButtonHTMLAttributes, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
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
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const options = [
    { value: "instagram", label: "Instagram" },
    { value: "internet", label: "Internet" },
    { value: "conocidos", label: t("form.acquaintances") },
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => sendMail(data);

  async function sendMail(formData: Inputs) {
    setIsModalOpen(true);
    setIsSendingEmail(true);
    setEmailError(null);
    setEmailSuccess(false);

    const apiEndpoint = "/api/email";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t("modal.error"));
      }

      setIsSendingEmail(false);
      setEmailSuccess(true);
    } catch (err) {
      setIsSendingEmail(false);
      const errorMessage =
        err instanceof Error ? err.message : t("modal.error");
      setEmailError(errorMessage);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setEmailError(null);
    setEmailSuccess(false);
    setIsSendingEmail(false);
  };

  const handleRetry = () => {
    setEmailError(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modalContent}>
          {!emailError && (
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
          )}
          {emailError ? (
            <>
              <p className="text-white">{t("modal.error")}</p>
              <p
                className="text-white"
                style={{ fontSize: "14px", opacity: 0.8, marginBottom: "16px" }}
              >
                {t("modal.errorDescription")}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "center",
                }}
              >
                <Button text={t("modal.retry")} onClick={handleRetry} />
                <Button
                  text={t("modal.cancel")}
                  onClick={closeModal}
                  inverted
                />
              </div>
            </>
          ) : isSendingEmail ? (
            <p className="text-white">{t("modal.loading")}</p>
          ) : (
            <>
              <p className="text-white">{t("modal.success")}</p>
              <Button text={t("modal.back")} onClick={closeModal} />
            </>
          )}
        </div>
      </Modal>
      <div className="column g-16">
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
                  message: t("errors.required"),
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
                  message: t("errors.required"),
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: t("errors.invalidEmail"),
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
          <Controller
            control={control}
            name="source"
            render={({ field: { onChange, value, ref } }) => (
              <Select
                ref={ref}
                options={options}
                placeholder={t("form.source")}
                value={options.find((c) => c.value === value)}
                onChange={(val) => onChange(val?.value)}
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
                      fontSize: "13px",
                      backgroundColor: state.isSelected ? "#6a68d4" : "#b2aee9",
                      "&:hover": {
                        backgroundColor: "#c0bdea",
                      },
                    };
                  },
                }}
              />
            )}
          />

          <textarea
            {...register("message")}
            placeholder={t("form.message")}
            className={styles.input}
          />
          <Button text={t("form.button")} type="submit" className="fullWidth" />
        </form>
        <Button
          text={t("schedule-button")}
          className="fullWidth"
          inverted
          onClick={() => {
            window.open(
              "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1lzM-I0U1bAKaOZx-ToUdet2mUoli8n2RL5X2MDFzOsqGZxfxIeSfQs3isaQeJbbkMeOVfOLGU",
              "_blank"
            );
          }}
          heading="h2"
        />
      </div>
    </>
  );
};

export default ContactForm;
