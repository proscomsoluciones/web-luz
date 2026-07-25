"use client";

export default function SubEncabezadoOpinion() {
  return (
    <div className="w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 pt-6 pb-2">
        <div className="flex flex-col gap-3">
          <h1 className="font-serif text-5xl md:text-6xl font-black tracking-tight text-blue-600 leading-none">
            Opinion
          </h1>
          {/* Sub-Navegación de Categorías */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-zinc-650 border-t border-zinc-200 pt-3 mt-1">
            <a href="#" className="hover:text-black transition-colors">Business</a>
            <a href="#" className="hover:text-black transition-colors">Finance</a>
            <a href="#" className="hover:text-black transition-colors">Economics</a>
            <a href="#" className="hover:text-black transition-colors">Markets</a>
            <a href="#" className="hover:text-black transition-colors">Politics & Policy</a>
            <a href="#" className="hover:text-black transition-colors">Technology & Ideas</a>
            <a href="#" className="hover:text-black transition-colors">Culture</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
