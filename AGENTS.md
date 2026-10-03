# Project Architecture Rules

- Keep BIM and Construction content isolated through `DivisionRoute`; each construction page reads construction-only data so division content cannot leak.
- Keep interactive BIM geometry procedural and low-poly with capped device pixel ratio; this preserves mobile rendering performance without external model fetches.
- Generate the illustrative BIM viewer from element metadata shared by geometry and inspection controls; this keeps displayed quantities and element identification consistent.
- Treat the site header as normal document flow rather than fixed or sticky; this prevents page content and controls from being obscured.
- Use `DivisionSEO` for route-aware canonical and social metadata while `index.html` provides one clean sitewide fallback; this avoids duplicate metadata ownership.
