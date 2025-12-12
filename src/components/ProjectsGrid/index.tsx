import Button from "@/components/Button";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useState } from "react";
import { ProjectImage, projectImages } from "./constants";
import styles from "./styles.module.css";

interface ProjectsGridProps {
  lng: string;
}

export default function ProjectsGrid({ lng }: ProjectsGridProps) {
  const { t } = useTranslation(lng, "projects");
  const [selectedProject, setSelectedProject] = useState<ProjectImage | null>(
    null
  );
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const openModal = (project: ProjectImage) => {
    setSelectedProject(project);
    setIsVideoPlaying(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsVideoPlaying(false);
  };

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h1 className={`${styles.sectionTitle} text-white h1`}>
            {t("grid.title")}
          </h1>
          <div className={styles.projectsGrid}>
            {projectImages.reduce((rows, project, index) => {
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
                      onClick={() => openModal(project)}
                    >
                      <img
                        src={project.src}
                        alt={project.alt}
                        className={styles.gridImage}
                      />
                      <div className={styles.playOverlay}>
                        <div className={styles.playBlack} />
                        <Image
                          src="/static/images/play.svg"
                          alt="Play video"
                          width={60}
                          height={64}
                          className={styles.playButton}
                        />
                      </div>
                      <div className={styles.imageButton}>
                        <Button
                          text={t(`modal.${project.titleKey}.title`)}
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
                      onClick={() => openModal(project)}
                    >
                      <img
                        src={project.src}
                        alt={project.alt}
                        className={styles.gridImage}
                      />
                      <div className={styles.playOverlay}>
                        <div className={styles.playBlack} />
                        <Image
                          src="/static/images/play.svg"
                          alt="Play video"
                          width={60}
                          height={64}
                          className={styles.playButton}
                        />
                      </div>
                      <div className={styles.imageButton}>
                        <Button
                          text={t(`modal.${project.titleKey}.title`)}
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
      {selectedProject && (
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
                      src={selectedProject.src}
                      alt={selectedProject.alt}
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
                      ? `${selectedProject.videoUrl}&autoplay=1`
                      : selectedProject.videoUrl
                  }
                  title={selectedProject.titleKey}
                  className={styles.videoIframe}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className={styles.contentContainer}>
                <h2 className={styles.modalTitle}>
                  {t(`modal.${selectedProject.titleKey}.title`)}
                </h2>
                <h4 className="text-light-green">
                  {t(`modal.${selectedProject.titleKey}.subtitle`)}
                </h4>
                <p className={styles.modalDescription}>
                  {t(`modal.${selectedProject.descriptionKey}.description`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
