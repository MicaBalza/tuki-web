"use client";
import { use } from "react";

import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import PageContainer from "@/components/PageContainer";
import PharmaceuticalServices from "@/components/PharmaceuticalServices";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import styles from "./page.module.css";

type tParams = {
  lng: string;
};

export default function Home(props: { params: Promise<tParams> }) {
  const params = use(props.params);

  const { lng } = params;

  return (
    <PageContainer className={styles.main}>
      <Hero />
      <WhatWeDo />
      <PharmaceuticalServices />
      <WhoWeAre />
      <Clients />
      <ContactUs />
    </PageContainer>
  );
}
