import PageContainer from "@/components/PageContainer";
import {
  PHARMACEUTICAL_PROCESS_IMAGES,
  PHARMACEUTICAL_SERVICES,
} from "@/constants/pharmaceuticalServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

type Params = {
  lng: string;
  "pharmaceutical-service": string;
};

export default async function PharmaceuticalServicePage(props: {
  params: Promise<Params>;
}) {
  const params = await props.params;
  const serviceId = params["pharmaceutical-service"];

  const service = PHARMACEUTICAL_SERVICES[serviceId];

  if (!service) {
    return notFound();
  }

  const coverTextColor = ["nude", "pink"].includes(service.cover.bgColor)
    ? "purple"
    : "white";

  return (
    <PageContainer
      className={`${styles.container} bg-${service.cover.bgColor}`}
    >
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
            <div className={styles.expandableContent}>
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
      </div>
    </PageContainer>
  );
}
