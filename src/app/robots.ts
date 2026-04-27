import { siteConfig } from "@/data/siteConfig";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "ChatGPT-User",
          "OAI-SearchBot",
          "GPTBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "Googlebot",
          "Google-Extended",
          "PerplexityBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
