import type { StaticImageData } from "next/image";
import type { Metadata } from "next";

export const siteSeo = {
  siteName: "Reddystack",
  siteNameAlternates: ["ReddyStack", "Reddystack by Rahul Reddy", "reddystack.com"],
  defaultTitle: "Reddystack | Websites, Mobile Apps, MVPs & Automations",
  defaultDescription:
    "Reddystack helps startups and businesses launch websites, mobile apps, MVPs, landing pages, and SEO-ready digital products.",
  creatorHandle: "@reddystack",
  logoPath: "/assets/img/logo/logo-black.png",
  ogImagePath: "/assets/img/hero/hero-img.png",
} as const;

export const siteConfig = {
  brandName: siteSeo.siteName,
  ownerName: "Rahul Reddy Adelli",
  titleSuffix: siteSeo.siteName,
  description: siteSeo.defaultDescription,
  keywords: [
    "Reddystack",
    "website development",
    "mobile app development",
    "MVP development",
    "workflow automation",
    "AI-assisted development",
    "Rahul Reddy",
  ],
  email: "hello@reddystack.com",
  phoneDisplay: "+91 7032784208",
  phoneHref: "+917032784208",
  location: "India",
  mapUrl: "https://www.google.com/maps/search/India",
  siteUrl: "https://reddystack.com",
  serviceAreas: ["Hyderabad", "India", "Worldwide"],
  serviceTypes: ["SEO Websites", "Applications", "MVP Builds", "AI Automations"],
  socialLinks: {
    email: "mailto:hello@reddystack.com",
    google: "https://www.google.com/search?q=reddystack",
    instagram: "https://www.instagram.com/reddy.stack/",
    x: "https://x.com/reddystack",
    telegram: "https://t.me/reddy_stack",
    youtube: "https://www.youtube.com/results?search_query=reddystack",
    linkedin: "https://www.linkedin.com/in/rahulreddyadelli",
    github: "https://github.com/AdelliRahulReddy",
  },
  stats: {
    projectsCompleted: 6,
    yearsOfExperience: 6,
    clientSatisfaction: 100,
  },
} as const;

type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
  robots?: Metadata["robots"];
};

export const pageSeo = {
  home: {
    title: siteSeo.defaultTitle,
    description: siteSeo.defaultDescription,
    path: "/",
  },
  about: {
    title: "About Reddystack | Rahul Reddy, Founder-Led Digital Execution",
    description:
      "Learn how Rahul Reddy built Reddystack and how the founder-led, AI-assisted approach helps businesses launch websites, mobile apps, MVPs, and automations with clarity.",
    path: "/about",
  },
  services: {
    title: "Services | SEO Websites, Applications, MVP Builds & AI Automations",
    description:
      "Explore Reddystack services for SEO websites, applications, MVP builds, and AI automation systems designed for startups, founders, and growth-focused businesses.",
    path: "/service",
  },
  portfolio: {
    title: "Portfolio | Digital Products, Launches & Automation Work",
    description:
      "See selected Reddystack work across websites, product builds, MVP launches, and automation systems created with premium execution and clear outcomes.",
    path: "/portfolio",
  },
  blog: {
    title: "Insights | SEO, AI Workflows & Product Execution",
    description:
      "Read Reddystack insights on SEO, AI-assisted workflows, mobile app planning, product execution, MVP strategy, and automation.",
    path: "/blog",
  },
  contact: {
    title: "Contact Reddystack | Start Your Project",
    description:
      "Start your project with Reddystack. Talk to Rahul Reddy about websites, mobile apps, MVPs, and automations built with speed, clarity, and premium execution.",
    path: "/contact",
  },
  blogDetail: {
    title: "Insight Details | Reddystack",
    description:
      "Explore detailed Reddystack insights on SEO, AI-assisted delivery, product execution, and digital growth.",
    path: "/blog-details",
    ogType: "article",
  },
  portfolioDetail: {
    title: "Project Details | Reddystack",
    description:
      "Review a detailed Reddystack project breakdown, including the strategy, execution, and outcomes behind the build.",
    path: "/portfolio-details",
  },
  blogSidebar: {
    title: "Insights | SEO, AI Workflows & Product Execution",
    description:
      "Read Reddystack insights on SEO, AI-assisted workflows, mobile app planning, product execution, MVP strategy, and automation.",
    path: "/blog-sidebar",
    canonicalPath: "/blog",
    robots: {
      index: false,
      follow: false,
    },
  },
  homeThree: {
    title: "Home Preview | Reddystack",
    description: siteSeo.defaultDescription,
    path: "/home-3",
    canonicalPath: "/",
    robots: {
      index: false,
      follow: false,
    },
  },
  notFound: {
    title: "Page Not Found | Reddystack",
    description:
      "The page could not be found. Return to Reddystack to explore websites, mobile apps, MVPs, and automations.",
    path: "/404",
    robots: {
      index: false,
      follow: false,
    },
  },
} satisfies Record<string, PageSeoConfig>;

