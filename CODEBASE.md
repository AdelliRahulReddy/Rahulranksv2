# CODEBASE

Last updated: 2026-04-10

## Purpose

This file is the working handoff for future agents in this repo.

It is intentionally based on the current live code, not on older template assumptions.

Use it to answer:

- what the app is now
- which routes matter
- which files are the real source of truth
- which pages are customized vs still template-heavy
- where future fixes should land first

Before frontend/UI edits, also read `AGENT_SOURCE_RULES.md`.
That file records the current hard rule to use `C:\Users\adell\Documents\diego-next-js` as the source template and avoid custom code unless the user explicitly wants a new design or approves a custom implementation.

This document is intentionally pragmatic.

- It is not meant to be a generated every-file inventory.
- It should favor runtime source-of-truth files over binary assets and template leftovers.
- If a future agent tries to expand this into a 1500-line asset dump, that is probably the wrong tradeoff.
- The goal is fast orientation for the next useful edit, not archival completeness.

## Current Snapshot

- Project type: Next.js App Router marketing/portfolio site for `Reddystack`
- User-facing brand: `Reddystack` / `Rahul Reddy Adelli`
- Original base: `Diego` portfolio template
- Package name is still `diego-nextjs`
- Main runtime is mostly static pages plus heavy client-side animation
- There is still no CMS, database, or server action layer
- There is now one backend-style route handler for contact email sending
- Contact form submissions now post to a real API route and send mail through Resend
- Primary marketing routes are partially/mostly customized
- Several detail routes and the alternate `home-3` route are still template-heavy
- Homepage hero copy is currently `launch-ready` plus rotating service words
- Homepage header/offcanvas branding currently uses a temporary live `BrandLockup` instead of a final exported logo asset
- Business contact email is currently `hello@reddystack.com`
- Homepage pricing is now INR-first and package-based
- Contact page budget selector is now INR-based

## Verified Status On 2026-04-10

- `npm run build` passes on Next.js `16.1.6`
- Current build output includes static routes for `/`, `/about`, `/blog`, `/blog-details`, `/blog-sidebar`, `/contact`, `/home-3`, `/portfolio`, `/portfolio-details`, `/service`, `/service-details`, `/service/[slug]`, plus `robots.txt` and `sitemap.xml`
- Current service SSG pages are:
  - `/service/seo-websites`
  - `/service/applications`
  - `/service/mvp-builds`
  - `/service/ai-automations`
- `npm run lint` was not rerun in this pass
- Last known lint snapshot from `2026-04-09`:
  - `1373` problems total
  - `126` errors
  - `1247` warnings
- Most lint noise still comes from:
  - `documentation/**`
  - `public/assets/plugins/**`
  - legacy JS utilities under `src/utils/**`
  - `any` usage and template-era TSX issues inside `src/**`

## Top-Level Repo Map

Runtime code and assets:

- `src/`
  - app router pages, React components, shared layouts, hooks, providers, data, utils
- `public/`
  - static images, fonts, CSS, plugins, SCSS source, Lottie JSON, CV doc

Important non-runtime folders/files:

- `documentation/`
  - bundled template docs, not used by the app runtime
- `backup/`
  - quarantined old files moved out of active source
- `.next/`
  - generated build output
- `test-results/`
  - generated test/smoke output, not app runtime
- `repomix-output.xml`
  - generated repo snapshot, not app runtime
- `seo.md`
  - SEO planning/reference notes
- `PROJECTS_SECTION_SWAP_PLAN.md`
  - notes for the completed homepage project-section swap
- `README.md`
  - still mostly template marketing copy

## Stack

- Framework: Next.js `16.1.6`
- React: `19.2.1`
- Language: TypeScript with `allowJs: true`
- Styling: Sass + compiled theme CSS from `public/assets`
- UI framework: Bootstrap 5
- Animation: GSAP, ScrollTrigger, ScrollSmoother, WOW.js, custom DOM scripts
- Sliders: `react-slick`, `swiper`
- Forms: `react-hook-form` + `yup`
- Other libraries: `react-toastify`, `react-scroll`, `lottie-react`, `react-countup`
- Email: `resend`

