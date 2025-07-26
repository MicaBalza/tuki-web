import PageContainer from "@/components/PageContainer";
import styles from "./page.module.css";

import BackButton from "@/components/BackButton";

import VideoPlayer from "@/components/VideoPlayer";
import { SERVICES_DATA } from "@/constants/services";
import { capitalizeFirstLetter } from "@/utils/string";
import Image from "next/image";
import "swiper/css";
import "swiper/css/bundle";

type tParams = {
  lng: string;
  projectType: string;
  project: string;
};

export default async function DynamicPage(props: { params: Promise<tParams> }) {
  const params = await props.params;

  const { projectType, project } = params;

  const getImgFormat = (
    format: string | Record<string, string>,
    elementIndex: number
  ) => {
    if (typeof format === "string") return format;
    if (typeof format === "object") return format[elementIndex];
    return "jpeg";
  };

  const projectFolder =
    SERVICES_DATA[projectType as string][project as string][0].repeatedFolder ||
    projectType;

  const projectData = SERVICES_DATA[projectType as string][project as string];

  return (
    <PageContainer className={`${styles.container} bg-light-purple`}>
      <div className={styles.contentContainer}>
        {projectData.map((element: any, elementIndex: number) => {
          switch (element.type) {
            case "cover":
              return (
                <div className={styles.coverContainer} key={elementIndex}>
                  <div className={styles.coverText}>
                    <div className={`${styles.serviceNameCountry} bg-white`}>
                      <h2 className="h3">{element.name}</h2>
                      <p>{element.country}</p>
                    </div>
                    <p
                      className={`${styles.serviceDescription} bg-purple text-white`}
                    >
                      {element.description}
                    </p>
                    <div className={styles.serviceInfo}>
                      {element.goal && (
                        <div>
                          <p className={styles.serviceInfoTitle}>Objetivo</p>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: element.goal,
                            }}
                          />
                        </div>
                      )}
                      {element.creativity && (
                        <div>
                          <p className={styles.serviceInfoTitle}>Creatividad</p>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: element.creativity,
                            }}
                          />
                        </div>
                      )}
                      {element.production && (
                        <div>
                          <p className={styles.serviceInfoTitle}>Producción</p>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: element.production,
                            }}
                          />
                        </div>
                      )}
                      {element.serviceManagement && (
                        <div>
                          <p className={styles.serviceInfoTitle}>
                            Project Management
                          </p>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: element.serviceManagement,
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
                      <VideoPlayer
                        videoSrc={`/static/images/${projectFolder}/${project}/${elementIndex}.mp4`}
                        autoplay={element.autoplay}
                      />
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
        })}
        <BackButton text="Ver más trabajos :)" className="self-center" />
      </div>
    </PageContainer>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<tParams>;
}) {
  const { lng, projectType, project } = await params;

  const { t } = await import(`@/i18n`).then((mod) =>
    mod.useTranslation(lng, "services")
  );

  const projectData = SERVICES_DATA[projectType as string][project as string];

  return {
    title: `${capitalizeFirstLetter(t(projectType))} - ${projectData[0].name}`,
    description: projectData[0].goal,
  };
}