export type PageSeoKey = keyof typeof pageSeo;

export const buildCanonicalUrl = (path: string = "/") =>
  path === "/" ? `${siteConfig.siteUrl}/` : `${siteConfig.siteUrl}${path}`;

type SeoImageInput = StaticImageData | string;

type SeoImageMeta = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export const buildAssetUrl = (asset: SeoImageInput) => {
  const assetPath = typeof asset === "string" ? asset : asset.src;

  if (assetPath.startsWith("http://") || assetPath.startsWith("https://")) {
    return assetPath;
  }

  return assetPath.startsWith("/")
    ? `${siteConfig.siteUrl}${assetPath}`
    : `${siteConfig.siteUrl}/${assetPath}`;
};

export const buildSeoImage = (
  image: SeoImageInput,
  alt: string,
  fallbackDimensions: { width: number; height: number } = { width: 1200, height: 630 },
): SeoImageMeta => ({
  url: buildAssetUrl(image),
  width: typeof image === "string" ? fallbackDimensions.width : image.width,
  height: typeof image === "string" ? fallbackDimensions.height : image.height,
  alt,
});

export const buildOpenGraph = (options: {
  title?: string;
  description?: string;
  type?: "website" | "article";
  url?: string;
  images?: SeoImageMeta[];
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}) => ({
  type: options.type || "website",
  locale: "en_US",
  url: options.url || siteConfig.siteUrl,
  title: options.title || siteSeo.defaultTitle,
  description: options.description || siteSeo.defaultDescription,
  siteName: siteSeo.siteName,
  images: options.images || [
    buildSeoImage(
      siteSeo.ogImagePath,
      `${siteConfig.ownerName} - ${siteSeo.siteName}`,
    ),
  ],
  publishedTime: options.publishedTime,
  modifiedTime: options.modifiedTime,
  authors: options.authors,
});

export const buildTwitterCard = (options: {
  title?: string;
  description?: string;
  images?: string[];
}) => ({
  card: "summary_large_image" as const,
  title: options.title || siteSeo.defaultTitle,
  description: options.description || siteSeo.defaultDescription,
  creator: siteSeo.creatorHandle,
  images: options.images || [buildAssetUrl(siteSeo.ogImagePath)],
});

export const buildPageMetadata = (pageKey: PageSeoKey): Metadata => {
  const page: PageSeoConfig = pageSeo[pageKey];
  const canonicalUrl = buildCanonicalUrl(page.canonicalPath || page.path);

  return {
    title: page.title,
    description: page.description,
    robots: page.robots,
    openGraph: buildOpenGraph({
      title: page.title,
      description: page.description,
      type: page.ogType,
      url: canonicalUrl,
    }),
    twitter: buildTwitterCard({
      title: page.title,
      description: page.description,
    }),
    alternates: {
      canonical: canonicalUrl,
    },
  };
};

