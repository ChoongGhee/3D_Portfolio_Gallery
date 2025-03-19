import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D 포트폴리오',
  description: 'Next.js, Three.js, React Flow 기반 포트폴리오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}