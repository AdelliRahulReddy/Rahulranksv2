# Home Projects Section Swap Plan

## Objective

Replace the homepage use of the `home-3` projects section with the cloned `home-2` projects slider while preserving the standalone `home-3` route and avoiding regressions.

## Current Dependency Map

### TypeScript / TSX

- `src/components/homes/home/index.tsx`
  - Imports and renders `../home-3/ProjectAreaHomeThree` on the main homepage.
- `src/components/homes/home-3/index.tsx`
  - Imports and renders `./ProjectAreaHomeThree` on the standalone `home-3` route.
- `src/components/homes/home-3/ProjectAreaHomeThree.tsx`
  - Current `home-3` projects implementation used by the homepage and `home-3`.
- `src/layouts/Wrapper.tsx`
  - Calls `PortfolioPanel()` on route changes.
- `src/components/portfolio-details/PortfolioDetailsArea.tsx`
  - Still uses `.tp-project-3__area` and `.portfolio-panel`, so the `PortfolioPanel` utility cannot be removed safely.

### JavaScript

- `src/utils/PortfolioPanel.js`
  - Targets `.portfolio-panel` and uses `.tp-project-3__area` as the `endTrigger`.
  - This remains required for `portfolio-details` and the standalone `home-3` route.

### SCSS / CSS

- `public/assets/scss/layout/pages/_portfolio.scss`
  - Contains styles for:
    - `.tp-portfolio-item-2`
    - `.tp-portfolio-meta-2`
    - `.tp-portfolio-title-2`
    - `.tp-portfolio-view`
    - `.tp-portfolio-shape-2-1`
    - `.tp-portfolio-item-3`
    - `.tp-project-3__area`
- `public/assets/scss/components/_carousel.scss`
  - Contains the 3D slider styles for:
    - `.tp-3d-slide-container`
    - `.tp-3d-slide-arrow`
    - `.tp-3d-slide-wrapper`
    - `.tp-3d-slide`
- `public/assets/scss/layout/pages/_theme-light.scss`
  - Contains theme-light overrides for:
    - `.tp-3d-slide-container .tp-3d-slide-arrow`
    - `.tp-portfolio-shape-2-1`

## Source Clone Dependency Map

### Source files used

- `C:\Users\adell\Documents\diego-next-js\src\components\homes\home-2\TestimonialAreaHomeTwo.tsx`
- `C:\Users\adell\Documents\diego-next-js\src\data\TestimonialData.ts`

### Source section dependencies already available in the current repo

- `public/assets/img/portfolio/2/portfolio-1.jpg`
- `public/assets/img/portfolio/2/portfolio-2.jpg`
- `public/assets/img/portfolio/2/portfolio-3.jpg`
- `public/assets/img/portfolio/2/portfolio-4.jpg`
- `public/assets/img/portfolio/2/portfolio-5.jpg`
- `public/assets/img/portfolio/shape-3.png`
- Existing SCSS already compiled through `src/styles/index.scss`

## Safe Implementation Steps

1. Add the cloned `home-2` projects component to `src/components/homes/home-2/TestimonialAreaHomeTwo.tsx`.
2. Restore a local `src/data/TestimonialData.ts` compatible with the source component.
3. Replace the homepage import in `src/components/homes/home/index.tsx` so the homepage renders the `home-2` projects section instead of `ProjectAreaHomeThree`.
4. Preserve `src/components/homes/home-3/ProjectAreaHomeThree.tsx` and `src/components/homes/home-3/index.tsx` unchanged so the standalone `home-3` route continues to work.
5. Leave `src/utils/PortfolioPanel.js` unchanged because it is still required by `portfolio-details` and the `home-3` route.
6. Leave SCSS imports unchanged because the current theme already includes the required `home-2` portfolio slider styles.
7. Replace the source DOM event wiring inside the cloned section with stable React click and touch handlers so the slider does not accumulate listeners on re-render.
8. Keep the source slider styles intact and adapt only the section wrapper spacing needed for the homepage flow.
9. Run a production build to validate imports, assets, styles, and route compilation.
10. Run route smoke tests for `/`, `/home-3`, and `/portfolio-details` to confirm the swap does not break the app.

## Safe Removal Notes

- Removing `ProjectAreaHomeThree` from the homepage is safe.
- Deleting `ProjectAreaHomeThree.tsx` from the codebase is not safe unless the standalone `home-3` route is also retired or redesigned.
- Deleting `PortfolioPanel.js` is not safe because `portfolio-details` still depends on its selectors and scroll behavior.
- No route configuration changes are required because the homepage swap is done inside `src/components/homes/home/index.tsx`.
- No SCSS file edits are required because the cloned `home-2` section already matches the compiled slider and portfolio class names in the current theme.

## Implementation Result

- Homepage now renders `src/components/homes/home-2/TestimonialAreaHomeTwo.tsx`.
- Standalone `home-3` still renders `src/components/homes/home-3/ProjectAreaHomeThree.tsx`.
- `portfolio-details` still retains the `tp-project-3__area` and `portfolio-panel` structure required by `src/utils/PortfolioPanel.js`.
- The cloned `home-2` section needed one React adaptation for click and touch handling.
- The homepage integration also needed a small section-spacing adjustment so the slider cards sit cleanly above the next homepage section.
- No asset or route-config customization was required.

## Verification Results

- `npm run build` completed successfully.
- Headless Edge rendered DOM checks confirmed:
  - `/` contains `tp-3d-slide-container`, `tp-portfolio-item-2`, `GitWall App`, and `Bachelor Brother`.
  - `/home-3` still contains `tp-project-3__area`, `Featured Projects`, and `portfolio-panel`.
  - `/portfolio-details` still contains `tp-project-3__area`, `portfolio-panel`, and `Overview`.
