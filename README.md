# AetherTrigger — Cinematic Website v1.3

**Status:** Deploy-ready source package (not yet tested on public Vercel deployment).

A Next.js App Router website that implements the dark cinematic AetherTrigger design approved 30 October 2026. The code renders seven pages, uses the approved **Variant 2** brand mark, the Sora / Manrope font system, Schema.org JSON-LD, and provides an always-visible Google Preferred Sources deeplink.

## Prerequisites

- GitHub repository for `aethertrigger.com` (separate from Quant and VerticalFoundry).
- Node.js 20.9+ and an internet connection for installing npm dependencies.
- Vercel project linked to that repository, with Framework Preset **Next.js**.

## Deploy

1. Extract this ZIP and upload its **contents**, not the enclosing directory, to the root of the GitHub repository.
2. Import the GitHub repository into Vercel. Select **Next.js**.
3. Run Build Command `npm run build` (declared in `package.json`). The project uses Next.js static export (`output: 'export'` in `next.config.mjs`). Vercel detects it automatically.
4. Open the deployment preview and verify all seven pages and the footer before connecting `aethertrigger.com`.
5. Point DNS to the domain configuration displayed by Vercel, enable HTTPS, then verify Search Console ownership and submit `https://aethertrigger.com/sitemap.xml`.
6. Verify the brand is eligible for Google's preferred sources tool; Google does not guarantee eligibility for every site.

## Routes

- `/` — cinematic homepage with benefits and Google Preferred Sources CTA
- `/products/` — prelaunch product direction
- `/about/` — company and founder
- `/contact/` — mailto-based contact form + 10 FAQs
- `/terms-of-service/`
- `/privacy-policy/`
- `/privacy/` — cookie and privacy preferences

## Important details

- **Approved logo:** `/public/logos/aethertrigger-emblem-v2.png` (transparent PNG, not an original vector SVG); used in the header and in Schema.org.
- **Hero and about artwork:** crops derived from the user's approved generated mockup; treated strictly as decorative imagery, while headlines, navigation, CTAs and the footer are HTML.
- **Typography:** Sora headings and Manrope body, loaded from Google Fonts with system-font fallbacks.
- **Parent-company credit:** only the anchor text `Quant Data Intelligence LLC` links to `https://www.quantdataintel.com/` on every page; no redundant company URL appears below it.
- **Preferred Sources CTA:** `https://www.google.com/preferences/source?q=aethertrigger.com` as documented by Google. It opens the Google selection flow in a new tab; the user must complete the selection. Availability depends on Google indexing/eligibility.
- **Stage of business:** development. The site does **not** claim that scanning, monitoring, automated alerts or commercial features are currently available.
- **Contact:** the form uses a `mailto:` handoff; it is not a server-side email form. Verify the recipient address `hello@quantdataintel.com` operationally.
- **Legal:** Terms and privacy information are prelaunch drafts and require a final business/legal review before publication.
- **Structured data:** Corporation / two Brand nodes / founder, with owner relations, EIN as supplied by the operator and contact details; check with the Schema.org Validator after public launch.
- **No secrets** or environment variables are included.

## Quality checks

`npm run validate` runs the repository's seven-page, structured-data, brand and attribution checks.

Visual browser testing in this handoff rendered all seven routes at 1440 and 390 px from source JSX (14 screenshots): no missing images or horizontal overflow, and Google Preferred Sources / corporate attribution links were inspected. Full `next build` could not be run inside the artifact-generation runtime because npm dependency installation was unavailable; **Vercel build and public QA are required before GO LIVE**.

## Source sites

- Corporate: https://www.quantdataintel.com/
- Brand: https://aethertrigger.com/
- Related brand: https://getverticalfoundry.com/
