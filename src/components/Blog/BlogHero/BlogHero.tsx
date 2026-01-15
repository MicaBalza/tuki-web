import { BlogPost } from "@/types/blog";
import Image from "next/image";
import styles from "./BlogHero.module.css";

interface BlogHeroProps {
  post: BlogPost;
  lng: string;
}

export default function BlogHero({ post, lng }: BlogHeroProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months =
      lng === "es"
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

    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month} / ${day} / ${year}`;
  };

  const scrollToLatestPosts = () => {
    const latestPostsSection = document.getElementById("latest-posts");
    if (latestPostsSection) {
      const navbarHeight = 100; // Fixed navbar height
      const elementPosition = latestPostsSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.date}>{formatDate(post.date)}</p>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.excerpt}>
            {post.excerpt.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.scrollIndicator} onClick={scrollToLatestPosts}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={styles.thumbnail}>
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
