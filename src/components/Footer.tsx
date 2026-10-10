import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDivision } from "@/contexts/DivisionContext";

export default function Footer() {
  const { t } = useLanguage();
  const { division } = useDivision();
  const isConstruction = division === "construction";

  const footerLinks = {
    [t("footer.company")]: [
      { label: t("footer.aboutUs"), href: "/about#our-story" },
      { label: t("footer.ourTeam"), href: "/about#leadership" },
      { label: t("footer.careers"), href: "/careers" },
      { label: t("footer.contact"), href: "/contact" },
    ],
    [t("footer.services")]: [
      { label: t("footer.bimModeling"), href: "/services#disciplines" },
      { label: t("footer.clashDetection"), href: "/services#disciplines" },
      { label: t("footer.4d5dSim"), href: "/services#additional-services" },
      { label: t("footer.scanToBim"), href: "/services#additional-services" },
    ],
    [t("footer.industries")]: [
      { label: t("footer.commercial"), href: "/services#industry-sectors" },
      { label: t("footer.residential"), href: "/services#industry-sectors" },
      { label: t("footer.infrastructure"), href: "/services#industry-sectors" },
      { label: t("footer.healthcare"), href: "/services#industry-sectors" },
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
              <div className="w-8 h-8 rounded bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                W
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-foreground text-base">WASI</span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Infratech Engineering &amp; Construction</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-foreground text-sm mb-4">{title}</h4>
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
            <div className={`space-y-1.5 ${isConstruction ? "order-2" : "order-1"}`}>
              <div className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5" style={{ color: "#00d4ff" }}>
                BIM &amp; Engineering Division {!isConstruction && <span className="text-[9px] font-semibold text-primary/80">• Primary</span>}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground"><MapPin size={14} /> Sadar, Nagpur, Maharashtra, India</div>
              <div className="flex items-center gap-2 text-muted-foreground"><Mail size={14} /> info@witecglobal.com</div>
            </div>
            <div className={`space-y-1.5 ${isConstruction ? "order-1" : "order-2"}`}>
              <div className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5" style={{ color: "#10b981" }}>
                Construction &amp; Civil Works Division {isConstruction && <span className="text-[9px] font-semibold text-emerald-500/80">• Primary</span>}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground"><MapPin size={14} /> Sadar, Nagpur, Maharashtra, India (HQ)</div>
              <div className="flex items-center gap-2 text-muted-foreground"><Mail size={14} /> taha@witecglobal.com</div>
            </div>
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
