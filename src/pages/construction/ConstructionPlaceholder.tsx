import Layout from "@/components/Layout";
import { HardHat } from "lucide-react";

interface Props {
  title: string;
  subtitle?: string;
}

/**
 * Empty placeholder shell for the Construction division.
 * Intentionally contains no BIM data and no construction data yet.
 */
export default function ConstructionPlaceholder({ title, subtitle }: Props) {
  return (
    <Layout>
      <section className="container mx-auto px-4 md:px-8 py-24 min-h-[60vh] flex items-center justify-center">
        <div className="glass rounded-2xl p-10 md:p-16 text-center max-w-2xl w-full">
          <div
            className="mx-auto mb-6 w-14 h-14 rounded-xl flex items-center justify-center text-white"
            style={{ background: "var(--gradient-hero)" }}
          >
            <HardHat size={26} />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h1>
          <p className="text-muted-foreground text-base md:text-lg">
            {subtitle ?? "Construction division content is being prepared."}
          </p>
        </div>
      </section>
    </Layout>
  );
}