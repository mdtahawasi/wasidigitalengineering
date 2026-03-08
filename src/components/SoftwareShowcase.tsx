import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2, Globe, TrendingUp, Zap,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

import { fadeUp, staggerContainer, staggerItem, scaleIn } from "@/lib/animations";


interface SoftwareItem {
  name: string;
  logo: string;
  category: string;
  marketShare: number;
  advantages: string[];
  uses: string;
}

const softwareData: SoftwareItem[] = [
  {
    name: "Autodesk Revit",
    logo: "https://cdn.worldvectorlogo.com/logos/autodesk-revit.svg",
    category: "BIM Authoring",
    marketShare: 68,
    advantages: ["Industry-standard BIM platform", "Parametric family system", "Multi-discipline support", "Dynamo scripting integration"],
    uses: "Architectural, Structural, and MEP modeling across all LODs. Primary tool for design, documentation, and coordination.",
  },
  {
    name: "Navisworks",
    logo: "https://damassets.autodesk.net/content/dam/autodesk/www/product-imagery/badge-75x75/navisworks-702702-badge-75.png",
    category: "Clash Detection",
    marketShare: 62,
    advantages: ["Automated clash detection", "4D timeline simulation", "Multi-format model aggregation", "Comprehensive reporting"],
    uses: "Model coordination, clash detection, interference checks, and construction sequencing across all disciplines.",
  },
  {
    name: "Tekla Structures",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Tekla_logo.svg/1200px-Tekla_logo.svg.png",
    category: "Structural Detailing",
    marketShare: 45,
    advantages: ["Superior steel detailing", "Rebar modeling precision", "Fabrication-ready outputs", "IFC interoperability"],
    uses: "Structural steel and concrete detailing, shop drawings, bar bending schedules, and precast modeling.",
  },
  {
    name: "AutoCAD",
    logo: "https://cdn.worldvectorlogo.com/logos/autocad-2.svg",
    category: "2D Drafting & Design",
    marketShare: 85,
    advantages: ["Universal drafting standard", "Extensive customization", "Industry-wide compatibility", "Lightweight & versatile"],
    uses: "2D drafting, construction documentation, annotation, detail drawings, and legacy project support.",
  },
  {
    name: "Civil 3D",
    logo: "https://damassets.autodesk.net/content/dam/autodesk/www/product-imagery/badge-75x75/civil-3d-702702-badge-75.png",
    category: "Civil Infrastructure",
    marketShare: 55,
    advantages: ["Dynamic corridor modeling", "Surface & grading tools", "Pipe network design", "Quantity takeoff automation"],
    uses: "Road design, site grading, drainage, utility networks, and infrastructure project development.",
  },
  {
    name: "Dynamo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/DynamoBIM_Logo.png",
    category: "Visual Programming",
    marketShare: 40,
    advantages: ["Automates repetitive tasks", "Visual scripting interface", "Revit API access", "Custom workflow creation"],
    uses: "BIM automation, parametric design, data management, model auditing, and schedule generation.",
  },
  {
    name: "Solibri",
    logo: "https://www.solibri.com/hubfs/Solibri%20May%202020/Images/Solibri_Logo_RGB.png",
    category: "Model Checking & QA",
    marketShare: 35,
    advantages: ["Rule-based model checking", "Code compliance verification", "IFC quality assurance", "Deficiency reporting"],
    uses: "BIM quality assurance, code compliance checking, model validation, and information takeoff.",
  },
  {
    name: "BIM 360 / ACC",
    logo: "https://damassets.autodesk.net/content/dam/autodesk/www/product-imagery/badge-75x75/bim-collaborate-702702-badge-75.png",
    category: "Cloud Collaboration",
    marketShare: 52,
    advantages: ["Real-time cloud collaboration", "Document management", "Field management tools", "Issue tracking & RFIs"],
    uses: "Project data management, team collaboration, design review, field inspection, and document control.",
  },
  {
    name: "Enscape",
    logo: "https://enscape3d.com/wp-content/uploads/2023/06/logo-enscape.svg",
    category: "Real-Time Visualization",
    marketShare: 38,
    advantages: ["One-click rendering", "Real-time walkthrough", "VR support", "Direct Revit integration"],
    uses: "Real-time architectural visualization, client presentations, design reviews, and virtual reality experiences.",
  },
  {
    name: "Rhino + Grasshopper",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Rhinoceros_3D_logo.svg/1200px-Rhinoceros_3D_logo.svg.png",
    category: "Parametric Design",
    marketShare: 30,
    advantages: ["Complex geometry handling", "Algorithmic design", "Extensive plugin ecosystem", "NURBS modeling precision"],
    uses: "Parametric facade design, complex geometry, computational design, form-finding, and environmental analysis.",
  },
  {
    name: "Synchro Pro",
    logo: "https://www.bentley.com/wp-content/uploads/2022/03/synchro-logo.png",
    category: "4D Construction",
    marketShare: 28,
    advantages: ["Advanced 4D scheduling", "Resource management", "Progress tracking", "What-if scenario analysis"],
    uses: "4D construction simulation, schedule visualization, progress monitoring, and resource planning.",
  },
  {
    name: "Power BI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    category: "Data Analytics",
    marketShare: 58,
    advantages: ["Interactive dashboards", "Real-time data insights", "Custom BIM reporting", "AI-powered analytics"],
    uses: "BIM data analytics, project dashboards, KPI tracking, cost analysis, and performance reporting.",
  },
  {
    name: "Lumion",
    logo: "https://lumion.com/storage/images/logo/lumion-logo.svg",
    category: "Architectural Rendering",
    marketShare: 32,
    advantages: ["Ultra-fast rendering", "Vast material library", "Cinematic animations", "Easy learning curve"],
    uses: "Photorealistic renders, fly-through animations, design presentations, and marketing visualizations.",
  },
  {
    name: "ETABS / SAP2000",
    logo: "https://www.csiamerica.com/sites/default/files/etabs_0.png",
    category: "Structural Analysis",
    marketShare: 48,
    advantages: ["Advanced finite element analysis", "Seismic design", "Code-based design checks", "BIM integration"],
    uses: "Structural analysis, seismic design, load calculations, and structural design optimization.",
  },
  {
    name: "Bentley MicroStation",
    logo: "https://www.bentley.com/wp-content/uploads/2022/03/microstation-logo.png",
    category: "Infrastructure Design",
    marketShare: 22,
    advantages: ["Large-scale infrastructure", "Multi-discipline platform", "Interoperability focus", "Advanced visualization"],
    uses: "Infrastructure BIM, transportation, utilities, and large-scale civil engineering projects.",
  },
  {
    name: "SketchUp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/SketchUp_logo_%282020%29.svg",
    category: "Conceptual Design",
    marketShare: 42,
    advantages: ["Intuitive 3D modeling", "Rapid conceptualization", "Extensive 3D warehouse", "Plugin-rich ecosystem"],
    uses: "Concept design, massing studies, early-stage presentations, and schematic space planning.",
  },
];

