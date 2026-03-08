import { useRef, useMemo, useCallback, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Text } from "@react-three/drei";
import * as THREE from "three";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

// Pulsing glow ring at building base
function BaseGlow({ position, radius, color }: { position: [number, number, number]; radius: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.scale.setScalar(1 + Math.sin(t * 2) * 0.1);
      (ref.current.material as THREE.MeshBasicMaterial).opacity = 0.15 + Math.sin(t * 2) * 0.05;
    }
  });
  return (
    <mesh ref={ref} position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius * 0.8, radius * 1.2, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} side={THREE.DoubleSide} />
    </mesh>
  );
}

// Vertical data streams rising from buildings
function DataStream({ position, height, delay }: { position: [number, number, number]; height: number; delay: number }) {
  const ref = useRef<THREE.Points>(null);
  const count = 30;
  const basePositions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.3;
      pos[i * 3 + 1] = (i / count) * height;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
    }
    return pos;
  }, [height]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() + delay;
    const posArr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] = ((basePositions[i * 3 + 1] + t * 1.5) % height);
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    (ref.current.material as THREE.PointsMaterial).opacity = 0.4 + Math.sin(t) * 0.2;
  });

  return (
    <points ref={ref} position={position}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[basePositions.slice(), 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial color="#a78bfa" size={0.06} transparent opacity={0.5} sizeAttenuation blending={THREE.AdditiveBlending} />
    </points>
  );
}

// Horizontal scanning beam
function ScanBeam() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = 0.5 + ((t * 0.8) % 12);
      (ref.current.material as THREE.MeshBasicMaterial).opacity = 0.06 + Math.sin(t * 3) * 0.02;
    }
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[40, 40]} />
      <meshBasicMaterial color="#14b8a6" transparent opacity={0.06} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

// Enhanced building with construction phases
function Building({ position, maxHeight, width, depth, delay, color, shape = "box" }: {
  position: [number, number, number];
  maxHeight: number;
  width: number;
  depth: number;
  delay: number;
  color: string;
  shape?: "box" | "cylinder" | "lshape";
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);
  const craneRef = useRef<THREE.Group>(null);
  const scaffoldRef = useRef<THREE.LineSegments>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const cycleTime = 16;
    const adjustedTime = (t - delay + cycleTime * 10) % cycleTime;
    const growPhase = Math.min(adjustedTime / 10, 1);
    const progress = easeOutCubic(growPhase);
    const currentHeight = progress * maxHeight;

    if (meshRef.current) {
      meshRef.current.scale.y = Math.max(progress, 0.01);
      meshRef.current.position.y = currentHeight / 2;
    }
    if (wireRef.current) {
      wireRef.current.scale.y = Math.max(progress, 0.01);
      wireRef.current.position.y = currentHeight / 2;
    }
    if (craneRef.current) {
      craneRef.current.position.y = currentHeight;
      craneRef.current.visible = progress < 0.92 && progress > 0.03;
      craneRef.current.rotation.y = t * 0.4;
    }
    // Scaffolding visible during construction
    if (scaffoldRef.current) {
      scaffoldRef.current.visible = progress > 0.05 && progress < 0.85;
      scaffoldRef.current.scale.y = Math.max(progress, 0.01);
      scaffoldRef.current.position.y = currentHeight / 2;
    }
    // Top glow when completed
    if (glowRef.current) {
      glowRef.current.visible = progress > 0.9;
      glowRef.current.position.y = currentHeight + 0.2;
      const pulse = Math.sin(t * 3) * 0.5 + 0.5;
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = 0.3 * pulse;
    }
  });

  const geometry = useMemo(() => {
    if (shape === "cylinder") return new THREE.CylinderGeometry(width / 2, width / 2, maxHeight, 16);
    if (shape === "lshape") {
      const g = new THREE.BoxGeometry(width, maxHeight, depth);
      return g; // simplified L-shape
    }
    return new THREE.BoxGeometry(width, maxHeight, depth);
  }, [width, maxHeight, depth, shape]);

  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  // Scaffold wireframe (slightly larger than building)
  const scaffoldGeo = useMemo(() => {
    const sw = width + 0.15;
    const sd = depth + 0.15;
    const g = shape === "cylinder"
      ? new THREE.CylinderGeometry(sw / 2, sw / 2, maxHeight, 8)
      : new THREE.BoxGeometry(sw, maxHeight, sd);
    return new THREE.EdgesGeometry(g);
  }, [width, depth, maxHeight, shape]);

  return (
    <group position={position}>
      {/* Base glow ring */}
      <BaseGlow position={[0, 0.02, 0]} radius={Math.max(width, depth) * 0.8} color="#14b8a6" />

      {/* Main building body */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial color={color} transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>

      {/* Building wireframe */}
      <lineSegments ref={wireRef} geometry={edgesGeo}>
        <lineBasicMaterial color="#14b8a6" transparent opacity={0.7} />
      </lineSegments>

      {/* Scaffolding */}
      <lineSegments ref={scaffoldRef} geometry={scaffoldGeo}>
        <lineBasicMaterial color="#f59e0b" transparent opacity={0.15} />
      </lineSegments>

      {/* Crane */}
      <group ref={craneRef}>
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[0.04, 1.6, 0.04]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0.6, 1.6, 0]}>
          <boxGeometry args={[1.4, 0.03, 0.03]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.4} />
        </mesh>
        {/* Crane light */}
        <pointLight position={[0, 1.7, 0]} intensity={0.2} color="#f59e0b" distance={3} />
      </group>

      {/* Completion glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#14b8a6" transparent opacity={0} blending={THREE.AdditiveBlending} />
      </mesh>

      {/* Data stream */}
      <DataStream position={[0, 0, 0]} height={maxHeight + 3} delay={delay} />
    </group>
  );
}

