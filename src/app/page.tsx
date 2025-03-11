export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">3D 포트폴리오</h1>
      <p className="text-xl mb-8">Next.js, Three.js, React Flow, Zustand 기반 프로젝트</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="bg-blue-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">3D 뷰어</h2>
          <p>Three.js 기반 3D 인터랙티브 환경</p>
        </section>
        
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
  );
}