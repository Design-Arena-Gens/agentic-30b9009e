"use client";

import { motion } from "framer-motion";

interface VFXBreakdownProps {
  breakdown: any;
}

export default function VFXBreakdown({ breakdown }: VFXBreakdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Scene Description */}
      <div className="glass-effect rounded-2xl p-6 border-2 border-purple-500/30">
        <h3 className="text-xl font-bold text-purple-300 mb-3 flex items-center gap-2">
          📝 Scene Input | सीन इनपुट
        </h3>
        <p className="text-gray-300 leading-relaxed">{breakdown.sceneDescription}</p>
      </div>

      {/* Pipeline Stages */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-purple-300 flex items-center gap-2">
          🎯 VFX Pipeline Breakdown | पाइपलाइन विभाजन
        </h2>

        {breakdown.stages.map((stage: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect rounded-2xl p-6 pipeline-card"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">{stage.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-purple-300">{stage.title}</h3>
                <p className="text-purple-400 text-sm">{stage.titleMr}</p>
              </div>
            </div>

            <div className="space-y-3">
              {stage.items.map((item: any, itemIndex: number) => (
                <div
                  key={itemIndex}
                  className="bg-black/40 rounded-lg p-4 border border-purple-900/30"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <p className="text-purple-300 font-semibold">{item.label}</p>
                      <p className="text-purple-400/70 text-sm">{item.labelMr}</p>
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-gray-300 text-sm">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Parameters */}
            {stage.technical && (
              <div className="mt-4 pt-4 border-t border-purple-900/30">
                <h4 className="text-sm font-bold text-purple-400 mb-3">
                  ⚙️ Technical Parameters | तांत्रिक पॅरामीटर्स
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(stage.technical).map(([key, value]: [string, any]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="text-gray-300">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Optimization Tips */}
            {stage.optimization && (
              <div className="mt-4 pt-4 border-t border-purple-900/30">
                <h4 className="text-sm font-bold text-purple-400 mb-3">
                  💡 Optimization Tips | ऑप्टिमायझेशन टिप्स
                </h4>
                <ul className="space-y-2">
                  {stage.optimization.map((tip: string, tipIndex: number) => (
                    <li key={tipIndex} className="flex gap-2 text-sm text-gray-300">
                      <span className="text-purple-500">→</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Export Actions */}
      <div className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          📤 Export Options | एक्स्पोर्ट पर्याय
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="py-3 px-4 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg
                           border border-purple-500/30 transition-all text-purple-300 font-semibold">
            📄 Export as PDF
          </button>
          <button className="py-3 px-4 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg
                           border border-blue-500/30 transition-all text-blue-300 font-semibold">
            📋 Copy to Clipboard
          </button>
          <button className="py-3 px-4 bg-green-600/20 hover:bg-green-600/30 rounded-lg
                           border border-green-500/30 transition-all text-green-300 font-semibold">
            💾 Save as JSON
          </button>
          <button className="py-3 px-4 bg-orange-600/20 hover:bg-orange-600/30 rounded-lg
                           border border-orange-500/30 transition-all text-orange-300 font-semibold">
            🔗 Share Link
          </button>
        </div>
      </div>
    </motion.div>
  );
}
