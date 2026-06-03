"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingConnect() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-[90] flex items-center gap-2 px-5 py-3 rounded-full
        bg-gradient-to-r from-accent-from to-accent-to text-white text-sm font-semibold
        shadow-[0_0_24px_rgba(99,102,241,0.45)] hover:shadow-[0_0_32px_rgba(139,92,246,0.55)]
        hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20"
      aria-label="Let's Connect, contact page"
    >
      <MessageCircle className="w-4 h-4" />
      Let&apos;s Connect
    </Link>
  );
}
