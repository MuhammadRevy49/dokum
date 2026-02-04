import { Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center gap-4 text-sm text-neutral-500">
        
        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/dokum.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://tiktok.com/@dokum.solusidokumentasi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="TikTok"
          >
            <Music2 size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p>
          © {new Date().getFullYear()} Dokum. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
