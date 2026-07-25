"use client";

export default function HistoriasColumnistas() {
  const columnistsRow1 = [
    { title: "Las oportunidades de tecnología limpia que estamos dejando pasar", author: "Por Renata Vidal, Columnista" },
    { title: "Cómo arreglar el sistema de pensiones en pocas palabras", author: "Por Ismael Duarte, Columnista" },
    { title: "El esfuerzo de reconstrucción encuentra un nuevo impulso", author: "Por Bruno Escalante, Columnista" },
  ];

  const columnistsRow2 = [
    { title: "El costo oculto de posponer la reforma fiscal", author: "Por Renata Vidal, Columnista" },
    { title: "Lo que revelan los mercados sobre la confianza empresarial", author: "Por Ismael Duarte, Columnista" },
    { title: "Por qué las pequeñas empresas necesitan mejores herramientas digitales", author: "Por Bruno Escalante, Columnista" },
  ];

  return (
    <div className="flex flex-col gap-8 pt-4">
      {/* 2 Fila de Historias Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-zinc-200 pb-8">

        <article className="flex flex-col group cursor-pointer md:border-r md:border-zinc-200 md:pr-6">
          <div className="aspect-[16/10] w-full mb-3 rounded-sm overflow-hidden border border-zinc-200 relative bg-gradient-to-br from-zinc-200 to-zinc-400" />
          <h3 className="font-serif text-2xl font-black leading-tight text-zinc-950 group-hover:text-blue-700 transition-colors">
            La brecha de seguridad de un asistente de IA muestra lo difícil que es contenerla
          </h3>
          <p className="text-xs text-blue-600 font-bold mt-2">
            Por Camila Reyes, Columnista
          </p>
        </article>

        <article className="flex flex-col group cursor-pointer">
          <div className="aspect-[16/10] w-full mb-3 rounded-sm overflow-hidden border border-zinc-200 relative bg-gradient-to-br from-zinc-200 to-zinc-400" />
          <h3 className="font-serif text-2xl font-black leading-tight text-zinc-950 group-hover:text-blue-700 transition-colors">
            Hay una mejor manera de modernizar el padrón electoral
          </h3>
          <p className="text-xs text-blue-600 font-bold mt-2">
            Por Ricardo Salas, Columnista
          </p>
        </article>

      </div>

      {/* Fila 1 de Columnistas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-200 pb-6">
        {columnistsRow1.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-400 border border-zinc-200 flex-shrink-0" />
            <div className="flex flex-col">
              <h4 className="text-xs font-bold leading-snug text-zinc-950 group-hover:text-blue-700">
                {item.title}
              </h4>
              <span className="text-[10px] text-blue-600 font-semibold mt-1">
                {item.author}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Fila 2 de Columnistas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columnistsRow2.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-400 border border-zinc-200 flex-shrink-0" />
            <div className="flex flex-col">
              <h4 className="text-xs font-bold leading-snug text-zinc-950 group-hover:text-blue-700">
                {item.title}
              </h4>
              <span className="text-[10px] text-blue-600 font-semibold mt-1">
                {item.author}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
