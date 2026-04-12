Use short, direct answers by default. Keep technical detail exact. Expand only when the user asks for depth or nuance.

Start repo context with:
- `.codex/context/PROJECT_CONTEXT_LITE.md`
- `.codex/context/SEO_CONTEXT_LITE.md` for SEO/content work

Open the full originals only when needed:
- `CODEBASE.md`
- `AGENT_SOURCE_RULES.md`
- `AI_SEO_PLAYBOOK.md`
- `seo.md`

Frontend rule:
- follow `AGENT_SOURCE_RULES.md`
- reuse `C:\Users\adell\Documents\diego-next-js` patterns
- no custom redesign unless user approves

Important repo notes:
- brand: `Reddystack`
- founder: `Rahul Reddy Adelli`
- stack: Next.js App Router + Sass + GSAP
- homepage featured projects come from `src/data/PortfolioProjectsData.ts`
- service/detail SEO and FAQ source of truth lives in `src/data/ServiceDetailData.ts`
- blog source of truth lives in `src/data/BlogPostsData.ts`
- homepage FAQ source of truth lives in `src/data/HomeFaqData.ts`

Animation note:
- SplitText-style text splitting was removed from local animation helpers
- use plain GSAP reveals unless there is a proven reason to restore splitting

Landing-page note:
- intent pages exist as public routes
- they reuse source-aligned service-detail structure
- avoid adding custom visual wrappers to those pages
