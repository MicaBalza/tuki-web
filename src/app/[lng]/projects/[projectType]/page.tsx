"use client";;
import { use } from "react";

import PageContainer from "@/components/PageContainer";
import Image from "next/image";

import styles from "./page.module.css";

import { PROJECTS } from "@/constants/projects";
import { useTranslation } from "@/i18n/client";
import { PageProps } from "@/types/i18n";
import { useParams, useRouter } from "next/navigation";

const HOVER_COLORS = [
  "#6a68d4",
  "#b2aee9",
  "#04a357",
  "#86e874",
  "#f7c5e9",
  "#f23730",
  "#fdc800",
];

export default function Page(props: PageProps) {
  const params = use(props.params);

  const {
    lng
  } = params;

  const { t } = useTranslation(lng, "services");
  const { push } = useRouter();
  const { projectType } = useParams();

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * HOVER_COLORS.length);
    return HOVER_COLORS[randomIndex];
  };

  return (
    <PageContainer>
      <div className={styles.content}>
        <div className={styles.projects}>
          {Object.keys(PROJECTS[projectType as string]).map(
            (project, index) => {
              const projectFolder =
                PROJECTS[projectType as string][project as string][0]
                  .repeatedFolder || projectType;
              return (
                <div
                  key={project}
                  className={`${styles.project} ${
                    Object.keys(PROJECTS[projectType as string]).length - 1 ===
                      index &&
                    Object.keys(PROJECTS[projectType as string]).length % 2 !==
                      0
                      ? styles.lastItem
                      : ""
                  } pointer`}
                  onClick={() => push(`/projects/${projectType}/${project}`)}
                >
                  <div
                    className={styles.projectHover}
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    <h4 className="text-white uppercase bold">
                      {PROJECTS[projectType as string][project][0].name}
                    </h4>
                  </div>
                  <Image
                    src={`/static/images/${projectFolder}/${project}/cover.${
                      PROJECTS[projectType as string][project][0].format ||
                      "jpeg"
                    }`}
                    alt={PROJECTS[projectType as string][project][0].name}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition:
                        PROJECTS[projectType as string][project][0].position,
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