const officialProfileLinks = [
  siteConfig.socialLinks.linkedin,
  siteConfig.socialLinks.github,
  siteConfig.socialLinks.instagram,
  siteConfig.socialLinks.x,
  siteConfig.socialLinks.telegram,
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteSeo.siteName,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}${siteSeo.logoPath}`,
  description: siteSeo.defaultDescription,
  founder: {
    "@type": "Person",
    name: siteConfig.ownerName,
    email: siteConfig.email,
    url: buildCanonicalUrl("/about"),
    sameAs: officialProfileLinks,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    contactType: "customer service",
    areaServed: [...siteConfig.serviceAreas],
    availableLanguage: ["English", "Hindi", "Telugu"],
  },
  sameAs: officialProfileLinks,
} as const;

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteSeo.siteName,
  url: siteConfig.siteUrl,
  image: buildAssetUrl(siteSeo.ogImagePath),
  logo: buildAssetUrl(siteSeo.logoPath),
  description: siteSeo.defaultDescription,
  areaServed: [...siteConfig.serviceAreas],
  serviceType: [...siteConfig.serviceTypes],
  availableLanguage: ["English", "Hindi", "Telugu"],
  founder: {
    "@type": "Person",
    name: siteConfig.ownerName,
    url: buildCanonicalUrl("/about"),
    sameAs: officialProfileLinks,
  },
  sameAs: officialProfileLinks,
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteSeo.siteName,
  alternateName: [...siteSeo.siteNameAlternates],
  url: siteConfig.siteUrl,
  description: siteSeo.defaultDescription,
  publisher: {
    "@type": "Organization",
    name: siteSeo.siteName,
  },
} as const;

export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageSeo.home.title,
  url: buildCanonicalUrl("/"),
  description: pageSeo.home.description,
  isPartOf: {
    "@type": "WebSite",
    name: siteSeo.siteName,
    url: siteConfig.siteUrl,
  },
  about: {
    "@type": "Organization",
    name: siteSeo.siteName,
  },
  primaryImageOfPage: `${siteConfig.siteUrl}${siteSeo.ogImagePath}`,
} as const;

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: pageSeo.about.title,
  url: buildCanonicalUrl("/about"),
  description: pageSeo.about.description,
  isPartOf: {
    "@type": "WebSite",
    name: siteSeo.siteName,
    url: siteConfig.siteUrl,
  },
  about: {
    "@type": "Organization",
    name: siteSeo.siteName,
    url: siteConfig.siteUrl,
  },
  mainEntity: {
    "@type": "Person",
    name: siteConfig.ownerName,
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: siteSeo.siteName,
    },
    url: buildCanonicalUrl("/about"),
    sameAs: officialProfileLinks,
  },
} as const;

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: pageSeo.contact.title,
  url: buildCanonicalUrl("/contact"),
  description: pageSeo.contact.description,
  isPartOf: {
    "@type": "WebSite",
    name: siteSeo.siteName,
    url: siteConfig.siteUrl,
  },
  about: {
    "@type": "ProfessionalService",
    name: siteSeo.siteName,
    url: siteConfig.siteUrl,
  },
  mainEntity: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    contactType: "customer service",
    areaServed: [...siteConfig.serviceAreas],
    availableLanguage: ["English", "Hindi", "Telugu"],
  },
} as const;

export const buildBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: buildCanonicalUrl(item.path),
  })),
});

export const buildFAQPageSchema = (
  items: Array<{ question: string; answer: string }>,
  path: string = "/",
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: buildCanonicalUrl(path),
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const buildBlogPostingSchema = (article: {
  title: string;
  metaDescription: string;
  path: string;
  publishedAt: string;
  categoryLabel: string;
  tags: string[];
  heroImage: SeoImageInput;
  author: {
    name: string;
    role: string;
    bio: string;
  };
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: article.title,
  description: article.metaDescription,
  articleSection: article.categoryLabel,
  keywords: article.tags.join(", "),
  datePublished: article.publishedAt,
  dateModified: article.publishedAt,
  image: [buildAssetUrl(article.heroImage)],
  mainEntityOfPage: buildCanonicalUrl(article.path),
  author: {
    "@type": "Person",
    name: article.author.name,
    description: article.author.bio,
    jobTitle: article.author.role,
    url: buildCanonicalUrl("/about"),
  },
  publisher: {
    "@type": "Organization",
    name: siteSeo.siteName,
    logo: {
      "@type": "ImageObject",
      url: buildAssetUrl(siteSeo.logoPath),
    },
  },
});

export const buildServiceSchema = (service: {
  title: string;
  subtitle: string;
  metaDescription: string;
  path: string;
  categories: string[];
  heroImage: SeoImageInput;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  serviceType: service.title,
  category: service.categories.join(", "),
  description: service.metaDescription,
  url: buildCanonicalUrl(service.path),
  image: buildAssetUrl(service.heroImage),
  areaServed: [...siteConfig.serviceAreas],
  provider: {
    "@type": "Organization",
    name: siteSeo.siteName,
    url: siteConfig.siteUrl,
  },
  brand: {
    "@type": "Brand",
    name: siteSeo.siteName,
  },
  slogan: service.subtitle,
});

export const buildCreativeWorkSchema = (project: {
  title: string;
  category: string;
  summary: string;
  metaDescription: string;
  path: string;
  year: number;
  services: string[];
  listingImage: SeoImageInput;
}) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  description: project.metaDescription || project.summary,
  genre: project.category,
  keywords: project.services.join(", "),
  image: buildAssetUrl(project.listingImage),
  url: buildCanonicalUrl(project.path),
  creator: {
    "@type": "Organization",
    name: siteSeo.siteName,
    url: siteConfig.siteUrl,
  },
  dateCreated: `${project.year}-01-01`,
});