## Config Files That Matter

- `package.json`
  - scripts: `dev`, `build`, `start`, `lint`
  - note: `clean` uses `rm -rf`, which is not Windows-friendly
- `next.config.js`
  - only sets `reactStrictMode: false`
- `tsconfig.json`
  - `strict: true`, `allowJs: true`, Next bundler resolution
  - aliases:
    - `@/*` -> `src/*`
    - `@/assets/*` -> `public/assets/*`
    - `@/components/*`, `@/layouts/*`, `@/data/*`, `@/hooks/*`, `@/utils/*`, `@/plugins/*`
- `eslint.config.mjs`
  - ignores `node_modules`, `.next`, `out`, `build`, `next-env.d.ts`
  - does not ignore `documentation/**` or `public/assets/plugins/**`, which is a major reason lint is noisy

## Things The Repo Does Not Have

These absences matter because future agents should not waste time looking for them.

- one route handler exists at `src/app/api/contact/route.ts`
- no broader backend service layer
- no database client, ORM, migrations, or schema files
- no tracked `.env` file in the repo root
- local runtime email config now expects a gitignored `.env.local`
- no authentication system
- no server actions
- no formal test framework wired in `package.json`
- no GitHub Actions or checked-in CI workflow directory

Implication:

- contact flow now sends notification emails via Resend
- there is still no persistent lead storage, CRM sync, queue, or database fallback
- deployment is a standard static-ish Next.js marketing site deployment, not a full-stack app release
- any future real form handling, CRM sync, auth, or data storage would be new architecture, not an extension of an existing layer

## Runtime Architecture

### Global app flow

1. `src/app/layout.tsx`
   - imports global styles from `src/styles/index.scss`
   - loads Google fonts
   - defines global metadata
   - injects `Organization` and `WebSite` JSON-LD
   - wraps the app with `ThemeProvider` and `VideoProvider`

2. `src/components/provider/ThemeProvider.tsx`
   - blocks initial render until theme initialization completes
   - shows `Preloader` while theme check is pending

3. `src/provider/VideoProvider.tsx`
   - provides global video modal state
   - currently used by the blog sidebar route for popup video playback

4. Each route page in `src/app/**/page.tsx`
   - calls `buildPageMetadata(...)`
   - usually renders one feature entry inside `src/layouts/Wrapper.tsx`

5. `src/layouts/Wrapper.tsx`
   - is the main client shell for almost every route
   - loads Bootstrap JS on the client
   - registers GSAP plugins from `src/plugins/index.js`
   - creates `ScrollSmoother`
   - pins `.tp-port-3-content-left` while `.tp-port-3-area` scrolls
   - reruns many DOM animation helpers on pathname change
   - mounts `ToastContainer` and `ScrollToTop`
   - wraps children in `ContextProvider`

### Contact submission flow

1. `src/components/contact/ContactArea.tsx`
   - owns the selected service chips on `/contact`
   - passes selected service titles into `ContactForm`

2. `src/components/forms/ContactForm.tsx`
   - validates visible form fields with `react-hook-form` + `yup`
   - tracks selected INR budget locally
   - sends `name`, `email`, `company`, `message`, `budget`, and selected `services` to `/api/contact`
   - shows success/error toast based on API response

3. `src/app/api/contact/route.ts`
   - Node.js route handler
   - validates payload again with `yup`
   - sends email using Resend
   - uses:
     - `RESEND_API_KEY`
     - `RESEND_FROM_EMAIL`
     - `CONTACT_TO_EMAIL`

