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
    title: "Siap Dibagikan Ke Cloud",
    desc: "Dokumentasi dapat diekspor ke Google Drive tanpa proses manual.",
  },
];

export default function Solutions() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">
          Satu Alur untuk Dokumentasi yang Lebih Rapi
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-neutral-900 border border-neutral-900 hover:border-gray-400 transition"
            >
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-3 text-neutral-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
