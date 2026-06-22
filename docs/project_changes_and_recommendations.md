# Matter Most Insurance - Project Changes & Recommendations

This document outlines the recent refactoring, cleanups, and layout alignments performed on the Matter Most Insurance codebase, followed by recommendations for future improvements.

---

## 1. Summary of Changes

### Codebase & Route Cleanup
- **Deleted Legacy Routes**: Removed the redundant and unused `/products` and `/config` routes (`app/products` and `app/config` directories) to prevent compile conflicts and eliminate obsolete page logic.
- **Removed Unused Components**: Deleted legacy navbars (`NavTwo` and `NavThree`) from `components/navbars` to keep the codebase lean and clean.
- **Deleted Dead Directories**: Removed the empty `components/products` directory.

### Link Normalization (`/products` ➔ `/services`)
- Since the products feature was retired in favor of the **Protections Overview** page (`/services`), all buttons and links in the project have been updated to point to `/services`:
  - Main navigation menu items and CTA buttons.
  - Final CTA section on the Homepage.
  - Links in Benefits, Lucrativeness, and Providers pages.
  - Next.js `sitemap.ts` routing configuration.

### Design & Feature Updates
- **Dismissible Sidebar Ads**: Implemented client-side state and close (`X`) buttons on sidebar ad cards in `ServicesSidebar.tsx` so users can dismiss promotional spaces.
- **Figma Alignment on Lucrativeness Page**:
  - Arranged intro cards in a 2x2 grid.
  - Customized the layout using the exact background color `#F1F4F6` and spacing.
  - Styled accordion elements as white cards arranged in a 3-column layout.
  - Enlarged and bolded accordion status indicators (Plus sign).
- **Layout, Responsiveness & Routing Fixes**:
  - **Standardized Page Stacking**: Configured all outer layout wrappers to use `flex flex-col` (instead of unstacked `flex`) across Home, About, Affiliate, Claims, Compliance, Contact, Hero Stories, Join Us, and Privacy pages to stack content vertically.
  - **Fixed Lucrativeness Page Squeezing & Overflow**: Overrode fixed pixel widths (`394px` and `805px`) of the Lucrativeness page intro columns with `width: 100%` on mobile and tablet media queries. Appended missing mobile breakpoints for the 3-column accordion grid and other cards grids to wrap to `1fr` layouts.
  - **Elastic Mobile Tabs**: Refactored tab selection blocks on the Benefits, Providers, and Lucrativeness pages to flex-wrap cleanly and center-align on narrow screens, avoiding clipped button overflows.
  - **Paddings & Grid Adjustments**: Reduced layout padding (down to `20px` / `16px`) and adjusted column min-widths for Articles, Blog Details, and Support pages on viewports below `768px`/`480px` to eliminate any possible horizontal scroll.
  - **Providers Link Routing**: Mapped CA and US tab filter requests cleanly under the Providers page.

### UI Designer Adjustments & Round 2 Responsiveness
- **Global Layout & Overflow Fixes**:
  - Enforced `overflow-x: hidden; max-width: 100%;` on `html` and `body` in `app/globals.css`, adding text word-breaking rules.
  - Set container max-width variable `--container: 1280px` to cap layout widths correctly.
  - Increased navbar mobile collapse breakpoint from `1180px` to `1280px` in `MainNav.module.css` to prevent menu overflows on medium screens.
- **Homepage Plan Icons**:
  - Standardized all 4 protection plan cards in `ProtectionPlanSection.tsx` to use `/Encrypted.png` as requested.
- **EIA Header Underline Gap**:
  - Moved the underline stroke closer to the "Precision Features" header in `EIAFeatures.module.css` by reducing vertical spacing.
- **Lucrativeness Accordions**:
  - Set `align-items: start;` in `lucrativeness.module.css` to prevent sibling cards in the same grid row from stretching when an accordion expands.
- **Letter Spacing**:
  - Removed letter spacing (`letter-spacing: 0`) in the homepage sections "More Than Protection..." and "Protection Is Not Just...".
- **Footer Social Icons**:
  - Replaced icon components in `MainFooter.tsx` with custom inline SVGs (LinkedIn, X official logo, Instagram, and Facebook) using a stroke-width of 2.5 for bold, consistent rendering.
- **Providers Page Mobile Layout**:
  - Resolved mobile horizontal overflow in the Providers page by reducing card padding (down to `10px` on mobile), setting `.imageWrapper` height to `50px` to scale down Next.js logo images cleanly, and switching to a compact 2-column logo grid on small screens (< 480px) to prevent layout breakages.
- **Dropdown Menu Hover Box Widths**:
  - Adjusted dropdown items in `MainNav.module.css` to use a `margin: 0 8px` and `border-radius: var(--radius-sm)` so they display with clean inset boundaries. Added `overflow: hidden` on `.dropdownMenu` to clip bleed-through, and removed the layout-shifting `padding-left: 2px` rule on hover to secure alignment.

---

## 2. Future Recommendations & Considerations

### 1. Dynamic Content via Sanity CMS
- **Current State**: Blogs, FAQs, and providers data are statically hardcoded in local files.
- **Recommendation**: Set up schemas in Sanity Studio to fetch these elements dynamically using GROQ/GraphQL queries. This allows the client to update articles, FAQ pairs, and partner logos directly from the CMS without code deploys.

### 2. Standardization of Styling & Tokens
- **Current State**: Component CSS files (e.g. `iul-tokens.css`, `ltc-tokens.css`) contain custom CSS variables and utility configurations.
- **Recommendation**: Consolidate these tokens into a single design system, or leverage Tailwind CSS configurations inside `tailwind.config.ts`. This ensures a single source of truth for spacing, typography, and color schemes.

### 3. Image & Asset Optimization
- **Current State**: Large image assets (e.g., P1 to P18 logos, design mockups) are placed in the `public` folder and loaded using native HTML `<img>` elements.
- **Recommendation**:
  - Convert PNG and JPG files to highly-optimized **WebP** or **AVIF** formats.
  - Refactor all `<img>` tags to Next.js `next/image` (`<Image />` components) to benefit from automatic layout shifting prevention, lazy loading, and responsive resizing.

### 4. Database-Backed Pagination
- **Current State**: Pagination controls on pages like Articles and Providers are visual representations with basic toggle state.
- **Recommendation**: Integrate dynamic query parameters (`?page=2`) that hook into Sanity or a relational database, fetching only the records needed for that specific page view to optimize load performance.