4. Local env
   - `.env.local` is now expected in development but remains gitignored
   - current intended sender is `Reddystack <hello@reddystack.com>`
   - current intended recipient is `hello@reddystack.com`
   - if contact mail fails in production, check Resend domain verification and these env values first

### Styling flow

- `src/styles/index.scss` forwards:
  - theme/vendor CSS from `public/assets/css/*`
  - `react-toastify` CSS
  - `slick-carousel` CSS
  - Swiper CSS bundle
  - Bootstrap CSS
  - spacing CSS
  - `public/assets/scss/main.scss`

### Plugin flow

- `src/plugins/index.js` re-exports vendored plugin files from `public/assets/plugins`
- active GSAP-related exports:
  - `SplitText`
  - `ScrollTrigger`
  - `ScrollSmoother`

## SEO System

SEO now has a real source of truth.

- `src/data/siteConfig.ts`
  - central brand, contact, social, keyword, and SEO config
  - defines `siteSeo`, `siteConfig`, `pageSeo`
  - current primary email source of truth is `hello@reddystack.com`
  - exposes `buildPageMetadata`
  - exposes `organizationSchema`, `websiteSchema`, `homePageSchema`

- `src/app/layout.tsx`
  - sets global metadata base, robots, Open Graph, Twitter card, authors, publisher, keywords

- `src/app/page.tsx`
  - adds homepage `WebPage` schema

- `src/app/robots.ts`
  - allows all crawling
  - points to `/sitemap.xml`

- `src/app/sitemap.ts`
  - emits sitemap entries for main routes

Current SEO special cases:

- `/blog-sidebar`
  - `noindex, nofollow`
  - canonical points to `/blog`
- `/home-3`
  - `noindex, nofollow`
  - canonical points to `/`
- catch-all not-found route
  - `noindex, nofollow`

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
  - `AwardAreaHomeOne`
  - `TestimonialAreaHomeOne`
  - `PriceAreaHomeOne`
- Status: primary homepage, mostly customized

Important note:

- the homepage project slider now comes from `src/components/homes/home-2/TestimonialAreaHomeTwo.tsx`
- `src/components/homes/home/PortfolioAreaHomeOne.tsx` still exists but is not currently used anywhere
- current hero proposition is:
  - eyebrow: `Rahul Reddy / Founder, Reddystack`
  - headline lead: `launch-ready`
  - rotating words: `Websites`, `Mobile Apps`, `Landing Pages`, `MVPs`, `SEO Systems`, `Automations`
  - support copy: founder-led digital execution positioning
- current hero visual uses the Lottie animation from `public/assets/lottie/hero-animation.json`
- Lottie wrapper is still in the original right column layout, with a current inline max-width of `610px`

### `/about`

- Entry: `src/app/about/page.tsx`
- Feature shell: `src/components/about/index.tsx`
- Sections:
  - `HeroAreaAbout`
  - `AboutInfo`
  - `PersonalInfo`
  - `FunfactArea`
  - `AwardAreaHomeOne`
  - `BrandAreaAbout`
- Footer/header: `HeaderFour`, `FooterFour`
- Status: mostly customized, but still contains some placeholder/decorative elements

### `/service`

- Entry: `src/app/service/page.tsx`
- Feature shell: `src/components/service/index.tsx`
- Sections:
  - `SeviceHeroArea`
  - `ServiceAreaHomeThree`
  - `ServiceInfoArea`
  - `TestimonialAreaHomeOne` with `style`
  - `PriceAreaHomeOne` with `style`
  - `BrandAreaAbout`
- Footer/header: `HeaderFour`, `FooterOne`
- Status: mostly customized
- Important:
  - the overview now presents four core clickable offers only
  - current public service taxonomy is:
    - `SEO Websites`
    - `Applications`
    - `MVP Builds`
    - `AI Automations`
  - the process block remains source-layout driven, while the service list and hero copy are customized

### `/service/[slug]`

