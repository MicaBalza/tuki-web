"use client";
import { use } from "react";

import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import PageContainer from "@/components/PageContainer";
import PharmaceuticalServices from "@/components/PharmaceuticalServices";
import Reviews from "@/components/Reviews";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import dynamic from "next/dynamic";
import styles from "./page.module.css";

type tParams = {
  lng: string;
};

const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <div style={{ height: "80vh", background: "var(--nude)" }} />,
  ssr: false,
});

export default function Home(props: { params: Promise<tParams> }) {
  const params = use(props.params);

  return (
    <PageContainer className={styles.main}>
      <Hero />
      <WhatWeDo />
      <PharmaceuticalServices />
      <WhoWeAre />
      <Clients />
      <Reviews />
      <ContactUs />
    </PageContainer>
  );
}
