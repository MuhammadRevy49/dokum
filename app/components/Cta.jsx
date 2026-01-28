import AnimatedBorderButton from "./AnimatedBorderButton";

export default function CTA() {
  return (
    <section id="cta" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Bantu Kami Membangun Dokum
        </h2>

        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
          Kami sedang mengembangkan solusi dokumentasi yang lebih rapi dan efisien.
          Masukan Anda akan sangat membantu arah pengembangan kami.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://forms.gle/5RaHRD8ViXCSiz847"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              Isi Survei Singkat
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
}
