"use client";

import Image from "next/image";

import { SERVICES } from "@/constants/services";
import styles from "./page.module.css";
import PageContainer from "@/components/PageContainer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Keyboard, Mousewheel } from "swiper/modules";
import { PROJECTS } from "@/constants/images";
import { useRouter } from "next/navigation";

export default function Page() {
  const { push } = useRouter();

  return (
    <PageContainer>
      <div className={styles.hero}>
        <h2 className="text-purple">Esto es lo que hacemos</h2>
      </div>
      <div className={styles.projects}>
        {SERVICES.map((service) => (
          <div
            className={styles.project}
            key={service}
            onClick={() => push(`/projects/${service.toLowerCase()}`)}
          >
            <Swiper
              mousewheel={true}
              keyboard={true}
              modules={[Mousewheel, Keyboard]}
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
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
