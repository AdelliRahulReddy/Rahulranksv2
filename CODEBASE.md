# CODEBASE

Last updated: 2026-04-04

## Purpose

This file is the handoff/index document for future agents working in this repo. It explains:

- what the project is
- how runtime flow works
- where each major piece lives
- which files are authoritative for content/layout/behavior
- which folders are runtime code vs template baggage vs generated output

## Project Summary

- Project type: Next.js App Router portfolio/agency site
- Current branding: partially customized for Rahul Reddy / Reddystack
- Original base: a "Diego" portfolio template with large theme asset bundles
- Rendering style: mostly static pages, but much of the UI is client-rendered because animations and theme toggles rely on DOM access
- Data source model: hardcoded TS/TSX content, no CMS, no API routes, no server actions

## Stack

- Framework: Next.js 16
- UI: React 19
- Language: TypeScript plus older JS utility files
- Styling: Sass + compiled theme CSS from `public/assets`
- UI framework: Bootstrap 5
- Animation: GSAP, ScrollTrigger, ScrollSmoother, WOW.js, custom utility scripts
- Sliders: `react-slick`, Swiper CSS
- Forms: `react-hook-form` + `yup`
- Misc: `lottie-react`, `react-toastify`, `react-scroll`

## Current State

- `npm run build` succeeds.
- `npm run lint` is noisy and currently fails.
- Most lint failures come from vendored files and old utility JS because ESLint only ignores `node_modules`, `.next`, `out`, and `build`.
- The app still contains template leftovers such as "Diego", `ThemePure`, placeholder links, and inconsistent contact metadata.
- Forms are UI-only right now; they validate and toast, but do not submit anywhere.

## Quarantined Dead Files

The following files were moved out of the active app tree into `backup/dead-files-2026-04-04/`.

- Source files in that backup folder were renamed to `.bak` so TypeScript and Next do not treat them as active source.
- Public starter assets moved there kept their original extensions.
- These quarantined files are not part of the active app anymore:
  - `src/components/common/animated-mouse.tsx`
  - `src/components/forms/ContactFormHomeTwo.tsx`
  - `src/data/TestimonialData.ts`
  - `src/svg/home-2/HeroShapeHomeTwo.tsx`
  - `src/svg/home-2/NextIconHomeTwo.tsx`
  - `src/svg/home-2/PrevIconHomeOne.tsx`
  - `src/svg/home-2/RightArrowHomeTwo.tsx`
  - `src/svg/home-3/DownArrowIcon.tsx`
  - `src/svg/home-3/FooterBtnIcon.tsx`
  - `src/ui/NiceSelect.tsx`
  - `src/utils/animationCharCome.js`
  - `src/utils/animationWordCome.js`
  - `src/utils/cursorTest.js`
  - `src/utils/pagepiling.js`
  - `src/utils/webgl-slider.js`
  - `public/next.svg`
  - `public/vercel.svg`

## Runtime Flow

1. `src/app/layout.tsx`
   - Loads global styles from `src/styles/index.scss`
   - Registers Google fonts
   - Wraps all pages in `ThemeProvider` and `VideoProvider`

2. `src/components/provider/ThemeProvider.tsx`
   - Gates initial render with the preloader until theme initialization check passes

3. `src/provider/VideoProvider.tsx`
   - Provides a global video modal context and renders the modal overlay/iframe when opened

4. `src/app/**/page.tsx`
   - Each route exports metadata and renders a feature page inside `src/layouts/Wrapper.tsx`

5. `src/layouts/Wrapper.tsx`
   - This is the actual client runtime shell
   - Boots Bootstrap JS on the client
   - Registers GSAP plugins from `src/plugins/index.js`
   - Creates smooth scrolling and sticky/pinned behavior
   - Runs global animation helpers on route change
   - Wraps children in `ContextProvider`
   - Mounts `ToastContainer` and `ScrollToTop`

6. Feature entry components such as `src/components/homes/home/index.tsx`
   - Assemble the page using headers, sections, and footers

