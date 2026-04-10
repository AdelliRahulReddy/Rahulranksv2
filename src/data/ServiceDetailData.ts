import type { StaticImageData } from 'next/image';

import serviceThumbnail from '@/assets/img/services/sv-details.jpg';
import serviceThumbOne from '@/assets/img/services/sv-details-1.jpg';
import serviceThumbTwo from '@/assets/img/services/sv-details-2.jpg';

export type ServiceDetail = {
  slug: string;
  path: string;
  subtitle: string;
  title: string;
  introPrimary: string;
  introSecondary: string;
  overviewPrimary: string;
  overviewSecondary: string;
  features: string[];
  closingSummary: string;
  sideTitle: string;
  categories: string[];
  highlightTitle: [string, string];
  highlightText: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: StaticImageData;
  supportingImages: [StaticImageData, StaticImageData];
};

const sharedImages = {
  heroImage: serviceThumbnail,
  supportingImages: [serviceThumbOne, serviceThumbTwo] as [StaticImageData, StaticImageData],
};

export const serviceDetailData: ServiceDetail[] = [
  {
    slug: 'seo-websites',
    path: '/service/seo-websites',
    subtitle: 'Visibility & Conversion',
    title: 'SEO Websites',
    introPrimary:
      'SEO Websites at Reddystack are planned to rank cleanly, communicate clearly, and convert attention into inquiries. The structure, page hierarchy, speed, and messaging are treated as part of the build from day one instead of being patched in later.',
    introSecondary:
      'This service is best for startups, local businesses, and founder-led brands that need a premium website with stronger search visibility and a cleaner path to leads.',
    overviewPrimary:
      'The process usually starts with site architecture, keyword-aware page planning, and wireframes that work for both search engines and real users. From there, the front end is shaped around responsive layout, clarity, and performance so the final site feels polished and commercially useful.',
    overviewSecondary:
      'UI/UX Design, landing page planning, and Brand Identity support can sit inside this service when the website also needs a sharper visual system or clearer market positioning.',
    features: [
      'Keyword-aware site structure and service page planning',
      'Responsive UI/UX design for websites and landing pages',
      'On-page SEO setup, performance tuning, and crawl-friendly markup',
      'Conversion-focused sections, CTAs, forms, and launch support',
    ],
    closingSummary:
      'Best for businesses that want a website that looks premium, supports organic growth, and helps turn visits into real project conversations.',
    sideTitle: 'Included Capabilities',
    categories: [
      'UI/UX Design',
      'Landing Pages',
      'Brand Identity',
      'Content Structure',
      'Performance Setup',
    ],
    highlightTitle: ['Search-ready', 'websites'],
    highlightText:
      'Built for brands that need visibility, clarity, and stronger conversion from their online presence.',
    metaTitle: 'SEO Websites | Reddystack',
    metaDescription:
      'Launch SEO-first websites with Reddystack. Founder-led execution, premium UI/UX, performance-focused builds, and conversion-ready page structure.',
    ...sharedImages,
  },
  {
    slug: 'mobile-apps',
    path: '/service/mobile-apps',
    subtitle: 'Product Experiences',
    title: 'Mobile Apps',
    introPrimary:
      'Mobile Apps at Reddystack focus on clear user flows, strong interface decisions, and launch-ready execution for founders who need a real product experience on mobile. The goal is to make the app feel intentional before development scope starts expanding.',
    introSecondary:
      'This service is ideal for startups, internal products, and growing businesses planning a new app or refining an existing mobile experience.',
    overviewPrimary:
      'The work covers App Design, UI/UX Design, screen planning, and feature prioritization so the product is easier to build, easier to explain, and easier for users to adopt. Core journeys are shaped first, then the visual and interaction system is tightened around them.',
    overviewSecondary:
      'It can also support onboarding flow design, launch assets, and MVP alignment when the mobile app is part of a broader product rollout.',
    features: [
      'App flow mapping and screen-by-screen planning',
      'UI/UX systems for mobile-first product experiences',
      'Feature prioritization for startup and MVP releases',
      'Launch-ready direction for Android and iOS-facing products',
    ],
    closingSummary:
      'Best for founders who need mobile product work that feels usable, sharp, and realistic to ship without bloated scope.',
    sideTitle: 'Included Capabilities',
    categories: [
      'App Design',
      'UI/UX Design',
      'Onboarding Flows',
      'Feature Planning',
      'Launch Assets',
    ],
    highlightTitle: ['Mobile-first', 'product design'],
    highlightText:
      'Designed for products that need strong usability, better structure, and a more confident first release.',
    metaTitle: 'Mobile Apps | Reddystack',
    metaDescription:
      'Design and build mobile app experiences with Reddystack. Founder-led product thinking, app design, UI/UX structure, and launch-ready mobile execution.',
    ...sharedImages,
  },
  {
    slug: 'mvp-building',
    path: '/service/mvp-building',
    subtitle: 'Startup Launches',
    title: 'MVP Building',
    introPrimary:
      'MVP Building at Reddystack is for founders who need to validate an idea quickly without shipping a messy product. The emphasis is on scope control, fast execution, and building only what helps the product reach proof, feedback, or traction.',
    introSecondary:
      'This service fits startup launches, founder ideas, internal tools, and experiments that need a usable version in market instead of endless planning cycles.',
    overviewPrimary:
      'The workflow covers lean feature scoping, Vibe Coding-assisted execution, core user journey planning, and the UI needed to make the product understandable to early users. The build is kept focused so launch happens faster and iteration stays practical after release.',
    overviewSecondary:
      'Brand Identity and launch-facing polish can be included when the MVP also needs to look more investor-ready, founder-ready, or client-ready from the first version.',
    features: [
      'Lean feature scoping for first-release products',
      'Rapid execution with Vibe Coding and AI-assisted workflows',
      'Core onboarding, user journeys, and launch-ready flows',
      'Iteration-friendly structure for post-launch learning',
    ],
    closingSummary:
      'Best for founders who want to launch fast, validate clearly, and avoid overbuilding before the product has earned it.',
    sideTitle: 'Included Capabilities',
    categories: [
      'Vibe Coding',
      'UI/UX Design',
      'Launch Planning',
      'Brand Identity',
      'MVP Scope',
    ],
    highlightTitle: ['Fast-moving', 'MVP builds'],
    highlightText:
      'Built for validation, early traction, and sharper founder execution without unnecessary complexity.',
    metaTitle: 'MVP Building | Reddystack',
    metaDescription:
      'Build MVPs with Reddystack through lean scoping, Vibe Coding, founder-led delivery, and product flows designed for faster validation.',
    ...sharedImages,
  },
  {
    slug: 'ai-automations',
    path: '/service/ai-automations',
    subtitle: 'Workflow Systems',
    title: 'AI Automations',
    introPrimary:
      'AI Automations at Reddystack help businesses reduce repetitive work, improve execution speed, and turn manual processes into repeatable systems. The focus is not novelty for its own sake, but practical automation that removes friction from real operations.',
    introSecondary:
      'This service is ideal for founders, lean teams, and operators who want faster turnaround without hiring for every repetitive task or relying on scattered tools.',
    overviewPrimary:
      'The work covers workflow mapping, automation planning, Prompt Engineering, and implementation across customer handling, content operations, and internal processes. The goal is to make repetitive business actions more consistent, trackable, and easier to scale.',
    overviewSecondary:
      'Automations can also be paired with lightweight interfaces, forms, landing pages, or custom logic when the workflow needs a clearer front end for users or team members.',
    features: [
      'Workflow mapping for repetitive business operations',
      'Prompt Engineering and AI-assisted process design',
      'Automation setup for lead handling, ops, and content workflows',
      'Practical systems that reduce follow-up and manual friction',
    ],
    closingSummary:
      'Best for businesses that want to save time, improve consistency, and scale execution with more practical systems.',
    sideTitle: 'Included Capabilities',
    categories: [
      'Prompt Engineering',
      'Workflow Design',
      'Internal Ops',
      'Lead Handling',
      'AI Automation',
    ],
    highlightTitle: ['Practical', 'automation systems'],
    highlightText:
      'Built to reduce manual work and help lean teams move faster with better operational flow.',
    metaTitle: 'AI Automations | Reddystack',
    metaDescription:
      'Set up AI Automations with Reddystack. Workflow design, prompt engineering, founder-led implementation, and practical systems for lean business operations.',
    ...sharedImages,
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetailData.find((service) => service.slug === slug);
}

export function getAdjacentServices(slug: string) {
  const currentIndex = serviceDetailData.findIndex((service) => service.slug === slug);

  if (currentIndex === -1) {
    return {
      previousService: null,
      nextService: null,
    };
  }

  const previousService =
    serviceDetailData[(currentIndex - 1 + serviceDetailData.length) % serviceDetailData.length];
  const nextService = serviceDetailData[(currentIndex + 1) % serviceDetailData.length];

  return {
    previousService,
    nextService,
  };
}
