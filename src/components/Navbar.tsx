import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinks = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.services", href: "/services" },
  { labelKey: "nav.projects", href: "/projects" },
  { labelKey: "nav.bimInsights", href: "/bim-insights" },
  { labelKey: "nav.careers", href: "/careers" },
  { labelKey: "nav.contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
            W
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-foreground text-base tracking-tight">WASI</span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Digital Engineering</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="ml-2 px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-primary"
          >
            {t("nav.getQuote")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border/50 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-all ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm text-center"
              >
                {t("nav.getQuote")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
