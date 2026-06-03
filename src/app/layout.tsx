import "./globals.css";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingConnect from "@/components/FloatingConnect";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Zaheer Abass • AI Engineer",
  description: "Zaheer Abass, AI Engineer building production voice agents, RAG, and backend AI systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased selection:bg-accent-to/30 selection:text-white">
        <div className="min-h-screen flex flex-col font-sans relative">
          <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-from/10 via-background to-background" />
          <Navbar />
          <main className="container mx-auto pt-3 pb-10 md:pt-4 md:pb-12 flex-1 relative w-full">
            {children}
            <Analytics />
          </main>
          <Footer />
          <FloatingConnect />
        </div>
      </body>
    </html>
  );
}
