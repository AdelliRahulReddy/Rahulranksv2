# Project Context Lite

## Snapshot
- project: `Reddystack`
- type: marketing/portfolio site
- stack: Next.js App Router, React 19, TypeScript, Sass, Bootstrap 5, GSAP
- backend: only `/api/contact`
- no DB, auth, CMS, server actions

## Core Rules
- frontend must follow `AGENT_SOURCE_RULES.md`
- source template: `C:\Users\adell\Documents\diego-next-js`
- no custom redesign unless user approves
- prefer source structure, classes, spacing, and SCSS

## Source Of Truth
- site config / schema / metadata: `src/data/siteConfig.ts`
- homepage FAQ: `src/data/HomeFaqData.ts`
- service details + service FAQ: `src/data/ServiceDetailData.ts`
- blog content: `src/data/BlogPostsData.ts`
- portfolio content: `src/data/PortfolioProjectsData.ts`

## Active Routes
- `/`
- `/about`
- `/service`
- `/service/[slug]`
- `/portfolio`
- `/portfolio/[slug]`
- `/blog`
- `/blog/[slug]`
- `/contact`

## Extra SEO Routes
- `/affordable-website-development-for-startups`
- `/seo-website-development-for-small-businesses`
- `/mvp-development-for-startup-founders`
- `/ai-automation-services-for-small-teams`

## Homepage
- entry: `src/app/page.tsx`
- shell: `src/components/homes/home/index.tsx`
- featured projects: `src/components/homes/home-2/TestimonialAreaHomeTwo.tsx`
- project data: `src/data/PortfolioProjectsData.ts`

## Service Detail
- entry: `src/app/service/[slug]/page.tsx`
- shell: `src/components/service-details/index.tsx`
- sections: `ServiceDetailsArea`, `ServiceFaqArea`, `NavigationArea`

## Blog
- archive uses sidebar flow, not alternate tabbed archive
- real detail route is `/blog/[slug]`

## Portfolio
- real detail route is `/portfolio/[slug]`
- preserve Diego middle image pattern on detail pages unless user asks otherwise

## Animation Note
- local text animation helpers use plain GSAP reveals
- avoid reintroducing SplitText unless fully validated

## User Sensitivity
- user dislikes blind design changes
- user expects PM-style judgment, not just implementation
- verify alignment before changing UI
