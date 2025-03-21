'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Grid } from '@react-three/drei'
import * as THREE from 'three'

export default function Room() {
  // 방 크기 설정
  const roomSize = 20
  const wallThickness = 2

  return (
    <div className="w-full h-[70vh] relative">
      <Canvas>
        <color attach="background" args={[0x0f172a]} />
        
        {/* 카메라 설정 - 등각뷰를 위한 위치 */}
        <PerspectiveCamera makeDefault position={[35, 35, 35]} />
        
        {/* 조명 설정 */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 5]} intensity={2} />
        
        {/* XYZ 좌표계 가이드 */}
        <axesHelper args={[5]} />
        
        <Grid infiniteGrid cellSize={1} cellThickness={1} sectionSize={5} sectionThickness={1}/>
        
        {/* 바닥 - 0에서 -2까지 (0이 실내 바닥 표면) */}
        <mesh position={[roomSize/2, -wallThickness/2, roomSize/2]}>
          <boxGeometry args={[roomSize, wallThickness, roomSize]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* 왼쪽 벽 - x축 기준으로 방 외부에 위치 */}
        <mesh position={[-wallThickness/2, roomSize/2, roomSize/2]}>
          <boxGeometry args={[wallThickness, roomSize, roomSize]} />
          <meshStandardMaterial color="#F5F5DC" />
        </mesh>
        
        {/* 뒷벽 - z축 기준으로 방 외부에 위치 */}
        <mesh position={[roomSize/2, roomSize/2, -wallThickness/2]}>
          <boxGeometry args={[roomSize, roomSize, wallThickness]} />
          <meshStandardMaterial color="#F5F5DC" />
        </mesh>
        
        {/* 카메라 컨트롤 */}
        <OrbitControls />
      </Canvas>
    </div>
  )
}