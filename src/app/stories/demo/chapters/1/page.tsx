import Link from 'next/link';

export default function DemoChapterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow">
        <h1 className="text-2xl font-bold">Demo Story — Chapter 1</h1>
        <p className="mt-4 text-gray-700">Welcome to the demo chapter. This content is shown when no real stories are available locally.</p>
        <div className="mt-6 space-y-2">
          <p className="text-gray-600">Das ist ein Demo-Text. Hier üben wir einfache Sätze.</p>
          <p className="text-gray-600">Hallo! Ich heiße Minka. Willkommen im Dorf.</p>
        </div>
        <div className="mt-6 flex gap-3">
          <Link href="/dashboard" className="px-4 py-2 bg-white border rounded">Back to Dashboard</Link>
          <Link href="/stories" className="px-4 py-2 bg-purple-600 text-white rounded">All Stories</Link>
        </div>
      </div>
    </main>
  );
}
