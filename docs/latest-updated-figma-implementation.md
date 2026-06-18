# Latest Updated Figma Implementation

## Source

- Figma file: `MattermostUI`
- Design node: `Latest Update` (`372:205`)
- Implemented page node: `LucrativenessEIA` (`389:330`)
- Project route: `/equity-indexed-annuity`

## What Changed

- Replaced the previous EIA route body with `LatestUpdatedEIA`.
- Preserved the existing global navigation and footer so sitewide behavior remains consistent.
- Reused the existing `/eia-img1.png` glass-building image for the hero.
- Added shared spacing and radius tokens in `app/globals.css`.
- Added stronger root metadata, EIA route metadata, `robots.ts`, and `sitemap.ts`.

## Image Inventory

Current implementation uses existing assets:

- `/eia-img1.png` - hero glass-building image.
- `/Heroic protection.png` - root Open Graph fallback image.

Optional future replacements from the Figma design:

- `/latest-updated-eia-hero.png` - use if the final hero image should differ from `/eia-img1.png`.
- `/latest-updated-og.png` - recommended 1200x630 social sharing image.

## Spacing System

Use the shared spacing tokens instead of one-off values:

- `--space-1` = 4px
- `--space-2` = 8px
- `--space-3` = 12px
- `--space-4` = 16px
- `--space-6` = 24px
- `--space-8` = 32px
- `--space-12` = 48px
- `--space-16` = 64px

Cards should stay at `--radius-md` or below unless a page-specific design requires otherwise.

## SEO Notes

- Root metadata now includes title templates, canonical URL, Open Graph, Twitter card, and robots directives.
- The EIA route has route-specific title, description, canonical URL, and Open Graph image data.
- `app/sitemap.ts` should be updated whenever public routes are added, renamed, or removed.
- Replace `https://mattermostinsurance.com` if the production domain changes.

## Technical Recommendations

- Move repeated page copy into typed content arrays or CMS-backed records when Sanity content is ready.
- Add a project-level `Design QA` checklist for viewport checks at 390px, 768px, 1024px, and 1440px.
- Consider adding static Open Graph images per major route once final brand imagery is approved.
- Keep new page sections server-rendered unless interaction requires client state.
