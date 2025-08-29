"use client";

import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";
import {
  PHARMACEUTICAL_PROCESS_IMAGES,
  PHARMACEUTICAL_SERVICES,
} from "@/constants/pharmaceuticalServices";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { use } from "react";
import styles from "./page.module.css";

type Params = {
  lng: string;
  "pharmaceutical-service": string;
};

export default function PharmaceuticalServicePage(props: {
  params: Promise<Params>;
}) {
  const params = use(props.params);
  const { "pharmaceutical-service": serviceId } = params;
  const { push } = useRouter();

  const service = PHARMACEUTICAL_SERVICES[serviceId];

  if (!service) {
    return notFound();
  }

  const coverTextColor = ["nude", "pink"].includes(service.cover.bgColor)
    ? "purple"
    : "white";

  return (
    <PageContainer className={`bg-${service.cover.bgColor}`}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.headerImage}>
          <Image
            src={`/static/images/pharmaceutical-services/cover/${service.id}.png`}
            alt={service.cover.title}
            fill
            style={{ objectFit: "cover" }}
            unoptimized={true}
          />
        </div>

        <div className={styles.headerContent}>
          <h1 className={`text-${coverTextColor} bold ${styles.headerTitle}`}>
            {service.cover.title}
          </h1>
        </div>

        <div className={styles.headerDescription}>
          <h2
            className={`text-${coverTextColor}`}
            dangerouslySetInnerHTML={{ __html: service.cover.bigDescription }}
          />
          <p className={`text-${coverTextColor}`}>
            {service.cover.description}
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div
        className={`${styles.secondSection} bg-${service.howWeDoIt.bgColor}`}
      >
        <div className={styles.secondSectionContent}>
          <h3 className={styles.secondSectionTitle}>¿Cómo lo hacemos?</h3>
          <p className={styles.secondSectionDescription}>
            {service.howWeDoIt.description}
          </p>
        </div>

        <div className={styles.processContainer}>
          <div className={styles.processImages}>
            {PHARMACEUTICAL_PROCESS_IMAGES.map((processImage, index) => {
              const animationKey =
                index === 0
                  ? "animation2d"
                  : index === 1
                  ? "animation3d"
                  : "motionGraphics";
              return (
                <div key={index} className={styles.processImageCard}>
                  <div className={styles.processImage}>
                    <Image
                      src={`/static/images/pharmaceutical-services/how-we-do-it/${
                        index + 1
                      }.png`}
                      alt={processImage.alt}
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized={true}
                    />
                  </div>
                  <h3 className={styles.processImageTitle}>
                    {processImage.title}
                  </h3>
                  <Image
                    src="/static/icons/chevron_down_white.svg"
                    alt="Chevron down"
                    width={40}
                    height={40}
                  />
                </div>
              );
            })}
          </div>

          <div className={styles.expandableSection}>
            <div className={styles.expandableGrid}>
              <div className={styles.expandableItem}>
                <p>{service.howWeDoIt.animation2d}</p>
              </div>
              <div className={styles.expandableItem}>
                <p>{service.howWeDoIt.animation3d}</p>
              </div>
              <div className={styles.expandableItem}>
                <p>{service.howWeDoIt.motionGraphics}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - Video and Content */}
      <div className={styles.thirdSection}>
        <div className={styles.thirdSectionVideo}>
          <iframe
            src={service.video.videoUrl}
            title="Pharmaceutical service video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className={styles.video}
          />
        </div>

        <div className={styles.thirdSectionContentContainer}>
          <div className={styles.thirdSectionContent}>
            <h3 className="text-purple text-center">{service.cover.title}</h3>
            <p className={styles.thirdSectionDescription}>
              {service.video.description}
            </p>
          </div>
          <Button
            text="Ver más Videos Farma aquí :)"
            onClick={() => push("/pharmaceutical-services")}
          />
        </div>
      </div>
    </PageContainer>
  );
}
