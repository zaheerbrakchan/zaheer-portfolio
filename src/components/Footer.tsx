// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20 bg-black/20">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500 tracking-wide">
          © {new Date().getFullYear()} Zaheer Abass — Artificial Intelligence Engineer
        </p>
      </div>
    </footer>
  );
}
