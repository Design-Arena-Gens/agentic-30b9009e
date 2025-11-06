export default function Header() {
  return (
    <header className="border-b border-purple-900/30 backdrop-blur-sm sticky top-0 z-50 bg-black/40">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold neon-text mb-2">
              🎬 VFX Director Pipeline
            </h1>
            <p className="text-purple-300 text-lg">
              व्हीएफएक्स डायरेक्टर पाइपलाइन | Professional Cinematic VFX Generator
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="glass-effect px-4 py-2 rounded-lg">
              <span className="text-purple-400 font-semibold">Professional</span>
            </div>
            <div className="glass-effect px-4 py-2 rounded-lg">
              <span className="text-purple-400 font-semibold">Pipeline Ready</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
