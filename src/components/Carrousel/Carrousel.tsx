import React, { ButtonHTMLAttributes, useEffect, useRef } from "react";
import { ServiceType } from "@/types/services";
import { useRouter } from "next/navigation";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import Button from "../Button";

import "swiper/css";
import "swiper/css/bundle";

import styles from "./styles.module.css";
import { capitalizeFirstLetter } from "@/utils/string";

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
      className={`${styles.project} ${styles[service]}`}
      key={service}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
