"use client";

import PageContainer from "@/components/PageContainer";
import Image from "next/image";

import styles from "./page.module.css";

import { useParams } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/string";
import { PROJECTS } from "@/constants/projects";

export default function Page() {
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
              PROJECTS[projectType as string].length - 1 === index
                ? styles.lastItem
                : ""
            }`}
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
