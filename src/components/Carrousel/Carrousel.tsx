"use client";
import { getLocalizedPath } from "@/constants/localizedRoutes";
import { SERVICES_DATA } from "@/constants/services";
import { ServiceType } from "@/types/services";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ButtonHTMLAttributes, useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Button from "../Button";

// Swiper CSS - loaded only when this component is used
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
      onClick={() =>
        push(
          `/${lng}${getLocalizedPath(
            `/services/${service}`,
            lng as "en" | "es"
          )}`
        )
      }
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
        {Object.keys(SERVICES_DATA[service]).map((project) => (
          <SwiperSlide
            key={SERVICES_DATA[service as string][project][0]?.name || ""}
          >
            <Image
              src={`/static/images/${service}/${project}/cover.${
                SERVICES_DATA[service as string][project][0].format || "jpeg"
              }`}
              alt={SERVICES_DATA[service as string][project][0]?.name || ""}
              fill
              style={{
                objectFit: "cover",
                objectPosition:
                  SERVICES_DATA[service as string][project][0]?.position,
              }}
              unoptimized={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        text={t(`${service}.title`)}
        inverted
        onClick={() =>
          push(
            `/${lng}${getLocalizedPath(
              `/services/${service}`,
              lng as "en" | "es"
            )}`
          )
        }
      />
    </div>
  );
};

export default Carrousel;
