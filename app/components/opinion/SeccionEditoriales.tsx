"use client";

export default function SeccionEditoriales() {
  return (
    <div className="border-t border-zinc-200 mt-10 pt-8">
      <h3 className="font-sans text-lg font-black uppercase text-zinc-900 mb-6">
        Editorials
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Editorial Principal Destacado (8 columnas) */}
        <article className="md:col-span-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start group cursor-pointer border-b md:border-b-0 border-zinc-200 pb-6 md:pb-0">
          <div className="sm:col-span-6 aspect-[4/3] w-full rounded-sm overflow-hidden border border-zinc-200 relative bg-zinc-50">
            <img 
              src="/federal_reserve.png" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" 
              alt="Kevin Warsh" 
            />
            <div className="absolute bottom-1 right-2 text-[9px] text-zinc-400 font-medium bg-black/60 px-1 py-0.5 text-white">
              Daniel Acker/Segunda Derivada
            </div>
          </div>
          <div className="sm:col-span-6 flex flex-col justify-center">
            <h3 className="font-serif text-2xl md:text-3xl font-black leading-tight text-zinc-950 group-hover:text-blue-700 transition-colors mb-2">
              Kevin Warsh Has Breathing Space, For Now
            </h3>
            <span className="text-xs text-blue-600 font-bold">
              Editorial Board
            </span>
          </div>
        </article>

        {/* Lista de Editoriales Secundarios (4 columnas) */}
        <div className="md:col-span-4 flex flex-col divide-y divide-zinc-200">
          <article className="pb-4 group cursor-pointer">
            <span className="text-xs text-blue-600 font-bold block mb-1">
              Editorial Board
            </span>
            <h4 className="text-sm font-bold text-zinc-950 leading-snug group-hover:text-blue-700">
              The US Should Keep Its Eyes on the Endgame in Iran
            </h4>
          </article>

          <article className="pt-4 group cursor-pointer">
            <span className="text-xs text-blue-600 font-bold block mb-1">
              Michael R. Bloomberg
            </span>
            <h4 className="text-sm font-bold text-zinc-950 leading-snug group-hover:text-blue-700">
              Government-Owned AI Is a Terrible Idea
            </h4>
          </article>
        </div>

      </div>
    </div>
  );
}
