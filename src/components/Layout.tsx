import { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import AIChatWidget from "./AIChatWidget";
import { useGlobalParallax } from "@/hooks/useGlobalParallax";
import { Link, useLocation } from "react-router-dom";
import { useDivision } from "@/contexts/DivisionContext";
import { useLanguage } from "@/contexts/LanguageContext";
import ServiceFAQ from "./ServiceFAQ";

export default function Layout({ children }: { children: ReactNode }) {
  useGlobalParallax();
  const { pathname } = useLocation();
  const { division } = useDivision();
  const { t } = useLanguage();
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="division-surface min-w-0 flex-1">
          {children}
          {pathname === "/services" && <ServiceFAQ />}
          <nav aria-label={t("footer.company")} className="container mx-auto px-4 md:px-8 py-8 border-t border-border/50">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {[["/services", "footer.services"], ["/projects", "nav.projects"], ["/about", "footer.aboutUs"], ["/contact", "footer.contact"]].filter(([path]) => path !== pathname).map(([path, key]) => (
                <li key={path}><Link to={`${path}?division=${division}`} className="inline-flex min-h-11 items-center text-sm font-medium text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">{t(key)}</Link></li>
              ))}
            </ul>
          </nav>
        </main>
        <Footer />
        <AIChatWidget />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  );
}
