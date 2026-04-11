# CODEBASE

Last updated: 2026-04-11

## Purpose

This file is the fast handoff for future agents working in this repo.

It should answer:

- what the app is now
- which routes are actually live
- which files are the source of truth
- which areas are customized vs still template-heavy
- where to start when editing homepage, blog, SEO, or shared shell code

Before frontend/UI edits, also read `AGENT_SOURCE_RULES.md`.
That file records the current rule to use `C:\Users\adell\Documents\diego-next-js` as the source template and avoid unnecessary custom redesign unless the user asks for it.

This document is intentionally pragmatic.

- It is not a generated file inventory.
- It should favor runtime truth over template leftovers.
- Generated output and binary asset dumps are not the point.
- If something here conflicts with current route code, trust the route code and update this file.

## Current Snapshot

- Project type: Next.js App Router marketing/portfolio site for `Reddystack`
- User-facing brand: `Reddystack`
- Owner/founder: `Rahul Reddy Adelli`
- Template origin: `Diego`
- Package name is still `diego-nextjs`
- Main runtime is still mostly static marketing pages with heavy client-side animation
- No database, auth, CMS, or server actions
- One backend-style route exists for contact email sending
- Shared branding now consistently uses `BrandLockup` in inner-page header, footer, and offcanvas
- Homepage is the primary customized marketing surface
- Blog is now a real slug-based article system backed by a local TypeScript data file
- `/home-3` and its old header/footer/component set have been removed from the active app
- Legacy blog and service URLs are handled through redirects instead of duplicate pages

## Verified Status On 2026-04-11

- `npm run build` passes on the current checkout
- Current build output includes:
  - static routes for `/`, `/about`, `/blog`, `/blog-details`, `/blog-sidebar`, `/contact`, `/portfolio`, `/portfolio-details`, `/service`, `/service-details`, `robots.txt`, and `sitemap.xml`
  - SSG routes for `/blog/[slug]` and `/service/[slug]`
  - dynamic route handlers for `/api/contact` and the branded catch-all not-found route
- Active route folders currently under `src/app/`:
  - `about`
  - `api`
  - `blog`
  - `blog-details`
  - `blog-sidebar`
  - `contact`
  - `portfolio`
  - `portfolio-details`
  - `service`
  - `service-details`
  - `[...not-found]`
- `/home-3` no longer exists in `src/app`
- `next.config.js` currently defines permanent redirects for:
  - `/service/mobile-apps` -> `/service/applications`
  - `/service/mvp-building` -> `/service/mvp-builds`
  - `/blog-details-2` -> `/blog`
- `gh` is not installed in this environment, so GitHub CLI-based PR helpers are unavailable here
- `test-results/` exists but is generated output, not runtime source
- `npm run lint` was not rerun in this pass

## Top-Level Repo Map

Runtime code and assets:

- `src/`
  - app routes, components, layouts, data, hooks, providers, utils
- `public/`
  - images, fonts, CSS, SCSS source, plugins, Lottie JSON

Important non-runtime folders/files:

- `documentation/`
  - bundled template docs, not used at runtime
- `backup/`
  - parked old files
- `.next/`
  - generated build output
- `test-results/`
  - generated test/smoke output
- `seo.md`
  - SEO planning/reference notes
- `README.md`
  - still largely template-oriented

## Stack

- Framework: Next.js App Router
- React: `19.x`
- Language: TypeScript with `allowJs: true`
- Styling: Sass + theme CSS from `public/assets`
- UI base: Bootstrap 5
- Animation: GSAP, ScrollTrigger, ScrollSmoother, WOW.js, template DOM utilities
- Sliders: `swiper`, `react-slick`
- Forms: `react-hook-form` + `yup`
- Email: `resend`

## Config Files That Matter

- `package.json`
  - main scripts are `dev`, `build`, `start`, `lint`
- `next.config.js`
  - `reactStrictMode: false`
  - handles legacy route redirects
- `tsconfig.json`
  - strict TypeScript, `allowJs`, alias-based imports
- `eslint.config.mjs`
  - does not ignore all template/vendor noise, so lint output can still be noisy

## Things The Repo Does Not Have

