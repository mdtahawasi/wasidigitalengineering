import { useState } from "react";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

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
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const next = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    setTheme(next);
  };

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

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

        {/* Right side: Language + Hamburger */}
        <div className="flex items-center gap-1">
          <button
            onClick={cycleTheme}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`Theme: ${theme}`}
            title={`Theme: ${theme}`}
          >
            <ThemeIcon size={20} />
          </button>
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-4 md:right-8 top-14 md:top-18 w-56 bg-card rounded-xl border border-border shadow-xl overflow-hidden"
          >
            <div className="py-2 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-5 py-2.5 text-sm font-medium transition-all ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              <div className="px-3 pt-2 pb-1">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm text-center"
                >
                  {t("nav.getQuote")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
