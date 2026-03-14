import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp, Globe, BarChart3, Building2, ArrowRight, Landmark,
  Factory, Cpu, Shield, Zap, Users, DollarSign, Target, Layers3,
  ChevronRight
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import PageHeroSlider from "@/components/PageHeroSlider";
import imgArchitecture from "@/assets/discipline-architecture.jpg";
import imgMEPF from "@/assets/discipline-mepf.jpg";
import imgFacilityMgmt from "@/assets/discipline-facility-mgmt.jpg";
import heroInsights1 from "@/assets/hero-insights-1.jpg";
import heroDigitalTwin from "@/assets/hero-digital-twin.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

// ===== DATA =====

const marketOverview = [
  { value: 9.6, suffix: "B", prefix: "$", label: "Global BIM Market (2024)" },
  { value: 22.2, suffix: "B", prefix: "$", label: "Projected Market (2030)" },
  { value: 14.5, suffix: "%", label: "CAGR (2024–2030)" },
  { value: 72, suffix: "%", label: "AEC Firms Using BIM" },
];

const countryAdoption = [
  { country: "United Kingdom", flag: "🇬🇧", adoption: 95, mandate: "BIM Level 2 (2016)", status: "Mandatory", color: "from-primary to-primary/60" },
  { country: "Singapore", flag: "🇸🇬", adoption: 92, mandate: "BCA BIM Submission", status: "Mandatory", color: "from-primary to-primary/60" },
  { country: "Germany", flag: "🇩🇪", adoption: 85, mandate: "BIM.DE (2020)", status: "Mandatory", color: "from-primary to-primary/60" },
  { country: "United States", flag: "🇺🇸", adoption: 82, mandate: "GSA/VA BIM Guide", status: "Federal", color: "from-primary/80 to-primary/40" },
  { country: "South Korea", flag: "🇰🇷", adoption: 80, mandate: "PPS BIM (2016)", status: "Mandatory", color: "from-primary/80 to-primary/40" },
  { country: "UAE", flag: "🇦🇪", adoption: 78, mandate: "Dubai BIM Mandate", status: "Mandatory", color: "from-primary/80 to-primary/40" },
  { country: "France", flag: "🇫🇷", adoption: 75, mandate: "Plan BIM 2022", status: "Encouraged", color: "from-primary/70 to-primary/30" },
  { country: "Japan", flag: "🇯🇵", adoption: 72, mandate: "MLIT BIM CDE", status: "Encouraged", color: "from-primary/70 to-primary/30" },
  { country: "Australia", flag: "🇦🇺", adoption: 70, mandate: "National BIM Guide", status: "Voluntary", color: "from-primary/60 to-primary/20" },
  { country: "Canada", flag: "🇨🇦", adoption: 68, mandate: "Federal BIM Guide", status: "Voluntary", color: "from-primary/60 to-primary/20" },
  { country: "China", flag: "🇨🇳", adoption: 62, mandate: "14th Five-Year Plan", status: "Growing", color: "from-primary/50 to-primary/15" },
  { country: "India", flag: "🇮🇳", adoption: 45, mandate: "BIM Mandate 2024", status: "Emerging", color: "from-primary/40 to-primary/10" },
  { country: "Saudi Arabia", flag: "🇸🇦", adoption: 65, mandate: "Vision 2030 BIM", status: "Mandatory", color: "from-primary/70 to-primary/30" },
  { country: "Brazil", flag: "🇧🇷", adoption: 35, mandate: "Decreto 10.306", status: "Growing", color: "from-primary/30 to-primary/10" },
];