- no database client, ORM, migrations, or schema files
- no auth system
- no CMS
- no server actions
- no durable lead storage
- no checked-in CI workflow directory
- no tracked `.env` file

Implication:

- contact submissions send email only
- any CRM sync, persistence, analytics events, or backend workflows would be new architecture

## Runtime Architecture

### Global app flow

1. `src/app/layout.tsx`
   - loads global styles
   - injects sitewide metadata and JSON-LD
   - wraps the app with `ThemeProvider` and `VideoProvider`
2. `src/layouts/Wrapper.tsx`
   - is the main client shell used by most route pages
   - loads Bootstrap JS
   - registers GSAP plugins
   - creates scroll/animation behavior
3. Route pages under `src/app/**/page.tsx`
   - define metadata
   - usually render one feature entry inside `Wrapper`
4. Shared brand/contact surfaces pull from `src/data/siteConfig.ts`

### Contact flow

1. `src/components/contact/ContactArea.tsx`
   - owns selected service chips
2. `src/components/forms/ContactForm.tsx`
   - validates user input
   - sends payload to `/api/contact`
3. `src/app/api/contact/route.ts`
   - validates payload again
   - sends email with Resend
4. `.env.local`
   - expected locally for Resend credentials and destination email

### Styling flow

- `src/styles/index.scss`
  - forwards theme/vendor CSS plus `public/assets/scss/main.scss`
- runtime look still depends heavily on selectors expected by legacy theme JS

## SEO System

Primary source of truth:

- `src/data/siteConfig.ts`
  - brand/contact data
  - page metadata config
  - Open Graph / Twitter builders
  - organization and website schema

Key runtime SEO files:

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

Current sitemap behavior:

- static entries for main marketing routes
- dynamic article entries generated from `blogPosts` in `src/data/BlogPostsData.ts`

Important note:

- `pageSeo` still contains some legacy compatibility entries like `blogDetail`, `blogSidebar`, and `homeThree`
- not every entry there maps to a standalone live page anymore

## Route Map

### `/`

- Entry: `src/app/page.tsx`
- Feature shell: `src/components/homes/home/index.tsx`
- Header/footer: `HeaderOne`, `FooterOne`
- Current section order:
  - `HeroAreaHome`
  - `BrandAreaHomeOne`
  - `ServiceAreaHomeOne`
  - `MarqueeAreaHomeOne`
  - `AboutAreaHomeOne`
  - `home-2/TestimonialAreaHomeTwo`
  - `SkillAreaHomeOne`
  - `TestimonialAreaHomeOne`
  - `PriceAreaHomeOne`
- Status: primary homepage, mostly customized

Important homepage notes:

- hero copy is now `We deliver` plus rotating service words
- rotating words are currently:
  - `SEO Websites`
  - `Applications`
  - `MVP Builds`
  - `AI Automations`
- hero uses Lottie from `public/assets/lottie/hero-animation.json`
- `BrandAreaHomeOne` is now a delivery-label strip, not a client-logo strip
- homepage projects still come from `home-2/TestimonialAreaHomeTwo.tsx`
- `PriceAreaHomeOne` now has two tabs:
  - `Pricing`
  - `Blog`

### `/about`

- Entry: `src/app/about/page.tsx`
- Feature shell: `src/components/about/index.tsx`
- Sections:
  - `HeroAreaAbout`
  - `AboutInfo`
  - `PersonalInfo`
  - `FunfactArea`
- Header/footer: `HeaderFour`, `FooterFour`
- Status: customized inner page

### `/service`

- Entry: `src/app/service/page.tsx`
- Feature shell: `src/components/service/index.tsx`
- Sections:
  - `SeviceHeroArea`
  - `ServiceAreaHomeThree`
  - `ServiceInfoArea`
  - `TestimonialAreaHomeOne` with `style`
  - `PriceAreaHomeOne` with `style`
- Header/footer: `HeaderFour`, `FooterOne`
- Status: customized service overview

### `/service/[slug]`

- Entry: `src/app/service/[slug]/page.tsx`
- Feature shell: `src/components/service-details/index.tsx`
- Sections:
  - `ServiceDetailsArea`
  - `NavigationArea`
- Header/footer: `HeaderFour`, `FooterOne`
- Source of truth: `src/data/ServiceDetailData.ts`
- Status: dynamic service detail route with customized content on top of template layout

