import type { Metadata } from "next";
import type { StaticImageData } from "next/image";

import heroWebsite from "@/assets/img/portfolio/port-inner-up-1.jpg";
import heroAutomation from "@/assets/img/portfolio/port-inner-up-5.jpg";
import heroMvp from "@/assets/img/portfolio/port-inner-up-2.jpg";
import {
  buildCanonicalUrl,
  buildOpenGraph,
  buildSeoImage,
  buildTwitterCard,
  siteConfig,
} from "@/data/siteConfig";
import type { ServiceDetail } from "@/data/ServiceDetailData";

type IntentFaqItem = {
  question: string;
  answer: string;
  some_features: string[];
};

type IntentProcessStep = {
  label: string;
  text: string;
};

type IntentLandingPage = {
  slug: string;
  path: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  shortTitle: string;
  headline: string;
  intro: string;
  heroHighlights: string[];
  fitTitle: string;
  fitIntro: string;
  fitBullets: string[];
  includedTitle: string;
  includedBullets: string[];
  processTitle: string;
  processSteps: IntentProcessStep[];
  whyTitle: string;
  whyParagraphs: string[];
  pricingTitle: string;
  pricingText: string;
  finalCtaTitle: string;
  finalCtaText: string;
  faqItems: IntentFaqItem[];
  relatedServiceSlug: string;
  relatedBlogSlug: string;
  relatedProjectSlug: string;
  heroImage: StaticImageData;
  accent: {
    primary: string;
    secondary: string;
    glow: string;
  };
};

