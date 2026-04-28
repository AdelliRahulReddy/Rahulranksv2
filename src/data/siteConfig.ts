import type { StaticImageData } from "next/image";
import type { Metadata } from "next";

export const siteSeo = {
  siteName: "Reddystack",
  siteNameAlternates: ["ReddyStack", "Reddystack by Rahul Reddy", "reddystack.com"],
  defaultTitle: "AI Website Development Services, SEO & Automation | Reddystack",
  defaultDescription:
    "AI website development services by Reddystack for SEO-friendly websites, apps, MVPs, chatbots, and automation systems across India and worldwide.",
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
    "AI website development services",
    "website development services",
    "affordable website development",
    "website development under 10000",
    "website development",
    "SEO website development",
    "SEO services",
    "landing page development",
    "custom web application development",
    "app development",
    "mobile app development",
    "AI chatbot development",
    "MVP development",
    "AI automation services",
    "workflow automation",
    "AI-assisted development",
    "Rahul Reddy",
  ],
  email: "hello@reddystack.com",
  phoneDisplay: "+91 7032784208",
  phoneHref: "+917032784208",
  location: "Hyderabad, India",
  mapUrl: "https://www.google.com/maps/search/Hyderabad%2C%20India",
  businessStructure: "Independent service business operated by Rahul Reddy Adelli",
  registrationStatus: "Not registered as a private limited company, LLP, or OPC",
  taxStatus: "GST details will be provided when applicable",
  siteUrl: "https://www.reddystack.com",
  serviceAreas: ["Hyderabad", "India", "Worldwide"],
  serviceTypes: [
    "Website Development Services",
    "Affordable Website Development",
    "SEO Website Development",
    "Landing Page Development",
    "SEO Services",
    "Mobile App Development",
    "App Development",
    "AI Chatbot Development",
    "Custom Web Application Development",
    "MVP Development Services",
    "AI Automation Services",
  ],
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
    title: "Services | Website Development, Apps, MVPs & AI Automation",
    description:
      "Explore Reddystack services for website development, mobile apps, custom web applications, MVP development, landing pages, and AI automation systems.",
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
      "Start your project with Reddystack. Talk to Rahul Reddy about website development, mobile apps, MVPs, custom web applications, and AI automation.",
    path: "/contact",
  },
  pricing: {
    title: "Pricing | Website, App, SEO & Automation Scope",
    description:
      "Review Reddystack starting prices, scope guidance, timelines, and honest limits for websites, apps, SEO-ready pages, MVPs, and AI automation.",
    path: "/pricing",
  },
  privacyPolicy: {
    title: "Privacy Policy | Reddystack",
    description:
      "Read how Reddystack handles website inquiries, contact form details, analytics, cookies, and communication data.",
    path: "/privacy-policy",
  },
  terms: {
    title: "Terms of Service | Reddystack",
    description:
      "Read the basic terms for using the Reddystack website and requesting website, app, MVP, SEO, and automation services.",
    path: "/terms",
  },
  revisionPolicy: {
    title: "Revision and Refund Policy | Reddystack",
    description:
      "Review Reddystack project revision, cancellation, and refund guidance for scoped digital service work.",
    path: "/revision-policy",
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

export const schemaIds = {
  organization: `${siteConfig.siteUrl}/#organization`,
  website: `${siteConfig.siteUrl}/#website`,
  offerCatalog: `${siteConfig.siteUrl}/#offer-catalog`,
} as const;

const serviceOfferCatalog = {
  "@type": "OfferCatalog",
  "@id": schemaIds.offerCatalog,
  name: "Reddystack service packages",
  url: buildCanonicalUrl("/pricing"),
  itemListElement: [
    {
      "@type": "Offer",
      name: "Quick Website Fix",
      url: buildCanonicalUrl("/contact"),
      category: "Website support",
      description:
        "Small website edits, frontend fixes, content updates, form checks, and quick launch cleanup for simple scopes.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        minPrice: "999",
      },
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Quick website fix",
        serviceType: "Website support",
      },
    },
    {
      "@type": "Offer",
      name: "Website Development Under Rs. 10,000",
      url: buildCanonicalUrl("/website-development-under-10000"),
      category: "Website development",
      description:
        "Focused one-page websites, starter portfolios, and simple launch pages with clear scope.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        price: "9999",
      },
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Budget website development",
        serviceType: "Website development",
      },
    },
    {
      "@type": "Offer",
      name: "AI-Ready Website Development",
      url: buildCanonicalUrl("/website-development"),
      category: "Website development",
      description:
        "AI-ready website development for startups and small businesses that need SEO-ready structure and launch support.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        minPrice: "14999",
      },
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Affordable website development",
        serviceType: "Website development services",
      },
    },
    {
      "@type": "Offer",
      name: "SEO Services",
      url: buildCanonicalUrl("/seo-services"),
      category: "Search engine optimization",
      description:
        "Technical SEO setup, page structure, metadata, schema, sitemap, internal links, and focused SEO repair for small business websites.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        minPrice: "9999",
      },
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "SEO services",
        serviceType: "SEO services",
      },
    },
    {
      "@type": "Offer",
      name: "App Development",
      url: buildCanonicalUrl("/app-development"),
      category: "Application development",
      description:
        "Web and mobile app development scoped around practical workflows, MVPs, dashboards, and product flows.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        minPrice: "49999",
      },
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "App development",
        serviceType: "App development services",
      },
    },
    {
      "@type": "Offer",
      name: "AI Automation Services",
      url: buildCanonicalUrl("/ai-automation"),
      category: "Business automation",
      description:
        "AI automation services for small teams that need lead handling, workflow systems, and prompt-driven operations.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        minPrice: "14999",
      },
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "AI automation services",
        serviceType: "AI automation services",
      },
    },
  ],
} as const;

