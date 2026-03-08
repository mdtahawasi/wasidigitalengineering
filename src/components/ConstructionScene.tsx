import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

// A single building that "grows" from foundation to full height
function Building({ position, maxHeight, width, depth, delay, color }: {
  position: [number, number, number];
  maxHeight: number;
  width: number;
  depth: number;
  delay: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);
  const craneRef = useRef<THREE.Group>(null);
  const progressRef = useRef(0);

  // Floor lines for the building
  const floorCount = Math.floor(maxHeight / 0.4);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Cycle: each building grows over ~8s, stays 4s, then resets
    const cycleTime = 14;
    const adjustedTime = (t - delay + cycleTime * 10) % cycleTime;
    const growPhase = Math.min(adjustedTime / 8, 1); // 0-8s grow
    const progress = easeOutCubic(growPhase);
    progressRef.current = progress;

    const currentHeight = progress * maxHeight;

    if (meshRef.current) {
      meshRef.current.scale.y = Math.max(progress, 0.01);
      meshRef.current.position.y = currentHeight / 2;
    }
    if (wireRef.current) {
      wireRef.current.scale.y = Math.max(progress, 0.01);
      wireRef.current.position.y = currentHeight / 2;
    }
    // Crane sits on top
    if (craneRef.current) {
      craneRef.current.position.y = currentHeight;
      craneRef.current.visible = progress < 0.95 && progress > 0.02;
      craneRef.current.rotation.y = t * 0.5;
    }
  });

  const edgesGeo = useMemo(() => {
    const geo = new THREE.BoxGeometry(width, maxHeight, depth);
    return new THREE.EdgesGeometry(geo);
  }, [width, maxHeight, depth]);

  // Floor line geometries
  const floorLines = useMemo(() => {
    const lines: THREE.BufferGeometry[] = [];
    for (let i = 1; i <= floorCount; i++) {
      const y = (i / floorCount) * maxHeight - maxHeight / 2;
      const points = [
        new THREE.Vector3(-width / 2, y, depth / 2),
        new THREE.Vector3(width / 2, y, depth / 2),
        new THREE.Vector3(width / 2, y, -depth / 2),
        new THREE.Vector3(-width / 2, y, -depth / 2),
        new THREE.Vector3(-width / 2, y, depth / 2),
      ];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      lines.push(geo);
    }
    return lines;
  }, [floorCount, maxHeight, width, depth]);

  return (
    <group position={position}>
      {/* Main building body */}
      <mesh ref={meshRef}>
        <boxGeometry args={[width, maxHeight, depth]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Wireframe edges */}
      <lineSegments ref={wireRef} geometry={edgesGeo}>
        <lineBasicMaterial color="#14b8a6" transparent opacity={0.6} />
      </lineSegments>

      {/* Floor lines */}
      {floorLines.map((geo, i) => (
        <lineSegments key={i} geometry={geo} scale-y={1} position-y={0}>
          <lineBasicMaterial color="#14b8a6" transparent opacity={0.2} />
        </lineSegments>
      ))}

      {/* Crane on top */}
      <group ref={craneRef}>
        {/* Vertical mast */}
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[0.05, 1.2, 0.05]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
        </mesh>
        {/* Horizontal boom */}
        <mesh position={[0.5, 1.2, 0]}>
          <boxGeometry args={[1.2, 0.03, 0.03]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
        </mesh>
      </group>
    </group>
  );
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

// Ground grid
function GroundGrid() {
  return (
    <gridHelper
      args={[40, 40, "#14b8a6", "#0d3d3d"]}
      position={[0, -0.01, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

// Particle dust/construction particles
function ConstructionParticles() {
  const count = 200;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = Math.random() * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial color="#14b8a6" size={0.03} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

// Camera auto-orbit
function CameraRig() {
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.08;
    const radius = 16;
    state.camera.position.x = Math.sin(t) * radius;
    state.camera.position.z = Math.cos(t) * radius;
    state.camera.position.y = 5 + Math.sin(t * 0.5) * 2;
    state.camera.lookAt(0, 3, 0);
  });
  return null;
}

// Building configurations – a mini skyline
const buildings = [
  { position: [0, 0, 0] as [number, number, number], maxHeight: 8, width: 1.5, depth: 1.5, delay: 0, color: "#0d9488" },
  { position: [3, 0, -1] as [number, number, number], maxHeight: 6, width: 1.2, depth: 1, delay: 2, color: "#0f766e" },
  { position: [-3, 0, 1] as [number, number, number], maxHeight: 10, width: 1, depth: 1, delay: 1, color: "#115e59" },
  { position: [5.5, 0, 2] as [number, number, number], maxHeight: 4, width: 1.8, depth: 1.2, delay: 3, color: "#134e4a" },
  { position: [-5, 0, -2] as [number, number, number], maxHeight: 7, width: 1.3, depth: 1.3, delay: 1.5, color: "#0d9488" },
  { position: [1.5, 0, 4] as [number, number, number], maxHeight: 5, width: 1, depth: 0.8, delay: 4, color: "#0f766e" },
  { position: [-1.5, 0, -4] as [number, number, number], maxHeight: 9, width: 0.8, depth: 0.8, delay: 2.5, color: "#115e59" },
  { position: [7, 0, -3] as [number, number, number], maxHeight: 3.5, width: 1.5, depth: 1, delay: 5, color: "#134e4a" },
  { position: [-7, 0, 3] as [number, number, number], maxHeight: 5.5, width: 1.1, depth: 1.1, delay: 3.5, color: "#0d9488" },
  { position: [4, 0, -5] as [number, number, number], maxHeight: 6.5, width: 0.9, depth: 0.9, delay: 6, color: "#0f766e" },
  // Additional towers
  { position: [-8, 0, -1] as [number, number, number], maxHeight: 4.5, width: 1.4, depth: 0.7, delay: 4.5, color: "#115e59" },
  { position: [8, 0, 1] as [number, number, number], maxHeight: 7.5, width: 0.7, depth: 0.7, delay: 5.5, color: "#134e4a" },
];

export default function ConstructionScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [16, 5, 0], fov: 45, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 15, 5]} intensity={0.5} color="#14b8a6" />
        <pointLight position={[0, 10, 0]} intensity={0.3} color="#a78bfa" />
        <fog attach="fog" args={["#0a0f1a", 12, 35]} />

        <CameraRig />

        {/* Stars in background */}
        <Stars radius={50} depth={30} count={1500} factor={3} saturation={0.2} fade speed={0.5} />

        {/* Ground */}
        <GroundGrid />

        {/* Buildings growing */}
        {buildings.map((b, i) => (
          <Building key={i} {...b} />
        ))}

        {/* Floating construction particles */}
        <ConstructionParticles />

        {/* Floating BIM data points */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={[3, 8, -2]}>
            <octahedronGeometry args={[0.2]} />
            <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.5} wireframe />
          </mesh>
        </Float>
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
          <mesh position={[-4, 9, 1]}>
            <octahedronGeometry args={[0.15]} />
            <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={0.5} wireframe />
          </mesh>
        </Float>
      </Canvas>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
    </div>
  );
}
