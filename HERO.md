# Hero Reference

Last updated: 2026-04-14

This file is the current source-of-truth for the homepage hero. Read it before changing hero copy, spacing, opacity, or Lottie positioning.

## Files

- `src/components/homes/home/HeroAreaHome.tsx`
- `public/assets/scss/layout/pages/_hero.scss`
- `public/assets/scss/layout/pages/_theme-light.scss`

## Important Context

- The current hero is not pure Diego source.
- It keeps the current Reddystack copy, current Lottie animation, and current approved placement tweaks.
- Do not blindly revert this hero to Diego image markup unless the user explicitly asks for a full source rollback.
- If the goal is only readability, SEO copy, or color parity, edit text and color styles only.

## Current Content

Subtitle:

```text
Rahul Reddy / Founder, Reddystack
```

Desktop heading:

```text
We Design & Build
Websites, Mobile Apps & Landing Pages
Portfolios, Automation Scripts & MVPs
```

Mobile heading:

```text
We Design & Build
Websites, Apps & Landing Pages
Portfolios, Automations & MVPs
```

Desktop body copy:

```text
Founder-led digital builds for startups and small businesses that need
SEO-ready websites, product MVPs, and practical automation with clear scope.
Reddystack focuses on performance, usability, and conversion,
with premium execution for clients in Hyderabad, across India, and worldwide.
```

Mobile body copy:

```text
SEO-ready websites, MVPs, and automation for startups and small businesses,
delivered with clear scope and premium execution across India and worldwide.
```

CTA:

```text
Start
Your Project
```

## Current Hero Structure

- Left column: headline, paragraph, CTA, scroll indicator.
- Right column: Lottie illustration only.
- Marquee text runs behind the hero at the bottom.
- Social rail is positioned at the right side of the hero.

The component currently uses:

- `Lottie` from `lottie-react`
- animation file: `@/assets/lottie/hero-animation.json`
- renderer setting:

```tsx
rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
```

Do not change `preserveAspectRatio` unless the user explicitly wants the illustration repositioned again.

## Layout Rules That Keep The Current Design Stable

### Desktop And Tablet

- The hero right column is pushed toward the viewport edge at `min-width: 768px`.
- This is controlled by `.tp-hero-row > :last-child` in `_hero.scss`.
- The hero art itself is then offset further with `transform` on `.tp-hero-thumb`.

### Mobile

- The row becomes a vertical column layout.
- The thumb wrapper becomes absolutely positioned at the bottom of the hero.
- The Lottie is centered on mobile.
- Mobile body copy is intentionally shorter than desktop so it does not create too many wrapped lines and visually push the Lottie downward.

## Current SCSS Values

### Desktop Lock At `1200px+`

These values are intentionally fixed so larger desktop widths stay visually consistent:

```scss
--tp-hero-desktop-top: 98px;
--tp-hero-desktop-bottom: 27px;
--tp-hero-desktop-content-pr: 30px;
--tp-hero-desktop-subtitle: 18px;
--tp-hero-desktop-body: 17px;
--tp-hero-desktop-body-indent: 52px;
--tp-hero-desktop-title: 78px;
--tp-hero-desktop-content-shift: 19px;
--tp-hero-desktop-thumb-height: 492px;
--tp-hero-desktop-thumb-shift: 72px;
--tp-hero-desktop-btn-indent: 52px;
--tp-hero-desktop-social-bottom: 46px;
--tp-hero-desktop-social-right: 36px;
--tp-hero-desktop-marquee: 157px;
```

### Mobile Tokens

These values are the current approved mobile system:

```scss
--tp-hero-mobile-top: clamp(94px, 11.2svh, 112px);
--tp-hero-mobile-copy-gap: clamp(12px, 1.8svh, 18px);
--tp-hero-mobile-title: clamp(38px, 11.2vw, 52px);
--tp-hero-mobile-subtitle: clamp(15px, 4vw, 17px);
--tp-hero-mobile-body: clamp(15px, 4.1vw, 17px);
--tp-hero-mobile-art-width: clamp(248px, 72vw, 330px);
--tp-hero-mobile-art-height: clamp(216px, 29svh, 304px);
--tp-hero-mobile-title-offset: clamp(6px, 0.8svh, 10px);
--tp-hero-mobile-content-shift: clamp(6px, 1svh, 10px);
--tp-hero-mobile-body-top: clamp(18px, 2.8svh, 30px);
--tp-hero-mobile-bottom-pad: clamp(170px, 23svh, 230px);
--tp-hero-mobile-visual-bottom: clamp(4px, 0.8svh, 14px);
--tp-hero-mobile-cta-offset: clamp(22px, 3.8svh, 40px);
--tp-hero-mobile-social-bottom: clamp(20px, 3.2svh, 28px);
--tp-hero-mobile-social-right: clamp(12px, 3.8vw, 18px);
```

## Current Lottie Position Values

These are the active offsets for `.tp-hero-thumb`:

```scss
desktop: translate(-72px, calc(var(--tp-hero-desktop-thumb-shift) + 1%));
lg: translate(-60px, clamp(48px, 3.8vw, 62px));
md: translate(-40px, clamp(28px, 2.8vw, 38px));
xs: translate(0, clamp(16px, 2.4svh, 24px));
```

Meaning:

- Negative X values push the Lottie left.
- Positive Y values push the Lottie down.
- Mobile currently uses `X = 0` so the art stays centered.

## Current Color And Opacity Values

### Dark Theme

Hero paragraph in `_hero.scss`:

```scss
color: rgba($color: $white, $alpha: .7);
```

Hero marquee text:

```scss
opacity: .03;
```

### Light Theme

Hero paragraph in `_theme-light.scss`:

```scss
color: rgba(37, 37, 37, 0.70);
```

Light theme marquee text:

```scss
opacity: 0.04;
```

## Break Risk Notes

### Mobile copy can move the art

If the mobile paragraph becomes too long, the hero feels crowded and the Lottie appears visually lower even if the art transform does not change.

### The most sensitive rules are

- `.tp-hero-row`
- `.tp-hero-left-wrapper`
- `.tp-hero-content p`
- `.tp-hero-thumb`
- `.tp-hero-thumb-wrapper`
- `rendererSettings` in `HeroAreaHome.tsx`

## Safe Edit Rules

### If only copy needs updating

- Edit `hero_content` in `HeroAreaHome.tsx`.
- Keep desktop and mobile paragraph variants separate if mobile wrapping becomes excessive.

### If only hero readability needs updating

- Edit paragraph color in `_hero.scss` and `_theme-light.scss`.
- Do not change thumb transform values.

### If only Lottie position needs updating

- Edit `.tp-hero-thumb` transforms in `_hero.scss`.
- Change one breakpoint at a time.
- Desktop and mobile use different positioning logic. Do not assume one fix applies everywhere.

### If headline text changes

- Recheck mobile wrapping first.
- The current mobile heading is already shortened compared to desktop to prevent crowding.

## Do Not Change Without Explicit Approval

- Replacing the Lottie with a static image
- Reverting the hero fully to Diego image markup
- Changing hero height behavior
- Removing the `1200px+` desktop lock values
- Changing mobile centering logic for the Lottie

## Quick Summary

The current approved hero depends on three things staying in sync:

- short mobile copy
- centered mobile Lottie with small downward offset
- locked desktop art placement with left-shifted thumb transforms

If the hero breaks after future edits, check those three areas first.
