"use client";

import { motion } from "framer-motion";
import AnimatedBorderButton from "./AnimatedBorderButton";

export default function Hero() {
  return (
    <section id="home" className="bg-black relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* LEFT : IMAGE / MOCKUP */}
          <div className="relative flex justify-center md:justify-start">

            <div className="relative select-none">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
              <img
                src="/images/hero.png"
                alt="Document Camera App"
                className="w-full max-w-md relative z-10"
              />
              </motion.div>
            </div>
          </div>

          {/* RIGHT : TEXT CONTENT */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Dokum <br />

              <span className="relative inline-block mt-2">
                <span className="text-zinc-500 relative z-10">
                  Solusi Dokumentasi
                </span>

                <span className="absolute inset-0 light-sweep z-20">
                  Solusi Dokumentasi
                </span>
              </span>
            </h1>

            <p className="mt-6 text-neutral-400 max-w-xl">
                Kelola dokumentasi foto & video tanpa ribet.
                Ambil, susun, dan bagikan dokumentasi dalam satu alur yang rapi dan kolaboratif.
            </p>

            <div className="mt-10">
              <AnimatedBorderButton>
                Pelajari Lebih Lanjut
              </AnimatedBorderButton>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
