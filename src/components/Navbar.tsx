"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-[100] isolate border-b transition-all duration-300 ${
        scrolled
          ? "border-white/15 bg-[#0a0a0a]/98 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.65)]"
          : "border-white/10 bg-[#0a0a0a]/92 backdrop-blur-lg shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="relative z-[1] text-lg sm:text-xl font-bold tracking-tight hover:opacity-80 transition-opacity shrink-0"
        >
          <span className="text-accent-gradient">Zaheer Abass</span>
        </Link>

        <div className="relative z-[1] flex items-center gap-1 sm:gap-2 font-medium text-xs sm:text-sm tracking-wide overflow-x-auto py-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative shrink-0 whitespace-nowrap rounded-lg px-3 py-2 sm:px-4 transition-all duration-300 ${
                  active
                    ? "text-white font-semibold bg-gradient-to-r from-accent-from/30 to-accent-to/25 border border-accent-from/50 shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                    : "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-glow"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-from/15 to-accent-to/15 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative ${active ? "text-accent-gradient" : ""}`}>
                  {link.label}
                </span>
                {active && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full bg-gradient-to-r from-accent-from to-accent-to"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
