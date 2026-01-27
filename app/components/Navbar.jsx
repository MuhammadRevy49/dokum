export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-neutral-950/50 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT : BRAND */}
        <div className="text-lg font-semibold tracking-wide">
          Dokum
        </div>

        {/* CENTER : MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm text-neutral-400 select-none">
          <a
            href="#home"
            className="hover:text-white transition-colors"
          >
            Beranda
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors"
          >
            Masalah
          </a>
          <a
            href="#features"
            className="hover:text-white transition-colors"
          >
            Solusi
          </a>
          <a
            href="#features"
            className="hover:text-white transition-colors"
          >
            Cara Kerja
          </a>
          <a
            href="#features"
            className="hover:text-white transition-colors"
          >
            Penggunaan
          </a>
        </div>

        {/* RIGHT : CTA */}
        <div>
          <button className="px-4 py-2 rounded-full bg-white text-black text-sm hover:bg-gray-400 select-none hover:cursor-pointer transition-all">
            Mulai Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
}
