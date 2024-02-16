"use client";

import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import PageContainer from "@/components/PageContainer";
import Service from "@/components/Service";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import { SERVICES } from "@/constants/services";
import { PageProps } from "@/types/i18n";
import styles from "./page.module.css";

export default function Home({ params: { lng } }: PageProps) {
  return (
    <PageContainer className={styles.main}>
      <Hero />
      <WhatWeDo />
      <section className={styles.resources}>
        {SERVICES.map((service) => (
          <Service key={service} service={service} />
        ))}
      </section>
      <WhoWeAre />
      <Clients />
      <ContactUs />
    </PageContainer>
  );
}
