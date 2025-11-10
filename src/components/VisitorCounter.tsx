"use client";
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Replace with your own namespace and key
    fetch("https://api.countapi.xyz/hit/zaheerbrakchan-portfolio-2025/visits")
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => setCount(null));
  }, []);

  return (
    <p className="mt-8 text-slate-600 text-sm">
      👀 <span className="font-medium">{count ?? "..."}</span> visits so far
    </p>
  );
}
