import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import DivisionToggle from "./DivisionToggle";
import { useDivision } from "@/contexts/DivisionContext";
import { getNavItems } from "@/config/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { division } = useDivision();
  const navLinks = getNavItems(division);

  useEffect(() => { setOpen(false); }, [location.pathname]);

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
      className="relative z-50 w-full glass border-x-0 border-t-0"
    >
      <nav className="container mx-auto flex min-h-16 items-center justify-between gap-2 px-3 py-2 sm:px-4 md:min-h-20 md:px-8">
        {/* Logo */}
        <Link to="/" aria-label="WITEC GLOBAL" className="flex items-center gap-2 md:gap-3 shrink min-w-0">
          <img
            src={logo}
            alt="WITEC GLOBAL — Wasi Infratech Engineering & Construction"
            aria-label="WITEC GLOBAL"
            className="h-8 md:h-11 w-auto rounded-md shrink-0 dark:brightness-110 dark:contrast-110"
          />
          <div className="hidden min-w-0 flex-col leading-none sm:flex">
            <span className="font-display font-bold text-foreground text-base md:text-xl tracking-tight">WITEC</span>
            <span className="hidden sm:inline text-[9px] md:text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium truncate">Infratech Engineering &amp; Construction</span>
          </div>
        </Link>

        {/* Desktop horizontal nav links */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1 shrink-0">
          <Link
            to="/contact"
            className="hidden xl:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm"
          >
            {t("nav.getQuote")}
          </Link>
          <button
            onClick={cycleTheme}
            className="flex min-h-11 min-w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`Theme: ${theme}`}
            title={`Theme: ${theme}`}
          >
            <ThemeIcon size={20} />
          </button>
          <LanguageSwitcher />
          {/* Hamburger - mobile only */}
          <button
            onClick={() => setOpen(!open)}
            className="flex min-h-11 min-w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground xl:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Division toggle bar (always visible, keeps top nav compact) */}
      <div className="flex justify-center border-t border-border/40 bg-background/80 px-3 py-2 backdrop-blur-md sm:px-4">
        <DivisionToggle variant="mobile" className="max-w-md xl:max-w-lg" />
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-3 top-full max-h-[min(70vh,32rem)] overflow-y-auto rounded-lg border border-border bg-card shadow-xl sm:left-auto sm:right-4 sm:w-64 md:right-8 xl:hidden"
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
