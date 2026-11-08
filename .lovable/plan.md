# Premium AEC design and motion upgrade (no content changes)

Every name, contact detail, service, project, statistic and line of copy stays exactly as it is. Only the visuals, motion and layout change, across both divisions and all pages.

## 1. 3D depth
- Hero parallax: the background image, a blueprint/wireframe layer and the headline each move at a different speed as you scroll. Uses transforms only, so nothing shifts on the page.
- Project and service cards tilt slightly and lift on hover, desktop only.
- A lightweight rotating isometric building wireframe (CSS-3D/SVG, no heavy 3D engine), placed beside the hero text or in the Technology section, so it never sits behind headings.

## 2. Motion
- Sections, headings and cards fade in and rise slightly as you scroll, in staggered order.
- Smooth page transitions (kept short).
- Counters show their real final values straight away, then count up once visible and always stop at the exact real number. Without animation, the real number shows.
- Navigation bar: stays at the top while scrolling, in a compact frosted style that never covers content. Smooth anchor scrolling, and the current section is highlighted. Note: this reverses your earlier "don't lock the header" request. If you'd rather keep the header unlocked, say so and I'll keep it in normal flow.

## 3. Interactivity
- Projects pages (both divisions): a gallery with hover overlays showing the existing project name, sector and location, plus category filters that work and change smoothly.
- Every button and call to action: hover lift, the arrow shifts, a clear keyboard focus ring, and a slight press-down effect on main buttons.

## 4. Palette and typography
- Keeps the teal/green brand accent and adds deep navy and charcoal contrast with clean whites, in both light and dark mode.
- Clear difference between divisions: BIM and Engineering uses a teal/cyan accent and a blueprint grid texture. Construction uses the teal/green accent with warm steel/amber details and a concrete-style texture.
- One consistent scale for heading sizes, more space between sections, and less clutter.
- Fix overlaps: wireframe graphics will no longer sit over headings on the Services page or the Construction hero.
- Contrast check so every heading and paragraph on dark backgrounds is easy to read.

## 5. Responsive and performance
- No sideways scrolling, tap targets at least 44px, and no buttons that overlap or get cut off (including the WhatsApp and AI chat buttons).
- On mobile, parallax and tilt are turned off and other animation is lighter. If a device has reduced motion turned on, all motion is turned off.
- Hero images: the first one loads with high priority and has a solid colour behind it, so the hero is never blank.

## 6. Faint hero headings
- Fix the hero headings on Services, Projects, About and Careers (both divisions) so they're fully visible as soon as the page loads, with no fade-in from invisible.

## Verification
- Check every page in both divisions at desktop (1280px) and mobile (390px) for sideways scrolling, overlaps, heading visibility on load, counter final values, working filters and page errors.
- Report what changed. No publishing.

## Technical details
- Shared helpers: `useParallax` (requestAnimationFrame + translate3d), a `TiltCard` wrapper (only on fine pointer and hover devices), a `Reveal` component built on framer-motion `whileInView` with `once` and reduced-motion handling, and a fixed `AnimatedCounter` that renders the real value on first render and in its reduced-motion fallback.
- Hero headings get no `initial={{opacity:0}}`. Any entrance animation uses transform only.
- Design tokens are added to `index.css`/`tailwind` with per-division overrides under `[data-division]`, with no hardcoded colours.
- The isometric wireframe is a pure SVG/CSS component. The existing R3F hero scene is replaced or limited to desktop, so no heavy 3D scene loads in the hero.
- The header becomes `sticky top-0` (not fixed, so it takes no extra space), and the matching rule in AGENTS.md is updated. Scroll-spy uses IntersectionObserver.
- Hero LCP image: `fetchpriority="high"`, eager loading, explicit size, background colour behind it.
- BIM/Construction data isolation through DivisionRoute stays as it is.
