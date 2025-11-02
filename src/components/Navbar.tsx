// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-slate-800 hover:text-slate-900">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Zaheer Abass
          </span>
        </Link>
        <div className="flex gap-6 text-slate-700 font-medium">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <motion.div key={link.href} whileHover={{ scale: 1.05 }}>
                <Link
                  href={link.href}
                  className={`relative pb-1 hover:text-indigo-600 transition ${
                    active ? "text-indigo-600" : ""
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"
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
