"use client";
import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";
import { getBlogPostBySlug } from "@/constants/blogPosts";
import { useTranslation } from "@/i18n/client";
import { BlogSection } from "@/types/blog";
import { TFunction } from "i18next";
import Lottie from "lottie-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";
import hamburguerAnimation from "../../../../../public/static/lottie/hamburguer.json";
import styles from "./page.module.css";

type tParams = {
  lng: string;
  slug: string;
};

function renderSection(
  section: BlogSection,
  index: number,
  t: TFunction<"blog-post", undefined>,
) {
  switch (section.type) {
    case "text":
      return (
        <div key={index} className={styles.textSection}>
          {section.title && (
            <h2 className={styles.sectionTitle}>{section.title}</h2>
          )}
          {section.content && (
            <div
              className={styles.textContent}
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

    case "unorderedList":
      return (
        <div key={index} className={styles.unorderedListSection}>
          {section.title && (
            <h2 className={styles.sectionTitle}>{section.title}</h2>
          )}
          {section.items && (
            <ul className={styles.bulletedList}>
              {section.items.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
        </div>
      );

    case "faq":
      return (
        <div key={index} className={styles.faqSection}>
          <div className={styles.faqSectionRow}>
            <div className={styles.faqColLeft}>
              <img
                src="/static/images/pharmaceutical-services/question.png"
                alt="Question mark"
                className={styles.questionImage}
              />
              <div className={styles.faqColTitle}>
                {t("faqTitle")}
                <br />
                <span className={styles.faqColSubtitle}>(FAQ)</span>
              </div>
            </div>
            <div className={styles.faqColRight}>
              {section.title && (
                <h2 className={styles.faqSectionTitle}>{section.title}</h2>
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
          </div>
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
  const { t } = useTranslation(params.lng, "blog-post");

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
                  src={`/static/images/blog/${post.id}.jpg`}
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
                renderSection(section, index, t),
              )}
            </div>
          ) : (
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          )}
        </div>

        {/* Last row: two columns */}
        <div className={styles.lastRowSection}>
          <div className={styles.lastRowLeft}>
            <h2 className={styles.lastRowTitle}>{t("projectsTitle")}</h2>
            <p className={styles.lastRowSubtitle}>{t("projectsSubtitle")}</p>
            <div className={styles.videoPlayer}>
              <div className={styles.videoContainer}>
                <iframe
                  src="https://www.youtube.com/embed/EUH6stzUVv8?si=SVeuM00QiJQCKoRf"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.iframe}
                />
              </div>
            </div>
          </div>
          <div className={styles.lastRowRight}>
            <div className={styles.imageContainer}>
              <Lottie animationData={hamburguerAnimation} />
            </div>
            <Button
              className={styles.lastRowButton}
              text={t("contactButton")}
              onClick={() => {
                window.location.href =
                  params.lng === "es" ? "/contacto" : "/contact-us";
              }}
            />
            <p className={styles.lastRowText}>{t("contactText")}</p>
          </div>
        </div>
      </article>
    </PageContainer>
  );
}
