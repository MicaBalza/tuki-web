import { BlogPost } from "@/types/blog";
import BlogCard from "../BlogCard/BlogCard";
import styles from "./AllPosts.module.css";

interface AllPostsProps {
  posts: BlogPost[];
  lng: string;
  title: string;
}

export default function AllPosts({ posts, lng, title }: AllPostsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} size="small" lng={lng} />
          ))}
        </div>
      </div>
    </section>
  );
}
