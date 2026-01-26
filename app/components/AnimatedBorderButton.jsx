export default function AnimatedBorderButton({ children }) {
  return (
    <button className="relative inline-flex items-center justify-center rounded-full p-[1.5px] overflow-hidden group">
      
      {/* rotating border */}
      <span className="absolute inset-0 rounded-full animate-border-spin bg-[conic-gradient(from_0deg,transparent,white,transparent)] opacity-80" />

      {/* button content */}
      <span className="relative z-10 px-7 py-3 rounded-full bg-neutral-950 text-white transition-colors group-hover:bg-white group-hover:text-black hover:cursor-pointer transition-all">
        {children}
      </span>
    </button>
  );
}
