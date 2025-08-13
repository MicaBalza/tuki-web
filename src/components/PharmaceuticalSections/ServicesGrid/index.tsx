import Button from "@/components/Button";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useState } from "react";
import { ServiceImage, serviceImages } from "./constants";
import styles from "./styles.module.css";

interface ServicesGridProps {
  lng: string;
}

export default function ServicesGrid({ lng }: ServicesGridProps) {
  const { t } = useTranslation(lng, "pharmaceutical-services");
  const [selectedService, setSelectedService] = useState<ServiceImage | null>(
    null
  );
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const openModal = (service: ServiceImage) => {
    setSelectedService(service);
    setIsVideoPlaying(false);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsVideoPlaying(false);
  };

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t("grid.title")}</h2>
          <div className={styles.servicesGrid}>
            {serviceImages.reduce((rows, service, index) => {
              const rowIndex = Math.floor(index / 2);
              const isFirstInRow = index % 2 === 0;
              const isSecondRow = rowIndex === 1;

              // Determine size classes based on row and position
              const sizeClass = isSecondRow
                ? isFirstInRow
                  ? styles.narrowFirst
                  : styles.wideSecond
                : isFirstInRow
                ? styles.wideFirst
                : styles.narrowSecond;

              if (isFirstInRow) {
                // Start a new row
                rows.push(
                  <div key={`row-${rowIndex}`} className={styles.gridRow}>
                    <div
                      className={`${styles.gridItem} ${sizeClass}`}
                      onClick={() => openModal(service)}
                    >
                      <img
                        src={service.src}
                        alt={service.alt}
                        className={styles.gridImage}
                      />
                      <div className={styles.imageButton}>
                        <Button
                          text={t(`modal.${service.titleKey}.title`)}
                          inverted
                        />
                      </div>
                    </div>
                  </div>
                );
              } else {
                // Add to existing row
                const lastRow = rows[rows.length - 1];
                const updatedRow = (
                  <div key={`row-${rowIndex}`} className={styles.gridRow}>
                    {lastRow.props.children}
                    <div
                      className={`${styles.gridItem} ${sizeClass}`}
                      onClick={() => openModal(service)}
                    >
                      <img
                        src={service.src}
                        alt={service.alt}
                        className={styles.gridImage}
                      />
                      <div className={styles.imageButton}>
                        <Button
                          text={t(`modal.${service.titleKey}.title`)}
                          inverted
                        />
                      </div>
                    </div>
                  </div>
                );
                rows[rows.length - 1] = updatedRow;
              }

              return rows;
            }, [] as JSX.Element[])}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <div className={styles.modalBody}>
              <div className={styles.videoContainer}>
                {!isVideoPlaying && (
                  <div className={styles.videoOverlay} onClick={playVideo}>
                    <div className={styles.videoBlack} />
                    <Image
                      src={selectedService.src}
                      alt={selectedService.alt}
                      fill
                      className={styles.videoFrame}
                    />
                    <Image
                      src="/static/images/play.svg"
                      alt="Play video"
                      width={146}
                      height={155}
                      className={styles.videoPlay}
                    />
                  </div>
                )}
                <iframe
                  src={
                    isVideoPlaying
                      ? `${selectedService.videoUrl}&autoplay=1`
                      : selectedService.videoUrl
                  }
                  title={selectedService.titleKey}
                  className={styles.videoIframe}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className={styles.contentContainer}>
                <h2 className={styles.modalTitle}>
                  {t(`modal.${selectedService.titleKey}.title`)}
                </h2>
                <p className={styles.modalDescription}>
                  {t(`modal.${selectedService.descriptionKey}.description`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
