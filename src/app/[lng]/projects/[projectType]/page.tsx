"use client";

import PageContainer from "@/components/PageContainer";
import Image from "next/image";

import styles from "./page.module.css";

import { PROJECTS } from "@/constants/projects";
import { PageProps } from "@/types/i18n";
import { capitalizeFirstLetter } from "@/utils/string";
import { useParams, useRouter } from "next/navigation";

export default function Page({ params: { lng } }: PageProps) {
  const { push } = useRouter();
  const { projectType } = useParams();

  return (
    <PageContainer>
      <div className={`${styles.hero}`}>
        <h2 className="text-white">
          {capitalizeFirstLetter(projectType as string)}
        </h2>
      </div>
      <div className={styles.projects}>
        {PROJECTS[projectType as string].map((project, index) => (
          <div
            key={project.name}
            className={`${styles.project} ${
              PROJECTS[projectType as string].length - 1 === index &&
              PROJECTS[projectType as string].length % 2 !== 0
                ? styles.lastItem
                : ""
            } pointer`}
            onClick={() =>
              push(`/projects/${projectType}/${project.folderName}`)
            }
          >
            <div className={styles.projectHover}>
              <p className="text-white">{project.name}</p>
            </div>
            <Image
              src={`/static/images/${projectType}/${project.folderName}/1.jpeg`}
              alt={project.name}
              fill
              style={{ objectFit: "cover" }}
              unoptimized={true}
            />
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
