"use client";

export default function TarjetaCuestionario() {
  return (
    <div className="border border-zinc-200 rounded-lg overflow-hidden bg-lime-400 p-4 flex flex-col gap-3 group cursor-pointer hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-black flex items-center justify-center">
            ✕
          </span>
          <span className="w-6 h-6 rounded-md bg-emerald-600 text-white text-xs font-black flex items-center justify-center">
            ✓
          </span>
        </div>
        <span className="text-[10px] font-black uppercase text-black tracking-widest bg-black/10 px-2 py-0.5 rounded-full">
          QUIZ SEMANAL
        </span>
      </div>

      <h4 className="font-serif text-2xl font-black uppercase tracking-tight text-black leading-none mt-1">
        PON A PRUEBA<br />TUS DATOS
      </h4>

      <p className="text-xs font-bold text-black/80">
        Evalúa qué tanto sabes sobre las historias económicas de esta semana.
      </p>
    </div>
  );
}
