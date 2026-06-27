import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDivision } from "@/contexts/DivisionContext";
import { constructionProjects } from "@/data/constructionContent";
import { staggerContainer, staggerItem } from "@/lib/animations";
import heroConstruction from "@/assets/hero-construction-site.jpg";
import projectHGR from "@/assets/project-hgr.jpg";
import projectLimeGarden from "@/assets/project-lime-garden.jpg";
import projectParkField from "@/assets/project-park-field.jpg";
import projectGodrej from "@/assets/project-godrej.jpg";
import projectMayfair from "@/assets/project-mayfair.jpg";
import projectKGA from "@/assets/project-kga.jpg";
import projectNupco from "@/assets/project-nupco.jpg";
import projectPearlCentre from "@/assets/project-pearl-centre.jpg";

const categoryKeys = [
  { key: "All", tKey: "projects.all" },
  { key: "Residential", tKey: "projects.residential" },
  { key: "Commercial", tKey: "projects.commercial" },
  { key: "Industrial", tKey: "projects.industrial" },
  { key: "Infrastructure", tKey: "projects.infrastructure" },
];

const projects = [
  {
    img: projectHGR,
    title: "Al Habtoor Grand Residency (HGR)",
    category: "Residential",
    location: "Dubai, UAE",
    scope: "Architecture, Structure (Composite), Facade, Landscape, MEPF – LOD 300-500",
    gfa: "72,292 SQ.M",
    config: "2B+G+6P+2MEP+47 Residential Floors+Roof",
  },
  {
    img: projectLimeGarden,
    title: "Lime Garden",
    category: "Residential",
    location: "Dubai, UAE",
    scope: "Architecture, Structure (RCC), Façade, ID, Landscape, MEPF – LOD 300-500",
    gfa: "9,400 SQ.M",
    config: "1B+G+Podium+23 Residential Floors+Roof+Rooftop",
  },
  {
    img: projectParkField,
    title: "Park Field",
    category: "Residential",
    location: "Dubai, UAE",
    scope: "Architecture, Structure (RCC), Façade, Landscape, MEPF – LOD 300-500",
    gfa: "8,900 SQ.M",
    config: "1B+G+1P | Tower 1: 10F+R | Tower 2: 19F+R",
  },
  {
    img: projectPearlCentre,
    title: "Pearl Centre – Dalma Island",
    category: "Commercial",
    location: "Abu Dhabi, UAE",
    scope: "Architecture, Structure, MEP, Interiors, Landscape – LOD 100-500 (ISO 19650)",
    gfa: "1,004 SQ.M + Ancillary Blocks",
    config: "Main Building + Staff Blocks A/B/C + MEP Block + Ancillary",
  },
  {
    img: projectGodrej,
    title: "Godrej & Boyce Industrial Campus",
    category: "Industrial",
    location: "India",
    scope: "Architecture, Structure (RCC & Steel), Façade, Infrastructure, MEPF, Landscape – LOD 300-500",
    gfa: "34,000 SQ.M",
    config: "Aerospace & PES Factory Zones + Offices + Substations",
  },
  {
    img: projectMayfair,
    title: "Mayfair Friendship",
    category: "Residential",
    location: "Mumbai, India",
    scope: "Architecture, Structure (RCC), Façade, MEPF – LOD 300-350",
    gfa: "—",
    config: "G+14 Residential Floors+Roof",
  },
  {
    img: projectKGA,
    title: "KGA Mall",
    category: "Commercial",
    location: "Kottayam, Kerala, India",
    scope: "Architecture, Structure, Façade, MEPF – LOD 300-500",
    gfa: "3,500 SQ.M",
    config: "2B+LG+G+1 Service+6 Commercial Floors+Roof",
  },
  {
    img: projectNupco,
    title: "NUPCO Warehouse",
    category: "Infrastructure",
    location: "Saudi Arabia",
    scope: "Infrastructure, Landscape, MEP Coordination – LOD 300-500",
    gfa: "Large-Scale Industrial",
    config: "Warehousing + Road Networks + Utilities",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();
  const { division } = useDivision();
  const isConstruction = division === "construction";

  const activeList = isConstruction
    ? constructionProjects.map((p) => ({
        img: p.img,
        title: p.title,
        category: p.category,
        location: p.location,
        scope: p.desc,
        gfa: p.area,
        config: p.disciplines.join(" · "),
        tags: p.tags,
        status: p.status,
      }))
    : projects.map((p) => ({ ...p, tags: undefined as string[] | undefined, status: undefined as string | undefined }));

  const filtered = activeCategory === "All" ? activeList : activeList.filter((p) => p.category === activeCategory);

  const getCategoryTranslation = (cat: string) => {
    const found = categoryKeys.find((c) => c.key === cat);
    return found ? t(found.tKey) : cat;
  };

  return (
    <Layout>
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroConstruction} alt="" className="w-full h-full object-cover opacity-10" />
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
              {t("projects.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl"
            >
              {t("projects.title")} <span className="text-gradient">{t("projects.titleHighlight")}</span> {t("projects.titleEnd")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              {t("projects.desc")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categoryKeys.map((cat, i) => (
              <motion.button
                key={cat.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-gradient-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(cat.tKey)}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <motion.div key={project.title} layout variants={staggerItem} className="group glass rounded-xl overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase bg-primary/90 text-primary-foreground">{getCategoryTranslation(project.category)}</span>
                  </div>
                  {project.status && (
                    <div className="absolute top-3 right-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase ${project.status === "Completed" ? "bg-emerald-500/90 text-white" : "bg-amber-500/90 text-white"}`}>{project.status}</span>
                    </div>
                  )}
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display font-semibold text-foreground text-sm leading-snug line-clamp-2">{project.title}</h3>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin size={12} className="shrink-0" /> {project.location}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.scope}</p>
                  <div className="pt-3 border-t border-border/50 space-y-1.5 text-xs">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-muted-foreground shrink-0">GFA</span>
                      <span className="font-semibold text-primary text-right">{project.gfa}</span>
                    </div>
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-muted-foreground shrink-0">{isConstruction ? "Scope" : "Config"}</span>
                      <span className="font-semibold text-foreground text-right text-[11px] leading-snug">{project.config}</span>
                    </div>
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
