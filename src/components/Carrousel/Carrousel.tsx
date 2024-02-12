import { PROJECTS } from "@/constants/projects";
import { ServiceType } from "@/types/services";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Button from "../Button";

import "swiper/css";
import "swiper/css/bundle";

import { capitalizeFirstLetter } from "@/utils/string";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  service: ServiceType;
}

const Carrousel = ({ service }: Props) => {
  const { push } = useRouter();

  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    swiperRef?.current?.swiper?.autoplay?.stop();
  }, []);

  const handleMouseEnter = () => {
    swiperRef?.current?.swiper?.autoplay?.start();
  };

  const handleMouseLeave = () => {
    swiperRef?.current?.swiper?.autoplay?.stop();
  };
  return (
    <div
      className={`${styles.project} ${styles[service]} pointer`}
      key={service}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => push(`/projects/${service}`)}
    >
      <Swiper
        ref={swiperRef}
        autoplay={{
          delay: 1000,
        }}
        speed={1000}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {PROJECTS[service].map((project) => (
          <SwiperSlide key={project.name}>
            <Image
              src={`/static/images/${service}/${project.folderName}/1.jpeg`}
              alt={project.name}
              fill
              style={{ objectFit: "cover" }}
              unoptimized={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        text={capitalizeFirstLetter(service.replace("-", " "))}
        inverted
        onClick={() => push(`/projects/${service}`)}
      />
    </div>
  );
};

export default Carrousel;
