import { BlogPost } from "@/types/blog";
import BlogCard from "../BlogCard/BlogCard";
import styles from "./LatestPosts.module.css";

interface LatestPostsProps {
  posts: BlogPost[];
  lng: string;
  title: string;
}

export default function LatestPosts({ posts, lng, title }: LatestPostsProps) {
  // Expect 3 posts: first one large, next two small
  const [featuredPost, ...smallPosts] = posts.slice(0, 3);

  return (
    <section className={styles.section} id="latest-posts">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.grid}>
          <div className={styles.featured}>
            {featuredPost && (
              <BlogCard post={featuredPost} size="large" lng={lng} />
            )}
          </div>
          <div className={styles.sidebar}>
            {smallPosts.map((post) => (
              <BlogCard key={post.id} post={post} size="small" lng={lng} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
