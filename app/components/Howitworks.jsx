const steps = ["Ambil Foto & Video", "Otomatis Tersusun", "Bagikan dengan Mudah"];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold">How It Works</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-10 text-left">
          {steps.map((step, i) => (
            <div key={i}>
              <span className="text-black px-4 py-1 rounded-full bg-white text-sm">
                STEP {i + 1}
              </span>
              <h3 className="mt-2 text-xl font-medium">{step}</h3>
              <p className="mt-2 text-neutral-400 text-sm">
                Simple, fast, and designed for real-world document needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
