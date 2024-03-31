"use client";

import PageContainer from "@/components/PageContainer";
import styles from "./page.module.css";

import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";

import { PROJECTS } from "@/constants/projects";
import { useTranslation } from "@/i18n/client";
import { PageProps } from "@/types/i18n";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/bundle";

export default function DynamicPage({ params: { lng } }: PageProps) {
  const { t } = useTranslation(lng, "services");
  const { projectType, project } = useParams();
  const router = useRouter();

  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const video = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const projectData = PROJECTS[projectType as string][project as string];

  return (
    <PageContainer className={`${styles.container} bg-light-purple`}>
      <div className={styles.contentContainer}>
        {PROJECTS[projectType as string][project as string].map(
          (element: any, elementIndex: number) => {
            switch (element.type) {
              case "cover":
                return (
                  <div className={styles.coverContainer} key={elementIndex}>
                    <div className={styles.coverText}>
                      <Breadcrumb
                        dark
                        crumbs={[
                          { text: "Projects", path: "/projects" },
                          {
                            text: t(`${projectType as string}.title`),
                            path: `/projects/${projectType as string}`,
                          },
                          { text: projectData[0].name ?? "" },
                        ]}
                        className={styles.breadcrumb}
                      />
                      <div className={`${styles.projectNameCountry} bg-white`}>
                        <h3>{element.name}</h3>
                        <p>{element.country}</p>
                      </div>
                      <p
                        className={`${styles.projectDescription} bg-purple text-white`}
                      >
                        {element.description}
                      </p>
                      <div className={styles.projectInfo}>
                        {element.goal && (
                          <div>
                            <p className={styles.projectInfoTitle}>Objetivo</p>
                            <div
                              dangerouslySetInnerHTML={{ __html: element.goal }}
                            />
                          </div>
                        )}
                        {element.creativity && (
                          <div>
                            <p className={styles.projectInfoTitle}>
                              Creatividad
                            </p>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: element.creativity,
                              }}
                            />
                          </div>
                        )}
                        {element.production && (
                          <div>
                            <p className={styles.projectInfoTitle}>
                              Producción
                            </p>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: element.production,
                              }}
                            />
                          </div>
                        )}
                        {element.projectManagement && (
                          <div>
                            <p className={styles.projectInfoTitle}>
                              Project Management
                            </p>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: element.projectManagement,
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={styles.coverImg}>
                      <Image
                        src={`/static/images/${projectType}/${project}/cover.${
                          element.format || "jpeg"
                        }`}
                        alt=""
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: element.position,
                        }}
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
                          src={`/static/images/${projectType}/${project}/${elementIndex}-${value}.${
                            element.format || "jpeg"
                          }`}
                          alt=""
                          fill
                          style={{
                            objectFit: "cover",
                            objectPosition: element.position,
                          }}
                          unoptimized={true}
                        />
                      </div>
                    ))}
                  </div>
                );
              case "flex-video":
                return (
                  <div className={styles[element.flex]}>
                    {element.videoUrl ? (
                      <div
                        className={`${styles.videoContainer} ${styles.flexItem}`}
                      >
                        <iframe
                          src={element.videoUrl}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          className={styles.video}
                        ></iframe>
                      </div>
                    ) : (
                      Array.from(
                        { length: element.quantity },
                        (_, i) => i + 1
                      ).map((value, index) => (
                        <div className={styles.flexItem} key={index}>
                          <video
                            src={`/static/images/${projectType}/${project}/${elementIndex}-${value}.mp4`}
                            className={styles.video}
                            autoPlay
                            muted
                            loop
                          ></video>
                        </div>
                      ))
                    )}
                  </div>
                );
              case "info":
                return (
                  <div className={styles.infoContainer}>
                    <h2 className="text-white">{element.h2}</h2>
                  </div>
                );
              case "info-video":
                return (
                  <div
                    className={`${styles.finalResult} ${
                      element.isReverse ? styles.reverse : ""
                    }`}
                    key={elementIndex}
                  >
                    <div
                      className={`${styles.flexItem} ${styles.finalResultText} column g-12 align-center text-white`}
                    >
                      <h2>{element.h2}</h2>
                      <p>{element.p}</p>
                    </div>
                    <div
                      className={`${styles.flexItem} ${styles.finalResultVideo}`}
                    >
                      {element.videoUrl ? (
                        <iframe
                          src={element.videoUrl}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          className={styles.video}
                        ></iframe>
                      ) : (
                        <div className={styles.playContainer}>
                          {!isPlaying && (
                            <div
                              onClick={() => {
                                setIsPlaying(true);
                                video.current?.play();
                              }}
                            >
                              <div className={styles.black} />
                              <Image
                                src="/static/images/play.svg"
                                alt=""
                                width={146}
                                height={155}
                                className={styles.play}
                              />
                            </div>
                          )}
                          <video
                            src={`/static/images/${projectType}/${project}/${elementIndex}.mp4`}
                            className={styles.playVideo}
                            controls={isPlaying}
                            ref={video}
                          ></video>
                        </div>
                      )}
                    </div>
                  </div>
                );
              case "info-img":
                return (
                  <div
                    className={`${styles.finalResult} ${
                      element.isSquare ? styles.square : ""
                    } ${element.isReverse ? styles.reverse : ""}`}
                    key={elementIndex}
                  >
                    <div
                      className={`${styles.flexItem} ${styles.finalResultText} column g-12 align-center text-white`}
                    >
                      <h2>{element.h2}</h2>
                      <p>{element.p}</p>
                    </div>
                    <div className={styles.flexItem}>
                      <Image
                        src={`/static/images/${projectType}/${project}/${elementIndex}.jpeg`}
                        alt=""
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: element.position,
                        }}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                );
              case "video":
                return (
                  <div className={`${styles.videoContainer}`}>
                    <iframe
                      src={element.videoUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      className={styles.video}
                    ></iframe>
                  </div>
                );
              default:
                break;
            }
          }
        )}
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
