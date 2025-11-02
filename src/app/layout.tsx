// src/app/layout.tsx
import './globals.css';


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Zaheer Abass • AI Engineer',
  description: 'Zaheer Abass — AI Engineer & Backend Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800 antialiased">
        <div className="min-h-screen flex flex-col font-sans">
          <Navbar />
          <main className="container mx-auto px-4 py-12 flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
