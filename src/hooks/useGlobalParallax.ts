import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Moves every `[data-parallax="0.2"]` element by scrollY * factor using translate3d.
 * Desktop + fine pointer only; disabled for reduced motion.
 */
export function useGlobalParallax() {
  const { pathname } = useLocation();
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!mq.matches) return;
    let els: HTMLElement[] = [];
    let raf = 0;
    const collect = () => { els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]")); };
    const apply = () => {
      raf = 0;
      const y = window.scrollY;
      if (y > window.innerHeight * 1.5) return;
      for (const el of els) {
        const f = parseFloat(el.dataset.parallax || "0");
        el.style.transform = `translate3d(0, ${(y * f).toFixed(1)}px, 0)`;
        el.style.willChange = "transform";
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    const t = window.setTimeout(() => { collect(); apply(); }, 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      els.forEach((el) => { el.style.transform = ""; });
    };
  }, [pathname]);
}