7. Section components under `src/components/**`
   - Render individual blocks like hero, services, blog, contact, portfolio, etc.
   - Most content is embedded directly in these files or in `src/data/*`

8. Utility animation scripts under `src/utils/*`
   - Imperatively query DOM elements by class name and attach animation behavior

## Route Map

- `/` -> `src/app/page.tsx` -> `src/components/homes/home/index.tsx`
- `/about` -> `src/app/about/page.tsx` -> `src/components/about/index.tsx`
- `/blog` -> `src/app/blog/page.tsx` -> `src/components/blog/index.tsx`
- `/blog-details` -> `src/app/blog-details/page.tsx` -> `src/components/blog-details/index.tsx`
- `/blog-sidebar` -> `src/app/blog-sidebar/page.tsx` -> `src/components/blog-sidebar/index.tsx`
- `/contact` -> `src/app/contact/page.tsx` -> `src/components/contact/index.tsx`
- `/portfolio` -> `src/app/portfolio/page.tsx` -> `src/components/portfolio/index.tsx`
- `/portfolio-details` -> `src/app/portfolio-details/page.tsx` -> `src/components/portfolio-details/index.tsx`
- `/service` -> `src/app/service/page.tsx` -> `src/components/service/index.tsx`
- `/service-details` -> `src/app/service-details/page.tsx` -> `src/components/service-details/index.tsx`
- catch-all not-found route -> `src/app/[...not-found]/page.tsx` -> `src/components/error/index.tsx`

## Authoritative Content Edit Points

If a future agent needs to change site content quickly, start here:

- main nav: `src/layouts/headers/menu/MenuData.ts`
- home hero copy: `src/components/homes/home/HeroAreaHome.tsx`
- home recent products: `src/components/homes/home/PortfolioAreaHomeOne.tsx`
- home testimonials: `src/components/homes/home/TestimonialAreaHomeOne.tsx`
- footer CTA/social handles: `src/layouts/footers/FooterOne.tsx`
- copyright text / hero social links: `src/components/common/SocialLinks.tsx`
- contact page email/category labels: `src/components/contact/ContactArea.tsx`
- contact form behavior: `src/components/forms/ContactForm.tsx`
- about personal info / skills / experience: `src/components/about/PersonalInfo.tsx`
- blog listing data: `src/data/BlogData.ts`
- blog standard posts data: `src/data/ArticleData.ts`
- shared portfolio/testimonial image data: `src/data/TestimonialData.ts`
- CV download file: `public/assets/img/cv/mycv.docx`
- logos and branding images: `public/assets/img/logo/*`

## Known Constraints And Risks

- There is no backend integration.
- Contact/comment forms only show a toast and `console.log` the submitted data.
- Theme handling is DOM-driven and duplicated in multiple places.
- Many animation helpers depend on exact CSS class names; renaming classes can silently break behavior.
- `FooterFour.tsx`, `Offcanvas.tsx`, and several metadata strings still contain template placeholder content.
- `documentation/` is not app runtime code. It is template documentation bundled into the repo.
- `public/assets/plugins/*` contains vendored script files that should usually not be edited unless you intentionally want to patch vendor behavior.
- `repomix-output.xml` appears to be a generated repo snapshot for LLM tooling and is not app runtime.

## What To Ignore First

When orienting quickly, ignore these unless the task explicitly targets them:

- `.next/` - generated build output
- `node_modules/` - installed dependencies
- `documentation/` - standalone template docs, not imported by the app
- `public/assets/img/*` - binary content unless the task is visual/content replacement
- `public/assets/fonts/*` - bundled font assets
- `public/assets/plugins/*` - vendored scripts

## Root Structure

```text
Rahulranksv2/
  .git/
  .next/
  documentation/
  node_modules/
  public/
  src/
  .gitignore
  eslint.config.mjs
  next-env.d.ts
  next.config.js
  package-lock.json
  package.json
  README.md
  repomix-output.xml
  tsconfig.json
  CODEBASE.md
```

