"use client";
import AllPosts from "@/components/Blog/AllPosts/AllPosts";
import BlogHero from "@/components/Blog/BlogHero/BlogHero";
import LatestPosts from "@/components/Blog/LatestPosts/LatestPosts";
import PageContainer from "@/components/PageContainer";
import { getBlogPosts } from "@/constants/blogPosts";
import { useTranslation } from "@/i18n/client";
import { use } from "react";
import styles from "./page.module.css";

type tParams = {
  lng: string;
};

export default function BlogPage(props: { params: Promise<tParams> }) {
  const params = use(props.params);
  const { t } = useTranslation(params.lng, "blog");

  // Get blog posts for current language
  const posts = getBlogPosts(params.lng as "en" | "es");

  // Display logic:
  // Hero: Last/most recent post (first in array)
  // Latest Posts: Next 3 posts
  // All Posts: Remaining posts after the first 4
  const heroPost = posts[0];
  const latestPosts = posts.slice(1, 4); // Posts 2-4 (up to 3 posts)
  const allPosts = posts.slice(4); // Posts 5+ (remaining posts)

  return (
    <PageContainer className={styles.blogPage}>
      {heroPost && <BlogHero post={heroPost} lng={params.lng} />}
      {latestPosts.length > 0 && (
        <LatestPosts
          posts={latestPosts}
          lng={params.lng}
          title={t("latestPosts")}
        />
      )}
      {allPosts.length > 0 && (
        <AllPosts posts={allPosts} lng={params.lng} title={t("allPosts")} />
      )}
    </PageContainer>
  );
}
