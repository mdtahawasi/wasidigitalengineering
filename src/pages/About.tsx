import { motion } from "framer-motion";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Globe, Plus, Mail, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import DivisionSEO from "@/components/DivisionSEO";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import OrgChart from "@/components/OrgChart";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerItem, staggerItemScale } from "@/lib/animations";
import aboutTeam from "@/assets/about-team.jpg";
import heroTeamCollab from "@/assets/hero-team-collab.jpg";
import heroConstruction from "@/assets/hero-construction-site.jpg";

const valueKeys = [
  { icon: Target, titleKey: "value.precision", descKey: "value.precisionDesc" },
  { icon: Eye, titleKey: "value.innovation", descKey: "value.innovationDesc" },
  { icon: Heart, titleKey: "value.integrity", descKey: "value.integrityDesc" },
  { icon: Award, titleKey: "value.excellence", descKey: "value.excellenceDesc" },
];

const timeline = [
  { year: "2019", event: "Founded in India as a BIM consulting startup by Md Taha Wasi" },
  { year: "2020", event: "Expanded services to Architecture, Structure & MEP BIM modeling" },
  { year: "2021", event: "Completed first 10 projects across residential & commercial sectors" },
  { year: "2022", event: "Launched coordination & clash detection services, grew to 15+ professionals" },
  { year: "2023", event: "Entered UAE market, expanded to industrial & infrastructure projects" },
  { year: "2024", event: "30+ projects completed across all AEC industry sectors" },
  { year: "2025", event: "AI-integrated BIM workflows, Digital Twin & FM solutions launched" },
];

const leadershipTeam = [
  { name: "Md Taha Wasi", role: "Founder & CEO", qualifications: "Masters in Construction & Project Management | MBA", initials: "TW", email: "taha@witecglobal.com", phone: "" },
];

export default function AboutPage() {
  const { t } = useLanguage();

  useScrollToHash();

  return (
    <Layout>
      <DivisionSEO />
      {/* Hero with background image */}
      <section id="about-hero" className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroTeamCollab} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4"
            >
              {t("about.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl"
            >
              {t("about.title")} <span className="text-gradient">{t("about.titleHighlight")}</span> {t("about.titleEnd")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              {t("about.desc")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Image + Story */}
      <section id="our-story" className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeLeft} className="rounded-2xl overflow-hidden">
              <img src={aboutTeam} alt="Wasi Infratech Engineering & Construction (WITEC) team" className="w-full h-auto object-cover rounded-2xl" />
            </motion.div>
            <motion.div {...fadeRight} transition={{ delay: 0.2, duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">{t("about.ourStory")}</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Founded in 2019 in India by Md Taha Wasi, Wasi Infratech Engineering & Construction (WITEC) began with a clear mission: to bridge the gap between traditional construction methods and the digital future. What started as a small team of BIM enthusiasts has grown into a consultancy serving ambitious projects across the AEC industry.</p>
                <p>Today, we've successfully delivered 30+ projects across residential, commercial, and industrial sectors. Our team combines deep domain expertise in Architecture, Structural (RCC, Steel & Composite), MEP, Interior Fit Out, Facade, Landscape, Infrastructure, and Civil engineering with cutting-edge technologies like AI, IoT, and digital twin platforms.</p>
                <p>Our commitment to ISO 19650 standards, continuous innovation, and client-centric delivery has earned us the trust of developers, contractors, and consultants across India and the UAE.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Construction Excellence Image Banner */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden h-64 md:h-80"
          >
            <img src={heroConstruction} alt="Construction Excellence" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">Our Commitment</p>
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">Building the Digital Future of Construction</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: 6, suffix: "+", labelKey: "stat.yearsExperience" },
              { value: 30, suffix: "+", labelKey: "stat.projectsDelivered" },
              { value: 3, suffix: "", labelKey: "stat.industrySectors" },
              { value: 2, suffix: "", labelKey: "stat.countries" },
            ].map((s, i) => (
              <motion.div key={i} variants={staggerItemScale}>
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t(s.labelKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("about.valuesLabel")} title={t("about.valuesTitle")} />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {valueKeys.map((v, i) => (
              <motion.div key={i} variants={staggerItem} className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{t(v.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(v.descKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section id="journey" className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("about.journeyLabel")} title={t("about.journeyTitle")} />
          <div className="max-w-2xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex gap-6 relative"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.3, type: "spring" }}
                    className="w-3 h-3 rounded-full bg-primary shrink-0"
                  />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border" />}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-semibold text-primary">{item.year}</span>
                  <p className="text-foreground text-sm">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("about.leadershipLabel")} title={t("about.leadershipTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {leadershipTeam.map((person, i) => (
              <motion.div
                key={i}
                {...scaleIn}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-xl text-primary-foreground">{person.initials}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground">{person.name}</h3>
                <p className="text-sm text-primary mb-1">{person.role}</p>
                {person.qualifications && <p className="text-xs text-muted-foreground mb-2">{person.qualifications}</p>}
                {person.email && (
                  <a href={`mailto:${person.email}`} className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={12} /> {person.email}
                  </a>
                )}
                {person.phone && (
                  <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mt-1">
                    <Phone size={12} /> {person.phone}
                  </a>
                )}
              </motion.div>
            ))}
            <motion.div
              {...scaleIn}
              transition={{ delay: leadershipTeam.length * 0.15, duration: 0.6 }}
              className="glass rounded-xl p-6 text-center border-dashed border-2 border-border/50 flex flex-col items-center justify-center opacity-50"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Plus size={24} className="text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">{t("about.moreTeam")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organization Charts */}
      <section id="organization" className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("about.orgLabel")} title={t("about.orgTitle")} description={t("about.orgDesc")} />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="space-y-16"
          >
            <OrgChart title="BIM Team" chart={{ name: "Md Taha Wasi", role: "CEO & BIM Director", children: [{ name: "BIM Manager", role: "Overall BIM Coordination", children: [{ name: "Architectural BIM Lead", role: "LOD 100-500 Models" }, { name: "Structural BIM Lead", role: "RCC, Steel & Composite" }, { name: "MEP BIM Lead", role: "HVAC, Plumbing, Electrical, FP" }, { name: "Coordination Lead", role: "Clash Detection & Resolution" }] }, { name: "Information Manager", role: "CDE & Data Standards", children: [{ name: "COBie Specialist", role: "Asset Data & FM Handover" }, { name: "QA/QC Engineer", role: "Model Auditing & Standards" }] }] }} />
            <OrgChart title="Design Team" chart={{ name: "Md Taha Wasi", role: "CEO & Design Director", children: [{ name: "Architecture Lead", role: "Design & Documentation", children: [{ name: "Interior Fit Out Designer", role: "Interior BIM & Design" }, { name: "Facade Consultant", role: "Facade Engineering" }, { name: "Landscape Designer", role: "Landscape Architecture" }] }, { name: "Engineering Lead", role: "Structural & Infrastructure", children: [{ name: "Structural Engineer", role: "RCC, Steel & Composite" }, { name: "Infrastructure Engineer", role: "Roads, Bridges, Utilities" }, { name: "MEPF Engineer", role: "Mechanical, Electrical, Plumbing, Fire" }] }] }} />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
