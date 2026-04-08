# CODEBASE

Last updated: 2026-04-09

## Purpose

This file is the working handoff for future agents in this repo.

It is intentionally based on the current live code, not on older template assumptions.

Use it to answer:

- what the app is now
- which routes matter
- which files are the real source of truth
- which pages are customized vs still template-heavy
- where future fixes should land first

## Current Snapshot

- Project type: Next.js App Router marketing/portfolio site for `Reddystack`
- User-facing brand: `Reddystack` / `Rahul Reddy Adelli`
- Original base: `Diego` portfolio template
- Package name is still `diego-nextjs`
- Main runtime is mostly static pages plus heavy client-side animation
- There is no backend, CMS, API route, or server action layer
- Forms are UI-only and do not submit to a real endpoint
- Primary marketing routes are partially/mostly customized
- Several detail routes and the alternate `home-3` route are still template-heavy

## Verified Status On 2026-04-09

- `npm run build` passes on Next.js `16.1.6`
- Build output includes static routes for `/`, `/about`, `/blog`, `/blog-details`, `/blog-sidebar`, `/contact`, `/home-3`, `/portfolio`, `/portfolio-details`, `/service`, `/service-details`, plus `robots.txt` and `sitemap.xml`
- `npm run lint` fails
- Current lint count: `1373` problems total
- Current lint breakdown: `126` errors, `1247` warnings
- Most lint noise comes from:
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

### `/service-details`

- Entry: `src/app/service-details/page.tsx`
- Feature shell: `src/components/service-details/index.tsx`
- Sections:
  - `ServiceDetailsArea`
  - `BrandAreaAbout`
  - `NavigationArea`
- Footer/header: `HeaderFour`, `FooterOne`
- Status: heavily template-based
- Important: this is a single shared detail page, not dynamic per service

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
- Important: form is still toast-only and logs to console

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
  - email
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
- `src/layouts/headers/HeaderOne.tsx`
  - primary homepage header
- `src/layouts/headers/HeaderFour.tsx`
  - inner-page header
- `src/layouts/headers/HeaderThree.tsx`
  - alternate preview header with duplicated theme logic
- `src/components/common/Offcanvas.tsx`
  - inner-page offcanvas contact/social panel
- `src/components/common/Offcanvas2.tsx`
  - homepage offcanvas panel

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
- `src/components/homes/home/ServiceAreaHomeOne.tsx`
  - homepage service summary/process block
- `src/components/homes/home/AboutAreaHomeOne.tsx`
  - homepage about copy and counters
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

### About / service / portfolio / contact edit points

- `src/components/about/AboutInfo.tsx`
  - about-page intro copy
- `src/components/about/PersonalInfo.tsx`
  - about-page profile, experience, education, email/phone
- `src/components/about/FunfactArea.tsx`
  - about-page counters from `siteConfig.stats`
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
  - contact form fields, toast, budget buttons

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
- service page high-level positioning
- contact page copy and shared contact metadata
- footer and offcanvas contact/social surfaces for primary flows

### Mixed

- `/portfolio`
  - custom project names in list
  - generic slider heading still present
- `/about`
  - some decorative strips still generic
- `/service`
  - top-level messaging is custom
  - links still funnel into one generic detail template

### Still template-heavy

- `/home-3`
- `HeaderThree.tsx`
- `FooterThree.tsx`
- `/service-details`
- `/portfolio-details`
- `/blog`
- `/blog-details`
- `/blog-sidebar`
- `BlogData.ts`
- `ArticleData.ts`

## Important Behavioral Notes

### Forms are not wired

- `src/components/forms/ContactForm.tsx`
  - validates with `yup`
  - shows toast
  - resets fields
  - logs form data to console
  - selected budget is visual only and not included in submitted data

- `src/components/forms/CommentForm.tsx`
  - same pattern: validate + toast + console log only

### Detail pages are not dynamic

- there are no slug-based detail routes
- all service links point to one `/service-details`
- all portfolio links point to one `/portfolio-details`
- blog pages mostly point to one `/blog-details`

### Some links are incorrect or placeholder

- several blog components still link to `/blog-details-2`, which does not exist
- some sections still use placeholder anchors or decorative links
- some service/portfolio/blog navigation blocks still contain template labels and dummy navigation

### Theme logic is duplicated

- shared theme logic lives in `src/hooks/UseThemeCheck.ts`
- `HeaderOne` and `HeaderFour` use that hook
- `HeaderThree` does not use the shared hook and manually manipulates localStorage/DOM

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
- `public/assets/img/cv/mycv.docx`
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
4. If the issue is global branding, check headers, footers, offcanvas, and `SocialLinks.tsx`.
5. If the issue is SEO, start in `siteConfig.ts`, `src/app/layout.tsx`, `robots.ts`, and `sitemap.ts`.
6. If the issue is homepage projects, edit `home-2/TestimonialAreaHomeTwo.tsx` and `src/data/TestimonialData.ts`, not `PortfolioAreaHomeOne.tsx`.
7. If the issue is animation or sticky behavior, inspect `Wrapper.tsx` and the matching file in `src/utils/**`.
8. If the issue is on `/home-3`, expect more template debt and duplicate theme logic.
9. If the issue is on detail pages, expect shared single-template pages rather than dynamic content.
10. If lint output looks overwhelming, separate vendor/documentation noise from real `src/**` issues before making decisions.
