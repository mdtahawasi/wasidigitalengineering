import type { Division } from "@/contexts/DivisionContext";

export interface NavItem {
  /** i18n key when available, otherwise used as a literal fallback label */
  labelKey: string;
  label: string;
  href: string;
}

/** Navigation for the BIM & Engineering division (unchanged from the original site). */
export const BIM_NAV: NavItem[] = [
  { labelKey: "nav.home", label: "Home", href: "/" },
  { labelKey: "nav.about", label: "About", href: "/about" },
  { labelKey: "nav.services", label: "Services", href: "/services" },
  { labelKey: "nav.projects", label: "Projects", href: "/projects" },
  { labelKey: "nav.technology", label: "Technology", href: "/technology" },
  { labelKey: "nav.bimInsights", label: "BIM Insights", href: "/bim-insights" },
  { labelKey: "nav.careers", label: "Careers", href: "/careers" },
  { labelKey: "nav.contact", label: "Contact", href: "/contact" },
];

/** Navigation for the Construction division. */
export const CONSTRUCTION_NAV: NavItem[] = [
  { labelKey: "nav.home", label: "Home", href: "/" },
  { labelKey: "nav.about", label: "About", href: "/about" },
  { labelKey: "nav.services", label: "Services", href: "/services" },
  { labelKey: "nav.projects", label: "Projects", href: "/projects" },
  { labelKey: "nav.technology", label: "Technology", href: "/technology" },
  { labelKey: "nav.careers", label: "Careers", href: "/careers" },
  { labelKey: "nav.contact", label: "Contact", href: "/contact" },
];

export function getNavItems(division: Division): NavItem[] {
  return division === "construction" ? CONSTRUCTION_NAV : BIM_NAV;
}