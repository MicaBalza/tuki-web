import { PROJECTS } from "@/constants/projects";
import { ServiceType } from "@/types/services";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ButtonHTMLAttributes, useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Button from "../Button";

import "swiper/css";
import "swiper/css/bundle";

import { useTranslation } from "@/i18n/client";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  service: ServiceType;
}

const Carrousel = ({ service }: Props) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "services");
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
          delay: 100,
        }}
        speed={1000}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {Object.keys(PROJECTS[service]).map((project) => (
          <SwiperSlide
            key={PROJECTS[service as string][project][0]?.name || ""}
          >
            <Image
              src={`/static/images/${service}/${project}/cover.jpeg`}
              alt={PROJECTS[service as string][project][0]?.name || ""}
              fill
              style={{
                objectFit: "cover",
                objectPosition:
                  PROJECTS[service as string][project][0]?.position,
              }}
              unoptimized={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        text={t(`${service}.title`)}
        inverted
        onClick={() => push(`/projects/${service}`)}
      />
    </div>
  );
};

export default Carrousel;
