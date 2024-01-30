"use client";

import PageContainer from "@/components/PageContainer";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button";

export default function Page() {
  return (
    <PageContainer>
      <div className={`row bg-pink justify-between ${styles.container}`}>
        <div className={`column g-48`}>
          <h2 className="text-purple">
            ¿Estáis listos para comenzar? ¡Nosotros también!
          </h2>
          <p className="text-purple">
            Envíanos un correo a hello@tukistudio.es ó completa el siguiente
            formulario:
          </p>
          <form className="column g-16">
            <input type="text" required placeholder="Name" />
            <input type="email" required placeholder="Email" />
            <input type="tel" placeholder="Móvil" />
            <select required>
              <option value="null" selected>
                ¿Cómo nos has encontrado?
              </option>
              <option value="Instagram">Instagram</option>
              <option value="Mail">Internet</option>
              <option value="Mail">Conocidxs</option>
            </select>
            <textarea placeholder="Mensaje" />
            <Button text="Enviar" type="submit" />
          </form>
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
