import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const CODES = [
  { code: "IS 456:2000", title: "Plain & Reinforced Concrete" },
  { code: "IS 800:2007", title: "Steel Structures (LSM)" },
  { code: "IS 1893:2016", title: "Seismic Design" },
  { code: "IS 875",      title: "Design Loads (Parts 1–5)" },
  { code: "NBC 2016",    title: "National Building Code" },
  { code: "IS 2950",     title: "Foundation Design" },
  { code: "IS 10262",    title: "Concrete Mix Design" },
  { code: "ISO 19650",   title: "BIM Standards" },
];

export default function ISCodeComplianceSection() {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          label="● Compliance"
          title="Built to Indian & International Standards"
          description="Every structural design and BIM deliverable is verified against the codes that matter — backed by a 10-year structural warranty."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {CODES.map((c) => (
            <motion.div
              key={c.code}
              variants={staggerItem}
              className="glass rounded-xl p-4 flex items-start gap-3 hover:border-primary/30 transition-all"
            >
              <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <ShieldCheck size={18} />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-sm font-bold text-foreground">{c.code}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">{c.title}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}