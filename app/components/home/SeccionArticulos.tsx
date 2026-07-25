"use client";

export default function SeccionArticulos() {
  const articulos = [
    { title: "Cómo una minera en dificultades se convirtió en una compañía de un billón de dólares" },
    { title: "Cómo los centros de datos impulsan la demanda de energía nuclear" },
    { title: "Cómo el futuro del comercio marítimo pone a prueba el equilibrio regional" },
    { title: "Por qué los nuevos controles fronterizos digitales generan demoras" },
  ];

  return (
    <div className="border-t border-zinc-200 mt-10 pt-8">
      <h3 className="font-sans text-lg font-black uppercase text-zinc-900 mb-6">
        Artículos
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {articulos.map((article, idx) => (
          <article key={idx} className="flex flex-col">
            <div className="aspect-video w-full mb-3 rounded-md overflow-hidden relative border border-zinc-200 bg-gradient-to-br from-zinc-200 to-zinc-350" />
            <h4 className="text-xs font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
              {article.title}
            </h4>
          </article>
        ))}
      </div>
    </div>
  );
}
