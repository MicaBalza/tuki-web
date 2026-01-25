"use client";
import PageContainer from "@/components/PageContainer";
import { getBlogPostBySlug } from "@/constants/blogPosts";
import { BlogSection } from "@/types/blog";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";
import styles from "./page.module.css";

type tParams = {
  lng: string;
  slug: string;
};

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "text":
      return (
        <div key={index} className={styles.textSection}>
          {section.title && (
            <h2 className={styles.sectionTitle}>{section.title}</h2>
          )}
          {section.content && (
            <div
              className={styles.sectionContent}
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          )}
        </div>
      );

    case "video":
      return (
        <div key={index} className={styles.videoSection}>
          <div className={styles.videoText}>
            {section.title && (
              <h2 className={styles.videoMainTitle}>{section.title}</h2>
            )}
            {section.content && (
              <div
                className={styles.videoContent}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            )}
            {section.subtitle && (
              <h3 className={styles.videoSubtitle}>{section.subtitle}</h3>
            )}
            {section.subtitleContent && (
              <div
                className={styles.videoContent}
                dangerouslySetInnerHTML={{ __html: section.subtitleContent }}
              />
            )}
          </div>
          <div className={styles.videoPlayer}>
            <div className={styles.videoContainer}>
              {section.videoUrl &&
              section.videoUrl !== "VIDEO_URL_PLACEHOLDER" ? (
                <iframe
                  src={section.videoUrl}
                  title={section.videoCaption || "Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.iframe}
                />
              ) : (
                <div className={styles.videoPlaceholder}>
                  <div className={styles.playIcon}>▶</div>
                </div>
              )}
            </div>
            {section.videoCaption && (
              <p className={styles.videoCaption}>{section.videoCaption}</p>
            )}
          </div>
        </div>
      );

    case "list":
      return (
        <div key={index} className={styles.listSection}>
          {section.title && (
            <h2 className={styles.sectionTitle}>{section.title}</h2>
          )}
          {section.items && (
            <ol className={styles.numberedList}>
              {section.items.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ol>
          )}
        </div>
      );

    case "faq":
      return (
        <div key={index} className={styles.faqSection}>
          {section.title && (
            <h2 className={styles.sectionTitle}>{section.title}</h2>
          )}
          {section.questions && (
            <div className={styles.faqList}>
              {section.questions.map((q, idx) => (
                <div key={idx} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{q.question}</h3>
                  <p className={styles.faqAnswer}>{q.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );

    case "tip":
      return (
        <div key={index} className={styles.tipSection}>
          <div className={styles.tipContent}>
            <div className={styles.tipTitle}>{section.title}</div>
            <div className={styles.tipDivider}></div>
            <div className={styles.tipText}>{section.content}</div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

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
    date.getDate(),
  ).padStart(2, "0")} / ${date.getFullYear()}`;

  return (
    <PageContainer className={styles.blogPostPage}>
      <article className={styles.article}>
        <div className={styles.articleContent}>
          <div className={styles.hero}>
            <div className={styles.heroText}>
              <p className={styles.date}>{formattedDate}</p>
              <h1 className={styles.title}>{post.title}</h1>
              {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
            </div>
            {post.headerImage && (
              <div className={styles.heroImage}>
                <Image
                  src={post.headerImage}
                  alt={post.title}
                  width={600}
                  height={400}
                  className={styles.image}
                  priority
                />
              </div>
            )}
          </div>

          {/* Render sections if available, otherwise fall back to content */}
          {post.sections && post.sections.length > 0 ? (
            <div className={styles.sections}>
              {post.sections.map((section, index) =>
                renderSection(section, index),
              )}
            </div>
          ) : (
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          )}
        </div>
      </article>
    </PageContainer>
  );
}
