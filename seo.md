# SEO

Last updated: 2026-04-12

This file tracks the current SEO status of the Reddystack site.

For the broader AI recommendation and positioning strategy, read [AI_SEO_PLAYBOOK.md](/c:/Users/adell/Desktop/Rahulranksv2/AI_SEO_PLAYBOOK.md).

## Done

- Global metadata is centralized in [src/data/siteConfig.ts](/c:/Users/adell/Desktop/Rahulranksv2/src/data/siteConfig.ts)
- Sitewide metadata and JSON-LD are loaded in [src/app/layout.tsx](/c:/Users/adell/Desktop/Rahulranksv2/src/app/layout.tsx)
- Sitewide schema includes:
  - `Organization`
  - `ProfessionalService`
  - `WebSite`
- Homepage schema includes:
  - `WebPage`
  - `FAQPage`
- About page emits `AboutPage` schema
- Contact page emits `ContactPage` schema
- Blog detail pages emit:
  - page-specific metadata
  - page-specific OG/Twitter images
  - `BlogPosting`
  - breadcrumbs
- Service detail pages emit:
  - page-specific metadata
  - page-specific OG/Twitter images
  - `Service`
  - `FAQPage`
  - breadcrumbs
- Portfolio detail pages emit:
  - page-specific metadata
  - page-specific OG/Twitter images
  - `CreativeWork`
  - breadcrumbs
- `robots.txt` is implemented in [src/app/robots.ts](/c:/Users/adell/Desktop/Rahulranksv2/src/app/robots.ts)
- `sitemap.xml` is implemented in [src/app/sitemap.ts](/c:/Users/adell/Desktop/Rahulranksv2/src/app/sitemap.ts)
- Homepage hero and intro copy were tightened for clearer service positioning
- Homepage FAQ section was added after Packages
- Homepage FAQ UI and FAQ schema now share the same source data in [src/data/HomeFaqData.ts](/c:/Users/adell/Desktop/Rahulranksv2/src/data/HomeFaqData.ts)
- Homepage service accordions now link to real service pages
- Service detail pages now include visible FAQ sections with service-specific content
- Service detail FAQ UI and FAQ schema now share the same source data in [src/data/ServiceDetailData.ts](/c:/Users/adell/Desktop/Rahulranksv2/src/data/ServiceDetailData.ts)
- Blog posts now link to their related service pages
- Portfolio case studies now link to related service pages
- Four high-intent landing pages now exist as public, indexable routes:
  - `/affordable-website-development-for-startups`
  - `/seo-website-development-for-small-businesses`
  - `/mvp-development-for-startup-founders`
  - `/ai-automation-services-for-small-teams`
- The main services page now links visibly to those high-intent landing pages

## Current Positioning

Reddystack should be understood as:

- a founder-led digital service brand
- based in Hyderabad
- serving India and worldwide
- focused on SEO websites, applications, MVP builds, and AI automations

Primary entity model:

- sitewide: `Organization`
- sitewide: `ProfessionalService`
- service pages: `Service`

Do not position the site primarily as `LocalBusiness`.

## Source Of Truth

- SEO config and schema builders:
  - [src/data/siteConfig.ts](/c:/Users/adell/Desktop/Rahulranksv2/src/data/siteConfig.ts)
- homepage page-level schema:
  - [src/app/page.tsx](/c:/Users/adell/Desktop/Rahulranksv2/src/app/page.tsx)
- homepage FAQ content:
  - [src/data/HomeFaqData.ts](/c:/Users/adell/Desktop/Rahulranksv2/src/data/HomeFaqData.ts)
- homepage FAQ UI:
  - [src/components/homes/home/FaqAreaHomeOne.tsx](/c:/Users/adell/Desktop/Rahulranksv2/src/components/homes/home/FaqAreaHomeOne.tsx)
- about page schema:
  - [src/app/about/page.tsx](/c:/Users/adell/Desktop/Rahulranksv2/src/app/about/page.tsx)
- contact page schema:
  - [src/app/contact/page.tsx](/c:/Users/adell/Desktop/Rahulranksv2/src/app/contact/page.tsx)
- blog detail SEO:
  - [src/app/blog/[slug]/page.tsx](</c:/Users/adell/Desktop/Rahulranksv2/src/app/blog/[slug]/page.tsx>)
- service detail SEO:
  - [src/app/service/[slug]/page.tsx](</c:/Users/adell/Desktop/Rahulranksv2/src/app/service/[slug]/page.tsx>)
- service detail FAQ UI:
  - [src/components/service-details/ServiceFaqArea.tsx](/c:/Users/adell/Desktop/Rahulranksv2/src/components/service-details/ServiceFaqArea.tsx)
- service detail content and FAQ source:
  - [src/data/ServiceDetailData.ts](/c:/Users/adell/Desktop/Rahulranksv2/src/data/ServiceDetailData.ts)
- portfolio detail SEO:
  - [src/app/portfolio/[slug]/page.tsx](</c:/Users/adell/Desktop/Rahulranksv2/src/app/portfolio/[slug]/page.tsx>)

## Pending Next

- Create high-intent landing pages:
  - Landing Page Development for Lead Generation
  - Affordable App Development in India
  - Website vs App: What Should You Build First?
  - Landing Page vs SEO Website
  - How Much Does a Website Cost in India?
- Strengthen internal linking further between blog, service, portfolio, and contact pages
- Add stronger proof signals:
  - testimonials
  - clearer outcome language
  - stronger case-study trust markers
- Align external profiles and directory listings with the same positioning sentence

## Notes

- FAQ schema helps semantic clarity and AI understanding, but it does not guarantee FAQ rich results
- Avoid thin SEO pages and keyword stuffing
- Prefer `affordable`, `founder-led`, `premium execution`, and `clear scope` over `cheap`
