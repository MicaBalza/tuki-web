export interface BlogSection {
  type: "text" | "video" | "list" | "faq" | "tip";
  title?: string;
  content?: string;
  subtitle?: string;
  subtitleContent?: string;
  videoUrl?: string;
  videoCaption?: string;
  items?: string[];
  questions?: Array<{
    question: string;
    answer: string;
  }>;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string; // Keep for backward compatibility
  sections?: BlogSection[]; // New structured content
  date: string; // ISO format
  thumbnail: string; // Image URL or path
  headerImage?: string; // Hero image for blog post page
  category?: string;
  author?: string;
  featured?: boolean;
}