- Entry: `src/app/service/[slug]/page.tsx`
- Feature shell: `src/components/service-details/index.tsx`
- Sections:
  - `ServiceDetailsArea`
  - `BrandAreaAbout`
  - `NavigationArea`
- Footer/header: `HeaderFour`, `FooterOne`
- Status: mixed
- Important:
  - this is now a real dynamic service-detail route using `generateStaticParams`
  - service content source of truth is `src/data/ServiceDetailData.ts`
  - metadata is generated per slug from that data file
  - current slugs are:
    - `/service/seo-websites`
    - `/service/applications`
    - `/service/mvp-builds`
    - `/service/ai-automations`
  - the layout is still based on the Diego source detail template, but content, nav labels, route behavior, and SEO metadata are now Reddystack-specific

### `/service-details`

- Entry: `src/app/service-details/page.tsx`
- Status: compatibility redirect only
- Behavior: immediately redirects to `/service`
- Purpose: catches old links/bookmarks from the earlier single-detail-page implementation

### `/portfolio`

- Entry: `src/app/portfolio/page.tsx`
- Feature shell: `src/components/portfolio/index.tsx`
- Sections:
  - `PortfolioSlider`
  - `PortfolioArea`
  - `BrandAreaAbout`
- Footer/header: `HeaderFour`, `FooterOne`
- Status: mixed
- Listing project names are partially customized, but slider copy is still generic/template

### `/portfolio-details`

- Entry: `src/app/portfolio-details/page.tsx`
- Feature shell: `src/components/portfolio-details/index.tsx`
- Sections:
  - `HeroPortfolioDetailsArea`
  - `PortfolioAboutArea`
  - `PortfolioDetailsArea`
- Footer/header: `HeaderFour`, `FooterOne`
- Status: heavily template-based
- Important: every portfolio card links to this same shared page

### `/blog`

- Entry: `src/app/blog/page.tsx`
- Feature shell: `src/components/blog/index.tsx`
- Main body: `BlogArea`
- Footer/header: `HeaderFour`, `FooterFour`
- Status: template-heavy
- Data source: `src/data/BlogData.ts`

### `/blog-details`

- Entry: `src/app/blog-details/page.tsx`
- Feature shell: `src/components/blog-details/index.tsx`
- Sections:
  - `BreadcrumbBlogDetails`
  - `PostboxBlogDetailsArea`
- Footer/header: `HeaderFour`, `FooterFour`
- Status: template-heavy
- Important: this is a single shared detail page

### `/blog-sidebar`

- Entry: `src/app/blog-sidebar/page.tsx`
- Feature shell: `src/components/blog-sidebar/index.tsx`
- Sections:
  - `Breadcrumb`
  - `SideBlogPostBoxArea`
- Footer/header: `HeaderFour`, `FooterFour`
- Status: template-heavy, intentionally noindexed
- Data source: `src/data/ArticleData.ts`

### `/contact`

- Entry: `src/app/contact/page.tsx`
- Feature shell: `src/components/contact/index.tsx`
- Main body: `ContactArea`
- Footer/header: `HeaderFour`, `FooterOne`
- Status: mostly customized
- Important:
  - service interest chips are customized for Reddystack offers
  - form now posts to `/api/contact`
  - budget selector now uses INR ranges:
    - `Below ₹1k`
    - `₹1k-3k`
    - `₹3k-7k`
    - `₹7k-15k`
    - `₹15k+`

### `/home-3`

- Entry: `src/app/home-3/page.tsx`
- Feature shell: `src/components/homes/home-3/index.tsx`
- Sections:
  - `HeroAreaHomeThree`
  - `ServiceAreaHomeThree`
  - `ProjectAreaHomeThree`
  - `BlogAreaHomeThree`
- Footer/header: `HeaderThree`, `FooterThree`
- Status: alternate preview route, mostly template-heavy
- SEO: intentionally noindexed and canonicalized to `/`

### catch-all not-found

