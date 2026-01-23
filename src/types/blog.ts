export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string; // ISO format
  thumbnail: string; // Image URL or path
  headerImage?: string; // Hero image for blog post page
  category?: string;
  author?: string;
  featured?: boolean;
}
