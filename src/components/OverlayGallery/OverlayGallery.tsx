import Image from "next/image";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  project: {
    type: string;
    folderName: string;
  };
  images: { src: string; alt: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const OverlayGallery = ({
  show,
  setShow,
  project,
  images,
  currentIndex,
  setCurrentIndex,
}: Props) => {
  const openOverlay = (index: number) => {
    setCurrentIndex(index);
  };

  const closeOverlay = () => {
    setCurrentIndex(0);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return show
    ? createPortal(
        <div className={styles.backdrop} onClick={() => setShow(false)}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="pointer"
          >
            <p className={styles.arrow}>&#8249;</p>
          </div>
          <div
            className={styles.gallery}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <Image
              src={`/static/images/${project.type}/${project.folderName}/${
                currentIndex + 1
              }.jpeg`}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "80vw",
                height: "auto",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="pointer"
          >
            <p className={styles.arrow}>&#8250;</p>
          </div>
          <div
            className={`${styles.closeButton} pointer`}
            onClick={() => setShow(false)}
          >
            <p className={styles.cross}>&#10799;</p>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default OverlayGallery;