- Entry: `src/app/[...not-found]/page.tsx`
- Feature shell: `src/components/error/index.tsx`
- Status: custom wrapper around a branded 404-style page

## Current Content Ownership

### Global source of truth

- `src/data/siteConfig.ts`
  - brand name
  - owner name
  - contact email: `hello@reddystack.com`
  - phone
  - location
  - social links
  - site URL
  - SEO titles/descriptions/canonicals/noindex rules
  - organization and website schema

### Navigation and shared shell

- `src/layouts/headers/menu/MenuData.ts`
  - top-level nav items
- `src/layouts/headers/menu/NavMenu.tsx`
  - desktop nav rendering
- `src/layouts/headers/menu/mobile-menus.tsx`
  - mobile nav rendering
- `src/components/common/BrandLockup.tsx`
  - temporary live brand lockup for homepage header/offcanvas
  - uses `favicon.png` icon plus live `Reddystack` text
  - exists so the baked `diego` wordmark image is no longer shown in the homepage shell
  - should be replaced later if/when the final exported logo asset is ready
- `src/layouts/headers/HeaderOne.tsx`
  - primary homepage header
  - now renders `BrandLockup` for both light and dark theme states
- `src/layouts/headers/HeaderFour.tsx`
  - inner-page header
- `src/layouts/headers/HeaderThree.tsx`
  - alternate preview header with duplicated theme logic
- `src/components/common/Offcanvas.tsx`
  - inner-page offcanvas contact/social panel
- `src/components/common/Offcanvas2.tsx`
  - homepage offcanvas panel
  - now also renders `BrandLockup`

### Shared social / footer / contact surfaces

- `src/components/common/SocialLinks.tsx`
  - hero social links and copyright helper
- `src/layouts/footers/FooterOne.tsx`
  - main CTA footer
- `src/layouts/footers/FooterFour.tsx`
  - inner-page footer
- `src/layouts/footers/FooterThree.tsx`
  - alternate preview footer, still template-heavy

### Homepage edit points

- `src/components/homes/home/HeroAreaHome.tsx`
  - main homepage proposition, rotating words, CTA
  - current headline lead is `launch-ready`
  - current right-column Lottie wrapper is capped at `610px`
  - if the task is only hero messaging, edit this file first before touching shared data
- `public/assets/scss/layout/pages/_hero.scss`
  - hero spacing, mobile typography, and Lottie offset behavior
  - current mobile hero tuning was adjusted manually and should be preserved unless the user asks otherwise
  - do not add new hero classes or `!important` casually; previous user feedback explicitly rejected that style of fix
- `src/components/homes/home/ServiceAreaHomeOne.tsx`
  - homepage service summary/process block
- `src/components/homes/home/AboutAreaHomeOne.tsx`
  - homepage about copy and counters
  - currently uses the Lottie file `public/assets/lottie/AboutReddystack.json` instead of the old static about image
  - current implementation uses `tp-about-lottie-frame` / `tp-about-lottie-player` plus crop tuning in `_about.scss`
  - this is one of the few active custom frontend deviations from the Diego source pattern
- `src/components/homes/home-2/TestimonialAreaHomeTwo.tsx`
  - homepage project slider currently used in place of the old projects section
- `src/data/TestimonialData.ts`
  - data behind the homepage project slider
- `src/components/homes/home/SkillAreaHomeOne.tsx`
  - skill/tooling section
- `src/components/homes/home/TestimonialAreaHomeOne.tsx`
  - testimonial slider
- `src/components/homes/home/PriceAreaHomeOne.tsx`
  - pricing section
  - current homepage pricing content:
    - `Quick Fix` -> `₹499`
    - `Starter Package` -> `₹1,499`
    - `Custom Quote` -> websites, MVPs, apps, SEO, automations

### About / service / portfolio / contact edit points

- `src/components/about/AboutInfo.tsx`
  - about-page intro copy
