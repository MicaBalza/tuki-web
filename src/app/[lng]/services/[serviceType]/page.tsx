"use client";
import { use } from "react";

import PageContainer from "@/components/PageContainer";
import Image from "next/image";

import styles from "./page.module.css";

import { SERVICES_DATA } from "@/constants/services";
import { useTranslation } from "@/i18n/client";
import { useRouter } from "next/navigation";

const HOVER_COLORS = [
  "#6a68d4",
  "#b2aee9",
  "#04a357",
  "#86e874",
  "#f7c5e9",
  "#f23730",
  "#fdc800",
];

type tParams = {
  lng: string;
  serviceType: string;
};

export default function Page(props: { params: Promise<tParams> }) {
  const params = use(props.params);

  const { lng, serviceType } = params;

  const { t } = useTranslation(lng, "services");
  const { push } = useRouter();

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * HOVER_COLORS.length);
    return HOVER_COLORS[randomIndex];
  };

  return (
    <PageContainer>
      <div className={styles.content}>
        <div className={styles.services}>
          {Object.keys(SERVICES_DATA[serviceType as string]).map(
            (project, index) => {
              const projectFolder =
                SERVICES_DATA[serviceType as string][project as string][0]
                  .repeatedFolder || serviceType;
              return (
                <div
                  key={project}
                  className={`${styles.service} ${
                    Object.keys(SERVICES_DATA[serviceType as string]).length -
                      1 ===
                      index &&
                    Object.keys(SERVICES_DATA[serviceType as string]).length %
                      2 !==
                      0
                      ? styles.lastItem
                      : ""
                  } pointer`}
                  onClick={() => push(`/services/${serviceType}/${project}`)}
                >
                  <div
                    className={styles.serviceHover}
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    <h4 className="text-white uppercase bold">
                      {SERVICES_DATA[serviceType as string][project][0].name}
                    </h4>
                  </div>
                  <Image
                    src={`/static/images/${projectFolder}/${project}/cover.${
                      SERVICES_DATA[serviceType as string][project][0].format ||
                      "jpeg"
                    }`}
                    alt={SERVICES_DATA[serviceType as string][project][0].name}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition:
                        SERVICES_DATA[serviceType as string][project][0]
                          .position,
                    }}
                    unoptimized={true}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </PageContainer>
  );
}