## Root File Inventory

- `.gitignore`
  - Standard ignore rules for dependencies, builds, and environment files.
- `eslint.config.mjs`
  - Next.js ESLint config using `core-web-vitals` and `typescript`.
  - Important: currently does not ignore `documentation/**` or `public/assets/plugins/**`, which makes lint output noisy.
- `next-env.d.ts`
  - Next.js generated type declarations.
- `next.config.js`
  - Minimal Next config; `reactStrictMode` is disabled.
- `package.json`
  - Scripts, dependencies, and overrides.
- `package-lock.json`
  - NPM lockfile.
- `README.md`
  - Basic project readme with template marketing copy and live link.
- `repomix-output.xml`
  - Generated repo snapshot / aggregation file for tooling or LLM ingestion. Not used by app runtime.
- `tsconfig.json`
  - TypeScript config with path aliases for `@/*`, `@/assets/*`, `@/components/*`, etc.

## Source Tree

```text
src/
  app/
  components/
  context/
  data/
  hooks/
  layouts/
  plugins/
  provider/
  styles/
  svg/
  types/
  ui/
  utils/
```

## Source File Inventory

### `src/app`

- `src/app/favicon.ico`
  - App favicon used by Next App Router.
- `src/app/layout.tsx`
  - Global root layout: styles, fonts, `ThemeProvider`, `VideoProvider`.
- `src/app/page.tsx`
  - Home route metadata + wrapper + home page entry.
- `src/app/about/page.tsx`
  - About page route entry.
- `src/app/blog/page.tsx`
  - Blog page route entry.
- `src/app/blog-details/page.tsx`
  - Blog details route entry.
- `src/app/blog-sidebar/page.tsx`
  - Blog sidebar route entry.
- `src/app/contact/page.tsx`
  - Contact page route entry.
- `src/app/portfolio/page.tsx`
  - Portfolio page route entry.
- `src/app/portfolio-details/page.tsx`
  - Portfolio details route entry.
- `src/app/service/page.tsx`
  - Services page route entry.
- `src/app/service-details/page.tsx`
  - Service details route entry.
- `src/app/[...not-found]/page.tsx`
  - Catch-all not-found route entry.

### `src/components/about`

- `src/components/about/AboutInfo.tsx`
  - About page body section with profile/story content.
- `src/components/about/BrandAreaAbout.tsx`
  - Brand/logo strip used across about/service/portfolio pages.
- `src/components/about/FunfactArea.tsx`
  - About page stats/facts section.
- `src/components/about/HeroAreaAbout.tsx`
  - About page hero/header section.
- `src/components/about/index.tsx`
  - Assembles the full about page using header, content sections, and footer.
- `src/components/about/PersonalInfo.tsx`
  - Personal info block with email/phone, floating skill tags, skill bars, experience, and education.

### `src/components/blog`

- `src/components/blog/BlogArea.tsx`
  - Main blog page layout and listing UI.
- `src/components/blog/index.tsx`
  - Assembles the blog page with `HeaderFour`, `BlogArea`, and `FooterFour`.

### `src/components/blog-details`

- `src/components/blog-details/BreadcrumbBlogDetails.tsx`
  - Blog details page breadcrumb/hero area.
- `src/components/blog-details/index.tsx`
  - Assembles the blog details page.
- `src/components/blog-details/PostboxBlogDetailsArea.tsx`
  - Main blog post body, media, sidebar-ish content, comments, and related post UI.

### `src/components/blog-sidebar`

- `src/components/blog-sidebar/BlogSidebar.tsx`
  - Sidebar widget content for the blog sidebar layout.
- `src/components/blog-sidebar/Breadcrumb.tsx`
  - Breadcrumb/header for the blog sidebar page.
- `src/components/blog-sidebar/index.tsx`
  - Assembles the blog sidebar page.
- `src/components/blog-sidebar/SideBlogPostBoxArea.tsx`
  - Main post list area for the sidebar variant of the blog page.

