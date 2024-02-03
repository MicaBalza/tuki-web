import React, { ButtonHTMLAttributes, useEffect, useRef } from "react";
import { ServiceType } from "@/types/services";
import { useRouter } from "next/navigation";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { PROJECTS } from "@/constants/images";
import Image from "next/image";
import Button from "../Button";

import "swiper/css";
import "swiper/css/bundle";

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
      className={`${styles.project} ${
        styles[service.toLowerCase().replace(/ /g, "-")]
      }`}
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
          <SwiperSlide key={project}>
            <Image
              src={`/static/images/${service
                .toLowerCase()
                .replace(/ /g, "-")}/${project}/1.jpeg`}
              alt="Illustration"
              fill
              style={{ objectFit: "cover" }}
              unoptimized={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        text={service}
        inverted
        onClick={() => push(`/projects/${service.toLowerCase()}`)}
      />
    </div>
  );
};

export default Carrousel;
