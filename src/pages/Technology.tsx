import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import DivisionSEO from "@/components/DivisionSEO";
import SectionHeading from "@/components/SectionHeading";
import BIMLayerViewer from "@/components/BIMLayerViewer";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { useDivision } from "@/contexts/DivisionContext";
import {
  coreConstructionTech,
  constructionEquipment,
  constructionSafetyProtocols,
  constructionWorkerWelfare,
  constructionSafetyStats,
  constructionCompletion,
  constructionEnvironment,
  futureConstructionTech,
  constructionCertifications,
} from "@/data/constructionContent";
import {
  Layers3, Cpu, Brain, Eye, Activity, Zap, Wrench, Users2,
  ShieldCheck, Siren, Building2, BarChart3, Plane, ClipboardCheck, CheckCircle2,
} from "lucide-react";

const bimTech = [
  { icon: Layers3, title: "3D–7D BIM Lifecycle",     desc: "Complete LOD 100–500 progression with time scheduling, cost estimation, sustainability analysis, and facility management data." },
  { icon: Cpu,     title: "Digital Twin Technology", desc: "Azure Digital Twins, Autodesk Tandem & Bentley iTwin with live IoT sensor integration, predictive maintenance and energy optimization." },
  { icon: Brain,   title: "AI & Machine Learning",   desc: "Automated code compliance checking, generative design exploration, and computer-vision based defect detection on site." },
  { icon: Eye,     title: "VR / AR Visualization",   desc: "Enscape & Twinmotion walkthroughs, HoloLens AR overlay on-site, and multi-user VR design review sessions." },
];

const twinMetrics = [
  { icon: Activity,     value: "24/7",  label: "Environmental Monitoring", desc: "Temperature, humidity, air quality and CO₂ tracked continuously." , color: "#00d4ff" },
  { icon: Zap,          value: "30%",   label: "Energy Cost Reduction",    desc: "Live consumption tracking and peak demand analysis." , color: "#10b981" },
  { icon: Wrench,       value: "85%",   label: "Predictive Accuracy",      desc: "AI-powered equipment health prediction and maintenance forecasting." , color: "#8b5cf6" },
  { icon: Users2,       value: "95%",   label: "Space Utilization",        desc: "Occupancy analytics and crowd-flow heat maps." , color: "#3b82f6" },
  { icon: ShieldCheck,  value: "100%",  label: "Security Coverage",        desc: "CCTV & access control linked to the building model." , color: "#f43f5e" },
  { icon: Siren,        value: "<2 min",label: "Emergency Response",       desc: "Fire alarm integration and evacuation route optimization." , color: "#f59e0b" },
];

const constructionTech = [
  { icon: Building2,      title: "Structural Analysis Suite", desc: "ETABS, STAAD Pro & SAP2000 — full IS-code compliant analysis for RCC, steel and PEB structures across all seismic zones." },
  { icon: BarChart3,      title: "Project Control Systems",   desc: "Primavera P6 and MS Project — CPM scheduling, earned-value tracking, resource leveling and float analysis." },
  { icon: Plane,          title: "Drone & Survey Tech",       desc: "Aerial mapping, weekly progress monitoring, photogrammetry, and accurate site volume measurement." },
  { icon: ClipboardCheck, title: "Quality & Safety Systems",  desc: "Power BI dashboards, NCR management, cube-test tracking and digital safety reporting." },
];

