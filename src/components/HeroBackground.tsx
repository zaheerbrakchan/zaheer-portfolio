"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.12)_0%,transparent_50%)]" />
      <div
        className="absolute -top-1/4 left-1/4 w-[480px] h-[480px] rounded-full opacity-40 blur-[100px] animate-mesh-1"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-30 blur-[90px] animate-mesh-2"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[320px] rounded-full opacity-20 blur-[80px] animate-mesh-3"
        style={{ background: "radial-gradient(circle, #6366f1 0%, #8b5cf6 50%, transparent 70%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #6366f1 1px, transparent 1px),
            radial-gradient(circle at 60% 70%, #8b5cf6 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px, 160px 160px, 140px 140px",
          animation: "mesh-drift 25s linear infinite",
        }}
      />
    </div>
  );
}
