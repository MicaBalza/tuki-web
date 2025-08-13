import Button from "@/components/Button";
import { useState } from "react";
import { ServiceImage, serviceImages } from "./constants";
import styles from "./styles.module.css";

interface ServicesGridProps {
  lng: string;
}

export default function ServicesGrid({ lng }: ServicesGridProps) {
  const [selectedService, setSelectedService] = useState<ServiceImage | null>(
    null
  );

  const openModal = (service: ServiceImage) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.servicesGrid}>
            {serviceImages.reduce((rows, service, index) => {
              const rowIndex = Math.floor(index / 2);
              const isFirstInRow = index % 2 === 0;
              const isSecondRow = rowIndex === 1;
              
              // Determine size classes based on row and position
              const sizeClass = isSecondRow 
                ? (isFirstInRow ? styles.narrowFirst : styles.wideSecond)
                : (isFirstInRow ? styles.wideFirst : styles.narrowSecond);

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
                        <Button text={service.title} inverted />
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
                        <Button text={service.title} inverted />
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
                <iframe
                  src={selectedService.videoUrl}
                  title={selectedService.title}
                  className={styles.videoIframe}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className={styles.contentContainer}>
                <h2 className={styles.modalTitle}>{selectedService.title}</h2>
                <p className={styles.modalDescription}>{selectedService.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
