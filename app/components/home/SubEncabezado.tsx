"use client";

export default function SubEncabezado() {
  return (
    <div className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 pt-6 pb-2">
        <div className="flex flex-col gap-3">
          <h1 className="font-serif text-5xl md:text-6xl font-black tracking-tight text-black leading-none">
            Economía
          </h1>
          {/* Enlaces de sub-navegación */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-zinc-650 border-t border-zinc-200 pt-3 mt-1">
            <a href="#" className="hover:text-black transition-colors">Indicadores</a>
            <a href="#" className="hover:text-black transition-colors">Bancos Centrales</a>
            <a href="#" className="hover:text-black transition-colors">Empleo</a>
            <a href="#" className="hover:text-black transition-colors">Comercio</a>
            <a href="#" className="hover:text-black transition-colors">Impuestos y Gasto</a>
            <a href="#" className="hover:text-black transition-colors">Inflación y Precios</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
