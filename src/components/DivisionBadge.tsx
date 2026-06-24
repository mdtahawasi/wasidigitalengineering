import { Boxes, HardHat } from "lucide-react";
import { useDivision } from "@/contexts/DivisionContext";

export default function DivisionBadge({ className = "" }: { className?: string }) {
  const { division } = useDivision();
  const isBim = division === "bim";
  const Icon = isBim ? Boxes : HardHat;
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white ${className}`}
      style={{ background: "var(--gradient-hero)" }}
    >
      <Icon size={11} />
      {isBim ? "BIM" : "Construction"}
    </span>
  );
}