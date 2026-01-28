"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT : BRAND */}
        <div className="text-lg font-semibold tracking-wide">
          Dokum
        </div>

        {/* CENTER : MENU (DESKTOP) */}
        <div className="hidden md:flex items-center gap-10 text-sm text-neutral-400 select-none">
          <a href="#home" className="hover:text-white transition-colors">Beranda</a>
          <a href="#about" className="hover:text-white transition-colors">Masalah</a>
          <a href="#features" className="hover:text-white transition-colors">Solusi</a>
          <a href="#how" className="hover:text-white transition-colors">Cara Kerja</a>
        </div>

        {/* RIGHT : CTA + HAMBURGER */}
        <div className="flex items-center gap-3">
          <a href="#cta">
            <button
              className="hidden md:inline-flex px-4 py-2 rounded-full bg-white text-black text-sm hover:bg-gray-400 transition"
            >
              Mulai Sekarang
            </button>
          </a>

          {/* HAMBURGER (MOBILE) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950/50 backdrop-blur">
          <div className="px-6 py-6 flex flex-col gap-5 text-sm text-neutral-300">
            <a onClick={() => setOpen(false)} href="#home" className="hover:text-white">Beranda</a>
            <a onClick={() => setOpen(false)} href="#about" className="hover:text-white">Masalah</a>
            <a onClick={() => setOpen(false)} href="#features" className="hover:text-white">Solusi</a>
            <a onClick={() => setOpen(false)} href="#how" className="hover:text-white">Cara Kerja</a>
            <a href="#cta">
              <button
                className="mt-4 px-4 py-2 rounded-full bg-white text-black text-sm hover:bg-gray-400 transition"
              >
                Mulai Sekarang
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
