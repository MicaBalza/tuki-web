"use client";

import PageContainer from "@/components/PageContainer";
import styles from "./page.module.css";

import Button from "@/components/Button";

import { PROJECTS } from "@/constants/projects";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useCallback, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/bundle";

type tParams = {
  lng: string;
  projectType: string;
  project: string;
};

export default function DynamicPage(props: { params: Promise<tParams> }) {
  const params = use(props.params);

  const { lng, projectType, project } = params;

  const { t } = useTranslation(lng, "services");
  const router = useRouter();
  const video = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const projectData = PROJECTS[projectType as string][project as string];

  const getImgFormat = useCallback(
    (format: string | Record<string, string>, elementIndex: number) => {
      if (typeof format === "string") return format;
      if (typeof format === "object") return format[elementIndex];
      return "jpeg";
    },
    []
  );

  const projectFolder =
    PROJECTS[projectType as string][project as string][0].repeatedFolder ||
    projectType;

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
                              dangerouslySetInnerHTML={{
                                __html: element.goal,
                              }}
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
                        src={`/static/images/${projectFolder}/${project}/cover.${
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
                          src={`/static/images/${projectFolder}/${project}/${elementIndex}-${value}.${getImgFormat(
                            element.format,
                            value
                          )}`}
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
                            src={`/static/images/${projectFolder}/${project}/${elementIndex}-${value}.mp4`}
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
                          {!isPlaying && !element.autoplay && (
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
                            src={`/static/images/${projectFolder}/${project}/${elementIndex}.mp4`}
                            className={styles.playVideo}
                            controls={isPlaying}
                            ref={video}
                            autoPlay={element.autoplay}
                            muted
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
                        src={`/static/images/${projectFolder}/${project}/${elementIndex}.jpeg`}
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
    </PageContainer>
  );
}
