import { Suspense } from "react";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Edges, Html, Grid } from "@react-three/drei";
import { DoubleSide } from "three";
import { Discipline, ModelElement } from "./modelData";

type Props = {
  elements: ModelElement[]; visible: Record<Discipline, boolean>;
  colors: Record<Discipline, string>; selected: string | null;
  onSelect: (element: ModelElement) => void; labels: boolean;
  singleFloor: boolean; rotation: boolean; xray: boolean; resetKey: number;
  gridColor: string; selectionColor: string;
};

export default function ModelScene({ elements, visible, colors, selected, onSelect, labels, singleFloor, rotation, xray, resetKey, gridColor, selectionColor }: Props) {
  const shown = elements.filter(e => visible[e.discipline]);
  const selectedElement = shown.find(e => e.id === selected);
  const featured = labels ? shown.filter((e, i, arr) => arr.findIndex(a => a.discipline === e.discipline) === i) : [];
  const pick = (event: ThreeEvent<MouseEvent>, element: ModelElement) => { event.stopPropagation(); onSelect(element); };
  return (
    <Canvas key={`${singleFloor}-${resetKey}`} frameloop={rotation ? "always" : "demand"} camera={{ position: singleFloor ? [7, 6, 8] : [11, 8, 12], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1.15} />
        <directionalLight position={[5, 12, 8]} intensity={1.8} />
        <Grid args={[16, 16]} position={[0, -0.31, 0]} cellColor={gridColor} sectionColor={gridColor} fadeDistance={22} />
        {shown.map(e => {
          const active = e.id === selected;
          const faded = xray && (e.family === "Floor slabs" || e.discipline === "architectural" || e.family === "Ceiling zones" || e.family === "Partitions");
          return <mesh key={e.id} position={e.position} rotation={e.rotation} onClick={event => pick(event, e)}>
            {e.shape === "box" ? <boxGeometry args={e.size} /> : e.shape === "cylinder" ? <cylinderGeometry args={[e.size[0] / 2, e.size[2] / 2, e.size[1], 8]} /> : <sphereGeometry args={[e.size[0] / 2, 8, 6]} />}
            <meshStandardMaterial color={colors[e.discipline]} emissive={colors[e.discipline]} emissiveIntensity={active ? 0.65 : 0.07} transparent={faded} opacity={faded ? 0.15 : 1} depthWrite={!faded} roughness={0.7} side={DoubleSide} />
            {active && <Edges color={selectionColor} threshold={20} />}
          </mesh>;
        })}
        {(selectedElement ? [selectedElement] : featured).map(e => <Html key={`label-${e.id}`} position={[e.position[0], e.position[1] + e.size[1] / 2 + 0.12, e.position[2]]} center zIndexRange={[8, 0]} style={{ pointerEvents: "none" }}>
          <div className="w-max max-w-44 rounded border border-primary/50 bg-background/95 px-2 py-1 text-[10px] font-semibold text-foreground shadow-sm">{e.id} · {e.name}</div>
        </Html>)}
        <OrbitControls makeDefault enablePan={false} enableDamping autoRotate={rotation} autoRotateSpeed={0.35} target={[0, singleFloor ? 0.5 : 4, 0]} minDistance={singleFloor ? 5 : 9} maxDistance={22} maxPolarAngle={Math.PI / 2.05} />
      </Suspense>
    </Canvas>
  );
}