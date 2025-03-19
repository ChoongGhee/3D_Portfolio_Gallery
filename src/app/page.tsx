// src/app/page.tsx
"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Room from "@/components/Room";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Room />
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        </Suspense>
      </Canvas>
    </main>
  );
}