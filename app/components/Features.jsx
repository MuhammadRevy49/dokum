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
  return (
    <section className="bg-[#111] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">
          Dokumentasi Sering Jadi Hambatan
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-gray-400 shadow-lg transition-all"
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
