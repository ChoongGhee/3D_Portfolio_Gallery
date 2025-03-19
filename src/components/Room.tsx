// src/components/Room.tsx
"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Plane } from "@react-three/drei";
import * as THREE from "three";

export default function Room() {
  const roomRef = useRef<THREE.Group>(null);

  // 바닥, 천장, 벽 질감을 위한 색상
  const floorColor = new THREE.Color("#8B4513");
  const wallColor = new THREE.Color("#F5F5DC");
  const ceilingColor = new THREE.Color("#FFFFFF");

  return (
    <group ref={roomRef}>
      {/* 바닥 */}
      <Plane 
        args={[10, 10]} 
        rotation-x={-Math.PI / 2} 
        position={[0, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial color={floorColor} />
      </Plane>

      {/* 천장 */}
      <Plane 
        args={[10, 10]} 
        rotation-x={Math.PI / 2} 
        position={[0, 5, 0]}
      >
        <meshStandardMaterial color={ceilingColor} />
      </Plane>

      {/* 뒷벽 */}
      <Plane 
        args={[10, 5]} 
        position={[0, 2.5, -5]}
      >
        <meshStandardMaterial color={wallColor} />
      </Plane>

      {/* 왼쪽 벽 */}
      <Plane 
        args={[10, 5]} 
        rotation-y={Math.PI / 2} 
        position={[-5, 2.5, 0]}
      >
        <meshStandardMaterial color={wallColor} />
      </Plane>

      {/* 오른쪽 벽 */}
      <Plane 
        args={[10, 5]} 
        rotation-y={-Math.PI / 2} 
        position={[5, 2.5, 0]}
      >
        <meshStandardMaterial color={wallColor} />
      </Plane>

      {/* TV 선반 */}
      <Box
        args={[3, 0.2, 1]}
        position={[0, 1.5, -4.5]}
      >
        <meshStandardMaterial color="#8B4513" />
      </Box>

      {/* TV 화면 (이후에 상호작용 기능 추가) */}
      <Box
        args={[2.5, 1.5, 0.1]}
        position={[0, 2.5, -4.9]}
      >
        <meshStandardMaterial color="#000000" />
      </Box>
    </group>
  );
}