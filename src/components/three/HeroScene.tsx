import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Variant = "bim" | "construction";

/** Shared pointer / device-orientation parallax driver (refs only — no re-renders). */
function useParallax() {
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onOrient = (e: DeviceOrientationEvent) => {
      target.current.x = THREE.MathUtils.clamp((e.gamma ?? 0) / 45, -1, 1);
      target.current.y = THREE.MathUtils.clamp(((e.beta ?? 0) - 45) / 45, -1, 1);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("deviceorientation", onOrient, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("deviceorientation", onOrient);
    };
  }, []);

  return target;
}

/** BIM: floating structural wireframe lattice + abstract MEP pipe runs. */
function BimRig({ color }: { color: string }) {
  const group = useRef<THREE.Group>(null);
  const parallax = useParallax();

  const { frameGeo, pipeGeos, nodePositions } = useMemo(() => {
    const box = new THREE.BoxGeometry(1, 1, 1);
    const frameGeo = new THREE.EdgesGeometry(box);
    box.dispose();
    const pipeGeos = [
      new THREE.TorusGeometry(1.9, 0.035, 6, 36, Math.PI * 1.4),
      new THREE.TorusGeometry(2.5, 0.03, 6, 36, Math.PI * 1.1),
      new THREE.CylinderGeometry(0.035, 0.035, 5.5, 6, 1, true),
    ];
    const nodePositions: [number, number, number][] = [];
    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++)
        for (let z = -1; z <= 1; z++) {
          if (x === 0 && y === 0 && z === 0) continue;
          nodePositions.push([x * 1.15, y * 1.15, z * 1.15]);
        }
    return { frameGeo, pipeGeos, nodePositions };
  }, []);

  useEffect(() => () => {
    frameGeo.dispose();
    pipeGeos.forEach((g) => g.dispose());
  }, [frameGeo, pipeGeos]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.12;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, parallax.current.y * 0.22, 0.05);
    g.position.x = THREE.MathUtils.lerp(g.position.x, parallax.current.x * 0.5, 0.05);
    g.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.12;
  });

  return (
    <group ref={group}>
      {nodePositions.map((p, i) => (
        <lineSegments key={i} geometry={frameGeo} position={p} scale={0.55}>
          <lineBasicMaterial color={color} transparent opacity={0.45} />
        </lineSegments>
      ))}
      <lineSegments geometry={frameGeo} scale={3.4}>
        <lineBasicMaterial color={color} transparent opacity={0.3} />
      </lineSegments>
      <mesh geometry={pipeGeos[0]} rotation={[Math.PI / 2.4, 0, 0]}>
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
      <mesh geometry={pipeGeos[1]} rotation={[0, Math.PI / 3, Math.PI / 2.2]}>
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>
      <mesh geometry={pipeGeos[2]} rotation={[0, 0, Math.PI / 2]} position={[0, -1.4, 0]}>
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

/** Construction: low-poly rotating building massing + tower crane silhouette. */
function ConstructionRig({ color }: { color: string }) {
  const group = useRef<THREE.Group>(null);
  const jib = useRef<THREE.Group>(null);
  const parallax = useParallax();

  const blocks = useMemo(
    () =>
      [
        { pos: [0, -0.6, 0], scale: [1.5, 1.6, 1.5] },
        { pos: [0, 0.9, 0], scale: [1.15, 1.4, 1.15] },
        { pos: [0, 2.0, 0], scale: [0.8, 0.9, 0.8] },
        { pos: [1.5, -0.9, 0.4], scale: [0.9, 1.0, 0.9] },
        { pos: [-1.5, -1.1, -0.3], scale: [0.8, 0.7, 0.8] },
      ] as { pos: [number, number, number]; scale: [number, number, number] }[],
    []
  );

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.15;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, parallax.current.y * 0.15, 0.05);
    g.position.x = THREE.MathUtils.lerp(g.position.x, parallax.current.x * 0.45, 0.05);
    g.position.y = -0.2 + Math.sin(state.clock.elapsedTime * 0.45) * 0.1;
    if (jib.current) jib.current.rotation.y -= delta * 0.25;
  });

  return (
    <group ref={group}>
      {blocks.map((b, i) => (
        <mesh key={i} position={b.pos} scale={b.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.5} />
        </mesh>
      ))}
      <group position={[2.2, 0.2, -0.6]}>
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[0.16, 4.2, 0.16]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.65} />
        </mesh>
        <group ref={jib} position={[0, 2.9, 0]}>
          <mesh position={[1.1, 0, 0]}>
            <boxGeometry args={[3.2, 0.12, 0.12]} />
            <meshBasicMaterial color={color} wireframe transparent opacity={0.65} />
          </mesh>
          <mesh position={[2.2, -0.55, 0]}>
            <boxGeometry args={[0.1, 1, 0.1]} />
            <meshBasicMaterial color={color} transparent opacity={0.45} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

export default function HeroScene({ variant = "bim" }: { variant?: Variant }) {
  const color = variant === "construction" ? "#f59e0b" : "#38bdf8";
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ pointerEvents: "none" }}
    >
      {variant === "construction" ? <ConstructionRig color={color} /> : <BimRig color={color} />}
    </Canvas>
  );
}