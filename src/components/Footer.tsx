import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDivision } from "@/contexts/DivisionContext";

export default function Footer() {
  const { t } = useLanguage();
  const { division } = useDivision();
  const isConstruction = division === "construction";

  const footerLinks = {
    [t("footer.company")]: [
      { label: t("footer.aboutUs"), href: isConstruction ? "/about" : "/about#our-story" },
      { label: t("footer.ourTeam"), href: isConstruction ? "/about" : "/about#leadership" },
      { label: t("footer.careers"), href: "/careers" },
      { label: t("footer.contact"), href: "/contact" },
    ],
    [t("footer.services")]: isConstruction ? [
      { label: "Civil Construction", href: "/services" },
      { label: "RCC & Structural Works", href: "/services" },
      { label: "MEP Execution", href: "/services" },
      { label: "Turnkey Construction", href: "/services" },
    ] : [
      { label: t("footer.bimModeling"), href: "/services#disciplines" },
      { label: t("footer.clashDetection"), href: "/services#disciplines" },
      { label: t("footer.4d5dSim"), href: "/services#additional-services" },
      { label: t("footer.scanToBim"), href: "/services#additional-services" },
    ],
    [t("footer.industries")]: [
      { label: t("footer.commercial"), href: isConstruction ? "/projects" : "/services#industry-sectors" },
      { label: t("footer.residential"), href: isConstruction ? "/projects" : "/services#industry-sectors" },
      { label: t("footer.infrastructure"), href: isConstruction ? "/projects" : "/services#industry-sectors" },
      { label: t("footer.healthcare"), href: isConstruction ? "/projects" : "/services#industry-sectors" },
    ],
  };

  const standards = isConstruction
    ? ["IS 456", "IS 800", "IS 1893", "NBC 2016", "RERA", "PWD", "CPWD"]
    : ["ISO 19650", "IFC / openBIM", "COBie", "BIM Level 2"];

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img decoding="async" width={1920} height={1047} src={logo} alt="WITEC Global" className="h-10 w-auto rounded-md" loading="lazy" />
              <div className="flex min-w-0 flex-col leading-none">
                <span className="font-display font-bold text-foreground text-base">WITEC</span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Infratech Engineering &amp; Construction</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              {isConstruction ? "Civil, structural and turnkey construction from Nagpur, serving Vidarbha and Kolkata." : t("footer.description")}
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h2 className="font-display font-semibold text-foreground text-sm mb-4">{title}</h2>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Standards / Registrations strip */}
        <div className="mt-10 pt-6 border-t border-border/40">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
            {isConstruction ? "Registered & Compliant" : "Standards & Certifications"}
          </p>
          <div className="flex flex-wrap gap-2">
            {standards.map((s) => (
              <span
                key={s}
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-border bg-card/70 text-foreground/80"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div className="grid sm:grid-cols-2 gap-6 text-sm w-full md:w-auto">
            {/* Primary office swaps based on division */}
            {!isConstruction && <div className="space-y-1.5">
              <div className="text-[10px] text-primary font-bold uppercase tracking-widest flex items-center gap-1.5">
                BIM &amp; Engineering Division {!isConstruction && <span className="text-[9px] font-semibold text-primary/80">• Primary</span>}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground"><MapPin size={14} /> Sadar, Nagpur, Maharashtra, India</div>
               <a href="mailto:info@witecglobal.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Mail size={14} /> info@witecglobal.com</a>
            </div>}
            {isConstruction && <div className="space-y-1.5">
              <div className="text-[10px] text-primary font-bold uppercase tracking-widest flex items-center gap-1.5">
                Construction &amp; Civil Works Division {isConstruction && <span className="text-[9px] font-semibold text-emerald-500/80">• Primary</span>}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground"><MapPin size={14} /> Sadar, Nagpur, Maharashtra, India (HQ)</div>
               <a href="mailto:taha@witecglobal.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Mail size={14} /> taha@witecglobal.com</a>
            </div>}
          </div>
          <p className="text-xs text-muted-foreground">
            {isConstruction
              ? "Areas we serve: Nagpur, Amravati, Akola, Chandrapur, Wardha, Yavatmal, Gondia, Bhandara, Washim (Vidarbha) and Kolkata."
              : "Areas we serve: BIM & engineering from Nagpur, Vidarbha to India, USA, UK, UAE, Saudi Arabia, Qatar, Europe and Australia."}
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wasi Infratech Engineering & Construction (WITEC). {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
