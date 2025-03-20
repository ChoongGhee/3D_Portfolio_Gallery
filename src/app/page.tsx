// src/app/page.tsx
import Room from '@/components/Room'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      
      {/* 3D 뷰어 섹션 */}
      <section className="mb-8">
        <Room />
      </section>
      
      {/* 추가 섹션들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-purple-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">노드 에디터</h2>
          <p>React Flow 기반 비주얼 노드 에디터</p>
        </section>
        
        <section className="bg-green-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">에셋 관리</h2>
          <p>3D 모델 및 재질 관리 시스템</p>
        </section>
      </div>
    </main>
  )
}