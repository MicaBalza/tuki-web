"use client";

import Image from "next/image";

import PageContainer from "@/components/PageContainer";
import styles from "./page.module.css";

import { PROJECTS } from "@/constants/projects";
import { PageProps } from "@/types/i18n";
import { capitalizeFirstLetter } from "@/utils/string";
import { useParams } from "next/navigation";
import "swiper/css";
import "swiper/css/bundle";

export default function DynamicPage({ params: { lng } }: PageProps) {
  const { projectType, project } = useParams();

  const projectData = PROJECTS[projectType as string].find(
    (p) => p.folderName === project
  );

  return (
    <PageContainer className={`${styles.container} bg-light-purple`}>
      <div className={`${styles.hero} text-white`}>
        <h4>{capitalizeFirstLetter((project as string).replace(/-/g, " "))}</h4>
        <p>{projectData?.description}</p>
        <p>País: {projectData?.country}</p>
      </div>
      {projectData?.gridType && projectData?.imageQuantity && (
        <div
          className={`${styles.imagesContainer} ${
            styles[projectData.gridType]
          }`}
        >
          {Array.from(
            { length: projectData.imageQuantity },
            (_, i) => i + 1
          ).map((value) => (
            <div key={value} className={`${styles.projectImage} pointer`}>
              <Image
                src={`/static/images/${projectType}/${projectData.folderName}/${value}.jpeg`}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                unoptimized={true}
              />
            </div>
          ))}
        </div>
      )}
      {projectData?.hasVideo && (
        <div className={styles.videoContainer}>
          <video
            controls
            src={`/static/images/${projectType}/${projectData.folderName}/video.mp4`}
            className={styles.video}
          ></video>
        </div>
      )}
      {projectData?.hasSecondVideo && (
        <div className={styles.videoContainer}>
          <video
            controls
            src={`/static/images/${projectType}/${projectData.folderName}/second-video.mp4`}
            className={styles.video}
          ></video>
        </div>
      )}
      {projectData?.videoUrl && (
        <div className={styles.videoContainer}>
          <iframe
            src={projectData.videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className={styles.video}
          ></iframe>
        </div>
      )}
    </PageContainer>
  );
}
