"use client";

import PageContainer from "@/components/PageContainer";
import styles from "./page.module.css";

import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import { shutterfly } from "@/constants/animationProjects";
import { PROJECTS } from "@/constants/projects";
import { useTranslation } from "@/i18n/client";
import { PageProps } from "@/types/i18n";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import "swiper/css";
import "swiper/css/bundle";

export default function DynamicPage({ params: { lng } }: PageProps) {
  const { t } = useTranslation(lng, "services");
  const { projectType, project } = useParams();
  const router = useRouter();

  const [showGallery, setShowGallery] = useState(false);
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
      <div className={styles.contentContainer}>
        {shutterfly.map((element: any, i: number) => {
          switch (element.type) {
            case "cover":
              return (
                <div className={styles.coverContainer} key={i}>
                  <div className={styles.coverText}>
                    <p>{element.name}</p>
                    <p>{element.country}</p>
                    <p>{element.description}</p>
                    {element.goal && (
                      <>
                        <p>Objetivo</p>
                        <p>{element.goal}</p>
                      </>
                    )}
                    {element.creativity && (
                      <>
                        <p>Creatividad</p>
                        <p>{element.creativity}</p>
                      </>
                    )}
                    {element.production && (
                      <>
                        <p>Producción</p>
                        <p>{element.production}</p>
                      </>
                    )}
                    {element.projectManagement && (
                      <>
                        <p>Project Management</p>
                        <p>{element.projectManagement}</p>
                      </>
                    )}
                  </div>
                  <div className={styles.coverImg}>
                    <Image
                      src={`/static/images/${projectType}/${project}/cover.jpeg`}
                      alt=""
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized={true}
                    />
                  </div>
                </div>
              );
              break;
            case "flex":
              return (
                <div className={styles[element.flex]}>
                  {Array.from(
                    { length: element.quantity },
                    (_, i) => i + 1
                  ).map((value, index) => (
                    <div className={styles.flexItem} key={index}>
                      <Image
                        src={`/static/images/${projectType}/${project}/${value}.jpeg`}
                        alt=""
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized={true}
                      />
                    </div>
                  ))}
                </div>
              );
            case "info-video":
              return (
                <div className={styles.finalResult} key={i}>
                  <div
                    className={`${styles.flexItem} ${styles.finalResultText} column g-12 align-center text-white`}
                  >
                    <h2>{element.h2}</h2>
                    <p>{element.p}</p>
                  </div>
                  <div
                    className={`${styles.flexItem} ${styles.videoContainer}`}
                  >
                    <iframe
                      src={element.videoUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      className={styles.video}
                    ></iframe>
                  </div>
                </div>
              );
            default:
              break;
          }
        })}
        <Button
          text="Ver más trabajos :)"
          onClick={() => router.back()}
          className="self-center"
        />
      </div>
      {/* <OverlayGallery
        show={showGallery}
        setShow={setShowGallery}
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
      /> */}
    </PageContainer>
  );
}
