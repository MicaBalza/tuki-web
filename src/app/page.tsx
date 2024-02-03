"use client";

import styles from "./page.module.css";
import Service from "@/components/Service";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import PageContainer from "@/components/PageContainer";
import { SERVICES } from "@/constants/services";

export default function Home() {
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
