'use client';

export default function StoriesPage() {
  // Render stories content here; no auth required
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Stories</h1>
        <p className="text-lg text-gray-700">Browse and read stories without signing in.</p>
        {/* TODO: Render actual stories list/content here */}
      </div>
    </div>
  );
}