// Ground with dual grids
function GroundPlane() {
  return (
    <group>
      <gridHelper args={[50, 50, "#14b8a6", "#0d3d3d"]} position={[0, -0.01, 0]} />
      <gridHelper args={[50, 10, "#a78bfa", "#1a0a3a"]} position={[0, -0.005, 0]} />
      {/* Reflective ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#060a10" transparent opacity={0.8} metalness={0.9} roughness={0.3} />
      </mesh>
    </group>
  );
}

// Construction particles with varying sizes
function ConstructionParticles() {
  const count = 200;
  const ref = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 1] = Math.random() * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 35;
      sz[i] = Math.random() * 0.05 + 0.01;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
      const posArr = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        posArr[i * 3 + 1] += 0.005;
        if (posArr[i * 3 + 1] > 15) posArr[i * 3 + 1] = 0;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial color="#14b8a6" size={0.04} transparent opacity={0.5} sizeAttenuation blending={THREE.AdditiveBlending} />
    </points>
  );
}

// Orbiting data ring
function DataRing({ radius, y, speed, color }: { radius: number; y: number; speed: number; color: string }) {
  const ref = useRef<THREE.Group>(null);
  const count = 24;
  const dots = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      return [Math.cos(angle) * radius, y, Math.sin(angle) * radius] as [number, number, number];
    });
  }, [radius, y]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <group ref={ref}>
      {dots.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color={color} transparent opacity={0.6} blending={THREE.AdditiveBlending} />
        </mesh>
      ))}
    </group>
  );
}

// Camera with smooth orbit
function CameraRig() {
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.06;
    const radius = 18;
    state.camera.position.x = Math.sin(t) * radius;
    state.camera.position.z = Math.cos(t) * radius;
    state.camera.position.y = 6 + Math.sin(t * 0.3) * 2.5;
    state.camera.lookAt(0, 3.5, 0);
  });
  return null;
}

// Connecting beams between buildings
function ConnectionBeams() {
  const materialsRef = useRef<THREE.LineBasicMaterial[]>([]);
  const connections = useMemo(() => [
    { from: [0, 6, 0], to: [3, 4.5, -1] },
    { from: [0, 6, 0], to: [-3, 7.5, 1] },
    { from: [3, 4.5, -1], to: [5.5, 3, 2] },
    { from: [-3, 7.5, 1], to: [-5, 5.2, -2] },
    { from: [0, 6, 0], to: [1.5, 3.8, 4] },
    { from: [-5, 5.2, -2], to: [-1.5, 6.8, -4] },
  ], []);

  const geometries = useMemo(() =>
    connections.map((conn) => {
      const points = [
        new THREE.Vector3(...conn.from as [number, number, number]),
        new THREE.Vector3(...conn.to as [number, number, number]),
      ];
      return new THREE.BufferGeometry().setFromPoints(points);
    }), [connections]);

  const materials = useMemo(() =>
    connections.map(() => new THREE.LineBasicMaterial({
      color: "#14b8a6", transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending,
    })), [connections]);

  useEffect(() => { materialsRef.current = materials; }, [materials]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    materialsRef.current.forEach((mat, i) => {
      mat.opacity = 0.08 + Math.sin(t * 2 + i) * 0.05;
    });
  });

  return (
    <group>
      {geometries.map((geo, i) => (
        <line key={i} geometry={geo} material={materials[i]} />
      ))}
    </group>
  );
}

// Building configurations – diverse skyline
const buildings = [
  { position: [0, 0, 0] as [number, number, number], maxHeight: 9, width: 1.6, depth: 1.6, delay: 0, color: "#0d9488", shape: "box" as const },
  { position: [3, 0, -1] as [number, number, number], maxHeight: 6.5, width: 1.2, depth: 1, delay: 2, color: "#0f766e", shape: "box" as const },
  { position: [-3, 0, 1] as [number, number, number], maxHeight: 11, width: 1, depth: 1, delay: 1, color: "#115e59", shape: "cylinder" as const },
  { position: [5.5, 0, 2] as [number, number, number], maxHeight: 4.5, width: 2, depth: 1.3, delay: 3, color: "#134e4a", shape: "box" as const },
  { position: [-5, 0, -2] as [number, number, number], maxHeight: 7.5, width: 1.3, depth: 1.3, delay: 1.5, color: "#0d9488", shape: "box" as const },
  { position: [1.5, 0, 4] as [number, number, number], maxHeight: 5.5, width: 1, depth: 0.8, delay: 4, color: "#0f766e", shape: "cylinder" as const },
  { position: [-1.5, 0, -4] as [number, number, number], maxHeight: 10, width: 0.9, depth: 0.9, delay: 2.5, color: "#115e59", shape: "box" as const },
  { position: [7, 0, -3] as [number, number, number], maxHeight: 3.8, width: 1.6, depth: 1.1, delay: 5, color: "#134e4a", shape: "box" as const },
  { position: [-7, 0, 3] as [number, number, number], maxHeight: 6, width: 1.1, depth: 1.1, delay: 3.5, color: "#0d9488", shape: "cylinder" as const },
  { position: [4, 0, -5] as [number, number, number], maxHeight: 7, width: 0.9, depth: 0.9, delay: 6, color: "#0f766e", shape: "box" as const },
  { position: [-8, 0, -1] as [number, number, number], maxHeight: 5, width: 1.5, depth: 0.8, delay: 4.5, color: "#115e59", shape: "box" as const },
  { position: [8, 0, 1] as [number, number, number], maxHeight: 8, width: 0.8, depth: 0.8, delay: 5.5, color: "#134e4a", shape: "cylinder" as const },
  // New buildings
  { position: [-9, 0, -5] as [number, number, number], maxHeight: 4, width: 2.2, depth: 1.8, delay: 7, color: "#0d9488", shape: "box" as const },
  { position: [9, 0, -5] as [number, number, number], maxHeight: 5.5, width: 1, depth: 1, delay: 7.5, color: "#115e59", shape: "cylinder" as const },
  { position: [0, 0, 7] as [number, number, number], maxHeight: 3.5, width: 3, depth: 1.5, delay: 8, color: "#0f766e", shape: "box" as const },
  { position: [-4, 0, 6] as [number, number, number], maxHeight: 6.5, width: 0.7, depth: 0.7, delay: 6.5, color: "#134e4a", shape: "cylinder" as const },
];

export default function ConstructionScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [18, 6, 0], fov: 42, near: 0.1, far: 120 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        performance={{ min: 0.5 }}
      >
        {/* Enhanced lighting */}
        <ambientLight intensity={0.25} />
        <directionalLight position={[10, 20, 5]} intensity={0.4} color="#14b8a6" />
        <directionalLight position={[-10, 15, -5]} intensity={0.2} color="#a78bfa" />
        <pointLight position={[0, 12, 0]} intensity={0.3} color="#a78bfa" distance={25} />
        <pointLight position={[8, 3, 8]} intensity={0.15} color="#14b8a6" distance={15} />
        <pointLight position={[-8, 3, -8]} intensity={0.15} color="#14b8a6" distance={15} />
        <fog attach="fog" args={["#060a14", 15, 40]} />

        <CameraRig />

        {/* Stars */}
        <Stars radius={60} depth={40} count={2500} factor={3} saturation={0.3} fade speed={0.4} />

        {/* Ground */}
        <GroundPlane />

        {/* Scanning beam */}
        <ScanBeam />

        {/* Buildings */}
        {buildings.map((b, i) => (
          <Building key={i} {...b} />
        ))}

        {/* Connection beams between buildings */}
        <ConnectionBeams />

        {/* Data rings */}
        <DataRing radius={12} y={4} speed={0.15} color="#14b8a6" />
        <DataRing radius={8} y={7} speed={-0.2} color="#a78bfa" />
        <DataRing radius={15} y={2} speed={0.08} color="#0d9488" />

        {/* Particles */}
        <ConstructionParticles />

        {/* Floating BIM data markers */}
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
          <mesh position={[4, 10, -3]}>
            <octahedronGeometry args={[0.25]} />
            <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.8} wireframe />
          </mesh>
        </Float>
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.9}>
          <mesh position={[-5, 11, 2]}>
            <icosahedronGeometry args={[0.2]} />
            <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={0.8} wireframe />
          </mesh>
        </Float>
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.7}>
          <mesh position={[0, 13, 0]}>
            <torusGeometry args={[0.3, 0.08, 8, 16]} />
            <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.6} wireframe />
          </mesh>
        </Float>
        <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.4}>
          <mesh position={[7, 9, 4]}>
            <dodecahedronGeometry args={[0.18]} />
            <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={0.7} wireframe />
          </mesh>
        </Float>
      </Canvas>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
