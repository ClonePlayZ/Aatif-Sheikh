import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Icosahedron, Torus } from "@react-three/drei";
import * as THREE from "three";

/* Particle / neural-net field */
function NeuralField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 1400;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 8 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

/* Floating bot core — icosahedron wireframe wrapped by spinning torus rings (looks like an AI core) */
function BotCore() {
  const groupRef = useRef<THREE.Group>(null!);
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
    }
    if (ring1.current) ring1.current.rotation.x += delta * 0.7;
    if (ring2.current) ring2.current.rotation.z += delta * 0.5;
    if (ring3.current) {
      ring3.current.rotation.x += delta * 0.3;
      ring3.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={groupRef}>
        {/* core */}
        <Icosahedron args={[1, 1]}>
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.6}
            wireframe
            transparent
            opacity={0.85}
          />
        </Icosahedron>
        {/* inner solid */}
        <Icosahedron args={[0.5, 0]}>
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.8} />
        </Icosahedron>
        {/* ring 1 */}
        <Torus ref={ring1} args={[1.6, 0.012, 12, 100]}>
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.4} />
        </Torus>
        {/* ring 2 */}
        <Torus ref={ring2} args={[1.9, 0.01, 12, 100]}>
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={1.4} />
        </Torus>
        {/* ring 3 */}
        <Torus ref={ring3} args={[2.2, 0.008, 12, 100]}>
          <meshStandardMaterial color="#f0abfc" emissive="#f0abfc" emissiveIntensity={1.2} />
        </Torus>
      </group>
    </Float>
  );
}

interface SceneProps {
  showBotCore?: boolean;
  intensity?: number;
}

export default function HeroScene({ showBotCore = true, intensity = 1 }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4 * intensity} />
      <pointLight position={[6, 6, 6]} intensity={1.2 * intensity} color="#22d3ee" />
      <pointLight position={[-6, -4, 4]} intensity={1 * intensity} color="#a855f7" />
      <NeuralField />
      {showBotCore && <BotCore />}
    </Canvas>
  );
}
