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
    title: "Services | Websites, Mobile Apps, MVPs & Automations",
    description:
      "Explore Reddystack services for premium websites, mobile apps, MVPs, and automation systems designed for startups, founders, and growth-focused businesses.",
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

export const buildOpenGraph = (options: {
  title?: string;
  description?: string;
  type?: "website" | "article";
  url?: string;
}) => ({
  type: options.type || "website",
  locale: "en_US",
  url: options.url || siteConfig.siteUrl,
  title: options.title || siteSeo.defaultTitle,
  description: options.description || siteSeo.defaultDescription,
  siteName: siteSeo.siteName,
  images: [
    {
      url: `${siteConfig.siteUrl}${siteSeo.ogImagePath}`,
      width: 1200,
      height: 630,
      alt: `${siteConfig.ownerName} - ${siteSeo.siteName}`,
    },
  ],
});

export const buildTwitterCard = (options: {
  title?: string;
  description?: string;
}) => ({
  card: "summary_large_image" as const,
  title: options.title || siteSeo.defaultTitle,
  description: options.description || siteSeo.defaultDescription,
  creator: siteSeo.creatorHandle,
  images: [`${siteConfig.siteUrl}${siteSeo.ogImagePath}`],
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
    areaServed: "Worldwide",
    availableLanguage: ["English", "Hindi", "Telugu"],
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
