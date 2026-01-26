import AnimatedBorderButton from "./AnimatedBorderButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT : IMAGE / MOCKUP */}
          <div className="relative flex justify-center md:justify-start">
            
            {/* spotlight */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="spotlight" />
            </div>

            <div className="relative">
              <img
                src="/mockup-camera.png"
                alt="Document Camera App"
                className="w-full max-w-md rounded-2xl shadow-2xl border border-neutral-900 relative z-10"
              />

              {/* subtle image glow (keep) */}
              <div className="absolute -inset-6 bg-white/5 blur-3xl rounded-full -z-10" />
            </div>
          </div>

          {/* RIGHT : TEXT CONTENT */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Dokum <br />

              <span className="relative inline-block mt-2">
                <span className="text-gray-400 relative z-10">
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

      {/* global background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.02),transparent_60%)]" />
    </section>
  );
}
