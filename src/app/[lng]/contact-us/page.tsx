"use client";
import ContactForm from "@/components/ContactForm";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";
import { use } from "react";
import styles from "./page.module.css";

import EmailIcon from "@/assets/icons/Contact-Email";
import PhoneIcon from "@/assets/icons/Contact-Phone";
import { useTranslation } from "@/i18n/client";

type tParams = {
  lng: string;
};

export default function Page(props: { params: Promise<tParams> }) {
  const params = use(props.params);

  const { lng } = params;

  const { t } = useTranslation(lng, "contact-us");

  return (
    <PageContainer className="bg-pink">
      <div className={`${styles.container}`}>
        <div className={`column ${styles.formContainer}`}>
          <h1 className="text-purple h2">{t("page.title")}</h1>
          <h3 className="text-purple p">{t("page.description")}</h3>
          <ContactForm />
          <div
            className={`row justify-between align-start ${styles.contactInfo}`}
          >
            <div className="row align-start g-12">
              <PhoneIcon />
              <div className="text-purple">
                <p className="semibold">{t("page.mobile")}</p>
                <p>+34 667054921</p>
                <p>+34 697805746</p>
              </div>
            </div>
            <div className="row align-start g-12">
              <EmailIcon />
              <div className="text-purple">
                <p className="semibold">EMAIL</p>
                <p>hola@tukistudio.tv</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={`/static/images/hamburguer.gif`}
            alt=""
            fill
            objectFit="contain"
            unoptimized
          />
        </div>
      </div>
    </PageContainer>
  );
}