export default function SoftwareShowcase() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          label="Technology Stack"
          title="Software We Master"
          description="Industry-leading platforms with deep expertise — delivering precision, speed, and quality across every BIM discipline."
        />

        {/* Summary stats */}
        <motion.div {...scaleIn} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {[
            { icon: Globe, label: "Software Platforms", value: "16+" },
            { icon: TrendingUp, label: "Certified Experts", value: "25+" },
            { icon: Zap, label: "Automated Workflows", value: "50+" },
            { icon: CheckCircle2, label: "Plugin Integrations", value: "100+" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-xl p-4 text-center">
              <s.icon size={20} className="text-primary mx-auto mb-2" />
              <p className="text-xl font-display font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Software grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {softwareData.map((sw, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="glass rounded-xl p-5 md:p-6 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center shrink-0 overflow-hidden p-2">
                  <img
                    src={sw.logo}
                    alt={`${sw.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `<span class="text-primary font-bold text-lg">${sw.name.charAt(0)}</span>`;
                    }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-base leading-tight">{sw.name}</h3>
                      <span className="text-xs text-primary font-medium">{sw.category}</span>
                    </div>
                  </div>

                  {/* Market share */}
                  <div className="mt-2 mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-muted-foreground">Global Market Leadership</span>
                      <span className="text-xs font-bold text-primary">{sw.marketShare}%</span>
                    </div>
                    <Progress value={sw.marketShare} className="h-1.5 bg-muted" />
                  </div>

                  {/* Uses */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{sw.uses}</p>

                  {/* Advantages */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {sw.advantages.map((adv, ai) => (
                      <span key={ai} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <CheckCircle2 size={11} className="text-primary shrink-0" />
                        {adv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
