import { motion } from "framer-motion";
import { Boxes, HardHat } from "lucide-react";
import { useDivision, Division } from "@/contexts/DivisionContext";

interface Props {
  variant?: "desktop" | "mobile";
  className?: string;
}

const OPTIONS: { id: Division; label: string; Icon: typeof Boxes }[] = [
  { id: "bim", label: "BIM & Engineering", Icon: Boxes },
  { id: "construction", label: "Construction", Icon: HardHat },
];

export default function DivisionToggle({ variant = "desktop", className = "" }: Props) {
  const { division, setDivision } = useDivision();

  const onKey = (e: React.KeyboardEvent, id: Division) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setDivision(id);
    }
  };

  const sizeClasses = variant === "mobile" ? "w-full text-xs sm:text-sm" : "text-xs md:text-sm";

  return (
    <div
      role="tablist"
      aria-label="Select WITEC division"
      title="Switch between our BIM & Construction divisions"
       className={`relative inline-flex min-w-0 items-center rounded-full border border-border bg-card/70 p-1 shadow-sm backdrop-blur-md ${sizeClasses} ${className}`}
      style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.02), 0 6px 24px -12px var(--accent-glow)" }}
    >
      <span aria-live="polite" className="sr-only">
        {division === "bim" ? "BIM & Engineering division active" : "Construction division active"}
      </span>
      {OPTIONS.map(({ id, label, Icon }) => {
        const active = division === id;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={active}
            tabIndex={0}
            onClick={() => setDivision(id)}
            onKeyDown={(e) => onKey(e, id)}
             className={`relative z-10 flex min-w-0 items-center gap-1.5 rounded-full px-2 py-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 sm:px-3 md:px-4 ${
               active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            } ${variant === "mobile" ? "flex-1 justify-center" : ""}`}
          >
            {active && (
              <motion.span
                layoutId={`division-pill-${variant}`}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute inset-0 rounded-full -z-10"
                style={{
                  background: "var(--gradient-hero)",
                  boxShadow: "0 4px 20px -4px var(--accent-glow)",
                }}
              />
            )}
            <Icon size={14} className="shrink-0" />
             <span className="truncate">{label}</span>
          </button>
        );
      })}
    </div>
  );
}