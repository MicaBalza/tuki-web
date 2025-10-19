"use client";

import PageContainer from "@/components/PageContainer";
import PharmaceuticalServiceFAQ from "@/components/PharmaceuticalServiceFAQ";
import PharmaceuticalServiceHeader from "@/components/PharmaceuticalServiceHeader";
import PharmaceuticalServiceHowWeDoIt from "@/components/PharmaceuticalServiceHowWeDoIt";
import PharmaceuticalServiceProcess from "@/components/PharmaceuticalServiceProcess";
import PharmaceuticalServiceVideo from "@/components/PharmaceuticalServiceVideo";
import { PHARMACEUTICAL_SERVICE_COLORS } from "@/constants/pharmaceuticalServices";
import { useTranslation } from "@/i18n/client";
import { notFound, useParams } from "next/navigation";

type Params = {
  lng: string;
  "health-service": string;
};

export default function PharmaceuticalServicePage() {
  const params = useParams() as Params;
  const serviceId = params["health-service"];
  const { t } = useTranslation(params.lng, "health-services");

  const service = t(`serviceDetails.${serviceId}`, { returnObjects: true });
  const colors =
    PHARMACEUTICAL_SERVICE_COLORS[
      serviceId as keyof typeof PHARMACEUTICAL_SERVICE_COLORS
    ];

  if (!service || typeof service === "string" || !colors) {
    return notFound();
  }

  return (
    <PageContainer className={`bg-${colors.cover}`}>
      <PharmaceuticalServiceHeader service={service} serviceId={serviceId} />
      <PharmaceuticalServiceHowWeDoIt service={service} colors={colors} />
      <PharmaceuticalServiceVideo service={service} colors={colors} />
      <PharmaceuticalServiceProcess service={service} />
      <PharmaceuticalServiceFAQ lng={params.lng} serviceType={serviceId} />
    </PageContainer>
  );
}
