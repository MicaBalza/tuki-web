"use client";

import PageContainer from "@/components/PageContainer";
import Image from "next/image";

import styles from "./page.module.css";

import Breadcrumb from "@/components/Breadcrumb";
import { PROJECTS } from "@/constants/projects";
import { useTranslation } from "@/i18n/client";
import { PageProps } from "@/types/i18n";
import { useParams, useRouter } from "next/navigation";

export default function Page({ params: { lng } }: PageProps) {
  const { t } = useTranslation(lng, "services");
  const { push } = useRouter();
  const { projectType } = useParams();
  console.log(Object.keys(PROJECTS[projectType as string]));
  return (
    <PageContainer>
      <div className={`${styles.header}`}>
        <h2 className="text-white">{t(`${projectType as string}.title`)}</h2>
      </div>
      <div className={styles.content}>
        <Breadcrumb
          crumbs={[
            { text: "Projects", path: "/projects" },
            { text: t(`${projectType as string}.title`) },
          ]}
        />
        <div className={styles.projects}>
          {Object.keys(PROJECTS[projectType as string]).map(
            (project, index) => (
              <div
                key={project}
                className={`${styles.project} ${
                  PROJECTS[projectType as string].length - 1 === index &&
                  PROJECTS[projectType as string].length % 2 !== 0
                    ? styles.lastItem
                    : ""
                } pointer`}
                onClick={() => push(`/projects/${projectType}/${project}`)}
              >
                <div className={styles.projectHover}>
                  <p className="text-white">
                    {PROJECTS[projectType as string][project][0].name}
                  </p>
                </div>
                <Image
                  src={`/static/images/${projectType}/${project}/cover.jpeg`}
                  alt={PROJECTS[projectType as string][project][0].name}
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized={true}
                />
              </div>
            )
          )}
        </div>
      </div>
    </PageContainer>
  );
}