const growthDrivers = [
  { icon: Landmark, title: "Government Mandates", desc: "Over 20 countries now mandate BIM for public infrastructure projects. The UK's Level 2 BIM requirement in 2016 set the global benchmark, followed by Singapore, Germany, and the UAE." },
  { icon: DollarSign, title: "Cost Savings (20–30%)", desc: "BIM reduces construction costs by 20–30% through clash detection, material optimization, and reduced rework. McKinsey reports that BIM-driven projects see 15% fewer budget overruns." },
  { icon: Cpu, title: "AI & Automation Integration", desc: "Generative design, AI-powered clash detection, and automated code compliance are transforming BIM from a modeling tool into an intelligent design platform. The AI-in-BIM market is growing at 25% CAGR." },
  { icon: Shield, title: "Sustainability & Green Building", desc: "BIM enables energy simulation, carbon tracking, and LEED/BREEAM compliance analysis. 67% of green-certified buildings in 2024 used BIM during design — driving adoption in ESG-focused markets." },
  { icon: Factory, title: "Modular & Prefab Construction", desc: "The $130B prefab market relies heavily on BIM for precision manufacturing coordination. BIM-to-fabrication workflows reduce waste by 40% and accelerate assembly timelines by 50%." },
  { icon: Globe, title: "Digital Twin Expansion", desc: "The digital twin market ($16B by 2025) depends on BIM as the foundational data layer. Facility operators use BIM-linked digital twins for predictive maintenance, space management, and energy optimization." },
];

const marketSegments = [
  { segment: "Architecture", share: 35, growth: "12.8%", icon: Building2 },
  { segment: "Infrastructure", share: 25, growth: "16.2%", icon: Landmark },
  { segment: "MEP Engineering", share: 20, growth: "15.1%", icon: Layers3 },
  { segment: "Construction Mgmt", share: 12, growth: "14.8%", icon: Target },
  { segment: "Facility Mgmt", share: 8, growth: "18.5%", icon: Users },
];

const yearlyGrowth = [
  { year: "2019", size: 4.5 },
  { year: "2020", size: 5.2 },
  { year: "2021", size: 6.1 },
  { year: "2022", size: 7.0 },
  { year: "2023", size: 8.2 },
  { year: "2024", size: 9.6 },
  { year: "2025E", size: 11.0 },
  { year: "2026E", size: 12.8 },
  { year: "2027E", size: 15.0 },
  { year: "2028E", size: 17.2 },
  { year: "2029E", size: 19.5 },
  { year: "2030E", size: 22.2 },
];

const maxSize = 22.2;

const keyStats = [
  { label: "of large AEC firms use BIM globally", value: "73%", source: "NBS BIM Report 2024" },
  { label: "average ROI on BIM investment", value: "634%", source: "Stanford CIFE Study" },
  { label: "reduction in project delivery time", value: "30%", source: "McGraw Hill Research" },
  { label: "fewer RFIs with BIM coordination", value: "40%", source: "Dodge Data Analytics" },
  { label: "cost savings on clash resolution", value: "$6.2M", source: "Average per $100M project" },
  { label: "of owners will require BIM by 2026", value: "85%", source: "Deloitte AEC Outlook" },
];

const regionalData = [
  { region: "North America", share: 32, size: "$3.1B", trend: "Mature, cloud BIM growing" },
  { region: "Europe", share: 28, size: "$2.7B", trend: "Mandate-driven, OpenBIM focus" },
  { region: "Asia-Pacific", share: 26, size: "$2.5B", trend: "Fastest growing, 18% CAGR" },
  { region: "Middle East & Africa", share: 9, size: "$0.86B", trend: "Mega project driven" },
  { region: "Latin America", share: 5, size: "$0.48B", trend: "Emerging, govt. push" },
];

const insightsHeroSlides = [
  { image: heroInsights1, badge: "BIM Industry Insights", headline: "The Global", headlineHighlight: "BIM Market", headlineEnd: "Landscape", subtitle: "Comprehensive data on BIM adoption worldwide — market size, country-level mandates, growth projections, and industry trends driving the $22B digital construction revolution." },
  { image: heroDigitalTwin, badge: "Market Intelligence", headline: "Data-Driven", headlineHighlight: "Construction", headlineEnd: "Revolution", subtitle: "From $9.6B in 2024 to $22.2B by 2030 — explore the explosive growth of Building Information Modeling across the globe." },
  { image: imgArchitecture, badge: "Global Trends", headline: "BIM Adoption", headlineHighlight: "Across Nations", subtitle: "Over 20 countries now mandate BIM for public projects. Discover adoption rates, mandates, and growth drivers shaping the AEC industry." },
];