### `src/components/common`

- `src/components/common/animated-mouse.tsx`
  - Mouse-follow / cursor interaction component.
- `src/components/common/Count.tsx`
  - Reusable count-up/stat number helper.
- `src/components/common/Offcanvas.tsx`
  - Default slide-out menu used by `HeaderFour`; still contains template placeholder contact/social data.
- `src/components/common/Offcanvas2.tsx`
  - Alternate slide-out menu used by `HeaderOne`; more customized toward Rahul contact details.
- `src/components/common/ScrollToTop.tsx`
  - Floating back-to-top control based on scroll position.
- `src/components/common/SocialLinks.tsx`
  - Hero social links plus shared copyright string helpers.

### `src/components/contact`

- `src/components/contact/ContactArea.tsx`
  - Contact page hero/content area, category chips, email block, and embedded contact form.
- `src/components/contact/index.tsx`
  - Assembles the contact page.

### `src/components/error`

- `src/components/error/Breadcrumb.tsx`
  - Error page breadcrumb/visual lead-in.
- `src/components/error/index.tsx`
  - Full 404/error page assembly.

### `src/components/forms`

- `src/components/forms/CommentForm.tsx`
  - Blog comment form with validation and toast-only submission.
- `src/components/forms/ContactForm.tsx`
  - Main contact form with `react-hook-form` + `yup`; no actual submission backend.
- `src/components/forms/ContactFormHomeTwo.tsx`
  - Alternate form variant using `NiceSelect`; also toast-only, no backend.

### `src/components/homes/home`

- `src/components/homes/home/AboutAreaHomeOne.tsx`
  - Home page about/intro section.
- `src/components/homes/home/AwardAreaHomeOne.tsx`
  - Awards/case-study highlight area reused in multiple pages.
- `src/components/homes/home/BrandAreaHomeOne.tsx`
  - Home page brand/logo marquee section.
- `src/components/homes/home/HeroAreaHome.tsx`
  - Main home hero with animated rotating words, lottie animation, CTA, and social links.
- `src/components/homes/home/index.tsx`
  - Full home page assembly.
- `src/components/homes/home/MarqueeAreaHomeOne.tsx`
  - Home page marquee/text-strip section.
- `src/components/homes/home/PortfolioAreaHomeOne.tsx`
  - Home page featured/recent products section.
- `src/components/homes/home/PriceAreaHomeOne.tsx`
  - Pricing section.
- `src/components/homes/home/ServiceAreaHomeOne.tsx`
  - Home services summary section.
- `src/components/homes/home/SkillAreaHomeOne.tsx`
  - Skills/tooling section with hover-reveal interactions.
- `src/components/homes/home/TestimonialAreaHomeOne.tsx`
  - Testimonial slider and nav slider section.

### `src/components/portfolio`

- `src/components/portfolio/index.tsx`
  - Assembles the portfolio listing page.
- `src/components/portfolio/PortfolioArea.tsx`
  - Main portfolio grid/listing section.
- `src/components/portfolio/PortfolioSlider.tsx`
  - Portfolio page top slider/hero area.

### `src/components/portfolio-details`

- `src/components/portfolio-details/HeroPortfolioDetailsArea.tsx`
  - Portfolio details hero block.
- `src/components/portfolio-details/index.tsx`
  - Assembles the portfolio details page.
- `src/components/portfolio-details/PortfolioAboutArea.tsx`
  - Portfolio/project overview section.
- `src/components/portfolio-details/PortfolioDetailsArea.tsx`
  - Main portfolio details content and image layout.

### `src/components/preloader`

- `src/components/preloader/Preloader.tsx`
  - Preloader shown during initial theme check.

### `src/components/provider`

- `src/components/provider/ThemeProvider.tsx`
  - Wraps children and swaps in `Preloader` until theme readiness is confirmed.

### `src/components/service`

- `src/components/service/index.tsx`
  - Assembles the services page.
