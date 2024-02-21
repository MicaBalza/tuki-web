"use client";

import Image from "next/image";

import PageContainer from "@/components/PageContainer";
import styles from "./page.module.css";

import Breadcrumb from "@/components/Breadcrumb";
import OverlayGallery from "@/components/OverlayGallery";
import { PROJECTS } from "@/constants/projects";
import { useTranslation } from "@/i18n/client";
import { PageProps } from "@/types/i18n";
import { capitalizeFirstLetter } from "@/utils/string";
import { useParams } from "next/navigation";
import { useState } from "react";
import "swiper/css";
import "swiper/css/bundle";

export default function DynamicPage({ params: { lng } }: PageProps) {
  const { t } = useTranslation(lng, "services");
  const { projectType, project } = useParams();

  const [showGallery, setShowGallery] = useState(false);
  console.log("🌸 ~ DynamicPage ~ showGallery:", showGallery);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectData = PROJECTS[projectType as string].find(
    (p) => p.folderName === project
  );

  return (
    <PageContainer className={`${styles.container} bg-light-purple`}>
      <Breadcrumb
        dark
        crumbs={[
          { text: "Projects", path: "/projects" },
          {
            text: t(`${projectType as string}.title`),
            path: `/projects/${projectType as string}`,
          },
          { text: projectData?.name ?? "" },
        ]}
      />
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
          ).map((value, index) => (
            <div
              key={value}
              className={`${styles.projectImage} pointer`}
              onClick={() => {
                setCurrentIndex(index);
                setShowGallery(true);
              }}
            >
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
      <OverlayGallery
        show={showGallery}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        project={{
          type: projectType as string,
          folderName: projectData?.folderName || "",
        }}
        images={Array.from(
          { length: projectData?.imageQuantity || 0 },
          (_, i) => i + 1
        ).map((value) => ({
          src: `/static/images/${projectType}/${projectData?.folderName}/${value}.jpeg`,
          alt: "",
        }))}
      />
    </PageContainer>
  );
}
