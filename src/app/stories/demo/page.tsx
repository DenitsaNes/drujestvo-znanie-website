import Link from 'next/link';

export default function DemoStoryPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Demo Story — The Little Demo</h1>
        <p className="mt-4 text-gray-700">This is a compact demo story provided for local development and previews.</p>
        <div className="mt-6">
          <Link href="/stories/demo/chapters/1" className="text-white bg-purple-600 px-4 py-2 rounded">Start Chapter 1</Link>
        </div>
      </div>
    </main>
  );
}
