"use client";

export default function SeccionBoletinesOpinion() {
  const newsletters = [
    { author: "Andrea Solís | Columnista", title: "La pregunta sobre el petróleo que realmente importa para las bolsas" },
    { author: "Ismael Duarte | Columnista", title: "¿La IA robará empleos? Ya se robó la búsqueda de empleo" },
    { author: "Camila Reyes | Columnista", title: "La bolsa local ampliará su horario de operación" },
    { author: "Andrea Solís | Columnista", title: "El ajuste fiscal de los 2000 no tiene por qué repetirse" },
  ];

  return (
    <div className="border-t border-zinc-200 mt-10 pt-8">
      <h3 className="font-sans text-lg font-black uppercase text-zinc-900 mb-6">
        Newsletters
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {newsletters.map((item, idx) => (
          <article key={idx} className="flex flex-col group cursor-pointer">
            <div className="aspect-video w-full mb-3 rounded-md overflow-hidden relative border border-zinc-200 bg-gradient-to-br from-zinc-200 to-zinc-400" />
            <span className="text-[11px] text-blue-600 font-bold mb-1">
              {item.author}
            </span>
            <h4 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600">
              {item.title}
            </h4>
          </article>
        ))}
      </div>
    </div>
  );
}
