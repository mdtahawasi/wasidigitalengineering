# Technical SEO + metadata migration to witecglobal.com

Move all SEO signals off the temporary `witecglobal.lovable.app` domain and onto the production domain `https://witecglobal.com`, plus add the requested title, description, canonical, Open Graph, and ConstructionBusiness schema.

## What changes

### 1. `public/robots.txt`
Replace the current multi-block file with the exact three-line version: allow all crawlers, and point `Sitemap:` at `https://witecglobal.com/sitemap.xml`.

### 2. `public/sitemap.xml`
Rewrite for `https://witecglobal.com` with these URLs only:
`/`, `/?division=bim`, `/?division=construction`, `/about`, `/services`, `/projects`, `/technology` — all with `weekly` changefreq. No `.lovable.app` references remain. No `<lastmod>` values (there is no authoritative per-page timestamp in the project, and a generated date would be misleading).

### 3. `index.html` head
- `<title>` → "Witec Global | Top Construction & Civil Engineering in Nagpur & West Bengal"
- `<meta name="description">` → the provided Nagpur/West Bengal copy
- `<link rel="canonical">` → `https://witecglobal.com/`
- Open Graph: `og:title`, `og:description`, `og:url` (`https://witecglobal.com/`), `og:type` (website); Twitter title/description kept in sync
- Update every other hardcoded `witecglobal.lovable.app` URL in the head — hreflang alternates, `og:image`/`twitter:image` (currently an expiring signed Google Storage URL, which should be dropped so hosting injects a valid preview), and the `url`/`@id`/`logo` fields inside the existing Organization, LocalBusiness (Nagpur, Kolkata, UAE), ProfessionalService, and WebSite JSON-LD blocks.

### 4. ConstructionBusiness JSON-LD
Add the provided `ConstructionBusiness` schema block (Sadar Nagpur address, areaServed Nagpur/Kolkata/West Bengal/Maharashtra) to the head, alongside the existing schemas.

### 5. `src/components/DivisionSEO.tsx`
Its `SITE` constant is still `https://witecglobal.lovable.app` and it emits per-route canonical + og:url on every page. Change it to `https://witecglobal.com` so route-level canonicals don't contradict the new domain.

## Technical notes
- Two canonicals would otherwise ship on every route (static one in `index.html` plus the Helmet one). The static canonical stays as the crawler fallback for the homepage; the Helmet canonical self-references each route.
- This is a static Vite SPA, so social crawlers only read `index.html`; per-route Helmet tags are visible to JS-executing crawlers like Googlebot.
- After the change, `https://witecglobal.com` must actually resolve to this app (custom domain connected in project settings), otherwise the canonical points at a dead URL. Worth confirming before publishing.
- "Push to GitHub" is handled by the platform's GitHub sync, not by me running git commands — the edits land in the project and sync on the next push.
