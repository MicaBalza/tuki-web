"use client";

import PageContainer from "@/components/PageContainer";
import HeroSection from "@/components/PharmaceuticalSections/HeroSection";
import ServicesBoard from "@/components/PharmaceuticalSections/ServicesBoard";
import ServicesGrid from "@/components/PharmaceuticalSections/ServicesGrid";
import { useParams } from "next/navigation";
import { useRef } from "react";

type tParams = {
  lng: string;
};

export default function PharmaceuticalServicesPage() {
  const { lng } = useParams() as tParams;
  const section3Ref = useRef<HTMLDivElement>(null);

  const scrollToSection3 = () => {
    section3Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageContainer>
      <HeroSection lng={lng} onButtonClick={scrollToSection3} />
      <ServicesBoard lng={lng} />
      <div ref={section3Ref}>
        <ServicesGrid lng={lng} />
      </div>
    </PageContainer>
  );
}
