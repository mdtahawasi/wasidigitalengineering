import { Suspense, lazy, useEffect, useRef, useState } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

type Props = {
  variant?: "bim" | "construction";
  className?: string;
  /** strength of the soft scroll parallax, in px per scrolled px */
  parallax?: number;
};

/**
 * Lazy, viewport-gated 3D hero backdrop.
 * - Never loads three.js until the section is near the viewport
 * - Unmounts the canvas when scrolled away (zero GPU cost)
 * - Skips entirely for reduced-motion users and very low-end devices
 */
export default function Hero3D({ variant = "bim", className = "", parallax = 0.15 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cores = navigator.hardwareConcurrency ?? 4;
    setEnabled(!reduced && cores >= 4);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      rootMargin: "200px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, [enabled]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !visible || parallax === 0) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        el.style.transform = `translate3d(0, ${window.scrollY * parallax}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [visible, parallax]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none will-change-transform ${className}`}
    >
      {enabled && visible && (
        <Suspense fallback={null}>
          <HeroScene variant={variant} />
        </Suspense>
      )}
    </div>
  );
}