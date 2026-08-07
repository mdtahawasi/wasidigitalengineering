import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import Layout from "@/components/Layout";
import DivisionSEO from "@/components/DivisionSEO";
import AnimatedSection from "@/components/AnimatedSection";
import {
  wcProjectsBg, wcProjectsIntro, wcProjects, wcSectorFilters, wcViewModes,
  wcViewModeImages, wcViewModeDetails, wcDisciplineScope,
  type WcSector, type WcViewMode,
} from "@/data/wasiConstructionData";

export default function ConstructionProjects() {
  const [activeSector, setActiveSector] = useState<WcSector>("all");
  const [activeView, setActiveView] = useState<WcViewMode>("designs");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filtered = activeSector === "all" ? wcProjects : wcProjects.filter((p) => p.sector === activeSector);
  const detail = wcProjects.find((p) => p.id === selectedProject) ?? null;

  return (
    <Layout>
      <DivisionSEO
        title="Construction Projects in Nagpur | Residential, Commercial & Industrial — WITEC Construction"
        description="Explore WITEC Construction's portfolio of residential, commercial and industrial projects in Nagpur — bungalows, villas, apartments, offices, warehouses and factories."
      />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img src={wcProjectsBg} alt="Construction projects portfolio" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-primary font-semibold mb-4">{wcProjectsIntro.eyebrow}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {wcProjectsIntro.title1} <span className="text-primary">{wcProjectsIntro.title2}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto">{wcProjectsIntro.desc}</motion.p>
        </div>
      </section>

      {/* Sector filters */}
      <section className="py-8 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-center gap-3">
          {wcSectorFilters.map((s) => (
            <button key={s.key} onClick={() => setActiveSector(s.key)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-widest border transition-all ${
                activeSector === s.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}>
              <s.icon size={14} />
              {s.label.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-sm">{wcProjectsIntro.bySector}</p>
          <AnimatePresence mode="wait">
            <motion.div key={activeSector} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p) => (
                <button key={p.id} onClick={() => setSelectedProject(p.id)}
                  className="glass rounded-2xl overflow-hidden group text-left transition-all hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2 py-1 text-[10px] font-semibold tracking-wider bg-primary/90 text-primary-foreground rounded-md">{p.sector.toUpperCase()}</span>
                      <span className="px-2 py-1 text-[10px] font-semibold tracking-wider bg-accent/90 text-accent-foreground rounded-md">{p.type}</span>
                    </div>
                    <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-semibold tracking-wider rounded-md bg-secondary text-secondary-foreground">{p.status}</span>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-display text-lg font-bold text-foreground">{p.name}</h3>
                      <p className="text-xs text-muted-foreground">{p.area}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                    <p className="text-[10px] font-semibold tracking-widest text-primary mb-2">DISCIPLINE SCOPE</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.disciplines.map((d) => (
                        <span key={d} className="px-2 py-0.5 text-[10px] bg-secondary/80 text-secondary-foreground rounded-md border border-border/30">{d}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-[10px] font-semibold tracking-wider border border-primary/30 text-primary rounded-md">{tag}</span>
                      ))}
                    </div>
                    <span className="mt-4 flex items-center gap-1 text-xs text-primary group-hover:gap-2 transition-all">
                      View Details <ChevronRight size={12} />
                    </span>
                  </div>
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project detail modal */}
      <AnimatePresence>
        {detail && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto relative">
              <button onClick={() => setSelectedProject(null)} aria-label="Close project details"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-background/80 border border-border/60 flex items-center justify-center text-foreground">
                <X size={16} />
              </button>
              <img src={detail.image} alt={detail.name} className="w-full h-60 object-cover" />
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 text-[10px] font-semibold tracking-wider bg-primary/90 text-primary-foreground rounded-md">{detail.sector.toUpperCase()}</span>
                  <span className="px-2 py-1 text-[10px] font-semibold tracking-wider bg-accent/90 text-accent-foreground rounded-md">{detail.type}</span>
                  <span className="px-2 py-1 text-[10px] font-semibold tracking-wider bg-secondary text-secondary-foreground rounded-md">{detail.status}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">{detail.name}</h2>
                <p className="text-sm text-primary mb-6">Built-up Area — {detail.area}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{detail.desc}</p>
                <p className="text-[10px] font-semibold tracking-widest text-primary mb-3">DISCIPLINE SCOPE</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {detail.disciplines.map((d) => (
                    <span key={d} className="px-3 py-1.5 text-xs bg-secondary/80 text-secondary-foreground rounded-md border border-border/30">{d}</span>
                  ))}
                </div>
                <p className="text-[10px] font-semibold tracking-widest text-primary mb-3">STANDARDS & HIGHLIGHTS</p>
                <div className="flex flex-wrap gap-2">
                  {detail.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-xs font-semibold tracking-wider border border-primary/30 text-primary rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visual explanation */}
      <AnimatedSection className="bg-card/40 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <p className="text-xs tracking-[0.3em] uppercase text-accent text-center mb-3">HOW WE PRESENT PROJECTS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Visual <span className="text-primary">Explanation</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-sm">
            Every project is documented with 5 visual layers — from design renders to exploded 3D component views for complete transparency and understanding.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {wcViewModes.map((v) => (
              <button key={v.key} onClick={() => setActiveView(v.key)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[10px] sm:text-xs font-semibold tracking-widest border transition-all ${
                  activeView === v.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}>
                <v.icon size={14} />
                {v.label.toUpperCase()}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeView} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden">
                <img src={wcViewModeImages[activeView]} alt={wcViewModeDetails[activeView].title} className="w-full h-[300px] sm:h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="glass rounded-2xl p-8">
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-6 text-foreground">{wcViewModeDetails[activeView].title}</h3>
                <ul className="space-y-4">
                  {wcViewModeDetails[activeView].points.map((point, i) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] text-primary font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimatedSection>

      {/* Discipline-wise scope */}
      <AnimatedSection>
        <div className="container mx-auto px-4 md:px-8 py-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary text-center mb-3">MULTI-DISCIPLINE</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Discipline-Wise <span className="text-primary">Scope</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-sm">
            Every project is executed with complete multi-discipline coordination — all under one roof, no outsourcing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wcDisciplineScope.map((d) => (
              <div key={d.discipline} className="glass rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-sm font-semibold text-foreground">{d.discipline}</h3>
                  <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-md">{d.pct}</span>
                </div>
                <div className="w-full h-1 bg-secondary rounded-full mb-4">
                  <div className="h-full bg-primary rounded-full" style={{ width: d.pct }} />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{d.scope}</p>
                <p className="text-[10px] font-semibold tracking-wider text-primary">{d.codes}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
}
