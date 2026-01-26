const features = [
  {
    title: "Auto Edge Detection",
    desc: "Automatically detect document edges with high accuracy.",
  },
  {
    title: "Clean Scan Result",
    desc: "Enhance contrast and remove shadows for professional output.",
  },
  {
    title: "Fast & Lightweight",
    desc: "Optimized performance for speed and efficiency.",
  },
];

export default function Features() {
  return (
    <section className="py-24 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">
          Built for Modern Workflow
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
