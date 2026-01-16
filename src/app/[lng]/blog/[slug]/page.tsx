"use client";
import PageContainer from "@/components/PageContainer";
import { getBlogPostBySlug } from "@/constants/blogPosts";
import { notFound } from "next/navigation";
import { use } from "react";
import styles from "./page.module.css";

type tParams = {
  lng: string;
  slug: string;
};

export default function BlogPostPage(props: { params: Promise<tParams> }) {
  const params = use(props.params);
  const post = getBlogPostBySlug(params.slug, params.lng as "en" | "es");

  if (!post) {
    notFound();
  }

  // Format date
  const date = new Date(post.date);
  const monthNames =
    params.lng === "es"
      ? [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ]
      : [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

  const formattedDate = `${monthNames[date.getMonth()]} / ${String(
    date.getDate()
  ).padStart(2, "0")} / ${date.getFullYear()}`;

  return (
    <PageContainer className={styles.blogPostPage}>
      <article className={styles.article}>
        <div className={styles.header}>
          <p className={styles.date}>{formattedDate}</p>
          <h1 className={styles.title}>{post.title}</h1>
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
      </article>
    </PageContainer>
  );
}
