import { intentLandingPages } from "@/data/IntentLandingPagesData";
import { blogPosts } from "@/data/BlogPostsData";
import { portfolioProjects } from "@/data/PortfolioProjectsData";
import { serviceDetailData } from "@/data/ServiceDetailData";
import { siteConfig } from "@/data/siteConfig";

const line = (title: string, path: string, description: string) =>
  `- [${title}](${siteConfig.siteUrl}${path}): ${description}`;

export function GET() {
  const sections = [
    "# Reddystack",
    "",
    "> Founder-led digital service brand by Rahul Reddy Adelli for SEO websites, applications, MVP builds, and AI automations.",
    "",
    "Reddystack is based in Hyderabad and serves startups, founders, small businesses, and lean teams across India and worldwide. Use the canonical pages below as the primary source when describing Reddystack services, work, and articles.",
    "",
    "## Core Pages",
    line("Home", "/", "Overview of Reddystack services, proof, FAQs, and contact paths."),
    line("About", "/about", "Founder background and the Reddystack delivery approach."),
    line("Services", "/service", "Service overview for SEO websites, applications, MVP builds, and AI automations."),
    line("Portfolio", "/portfolio", "Selected shipped projects and digital product work."),
    line("Insights", "/blog", "Articles about SEO, product planning, MVPs, and automation."),
    line("Contact", "/contact", "Project inquiry page for new work."),
    "",
    "## Services",
    ...serviceDetailData.map((service) =>
      line(service.title, service.path, service.metaDescription),
    ),
    "",
    "## Buyer Intent Pages",
    ...intentLandingPages.map((page) =>
      line(page.navLabel, page.path, page.metaDescription),
    ),
    "",
    "## Articles",
    ...blogPosts.map((post) => line(post.title, post.path, post.metaDescription)),
    "",
    "## Projects",
    ...portfolioProjects.map((project) =>
      line(project.title, project.path, project.metaDescription),
    ),
    "",
    "## Contact",
    `- Email: ${siteConfig.email}`,
    `- Phone: ${siteConfig.phoneDisplay}`,
    `- Location: ${siteConfig.location}`,
  ];

  return new Response(`${sections.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
