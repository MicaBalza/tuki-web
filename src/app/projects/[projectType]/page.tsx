"use client";

import PageContainer from "@/components/PageContainer";
import Image from "next/image";

import styles from "./page.module.css";

import { useParams } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/string";
import { ILLUSTRATION_PROJECTS } from "@/constants/projects";
import Masonry from "react-responsive-masonry";

export default function Page() {
  const { projectType } = useParams();

  const items = ILLUSTRATION_PROJECTS.map((project, index) => (
    <div
      key={project.name}
      style={{
        height: "450px",
        margin: "10px",
        objectFit: "cover",
      }}
    >
      <img
        src={`/static/images/${projectType}/${project.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/ /g, "-")}/1.jpeg`}
        alt={project.name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  ));

  return (
    <PageContainer>
      <div className={`${styles.hero}`}>
        <h2 className="text-white">
          {capitalizeFirstLetter(projectType as string)}
        </h2>
      </div>
      <div className={styles.projects}>
        <Masonry columnsCount={2} gutter="10px">
          {items}
        </Masonry>
      </div>
    </PageContainer>
  );
}
