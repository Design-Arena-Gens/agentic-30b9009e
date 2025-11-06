"use client";

import { useState } from "react";
import VFXForm from "./components/VFXForm";
import VFXBreakdown from "./components/VFXBreakdown";
import Header from "./components/Header";

export default function Home() {
  const [breakdown, setBreakdown] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (sceneDescription: string) => {
    setLoading(true);

    // Simulate API call with comprehensive VFX breakdown generation
    setTimeout(() => {
      const generatedBreakdown = generateVFXBreakdown(sceneDescription);
      setBreakdown(generatedBreakdown);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <VFXForm onGenerate={handleGenerate} loading={loading} />
          </div>

          <div className="space-y-6">
            {loading && (
              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mb-4"></div>
                <p className="text-xl text-purple-300">पाइपलाइन तयार करत आहे...</p>
                <p className="text-sm text-gray-400 mt-2">Generating VFX Pipeline...</p>
              </div>
            )}

            {breakdown && !loading && (
              <VFXBreakdown breakdown={breakdown} />
            )}

            {!breakdown && !loading && (
              <div className="glass-effect rounded-2xl p-12 text-center">
                <div className="text-6xl mb-4 float-animation">🎬</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-2">
                  तुमचा व्हीएफएक्स सीन तयार करा
                </h3>
                <p className="text-gray-400">
                  Create your cinematic VFX scene with professional pipeline breakdown
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function generateVFXBreakdown(description: string) {
  // Extract keywords for intelligent generation
  const hasCharacter = /character|person|hero|villain|warrior|मुख्य पात्र/i.test(description);
  const hasExplosion = /explosi|blast|धमाका|स्फोट/i.test(description);
  const hasFire = /fire|flame|आग|ज्वाला/i.test(description);
  const hasSmoke = /smoke|धूर/i.test(description);
  const hasRain = /rain|पाऊस/i.test(description);
  const hasMagic = /magic|जादू|spell/i.test(description);
  const isNight = /night|रात्र|dark/i.test(description);
  const isDay = /day|दिवस|bright/i.test(description);

  return {
    sceneDescription: description,
    stages: [
      {
        title: "Scene Layout & Environment Setup",
        titleMr: "सीन लेआउट आणि एन्व्हायर्नमेंट सेटअप",
        icon: "🏗️",
        items: [
          {
            label: "Environment Type",
            labelMr: "वातावरण प्रकार",
            value: hasExplosion ? "Urban/Destruction Zone" : "Natural/Controlled"
          },
          {
            label: "Ground Plane",
            labelMr: "ग्राउंड प्लेन",
            value: "500x500 units, Subdivision: Level 3"
          },
          {
            label: "Background",
            labelMr: "बॅकग्राउंड",
            value: hasExplosion ? "Damaged cityscape with debris" : "Natural landscape with depth"
          },
          {
            label: "Asset Placement",
            labelMr: "अॅसेट प्लेसमेंट",
            value: "Hero objects at origin, supporting elements in mid-ground"
          }
        ]
      },
      {
        title: "Particle Simulation",
        titleMr: "पार्टिकल सिम्युलेशन",
        icon: "✨",
        items: [
          hasFire && {
            label: "Fire Emitter",
            labelMr: "फायर एमिटर",
            value: "Birth Rate: 5000/sec, Life: 2-4s, Velocity: 8-15 units/s, Turbulence: 0.6"
          },
          hasSmoke && {
            label: "Smoke Simulation",
            labelMr: "स्मोक सिम्युलेशन",
            value: "Density: 2.5, Buoyancy: 1.2, Vorticity: 0.8, Dissipation: 3s"
          },
          hasRain && {
            label: "Rain Particles",
            labelMr: "पाऊस पार्टिकल्स",
            value: "Birth Rate: 50000/sec, Gravity: -980, Streak Length: 0.3m"
          },
          hasMagic && {
            label: "Magic Particles",
            labelMr: "जादूचे पार्टिकल्स",
            value: "Glow: Enabled, Color Ramp: Purple-Blue, Turbulence: 1.2"
          },
          hasExplosion && {
            label: "Explosion Debris",
            labelMr: "स्फोट धूळ",
            value: "Rigid Body, Random Rotation, Initial Velocity: Radial 50 units/s"
          }
        ].filter(Boolean),
        technical: {
          solver: "Adaptive Time Stepping",
          cacheFormat: "OpenVDB",
          resolution: "Division Size: 0.05m, Max Grid: 2048³"
        }
      },
      {
        title: "Lighting Setup",
        titleMr: "लाइटिंग सेटअप",
        icon: "💡",
        items: [
          {
            label: "HDRI Environment",
            labelMr: "HDRI एन्व्हायर्नमेंट",
            value: isNight ? "Night Sky (Starry/Urban Glow)" : "Day Sky (Cloudy/Clear)"
          },
          {
            label: "Key Light",
            labelMr: "की लाईट",
            value: `${isNight ? 'Cool Blue' : 'Warm Yellow'}, Intensity: ${isNight ? '800' : '1500'}W, Angle: 45°`
          },
          {
            label: "Fill Light",
            labelMr: "फिल लाईट",
            value: `Opposite side, Intensity: ${isNight ? '300' : '600'}W, Softness: 0.7`
          },
          {
            label: "Rim Light",
            labelMr: "रिम लाईट",
            value: "Backlight, Intensity: 1200W, Creates separation from background"
          },
          hasFire && {
            label: "Fire Light (Dynamic)",
            labelMr: "आग प्रकाश (डायनॅमिक)",
            value: "Orange-Red, Intensity: Animated 800-1500W, Flicker Rate: 12Hz"
          }
        ].filter(Boolean),
        technical: {
          shadowQuality: "Ray-traced, 16 samples",
          volumetricLighting: hasFire || hasSmoke ? "Enabled, Step Size: 0.1m" : "Disabled",
          globalIllumination: "Path Tracing, 256 samples"
        }
      },
      {
        title: "Camera & Movement",
        titleMr: "कॅमेरा आणि मूव्हमेंट",
        icon: "🎥",
        items: [
          {
            label: "Camera Type",
            labelMr: "कॅमेरा प्रकार",
            value: hasExplosion ? "Dynamic (Dolly + Shake)" : "Cinematic (Smooth Tracking)"
          },
          {
            label: "Focal Length",
            labelMr: "फोकल लेंथ",
            value: "35mm (Wide for action) / 50mm (Standard for drama)"
          },
          {
            label: "Depth of Field",
            labelMr: "डेप्थ ऑफ फील्ड",
            value: "f-stop: 2.8, Focus Distance: Subject, Bokeh: Hexagonal"
          },
          {
            label: "Camera Movement",
            labelMr: "कॅमेरा मूव्हमेंट",
            value: hasExplosion ? "Fast dolly-in with handheld shake" : "Slow circular orbit"
          },
          {
            label: "Motion Blur",
            labelMr: "मोशन ब्लर",
            value: "Shutter: 180°, Samples: 16, Motion Vector based"
          }
        ]
      },
      hasCharacter && {
        title: "Character Animation & Rigging",
        titleMr: "पात्र अॅनिमेशन आणि रिगिंग",
        icon: "🎭",
        items: [
          {
            label: "Rig Type",
            labelMr: "रिग प्रकार",
            value: "FK/IK Hybrid with automatic switching"
          },
          {
            label: "Animation Style",
            labelMr: "अॅनिमेशन शैली",
            value: hasExplosion ? "Action (Fast, Dynamic)" : "Dramatic (Controlled, Expressive)"
          },
          {
            label: "Facial Rig",
            labelMr: "चेहरा रिग",
            value: "Blend shapes, 52 controls, Eye tracking enabled"
          },
          {
            label: "Cloth Simulation",
            labelMr: "कपडे सिम्युलेशन",
            value: "Wind Force: 5N, Stiffness: 0.4, Damping: 0.6"
          },
          {
            label: "Hair/Fur",
            labelMr: "केस/फर",
            value: "Strand-based, Collision: Enabled, Wind Response: 0.7"
          }
        ]
      },
      {
        title: "Compositing & Color Grading",
        titleMr: "कंपोझिटिंग आणि कलर ग्रेडिंग",
        icon: "🎨",
        items: [
          {
            label: "Layer Structure",
            labelMr: "लेयर स्ट्रक्चर",
            value: "BG → Environment → Character → Particles → FX → Grade"
          },
          {
            label: "Render Passes",
            labelMr: "रेंडर पासेस",
            value: "Beauty, Diffuse, Specular, Shadow, AO, Z-Depth, Cryptomatte"
          },
          {
            label: "Color Grade Style",
            labelMr: "कलर ग्रेड शैली",
            value: hasExplosion ? "High contrast, desaturated with warm explosions" : "Balanced, cinematic teal-orange"
          },
          {
            label: "Glow/Bloom",
            labelMr: "ग्लो/ब्लूम",
            value: (hasFire || hasMagic) ? "Threshold: 0.8, Intensity: 1.5, Radius: 50px" : "Subtle, Threshold: 1.2"
          },
          {
            label: "Lens Effects",
            labelMr: "लेन्स इफेक्ट्स",
            value: "Chromatic Aberration: 0.02, Vignette: 0.3, Lens Distortion: 0.05"
          }
        ],
        technical: {
          blendModes: "Particles: Add/Screen, Shadows: Multiply, Reflections: Screen",
          colorSpace: "ACES (ACEScg working space → sRGB display)",
          luts: "Cinematic LUT applied after grade"
        }
      },
      {
        title: "Render Settings & Export",
        titleMr: "रेंडर सेटिंग्ज आणि एक्स्पोर्ट",
        icon: "⚙️",
        items: [
          {
            label: "Resolution",
            labelMr: "रिझॉल्यूशन",
            value: "3840x2160 (4K UHD) or 1920x1080 (Full HD)"
          },
          {
            label: "Frame Rate",
            labelMr: "फ्रेम रेट",
            value: "24fps (Cinematic) / 30fps (Broadcast) / 60fps (Action)"
          },
          {
            label: "Samples",
            labelMr: "सॅम्पल्स",
            value: "Preview: 128, Final: 512-1024 (adaptive)"
          },
          {
            label: "Render Engine",
            labelMr: "रेंडर इंजिन",
            value: "Cycles (Path Tracing) / Arnold / V-Ray"
          },
          {
            label: "Denoiser",
            labelMr: "डीनॉइझर",
            value: "OptiX AI Denoiser (GPU) / OpenImageDenoise"
          },
          {
            label: "Output Format",
            labelMr: "आउटपुट फॉर्मॅट",
            value: "EXR (32-bit float) for compositing, ProRes 422 HQ for final"
          },
          {
            label: "File Naming",
            labelMr: "फाइल नेमिंग",
            value: "scene_shot_pass_####.exr (e.g., explosion_001_beauty_0001.exr)"
          }
        ],
        optimization: [
          "Render in tiles for large resolutions (256x256 tiles)",
          "Use render farm/cloud rendering for faster turnaround",
          "Enable persistent data caching for animations",
          "Optimize particle counts based on camera distance",
          "Use proxy geometry for distant objects"
        ]
      }
    ].filter(Boolean)
  };
}
