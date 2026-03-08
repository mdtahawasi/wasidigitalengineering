import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

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
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Digital Engineering</span>
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

        {/* Contact strip */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Mail size={14} className="text-primary" /> info@wasidigital.com</span>
            <span className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +971 569327490</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Dubai, UAE</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WASI Digital Engineering. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
