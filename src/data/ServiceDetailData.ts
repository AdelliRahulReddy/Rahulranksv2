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
      'The process usually starts with site architecture, keyword-aware page planning, and content structure that works for both search engines and real users. From there, the build is shaped around performance, clarity, and conversion so the final site feels commercially useful instead of decorative.',
    overviewSecondary:
      'Landing page builds, service page systems, and launch support can sit inside this service when the website also needs stronger positioning, better lead flow, or cleaner rollout execution.',
    features: [
      'Keyword-aware site structure and service page planning',
      'Responsive website builds and landing page implementation',
      'On-page SEO setup, performance tuning, and crawl-friendly markup',
      'Conversion-focused sections, CTAs, forms, and launch support',
    ],
    closingSummary:
      'Best for businesses that want a website that looks premium, supports organic growth, and helps turn visits into real project conversations.',
    sideTitle: 'Included Capabilities',
    categories: [
      'Landing Pages',
      'Content Structure',
      'SEO Setup',
      'Performance Setup',
      'Launch Support',
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
    slug: 'applications',
    path: '/service/applications',
    subtitle: 'Product Builds',
    title: 'Applications',
    introPrimary:
      'Applications at Reddystack are built for founders and businesses that need functional digital products, not just polished mockups. The focus is on planning what matters, building the right flows, and shipping something people can actually use.',
    introSecondary:
      'This service is ideal for internal tools, customer-facing apps, and product ideas that need a practical build path with founder-led execution.',
    overviewPrimary:
      'The work covers product architecture, screen planning, feature prioritization, and implementation support so the application is easier to build, easier to explain, and easier to operate after launch. Core journeys are shaped first, then the rest of the build follows real use cases instead of speculation.',
    overviewSecondary:
      'This can support web applications, mobile-first application flows, founder dashboards, internal tools, and product systems that need clean execution without bloated scope.',
    features: [
      'Application architecture and screen-by-screen flow planning',
      'Feature prioritization for real product releases',
      'Founder-led build direction for web and mobile-facing applications',
      'Launch-ready implementation support and iteration planning',
    ],
    closingSummary:
      'Best for teams that need usable applications shipped with clarity, not endless planning or design-heavy detours.',
    sideTitle: 'Included Capabilities',
    categories: [
      'Feature Planning',
      'Application Logic',
      'Mobile-first Flows',
      'Launch Support',
      'Founder-led Delivery',
    ],
    highlightTitle: ['Launch-ready', 'applications'],
    highlightText:
      'Built for products that need a working application, a cleaner build path, and faster execution.',
    metaTitle: 'Applications | Reddystack',
    metaDescription:
      'Build applications with Reddystack through founder-led execution, feature planning, implementation support, and launch-ready product delivery.',
    ...sharedImages,
  },
  {
    slug: 'mvp-builds',
    path: '/service/mvp-builds',
    subtitle: 'Startup Launches',
    title: 'MVP Builds',
    introPrimary:
      'MVP Builds at Reddystack are for founders who need to validate an idea quickly without shipping a messy product. The emphasis is on scope control, fast execution, and building only what helps the product reach proof, feedback, or traction.',
    introSecondary:
      'This service fits startup launches, founder ideas, internal tools, and experiments that need a usable version in market instead of endless planning cycles.',
    overviewPrimary:
      'The workflow covers lean feature scoping, Vibe Coding-assisted execution, core user journey planning, and release structure that keeps the product understandable to early users. The build stays focused so launch happens faster and iteration stays practical after release.',
    overviewSecondary:
      'This is built for early traction, real user feedback, founder demos, and first-version launches where speed matters but the product still needs to feel coherent.',
    features: [
      'Lean feature scoping for first-release products',
      'Rapid execution with Vibe Coding and AI-assisted workflows',
      'Core onboarding, user journeys, and launch-ready release planning',
      'Iteration-friendly structure for post-launch learning',
    ],
    closingSummary:
      'Best for founders who want to launch fast, validate clearly, and avoid overbuilding before the product has earned it.',
    sideTitle: 'Included Capabilities',
    categories: [
      'Vibe Coding',
      'Rapid Validation',
      'Launch Planning',
      'MVP Scope',
      'Founder-led Delivery',
    ],
    highlightTitle: ['Fast-moving', 'MVP builds'],
    highlightText:
      'Built for validation, early traction, and sharper founder execution without unnecessary complexity.',
    metaTitle: 'MVP Builds | Reddystack',
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
      'Automations can also be paired with lightweight interfaces, forms, landing pages, or custom logic when the workflow needs a clearer front end for users, clients, or internal team members.',
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
