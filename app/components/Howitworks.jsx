const steps = [
  {
    title: "Ambil Foto & Video",
    desc: "Dokumentasikan momen penting langsung dari aplikasi.",
  },
  {
    title: "Otomatis Tersusun",
    desc: "File langsung terorganisir tanpa perlu pengaturan manual.",
  },
  {
    title: "Bagikan dengan Mudah",
    desc: "Bagikan dokumentasi ke tim atau cloud hanya dengan satu langkah.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-black">
          Cara Kerja Dokum
        </h2>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 mt-20 relative">
          {/* LINE */}
          <div className="absolute top-5 left-0 right-0 h-px bg-neutral-300" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center px-6">
              {/* DOT */}
              <div className="mx-auto w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
                {i + 1}
              </div>

              <h3 className="mt-6 text-lg font-medium text-black">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* MOBILE */}
        <div className="md:hidden mt-16 space-y-10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="text-base font-medium text-black">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
