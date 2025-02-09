"use client";;
import { use } from "react";
import ContactForm from "@/components/ContactForm";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";
import styles from "./page.module.css";

import EmailIcon from "@/assets/icons/Contact-Email";
import PhoneIcon from "@/assets/icons/Contact-Phone";
import { useTranslation } from "@/i18n/client";
import { PageProps } from "@/types/i18n";

export default function Page(props: PageProps) {
  const params = use(props.params);

  const {
    lng
  } = params;

  const { t } = useTranslation(lng, "contact-us");

  return (
    <PageContainer className="bg-pink">
      <div className={`${styles.container}`}>
        <div className={`column g-48 ${styles.formContainer}`}>
          <h2 className="text-purple">{t("page.title")}</h2>
          <p className="text-purple">{t("page.description")}</p>
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
                <p>hello@tukistudio.tv</p>
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
          />
        </div>
      </div>
    </PageContainer>
  );
}