export const intentLandingPages: IntentLandingPage[] = [
  {
    slug: "affordable-website-development-for-startups",
    path: "/affordable-website-development-for-startups",
    navLabel: "Affordable Website Development for Startups",
    metaTitle: "Affordable Website Development for Startups | Reddystack",
    metaDescription:
      "Founder-led affordable website development for startups that need SEO-ready structure, sharp positioning, and a practical launch path from Hyderabad for India and worldwide clients.",
    eyebrow: "Startup Website Landing Page",
    shortTitle: "Affordable website development",
    headline: "Affordable website development for startups that still needs to feel premium.",
    intro:
      "Reddystack helps early-stage startups launch credible websites without wasting budget on bloated scope. The work stays founder-led, SEO-ready, and structured for real inquiries from India and worldwide.",
    heroHighlights: [
      "Founder-led execution from Rahul Reddy",
      "Clear scope before design and build begin",
      "SEO-ready structure, copy, and conversion flow",
    ],
    fitTitle: "Best fit for startups that need a strong first website without agency overhead.",
    fitIntro:
      "This page is for teams that need a website to explain the offer clearly, look trustworthy fast, and start generating better conversations without turning a simple launch into a months-long project.",
    fitBullets: [
      "Early-stage startups validating positioning and outreach",
      "Founder-led teams replacing a weak brochure site or no site at all",
      "Businesses that need an affordable launch with premium execution and room to grow",
    ],
    includedTitle: "What the build usually includes",
    includedBullets: [
      "Homepage and service-page structure shaped around real buyer questions",
      "SEO foundations, performance setup, and crawl-friendly page hierarchy",
      "Conversion-aware sections, inquiry paths, and launch support",
      "Messaging guidance so the site explains the business in one pass",
    ],
    processTitle: "How the project stays practical",
    processSteps: [
      {
        label: "01. Scope",
        text: "Define the pages, audience, and action path before visual detail expands the project.",
      },
      {
        label: "02. Position",
        text: "Tighten the message so the startup looks credible, clear, and commercially useful from day one.",
      },
      {
        label: "03. Launch",
        text: "Ship a responsive, SEO-ready website with a cleaner path to inquiries and next steps.",
      },
    ],
    whyTitle: "Why Reddystack is a good fit here",
    whyParagraphs: [
      "Affordable should not mean generic. Reddystack keeps the delivery lean by controlling scope, reducing rework, and focusing on the pages that actually matter for a startup launch.",
      "The process is founder-led, based in Hyderabad, and built to support clients across India and worldwide. That means the communication stays direct and the website stays aligned to the business goal instead of template leftovers.",
    ],
    pricingTitle: "Pricing approach",
    pricingText:
      "Most startup website work starts with clear page scope, launch requirements, and the level of SEO structure needed. The goal is not to promise the cheapest site, but to keep the first version commercially useful and realistically priced.",
    finalCtaTitle: "Launch a startup website that feels credible from the first screen.",
    finalCtaText:
      "If you need an affordable website with better positioning, stronger SEO foundations, and a founder-led build path, start with a project brief.",
    faqItems: [
      {
        question: "Can an affordable startup website still look premium?",
        answer:
          "Yes. The key is controlled scope and strong structure. Reddystack focuses the budget on the pages, messaging, and UX that directly improve credibility and inquiries.",
        some_features: ["Controlled Scope", "Premium UX", "Credibility"],
      },
      {
        question: "Is this only for Hyderabad startups?",
        answer:
          "No. Reddystack is based in Hyderabad and works with startups across India and worldwide through a remote-friendly delivery process.",
        some_features: ["Hyderabad", "India", "Worldwide"],
      },
      {
        question: "Will the website be SEO-ready from launch?",
        answer:
          "Yes. The structure, page hierarchy, speed, and on-page SEO foundations are planned into the build instead of being treated as an afterthought.",
        some_features: ["SEO-ready", "Page Hierarchy", "Performance"],
      },
    ],
    relatedServiceSlug: "seo-websites",
    relatedBlogSlug: "how-seo-websites-help-startups-get-better-leads",
    relatedProjectSlug: "kalyamram",
    heroImage: heroWebsite,
    accent: {
      primary: "#ffdb59",
      secondary: "#121212",
      glow: "rgba(255, 219, 89, 0.24)",
    },
  },
  {
    slug: "seo-website-development-for-small-businesses",
    path: "/seo-website-development-for-small-businesses",
    navLabel: "SEO Website Development for Small Businesses",
    metaTitle: "SEO Website Development for Small Businesses | Reddystack",
    metaDescription:
      "SEO website development for small businesses that need better visibility, clearer service pages, and founder-led practical delivery from Hyderabad for India and worldwide clients.",
    eyebrow: "Search-Focused Service Page",
    shortTitle: "SEO website development",
    headline: "SEO website development for small businesses that need visibility and clearer lead flow.",
    intro:
      "Reddystack builds SEO-ready websites for small businesses that want stronger search visibility, cleaner service-page structure, and a more direct route from discovery to inquiry.",
    heroHighlights: [
      "Search-ready page structure from the start",
      "Better service-page clarity for real buyers",
      "Hyderabad-based, serving India and worldwide",
    ],
    fitTitle: "Best fit for businesses that need more than a brochure site.",
    fitIntro:
      "If the website should help people discover your services, understand what you do quickly, and contact you with higher intent, the build needs stronger SEO structure and better page planning from day one.",
    fitBullets: [
      "Small businesses with multiple services or offers",
      "Teams that want organic growth without messy page architecture",
      "Brands replacing unclear websites with a more useful acquisition asset",
    ],
    includedTitle: "What the service usually includes",
    includedBullets: [
      "Keyword-aware service page planning and cleaner page hierarchy",
      "Conversion-focused copy structure, CTAs, and inquiry paths",
      "On-page SEO setup, technical hygiene, and performance tuning",
      "Responsive execution that keeps the message clear on mobile and desktop",
    ],
    processTitle: "How the work is approached",
    processSteps: [
      {
        label: "01. Search intent",
        text: "Map what buyers are likely searching for and decide which pages deserve dedicated visibility.",
      },
      {
        label: "02. Structure",
        text: "Build a page system that supports rankings, trust, and conversion instead of forcing everything onto one page.",
      },
      {
        label: "03. Conversion",
        text: "Tighten the site so visitors can understand the offer quickly and move toward contact with less hesitation.",
      },
    ],
    whyTitle: "Why Reddystack is a good fit here",
    whyParagraphs: [
      "Small-business websites often fail because the structure is generic, not because the design is ugly. Reddystack treats hierarchy, copy flow, and SEO readiness as part of the same decision.",
      "The delivery stays founder-led and practical. Based in Hyderabad and working with clients across India and worldwide, the build focuses on clarity, speed, and pages that support real lead generation.",
    ],
    pricingTitle: "Pricing approach",
    pricingText:
      "Pricing usually depends on how many service pages need dedicated structure, how much content shaping is required, and whether the launch is a fresh build or a redesign. The goal is affordable, practical delivery with long-term SEO value.",
    finalCtaTitle: "Turn your website into a cleaner visibility and inquiry asset.",
    finalCtaText:
      "If your small business needs stronger SEO page structure and clearer service positioning, start with a scoped website plan.",
    faqItems: [
      {
        question: "Do small businesses really need SEO-ready service pages?",
        answer:
          "Yes. Service pages help search engines understand what you offer and help buyers land on the exact page that answers their question.",
        some_features: ["Service Pages", "Search Visibility", "Lead Intent"],
      },
      {
        question: "Is this different from just redesigning the website?",
        answer:
          "Yes. The focus is not only visual improvement. The build also improves page structure, search relevance, and conversion clarity.",
        some_features: ["Structure", "Search Relevance", "Conversion"],
      },
      {
        question: "Can this work for businesses outside Hyderabad?",
        answer:
          "Yes. Reddystack is based in Hyderabad but supports businesses across India and international markets through remote-first delivery.",
        some_features: ["Hyderabad", "India", "International"],
      },
    ],
    relatedServiceSlug: "seo-websites",
    relatedBlogSlug: "landing-pages-vs-seo-websites-what-should-you-launch-first",
    relatedProjectSlug: "reelsxpress",
    heroImage: heroWebsite,
    accent: {
      primary: "#00cc97",
      secondary: "#121212",
      glow: "rgba(0, 204, 151, 0.24)",
    },
  },
  {
    slug: "mvp-development-for-startup-founders",
    path: "/mvp-development-for-startup-founders",
    navLabel: "MVP Development for Startup Founders",
    metaTitle: "MVP Development for Startup Founders | Reddystack",
    metaDescription:
      "Founder-led MVP development for startup founders who need lean scoping, faster validation, and practical delivery from Hyderabad for India and worldwide clients.",
    eyebrow: "Founder MVP Landing Page",
    shortTitle: "MVP development",
    headline: "MVP development for startup founders who need validation without overbuilding.",
    intro:
      "Reddystack helps startup founders ship first versions with lean scope, practical product thinking, and faster delivery. The goal is a usable product that reaches proof, feedback, or traction without bloated release plans.",
    heroHighlights: [
      "Lean scope around what users actually need first",
      "Founder-led execution with faster decisions",
      "Built for India and worldwide startup teams",
    ],
    fitTitle: "Best fit for founders who need version one in market, not trapped in planning.",
    fitIntro:
      "This page is for startup founders, operators, and early teams that need to validate an idea, test demand, or launch a cleaner first release without carrying unnecessary feature weight.",
    fitBullets: [
      "Founders launching a first usable product to real users",
      "Teams that need validation, demos, or early traction faster",
      "Product ideas that need sharper scope before engineering expands too early",
    ],
    includedTitle: "What the MVP build usually includes",
    includedBullets: [
      "Lean feature scoping around the core user journey",
      "Screen and workflow planning for a realistic first release",
      "Founder-led delivery using AI-assisted build workflows where useful",
      "Post-launch iteration thinking so version one can evolve cleanly",
    ],
    processTitle: "How the MVP stays lean",
    processSteps: [
      {
        label: "01. Decide",
        text: "Define the one user outcome the first release must support before secondary ideas start expanding the scope.",
      },
      {
        label: "02. Build",
        text: "Shape the core flows, screens, and release structure around clarity, not feature volume.",
      },
      {
        label: "03. Validate",
        text: "Launch a usable first version with a cleaner path to feedback, traction, or investor-facing demos.",
      },
    ],
    whyTitle: "Why Reddystack is a good fit here",
    whyParagraphs: [
      "MVP work fails when the founder vision and build process drift apart. Reddystack keeps the work close to the business intent with founder-led execution and controlled scope.",
      "Based in Hyderabad and serving India and worldwide, the process is designed for startup speed: clear decisions, practical delivery, and product flows that are strong enough to test in the real world.",
    ],
    pricingTitle: "Pricing approach",
    pricingText:
      "MVP pricing depends on the number of core flows, product complexity, and how much release planning is needed before execution. The priority is a lean first version with clear scope, not an oversized roadmap.",
    finalCtaTitle: "Ship the MVP that earns better feedback instead of more confusion.",
    finalCtaText:
      "If you need a founder-led MVP build with faster validation and less feature waste, start with the core release plan.",
    faqItems: [
      {
        question: "Can you help reduce unnecessary MVP features?",
        answer:
          "Yes. Scope control is one of the main parts of the service. The first version should prove the idea, not carry every possible feature.",
        some_features: ["Scope Control", "Validation", "Lean Build"],
      },
      {
        question: "Is this only for venture-backed startups?",
        answer:
          "No. It also fits bootstrapped founders, internal product ideas, and early teams that need a usable first version with practical delivery.",
        some_features: ["Bootstrapped Founders", "Internal Products", "Early Teams"],
      },
      {
        question: "Can this support founders outside India?",
        answer:
          "Yes. Reddystack is based in Hyderabad and supports founders across India and worldwide through remote execution.",
        some_features: ["Hyderabad", "India", "Worldwide"],
      },
    ],
    relatedServiceSlug: "mvp-builds",
    relatedBlogSlug: "what-a-founder-led-mvp-launch-needs-before-release",
    relatedProjectSlug: "gitwall-app",
    heroImage: heroMvp,
    accent: {
      primary: "#ff759c",
      secondary: "#121212",
      glow: "rgba(255, 117, 156, 0.24)",
    },
  },
  {
    slug: "ai-automation-services-for-small-teams",
    path: "/ai-automation-services-for-small-teams",
    navLabel: "AI Automation Services for Small Teams",
    metaTitle: "AI Automation Services for Small Teams | Reddystack",
    metaDescription:
      "AI automation services for small teams that need faster operations, better workflow consistency, and founder-led practical delivery from Hyderabad for India and worldwide clients.",
    eyebrow: "Operations Automation Page",
    shortTitle: "AI automation services",
    headline: "AI automation services for small teams that need less manual work and better operational flow.",
    intro:
      "Reddystack helps small teams design practical AI automations for repetitive business work. The focus is operational usefulness: clearer workflows, faster responses, and less time lost to manual follow-up.",
    heroHighlights: [
      "Workflow-first automation instead of novelty demos",
      "Prompt engineering and handoff logic where it matters",
      "Practical systems for lean teams across India and worldwide",
    ],
    fitTitle: "Best fit for small teams with repeated tasks and scattered handoffs.",
    fitIntro:
      "This page is for founders, operators, and lean teams who want to reduce repetitive work, improve consistency, and create faster internal or client-facing processes without hiring for every repeated task.",
    fitBullets: [
      "Teams handling repeated lead, content, or operations workflows",
      "Businesses that need automations connected to existing tools and forms",
      "Operators who want better consistency without replacing everything at once",
    ],
    includedTitle: "What the automation work usually includes",
    includedBullets: [
      "Workflow mapping around repetitive business actions",
      "Prompt logic and AI-assisted process design for common paths",
      "Automation setup for lead handling, operations, and content workflows",
      "Optional lightweight front-end layers when users need a cleaner interaction",
    ],
    processTitle: "How the work stays practical",
    processSteps: [
      {
        label: "01. Map",
        text: "Identify the repeated tasks, handoffs, and delays that actually deserve automation.",
      },
      {
        label: "02. Design",
        text: "Shape the logic so the automation is useful, trackable, and maintainable instead of brittle.",
      },
      {
        label: "03. Integrate",
        text: "Connect the workflow into real operations, forms, or customer handling where the time savings matter.",
      },
    ],
    whyTitle: "Why Reddystack is a good fit here",
    whyParagraphs: [
      "Small-team automation should reduce friction, not add another layer of complexity. Reddystack approaches AI automation as an operations service, not as hype around tools.",
      "The work is founder-led from Hyderabad and supports clients across India and worldwide. That keeps the implementation practical, direct, and tied to actual business workflow improvement.",
    ],
    pricingTitle: "Pricing approach",
    pricingText:
      "Automation pricing usually depends on workflow complexity, number of handoff paths, and how many tools or front-end layers need to be connected. The goal is measurable practical delivery, not experimental bloat.",
    finalCtaTitle: "Turn repeated work into a cleaner system your team can actually use.",
    finalCtaText:
      "If your team is losing time to manual follow-up, content handling, or scattered ops, start with a practical automation brief.",
    faqItems: [
      {
        question: "Are AI automations useful for very small teams?",
        answer:
          "Yes. Small teams often feel the time cost of repeated manual work most intensely, which makes focused automation especially valuable.",
        some_features: ["Small Teams", "Time Savings", "Automation"],
      },
      {
        question: "Can automations work with our existing tools?",
        answer:
          "Yes. Reddystack can connect automations to existing forms, workflows, and lightweight interfaces when the goal is to reduce friction rather than rebuild everything.",
        some_features: ["Existing Tools", "Forms", "Workflows"],
      },
      {
        question: "Do you work only with Hyderabad-based companies?",
        answer:
          "No. Reddystack is based in Hyderabad and works with teams across India and international markets through remote-friendly delivery.",
        some_features: ["Hyderabad", "India", "International"],
      },
    ],
    relatedServiceSlug: "ai-automations",
    relatedBlogSlug: "ai-automations-small-teams-can-actually-use",
    relatedProjectSlug: "telegram-auto-reply-bot",
    heroImage: heroAutomation,
    accent: {
      primary: "#19b3f1",
      secondary: "#121212",
      glow: "rgba(25, 179, 241, 0.24)",
    },
  },
];