- `src/components/about/PersonalInfo.tsx`
  - about-page profile, experience, education, email/phone
- `src/components/about/FunfactArea.tsx`
  - about-page counters from `siteConfig.stats`
- homepage about counters are not shared with `siteConfig.stats`
  - `AboutAreaHomeOne.tsx` keeps its own hardcoded counter data
- `src/components/service/SeviceHeroArea.tsx`
  - service-page hero
- `src/components/service/ServiceAreaHomeThree.tsx`
  - service-page process block
- `src/components/service/ServiceInfoArea.tsx`
  - service categories block
- `src/components/portfolio/PortfolioArea.tsx`
  - portfolio list project names and categories
- `src/components/contact/ContactArea.tsx`
  - contact-page hero/copy/category chips
- `src/components/forms/ContactForm.tsx`
  - contact form fields, budget buttons, submit handler, and contact API payload
- `src/app/api/contact/route.ts`
  - server-side email send for contact submissions
  - first place to inspect if emails stop sending
- `AGENT_SOURCE_RULES.md`
  - hard rule for frontend work to derive structure/styles from `C:\Users\adell\Documents\diego-next-js`

### Blog edit points

- `src/data/BlogData.ts`
  - main blog list/slider/article-card data
- `src/data/ArticleData.ts`
  - blog-sidebar article data
- `src/components/blog/BlogArea.tsx`
  - main blog page layout and filter/slider wiring
- `src/components/blog-details/PostboxBlogDetailsArea.tsx`
  - blog detail body, author box, comments, related post block
- `src/components/blog-sidebar/BlogSidebar.tsx`
  - widgets for sidebar pages/details

## Customized Vs Template-Heavy Areas

### Mostly customized

- global SEO and brand/contact metadata
- homepage hero/about/skills/testimonials/projects section
- about page personal info
- service overview page high-level positioning
- service detail routing and service metadata architecture
- contact page copy and shared contact metadata
- footer and offcanvas contact/social surfaces for primary flows

### Mixed

- `/portfolio`
  - custom project names in list
  - generic slider heading still present
- `/about`
  - some decorative strips still generic
- `/service/[slug]`
  - route/data/SEO behavior is customized
  - visual layout and generic service imagery still come from the source template

### Still template-heavy

- `/home-3`
- `HeaderThree.tsx`
- `FooterThree.tsx`
- `/portfolio-details`
- `/blog`
- `/blog-details`
- `/blog-sidebar`
- `BlogData.ts`
- `ArticleData.ts`

## Important Behavioral Notes

### Form wiring status

- `src/components/forms/ContactForm.tsx`
  - validates with `yup`
  - sends a real POST request to `/api/contact`
  - includes selected INR budget and selected service chips in the payload
  - shows success/error toast from API response
  - still has no persistent lead storage, CRM sync, retry queue, or database backup

- `src/components/forms/CommentForm.tsx`
  - still uses the old template behavior: validate + toast + console log only

### Detail-page routing status

- service detail pages are now dynamic and slug-based under `/service/[slug]`
- portfolio links still point to one shared `/portfolio-details`
- blog pages still mostly point to one shared `/blog-details`
- `/service-details` is now only a legacy redirect to `/service`

### Some links are incorrect or placeholder

- several blog components still link to `/blog-details-2`, which does not exist
- some sections still use placeholder anchors or decorative links
- some portfolio/blog navigation blocks still contain template labels and dummy navigation

### Theme logic is duplicated

- shared theme logic lives in `src/hooks/UseThemeCheck.ts`
- `HeaderOne` and `HeaderFour` use that hook
- `HeaderThree` does not use the shared hook and manually manipulates localStorage/DOM
- the homepage header brand swap relies on existing `.logo-white` / `.logo-black` theme CSS
- if the header starts showing duplicate wordmarks again, inspect `BrandLockup.tsx` first and make sure root-level display styles are not overriding those theme classes

