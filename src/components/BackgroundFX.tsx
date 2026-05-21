import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function GlobalParticles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 800;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return arr;
  }, []);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
    }
  });
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" data-testid="background-fx">
      {/* CSS grid */}
      <div className="absolute inset-0 cyber-grid opacity-60" />
      {/* radial glow blobs */}
      <div className="absolute top-[10%] left-[5%] h-[40rem] w-[40rem] rounded-full bg-cyan/10 blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-[5%] right-[5%] h-[35rem] w-[35rem] rounded-full bg-violet/10 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-[40%] right-[20%] h-[25rem] w-[25rem] rounded-full bg-magenta/10 blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      />
      {/* particles */}
      <div className="absolute inset-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
          <GlobalParticles />
        </Canvas>
      </div>
    </div>
  );
}
