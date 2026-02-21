// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          <span className="bg-gradient-to-r from-ai-cyan to-ai-violet bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            Zaheer Abass
          </span>
        </Link>
        <div className="flex gap-8 text-gray-300 font-medium text-sm tracking-wide">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <motion.div key={link.href} whileHover={{ y: -2 }}>
                <Link
                  href={link.href}
                  className={`relative pb-1 transition-colors duration-300 ${active ? "text-white" : "hover:text-ai-cyan"
                    }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-ai-cyan shadow-[0_0_10px_rgba(0,240,255,0.7)]"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
