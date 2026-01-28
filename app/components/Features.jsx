"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Sulit Mencari File Tertentu",
    desc: "Foto dan video tercampur membuat proses pencarian dokumentasi memakan waktu.",
  },
  {
    title: "Dokumentasi Tidak Terorganisir",
    desc: "Tidak ada kategori yang jelas sehingga file mudah tercecer dan membingungkan.",
  },
  {
    title: "Proses Berbagi Tidak Efisien",
    desc: "Harus kirim satu per satu ke banyak orang atau mengatur folder secara manual.",
  },
];

export default function Features() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="bg-[#111] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">
          Dokumentasi Sering Jadi Hambatan?
        </h2>

        <div className="mt-20 flex flex-col md:flex-row justify-center gap-8">
          {features.map((f, i) => {
            const isActive = i === active;

            return (
              <motion.div
                key={i}
                animate={
                  isActive
                    ? { x: [-2, 2, -3, 2, 0] }
                    : { x: 0 }
                }
                transition={{
                  duration: 0.35,
                  ease: "linear",
                }}
                className={`relative w-full md:w-[320px]
                  rounded-2xl bg-[#222] border overflow-hidden
                  ${
                    isActive
                      ? "border-zinc-600 shadow-[0_0_28px_rgba(255,255,255,0.14)]"
                      : "border-neutral-800 opacity-60"
                  }
                `}
              >
                <div className="p-8">
                  <h3 className="text-lg font-medium">{f.title}</h3>
                  <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