export const serviceOfferCatalogSchema = {
  "@context": "https://schema.org",
  ...serviceOfferCatalog,
} as const;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": schemaIds.organization,
  name: siteSeo.siteName,
  url: siteConfig.siteUrl,
  logo: {
    "@type": "ImageObject",
    url: buildAssetUrl(siteSeo.logoPath),
  },
  description: siteSeo.defaultDescription,
  founder: {
    "@type": "Person",
    name: siteConfig.ownerName,
    url: buildCanonicalUrl("/about"),
    sameAs: officialProfileLinks,
  },
  email: siteConfig.email,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Hindi", "Telugu"],
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Website development",
    "Search engine optimization",
    "AI automation",
    "AI chatbot development",
    "Lead generation",
    "Digital growth systems",
    "Conversion optimization",
    "MVP development",
    "App development",
  ],
  makesOffer: {
    "@id": schemaIds.offerCatalog,
  },
  sameAs: officialProfileLinks,
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": schemaIds.website,
  name: siteSeo.siteName,
  alternateName: [...siteSeo.siteNameAlternates],
  url: siteConfig.siteUrl,
  description: siteSeo.defaultDescription,
  publisher: {
    "@id": schemaIds.organization,
  },
} as const;

export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${buildCanonicalUrl("/")}#webpage`,
  name: pageSeo.home.title,
  url: buildCanonicalUrl("/"),
  description: pageSeo.home.description,
  isPartOf: {
    "@id": schemaIds.website,
  },
  about: {
    "@id": schemaIds.organization,
  },
  primaryImageOfPage: `${siteConfig.siteUrl}${siteSeo.ogImagePath}`,
} as const;

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${buildCanonicalUrl("/about")}#webpage`,
  name: pageSeo.about.title,
  url: buildCanonicalUrl("/about"),
  description: pageSeo.about.description,
  isPartOf: {
    "@id": schemaIds.website,
  },
  about: {
    "@id": schemaIds.organization,
  },
  mainEntity: {
    "@type": "Person",
    name: siteConfig.ownerName,
    jobTitle: "Founder",
    worksFor: {
      "@id": schemaIds.organization,
    },
    url: buildCanonicalUrl("/about"),
    sameAs: officialProfileLinks,
  },
} as const;

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${buildCanonicalUrl("/contact")}#webpage`,
  name: pageSeo.contact.title,
  url: buildCanonicalUrl("/contact"),
  description: pageSeo.contact.description,
  isPartOf: {
    "@id": schemaIds.website,
  },
  about: {
    "@id": schemaIds.organization,
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
  "@id": `${buildCanonicalUrl(items[items.length - 1]?.path || "/")}#breadcrumb`,
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
  "@id": `${buildCanonicalUrl(path)}#faq`,
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
  "@id": `${buildCanonicalUrl(article.path)}#blogposting`,
  headline: article.title,
  description: article.metaDescription,
  articleSection: article.categoryLabel,
  keywords: article.tags.join(", "),
  datePublished: article.publishedAt,
  dateModified: article.publishedAt,
  image: [buildAssetUrl(article.heroImage)],
  mainEntityOfPage: {
    "@id": `${buildCanonicalUrl(article.path)}#webpage`,
  },
  author: {
    "@type": "Person",
    name: article.author.name,
    description: article.author.bio,
    jobTitle: article.author.role,
    url: buildCanonicalUrl("/about"),
  },
  publisher: {
    "@id": schemaIds.organization,
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
  "@id": `${buildCanonicalUrl(service.path)}#service`,
  name: service.title,
  serviceType: service.title,
  category: service.categories.join(", "),
  description: service.metaDescription,
  url: buildCanonicalUrl(service.path),
  image: buildAssetUrl(service.heroImage),
  areaServed: [...siteConfig.serviceAreas],
  provider: {
    "@id": schemaIds.organization,
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
  "@id": `${buildCanonicalUrl(project.path)}#creative-work`,
  name: project.title,
  description: project.metaDescription || project.summary,
  genre: project.category,
  keywords: project.services.join(", "),
  image: buildAssetUrl(project.listingImage),
  url: buildCanonicalUrl(project.path),
  creator: {
    "@id": schemaIds.organization,
  },
  dateCreated: `${project.year}-01-01`,
});