### `/service-details`

- Entry: `src/app/service-details/page.tsx`
- Behavior: redirect to `/service`
- Purpose: catches legacy links/bookmarks

### `/portfolio`

- Entry: `src/app/portfolio/page.tsx`
- Feature shell: `src/components/portfolio/index.tsx`
- Sections:
  - `PortfolioSlider`
  - `PortfolioArea`
- Header/footer: `HeaderFour`, `FooterOne`
- Status: mixed

### `/portfolio-details`

- Entry: `src/app/portfolio-details/page.tsx`
- Feature shell: `src/components/portfolio-details/index.tsx`
- Status: still largely template-based shared detail page

### `/blog`

- Entry: `src/app/blog/page.tsx`
- Runtime feature shell: `src/components/blog-sidebar/index.tsx`
- Sections:
  - `Breadcrumb`
  - `SideBlogPostBoxArea`
- Header/footer: `HeaderFour`, `FooterFour`
- Status: active blog archive

Important blog notes:

- `/blog` is currently driven by the sidebar-style archive, not by `src/components/blog/index.tsx`
- `src/components/blog/index.tsx` and `src/components/blog/BlogArea.tsx` still exist as an alternate tabbed archive UI, but they are not the current route entry
- sidebar category counts, recent posts, tags, and archive cards all come from `src/data/BlogPostsData.ts`

### `/blog/[slug]`

- Entry: `src/app/blog/[slug]/page.tsx`
- Feature shell: `src/components/blog-details/index.tsx`
- Sections:
  - `BreadcrumbBlogDetails`
  - `PostboxBlogDetailsArea`
- Header/footer: `HeaderFour`, `FooterFour`
- Status: real dynamic article route

Important behavior:

- `generateStaticParams()` builds pages from `blogPosts`
- metadata is generated per post from `BlogPostsData.ts`
- adjacent and related post navigation also comes from `BlogPostsData.ts`

### `/blog-details`

- Entry: `src/app/blog-details/page.tsx`
- Behavior: redirect to `/blog`
- Purpose: legacy compatibility route

### `/blog-sidebar`

- Entry: `src/app/blog-sidebar/page.tsx`
- Behavior: redirect to `/blog`
- Purpose: legacy compatibility route

### `/contact`

- Entry: `src/app/contact/page.tsx`
- Feature shell: `src/components/contact/index.tsx`
- Main body: `ContactArea`
- Header/footer: `HeaderFour`, `FooterOne`
- Status: customized

### catch-all not-found

- Entry: `src/app/[...not-found]/page.tsx`
- Feature shell: `src/components/error/index.tsx`
- Status: branded 404-style wrapper

## Current Content Ownership

### Global source of truth

- `src/data/siteConfig.ts`
  - brand name
  - owner name
  - contact email and phone
  - social links
  - site URL
  - global metadata and schema

### Shared shell

- `src/components/common/BrandLockup.tsx`
  - live brand lockup used across active shell components
- `src/layouts/headers/HeaderOne.tsx`
  - homepage header
- `src/layouts/headers/HeaderFour.tsx`
  - main inner-page header
- `src/components/common/Offcanvas.tsx`
  - inner-page offcanvas using `BrandLockup` and `siteConfig`
- `src/layouts/footers/FooterOne.tsx`
  - homepage/service/contact/portfolio footer
- `src/layouts/footers/FooterFour.tsx`
  - about/blog footer using `BrandLockup` and `siteConfig`

Removed legacy shell pieces:

- `src/layouts/headers/HeaderThree.tsx`
- `src/layouts/footers/FooterThree.tsx`
- `src/components/homes/home-3/**`
- `src/app/home-3/page.tsx`

### Homepage edit points

- `src/components/homes/home/HeroAreaHome.tsx`
  - main homepage messaging and CTA
- `public/assets/scss/layout/pages/_hero.scss`
  - hero layout/spacing tuning
- `src/components/homes/home/BrandAreaHomeOne.tsx`
  - delivery-label strip
- `src/components/homes/home/ServiceAreaHomeOne.tsx`
  - homepage services/process section
- `src/components/homes/home/AboutAreaHomeOne.tsx`
  - homepage about section
