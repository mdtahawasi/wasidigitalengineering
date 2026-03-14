import { motion } from "framer-motion";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Globe, Plus, Mail, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import OrgChart from "@/components/OrgChart";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerItem, staggerItemScale } from "@/lib/animations";
import aboutTeam from "@/assets/about-team.jpg";
import heroTeamCollab from "@/assets/hero-team-collab.jpg";
import heroConstruction from "@/assets/hero-construction-site.jpg";
import heroAbout1 from "@/assets/hero-about-1.jpg";
import PageHeroSlider from "@/components/PageHeroSlider";

const valueKeys = [
  { icon: Target, titleKey: "value.precision", descKey: "value.precisionDesc" },
  { icon: Eye, titleKey: "value.innovation", descKey: "value.innovationDesc" },
  { icon: Heart, titleKey: "value.integrity", descKey: "value.integrityDesc" },
  { icon: Award, titleKey: "value.excellence", descKey: "value.excellenceDesc" },
];

const aboutHeroSlides = [
  { image: heroTeamCollab, badge: "About Us", headline: "Pioneering the", headlineHighlight: "Digital Future", headlineEnd: "of Construction", subtitle: "From concept to completion — we transform how the AEC industry designs, builds, and operates through intelligent BIM solutions." },
  { image: heroAbout1, badge: "Our Mission", headline: "Engineering", headlineHighlight: "Excellence", headlineEnd: "Through Innovation", subtitle: "6+ years of expertise delivering precision BIM services across Architecture, Structure, MEPF, and Digital Twin technologies." },
  { image: heroConstruction, badge: "Global Impact", headline: "Building Smarter", headlineHighlight: "Across Borders", subtitle: "30+ projects delivered across India, UAE, and Saudi Arabia — setting new standards in digital construction." },
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
  { name: "Md Taha Wasi", role: "Founder & CEO", qualifications: "Masters in Construction & Project Management | MBA", initials: "TW", email: "bimengineer11@gmail.com", phone: "+91 81779 97522" },
];

const orgTeams = [
  {
    id: "bim",
    label: "BIM Team",
    chart: {
      name: "Md Taha Wasi", role: "CEO & BIM Director",
      children: [
        {
          name: "BIM Manager", role: "Overall BIM Coordination", badge: "Management",
          children: [
            { name: "Architectural BIM Lead", role: "LOD 100–500 Models", badge: "Architecture", children: [
              { name: "Sr. Architectural Modeller", role: "Complex Modeling & CD Sets" },
              { name: "Architectural Modeller", role: "Design Development" },
              { name: "Jr. Architectural Modeller", role: "Drafting & Support" },
            ]},
            { name: "Structural BIM Lead", role: "RCC, Steel & Composite", badge: "Structure", children: [
              { name: "Sr. Structural Modeller", role: "Detailing & Analysis" },
              { name: "Structural Modeller", role: "Modeling & Rebar" },
              { name: "Jr. Structural Modeller", role: "Shop Drawings" },
            ]},
            { name: "MEP BIM Lead", role: "HVAC, Plumbing, Elec, FP", badge: "MEPF", children: [
              { name: "Sr. MEP Modeller", role: "Systems & Coordination" },
              { name: "MEP Modeller", role: "Duct/Pipe Routing" },
              { name: "Jr. MEP Modeller", role: "Support & Drafting" },
            ]},
            { name: "Coordination Lead", role: "Clash Detection & Resolution", badge: "Coordination", children: [
              { name: "Sr. Coordinator", role: "Navisworks & BIM 360" },
              { name: "Coordinator", role: "Issue Tracking & Reports" },
            ]},
          ],
        },
        {
          name: "Information Manager", role: "CDE & Data Standards", badge: "Data",
          children: [
            { name: "COBie Specialist", role: "Asset Data & FM Handover" },
            { name: "QA/QC Engineer", role: "Model Auditing & Standards" },
          ],
        },
      ],
    },
  },
  {
    id: "design",
    label: "Design Team",
    chart: {
      name: "Md Taha Wasi", role: "CEO & Design Director",
      children: [
        {
          name: "Architecture Lead", role: "Design & Documentation", badge: "Architecture",
          children: [
            { name: "Sr. Architect", role: "Concept & Schematic Design" },
            { name: "Interior Fit Out Designer", role: "Interior BIM & Design" },
            { name: "Facade Consultant", role: "Curtain Wall & Cladding" },
            { name: "Landscape Designer", role: "Hardscape & Softscape" },
          ],
        },
        {
          name: "Engineering Lead", role: "Structural & Infrastructure", badge: "Engineering",
          children: [
            { name: "Sr. Structural Engineer", role: "RCC, Steel & Composite" },
            { name: "Infrastructure Engineer", role: "Roads, Bridges, Utilities" },
            { name: "MEPF Engineer", role: "Mechanical, Electrical, Plumbing, Fire" },
            { name: "Sustainability Consultant", role: "Green Building & LEED" },
          ],
        },
      ],
    },
  },
  {
    id: "management",
    label: "Management Team",
    chart: {
      name: "Md Taha Wasi", role: "CEO & Managing Director",
      children: [
        {
          name: "Operations Manager", role: "Project Delivery & Ops", badge: "Operations",
          children: [
            { name: "Project Manager", role: "Timeline & Resource Planning" },
            { name: "Quality Manager", role: "ISO 19650 Compliance" },
            { name: "Procurement Lead", role: "Vendor & License Mgmt" },
          ],
        },
        {
          name: "Business Development", role: "Sales & Partnerships", badge: "Growth",
          children: [
            { name: "BD Manager – India", role: "Domestic Market" },
            { name: "BD Manager – UAE/KSA", role: "International Market" },
            { name: "Marketing Lead", role: "Digital & Brand Strategy" },
          ],
        },
        {
          name: "Finance & Admin", role: "Accounts & Compliance", badge: "Finance",
          children: [
            { name: "Finance Manager", role: "Budgets & Invoicing" },
            { name: "Admin Coordinator", role: "Office & Logistics" },
          ],
        },
      ],
    },
  },
  {
    id: "hr",
    label: "HR Team",
    chart: {
      name: "Md Taha Wasi", role: "CEO",
      children: [
        {
          name: "HR Manager", role: "People & Culture", badge: "HR",
          children: [
            { name: "Talent Acquisition Lead", role: "Recruitment & Onboarding" },
            { name: "L&D Specialist", role: "Training & Certifications" },
            { name: "Employee Relations", role: "Engagement & Retention" },
            { name: "HR Operations", role: "Payroll, Benefits & Compliance" },
          ],
        },
      ],
    },
  },
];

export default function AboutPage() {
  const { t } = useLanguage();

  useScrollToHash();

  return (
    <Layout>
      <PageHeroSlider slides={aboutHeroSlides} />

      {/* Image + Story */}
      <section id="our-story" className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeLeft} className="rounded-2xl overflow-hidden">
              <img src={aboutTeam} alt="WASI Digital Engineering team" className="w-full h-auto object-cover rounded-2xl" />
            </motion.div>
            <motion.div {...fadeRight} transition={{ delay: 0.2, duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">{t("about.ourStory")}</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Founded in 2019 in India by Md Taha Wasi, WASI Digital Engineering began with a clear mission: to bridge the gap between traditional construction methods and the digital future. What started as a small team of BIM enthusiasts has grown into a consultancy serving ambitious projects across the AEC industry.</p>
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
          >
            <OrgChart teams={orgTeams} />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
