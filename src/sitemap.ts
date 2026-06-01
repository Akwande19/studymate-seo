import { blogArticles, getArticlePath } from "./blogArticles";
import { absoluteUrl } from "./site";

export type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

export const sitemapRoutes: SitemapRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ...blogArticles.map((article) => ({
    path: getArticlePath(article),
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
];

export function sitemap() {
  return sitemapRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: "2026-06-01",
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

export default sitemap;