const stack = [
  { name: "Autodesk Revit",   cat: "BIM Authoring",     desc: "Primary BIM authoring for architecture, structure & MEP." },
  { name: "Navisworks",        cat: "Coordination",      desc: "Federated model review and clash detection." },
  { name: "AutoCAD",           cat: "Drafting",          desc: "2D drafting and detailed shop drawings." },
  { name: "ETABS",             cat: "Structural",        desc: "Building analysis & design per IS 456 / IS 1893." },
  { name: "STAAD Pro",         cat: "Structural",        desc: "Steel & PEB design per IS 800." },
  { name: "SAP2000",           cat: "Structural",        desc: "Complex structural & dynamic analysis." },
  { name: "Primavera P6",      cat: "Scheduling",        desc: "Enterprise project planning and EVM." },
  { name: "Dynamo",            cat: "Automation",        desc: "Visual programming for Revit automation." },
  { name: "BIM 360 / ACC",     cat: "CDE",               desc: "Common Data Environment & document control." },
  { name: "Tekla Structures",  cat: "Structural BIM",    desc: "Steel detailing & fabrication models." },
  { name: "Enscape / Lumion",  cat: "Visualization",     desc: "Real-time rendering and walkthroughs." },
  { name: "Twinmotion",        cat: "Visualization",     desc: "Immersive design presentations." },
  { name: "Python / AI-ML",    cat: "AI & Analytics",    desc: "Custom automation, ML models, generative design." },
  { name: "Power BI",          cat: "Analytics",         desc: "Project dashboards & KPI reporting." },
  { name: "Unity / Unreal",    cat: "VR/AR",             desc: "Real-time interactive VR experiences." },
  { name: "Drone Survey",      cat: "Field Tech",        desc: "Aerial mapping & progress monitoring." },
  { name: "ReCap / CloudCompare", cat: "Scan-to-BIM",    desc: "Point cloud processing & as-built modeling." },
  { name: "MS Project",        cat: "Scheduling",        desc: "Mid-size project scheduling & tracking." },
];

