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
    slug: "how-much-does-a-website-cost-in-india",
    path: "/how-much-does-a-website-cost-in-india",
    navLabel: "How Much Does a Website Cost in India?",
    metaTitle: "How Much Does a Website Cost in India? | Reddystack",
    metaDescription:
      "Clear website cost guidance for India, covering static websites, business websites, landing pages, redesigns, and custom website development.",
    eyebrow: "Website Cost Guide",
    shortTitle: "website cost in India",
    headline: "How much does a website cost in India for a serious business launch?",
    intro:
      "Website cost in India depends on scope, content, design depth, SEO structure, integrations, and how much custom work the business needs. Reddystack helps founders and businesses choose a practical website budget instead of paying for bloated scope or underbuilt template work.",
    heroHighlights: [
      "Static website cost: usually lower when scope is simple",
      "Business website cost: depends on pages, copy, SEO, and conversion flow",
      "Custom website cost: higher when workflows, dashboards, or integrations are needed",
    ],
    fitTitle: "Best fit for founders comparing website creation cost, design charges, and realistic launch scope.",
    fitIntro:
      "This guide is for startups, small businesses, and founder-led teams that need a clear view of website development cost in India before starting a project.",
    fitBullets: [
      "You need a credible website but do not know what budget range is realistic",
      "You are comparing static website cost, dynamic website cost, and custom development cost",
      "You want a site that is SEO-ready, mobile-friendly, and built around inquiries",
    ],
    includedTitle: "Common website cost ranges in India",
    includedBullets: [
      "Simple landing page or one-page website: often Rs. 10,000 to Rs. 35,000 depending on copy, design, and form setup",
      "Static business website: often Rs. 25,000 to Rs. 75,000 for a clear homepage, service sections, contact flow, and basic SEO",
      "SEO-ready small business website: often Rs. 50,000 to Rs. 1,50,000 when service pages, stronger content structure, and performance work are included",
      "Custom website or web app: often Rs. 1,50,000+ when dashboards, logins, integrations, or custom workflows are part of the build",
      "Website redesign: pricing depends on whether the work is visual cleanup, content restructuring, SEO repair, or full rebuild",
    ],
    processTitle: "How to estimate website pricing",
    processSteps: [
      {
        label: "01. Define scope",
        text: "List the pages, sections, forms, and integrations the first version actually needs.",
      },
      {
        label: "02. Separate must-haves",
        text: "Split essential launch requirements from future additions so the quote does not expand too early.",
      },
      {
        label: "03. Price for outcome",
        text: "Compare quotes by clarity, SEO readiness, performance, and conversion flow instead of page count alone.",
      },
    ],
    whyTitle: "Why cost varies so much",
    whyParagraphs: [
      "A low-cost website usually keeps scope narrow: fewer pages, simpler visuals, limited content work, and fewer integrations. That can be enough for a first presence, but it may not support search visibility or serious lead generation.",
      "A stronger website budget usually covers positioning, page structure, responsive execution, SEO foundations, performance, forms, and launch support. Reddystack keeps the work founder-led so the budget goes into useful scope instead of unnecessary agency overhead.",
    ],
    pricingTitle: "Pricing guidance",
    pricingText:
      "The practical answer is to price the website around the business goal. A launch page, a service website, a redesign, and a custom web app are different projects. Reddystack starts by clarifying the outcome, then scopes the smallest useful version that can still look credible and convert.",
    finalCtaTitle: "Get a clear website scope before deciding the budget.",
    finalCtaText:
      "If you want to understand the right website cost for your startup, small business, or service brand, share the project goal and Reddystack will help shape a practical scope.",
    faqItems: [
      {
        question: "What is the average website development cost in India?",
        answer:
          "For a simple business website, many projects fall between Rs. 25,000 and Rs. 1,50,000. The final cost depends on page count, design quality, content work, SEO setup, forms, performance, and custom functionality.",
        some_features: ["Website Cost", "India Pricing", "Business Website"],
      },
      {
        question: "What is the difference between static website cost and dynamic website cost?",
        answer:
          "A static website is usually cheaper because the content and functionality are simpler. A dynamic website costs more when it includes dashboards, logins, CMS features, integrations, or custom user workflows.",
        some_features: ["Static Website", "Dynamic Website", "Custom Scope"],
      },
      {
        question: "How much does a landing page cost in India?",
        answer:
          "A focused landing page often starts lower than a full website, but pricing still depends on copy, design detail, forms, tracking, and whether it needs SEO or ad-campaign support.",
        some_features: ["Landing Page", "Lead Generation", "Tracking"],
      },
      {
        question: "Why do website design charges vary between developers?",
        answer:
          "Charges vary because some quotes include only design and build, while others include content structure, SEO basics, speed work, forms, analytics, launch support, and revision time.",
        some_features: ["Design Charges", "SEO Setup", "Launch Support"],
      },
      {
        question: "Can Reddystack help choose the right website budget?",
        answer:
          "Yes. Reddystack can review the goal, pages, features, and launch timeline, then suggest a practical scope that avoids both underbuilding and unnecessary overbuilding.",
        some_features: ["Clear Scope", "Founder-led", "Practical Budget"],
      },
    ],
    relatedServiceSlug: "seo-websites",
    relatedBlogSlug: "landing-pages-vs-seo-websites-what-should-you-launch-first",
    relatedProjectSlug: "kalyamram",
    heroImage: heroWebsite,
    accent: {
      primary: "#ffdb59",
      secondary: "#121212",
      glow: "rgba(255, 219, 89, 0.24)",
    },
  },
  {
    slug: "website-redesign-services",
    path: "/website-redesign-services",
    navLabel: "Website Redesign Services",
    metaTitle: "Website Redesign Services | Reddystack",
    metaDescription:
      "Founder-led website redesign services for businesses that need clearer messaging, better SEO structure, faster performance, and stronger inquiry flow.",
    eyebrow: "Website Redesign Services",
    shortTitle: "website redesign services",
    headline: "Website redesign services for sites that need better clarity, SEO, and lead flow.",
    intro:
      "Reddystack helps businesses redesign outdated, unclear, or underperforming websites into cleaner, SEO-ready digital assets. The work focuses on structure, messaging, performance, and conversion instead of surface-level visual changes only.",
    heroHighlights: [
      "Improve website structure before changing visuals",
      "Repair weak messaging, page hierarchy, and CTAs",
      "Keep redesign scope practical and launch-ready",
    ],
    fitTitle: "Best fit for businesses comparing website redesign services and redesign packages.",
    fitIntro:
      "This page is for teams that already have a website but need it to communicate better, feel more credible, and support search visibility or inquiries more clearly.",
    fitBullets: [
      "Your current website looks dated or generic",
      "Visitors do not understand your services quickly enough",
      "The site has weak SEO structure, slow pages, or unclear inquiry paths",
    ],
    includedTitle: "What a practical redesign usually includes",
    includedBullets: [
      "Homepage and service-section restructuring around real buyer questions",
      "Updated messaging, CTA flow, and page hierarchy",
      "SEO hygiene, metadata review, internal links, and crawl-friendly structure",
      "Performance cleanup, responsive checks, and launch support",
      "Optional migration from a weak template or older website setup",
    ],
    processTitle: "How the redesign is scoped",
    processSteps: [
      {
        label: "01. Audit",
        text: "Review the current website, page purpose, SEO gaps, content quality, and conversion path.",
      },
      {
        label: "02. Rebuild",
        text: "Restructure the pages and messaging before polishing visuals so the redesign has a business reason.",
      },
      {
        label: "03. Relaunch",
        text: "Ship the improved website with cleaner SEO foundations, analytics, and practical post-launch checks.",
      },
    ],
    whyTitle: "Why redesign work should not be only visual",
    whyParagraphs: [
      "Many redesigns fail because they make the site look newer without fixing the reason users were confused. Reddystack treats copy, hierarchy, speed, and contact flow as part of the redesign.",
      "The delivery is founder-led and scoped around practical outcomes: clearer pages, better search readiness, and a website that supports real business conversations.",
    ],
    pricingTitle: "Redesign pricing approach",
    pricingText:
      "Website redesign packages depend on the size of the current site, how much content needs rewriting, whether SEO repair is required, and how much rebuild work is needed. The goal is a cleaner website that earns trust faster, not a cosmetic refresh.",
    finalCtaTitle: "Turn an unclear website into a stronger business asset.",
    finalCtaText:
      "If your current website is not explaining the offer clearly or creating enough inquiries, start with a focused redesign review.",
    faqItems: [
      {
        question: "When should a business redesign its website?",
        answer:
          "A redesign is worth considering when the site looks outdated, loads slowly, fails to explain services clearly, has weak SEO structure, or does not generate enough serious inquiries.",
        some_features: ["Outdated Website", "SEO Structure", "Lead Flow"],
      },
      {
        question: "Is website redesign different from building a new website?",
        answer:
          "Yes. A redesign starts from an existing site and decides what should be kept, rewritten, restructured, or rebuilt. A new website usually starts from a blank scope.",
        some_features: ["Existing Site", "Rebuild Scope", "Content Review"],
      },
      {
        question: "Can a redesign improve SEO?",
        answer:
          "Yes, if the redesign fixes headings, metadata, page hierarchy, internal links, speed, content clarity, and crawl issues. Visual changes alone do not guarantee SEO improvement.",
        some_features: ["Metadata", "Internal Links", "Performance"],
      },
      {
        question: "How much does a website redesign cost?",
        answer:
          "Redesign cost depends on page count, content changes, SEO repair, design depth, and whether the existing technical setup can be reused. Reddystack scopes redesign work around the smallest useful relaunch.",
        some_features: ["Redesign Cost", "Page Count", "SEO Repair"],
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
    slug: "website-maintenance-services",
    path: "/website-maintenance-services",
    navLabel: "Website Maintenance Services",
    metaTitle: "Website Maintenance Services | Reddystack",
    metaDescription:
      "Website maintenance services for businesses that need updates, technical checks, SEO hygiene, speed fixes, tracking, and practical website support.",
    eyebrow: "Website Maintenance Services",
    shortTitle: "website maintenance services",
    headline: "Website maintenance services that keep your site useful after launch.",
    intro:
      "Reddystack supports websites after launch with practical maintenance: updates, fixes, SEO hygiene, page improvements, performance checks, analytics review, and small content changes that keep the site commercially useful.",
    heroHighlights: [
      "Website updates and small page changes",
      "SEO hygiene, tracking, and technical checks",
      "Performance, forms, and launch-health support",
    ],
    fitTitle: "Best fit for businesses that need website maintenance cost clarity and reliable support.",
    fitIntro:
      "This page is for teams that already have a website and need ongoing support without hiring a full internal web team.",
    fitBullets: [
      "You need regular content, CTA, or service-page updates",
      "You want someone checking forms, analytics, page speed, and SEO basics",
      "You need practical fixes instead of a full redesign right now",
    ],
    includedTitle: "What maintenance can include",
    includedBullets: [
      "Small content edits, section updates, and landing-page improvements",
      "Technical checks for forms, tracking, metadata, sitemap, and redirects",
      "Page-speed cleanup, mobile checks, and basic frontend fixes",
      "SEO hygiene review for titles, descriptions, internal links, and indexable pages",
      "Monthly or as-needed support depending on how active the website is",
    ],
    processTitle: "How support stays focused",
    processSteps: [
      {
        label: "01. Check",
        text: "Review the current site health, update needs, analytics, forms, and SEO basics.",
      },
      {
        label: "02. Prioritize",
        text: "Separate urgent fixes from nice-to-have changes so maintenance stays useful.",
      },
      {
        label: "03. Improve",
        text: "Apply updates, verify key pages, and keep the site ready for visitors and search engines.",
      },
    ],
    whyTitle: "Why maintenance matters",
    whyParagraphs: [
      "A website can slowly lose value after launch if forms break, pages become outdated, tracking fails, or search basics are ignored. Maintenance keeps the site working as a business asset.",
      "Reddystack keeps support practical: fix what affects trust, visibility, speed, or inquiries first, then improve pages as the business changes.",
    ],
    pricingTitle: "Maintenance pricing approach",
    pricingText:
      "Website maintenance cost depends on update frequency, technical complexity, number of pages, and whether SEO/content support is included. Some sites only need occasional fixes, while active sites need monthly improvement cycles.",
    finalCtaTitle: "Keep your website healthy after launch.",
    finalCtaText:
      "If your website needs updates, fixes, SEO hygiene, or ongoing support, start with a maintenance review.",
    faqItems: [
      {
        question: "What does website maintenance include?",
        answer:
          "Maintenance can include content edits, technical fixes, form checks, analytics setup, metadata updates, speed cleanup, internal-link improvements, and launch-health checks.",
        some_features: ["Content Updates", "Technical Fixes", "SEO Hygiene"],
      },
      {
        question: "How much does website maintenance cost in India?",
        answer:
          "Website maintenance cost in India depends on update frequency, page count, technology, and support scope. Simple support can be occasional, while active business websites often need monthly maintenance.",
        some_features: ["Maintenance Cost", "India Pricing", "Monthly Support"],
      },
      {
        question: "Is maintenance useful for SEO?",
        answer:
          "Yes. Maintenance helps keep metadata, internal links, sitemap, redirects, speed, and page content healthy. These basics support indexing and search performance over time.",
        some_features: ["Metadata", "Sitemap", "Page Speed"],
      },
      {
        question: "Can Reddystack maintain a website it did not build?",
        answer:
          "Usually yes, after reviewing the stack, access, current issues, and update needs. Some older or fragile websites may need cleanup before regular maintenance starts.",
        some_features: ["Website Review", "Existing Site", "Support"],
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
    slug: "landing-page-development-for-lead-generation",
    path: "/landing-page-development-for-lead-generation",
    navLabel: "Landing Page Development for Lead Generation",
    metaTitle: "Landing Page Development for Lead Generation | Reddystack",
    metaDescription:
      "Landing page development for lead generation, SaaS launches, app landing pages, service offers, and campaign pages that need clear conversion flow.",
    eyebrow: "Lead Generation Landing Pages",
    shortTitle: "landing page development",
    headline: "Landing page development for campaigns that need clearer leads.",
    intro:
      "Reddystack builds landing pages for founders, service businesses, SaaS ideas, app launches, and campaigns that need focused messaging, tracking, forms, and a direct route from visitor attention to inquiry.",
    heroHighlights: [
      "Focused page structure for one offer or campaign",
      "Lead forms, analytics, and conversion-aware CTAs",
      "Useful for SaaS, app, service, and payment-enabled landing pages",
    ],
    fitTitle: "Best fit for teams comparing landing page design services and lead generation pages.",
    fitIntro:
      "This page is for businesses that do not need a full website for a campaign, but do need a focused page that explains one offer clearly and captures serious interest.",
    fitBullets: [
      "You need a SaaS landing page or app landing page for a launch",
      "You want a lead generation landing page for a service or campaign",
      "You need forms, tracking, clear CTAs, and faster launch execution",
    ],
    includedTitle: "What a lead-focused landing page includes",
    includedBullets: [
      "One clear offer, audience, and conversion action",
      "Hero, proof, benefits, process, FAQ, and contact/lead form sections",
      "Analytics and event tracking for lead actions",
      "Responsive execution for mobile and desktop visitors",
      "Optional payment gateway or lightweight workflow handoff when needed",
    ],
    processTitle: "How the landing page is planned",
    processSteps: [
      {
        label: "01. Offer",
        text: "Define the one thing the page must sell, explain, or validate.",
      },
      {
        label: "02. Message",
        text: "Shape the headline, proof, benefits, and CTA around one visitor intent.",
      },
      {
        label: "03. Track",
        text: "Launch with forms, analytics, and event tracking so leads can be measured.",
      },
    ],
    whyTitle: "Why landing pages work best when focused",
    whyParagraphs: [
      "A landing page should not behave like a smaller homepage. It needs one offer, one audience, and one action path so visitors are not forced to interpret too much.",
      "Reddystack builds landing pages with practical conversion structure, SEO-aware content when useful, and tracking that helps you understand whether the campaign is working.",
    ],
    pricingTitle: "Landing page pricing approach",
    pricingText:
      "Landing page cost depends on copy, design depth, form logic, tracking, number of sections, and whether extra workflow or payment setup is needed. The goal is a page that can launch fast without feeling generic.",
    finalCtaTitle: "Launch a landing page built around one clear action.",
    finalCtaText:
      "If you need a SaaS landing page, app landing page, service landing page, or lead generation page, start with the offer and campaign goal.",
    faqItems: [
      {
        question: "What is a lead generation landing page?",
        answer:
          "It is a focused page built around one offer and one conversion action, such as submitting a form, booking a call, joining a waitlist, or requesting a quote.",
        some_features: ["Lead Form", "Single Offer", "Conversion"],
      },
      {
        question: "Is a landing page different from a full website?",
        answer:
          "Yes. A landing page is usually built for one campaign or offer, while a website explains the broader business, services, trust signals, and long-term search structure.",
        some_features: ["Campaign Page", "Website", "Search Structure"],
      },
      {
        question: "Can a landing page include payment gateway setup?",
        answer:
          "Yes, when the offer needs direct payment or booking flow. The scope depends on the payment provider, checkout flow, and confirmation requirements.",
        some_features: ["Payment Gateway", "Checkout", "Booking"],
      },
      {
        question: "Can you build SaaS or mobile app landing pages?",
        answer:
          "Yes. Reddystack can build SaaS landing pages, app launch pages, waitlist pages, and validation pages with clear messaging and lead tracking.",
        some_features: ["SaaS Landing Page", "App Landing Page", "Waitlist"],
      },
    ],
    relatedServiceSlug: "seo-websites",
    relatedBlogSlug: "landing-pages-vs-seo-websites-what-should-you-launch-first",
    relatedProjectSlug: "reelsxpress",
    heroImage: heroWebsite,
    accent: {
      primary: "#19b3f1",
      secondary: "#121212",
      glow: "rgba(25, 179, 241, 0.24)",
    },
  },
  {
    slug: "affordable-website-development-for-startups",
    path: "/affordable-website-development-for-startups",
    navLabel: "Affordable Website Development for Startups",
    metaTitle: "Affordable Website Development for Startups | Reddystack",
    metaDescription:
      "Founder-led affordable website development for startups that need SEO-ready structure, sharp positioning, and a practical launch path.",
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
      "SEO website development for small businesses that need better visibility, clearer service pages, and founder-led practical delivery.",
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
      "Founder-led MVP development for startup founders who need lean scoping, faster validation, and practical delivery.",
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
      "AI automation services for small teams that need faster operations, better workflow consistency, and founder-led practical delivery.",
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
