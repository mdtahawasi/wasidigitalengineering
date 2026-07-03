import { lazy, Suspense, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { Link } from "react-router-dom";
import {
  ArrowRight, Building2, Layers3, ScanLine, Cpu, BarChart3, Cog,
  CheckCircle2, ChevronRight, Globe, Zap, Shield, Brain, Monitor,
  Workflow, Users, Award, TrendingUp, Lock, Clock, Star, HeartHandshake,
  BadgeCheck, Target, Sparkles, DollarSign, FileCheck, Handshake
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import SoftwareShowcase from "@/components/SoftwareShowcase";
import BIMDimensionsSection from "@/components/BIMDimensionsSection";
import BIMLayerViewer from "@/components/BIMLayerViewer";
import ISCodeComplianceSection from "@/components/ISCodeComplianceSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDivision } from "@/contexts/DivisionContext";
import {
  constructionHeroSlides,
  constructionServices,
  whatWeBuild,
  constructionHeroKpis,
  constructionTestimonials,
  constructionHomeProcess,
  constructionProjects,
  constructionWhy,
} from "@/data/constructionContent";
import DivisionSEO from "@/components/DivisionSEO";
import { fadeUp, fadeLeft, fadeRight, scaleIn, fadeIn, staggerContainer, staggerItem, staggerItemScale } from "@/lib/animations";

const ConstructionScene = lazy(() => import("@/components/ConstructionScene"));
import projectHGR from "@/assets/project-hgr.jpg";
import projectLimeGarden from "@/assets/project-lime-garden.jpg";
import projectGodrej from "@/assets/project-godrej.jpg";
import projectPearlCentre from "@/assets/project-pearl-centre.jpg";
import imgArchitecture from "@/assets/discipline-architecture.jpg";
import imgMEPF from "@/assets/discipline-mepf.jpg";
import imgScanToBIM from "@/assets/discipline-scan-to-bim.jpg";
import img4D5D from "@/assets/discipline-4d5d.jpg";
import imgFacilityMgmt from "@/assets/discipline-facility-mgmt.jpg";
import imgStructural from "@/assets/discipline-structural.jpg";
import heroBim3D from "@/assets/hero-bim-3d-model.jpg";
import heroBimClash from "@/assets/hero-bim-clash.jpg";
import heroDigitalTwin from "@/assets/hero-digital-twin.jpg";
import heroBimMepf from "@/assets/hero-bim-mepf.jpg";

const bimHeroSlides = [
  {
    image: heroBim3D,
    quote: "Every Pipe, Every Duct, Every Wire — Perfectly Coordinated in 3D",
    sub: "MEP/F Systems Integration",
  },
  {
    image: heroBimClash,
    quote: "From Blueprint to Digital Twin — Engineering the Future",
    sub: "Complete BIM Lifecycle",
  },
  {
    image: heroDigitalTwin,
    quote: "Zero Clashes. Zero Rework. Maximum Precision.",
    sub: "AI-Powered Clash Detection",
  },
  {
    image: heroBimMepf,
    quote: "See It Before You Build It — Immersive VR/AR",
    sub: "Virtual Reality Visualization",
  },
];

const bimServiceKeys = [
  { icon: Building2, titleKey: "svc.bimModeling", descKey: "svc.bimModelingDesc", img: imgArchitecture },
  { icon: Layers3, titleKey: "svc.clashDetection", descKey: "svc.clashDetectionDesc", img: imgMEPF },
  { icon: ScanLine, titleKey: "svc.scanToBim", descKey: "svc.scanToBimDesc", img: imgScanToBIM },
  { icon: Cpu, titleKey: "svc.4d5dSim", descKey: "svc.4d5dSimDesc", img: img4D5D },
  { icon: BarChart3, titleKey: "svc.bimConsulting", descKey: "svc.bimConsultingDesc", img: imgStructural },
  { icon: Cog, titleKey: "svc.digitalTwin", descKey: "svc.digitalTwinDesc", img: imgFacilityMgmt },
];

const bimStats = [
  { value: 150, suffix: "+", label: "BIM Projects" },
  { value: 5,   suffix: "+", label: "Countries" },
  { value: 50,  suffix: "+", label: "BIM Experts" },
  { value: 10,  suffix: "+", label: "Years BIM" },
];
const constructionStats = constructionHeroKpis.map(k => ({ value: k.value, suffix: k.suffix, label: k.label }));

const projects = [
  { img: projectHGR, title: "Al Habtoor Grand Residency (HGR)", categoryKey: "projects.residential", location: "Dubai, UAE" },
  { img: projectPearlCentre, title: "Pearl Centre – Dalma Island", categoryKey: "projects.commercial", location: "Abu Dhabi, UAE" },
  { img: projectGodrej, title: "Godrej & Boyce Industrial Campus", categoryKey: "projects.industrial", location: "India" },
  { img: projectLimeGarden, title: "Lime Garden", categoryKey: "projects.residential", location: "Dubai, UAE" },
];

const testimonials = [
  { quoteKey: "testimonial.1.quote", author: "Ahmad Al-Rashid", role: "Director, Al Futtaim Engineering" },
  { quoteKey: "testimonial.2.quote", author: "Sarah Chen", role: "Project Manager, Consolidated Contractors" },
  { quoteKey: "testimonial.3.quote", author: "James Mitchell", role: "VP Operations, Emaar Properties" },
];

const processStepKeys = [
  { step: "01", titleKey: "process.discovery", descKey: "process.discoveryDesc", icon: Brain },
  { step: "02", titleKey: "process.bimSetup", descKey: "process.bimSetupDesc", icon: Monitor },
  { step: "03", titleKey: "process.modeling", descKey: "process.modelingDesc", icon: Building2 },
  { step: "04", titleKey: "process.coordination", descKey: "process.coordinationDesc", icon: Workflow },
  { step: "05", titleKey: "process.delivery", descKey: "process.deliveryDesc", icon: Award },
  { step: "06", titleKey: "process.support", descKey: "process.supportDesc", icon: Shield },
];

const industries = [
  { icon: Building2, nameKey: "projects.commercial", count: "12+", descKey: "industry.commercialDesc", color: "from-blue-500/20 to-blue-600/5" },
  { icon: Users, nameKey: "projects.residential", count: "8+", descKey: "industry.residentialDesc", color: "from-emerald-500/20 to-emerald-600/5" },
  { icon: HeartHandshake, nameKey: "projects.healthcare", count: "4+", descKey: "industry.healthcareDesc", color: "from-rose-500/20 to-rose-600/5" },
  { icon: Globe, nameKey: "projects.infrastructure", count: "3+", descKey: "industry.infrastructureDesc", color: "from-amber-500/20 to-amber-600/5" },
  { icon: Cog, nameKey: "industry.industrial", count: "2+", descKey: "industry.industrialDesc", color: "from-violet-500/20 to-violet-600/5" },
  { icon: Award, nameKey: "projects.education", count: "2+", descKey: "industry.educationDesc", color: "from-cyan-500/20 to-cyan-600/5" },
];

export default function HomePage() {
  const { t } = useLanguage();
  const { division } = useDivision();
  const [heroIndex, setHeroIndex] = useState(0);

  useScrollToHash();

  const heroSlides = division === "construction" ? constructionHeroSlides : bimHeroSlides;
  const isConstruction = division === "construction";
  const stats = isConstruction ? constructionStats : bimStats;
  const heroBadgeText = isConstruction
    ? "NAGPUR'S PREMIER CONSTRUCTION COMPANY"
    : "ENGINEERING & BIM CONSULTANCY";
  const heroSubheadline = isConstruction
    ? "Civil engineering, structural design, MEP services & turnkey construction. BIM-powered, IS code compliant, delivered on time. 10-year structural warranty on every project."
    : "AI-integrated BIM solutions powering the AEC industry. From concept to facility management — we digitize every dimension of construction.";
  const heroTrustBadges = isConstruction
    ? ["IS 456", "IS 800", "IS 1893", "NBC 2016", "10-Year Warranty"]
    : ["ISO 19650", "IFC / openBIM", "AI-Integrated", "LOD 100-500"];

  // Reset slide index when switching division
  useEffect(() => {
    setHeroIndex(0);
  }, [division]);

  const nextSlide = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <Layout>
      <DivisionSEO />
      {/* ===== HERO ===== */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Rotating background images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[heroIndex].image}
              alt={heroSlides[heroIndex].sub}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="relative container mx-auto px-4 md:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border mb-6 ${
                isConstruction
                  ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/30"
                  : "text-primary bg-primary/10 border-primary/20"
              }`}
            >
              <span className={`relative flex h-2 w-2`}>
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${isConstruction ? "bg-emerald-500" : "bg-primary"}`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isConstruction ? "bg-emerald-500" : "bg-primary"}`} />
              </span>
              {heroBadgeText}
            </motion.span>

            {/* Rotating headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={heroIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-foreground mb-4"
              >
                <span className="text-gradient">{heroSlides[heroIndex].quote}</span>
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={heroIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-primary/80 font-semibold mb-4 tracking-wide"
              >
                {heroSlides[heroIndex].sub}
              </motion.p>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              {heroSubheadline}
            </motion.p>

            {/* Trust badge pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {heroTrustBadges.map((b) => (
                <span
                  key={b}
                  className="text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-border/60 bg-card/60 backdrop-blur text-foreground/80"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Slide indicators */}
            <div className="flex gap-2 mb-8">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === heroIndex ? "w-10 bg-primary" : "w-4 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all glow-primary"
              >
                {t("hero.exploreServices")} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-muted/50 hover:border-primary/30 transition-all"
              >
                {t("hero.viewProjects")} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-border/30"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">{t("hero.trustedBy")}</p>
              <div className="flex flex-wrap gap-4 items-center">
                {[
                  { icon: Building2, labelKey: "hero.globalFirms" },
                  { icon: Globe, labelKey: "hero.countries" },
                  { icon: Award, labelKey: "hero.satisfaction" },
                  { icon: Shield, labelKey: "hero.isoCertified" },
                ].map((item, i) => (
                  <motion.div
                    key={item.labelKey}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-1.5 text-muted-foreground/60 hover:text-primary/70 transition-colors"
                  >
                    <item.icon size={14} />
                    <span className="text-xs font-medium">{t(item.labelKey)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            {...scaleIn}
            className="glass rounded-2xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label={isConstruction ? "● Construction Services" : t("index.servicesLabel")}
            title={isConstruction ? "End-to-End Civil & Construction Solutions" : t("index.servicesTitle")}
            description={isConstruction
              ? "From foundations to finishing — WITEC's Construction division builds residential, commercial, industrial and infrastructure projects with safety, quality and on-time delivery."
              : t("index.servicesDesc")}
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(isConstruction
              ? constructionServices.slice(0, 6).map((s) => ({
                  icon: s.icon,
                  titleKey: s.title,
                  descKey: s.desc,
                  img: null as string | null,
                  rawText: true,
                }))
              : bimServiceKeys.map((s) => ({ ...s, img: s.img as string | null, rawText: false }))
            ).map((service, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group glass rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 relative"
              >
                {service.img && (
                  <div className="relative h-36 overflow-hidden">
                    <img src={service.img} alt={service.rawText ? service.titleKey : t(service.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  </div>
                )}
                <div className="p-5 relative">
                  <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-500 ${service.img ? "-mt-10 relative z-10 border-2 border-background" : ""}`}>
                    <service.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{service.rawText ? service.titleKey : t(service.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.rawText ? service.descKey : t(service.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 0.5 }} className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
              {t("index.viewAllServices")} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== WHAT WE BUILD (Construction only) ===== */}
      {isConstruction && (
        <section className="section-padding bg-card/30">
          <div className="container mx-auto px-4 md:px-8">
            <SectionHeading
              label="● What We Build"
              title="Six Asset Classes. One Trusted Builder."
              description="WITEC's Construction division delivers across the full spectrum of built infrastructure in India."
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {whatWeBuild.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="glass rounded-xl p-5 text-center group hover:border-primary/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 mx-auto flex items-center justify-center mb-3 group-hover:bg-gradient-primary transition-all duration-500">
                    <item.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <p className="text-sm font-display font-semibold text-foreground">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== BIM DIMENSIONS 3D-7D ===== */}
      <BIMDimensionsSection />

      {/* ===== INTERACTIVE BIM LAYER VIEWER ===== */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="● Interactive Demo"
            title="Explore a BIM Model Live"
            description="Toggle Structural, Architectural, MEP and Interior layers to see how WITEC federates every discipline into one coordinated model."
          />
          <BIMLayerViewer />
        </div>
      </section>

      {/* ===== IS CODE COMPLIANCE ===== */}
      <ISCodeComplianceSection />

      {/* ===== PROCESS ===== */}
      <section id="process" className="section-padding bg-card/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label={t("index.processLabel")}
            title={t("index.processTitle")}
            description={t("index.processDesc")}
          />
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
            >
              {processStepKeys.map((step, i) => (
                <motion.div
                  key={i}
                  variants={staggerItemScale}
                  className="glass rounded-xl p-5 text-center relative group hover:border-primary/30 transition-all duration-500"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mt-3 mb-3 group-hover:bg-gradient-primary transition-all duration-500">
                    <step.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground text-sm mb-1">{t(step.titleKey)}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label={t("index.projectsLabel")}
            title={t("index.projectsTitle")}
            description={t("index.projectsDesc")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">{t(project.categoryKey)}</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.5 }} className="text-center mt-10">
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
              {t("index.viewAllProjects")} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section id="industries" className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label={t("index.industriesLabel")}
            title={t("index.industriesTitle")}
            description={t("index.industriesDesc")}
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="glass rounded-xl p-6 group hover:border-primary/30 transition-all duration-500 cursor-default relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-500">
                      <ind.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-2xl font-display font-bold text-gradient">{ind.count}</span>
                  </div>
                  <h4 className="font-display font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t(ind.nameKey)}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.descKey ? t(ind.descKey) : ""}</p>
                  <div className="mt-4 h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(100, parseInt(ind.count) * 8 + 20)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-primary"
                    />
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">{ind.count} {t("index.projectsCompleted")}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SOFTWARE ECOSYSTEM ===== */}
      <SoftwareShowcase />

      {/* ===== WHY WASI ===== */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label={t("index.whyLabel")}
            title={t("index.whyTitle")}
            description={t("index.whyDesc")}
          />

          {/* Priority pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10"
          >
            {[
              { icon: Lock, titleKey: "why.securityTitle", textKey: "why.securityText", statKey: "why.securityStat", priorityKey: "why.securityPriority" },
              { icon: HeartHandshake, titleKey: "why.satisfactionTitle", textKey: "why.satisfactionText", statKey: "why.satisfactionStat", priorityKey: "why.satisfactionValue" },
              { icon: Clock, titleKey: "why.deliveryTitle", textKey: "why.deliveryText", statKey: "why.deliveryStat", priorityKey: "why.deliveryGuaranteed" },
              { icon: Star, titleKey: "why.qualityTitle", textKey: "why.qualityText", statKey: "why.qualityStat", priorityKey: "why.qualityZeroDefect" },
            ].map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden border-t-2 border-t-primary/40">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">{t(item.priorityKey)}</span>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-500">
                      <item.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{t(item.statKey)}</span>
                  </div>
                  <h4 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{t(item.titleKey)}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(item.textKey)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Extended competitive advantages */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {[
              { icon: Shield, titleKey: "why.isoTitle", textKey: "why.isoText", statKey: "why.isoStat" },
              { icon: Brain, titleKey: "why.aiClashTitle", textKey: "why.aiClashText", statKey: "why.aiClashStat" },
              { icon: Award, titleKey: "why.certifiedTitle", textKey: "why.certifiedText", statKey: "why.certifiedStat" },
              { icon: Globe, titleKey: "why.globalTitle", textKey: "why.globalText", statKey: "why.globalStat" },
              { icon: Zap, titleKey: "why.agileTitle", textKey: "why.agileText", statKey: "why.agileStat" },
              { icon: Cpu, titleKey: "why.automationTitle", textKey: "why.automationText", statKey: "why.automationStat" },
              { icon: DollarSign, titleKey: "why.costTitle", textKey: "why.costText", statKey: "why.costStat" },
              { icon: Target, titleKey: "why.scalableTitle", textKey: "why.scalableText", statKey: "why.scalableStat" },
              { icon: Workflow, titleKey: "why.cdeTitle", textKey: "why.cdeText", statKey: "why.cdeStat" },
              { icon: FileCheck, titleKey: "why.reportingTitle", textKey: "why.reportingText", statKey: "why.reportingStat" },
              { icon: Handshake, titleKey: "why.partnershipsTitle", textKey: "why.partnershipsText", statKey: "why.partnershipsStat" },
              { icon: Sparkles, titleKey: "why.innovationTitle", textKey: "why.innovationText", statKey: "why.innovationStat" },
            ].map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-500">
                      <item.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{t(item.statKey)}</span>
                  </div>
                  <h4 className="font-display font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">{t(item.titleKey)}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(item.textKey)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust metrics bar */}
          <motion.div
            {...scaleIn}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 glass rounded-2xl p-8 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "98%", labelKey: "trust.onTimeRate" },
                { value: "35%", labelKey: "trust.costReduction" },
                { value: "500K+", labelKey: "trust.clashesResolved" },
                { value: "0", labelKey: "trust.securityBreaches" },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="space-y-1"
                >
                  <p className="text-2xl md:text-3xl font-display font-bold text-gradient">{badge.value}</p>
                  <p className="text-xs text-muted-foreground">{t(badge.labelKey)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("index.testimonialsLabel")} title={t("index.testimonialsTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass rounded-xl p-6 relative"
              >
                <div className="absolute top-4 right-4 text-4xl text-primary/10 font-display font-bold">"</div>
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-6 relative z-10">"{t(item.quoteKey)}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">{item.author}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-primary p-10 md:p-16 text-center"
          >
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4"
              >
                {t("index.ctaTitle")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-primary-foreground/80 max-w-lg mx-auto mb-8"
              >
                {t("index.ctaDesc")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity">
                  {t("index.startConversation")} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/careers" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-all">
                  {t("index.joinTeam")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