- `src/components/service/ServiceAreaHomeThree.tsx`
  - Services/process section used on the service page.
- `src/components/service/ServiceInfoArea.tsx`
  - Service information/details section.
- `src/components/service/SeviceHeroArea.tsx`
  - Service page hero. File name has a typo ("Sevice").

### `src/components/service-details`

- `src/components/service-details/index.tsx`
  - Assembles the service details page.
- `src/components/service-details/NavigationArea.tsx`
  - Bottom navigation / related-service navigation area.
- `src/components/service-details/ServiceDetailsArea.tsx`
  - Main service details content section.

### `src/context`

- `src/context/app-context.tsx`
  - Small global context for hover state (`isEnter`) used by shared interactions.

### `src/data`

- `src/data/ArticleData.ts`
  - Static article/post data for standard blog-style sections.
- `src/data/BlogData.ts`
  - Large static blog/category/slider/article data structure for blog pages.
- `src/data/TestimonialData.ts`
  - Static image/tag/year data used by testimonial/portfolio-related displays.

### `src/hooks`

- `src/hooks/UseHoverReveal.ts`
  - Hook for hover-reveal style cursor/image interactions.
- `src/hooks/UseSticky.ts`
  - Hook for sticky state behavior based on window scroll.
- `src/hooks/UseThemeCheck.ts`
  - LocalStorage + DOM based theme initialization/toggle hook.

### `src/layouts`

- `src/layouts/Wrapper.tsx`
  - Client runtime wrapper for route content, animations, plugins, toast, and global helpers.

#### `src/layouts/footers`

- `src/layouts/footers/FooterFour.tsx`
  - Internal-page footer; still has template placeholder data and `ThemePure` branding.
- `src/layouts/footers/FooterOne.tsx`
  - Primary CTA footer used across home and several internal pages; partially customized for Rahul.

#### `src/layouts/headers`

- `src/layouts/headers/HeaderFour.tsx`
  - Internal-page header with theme toggle, sticky behavior, nav, and offcanvas.
- `src/layouts/headers/HeaderOne.tsx`
  - Home-page header with alternate offcanvas and sticky logic.

#### `src/layouts/headers/menu`

- `src/layouts/headers/menu/MenuData.ts`
  - Central nav definition.
- `src/layouts/headers/menu/mobile-menus.tsx`
  - Mobile menu renderer and accordion/dropdown behavior.
- `src/layouts/headers/menu/NavMenu.tsx`
  - Desktop nav renderer reading `MenuData.ts`.

### `src/plugins`

- `src/plugins/index.js`
  - Re-exports vendored GSAP/WebGL/charming modules from `public/assets/plugins`.

### `src/provider`

- `src/provider/VideoProvider.tsx`
  - Global video modal context and iframe overlay renderer.

### `src/styles`

- `src/styles/index.scss`
  - Global Sass entry that forwards theme CSS, plugin CSS, Bootstrap CSS, and the theme SCSS bundle.

### `src/svg`

All files under `src/svg/**` export inline React SVG components. They are presentational only.

#### `src/svg/about`

- `src/svg/about/BrandIcon.tsx`
  - Brand/icon SVG used in about-related UI.

#### `src/svg/home/AwardIcons`

- `src/svg/home/AwardIcons/AwardLeftArrowIcon.tsx`
  - Award section left arrow icon.
- `src/svg/home/AwardIcons/AwardUpArrowIcon.tsx`
  - Award section up arrow icon.

#### `src/svg/home/FooterIcons`

- `src/svg/home/FooterIcons/BehanceIconFooter.tsx`
  - Behance-style footer icon.
- `src/svg/home/FooterIcons/GoogleIconFooter.tsx`
  - Google-style footer icon.
- `src/svg/home/FooterIcons/InstagramIconFooter.tsx`
  - Instagram-style footer icon.

#### `src/svg/home/HeroIcons`

- `src/svg/home/HeroIcons/HeroArrowIcon.tsx`
  - Hero CTA arrow icon.
