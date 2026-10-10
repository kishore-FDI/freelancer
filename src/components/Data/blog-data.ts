export type BlogMeta = {
  title: string;
  description: string;
  slug: string;       // no leading slash, URL-safe
  image: string;
  date: string;       // ISO format: YYYY-MM-DD
  readTime: string;
  tags: string[];
};

export const BLOG_META_DATA: BlogMeta[] = [
  {
    title: "Your brand deserves better - Not AI SLOP",
    description:
      "Why most AI-generated websites look the same, and how to fix yours with real design decisions.",
    slug: "lets-fix-your-ai-slop-website",
    image: "/portrait.png",
    date: "2026-10-10",
    readTime: "5 min read",
    tags: ["Design", "Web", "AI"],
  },
];
