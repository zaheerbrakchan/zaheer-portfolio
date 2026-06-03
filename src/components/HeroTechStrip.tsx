"use client";

const TAGS = [
  "Voice AI",
  "RAG",
  "LangGraph",
  "FastAPI",
  "IDP / OCR",
  "WebSockets",
  "Multi-Agent",
  "PostgreSQL",
];

export default function HeroTechStrip() {
  return (
    <div className="xl:hidden w-full mt-6 overflow-hidden">
      <div className="flex flex-wrap justify-center gap-2 px-2">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-3 py-1.5 rounded-full glass border border-white/10 text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
