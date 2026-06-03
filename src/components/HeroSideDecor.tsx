"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Brain,
  Server,
  Database,
  Workflow,
  Bot,
  FileSearch,
  Zap,
  MapPin,
  GraduationCap,
  Sparkles,
} from "lucide-react";

type SideItem = {
  label: string;
  sub?: string;
  icon: ReactNode;
};

const LEFT_ITEMS: SideItem[] = [
  { label: "Voice & Telephony", sub: "VAPI · Twilio", icon: <Mic className="w-4 h-4" /> },
  { label: "RAG Pipelines", sub: "LangChain · Azure", icon: <Brain className="w-4 h-4" /> },
  { label: "Document Intelligence", sub: "OCR · IDP", icon: <FileSearch className="w-4 h-4" /> },
  { label: "Agent Orchestration", sub: "LangGraph", icon: <Bot className="w-4 h-4" /> },
];

const RIGHT_ITEMS: SideItem[] = [
  { label: "FastAPI · Spring Boot", sub: "Backend APIs", icon: <Server className="w-4 h-4" /> },
  { label: "PostgreSQL · Redis", sub: "Data layer", icon: <Database className="w-4 h-4" /> },
  { label: "Event-Driven Systems", sub: "Queues · Webhooks", icon: <Workflow className="w-4 h-4" /> },
  { label: "Production at Scale", sub: "500+ daily automations", icon: <Zap className="w-4 h-4" /> },
];

function CornerBracket({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`absolute top-0 ${side === "left" ? "left-0 rounded-tl-xl" : "right-0 rounded-tr-xl"} w-10 h-10 border-accent-from/35 pointer-events-none ${
        side === "left"
          ? "border-l-2 border-t-2"
          : "border-r-2 border-t-2"
      }`}
      aria-hidden
    />
  );
}

function SideCornerHeader({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative w-full mb-3 ${isLeft ? "text-left" : "text-right"}`}
    >
      <CornerBracket side={side} />

      <div
        className={`glass-card rounded-2xl px-4 py-3.5 border-accent-from/20 ${
          isLeft ? "mr-2" : "ml-2"
        }`}
      >
        {isLeft ? (
          <>
            <div className="flex items-center gap-2 text-accent-from mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Role</span>
            </div>
            <p className="text-sm font-bold text-white">AI Engineer</p>
            <p className="text-[11px] text-gray-500 mt-1 font-medium">Voice · RAG · Backend</p>
            <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-gray-400">
              <MapPin className="w-3 h-3 text-accent-to shrink-0" />
              Bengaluru, India
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-end gap-2 text-accent-to mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Background</span>
              <GraduationCap className="w-3.5 h-3.5" />
            </div>
            <p className="text-sm font-bold text-white">IIT Graduate</p>
            <p className="text-[11px] text-gray-500 mt-1 font-medium">6+ years engineering</p>
            <p className="text-[11px] text-accent-from/90 mt-2 font-semibold">Production-first builder</p>
          </>
        )}
      </div>
    </motion.div>
  );
}

const CARD_STAGGER = 0.14;

export function HeroSideColumn({ side }: { side: "left" | "right" }) {
  const items = side === "left" ? LEFT_ITEMS : RIGHT_ITEMS;
  const align = side;
  const fromX = align === "left" ? -36 : 36;

  return (
    <div
      className={`hidden xl:flex flex-col gap-4 w-full max-w-[220px] shrink-0 ${
        align === "left" ? "items-end pr-2 2xl:pr-4" : "items-start pl-2 2xl:pl-4"
      }`}
    >
      <SideCornerHeader side={side} />

      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: fromX }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.55 + i * CARD_STAGGER,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`glass-card rounded-xl px-4 py-3 border-white/10 animate-float w-full ${
            align === "left" ? "text-left" : "text-right"
          } ${i % 2 === 1 ? (align === "left" ? "mr-4" : "ml-4") : ""}`}
          style={{ animationDelay: `${0.8 + i * 0.35}s` }}
        >
          <div
            className={`flex items-center gap-2.5 ${
              align === "right" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="p-2 rounded-lg bg-accent-from/15 border border-accent-from/25 text-accent-from shrink-0">
              {item.icon}
            </div>
            <div className={`min-w-0 ${align === "right" ? "text-right" : ""}`}>
              <p className="text-xs font-semibold text-white leading-tight">{item.label}</p>
              {item.sub && (
                <p className="text-[10px] text-gray-500 mt-0.5 font-medium">{item.sub}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
