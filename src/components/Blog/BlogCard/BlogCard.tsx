import { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  post: BlogPost;
  size?: "small" | "large";
  lng: string;
}

export default function BlogCard({ post, size = "small", lng }: BlogCardProps) {
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

  return (
    <Link
      href={`/${lng}/blog/${post.slug}`}
      className={`${styles.card} ${styles[size]}`}
    >
      <div className={styles.thumbnail}>
        <Image
          src={`/static/images/blog/${post.id}.jpg`}
          alt={post.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.date}>{formatDate(post.date)}</p>
      </div>
    </Link>
  );
}
