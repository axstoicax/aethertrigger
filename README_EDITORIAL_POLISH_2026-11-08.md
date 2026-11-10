# EDITORIAL POLISH — 8 November 2026

This repository retains the **previously approved design**, navigation, images, legal pages and product/brand positioning. The only public-facing content change is the **About** page, with corresponding About-page JSON-LD and the crawl-summary file `llms-full.txt`.

## Editorial direction
- The user's approved LinkedIn and Etsy final copy was used as the factual and tonal reference.
- Founder story is told with restraint, not pity, dramatization or sales pressure.
- A consistent `Person` @id is used across all sites: `https://getverticalfoundry.com/#founder`.
- Individual `AboutPage` descriptions are appropriate to each website's audience.
- The medical experience from 2024 is disclosed on the public About page with the founder's explicit approval, but is **not** newly repeated in machine-readable Person descriptions.

## Deployment
- Upload all **contents** of this repository (not the enclosing folder) to its own GitHub repository.
- Import each repo into its own Vercel project. For Next.js sites, use Next.js preset, install dependencies and run `npm run build`.
- Review the live `/about/` page, page source JSON-LD, and existing pages.
- Confirm domain configuration, HTTPS and live forms / legal review before declaring GO LIVE.

## Scope preserved
VerticalFoundry: 8 routes including `/store/` with 37 general FAQs and `/products/` separate from Etsy.
Quant Data: static 7-route corporate site, `/brands/` listing both brands.
AetherTrigger: 7-route cinematic Next.js site with approved logo Variant 2, Sora/Manrope, correct corporate footer link and Google Preferred Sources.

This release has passed **static validations**, but an actual Next.js production build must be verified in Vercel if dependencies are unavailable locally.
