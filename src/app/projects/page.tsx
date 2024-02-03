"use client";

import Image from "next/image";

import { SERVICES } from "@/constants/services";
import styles from "./page.module.css";
import PageContainer from "@/components/PageContainer";
import Carrousel from "@/components/Carrousel";

export default function Page() {
  return (
    <PageContainer>
      <div className={styles.hero}>
        <h2 className="text-purple">Esto es lo que hacemos</h2>
        <Image
          src="/static/images/projects.gif"
          alt="Workaholic"
          width={400}
          height={400}
          style={{ objectFit: "cover" }}
          unoptimized={true}
        />
      </div>
      <div className={styles.projects}>
        {SERVICES.map((service) => (
          <Carrousel key={service} service={service} />
        ))}
      </div>
    </PageContainer>
  );
}