- `src/components/homes/home-2/TestimonialAreaHomeTwo.tsx`
  - homepage project slider currently used in place of the old portfolio section
- `src/data/TestimonialData.ts`
  - project slider data
- `src/components/homes/home/PriceAreaHomeOne.tsx`
  - homepage pricing cards plus recent blog tab

### Blog edit points

- `src/data/BlogPostsData.ts`
  - primary source of truth for all current blog content
  - slugs, metadata, article copy, images, tags, recent posts, category counts
- `src/components/blog-sidebar/SideBlogPostBoxArea.tsx`
  - active `/blog` archive body
- `src/components/blog-sidebar/BlogSidebar.tsx`
  - categories, recent posts, tags, and archive-side widgets
- `src/components/blog-details/PostboxBlogDetailsArea.tsx`
  - article body, author box, related post, previous/next navigation
- `src/components/blog/BlogArea.tsx`
  - alternate tabbed archive UI, currently not the route source of truth

## Customized Vs Template-Heavy Areas

### Mostly customized

- homepage hero/service/about/pricing direction
- shared Reddystack branding in headers, offcanvas, and footer
- contact metadata and contact flow
- blog article data model and slug-based routing
- service detail routing and service taxonomy

### Mixed

- `/service/[slug]`
  - content/SEO are customized
  - layout still comes from source template
- `/portfolio`
  - some project naming is customized
  - overall presentation still feels template-derived
- `/about`
  - content is customized
  - styling structure is still template-shaped

### Still template-heavy

- `/portfolio-details`
- some portfolio copy/media
- comment form behavior on article pages
- legacy alternate blog archive UI in `src/components/blog/**`

## Important Behavioral Notes

### Blog architecture

- do not treat `/blog-details` as the real detail page anymore
- the real article route is `/blog/[slug]`
- if adding/editing blog content, start in `src/data/BlogPostsData.ts`
- `src/app/sitemap.ts` depends on `blogPosts`, so new articles automatically affect sitemap output

### Redirects and compatibility

- old service slugs are preserved via `next.config.js`
- `/blog-details` and `/blog-sidebar` are compatibility redirects only
- `/blog-details-2` is permanently redirected to `/blog`

### Search widget caveat

- `src/components/blog-sidebar/BlogSidebar.tsx` still renders a search input
- it currently prevents submit and does not perform a real search
- do not mistake it for implemented search behavior

### Comment form caveat

- `src/components/forms/CommentForm.tsx` is still template behavior
- article comments are not persisted anywhere

### Animation system is selector-sensitive

- `Wrapper.tsx` and several `src/utils/**` files depend on existing class names
- do not rename theme section classes casually without checking related JS utilities

## Known Current Debt

- package name still says `diego-nextjs`
- `README.md` is still template-oriented
- `pageSeo` still contains some legacy page entries that no longer map cleanly to active standalone routes
- alternate blog archive components still exist even though `/blog` now uses the sidebar archive path
- portfolio detail flow is still a shared template page
- comment form is still fake/template behavior
- lint output is still likely noisy because template/vendor folders are not fully ignored

## Folders Future Agents Can Ignore First

Unless the task explicitly targets them, ignore:

- `.next/`
- `node_modules/`
- `documentation/`
- `backup/`
- `public/assets/fonts/`
- `public/assets/plugins/`
- `test-results/`

## Fast Start Checklist For The Next Agent

1. Read `src/data/siteConfig.ts`.
2. Read the target route file under `src/app/**/page.tsx`.
3. Read the feature entry component for that route.
4. If the task is homepage-related, inspect `HeroAreaHome.tsx`, `BrandAreaHomeOne.tsx`, `PriceAreaHomeOne.tsx`, and `_hero.scss`.
5. If the task is blog-related, start in `src/data/BlogPostsData.ts` before touching components.
6. If the task is shared branding, inspect `BrandLockup.tsx`, `HeaderOne.tsx`, `HeaderFour.tsx`, `Offcanvas.tsx`, and `FooterFour.tsx`.
7. If the task is SEO, inspect `siteConfig.ts`, `layout.tsx`, `robots.ts`, `sitemap.ts`, and `next.config.js`.
8. If the issue looks like a broken route, check whether it is now a redirect before editing old feature code.
