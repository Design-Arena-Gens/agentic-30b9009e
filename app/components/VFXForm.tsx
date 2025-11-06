"use client";

import { useState } from "react";

interface VFXFormProps {
  onGenerate: (description: string) => void;
  loading: boolean;
}

export default function VFXForm({ onGenerate, loading }: VFXFormProps) {
  const [description, setDescription] = useState("");

  const examples = [
    "A hero character casting a magic spell in a dark forest at night with glowing particles and mystical fog",
    "रात्रीच्या वेळी शहरात मोठा स्फोट, आग आणि धूर, कॅमेरा झटका",
    "An epic battle scene with explosions, fire, and smoke in an urban environment during sunset",
    "पावसात एक योद्धा उभा आहे, विजेचे कडकडाट, नाटकीय प्रकाश",
    "Underwater scene with magical glowing creatures, volumetric lighting, and particle effects"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onGenerate(description);
    }
  };

  return (
    <div className="glass-effect rounded-2xl p-8 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-purple-300 mb-2">
          सीन वर्णन | Scene Description
        </h2>
        <p className="text-gray-400">
          Describe your cinematic VFX scene in detail (Marathi or English)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-purple-300 mb-3">
            Scene Details (Location, Mood, Characters, Effects, Time, Camera Style)
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-48 px-4 py-3 bg-black/40 border border-purple-500/30 rounded-xl
                     text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2
                     focus:ring-purple-500/20 outline-none transition-all resize-none"
            placeholder="उदा: एका अंधाऱ्या जंगलात जादूगार जादू करत आहे, निळ्या आणि जांभळ्या रंगाचे पार्टिकल्स, रात्रीचा वेळ..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading || !description.trim()}
          className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600
                   text-white font-bold rounded-xl hover:from-purple-500 hover:to-blue-500
                   disabled:opacity-50 disabled:cursor-not-allowed transition-all
                   transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/50"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
              पाइपलाइन तयार करत आहे...
            </span>
          ) : (
            <span>🎬 Generate VFX Pipeline | पाइपलाइन तयार करा</span>
          )}
        </button>
      </form>

      <div className="border-t border-purple-900/30 pt-6">
        <h3 className="text-lg font-semibold text-purple-300 mb-4">
          📋 Examples | उदाहरणे
        </h3>
        <div className="space-y-2 max-h-64 overflow-y-auto scrollbar-hide">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setDescription(example)}
              className="w-full text-left p-3 bg-black/40 hover:bg-purple-900/20
                       rounded-lg transition-all text-sm text-gray-300 hover:text-purple-300
                       border border-transparent hover:border-purple-500/30"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
