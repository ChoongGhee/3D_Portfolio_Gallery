'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Grid } from '@react-three/drei'
// import * as THREE from 'three'

export default function Room() {
  return (
    <div className="w-full h-[70vh] relative">
      <Canvas>
        <color attach="background" args={[0x0f172a]} />
        
        {/* 카메라 설정 */}
        <PerspectiveCamera makeDefault position={[5, 5, 5]} />
        
        {/* 조명 설정 */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* XYZ 좌표계 가이드 */}
        <axesHelper args={[1]} />
        
        {/* 그리드 헬퍼 (바닥 격자) */}
        <Grid infiniteGrid cellSize={1} cellThickness={0.6} sectionSize={5} sectionThickness={1.2} />
        
        {/* 3D 모델/객체 */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#4f46e5" />
        </mesh>
        
        {/* 카메라 컨트롤 */}
        <OrbitControls />
      </Canvas>
    </div>
  )
}