import { siteConfig } from "@/data/siteConfig";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/service",
    "/portfolio",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
