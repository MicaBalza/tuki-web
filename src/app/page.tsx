"use client";

import styles from "./page.module.css";
import Resource from "@/components/Resource";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import PageContainer from "@/components/PageContainer";

export default function Home() {
  return (
    <PageContainer className={styles.main}>
      <Hero />
      <WhatWeDo />
      <section className="row">
        <Resource variant="illustration" />
        <Resource variant="animation" />
      </section>
      <section className="row">
        <Resource variant="social-media" />
        <Resource variant="editorial" />
      </section>
      <section className="row">
        <Resource variant="branding" />
        <Resource variant="motion-graphics" />
      </section>
      <WhoWeAre />
      <Clients />
      <ContactUs />
    </PageContainer>
  );
}
