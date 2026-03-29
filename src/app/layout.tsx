// src/app/layout.tsx
import './globals.css';


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Zaheer Abass • AI Engineer',
  description: 'Zaheer Abass — AI Engineer & Backend Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased selection:bg-ai-violet/30 selection:text-white">
        <div className="min-h-screen flex flex-col font-sans relative">
          <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ai-violet/10 via-background to-background"></div>
          <Navbar />
          <main className="container mx-auto px-4 py-12 flex-1 relative z-10">
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
