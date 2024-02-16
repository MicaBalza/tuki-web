"use client";
import ContactForm from "@/components/ContactForm";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";
import styles from "./page.module.css";

import EmailIcon from "@/assets/icons/Contact-Email";
import PhoneIcon from "@/assets/icons/Contact-Phone";
import { PageProps } from "@/types/i18n";

export default function Page({ params: { lng } }: PageProps) {
  return (
    <PageContainer>
      <div className={`row bg-pink justify-between ${styles.container}`}>
        <div className={`column g-48`}>
          <h2 className="text-purple">
            ¿Estáis listxs para comenzar? ¡Nosotrxs también!
          </h2>
          <p className="text-purple">
            Envíanos un correo a hello@tukistudio.tv ó completa el siguiente
            formulario:
          </p>
          <ContactForm />
          <div className="row justify-between align-start">
            <div className="row align-start g-12">
              <PhoneIcon />
              <div className="text-purple">
                <p className="semibold">MÓVIL</p>
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
        <Image
          src={`/static/images/hamburguer.gif`}
          alt="Illustration"
          width={745}
          height={745}
          unoptimized={true}
        />
      </div>
    </PageContainer>
  );
}