export type IntentLandingPageSlug = (typeof intentLandingPages)[number]["slug"];
export type { IntentLandingPage };

export function getIntentLandingPage(slug: IntentLandingPageSlug) {
  return intentLandingPages.find((page) => page.slug === slug);
}

function buildHighlightTitle(shortTitle: string): [string, string] {
  const words = shortTitle.split(" ");

  if (words.length === 1) {
    return [words[0], "Launch"];
  }

  return [words[0], words.slice(1).join(" ")];
}

export function buildIntentServiceDetail(page: IntentLandingPage): ServiceDetail {
  return {
    slug: page.slug,
    path: page.path,
    subtitle: page.eyebrow,
    title: page.navLabel,
    introPrimary: page.intro,
    introSecondary: page.fitIntro,
    overviewPrimary: page.whyParagraphs[0] || page.pricingText,
    overviewSecondary: page.whyParagraphs[1] || page.finalCtaText,
    features: page.includedBullets,
    closingSummary: page.pricingText,
    sideTitle: page.fitTitle,
    categories: page.heroHighlights,
    highlightTitle: buildHighlightTitle(page.shortTitle),
    highlightText: page.finalCtaText,
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    heroImage: page.heroImage,
    presentation: {
      showVisuals: false,
      showSidebar: false,
      faqTitle: `Questions About ${page.shortTitle}`,
      faqDescription: `Clear answers for teams exploring ${page.shortTitle.toLowerCase()} with Reddystack.`,
      faqHighlights: page.faqItems.flatMap((item) => item.some_features).slice(0, 3),
      showFaqShapes: false,
    },
    faqItems: page.faqItems,
  };
}

