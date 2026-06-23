import { useState, useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import * as THREE from "three";
import { Building2, Layers3, Zap, Palette } from "lucide-react";

type LayerKey = "structural" | "architectural" | "mep" | "interior";

const LAYERS: { key: LayerKey; label: string; sub: string; color: string; icon: any }[] = [
  { key: "structural",   label: "Structural",   sub: "RCC Frame, Columns, Beams", color: "#10b981", icon: Building2 },
  { key: "architectural",label: "Architectural",sub: "Walls, Facade, Windows",    color: "#3b82f6", icon: Layers3 },
  { key: "mep",          label: "MEP Systems",  sub: "HVAC, Plumbing, Electrical",color: "#f59e0b", icon: Zap },
  { key: "interior",     label: "Interior",     sub: "Partitions, Finishes",      color: "#8b5cf6", icon: Palette },
];

const FLOORS = 6;
const FLOOR_H = 1.2;
const FOOTPRINT = 5;

function StructuralLayer({ visible }: { visible: boolean }) {
  const cols = useMemo(() => {
    const pts: [number, number][] = [];
    for (let x = -2; x <= 2; x += 2) for (let z = -2; z <= 2; z += 2) pts.push([x, z]);
    return pts;
  }, []);
  return (
    <group visible={visible}>
      {cols.map(([x, z], i) => (
        <mesh key={`c${i}`} position={[x, (FLOORS * FLOOR_H) / 2, z]}>
          <boxGeometry args={[0.25, FLOORS * FLOOR_H, 0.25]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.25} />
        </mesh>
      ))}
      {Array.from({ length: FLOORS + 1 }).map((_, f) => (
        <mesh key={`s${f}`} position={[0, f * FLOOR_H, 0]}>
          <boxGeometry args={[FOOTPRINT, 0.08, FOOTPRINT]} />
          <meshStandardMaterial color="#059669" transparent opacity={0.55} />
        </mesh>
      ))}
    </group>
  );
}

function ArchitecturalLayer({ visible }: { visible: boolean }) {
  return (
    <group visible={visible}>
      {[[0, 0, FOOTPRINT / 2], [0, 0, -FOOTPRINT / 2], [FOOTPRINT / 2, 0, 0], [-FOOTPRINT / 2, 0, 0]].map(([x, _, z], i) => {
        const rot = i >= 2 ? [0, Math.PI / 2, 0] : [0, 0, 0];
        return (
          <mesh key={i} position={[x, (FLOORS * FLOOR_H) / 2, z]} rotation={rot as any}>
            <planeGeometry args={[FOOTPRINT, FLOORS * FLOOR_H]} />
            <meshStandardMaterial color="#3b82f6" transparent opacity={0.22} side={THREE.DoubleSide} />
          </mesh>
        );
      })}
      {/* Window grid */}
      {Array.from({ length: FLOORS }).map((_, f) =>
        [-1.5, 0, 1.5].map((x, i) => (
          <mesh key={`w${f}-${i}`} position={[x, f * FLOOR_H + FLOOR_H / 2, FOOTPRINT / 2 + 0.01]}>
            <planeGeometry args={[0.7, 0.5]} />
            <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.6} />
          </mesh>
        ))
      )}
    </group>
  );
}

function MEPLayer({ visible }: { visible: boolean }) {
  return (
    <group visible={visible}>
      {/* Vertical risers */}
      {[[-1.8, -1.8], [1.8, 1.8], [-1.8, 1.8]].map(([x, z], i) => (
        <mesh key={`r${i}`} position={[x, (FLOORS * FLOOR_H) / 2, z]}>
          <cylinderGeometry args={[0.08, 0.08, FLOORS * FLOOR_H, 12]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.4} />
        </mesh>
      ))}
      {/* Per-floor ducts */}
      {Array.from({ length: FLOORS }).map((_, f) => (
        <group key={`d${f}`} position={[0, f * FLOOR_H + 0.25, 0]}>
          <mesh>
            <boxGeometry args={[FOOTPRINT - 0.5, 0.2, 0.25]} />
            <meshStandardMaterial color="#fbbf24" transparent opacity={0.85} />
          </mesh>
          <mesh rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[FOOTPRINT - 0.5, 0.2, 0.25]} />
            <meshStandardMaterial color="#fbbf24" transparent opacity={0.85} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function InteriorLayer({ visible }: { visible: boolean }) {
  return (
    <group visible={visible}>
      {Array.from({ length: FLOORS }).map((_, f) => (
        <group key={`i${f}`} position={[0, f * FLOOR_H + FLOOR_H / 2, 0]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.05, FLOOR_H * 0.85, FOOTPRINT - 0.6]} />
            <meshStandardMaterial color="#8b5cf6" transparent opacity={0.55} />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[0.05, FLOOR_H * 0.85, FOOTPRINT - 0.6]} />
            <meshStandardMaterial color="#a78bfa" transparent opacity={0.45} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function SceneRotator({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.08; });
  return <group ref={ref}>{children}</group>;
}

export default function BIMLayerViewer() {
  const [layers, setLayers] = useState<Record<LayerKey, boolean>>({
    structural: true, architectural: true, mep: false, interior: false,
  });
  const toggle = (k: LayerKey) => setLayers((s) => ({ ...s, [k]: !s[k] }));

  return (
    <div className="grid lg:grid-cols-[1fr_280px] gap-6">
      <div className="relative rounded-2xl overflow-hidden glass aspect-[4/3] lg:aspect-auto lg:min-h-[520px]">
        <Canvas
          camera={{ position: [9, 7, 9], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[8, 12, 6]} intensity={0.9} />
            <pointLight position={[-6, 4, -6]} intensity={0.4} color="#3b82f6" />
            <Grid args={[20, 20]} cellColor="#94a3b8" sectionColor="#3b82f6" fadeDistance={25} infiniteGrid position={[0, -0.01, 0]} />
            <SceneRotator>
              <StructuralLayer visible={layers.structural} />
              <ArchitecturalLayer visible={layers.architectural} />
              <MEPLayer visible={layers.mep} />
              <InteriorLayer visible={layers.interior} />
            </SceneRotator>
            <OrbitControls enablePan={false} minDistance={8} maxDistance={20} target={[0, 3.5, 0]} />
          </Suspense>
        </Canvas>
        <div className="pointer-events-none absolute top-3 left-3 text-[10px] uppercase tracking-widest text-muted-foreground bg-background/70 backdrop-blur px-2 py-1 rounded">
          Drag to rotate • Scroll to zoom
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">BIM Layers</p>
        {LAYERS.map((l) => {
          const on = layers[l.key];
          const Icon = l.icon;
          return (
            <button
              key={l.key}
              onClick={() => toggle(l.key)}
              className={`text-left w-full rounded-xl border p-4 transition-all flex items-start gap-3 ${
                on ? "bg-card border-transparent shadow-md" : "bg-card/40 border-border hover:border-primary/30"
              }`}
              style={on ? { boxShadow: `0 0 0 1px ${l.color}55, 0 8px 24px -10px ${l.color}66` } : undefined}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${l.color}22`, color: l.color }}
              >
                <Icon size={18} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="flex items-center justify-between gap-2">
                  <span className="font-display font-semibold text-foreground text-sm">{l.label}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${on ? "" : "text-muted-foreground"}`}
                        style={on ? { color: l.color } : undefined}>
                    {on ? "ON" : "OFF"}
                  </span>
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5">{l.sub}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}