# WITEC Dual-Division Merge — Phased Plan

This is a very large build (8 pages, new state system, dynamic theming, two full content sets, new 3D scene, dozens of services/projects). To keep quality high and avoid token blowups, I'll ship it in **3 phases**, each ending in a working, verifiable state. Block 1 will be split into 1A and 1B because it alone is bigger than a single safe turn.

I'll keep **all existing BIM content untouched** — only add the Construction layer alongside it.

---

## Phase 1A — Foundation (this turn)

The plumbing everything else depends on.

- `src/contexts/DivisionContext.tsx` — Context + `useReducer` (`SET_DIVISION`, `TOGGLE_DIVISION`), `useDivision()` hook, localStorage (`witec-division`) + URL `?division=` sync, sets `data-division` on `<html>`.
- `src/index.css` — Add `[data-division="bim"]` and `[data-division="construction"]` CSS variable blocks (accent primary/secondary/tertiary/glow, gradient-hero). Existing tokens stay.
- `src/App.tsx` — Wrap tree in `DivisionProvider`.
- `src/components/DivisionToggle.tsx` — Pill toggle with sliding indicator (Framer Motion spring), icons, `role="tablist"` + `aria-selected`, mobile full-width variant.
- `src/components/Navbar.tsx` — Mount `<DivisionToggle />` (desktop: between links and CTA; mobile: sticky bar under navbar).
- `src/components/DivisionContent.tsx` — `{ bim, construction }` wrapper using `AnimatePresence` (500ms fade/slide, stagger 50ms).
- `src/components/DivisionBadge.tsx` — Small pill badge.
- `src/components/AnimatedSection.tsx` — IntersectionObserver scroll-reveal wrapper.
- `src/components/Footer.tsx` — Always show both divisions (Dubai BIM + Nagpur Construction).

**Verify:** toggle switches theme accents live, persists across reload, URL param works, no regressions on existing pages.

---

## Phase 1B — Homepage + Services (next turn)

- `src/pages/Index.tsx` — Wrap hero, "Why WITEC", testimonials, sectors in `<DivisionContent>`. BIM side stays as-is. Construction side adds: new hero (green theme, KPIs, trust bar), construction 3D scene (`ConstructionSiteScene.tsx` — wireframe building + rotating crane via R3F), "What We Build" 6-card grid, construction "Why WITEC" list, 6-step construction process stepper, 6 construction testimonials, updated sector counts.
- `src/components/ConstructionSiteScene.tsx` — New R3F scene (BoxGeometry floors, CylinderGeometry columns, animated crane arm).
- `src/pages/Services.tsx` — Top-level tabs (BIM | Construction) bound to division state. BIM tab keeps existing 11 services. Construction tab adds all 20 services as cards (icon, title, description, tags, expandable detail) + 8-step construction process stepper.

**Verify:** division toggle drives both pages, construction 3D scene renders, no console errors.

---

## Phase 2 — Projects + About + Technology

- `src/pages/Projects.tsx` — Division filter pills (All | BIM | Construction) wired to context + existing category filters. Add 8 detailed BIM projects + 7 Construction projects with division/category badges and hover-reveal disciplines.
- `src/pages/About.tsx` — Add Construction Division section, merged values, dual-color journey timeline (2019-2025 with construction milestones), Regulatory Compliance section (BIM standards | Construction IS codes), unified org chart (BIM team + Construction team under CEO).
- `src/pages/Technology.tsx` — Wrap in `<DivisionContent>`. BIM side unchanged. Construction side: 6 Core Tech cards (metrics), 3 Future Tech, 4 Safety, 3 Environmental, Equipment Fleet grid, Certifications grid.

---

## Phase 3 — Contact + SEO + polish

- `src/pages/Contact.tsx` — Add Nagpur Construction office card, Division select in contact form, Registrations & Certifications section.
- SEO — `react-helmet-async` (install if missing) for dynamic per-division `<title>`/`<meta>` on Home, Services, Projects, Technology; LocalBusiness JSON-LD for Dubai + Nagpur.
- `src/i18n/translations.ts` — English keys for all new strings (per earlier decision, English-only for new content).
- Lazy-load Construction-heavy components with `React.lazy` + `Suspense`.
- Final pass: a11y (focus-visible per division), `loading="lazy"` on images, accessibility audit of toggle.

---

## Technical notes

- **State**: React Context + `useReducer`; `useDivision()` returns `{ division, setDivision, toggle }`. URL param wins on first load if present, else localStorage, else `'bim'`.
- **Theming**: All new components reference `var(--accent-primary)` etc. — never hardcoded hex. Existing shadcn tokens (`--primary`, `--background`) stay intact so light/dark mode still works on top of division accents.
- **Animations**: `AnimatePresence mode="wait"` with `initial/animate/exit` opacity + y; stagger via `staggerChildren: 0.05`.
- **R3F**: Reuse the project's pinned versions (`@react-three/fiber@^8.18`, `@react-three/drei@^9.122`).
- **No backend changes.** No new tables, no edge functions.

## Out of scope (will not touch)

- Existing BIM copy, existing 3D scene, theme system (light/dark stays), i18n for the 7 non-English locales (Construction strings English-only as previously agreed), Supabase, auth.

---

**Reply "go" (or "approve") and I'll start Phase 1A immediately.** If you'd rather I batch differently (e.g. do 1A+1B in one turn and risk a partial result), say so.
