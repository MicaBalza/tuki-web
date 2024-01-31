"use client";

import Image from "next/image";

import { SERVICES } from "@/constants/services";
import styles from "./page.module.css";
import PageContainer from "@/components/PageContainer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Keyboard, Mousewheel } from "swiper/modules";
import { PROJECTS } from "@/constants/images";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function Page() {
  const { push } = useRouter();

  return (
    <PageContainer>
      <div className={styles.hero}>
        <h2 className="text-purple">Esto es lo que hacemos</h2>
        <Image
          src="/static/images/projects.gif"
          alt="Workaholic"
          width={400}
          height={400}
          style={{ objectFit: "cover" }}
          unoptimized={true}
        />
      </div>
      <div className={styles.projects}>
        {SERVICES.map((service) => (
          <div
            className={`${styles.project} ${
              styles[service.toLowerCase().replace(/ /g, "-")]
            }`}
            key={service}
          >
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
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
        ))}
      </div>
    </PageContainer>
  );
}