export default function TechnologyPage() {
  const { division } = useDivision();
  const isConstruction = division === "construction";
  return (
    <Layout>
      <DivisionSEO />
      {/* HERO */}
      <section className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-6">
              ● {isConstruction ? "Construction Technology" : "Technology Stack"}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-5">
              <span className="text-gradient">{isConstruction ? "Construction Powered by Innovation" : "Engineering Powered by Intelligence"}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {isConstruction
                ? "BIM integration, LiDAR, drones, IoT & AI — the on-site technology stack that makes every WITEC construction project faster, safer and more precise."
                : "18 industry-leading tools, AI & ML pipelines, and IoT-connected Digital Twins — the technology backbone behind every WITEC project."}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {(isConstruction
                ? ["BIM-Powered", "IoT Sites", "Drone Surveys", "ISO 9001 · 14001 · 45001"]
                : ["18 Software Tools", "AI / ML Powered", "IoT Integration", "ISO 19650"]
              ).map((b) => (
                <span key={b} className="px-3 py-1.5 rounded-full text-xs font-medium bg-card border border-border text-foreground">{b}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Construction sections (mode: construction) */}
      {isConstruction && (
        <>
          <section className="section-padding bg-card/30">
            <div className="container mx-auto px-4 md:px-8">
              <SectionHeading label="● Core Technologies" title="Six Pillars of Modern Construction" description="Measurable outcomes from technology integrated into every WITEC site." />
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {coreConstructionTech.map((c) => (
                  <motion.div key={c.title} variants={staggerItem} className="glass rounded-xl p-6 border-t-[3px] border-emerald-500/60">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center"><c.icon size={22} /></div>
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full">{c.metric}</span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{c.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
                    <div className="grid grid-cols-2 gap-2 border-t border-border/50 pt-3">
                      {c.features.map((f) => (
                        <span key={f} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> {f}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          <section className="section-padding">
            <div className="container mx-auto px-4 md:px-8">
              <SectionHeading label="● Equipment Fleet" title="12 Machines. One Efficient Site." description="Owned or long-term leased equipment — no waiting on third-party rentals." />
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {constructionEquipment.map((e) => (
                  <motion.div key={e} variants={staggerItem} className="glass rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:border-primary/30 transition-all">{e}</motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          <section className="section-padding bg-card/30">
            <div className="container mx-auto px-4 md:px-8">
              <SectionHeading label="● Safety Systems" title="Zero-Compromise Site Safety" description="Eight mandatory protocols enforced on every WITEC Construction site, backed by BOCW Act and ISO 45001 processes." />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {constructionSafetyStats.map((s) => (
                  <div key={s.label} className="glass rounded-xl p-5 text-center">
                    <div className="font-display text-2xl md:text-3xl font-extrabold text-rose-500">{s.value}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {constructionSafetyProtocols.map((s) => (
                  <div key={s.title} className="glass rounded-xl p-5 border-t-[3px] border-rose-500/60">
                    <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center mb-3"><s.icon size={20} /></div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16">
                <SectionHeading label="● Worker Welfare" title="People First, Always" description="Insurance, medical care, hygiene and training standards that go beyond statutory minimums." />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {constructionWorkerWelfare.map((w) => (
                    <div key={w.title} className="glass rounded-xl p-5 border-t-[3px] border-amber-500/60">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3"><w.icon size={20} /></div>
                      <h3 className="font-display font-semibold text-foreground mb-1">{w.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="section-padding">
            <div className="container mx-auto px-4 md:px-8">
              <SectionHeading label="● Environmental Protection" title="Building Green, Not Just Big" description="MOEF&CC, CPCB and state pollution control board compliance built into every site plan." />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {constructionEnvironment.map((e) => (
                  <div key={e.title} className="glass rounded-xl p-5 border-t-[3px] border-emerald-500/60">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3"><e.icon size={20} /></div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{e.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="section-padding bg-card/30">
            <div className="container mx-auto px-4 md:px-8">
              <SectionHeading label="● Project Completion" title="Smooth & Fast Project Delivery" description="Lean planning, P6 scheduling and six quality gates that make on-time, zero-defect handover repeatable." />
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {constructionCompletion.map((c) => (
                  <motion.div key={c.title} variants={staggerItem} className="glass rounded-xl p-6 border-t-[3px] border-primary/60">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><c.icon size={22} /></div>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{c.stat}</span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{c.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          <section className="section-padding bg-card/30">
            <div className="container mx-auto px-4 md:px-8">
              <SectionHeading label="● Future Technologies" title="What's Next in Our Pipeline" description="Six emerging technologies WITEC Construction is piloting for the next generation of Indian projects." />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {futureConstructionTech.map((f) => (
                  <div key={f.title} className="glass rounded-xl p-6">
                    <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="section-padding">
            <div className="container mx-auto px-4 md:px-8">
              <SectionHeading label="● Certifications" title="Compliant by Design" />
              <div className="flex flex-wrap gap-3 justify-center">
                {constructionCertifications.map((c) => (
                  <span key={c} className="px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">{c}</span>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* BIM sections (mode: bim) */}
      {!isConstruction && (<>
      {/* INTERACTIVE BIM LAYER VIEWER */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="● Interactive Demo"
            title="Explore a BIM Model Live"
            description="Toggle disciplines on and off to see how WITEC federates Structural, Architectural, MEP and Interior models into one coordinated source of truth."
          />
          <BIMLayerViewer />
        </div>
      </section>

      {/* BIM TECHNOLOGY */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="● BIM Technology" title="The Digital Engineering Stack" />
          <div className="grid md:grid-cols-2 gap-6">
            {bimTech.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-xl p-6 flex gap-5 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <t.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL TWIN METRICS */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="● Digital Twin"
            title="Capabilities at a Glance"
            description="Six measurable outcomes from a live, sensor-connected building twin."
          />
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {twinMetrics.map((m) => (
              <motion.div key={m.label} variants={staggerItem}
                className="glass rounded-xl p-6 relative overflow-hidden"
                style={{ borderTop: `3px solid ${m.color}` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${m.color}22`, color: m.color }}>
                    <m.icon size={20} />
                  </div>
                  <span className="font-display text-2xl font-extrabold" style={{ color: m.color }}>{m.value}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{m.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONSTRUCTION TECH */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="● Construction Technology" title="On-Site Precision Tools" />
          <div className="grid md:grid-cols-2 gap-6">
            {constructionTech.map((t, i) => (
              <motion.div key={t.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-xl p-6 flex gap-5 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <t.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL STACK GRID */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="● Full Stack"
            title="18 Tools Powering Every Project"
            description="From BIM authoring to scheduling, analytics and field tech — the full toolbox WITEC engineers use daily."
          />
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {stack.map((s) => (
              <motion.div key={s.name} variants={staggerItem}
                className="glass rounded-xl p-5 hover:border-primary/30 hover:translate-y-[-2px] transition-all"
              >
                <div className="flex items-center justify-between mb-2 gap-2">
                  <h3 className="font-display font-semibold text-foreground">{s.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {s.cat}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      </>)}
    </Layout>
  );
}