- `src/svg/home/HeroIcons/HeroBehanceIcon.tsx`
  - Hero social Behance icon.
- `src/svg/home/HeroIcons/HeroEmailIcon.tsx`
  - Hero social email icon.
- `src/svg/home/HeroIcons/HeroGoogleIcon.tsx`
  - Hero social Google/search icon.

#### `src/svg/home/PortfolioIcons`

- `src/svg/home/PortfolioIcons/RitghtArrowIconPortfolio.tsx`
  - Portfolio arrow icon. File name has a typo ("Ritght").
- `src/svg/home/PortfolioIcons/UpArrowIconPortfolio.tsx`
  - Portfolio upward arrow icon.

#### `src/svg/home-2`

- `src/svg/home-2/HeroShapeHomeTwo.tsx`
  - Home 2 decorative hero shape icon.
- `src/svg/home-2/NextIconHomeTwo.tsx`
  - Home 2 slider next icon.
- `src/svg/home-2/PrevIconHomeOne.tsx`
  - Previous icon for one of the alternate slider layouts.
- `src/svg/home-2/RightArrowHomeTwo.tsx`
  - Right arrow icon for the alternate home layout.
- `src/svg/home-2/YoutubeIconHeorAreaHomeTwo.tsx`
  - YouTube icon for footer/social usage. File name contains typo ("Heor").

#### `src/svg/home-3`

- `src/svg/home-3/DevelopmentIcon.tsx`
  - Development service icon.
- `src/svg/home-3/DownArrowIcon.tsx`
  - Down arrow icon.
- `src/svg/home-3/FooterBtnIcon.tsx`
  - Footer button icon.
- `src/svg/home-3/LeadershipIcon.tsx`
  - Leadership icon.
- `src/svg/home-3/StrategyIcno.tsx`
  - Strategy icon. File name contains typo ("Icno").

#### `src/svg/icons`

- `src/svg/icons/Facebook.tsx`
  - Facebook icon.
- `src/svg/icons/Linkedin.tsx`
  - LinkedIn icon.
- `src/svg/icons/PortfolioDownArrowIcon.tsx`
  - Portfolio down arrow icon.
- `src/svg/icons/StartIcon.tsx`
  - Star rating icon.
- `src/svg/icons/Twitter.tsx`
  - Twitter/X icon.

#### `src/svg/service`

- `src/svg/service/ServiceArrowIcon.tsx`
  - Shared service arrow icon.
- `src/svg/service/ServiceBrandingIcon.tsx`
  - Branding service icon.
- `src/svg/service/ServiceDevelopmentIcon.tsx`
  - Development service icon.
- `src/svg/service/ServiceMobileIcon.tsx`
  - Mobile service icon.
- `src/svg/service/ServiceSoftwareIcon.tsx`
  - Software service icon.
- `src/svg/service/ServiceUiIcon.tsx`
  - UI service icon.
- `src/svg/service/ServiceWebIcon.tsx`
  - Web service icon.
- `src/svg/service/StarIcon.tsx`
  - Service/star accent icon.

### `src/types`

- `src/types/wowjs.d.ts`
  - Local type declaration for WOW.js.

### `src/ui`

- `src/ui/NiceSelect.tsx`
  - Custom select replacement component used by alternate forms.

### `src/utils`

- `src/utils/animatedHeadline.js`
  - Animated headline helper used by hero text effects.
- `src/utils/animationCharCome.js`
  - Character entrance animation helper.
- `src/utils/animationTitle.js`
  - Title animation helper that splits/animates title text.
- `src/utils/animationTitleChar.js`
  - Character-by-character title animation helper.
- `src/utils/animationWordCome.js`
  - Word entrance animation helper.
- `src/utils/blogAnimation.js`
  - Blog section animation helper.
- `src/utils/buttonAnimation.js`
  - Button hover/entrance animation helper.
- `src/utils/cursorTest.js`
  - Heavy custom cursor/parallax interaction helper.
