type Props = { variant?: "bim" | "construction"; size?: number };

/** Pure CSS-3D isometric building wireframe that slowly rotates. */
export default function IsoWireframe({ variant = "bim", size = 150 }: Props) {
  const floors = variant === "construction" ? 5 : 6;
  const h = size / 3.2;
  const faces = [
    `rotateY(0deg) translateZ(${size / 2}px)`,
    `rotateY(90deg) translateZ(${size / 2}px)`,
    `rotateY(180deg) translateZ(${size / 2}px)`,
    `rotateY(270deg) translateZ(${size / 2}px)`,
  ];
  return (
    <div className="iso-scene" style={{ width: size * 1.6, height: floors * h + size }} aria-hidden="true">
      <div className="iso-rotor" style={{ width: size, height: floors * h }}>
        {Array.from({ length: floors }).map((_, f) => (
          <div key={f} className="iso-floor" style={{ height: h, top: f * h, width: size }}>
            {faces.map((t, i) => (
              <div key={i} className="iso-face" style={{ width: size, height: h, transform: t }} />
            ))}
            <div className="iso-slab" style={{ width: size, height: size, transform: `rotateX(90deg) translateZ(${h / 2}px)` }} />
          </div>
        ))}
      </div>
    </div>
  );
}
