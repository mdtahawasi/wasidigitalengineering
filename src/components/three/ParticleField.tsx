import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 900 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [count]);

  useFrame((state, delta) => {
    const p = points.current;
    if (!p) return;
    mouse.current.x = state.pointer.x;
    mouse.current.y = state.pointer.y;
    p.rotation.y += delta * 0.035;
    p.rotation.x = THREE.MathUtils.lerp(p.rotation.x, mouse.current.y * 0.15, 0.04);
    p.position.x = THREE.MathUtils.lerp(p.position.x, mouse.current.x * 0.6, 0.04);
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.035}
        color="#00f5d4"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 8], fov: 55 }}
      style={{ pointerEvents: "none" }}
    >
      <Particles count={typeof window !== "undefined" && window.innerWidth < 768 ? 400 : 900} />
    </Canvas>
  );
}