- `src/utils/linesAnimation.js`
  - Border/line reveal animation helper for many sections.
- `src/utils/pagepiling.js`
  - Older/vendored pagepiling script copy.
- `src/utils/PortfolioPanel.js`
  - Portfolio panel sticky/scroll behavior helper.
- `src/utils/scrollSmother.js`
  - Large custom/vendored smooth scrolling helper. File name has a typo ("Smother").
- `src/utils/scrollTextAnimation.js`
  - Horizontal/scroll-linked text motion helper.
- `src/utils/servicesPanel.js`
  - Services panel scroll/sticky behavior helper.
- `src/utils/textInvert.js`
  - Text invert / reveal effect helper.
- `src/utils/throwableAnimation.js`
  - Physics-like throwable badge/capsule animation helper.
- `src/utils/utils.js`
  - Small helper that initializes WOW.js animation runtime.
- `src/utils/webgl-slider.js`
  - WebGL slider helper.

## Public Asset Map

`public/` contains static assets consumed by Next's file serving layer. Most files here are not logic; they are theme assets or binary content.

- `public/next.svg`
  - Default Next.js starter asset, likely unused.
- `public/vercel.svg`
  - Default Vercel starter asset, likely unused.

### `public/assets/css`

- compiled vendor/theme CSS files
- includes bootstrap, animation, pagepiling, nice-select, spacing, and theme helpers

Files:

- `public/assets/css/animate.css`
- `public/assets/css/bootstrap.css`
- `public/assets/css/custom-animation.css`
- `public/assets/css/font-awesome-pro.css`
- `public/assets/css/fullpage.css`
- `public/assets/css/hover-reveal.css`
- `public/assets/css/nice-select.css`
- `public/assets/css/pagepiling.css`
- `public/assets/css/spacing.css`

### `public/assets/fonts`

- bundled font binaries used by the imported theme CSS
- includes Didone variants, Font Awesome font files, and PP Right Didone fonts

### `public/assets/img`

All folders here are section-specific visual assets. Folder names are the best guide to usage.

- `public/assets/img/about/`
  - About page imagery, icons, WhatsApp badge, and related shape assets.
- `public/assets/img/award/`
  - Award/case-study imagery.
- `public/assets/img/bg/`
  - Shared background images such as `distort-bg.png`.
- `public/assets/img/blog/`
  - Blog cards, blog details images, quotes, and sidebar images.
- `public/assets/img/brand/`
  - Brand/logo strip imagery.
- `public/assets/img/contact/`
  - Contact page photography and decorative shapes.
- `public/assets/img/course/`
  - Template course assets; not obviously central to current Rahul build.
- `public/assets/img/cv/`
  - Downloadable CV/doc assets. Contains `mycv.docx`.
- `public/assets/img/faq/`
  - FAQ page visuals from the original template.
- `public/assets/img/footer/`
  - Footer backgrounds, shapes, and icons.
- `public/assets/img/funfact/`
  - About stats/facts imagery.
- `public/assets/img/hero/`
  - Home/about hero imagery and overlays.
- `public/assets/img/icon/social/`
  - Standalone social SVG assets.
- `public/assets/img/logo/`
  - Main logos, favicon image, dark/light variants.
- `public/assets/img/marquee/`
  - Marquee section decorative assets.
- `public/assets/img/menu/`
  - Menu/home demo thumbnail(s).
- `public/assets/img/new-img/`
  - Alternate template imagery for non-primary layouts.
- `public/assets/img/offcanvas/`
  - Offcanvas menu gallery/background imagery.
- `public/assets/img/portfolio/`
  - Portfolio listing/details imagery and shapes.
- `public/assets/img/portfolio-details-2/`
  - Alternate portfolio details page images.
- `public/assets/img/portfolio-details-3/`
  - Another alternate portfolio details image set.
- `public/assets/img/services/`
  - Service page/detail/slider visuals.
- `public/assets/img/skill/`
  - Skill/tool logos and skill section background assets.
