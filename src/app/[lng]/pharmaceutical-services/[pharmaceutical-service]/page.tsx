import PageContainer from "@/components/PageContainer";
import PharmaceuticalServiceHeader from "@/components/PharmaceuticalServiceHeader";
import PharmaceuticalServiceHowWeDoIt from "@/components/PharmaceuticalServiceHowWeDoIt";
import PharmaceuticalServiceVideo from "@/components/PharmaceuticalServiceVideo";
import { PHARMACEUTICAL_SERVICES } from "@/constants/pharmaceuticalServices";
import { notFound } from "next/navigation";

type Params = {
  lng: string;
  "pharmaceutical-service": string;
};

export default async function PharmaceuticalServicePage(props: {
  params: Promise<Params>;
}) {
  const params = await props.params;
  const serviceId = params["pharmaceutical-service"];

  const service = PHARMACEUTICAL_SERVICES[serviceId];

  if (!service) {
    return notFound();
  }

  return (
    <PageContainer className={`bg-${service.cover.bgColor}`}>
      <PharmaceuticalServiceHeader service={service} />
      <PharmaceuticalServiceHowWeDoIt service={service} />
      <PharmaceuticalServiceVideo service={service} />
    </PageContainer>
  );
}