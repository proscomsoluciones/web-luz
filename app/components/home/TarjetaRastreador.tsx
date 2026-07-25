"use client";

export default function TarjetaRastreador() {
  return (
    <div className="border-t border-zinc-200 pt-6">
      <h4 className="text-[11px] font-black uppercase text-zinc-500 tracking-wider mb-3">
        Seguimiento Arancelario
      </h4>
      <article className="group cursor-pointer">
        <div className="aspect-[16/10] w-full rounded-md mb-3 overflow-hidden relative border border-zinc-200 bg-gradient-to-br from-zinc-300 to-zinc-500" />
        <h3 className="font-serif text-lg font-black leading-tight text-black group-hover:text-blue-600 transition-colors">
          El impacto de los aranceles en la economía global
        </h3>
        <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
          La imprevisibilidad y el riesgo de un debilitamiento financiero llevan a las empresas a prepararse para un entorno más agresivo.
        </p>
      </article>
    </div>
  );
}