- `public/assets/img/slider/`
  - Misc slider images.
- `public/assets/img/testimonial/`
  - Testimonial backgrounds, avatars, and quote assets.
- `public/assets/img/users/`
  - User/avatar portraits referenced by blog/testimonial sections.
- `public/assets/img/webgl/`
  - WebGL demo/slider images.

### `public/assets/lottie`

- `public/assets/lottie/hero-animation.json`
  - Lottie asset used in the main home hero.

### `public/assets/plugins`

Vendored script files used by `src/plugins/index.js` and other older utilities.

- `public/assets/plugins/animated-headline.js`
- `public/assets/plugins/charming.js`
- `public/assets/plugins/gsap-scroll-smoother.js`
- `public/assets/plugins/gsap-scroll-trigger.js`
- `public/assets/plugins/gsap-split-text.js`
- `public/assets/plugins/gsap.js`
- `public/assets/plugins/matter.js`
- `public/assets/plugins/three.js`
- `public/assets/plugins/webgl.js`

### `public/assets/scss`

Original theme Sass source. `src/styles/index.scss` forwards into this bundle.

- `public/assets/scss/main.scss`
- `public/assets/scss/components/`
  - component-level Sass partials such as buttons, cursor, offcanvas, breadcrumb, modal, preloader, etc.
- `public/assets/scss/layout/`
  - page/layout Sass partials for blog, footer, header, menu, and page sections.
- `public/assets/scss/theme/`
  - common theme tokens and global theme styles.
- `public/assets/scss/utils/`
  - breakpoints, mixins, variables, colors, typography, and root variables.

## Documentation Folder Map

`documentation/` is an old-school standalone HTML documentation bundle shipped with the template. It is not imported into the Next app runtime.

- `documentation/index.html`
  - Main template documentation landing page.
- `documentation/assets/css/*`
  - CSS for the standalone docs.
- `documentation/assets/fonts/*`
  - Fonts used by the standalone docs.
- `documentation/assets/images/*`
  - Screenshots and reference images explaining template customization.
- `documentation/assets/js/*`
  - JS for the docs page itself.

Important note:

- Future agents should treat `documentation/` as reference material only.
- If linting or code search is noisy, this folder is a candidate to ignore in tooling.

## Naming Oddities And Template Leftovers

The repo contains a mix of customized and template-era naming. Do not assume naming is clean or consistent.

- `SeviceHeroArea.tsx` should probably be `ServiceHeroArea.tsx`
- `RitghtArrowIconPortfolio.tsx` has a typo
- `StrategyIcno.tsx` has a typo
- `scrollSmother.js` has a typo
- several metadata strings still say "Diego"
- `FooterFour.tsx` still says `ThemePure`
- placeholder emails/addresses/social links still exist in some internal-layout files

## Recommended Future Cleanup

If someone wants to harden the codebase after orientation, highest-value cleanup areas are:

- centralize metadata titles/descriptions
- unify theme logic between `HeaderOne`, `HeaderFour`, and `UseThemeCheck`
- wire contact/comment forms to a real backend or email service
- ignore `documentation/**` and `public/assets/plugins/**` in ESLint
- remove placeholder links like `href="#"` and `mailto:WriteaMessage`
- replace template leftovers in `FooterFour.tsx`, `Offcanvas.tsx`, and some blog/static data files
- consider moving static content into typed data/config files instead of embedding large objects inside JSX files

## Fast Orientation Checklist For The Next Agent

1. Read `package.json`, `src/app/layout.tsx`, and `src/layouts/Wrapper.tsx`.
2. Read the route file you need under `src/app/**/page.tsx`.
3. Read the matching feature entry `src/components/**/index.tsx`.
4. Update content in the specific section component or `src/data/*`.
5. Only touch `public/assets/*` when changing raw imagery, logos, fonts, or theme CSS/SCSS.
6. Ignore `documentation/`, `.next/`, and `node_modules/` unless the task explicitly needs them.
