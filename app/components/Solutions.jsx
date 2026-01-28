"use client";

const features = [
  {
    title: "Dokumentasi Otomatis Terorganisir",
    desc: "Foto dan video langsung tersusun rapi berdasarkan kategori.",
  },
  {
    title: "Kolaborasi Lebih Mudah",
    desc: "Dokumentasi bisa diakses dan dibagikan ke rekan dalam satu alur.",
  },
  {
    title: "Siap Dibagikan ke Cloud",
    desc: "Dokumentasi dapat diekspor ke Google Drive tanpa proses manual.",
  },
];

export default function Solutions() {
  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-black">
          Dokumentasi Lebih Rapi
        </h2>

        <p className="mt-4 text-neutral-600 max-w-xl">
          Dirancang untuk alur kerja dokumentasi yang nyata, bukan sekadar penyimpanan file.
        </p>

        <div className="mt-16 space-y-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex items-start justify-between gap-6
                         rounded-2xl border border-neutral-200
                         px-6 py-5 transition
                         hover:border-neutral-400"
            >
              {/* LEFT */}
              <div className="flex gap-4">
                {/* indicator */}
                <div className="w-1 rounded-full bg-black/80" />

                <div>
                  <h3 className="text-base font-medium text-black">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 max-w-xl">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
