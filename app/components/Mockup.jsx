"use client";

import { useEffect, useState } from "react";

export default function Mockup() {
  const targetProgress = 45;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= targetProgress) {
          clearInterval(timer);
          return targetProgress;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <span className="inline-block px-4 py-1 rounded-full border border-white/10 text-sm tracking-wide text-white/70">
            Prototipe dalam Pengembangan
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Membangun Aplikasi <br />
            <span className="text-zinc-500">Dokumentasi Cerdas</span>
          </h1>

          <p className="text-white/60 text-lg max-w-xl">
            Saat ini prototipe aplikasi sedang dalam tahap pengembangan.
            Kami berfokus menghadirkan pengalaman dokumentasi yang efisien,
            rapi, dan mudah digunakan.
          </p>

          {/* PROGRESS */}
          <div className="space-y-3 max-w-md">
            <div className="flex justify-between text-sm text-white/50">
              <span>Progress Prototipe</span>
              <span>{progress}%</span>
            </div>

            <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <p className="text-sm text-white/40">
            Versi awal akan dirilis setelah proses validasi dan penyempurnaan selesai.
          </p>
        </div>

        {/* RIGHT MOCKUP */}
        <div className="relative flex justify-center">
          {/* soft glow */}
          <div className="absolute -inset-8 bg-white/8 blur-3xl rounded-full" />

          <div className="relative p-6">
            <img
              src="/images/mockup.png"
              alt="App Mockup"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
