import Image from "next/image";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

interface Props {
  show: boolean;
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
        <div className={styles.backdrop}>
          <div className={styles.gallery}>
            <Image
              src={`/static/images/${project.type}/${project.folderName}/${
                currentIndex + 1
              }.jpeg`}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "80vw", height: "auto" }}
            />
          </div>
        </div>,
        document.body
      )
    : null;
};

export default OverlayGallery;
