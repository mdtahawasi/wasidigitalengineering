import { useEffect, useState } from "react";

export interface PageSection { id: string; label: string }

export function useSectionNavigation(pageKey: string) {
  const [sections, setSections] = useState<PageSection[]>([]);
  const [active, setActive] = useState("");
  useEffect(() => {
    let frame = 0;
    let elements: HTMLElement[] = [];
    const update = () => {
      frame = 0;
      const offset = (document.querySelector("header")?.getBoundingClientRect().height ?? 120) + 40;
      const current = elements.filter(el => el.getBoundingClientRect().top <= offset).at(-1);
      setActive(current?.id ?? "");
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const collect = () => {
      elements = Array.from(document.querySelectorAll<HTMLElement>("main section"))
        .filter(el => !el.parentElement?.closest("section") && el.querySelector("h2") && !el.querySelector("h1"));
      const next = elements.map((el, index) => {
        if (!el.id) el.id = `page-section-${index + 1}`;
        return { id: el.id, label: el.querySelector("h2")?.textContent?.trim() ?? "" };
      });
      setSections(previous => JSON.stringify(previous) === JSON.stringify(next) ? previous : next);
      update();
    };
    collect();
    const root = document.querySelector("main");
    const observer = new MutationObserver(collect);
    if (root) observer.observe(root, { childList: true, subtree: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [pageKey]);
  return { sections, active };
}