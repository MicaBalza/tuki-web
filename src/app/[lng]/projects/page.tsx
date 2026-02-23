"use client";

import PageContainer from "@/components/PageContainer";
import ProjectsGrid from "@/components/ProjectsGrid";
import { useParams } from "next/navigation";

type tParams = {
  lng: string;
};

export default function ProjectsPage() {
  const { lng } = useParams() as tParams;

  return (
    <PageContainer className="bg-light-purple">
      <ProjectsGrid lng={lng} />
    </PageContainer>
  );
}
