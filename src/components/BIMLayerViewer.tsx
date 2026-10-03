import { useState, useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import * as THREE from "three";
import { Building2, Layers3, Zap, Palette, Droplets, Flame, Eye, EyeOff, Focus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

type LayerKey = "structural" | "architectural" | "hvac" | "plumbing" | "electrical" | "interior";

const LAYERS: { key: LayerKey; code: string; label: string; sub: string; detail: string; count: number; color: string; icon: any }[] = [
  { key: "structural", code: "STR", label: "Structural", sub: "RCC frame & foundations", detail: "9 footings • 9 columns • 36 beams • 7 slabs", count: 61, color: "#10b981", icon: Building2 },
  { key: "architectural", code: "ARC", label: "Architecture", sub: "Façade, glazing & parapets", detail: "72 glazing panels • 4 envelope faces • 7 slab edges", count: 83, color: "#3b82f6", icon: Layers3 },
  { key: "hvac", code: "HVAC", label: "HVAC", sub: "Supply and return air systems", detail: "1 AHU • 12 ducts • 18 ceiling diffusers • 1 shaft", count: 32, color: "#f59e0b", icon: Zap },
  { key: "plumbing", code: "PLB", label: "Plumbing", sub: "Water and drainage network", detail: "2 risers • 6 branch lines • 1 roof tank", count: 9, color: "#06b6d4", icon: Droplets },
  { key: "electrical", code: "ELF", label: "Electrical & Fire", sub: "Power distribution and sprinklers", detail: "1 riser • 6 trays • 6 panels • 12 sprinkler heads", count: 25, color: "#ef4444", icon: Flame },
  { key: "interior", code: "INT", label: "Interiors", sub: "Partitions, service core & ceilings", detail: "1 core • 12 partitions • 6 ceiling zones", count: 19, color: "#8b5cf6", icon: Palette },
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
      {/* Footings */}
      {cols.map(([x, z], i) => (
        <mesh key={`f${i}`} position={[x, 0.06, z]}>
          <boxGeometry args={[0.8, 0.12, 0.8]} />
          <meshStandardMaterial color="#047857" />
        </mesh>
      ))}
      {/* Columns */}
      {cols.map(([x, z], i) => (
        <mesh key={`c${i}`} position={[x, (FLOORS * FLOOR_H) / 2, z]}>
          <boxGeometry args={[0.25, FLOORS * FLOOR_H, 0.25]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.25} />
        </mesh>
      ))}
      {/* Primary & secondary beams per floor */}
      {Array.from({ length: FLOORS }).map((_, f) =>
        [-2, 0, 2].map((p) => (
          <group key={`b${f}-${p}`}>
            <mesh position={[0, (f + 1) * FLOOR_H - 0.14, p]}>
              <boxGeometry args={[FOOTPRINT - 0.6, 0.22, 0.16]} />
              <meshStandardMaterial color="#059669" />
            </mesh>
            <mesh position={[p, (f + 1) * FLOOR_H - 0.14, 0]} rotation={[0, Math.PI / 2, 0]}>
              <boxGeometry args={[FOOTPRINT - 0.6, 0.22, 0.16]} />
              <meshStandardMaterial color="#059669" />
            </mesh>
          </group>
        ))
      )}
      {/* Slabs */}
      {Array.from({ length: FLOORS + 1 }).map((_, f) => (
        <mesh key={`s${f}`} position={[0, f * FLOOR_H, 0]}>
          <boxGeometry args={[FOOTPRINT, 0.08, FOOTPRINT]} />
          <meshStandardMaterial color="#065f46" transparent opacity={0.5} />
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
            <meshStandardMaterial color="#3b82f6" transparent opacity={0.16} side={THREE.DoubleSide} />
          </mesh>
        );
      })}
      {/* Curtain-wall glazing on all four elevations */}
      {Array.from({ length: FLOORS }).map((_, f) =>
        [
          { p: [0, 0, FOOTPRINT / 2 + 0.02], r: [0, 0, 0] },
          { p: [0, 0, -FOOTPRINT / 2 - 0.02], r: [0, Math.PI, 0] },
          { p: [FOOTPRINT / 2 + 0.02, 0, 0], r: [0, Math.PI / 2, 0] },
          { p: [-FOOTPRINT / 2 - 0.02, 0, 0], r: [0, -Math.PI / 2, 0] },
        ].map((face, fi) =>
          [-1.5, 0, 1.5].map((u, ui) => (
            <mesh
              key={`g${f}-${fi}-${ui}`}
              position={[
                face.p[0] + (fi < 2 ? u : 0),
                f * FLOOR_H + FLOOR_H / 2,
                face.p[2] + (fi >= 2 ? u : 0),
              ]}
              rotation={face.r as any}
            >
              <planeGeometry args={[1.1, 0.66]} />
              <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.45} transparent opacity={0.75} side={THREE.DoubleSide} />
            </mesh>
          ))
        )
      )}
      {/* Slab-edge bands & parapet */}
      {Array.from({ length: FLOORS + 1 }).map((_, f) => (
        <mesh key={`e${f}`} position={[0, f * FLOOR_H, 0]}>
          <boxGeometry args={[FOOTPRINT + 0.12, 0.16, FOOTPRINT + 0.12]} />
          <meshStandardMaterial color="#1d4ed8" transparent opacity={0.35} />
        </mesh>
      ))}
      <mesh position={[0, FLOORS * FLOOR_H + 0.3, 0]}>
        <boxGeometry args={[FOOTPRINT + 0.1, 0.5, FOOTPRINT + 0.1]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function HVACLayer({ visible }: { visible: boolean }) {
  return (
    <group visible={visible}>
      {/* Rooftop AHU plant */}
      <mesh position={[1.2, FLOORS * FLOOR_H + 0.45, -1.2]}>
        <boxGeometry args={[1.2, 0.7, 0.9]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.2} />
      </mesh>
      {/* Supply & return duct runs with diffusers */}
      {Array.from({ length: FLOORS }).map((_, f) => (
        <group key={`d${f}`} position={[0, (f + 1) * FLOOR_H - 0.38, 0]}>
          <mesh position={[0, 0, 0.9]}>
            <boxGeometry args={[FOOTPRINT - 0.7, 0.24, 0.34]} />
            <meshStandardMaterial color="#fbbf24" metalness={0.4} roughness={0.4} />
          </mesh>
          <mesh position={[0, 0, -0.9]}>
            <boxGeometry args={[FOOTPRINT - 0.7, 0.18, 0.26]} />
            <meshStandardMaterial color="#d97706" metalness={0.4} roughness={0.4} />
          </mesh>
          {[-1.4, 0, 1.4].map((x) => (
            <mesh key={x} position={[x, -0.18, 0.9]}>
              <boxGeometry args={[0.3, 0.08, 0.3]} />
              <meshStandardMaterial color="#fde68a" emissive="#f59e0b" emissiveIntensity={0.3} />
            </mesh>
          ))}
        </group>
      ))}
      {/* Main vertical duct shaft */}
      <mesh position={[1.2, (FLOORS * FLOOR_H) / 2, -1.2]}>
        <boxGeometry args={[0.4, FLOORS * FLOOR_H, 0.4]} />
        <meshStandardMaterial color="#f59e0b" transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

function PlumbingLayer({ visible }: { visible: boolean }) {
  return (
    <group visible={visible}>
      {/* Water & soil risers */}
      {[[-1.8, -1.8], [-1.8, 1.8]].map(([x, z], i) => (
        <mesh key={`pr${i}`} position={[x, (FLOORS * FLOOR_H) / 2, z]}>
          <cylinderGeometry args={[0.09, 0.09, FLOORS * FLOOR_H, 12]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.35} />
        </mesh>
      ))}
      {/* Branch lines per floor */}
      {Array.from({ length: FLOORS }).map((_, f) => (
        <mesh key={`pb${f}`} position={[-1.8, f * FLOOR_H + 0.22, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 3.4, 10]} />
          <meshStandardMaterial color="#22d3ee" />
        </mesh>
      ))}
      {/* Overhead water tank */}
      <mesh position={[-1.8, FLOORS * FLOOR_H + 0.4, 1.8]}>
        <cylinderGeometry args={[0.45, 0.45, 0.7, 16]} />
        <meshStandardMaterial color="#0891b2" />
      </mesh>
    </group>
  );
}

function ElectricalLayer({ visible }: { visible: boolean }) {
  return (
    <group visible={visible}>
      {/* Electrical riser & floor panels */}
      <mesh position={[1.8, (FLOORS * FLOOR_H) / 2, 1.8]}>
        <boxGeometry args={[0.22, FLOORS * FLOOR_H, 0.22]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.35} />
      </mesh>
      {Array.from({ length: FLOORS }).map((_, f) => (
        <group key={`el${f}`}>
          {/* Cable tray */}
          <mesh position={[0, (f + 1) * FLOOR_H - 0.5, 1.8]}>
            <boxGeometry args={[FOOTPRINT - 0.9, 0.06, 0.28]} />
            <meshStandardMaterial color="#f87171" metalness={0.5} roughness={0.3} />
          </mesh>
          {/* Distribution board */}
          <mesh position={[1.8, f * FLOOR_H + 0.6, 1.5]}>
            <boxGeometry args={[0.18, 0.4, 0.3]} />
            <meshStandardMaterial color="#dc2626" />
          </mesh>
          {/* Fire sprinkler heads */}
          {[-1.2, 1.2].map((x) => (
            <mesh key={x} position={[x, (f + 1) * FLOOR_H - 0.32, -1.4]}>
              <sphereGeometry args={[0.07, 10, 10]} />
              <meshStandardMaterial color="#fca5a5" emissive="#ef4444" emissiveIntensity={0.5} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function InteriorLayer({ visible }: { visible: boolean }) {
  return (
    <group visible={visible}>
      {/* Service core */}
      <mesh position={[0, (FLOORS * FLOOR_H) / 2, -1.6]}>
        <boxGeometry args={[1.6, FLOORS * FLOOR_H, 1.2]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.28} />
      </mesh>
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
          {/* Suspended ceiling plane */}
          <mesh position={[0, FLOOR_H * 0.42, 0]}>
            <boxGeometry args={[FOOTPRINT - 0.4, 0.03, FOOTPRINT - 0.4]} />
            <meshStandardMaterial color="#c4b5fd" transparent opacity={0.25} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function SceneRotator({ children, paused }: { children: React.ReactNode; paused: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, rawDelta) => {
    if (!ref.current || paused) return;
    ref.current.rotation.y += Math.min(rawDelta, 0.05) * 0.08;
  });
  return <group ref={ref}>{children}</group>;
}

export default function BIMLayerViewer() {
  const [layers, setLayers] = useState<Record<LayerKey, boolean>>({
    structural: true, architectural: true, hvac: false, plumbing: false, electrical: false, interior: false,
  });
  const [selected, setSelected] = useState<LayerKey>("structural");
  const [paused, setPaused] = useState(false);
  const toggle = (k: LayerKey) => setLayers((s) => ({ ...s, [k]: !s[k] }));
  const allOn = () => setLayers({ structural: true, architectural: true, hvac: true, plumbing: true, electrical: true, interior: true });
  const onlyStructure = () => setLayers({ structural: true, architectural: false, hvac: false, plumbing: false, electrical: false, interior: false });
  const focusLayer = (key: LayerKey) => {
    setSelected(key);
    setLayers({ structural: false, architectural: false, hvac: false, plumbing: false, electrical: false, interior: false, [key]: true });
  };
  const activeCount = LAYERS.filter((layer) => layers[layer.key]).length;
  const selectedLayer = LAYERS.find((layer) => layer.key === selected) ?? LAYERS[0];

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="relative min-h-[360px] overflow-hidden rounded-lg glass sm:min-h-[500px] xl:min-h-[620px]">
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
            <SceneRotator paused={paused}>
              <StructuralLayer visible={layers.structural} />
              <ArchitecturalLayer visible={layers.architectural} />
              <HVACLayer visible={layers.hvac} />
              <PlumbingLayer visible={layers.plumbing} />
              <ElectricalLayer visible={layers.electrical} />
              <InteriorLayer visible={layers.interior} />
            </SceneRotator>
            <OrbitControls enablePan={false} enableDamping dampingFactor={0.08} minDistance={8} maxDistance={18} target={[0, 3.5, 0]} />
          </Suspense>
        </Canvas>
        <div className="pointer-events-none absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-md border border-border/60 bg-background/85 px-3 py-2 backdrop-blur">
          <p className="text-[10px] font-bold uppercase text-primary">Federated coordination model</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">Drag to orbit • Pinch or scroll to zoom</p>
        </div>
        <div className="pointer-events-none absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1 rounded-md border border-border/60 bg-background/85 p-2 text-center backdrop-blur sm:left-auto sm:grid-cols-1 sm:text-left">
          <span className="text-[10px] text-muted-foreground"><strong className="block text-sm text-foreground">LOD 350</strong>Coordination</span>
          <span className="text-[10px] text-muted-foreground"><strong className="block text-sm text-foreground">06</strong>Levels</span>
          <span className="text-[10px] text-muted-foreground"><strong className="block text-sm text-foreground">{activeCount}/6</strong>Visible</span>
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-3">
        <div className="rounded-lg border border-border bg-card/70 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase text-primary">Selected discipline</p>
              <p className="truncate font-display text-lg font-semibold text-foreground">{selectedLayer.code} — {selectedLayer.label}</p>
            </div>
            <Button variant="outline" size="icon" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Resume model rotation" : "Pause model rotation"} title={paused ? "Resume rotation" : "Pause rotation"}>
              <RotateCcw className={paused ? "" : "motion-safe:animate-spin [animation-duration:8s]"} />
            </Button>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{selectedLayer.detail}</p>
        </div>
        <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-bold uppercase text-muted-foreground">Discipline layers</p>
          <div className="flex flex-wrap gap-1.5">
            <Button onClick={allOn} variant="outline" size="sm"><Eye />All layers</Button>
            <Button onClick={onlyStructure} variant="outline" size="sm"><Focus />Structure</Button>
          </div>
        </div>
        {LAYERS.map((l) => {
          const on = layers[l.key];
          const Icon = l.icon;
          return (
            <div
              key={l.key}
              className={`flex w-full min-w-0 items-start gap-3 rounded-lg border p-3 text-left transition-all ${on ? "border-primary/40 bg-card shadow-sm" : "border-border bg-card/40"}`}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${l.color}22`, color: l.color }}
              >
                <Icon size={18} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="flex min-w-0 items-center justify-between gap-2">
                  <span className="min-w-0 truncate font-display text-sm font-semibold text-foreground">{l.code} — {l.label}</span>
                  <span className="shrink-0 text-[10px] font-bold uppercase text-muted-foreground">{l.count} items</span>
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5">{l.sub}</span>
                <span className="mt-2 flex flex-wrap gap-2">
                  <Button size="sm" variant={selected === l.key ? "default" : "outline"} onClick={() => focusLayer(l.key)} aria-label={`Focus ${l.label} discipline`}>
                    <Focus /> Focus
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => toggle(l.key)} aria-pressed={on} aria-label={`${on ? "Hide" : "Show"} ${l.label} discipline`}>
                    {on ? <Eye /> : <EyeOff />} {on ? "Hide" : "Show"}
                  </Button>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}