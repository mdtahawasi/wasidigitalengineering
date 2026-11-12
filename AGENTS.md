# Project Architecture Rules

- Keep BIM and Construction content isolated through `DivisionRoute`; each construction page reads construction-only data so division content cannot leak.
- Keep interactive BIM geometry procedural and low-poly with capped device pixel ratio; this preserves mobile rendering performance without external model fetches.
- Generate the illustrative BIM viewer from element metadata shared by geometry and inspection controls; this keeps displayed quantities and element identification consistent.
- Keep the site header `sticky top-0` (never `fixed`); it stays reachable while occupying its own space so content is never obscured.
- Use `DivisionSEO` for route-aware canonical and social metadata while `index.html` provides one clean sitewide fallback; this avoids duplicate metadata ownership.
- Keep concise route metadata in the shared SEO configuration and derive page schemas from the active division; this prevents duplicate titles and cross-division service claims.
- Derive service schemas from the displayed service catalog and FAQ schema from the same localized content rendered on services pages; this prevents unsupported or hidden structured-data claims.
- Keep original hero assets and serve responsive WebP renditions through the shared image source map; this reduces mobile transfer without changing the depicted content.
- Identify illustrative BIM elements by discipline, level, family and local sequence; this keeps floor-cutaway identifiers stable without treating diagram units as engineering dimensions.
- Use the shared company facts configuration for owner-confirmed contacts and identity; this keeps both divisions consistent without mixing their service data.
