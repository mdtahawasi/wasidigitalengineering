import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to allow page to render
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);
}
