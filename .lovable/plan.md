
# WITEC Dual-Division Integration — Execution Plan

The scope you sent is enormous (8 pages + 3D viewer + SEO + footer + ~30 new content items + 3 new 3D layers). To keep quality high and credits efficient, I'll ship it in 5 focused phases. After each phase you preview, then say "continue" to trigger the next.

---

## Phase 1 — Foundation, Hero & Homepage Content
- Dynamic SEO meta (title + description swap per division) via a small `<DivisionSEO/>` helper using react-helmet-async.
- Homepage hero: replace current copy with exact BIM / Construction headlines, subheadlines, badges (ISO 19650 / IS 456…), animated KPI counters (150+ BIM Projects vs 50+ Construction Projects), 4 rotating slides per division.
- Homepage section ordering per division (BIM: Dimensions → Viewer → 6 Services → 6-step BIM workflow → Why WITEC BIM (8 pts) → Featured BIM Projects → Tech Stack → Standards → Testimonials. Construction: What We Build → 6 Services → 8-step Process stepper → Why WITEC Construction (12 pts) → Sectors → Featured Construction Projects → Tech Stack → IS Codes → Testimonials).
- Footer division-aware: links, phone priority (Dubai vs +91 8177997522), standards row, RERA/PWD/CPWD badges in construction mode.

## Phase 2 — Projects, Services, Testimonials Data
- Add 7 new Construction projects + 4 new BIM projects to `constructionContent.ts` / `projectsContent.ts` (new file).
- Projects page: division filter pill (All / BIM / Construction) auto-synced to global toggle, category filter inside.
- Services page: add BIM 6-step workflow section, Construction 8-step process + Materials We Use + Material Testing section, timeline badges on cards.
- 6 new Construction testimonials wired into homepage testimonial slot, fully separated from BIM ones.

## Phase 3 — Technology, About, Insights, Careers, Contact
- Technology page Construction mode: Core Tech (6 metric cards), Equipment Fleet (12), Safety (4 red), Environmental (3 green), Future Tech (3), Certifications grid. BIM mode: add Automation + Interoperability sections.
- About page: BIM Division card vs Construction Division card; full Regulatory Compliance block (IS codes, ISO certs, RERA/PWD/CPWD); team-role emphasis swap.
- BIM Insights → page heading flips to "Construction Insights" with 6 new construction articles when in construction mode.
- Careers: 3 new construction roles + division-aware sorting.
- Contact: Construction office card (Sadar, Nagpur, +91 8177997522), registrations badge row, Division dropdown in form (auto-selects active division).

## Phase 4 — 3D BIM Viewer Overhaul
Rebuild `BIMLayerViewer.tsx` with a believable building:
- Existing 4 layers detailed (column grid + footings + core for Structural; windows/doors/balconies/parapet for Architectural; trunk+branch HVAC, water risers, drainage, sprinklers for MEP; partitions + bathroom pods + kitchen + false ceiling for Interior).
- 3 new layers: Facade (curtain wall + mullions + louvers + canopy), Landscape (paving + trees + parking + compound wall + fountain), Infrastructure (UG tank + STP + substation + RWH + road).
- Layer toggles show name + element count + key elements list + colored ON/OFF state + discipline icon.
- Keep perf: dpr [1,1.5], antialias off, instanced meshes where possible.

## Phase 5 — Polish & Verification
- AnimatePresence transitions on every division-swap section.
- Mobile responsiveness pass for new grids/steppers.
- Run typecheck + walk every route via Playwright in both divisions, capture screenshots, fix console errors.
- Tick the checklist from your brief and report any item that can't be auto-completed (e.g. logos for "Materials We Use" needs you to confirm brands).

---

## Technical notes
- New files: `src/components/DivisionSEO.tsx`, `src/data/projectsContent.ts`, `src/data/insightsContent.ts`, `src/data/careersContent.ts`, `src/components/ConstructionProcessStepper.tsx`, `src/components/WhyChooseWITEC.tsx`.
- Install `react-helmet-async` for per-division `<title>`/`<meta>`.
- Reuse existing `useDivision()` + `DivisionContent` + `data-division` CSS variables — no architecture changes.
- All hardcoded English copy goes into `src/i18n/translations.ts` so the 8-language system keeps working (Arabic RTL preserved).

## Open questions before I start
1. **Phase 1 only first, or batch 1+2 in one go?** Batch 1+2 is ~double the credits but ships the most user-visible content in one shot.
2. **"Materials We Use" brand logos** (UltraTech, Tata Steel, JSW, Asian Paints, Jaquar, etc.) — OK to use text/badge tiles, or do you want generated logo-style images?
3. **BIM project images** for the 4 new BIM projects — generate AI renders, or use existing hero BIM assets as placeholders?

Reply with answers (or just "go phase 1") and I'll start.
