import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight, Briefcase, GraduationCap, Heart, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, scaleIn, staggerContainer, staggerItem } from "@/lib/animations";

const perkKeys = [
  { icon: Briefcase, titleKey: "perk.flexibleWork", descKey: "perk.flexibleWorkDesc" },
  { icon: GraduationCap, titleKey: "perk.growth", descKey: "perk.growthDesc" },
  { icon: Heart, titleKey: "perk.health", descKey: "perk.healthDesc" },
  { icon: Zap, titleKey: "perk.tech", descKey: "perk.techDesc" },
];

const openings = [
  { title: "Senior BIM Modeler (Revit)", dept: "Production", location: "Dubai, UAE", type: "Full-time" },
  { title: "BIM Coordinator", dept: "Coordination", location: "Riyadh, KSA", type: "Full-time" },
  { title: "Structural BIM Engineer", dept: "Engineering", location: "Dubai, UAE", type: "Full-time" },
  { title: "MEP BIM Lead", dept: "MEP", location: "Abu Dhabi, UAE", type: "Full-time" },
  { title: "AI/ML Engineer - BIM Automation", dept: "Technology", location: "Remote", type: "Full-time" },
  { title: "Scan to BIM Specialist", dept: "Production", location: "Doha, Qatar", type: "Contract" },
  { title: "BIM Consultant", dept: "Consulting", location: "London, UK", type: "Full-time" },
  { title: "Junior Revit Technician", dept: "Production", location: "Cairo, Egypt", type: "Full-time" },
];

export default function CareersPage() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4"
            >
              {t("careers.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl"
            >
              {t("careers.title")} <span className="text-gradient">{t("careers.titleHighlight")}</span> {t("careers.titleEnd")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              {t("careers.desc")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {perkKeys.map((p, i) => (
              <motion.div key={i} variants={staggerItem} className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <p.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{t(p.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(p.descKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("careers.openPositionsLabel")} title={t("careers.openPositionsTitle")} description={t("careers.openPositionsDesc")} />
          <div className="max-w-3xl mx-auto space-y-3">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="glass rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/30 transition-all"
              >
                <div>
                  <h3 className="font-display font-semibold text-foreground">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase size={12} /> {job.dept}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors shrink-0">
                  {t("careers.apply")} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">{t("careers.noMatch")}</h2>
            <p className="text-muted-foreground mb-6">{t("careers.noMatchDesc")}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm glow-primary">
              {t("careers.submitResume")} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