### Animation system is selector-sensitive

Do not rename section classes casually without checking the matching utility.

Important selectors:

- `Wrapper.tsx` pins:
  - `.tp-port-3-area`
  - `.tp-port-3-content-left`
- `src/utils/servicesPanel.js` expects:
  - `.tp-service-3__area`
  - `.services-panel-area`
  - `.services-panel`
  - `.services-panel-pin`
- `src/utils/PortfolioPanel.js` expects:
  - `.portfolio-panel`
  - `.tp-project-3__area`
  - `.tp-personal-info-pin-section`
  - `.tp-personal-info-pin`

### Wrapper is doing both modern and legacy scrolling work

- `Wrapper.tsx` creates `ScrollSmoother.create(...)`
- it also calls the vendored `scrollSmother()` helper on pathname change
- if scroll behavior breaks, check both places

## Known Current Debt

- package name still says `diego-nextjs`
- `README.md` is still template copy
- homepage header is using a temporary live text lockup, not the final delivered brand asset
- homepage about animation crop still depends on custom wrapper/SCSS tuning instead of a pure Diego-source image slot
- some route content still references:
  - `Diego`
  - `Themepure`
  - `Riveal`
  - `Booster`
  - `The Organic Crave`
  - `Polina Viola`
  - `Crisis Cleanup`
  - `Tough Built`
- `FooterOne` still renders right-side copyright text as `Portfolio`
- `BrandAreaHomeOne` and `BrandAreaAbout` are decorative strips, not trusted brand/client evidence
- `AwardAreaHomeOne` is still template/fake-award style content
- `src/components/homes/home/PortfolioAreaHomeOne.tsx` exists but is unused
- `home-3` route still has older custom theme logic and more template content than the primary site
- contact form now sends mail, but there is still no durable lead storage or CRM backup

## Public Assets Map

Main public asset buckets:

- `public/assets/img/`
  - large binary asset store for page imagery
  - most expensive/noisiest folder
- `public/assets/scss/`
  - original theme SCSS source
- `public/assets/css/`
  - compiled theme/vendor CSS
- `public/assets/plugins/`
  - vendored JS plugin files
- `public/assets/fonts/`
  - bundled font files
- `public/assets/lottie/hero-animation.json`
  - homepage hero Lottie animation
- `public/assets/img/cv/mycv.pdf`
  - CV download used by homepage/about buttons

## Folders Future Agents Can Ignore First

Unless the task explicitly targets them, ignore:

- `.next/`
- `node_modules/`
- `documentation/`
- `backup/`
- `public/assets/img/`
- `public/assets/fonts/`
- `public/assets/plugins/`
- `test-results/`
- `repomix-output.xml`

## Fast Start Checklist For The Next Agent

1. Read `src/data/siteConfig.ts`.
2. Read the target route file in `src/app/**/page.tsx`.
3. Read the matching feature `index.tsx`.
4. If the issue is global branding, check `BrandLockup.tsx`, headers, footers, offcanvas, and `SocialLinks.tsx`.
5. If the issue is SEO, start in `siteConfig.ts`, `src/app/layout.tsx`, `robots.ts`, and `sitemap.ts`.
6. If the issue is homepage hero layout/copy, read `HeroAreaHome.tsx` and `_hero.scss` together before changing anything.
7. If the issue is homepage projects, edit `home-2/TestimonialAreaHomeTwo.tsx` and `src/data/TestimonialData.ts`, not `PortfolioAreaHomeOne.tsx`.
8. If the issue is animation or sticky behavior, inspect `Wrapper.tsx` and the matching file in `src/utils/**`.
9. If the issue is on `/home-3`, expect more template debt and duplicate theme logic.
10. If the issue is on detail pages, expect shared single-template pages rather than dynamic content.
11. If lint output looks overwhelming, separate vendor/documentation noise from real `src/**` issues before making decisions.
