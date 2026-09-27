# WITEC responsive, SEO, and BIM viewer upgrade

## Goal
Make the dual-division website easier to navigate, stable on narrow screens, more discoverable, and clearer when exploring BIM disciplines—without mixing BIM and Construction content.

## Changes

### 1. Advanced SEO foundation
- Clean duplicated and conflicting metadata/schema in the site head while preserving `https://witecglobal.com` as the requested production canonical domain.
- Add the missing favicon link and a concise `llms.txt` covering every public route for AI search assistants.
- Strengthen page-specific titles, descriptions, canonical links, Open Graph data, and relevant structured data for BIM and Construction views.
- Improve semantic heading hierarchy and accessible labels where needed; avoid keyword stuffing and unsupported ranking claims.
- Keep the sitemap synchronized with all public routes, including About, Services, Projects, Technology, Careers, Contact, and BIM Insights.

### 2. Unlocked, collision-free header
- Change the header from fixed to normal page flow so it never locks over page content.
- Remove the compensating top offset from page layouts.
- Rebalance logo, controls, division selector, and navigation breakpoints so desktop items stay on one readable line only when space allows.
- Use the compact menu earlier on narrower desktop/tablet widths and keep dropdowns inside the viewport.

### 3. Mobile and desktop fit
- Constrain long headings, controls, cards, modals, and floating chat controls to the available viewport.
- Reduce mobile visual load and motion where appropriate, while preserving smooth transitions and reduced-motion support.
- Verify key pages at mobile and desktop sizes for horizontal overflow, overlap, clipped text, broken navigation, and browser errors.

### 4. Detailed “Explore a BIM Model Live” experience
- Upgrade the model into clear, independently identifiable disciplines: Structural, Architecture, HVAC, Plumbing, Electrical/Fire, and Interiors.
- Add a focused discipline mode, all-layers mode, visibility toggles, clear color legend, element counts, and plain-language element descriptions.
- Improve geometry so ducts, pipes, trays, panels, columns, beams, slabs, walls, glazing, rooms, and vertical service routes are visually distinct.
- Add selected-discipline emphasis and useful model status information while keeping low-poly geometry, capped pixel density, and touch-friendly controls.

## Technical details
- Preserve React 18-compatible Three.js packages already installed.
- Keep BIM geometry procedural and lightweight; reuse geometry/materials and avoid network-loaded 3D assets.
- Use existing design tokens and shared controls for all new interface elements.
- Validate with the app’s build signal plus Playwright screenshots and interaction checks at 390px mobile and 1280px desktop widths.
- Record lasting architecture decisions in `AGENTS.md` and keep the task checklist in `roadmap.md` until verification is complete.

## SEO scan notes
The current scan confirms the page is reachable, rendered for crawlers, and has baseline search/social metadata. It also reports a missing favicon and flags the sitemap/robots host because the connected published URL is currently `witecglobal.lovable.app`, while the source intentionally targets the requested `witecglobal.com` production domain. The favicon will be fixed now; domain-specific scanner findings will remain unresolved unless the custom domain is connected.