export default function BIMInsightsPage() {
  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgArchitecture} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4">
              BIM Industry Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-4xl">
              The Global <span className="text-gradient">BIM Market</span> Landscape
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Comprehensive data on BIM adoption worldwide — market size, country-level mandates, growth projections, and industry trends driving the $22B digital construction revolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BIM Visual Showcase */}
      <section className="pb-8 -mt-4">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-3 gap-3 rounded-2xl overflow-hidden">
            {[
              { img: imgArchitecture, label: "BIM Architecture" },
              { img: imgMEPF, label: "MEP Coordination" },
              { img: imgFacilityMgmt, label: "Digital Twin & FM" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative aspect-[16/9] overflow-hidden rounded-xl group"
              >
                <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <p className="absolute bottom-2 left-3 text-xs font-semibold text-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARKET OVERVIEW ===== */}
      <section className="relative -mt-8 z-10 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="glass rounded-2xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {marketOverview.map((stat, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARKET GROWTH CHART ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Market Growth"
            title="BIM Market Size — 2019 to 2030"
            description="The global BIM market is projected to grow from $4.5B in 2019 to $22.2B by 2030 at a 14.5% CAGR."
          />
          <motion.div {...fadeUp} className="glass rounded-2xl p-6 md:p-8">
            <div className="flex items-end gap-2 md:gap-3 h-64 md:h-80">
              {yearlyGrowth.map((item, i) => {
                const heightPct = (item.size / maxSize) * 100;
                const isFuture = item.year.includes("E");
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${heightPct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
                      className={`w-full rounded-t-md relative ${
                        isFuture
                          ? "bg-gradient-to-t from-primary/20 to-primary/40 border border-dashed border-primary/30"
                          : "bg-gradient-to-t from-primary/40 to-primary"
                      }`}
                    >
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        ${item.size}B
                      </div>
                    </motion.div>
                    <span className={`text-[9px] md:text-[10px] ${isFuture ? "text-primary" : "text-muted-foreground"} font-medium`}>
                      {item.year}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-4 h-3 rounded-sm bg-primary" /> Actual
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-3 rounded-sm bg-primary/30 border border-dashed border-primary/40" /> Projected
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== COUNTRY ADOPTION ===== */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Adoption by Country"
            title="Global BIM Adoption Rates"
            description="BIM adoption varies widely — from 95% in the UK to emerging markets in India and Brazil. Government mandates are the #1 driver."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {countryAdoption.map((c, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="glass rounded-xl p-4 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{c.flag}</span>
                    <span className="font-display font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{c.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      c.status === "Mandatory" ? "bg-primary/15 text-primary" :
                      c.status === "Federal" ? "bg-primary/10 text-primary/80" :
                      c.status === "Encouraged" ? "bg-muted text-muted-foreground" :
                      c.status === "Growing" ? "bg-muted text-muted-foreground" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {c.status}
                    </span>
                    <span className="text-sm font-bold text-primary">{c.adoption}%</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.adoption}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.8 }}
                    className={`h-full rounded-full bg-gradient-to-r ${c.color}`}
                  />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1.5">📋 {c.mandate}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY STATISTICS ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Key Statistics"
            title="BIM by the Numbers"
            description="Research-backed statistics demonstrating the transformative impact of BIM on the AEC industry."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {keyStats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="glass rounded-xl p-5 text-center group hover:border-primary/30 transition-all"
              >
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-sm text-foreground font-medium mb-2">{stat.label}</p>
                <p className="text-[10px] text-muted-foreground italic">Source: {stat.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REGIONAL MARKET SHARE ===== */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Regional Breakdown"
            title="BIM Market by Region"
            description="North America leads in market size, but Asia-Pacific is the fastest growing region at 18% CAGR."
          />
          <div className="max-w-4xl mx-auto">
            {/* Visual bar chart */}
            <div className="space-y-4">
              {regionalData.map((r, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  className="glass rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-display font-bold text-foreground text-sm">{r.region}</span>
                      <span className="text-xs text-muted-foreground">({r.size})</span>
                    </div>
                    <span className="text-sm font-bold text-primary">{r.share}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.share}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary/50 to-primary"
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground">📈 {r.trend}</p>
                </motion.div>
              ))}
            </div>

            {/* Donut-style visual */}
            <motion.div {...fadeUp} className="mt-10 flex justify-center">
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {(() => {
                    let offset = 0;
                    const opacities = [1, 0.8, 0.6, 0.4, 0.25];
                    return regionalData.map((r, i) => {
                      const circumference = 2 * Math.PI * 40;
                      const dash = (r.share / 100) * circumference;
                      const gap = circumference - dash;
                      const el = (
                        <circle
                          key={i}
                          cx="50" cy="50" r="40"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="16"
                          strokeDasharray={`${dash} ${gap}`}
                          strokeDashoffset={-offset}
                          opacity={opacities[i]}
                          className="transition-all duration-500"
                        />
                      );
                      offset += dash;
                      return el;
                    });
                  })()}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-2xl font-display font-bold text-gradient">$9.6B</p>
                  <p className="text-[10px] text-muted-foreground">Total 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MARKET SEGMENTS ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Segments"
            title="BIM Market by Application"
            description="Architecture dominates current BIM usage, but facility management is the fastest-growing segment."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {marketSegments.map((seg, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="glass rounded-xl p-5 text-center group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gradient-primary transition-all duration-500">
                  <seg.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="font-display font-bold text-foreground text-sm">{seg.segment}</p>
                <p className="text-2xl font-display font-bold text-gradient mt-1">{seg.share}%</p>
                <p className="text-[10px] text-muted-foreground">Market Share</p>
                <div className="mt-2 pt-2 border-t border-border/30">
                  <p className="text-xs text-primary font-semibold">{seg.growth} CAGR</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GROWTH DRIVERS ===== */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Growth Drivers"
            title="What's Fueling BIM Adoption"
            description="Six macro trends are driving unprecedented BIM adoption across the global AEC industry."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {growthDrivers.map((driver, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="glass rounded-xl p-6 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all duration-500">
                    <driver.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">{driver.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{driver.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="BIM Evolution"
            title="Key Milestones in BIM History"
          />
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-px" />
            {[
              { year: "2002", event: "Autodesk acquires Revit — BIM enters mainstream AEC software" },
              { year: "2007", event: "GSA mandates BIM for all US federal projects over $10M" },
              { year: "2011", event: "UK Government BIM Strategy published — Level 2 roadmap" },
              { year: "2014", event: "Singapore mandates BIM e-submission for all buildings >5,000 sqm" },
              { year: "2016", event: "UK Level 2 BIM mandate takes effect — global benchmark set" },
              { year: "2018", event: "ISO 19650 published — international BIM information management standard" },
              { year: "2020", event: "Germany mandates BIM for all federal infrastructure projects" },
              { year: "2022", event: "Global BIM market crosses $7B — digital twin integration accelerates" },
              { year: "2024", event: "India mandates BIM for government projects >₹100 Crore" },
              { year: "2025", event: "AI-integrated BIM tools go mainstream — generative design, auto-clash" },
              { year: "2030", event: "Projected: $22.2B market — BIM becomes default for all construction" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className={`relative flex items-start gap-4 mb-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:text-${i % 2 === 0 ? "right" : "left"}`}
              >
                <div className="pl-10 md:pl-0 md:w-1/2">
                  <div className={`glass rounded-lg p-4 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <span className="text-xs font-bold text-primary">{item.year}</span>
                    <p className="text-sm text-muted-foreground mt-1">{item.event}</p>
                  </div>
                </div>
                <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-4 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeUp} className="glass rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Ready to Join the BIM Revolution?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                WASI Digital Engineering helps you leverage BIM to reduce costs, accelerate delivery, and stay ahead of mandates. Let's talk about your next project.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all glow-primary"
                >
                  Get a Free BIM Audit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-muted/50 hover:border-primary/30 transition-all"
                >
                  Explore Services <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
