import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ label, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
