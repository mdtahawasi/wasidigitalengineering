import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDivision } from "@/contexts/DivisionContext";

/** Individual reveals never hide an entire tall section or delay first-paint content. */
export function useConstructionReveals() {
  const { pathname } = useLocation();
  const { division } = useDivision();
  useEffect(() => {
    if (division !== "construction") return;
    const root = document.querySelector("main");
    if (!root) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const seen = new WeakSet<Element>();
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (media.matches) return;
        const siblings = Array.from(entry.target.parentElement?.children ?? []);
        const index = Math.max(0, siblings.indexOf(entry.target));
        const animation = entry.target.animate([
          { opacity: 0.3, transform: "translate3d(0,18px,0)" },
          { opacity: 1, transform: "translate3d(0,0,0)" },
        ], { duration: 480, delay: Math.min(index % 4 * 60, 180), easing: "cubic-bezier(.2,.8,.2,1)" });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    const scan = () => {
      root.querySelectorAll("section .glass, section h2").forEach(el => {
        if (seen.has(el) || el.closest("[data-immediate]")) return;
        seen.add(el);
        observer.observe(el);
      });
    };
    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(root, { childList: true, subtree: true });
    const stop = () => { if (media.matches) animations.forEach(animation => animation.cancel()); };
    media.addEventListener("change", stop);
    return () => {
      observer.disconnect(); mutations.disconnect();
      media.removeEventListener("change", stop);
      animations.forEach(animation => animation.cancel());
    };
  }, [pathname, division]);
}