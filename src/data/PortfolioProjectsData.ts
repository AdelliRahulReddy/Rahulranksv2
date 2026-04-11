import type { StaticImageData } from 'next/image';

import kalyamRamImage from '@/assets/img/portfolio/port-inner-up-1.jpg';
import multiFormatConverterImage from '@/assets/img/portfolio/port-inner-up-4.jpg';
import telegramBotImage from '@/assets/img/portfolio/port-inner-up-5.jpg';
import gitWallImage from '@/assets/img/portfolio/port-inner-up-2.jpg';
import reelsXpressImage from '@/assets/img/portfolio/port-inner-up-3.jpg';
import bachelorBrotherImage from '@/assets/img/portfolio/portfolio-2.jpg';

export type PortfolioProject = {
  id: number;
  slug: string;
  path: string;
  title: string;
  category: string;
  year: number;
  client: string;
  role: string;
  services: string[];
  summary: string;
  heroDescription: string;
  heroStats: {
    value: string;
    label: string;
  }[];
  aboutTitle: string;
  aboutDescription: string[];
  overviewLead: string;
  overviewPoints: string[];
  results: {
    value: string;
    label: string;
  }[];
  ctaLabel: string;
  ctaHref: string;
  metaTitle: string;
  metaDescription: string;
  listingImage: StaticImageData;
  listingBackgroundImage: string;
  thumbVariant: 1 | 2 | 3 | 4;
  featuredOnHome?: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    slug: 'kalyamram',
    path: '/portfolio/kalyamram',
    title: 'KalyamRam',
    category: 'Portfolio Website',
    year: 2025,
    client: 'Kalyam Ram',
    role: 'Strategy, UI/UX, Frontend Build',
    services: ['Personal Branding', 'Portfolio Structure', 'Responsive Development'],
    summary:
      'A clean personal portfolio built to make services, proof, and contact intent easier to understand in one pass.',
    heroDescription:
      'KalyamRam was shaped as a founder-style portfolio website with stronger hierarchy, cleaner storytelling, and a more direct path from first impression to inquiry.',
    heroStats: [
      { value: '01', label: 'personal brand website direction' },
      { value: '03', label: 'core service themes clarified' },
      { value: '100%', label: 'responsive presentation focus' },
    ],
    aboutTitle: 'A sharper portfolio experience for a personal brand that needed more clarity.',
    aboutDescription: [
      'This project focused on presenting work, positioning, and credibility in a way that felt lighter and more intentional than a generic portfolio template.',
      'The direction was to keep the visual language premium while making the content easier to scan across desktop and mobile without losing personality.',
    ],
    overviewLead:
      'The build centered on simplifying the page flow so visitors could quickly understand who the brand is, what is offered, and where to take action.',
    overviewPoints: [
      'Restructured the content flow around introduction, proof, capabilities, and contact.',
      'Reduced visual noise so the project sections and call to action felt more deliberate.',
      'Tuned the responsive layout to keep the same clarity on smaller screens.',
    ],
    results: [
      {
        value: '04',
        label: 'core sections clarified for faster scanning and stronger story flow',
      },
      {
        value: '01',
        label: 'direct inquiry path added instead of splitting attention across multiple actions',
      },
      {
        value: '03',
        label: 'service themes made easier to understand at a glance',
      },
    ],
    ctaLabel: 'Start Similar Project',
    ctaHref: '/contact',
    metaTitle: 'KalyamRam | Portfolio Website Case Study | Reddystack',
    metaDescription:
      'See how Reddystack shaped the KalyamRam portfolio website with cleaner structure, stronger positioning, and an improved inquiry flow.',
    listingImage: kalyamRamImage,
    listingBackgroundImage: '/assets/img/portfolio/port-inner-up-1.jpg',
    thumbVariant: 1,
    featuredOnHome: true,
  },
  {
    id: 2,
    slug: 'multi-format-converter',
    path: '/portfolio/multi-format-converter',
    title: 'Multi-Format Converter',
    category: 'File Tool',
    year: 2025,
    client: 'Internal Product Build',
    role: 'Product Planning, UI Flow, App Build',
    services: ['Tool UX', 'Conversion Workflow', 'Utility Product Build'],
    summary:
      'A utility-focused product concept designed to make file conversion simpler, faster, and easier to navigate for repeat use.',
    heroDescription:
      'Multi-Format Converter was approached as a lightweight product experience where speed, clarity, and low-friction interaction mattered more than visual excess.',
    heroStats: [
      { value: '03', label: 'main steps in the product flow' },
      { value: '01', label: 'focused utility interface' },
      { value: '24/7', label: 'repeat-use tool positioning' },
    ],
    aboutTitle: 'A focused tool interface built around utility, not clutter.',
    aboutDescription: [
      'The core challenge was keeping the product straightforward enough for first-time users while still feeling credible and polished.',
      'The interface needed to support quick actions, clear format choices, and a simpler conversion journey without unnecessary steps.',
    ],
    overviewLead:
      'The design direction prioritized a minimal workflow so the user could move from file selection to conversion outcome with as little hesitation as possible.',
    overviewPoints: [
      'Simplified the interaction flow around upload, format choice, and output.',
      'Kept the visual treatment restrained so the product behavior stayed primary.',
      'Structured the interface to feel useful for both one-time and repeated use cases.',
    ],
    results: [
      {
        value: '03',
        label: 'main steps reduced into a clearer conversion journey',
      },
      {
        value: '01',
        label: 'single-purpose interface kept the product easier to understand',
      },
      {
        value: '24',
        label: 'hour-style utility positioning supported quick repeat usage',
      },
    ],
    ctaLabel: 'Discuss Utility Build',
    ctaHref: '/contact',
    metaTitle: 'Multi-Format Converter | File Tool Case Study | Reddystack',
    metaDescription:
      'Explore the Multi-Format Converter case study and see how Reddystack planned a clearer file-tool experience around speed and usability.',
    listingImage: multiFormatConverterImage,
    listingBackgroundImage: '/assets/img/portfolio/port-inner-up-4.jpg',
    thumbVariant: 4,
  },
  {
    id: 3,
    slug: 'telegram-auto-reply-bot',
    path: '/portfolio/telegram-auto-reply-bot',
    title: 'Telegram Auto-Reply Bot',
    category: 'Automation',
    year: 2025,
    client: 'Internal Automation Experiment',
    role: 'Workflow Design, Prompt Logic, Bot Setup',
    services: ['Telegram Automation', 'Reply Logic', 'Lead Handling Flow'],
    summary:
      'An automation-focused build designed to reduce response delay and create a more consistent first-touch experience inside Telegram.',
    heroDescription:
      'Telegram Auto-Reply Bot was planned as a practical automation layer that could handle common replies, reduce manual lag, and keep conversations moving.',
    heroStats: [
      { value: '05', label: 'common reply paths mapped' },
      { value: '02', label: 'handoff outcomes defined' },
      { value: '01', label: 'repeatable response system' },
    ],
    aboutTitle: 'Automation built around response speed and consistent first contact.',
    aboutDescription: [
      'The project goal was not novelty. It was operational usefulness: faster handling of repeated questions and a cleaner handoff from inbound message to next step.',
      'That required response logic that felt structured enough to trust while staying lightweight enough to maintain.',
    ],
    overviewLead:
      'The system was shaped around common inbound scenarios so the automation could support the conversation instead of turning into a brittle scripted wall.',
    overviewPoints: [
      'Mapped reply paths around frequent message intent and simple next actions.',
      'Focused on consistency so the first response felt faster and more reliable.',
      'Kept the automation scope practical to reduce maintenance overhead.',
    ],
    results: [
      {
        value: '05',
        label: 'common reply paths organized into a clearer automation structure',
      },
      {
        value: '01',
        label: 'repeatable first-response system created for inbound conversations',
      },
      {
        value: '02',
        label: 'handoff outcomes defined for reply, qualify, or escalate flows',
      },
    ],
    ctaLabel: 'Discuss Automation Build',
    ctaHref: '/contact',
    metaTitle: 'Telegram Auto-Reply Bot | Automation Case Study | Reddystack',
    metaDescription:
      'Review the Telegram Auto-Reply Bot case study and how Reddystack turned repeated messaging tasks into a cleaner automation flow.',
    listingImage: telegramBotImage,
    listingBackgroundImage: '/assets/img/portfolio/port-inner-up-5.jpg',
    thumbVariant: 3,
    featuredOnHome: true,
  },
  {
    id: 4,
    slug: 'gitwall-app',
    path: '/portfolio/gitwall-app',
    title: 'GitWall App',
    category: 'Developer Tool',
    year: 2025,
    client: 'Internal Product Build',
    role: 'Product Design, UX Direction, Build Execution',
    services: ['Developer Product', 'Dashboard UX', 'Frontend Implementation'],
    summary:
      'A developer-facing product concept designed to present technical activity in a more visual, useful, and productized way.',
    heroDescription:
      'GitWall App was shaped as a lightweight developer tool with stronger presentation, simpler navigation, and a clearer understanding of what the product does.',
    heroStats: [
      { value: '06', label: 'core interface zones shaped' },
      { value: '03', label: 'product layers clarified' },
      { value: '01', label: 'developer-focused utility' },
    ],
    aboutTitle: 'A developer tool positioned with more product clarity and less friction.',
    aboutDescription: [
      'Developer tools often become feature-first and explanation-light. This project aimed to make the experience easier to understand without losing the technical feel.',
      'The interface direction focused on cleaner product framing, faster orientation, and a more credible first-use experience.',
    ],
    overviewLead:
      'The work focused on turning a utility idea into a more legible product surface with stronger hierarchy and a better explanation of value.',
    overviewPoints: [
      'Improved the way the product communicates purpose before showing deeper functionality.',
      'Balanced developer-oriented visuals with a cleaner onboarding feel.',
      'Kept the structure modular so future features could expand without weakening the base flow.',
    ],
    results: [
      {
        value: '03',
        label: 'product layers defined around value, interaction, and future extensibility',
      },
      {
        value: '01',
        label: 'clearer positioning pass for a developer-facing audience',
      },
      {
        value: '06',
        label: 'core interface zones shaped around faster orientation',
      },
    ],
    ctaLabel: 'Build a Product Like This',
    ctaHref: '/contact',
    metaTitle: 'GitWall App | Developer Tool Case Study | Reddystack',
    metaDescription:
      'See how Reddystack approached GitWall App as a clearer, more productized developer-tool experience.',
    listingImage: gitWallImage,
    listingBackgroundImage: '/assets/img/portfolio/port-inner-up-2.jpg',
    thumbVariant: 4,
    featuredOnHome: true,
  },
  {
    id: 5,
    slug: 'reelsxpress',
    path: '/portfolio/reelsxpress',
    title: 'ReelsXpress',
    category: 'Social Media',
    year: 2025,
    client: 'ReelsXpress',
    role: 'Brand Landing Page, UX Polish, Conversion Direction',
    services: ['Landing Page Design', 'Offer Structuring', 'Content Flow'],
    summary:
      'A landing-page-style brand surface built to present social-media services with stronger hierarchy, pricing clarity, and a more premium feel.',
    heroDescription:
      'ReelsXpress focused on making the offer easier to trust and easier to act on through sharper section sequencing, more confident presentation, and cleaner mobile behavior.',
    heroStats: [
      { value: '03', label: 'key conversion sections tightened' },
      { value: '01', label: 'premium landing direction' },
      { value: '02', label: 'stronger CTA layers added' },
    ],
    aboutTitle: 'A more premium landing experience for a service-led social media brand.',
    aboutDescription: [
      'The project direction centered on reducing generic template feel and replacing it with clearer offer positioning, better content rhythm, and more intentional calls to action.',
      'The final structure leaned into a cleaner editorial feel while keeping the page conversion-oriented.',
    ],
    overviewLead:
      'The redesign was less about adding more sections and more about making the existing story feel sharper, easier to trust, and easier to move through.',
    overviewPoints: [
      'Improved section sequencing so testimonials, pricing, and CTA blocks supported the offer more clearly.',
      'Reduced clutter to create a more premium first impression.',
      'Kept the mobile experience in focus so the page stayed usable on smaller screens.',
    ],
    results: [
      {
        value: '03',
        label: 'key conversion sections tightened for a clearer offer narrative',
      },
      {
        value: '01',
        label: 'more premium visual direction established across the landing page',
      },
      {
        value: '02',
        label: 'stronger CTA layers added around pricing and project inquiry',
      },
    ],
    ctaLabel: 'Start Similar Landing Page',
    ctaHref: '/contact',
    metaTitle: 'ReelsXpress | Social Media Brand Case Study | Reddystack',
    metaDescription:
      'Explore how Reddystack improved the ReelsXpress landing experience with sharper offer structure, cleaner design, and stronger CTA flow.',
    listingImage: reelsXpressImage,
    listingBackgroundImage: '/assets/img/portfolio/port-inner-up-3.jpg',
    thumbVariant: 1,
    featuredOnHome: true,
  },
  {
    id: 6,
    slug: 'bachelor-brother',
    path: '/portfolio/bachelor-brother',
    title: 'Bachelor Brother',
    category: 'Restaurant Website',
    year: 2024,
    client: 'Bachelor Brother',
    role: 'Brand Site Direction, Menu Presentation, Local Business UX',
    services: ['Restaurant Website', 'Content Layout', 'Mobile-First UX'],
    summary:
      'A restaurant website concept built to showcase the brand, simplify discovery, and make the next action clearer for local visitors.',
    heroDescription:
      'Bachelor Brother was structured as a straightforward restaurant website where menu visibility, business credibility, and action clarity had to work quickly together.',
    heroStats: [
      { value: '03', label: 'visitor priorities aligned' },
      { value: '01', label: 'clearer action path created' },
      { value: '02', label: 'trust signals surfaced better' },
    ],
    aboutTitle: 'A restaurant site shaped for browsing, trust, and easy next action.',
    aboutDescription: [
      'For hospitality-focused websites, the first impression has to communicate taste, clarity, and confidence without becoming visually noisy.',
      'This project focused on making the brand easier to understand while supporting the practical needs of users looking for menu, vibe, and contact details.',
    ],
    overviewLead:
      'The site was organized to help visitors understand the brand quickly, browse relevant information, and move toward inquiry or visit intent with less friction.',
    overviewPoints: [
      'Balanced visual mood with practical information layout for local discovery.',
      'Improved the way menu-adjacent content and contact intent were presented.',
      'Kept the structure mobile-conscious so high-intent visitors could act quickly.',
    ],
    results: [
      {
        value: '03',
        label: 'visitor priorities aligned around brand, offer, and contact',
      },
      {
        value: '01',
        label: 'cleaner path created for users deciding whether to visit or inquire',
      },
      {
        value: '02',
        label: 'core business trust signals surfaced more clearly',
      },
    ],
    ctaLabel: 'Plan a Restaurant Website',
    ctaHref: '/contact',
    metaTitle: 'Bachelor Brother | Restaurant Website Case Study | Reddystack',
    metaDescription:
      'See how Reddystack approached the Bachelor Brother restaurant website with clearer structure, stronger branding, and easier action flow.',
    listingImage: bachelorBrotherImage,
    listingBackgroundImage: '/assets/img/portfolio/portfolio-2.jpg',
    thumbVariant: 2,
    featuredOnHome: true,
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getAdjacentPortfolioProjects(slug: string) {
  const currentIndex = portfolioProjects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return {
      previousProject: null,
      nextProject: null,
    };
  }

  return {
    previousProject:
      portfolioProjects[(currentIndex - 1 + portfolioProjects.length) % portfolioProjects.length],
    nextProject: portfolioProjects[(currentIndex + 1) % portfolioProjects.length],
  };
}

export function getFeaturedPortfolioProjects(limit?: number) {
  const featuredProjects = portfolioProjects.filter((project) => project.featuredOnHome);
  return typeof limit === 'number' ? featuredProjects.slice(0, limit) : featuredProjects;
}
