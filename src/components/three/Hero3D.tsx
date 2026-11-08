import IsoWireframe from "@/components/IsoWireframe";

type Props = {
  variant?: "bim" | "construction";
  className?: string;
  /** strength of the scroll parallax, applied by the global parallax hook */
  parallax?: number;
};

/**
 * Lightweight hero depth layer: a CSS-3D isometric building wireframe placed
 * to the side of the hero copy (desktop only) so it never sits behind headings.
 * No WebGL; GPU transforms only.
 */
export default function Hero3D({ variant = "bim", className = "", parallax = 0.15 }: Props) {
  return (
    <div
      aria-hidden="true"
      data-parallax={parallax * 2}
      className={`pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] items-center justify-center xl:flex ${className}`}
    >
      <div className="opacity-40">
        <IsoWireframe variant={variant} />
      </div>
    </div>
  );
}
