export const siteConfig = {
  brandName: "Rahulranks",
  ownerName: "Rahul Reddy Adelli",
  titleSuffix: "Rahul Reddy Adelli - Rahulranks",
  description: "Rahulranks - AI-powered web development & SEO services by Rahul Reddy Adelli. I build SEO-ready websites, apps, and automations using AI collaboration.",
  keywords: ["AI web developer India", "SEO expert Hyderabad", "vibe coding services", "AI automation freelancer", "Rahul Reddy Adelli"],
  email: "adellirahulreddy@gmail.com",
  phoneDisplay: "+91 7032784208",
  phoneHref: "+917032784208",
  location: "India",
  mapUrl: "https://www.google.com/maps/search/India",
  siteUrl: "https://www.rahulranks.com",
  socialLinks: {
    email: "mailto:adellirahulreddy@gmail.com",
    google: "https://www.google.com/search?q=Rahulranks",
    behance: "https://www.behance.net/rahulranks",
    instagram: "https://www.instagram.com/rahul_ranks/",
    youtube: "https://www.youtube.com/results?search_query=Rahulranks",
    linkedin: "https://www.linkedin.com/in/rahulreddyadelli",
    github: "https://github.com/AdelliRahulReddy",
  },
  stats: {
    projectsCompleted: 6,
    yearsOfExperience: 6,
    clientSatisfaction: 100,
  },
} as const;

// Page-specific descriptions for SEO
export const pageDescriptions = {
  home: "Rahulranks - AI-powered web development & SEO services by Rahul Reddy Adelli. I build SEO-ready websites, apps, and automations using AI collaboration.",
  about: "Learn about Rahul Reddy Adelli, an AI web developer and SEO expert based in India. Discover my skills, experience, and approach to web development.",
  services: "Explore AI-powered web development, SEO optimization, mobile app development, and automation services by Rahulranks. Get custom solutions tailored to your business.",
  portfolio: "View Rahulranks' portfolio of AI-powered websites, web applications, and SEO-optimized digital solutions built for clients across India and beyond.",
  blog: "Read insights on AI web development, SEO strategies, vibe coding, and digital automation. Stay updated with the latest trends in web development by Rahul Reddy Adelli.",
  blogDetail: "Dive deep into topics about AI web development, SEO optimization, and digital automation with detailed articles by Rahul Reddy Adelli.",
  contact: "Get in touch with Rahul Reddy Adelli for AI web development, SEO services, and automation solutions. Contact Rahulranks for your next project.",
  serviceDetail: "Explore detailed information about specific web development and SEO services offered by Rahulranks.",
  portfolioDetail: "View detailed case studies and project breakdowns from Rahulranks' portfolio of AI-powered web development work.",
  notFound: "Page not found. Return to Rahulranks' homepage to explore AI web development and SEO services.",
} as const;

// Build page title with consistent format
export const buildPageTitle = (page?: string) =>
  page ? `${page} - ${siteConfig.titleSuffix}` : siteConfig.titleSuffix;

// Build canonical URL for any page
export const buildCanonicalUrl = (path: string = "") =>
  `${siteConfig.siteUrl}${path}`;

// JSON-LD structured data for Person and Organization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.brandName,
  "url": siteConfig.siteUrl,
  "description": siteConfig.description,
  "founder": {
    "@type": "Person",
    "name": siteConfig.ownerName,
    "email": siteConfig.email,
    "sameAs": [
      siteConfig.socialLinks.linkedin,
      siteConfig.socialLinks.github,
      siteConfig.socialLinks.behance,
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.youtube,
    ],
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": siteConfig.phoneHref,
    "email": siteConfig.email,
    "contactType": "customer service",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Hindi", "Telugu"],
  },
  "sameAs": [
    siteConfig.socialLinks.linkedin,
    siteConfig.socialLinks.github,
    siteConfig.socialLinks.behance,
    siteConfig.socialLinks.instagram,
    siteConfig.socialLinks.youtube,
  ],
} as const;

// JSON-LD structured data for WebSite
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.brandName,
  "url": siteConfig.siteUrl,
  "description": siteConfig.description,
  "author": {
    "@type": "Person",
    "name": siteConfig.ownerName,
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${siteConfig.siteUrl}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
} as const;

// Helper to build OpenGraph config for any page
export const buildOpenGraph = (options: {
  title?: string;
  description: string;
  type?: string;
  url?: string;
}) => ({
  type: options.type || "website",
  locale: "en_US",
  url: options.url || siteConfig.siteUrl,
  title: options.title || siteConfig.titleSuffix,
  description: options.description,
  siteName: siteConfig.brandName,
  images: [
    {
      url: `${siteConfig.siteUrl}/assets/img/hero/hero-img.png`,
      width: 1200,
      height: 630,
      alt: `${siteConfig.ownerName} - ${siteConfig.brandName}`,
    },
  ],
});

// Helper to build Twitter card config for any page
export const buildTwitterCard = (options: {
  title?: string;
  description: string;
}) => ({
  card: "summary_large_image" as const,
  title: options.title || siteConfig.titleSuffix,
  description: options.description,
  creator: "@rahulranks",
  images: [`${siteConfig.siteUrl}/assets/img/hero/hero-img.png`],
});