export function getAdjacentIntentServiceDetails(slug: IntentLandingPageSlug) {
  const currentIndex = intentLandingPages.findIndex((page) => page.slug === slug);

  if (currentIndex === -1) {
    return {
      previousPage: null,
      nextPage: null,
    };
  }

  const previousPage =
    intentLandingPages[
      (currentIndex - 1 + intentLandingPages.length) % intentLandingPages.length
    ];
  const nextPage = intentLandingPages[(currentIndex + 1) % intentLandingPages.length];

  return {
    previousPage: buildIntentServiceDetail(previousPage),
    nextPage: buildIntentServiceDetail(nextPage),
  };
}

export function buildIntentLandingPageMetadata(page: IntentLandingPage): Metadata {
  const canonicalUrl = buildCanonicalUrl(page.path);

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: buildOpenGraph({
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      images: [buildSeoImage(page.heroImage, page.headline)],
    }),
    twitter: buildTwitterCard({
      title: page.metaTitle,
      description: page.metaDescription,
      images: [buildSeoImage(page.heroImage, page.headline).url],
    }),
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export function buildIntentLandingPageSchema(page: IntentLandingPage) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle,
    url: buildCanonicalUrl(page.path),
    description: page.metaDescription,
    about: {
      "@type": "ProfessionalService",
      name: siteConfig.brandName,
      url: siteConfig.siteUrl,
      areaServed: [...siteConfig.serviceAreas],
    },
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.brandName,
      url: siteConfig.siteUrl,
    },
    primaryImageOfPage: buildSeoImage(page.heroImage, page.headline).url,
  };
}
