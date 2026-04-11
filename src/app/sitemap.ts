import { siteConfig } from "@/data/siteConfig";
import { blogPosts } from "@/data/BlogPostsData";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routeConfig: Array<{
    path: string;
    changeFrequency: "weekly" | "monthly";
    priority: number;
  }> = [
      { path: "", changeFrequency: "weekly", priority: 1 },
      { path: "/about", changeFrequency: "monthly", priority: 0.8 },
      { path: "/service", changeFrequency: "monthly", priority: 0.85 },
      { path: "/portfolio", changeFrequency: "monthly", priority: 0.85 },
      { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
      { path: "/contact", changeFrequency: "monthly", priority: 0.75 },
      { path: "/service/seo-websites", changeFrequency: "monthly", priority: 0.8 },
      { path: "/service/applications", changeFrequency: "monthly", priority: 0.8 },
      { path: "/service/mvp-builds", changeFrequency: "monthly", priority: 0.8 },
      { path: "/service/ai-automations", changeFrequency: "monthly", priority: 0.8 },
      { path: "/portfolio-details", changeFrequency: "monthly", priority: 0.7 },
    ];

  const routes = routeConfig.map((route) => ({
      url: `${siteConfig.siteUrl}${route.path}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));

  const articleRoutes = blogPosts.map((post) => ({
      url: `${siteConfig.siteUrl}${post.path}`,
      lastModified: post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));

  return [...routes, ...articleRoutes];
}
