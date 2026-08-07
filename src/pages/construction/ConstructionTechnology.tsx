import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import DivisionSEO from "@/components/DivisionSEO";
import AnimatedSection from "@/components/AnimatedSection";
import {
  wcServicesBg, wcTechIntro, wcCoreTechs, wcEquipment, wcFuturisticTechs, wcTechVision,
  wcSafetyProtocols, wcWorkerWelfare, wcSafetyStats, wcEnvProtection, wcProjectCompletion,
  wcCertifications,
} from "@/data/wasiConstructionData";

const tabs = [
  { key: "technology", label: "Core Tech" },
  { key: "futuristic", label: "Futuristic" },
  { key: "safety", label: "Safety" },
  { key: "environment", label: "Environment" },
  { key: "completion", label: "Completion" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function ConstructionTechnology() {
  const [tab, setTab] = useState<TabKey>("technology");

  return (
    <Layout>
      <DivisionSEO
        title="Construction Technology & Safety | BIM, 3D Printing, IoT — WITEC Construction Nagpur"
        description="Advanced construction technology in Nagpur — BIM modeling, 3D scanning, drone surveying, IoT monitoring, AI project management, site safety protocols and green building."
      />

      <section className="relative py-28 overflow-hidden">
        <img src={wcServicesBg} alt="Construction technology and site safety" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-primary font-semibold mb-4">{wcTechIntro.eyebrow}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {wcTechIntro.title1} <span className="text-primary">{wcTechIntro.title2}</span>
            <br />
            <span className="text-accent text-3xl md:text-5xl">&amp; {wcTechIntro.safetyTitle}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto">{wcTechIntro.desc}</motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-2 bg-card/50 p-2 rounded-xl border border-border/50 mb-12">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`py-3 rounded-lg text-xs tracking-wider uppercase font-semibold transition-all ${
                tab === t.key ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}>
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
            {tab === "technology" && (
              <>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Core <span className="text-primary">Technologies</span></h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-sm">
                  Six foundational technologies that power every WITEC Construction project — from initial survey to final handover.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {wcCoreTechs.map((tech) => (
                    <div key={tech.title} className="glass rounded-2xl p-8 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <tech.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xs text-accent tracking-wider">{tech.stats}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{tech.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{tech.desc}</p>
                      <div className="grid grid-cols-2 gap-2 border-t border-border/50 pt-4">
                        {tech.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="w-3 h-3 text-primary shrink-0" /><span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-20">
                  <h3 className="font-display text-2xl font-bold text-center text-foreground mb-10">Equipment <span className="text-primary">Fleet</span></h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {wcEquipment.map((e) => (
                      <div key={e} className="glass rounded-xl px-4 py-3 text-center">
                        <p className="text-sm text-foreground">{e}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {tab === "futuristic" && (
              <>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Future <span className="text-primary">Technologies</span></h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-sm">
                  Technologies we're actively researching and implementing to stay ahead of the construction industry curve.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {wcFuturisticTechs.map((tech) => (
                    <div key={tech.title} className="glass rounded-2xl p-8 h-full">
                      <tech.icon className="w-10 h-10 text-primary mb-5" />
                      <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{tech.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tech.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="glass rounded-2xl p-10 md:p-16 text-center mt-16">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">{wcTechVision.title}</h3>
                  <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">{wcTechVision.desc}</p>
                </div>
              </>
            )}

            {tab === "safety" && (
              <>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Site <span className="text-primary">Safety</span></h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-sm">
                  Zero-accident philosophy. Every life on our construction site is protected by multiple layers of safety protocols, training, and technology.
                </p>
                <h3 className="font-display text-xl font-semibold text-center mb-8 text-accent">Site Safety Protocols</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {wcSafetyProtocols.map((item) => (
                    <div key={item.title} className="glass rounded-2xl p-6 h-full">
                      <item.icon className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-display text-sm font-semibold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <h3 className="font-display text-xl font-semibold text-center mb-8 text-accent">Worker Welfare Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wcWorkerWelfare.map((item) => (
                    <div key={item.title} className="glass rounded-2xl p-6 h-full">
                      <item.icon className="w-8 h-8 text-accent mb-3" />
                      <h4 className="font-display text-sm font-semibold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                  {wcSafetyStats.map((s) => (
                    <div key={s.label} className="glass rounded-2xl p-6 text-center">
                      <p className="font-display text-3xl font-bold text-primary mb-2">{s.value}</p>
                      <p className="text-xs text-muted-foreground tracking-wider uppercase">{s.label}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {tab === "environment" && (
              <>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Environmental <span className="text-primary">Protection</span></h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-sm">
                  We're committed to minimizing our environmental impact through sustainable practices, green technologies, and responsible waste management.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {wcEnvProtection.map((item) => (
                    <div key={item.title} className="glass rounded-2xl p-8 h-full">
                      <item.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {tab === "completion" && (
              <>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Project <span className="text-primary">Completion</span></h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-sm">
                  Six methodologies that ensure every WITEC Construction project is delivered on time, within budget, and at the highest quality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {wcProjectCompletion.map((item) => (
                    <div key={item.title} className="glass rounded-2xl p-8 h-full">
                      <item.icon className="w-10 h-10 text-primary mb-4" />
                      <p className="text-xs text-accent tracking-wider mb-2">{item.stat}</p>
                      <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-20">
                  <h3 className="font-display text-2xl font-bold text-center text-foreground mb-10">Certifications &amp; <span className="text-primary">Compliance</span></h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {wcCertifications.map((c) => (
                      <div key={c} className="glass rounded-xl px-5 py-4 flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <p className="text-sm text-foreground">{c}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </Layout>
  );
}
