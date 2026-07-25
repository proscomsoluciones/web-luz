"use client";

export default function HistoriaPrincipalOpinion() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-black uppercase tracking-wider text-black font-sans">
        Segunda Derivada Opinión
      </span>

      {/* Artículo Principal Destacado */}
      <article className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6 border-b border-zinc-200">
        <div className="md:col-span-6 aspect-[4/3] w-full overflow-hidden border border-zinc-200 relative bg-gradient-to-br from-zinc-200 to-zinc-400 rounded-sm" />
        <div className="md:col-span-6 flex flex-col justify-center pt-2">
          <h2 className="font-serif text-3xl md:text-4xl font-black leading-tight text-zinc-950 group-hover:text-blue-700 transition-colors mb-2">
            El arancel más absurdo del año se volvió todavía más absurdo
          </h2>
          <p className="text-xs text-blue-600 font-bold">
            Por Andrea Solís, Columnista
          </p>
        </div>
      </article>
    </div>
  );
}
